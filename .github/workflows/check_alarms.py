#!/usr/bin/env python3
"""
农场闹钟定时检查脚本
通过 GitHub Actions 每5分钟运行一次
检查 Gist 中到期的闹钟，通过 Server酱 推送通知
"""

import json
import os
import sys
from datetime import datetime, timezone, timedelta

try:
    import urllib.request
    import urllib.error
except ImportError:
    print("需要 Python 3 with urllib")
    sys.exit(1)

CST = timezone(timedelta(hours=8))
GH_TOKEN = os.environ.get("GH_TOKEN", "")
SEND_KEY = os.environ.get("SEND_KEY", "")
GIST_DESCRIPTION = "QQFarmTimer"
DATA_FILENAME = "data.json"
LEGACY_ALARMS_FILENAME = "alarms.json"


def github_api(path, method="GET", data=None):
    """调用 GitHub API"""
    url = f"https://api.github.com{path}"
    headers = {
        "Authorization": f"token {GH_TOKEN}",
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "QQFarmTimer-Bot",
    }
    body = None
    if data is not None:
        body = json.dumps(data).encode("utf-8")
        headers["Content-Type"] = "application/json"

    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        print(f"GitHub API 错误: {e.code} {e.reason}")
        if e.fp:
            print(e.fp.read().decode("utf-8")[:500])
        return None


def send_serverchan(title, desp):
    """通过 Server酱 发送微信通知"""
    if not SEND_KEY:
        print("未配置 SEND_KEY，跳过推送")
        return False
    url = f"https://sctapi.ftqq.com/{SEND_KEY}.send"
    params = urllib.parse.urlencode({"title": title, "desp": desp}).encode("utf-8")
    req = urllib.request.Request(url, data=params, method="POST")
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            if result.get("code") == 0:
                return True
            else:
                print(f"Server酱 返回错误: {result}")
                return False
    except Exception as e:
        print(f"Server酱 请求失败: {e}")
        return False


def main():
    now = datetime.now(CST)
    print(f"=== 农场闹钟检查 ===")
    print(f"当前时间: {now.strftime('%Y-%m-%d %H:%M:%S')}")

    if not GH_TOKEN:
        print("❌ 未配置 GH_TOKEN")
        sys.exit(1)

    # 1. 查找 Gist
    gists = github_api("/gists")
    if gists is None:
        print("❌ 获取 Gist 列表失败")
        sys.exit(1)

    gist_id = None
    for g in gists:
        if g.get("description") == GIST_DESCRIPTION:
            gist_id = g["id"]
            break

    if not gist_id:
        print("💤 未找到闹钟数据 Gist，跳过")
        return

    print(f"找到 Gist: {gist_id}")

    # 2. 读取闹钟数据
    gist = github_api(f"/gists/{gist_id}")
    if gist is None:
        print("❌ 读取 Gist 失败")
        return

    files = gist.get("files", {})
    # 兼容新版 data.json 和旧版 alarms.json
    data_file_name = None
    raw_content = None
    if DATA_FILENAME in files:
        data_file_name = DATA_FILENAME
        raw_content = files[DATA_FILENAME]["content"]
    elif LEGACY_ALARMS_FILENAME in files:
        data_file_name = LEGACY_ALARMS_FILENAME
        raw_content = files[LEGACY_ALARMS_FILENAME]["content"]

    if not raw_content:
        print("💤 闹钟文件不存在，跳过")
        return

    try:
        parsed = json.loads(raw_content)
    except json.JSONDecodeError:
        print("❌ 闹钟数据格式错误")
        return

    # 兼容旧版纯数组和新版 { alerts, history, customPlants, settings } 格式
    if isinstance(parsed, list):
        alarms = parsed
        cloud_history = []
        cloud_custom_plants = []
        cloud_settings = None
    else:
        alarms = parsed.get("alerts", [])
        cloud_history = parsed.get("history", [])
        cloud_custom_plants = parsed.get("customPlants", [])
        cloud_settings = parsed.get("settings", None)

    if not isinstance(alarms, list):
        alarms = []
    if not isinstance(cloud_history, list):
        cloud_history = []

    print(f"活动闹钟 {len(alarms)} 个，历史记录 {len(cloud_history)} 条")

    def parse_cloud_time(raw_value):
        if not raw_value:
            return None
        try:
            return datetime.fromisoformat(str(raw_value).replace("Z", "+00:00")).astimezone(CST)
        except (ValueError, TypeError):
            return None

    # 3. 检查到期闹钟
    notified_ids = set()
    history_notified_ids = set()
    expired_ids = set()
    existing_history_ids = {
        item.get("id")
        for item in cloud_history
        if isinstance(item, dict) and item.get("id")
    }

    for alarm in alarms:
        if not isinstance(alarm, dict) or not alarm.get("endTime"):
            continue

        end_time = parse_cloud_time(alarm.get("endTime"))
        if end_time is None:
            continue

        alarm_id = alarm.get("id")

        # 到期但未推送
        if end_time <= now and not alarm.get("pushNotified"):
            label = alarm.get("label", "定时器")
            message = f"**{label}** 成熟了！快去收菜！\n\n到期时间: {end_time.strftime('%H:%M')}"
            if alarm.get("plant"):
                message += f"\n作物: {alarm['plant']}"

            print(f"🔔 闹钟到期: {label}")
            if alarm_id and send_serverchan("🌾 农场收菜提醒", message):
                notified_ids.add(alarm_id)

        # 超过24小时过期，清理
        if alarm_id and end_time < now - timedelta(hours=24):
            expired_ids.add(alarm_id)

    # 4. 更新 Gist 数据（写入新版 data.json 格式，保留 history）
    updated_alarms = []
    for alarm in alarms:
        if not isinstance(alarm, dict):
            continue

        aid = alarm.get("id")
        if aid in expired_ids:
            continue
        if aid in notified_ids:
            alarm["pushNotified"] = True
            alarm["pushNotifiedAt"] = now.isoformat()
        updated_alarms.append(alarm)

        if aid in notified_ids and aid not in existing_history_ids:
            history_entry = {
                "id": aid,
                "label": alarm.get("label", "定时器"),
                "plant": alarm.get("plant", ""),
                "endTime": alarm.get("endTime", ""),
                "totalSeconds": alarm.get("totalSeconds", 0),
                "triggeredAt": now.isoformat(),
                "pushNotified": True,
                "pushNotifiedAt": now.isoformat(),
            }
            cloud_history.append(history_entry)
            existing_history_ids.add(aid)

    # 5. 给已归档到历史、但前端直发失败的闹钟做补发兜底
    for history_entry in cloud_history:
        if not isinstance(history_entry, dict) or history_entry.get("pushNotified"):
            continue

        hid = history_entry.get("id")
        if hid in notified_ids or hid in history_notified_ids:
            continue

        triggered_time = parse_cloud_time(history_entry.get("triggeredAt") or history_entry.get("endTime"))
        if triggered_time is None:
            continue

        if triggered_time < now - timedelta(hours=24):
            continue

        label = history_entry.get("label", "定时器")
        message = f"**{label}** 成熟了！快去收菜！\n\n触发时间: {triggered_time.strftime('%H:%M')}"
        if history_entry.get("plant"):
            message += f"\n作物: {history_entry['plant']}"

        print(f"📨 历史闹钟补发: {label}")
        if hid and send_serverchan("🌾 农场收菜提醒", message):
            history_entry["pushNotified"] = True
            history_entry["pushNotifiedAt"] = now.isoformat()
            history_notified_ids.add(hid)

    # 历史最多保留200条
    cloud_history = sorted(
        [item for item in cloud_history if isinstance(item, dict)],
        key=lambda item: item.get("triggeredAt") or item.get("endTime") or ""
    )[-200:]

    total_notified = len(notified_ids) + len(history_notified_ids)
    if total_notified or expired_ids:
        payload = {
            "alerts": updated_alarms,
            "history": cloud_history,
            "customPlants": cloud_custom_plants,
            "settings": cloud_settings,
        }
        update_data = {
            "files": {
                DATA_FILENAME: {"content": json.dumps(payload, ensure_ascii=False)}
            }
        }
        # 如果是旧版格式，同时删除旧文件
        if data_file_name == LEGACY_ALARMS_FILENAME:
            update_data["files"][LEGACY_ALARMS_FILENAME] = None

        result = github_api(f"/gists/{gist_id}", method="PATCH", data=update_data)
        if result:
            print(
                f"✅ 已更新 Gist（推送 {total_notified} 个，其中活动 {len(notified_ids)} 个 / 历史补发 {len(history_notified_ids)} 个，清理 {len(expired_ids)} 个）"
            )
        else:
            print("❌ 更新 Gist 失败")
    else:
        print("💤 没有需要处理的闹钟")


if __name__ == "__main__":
    import urllib.parse
    main()
