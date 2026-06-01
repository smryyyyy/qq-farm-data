# qq-farm-data 🌾

QQ经典农场植物图鉴-帮你找到最优作物

## 功能

- **作物图鉴** — 浏览全部作物信息，支持搜索和筛选
- **效率计算** — 输入等级、土地等级，一键选择最优种植作物
- **活动植物** — 内置 18 种活动植物，自动置底显示，优先排列普通作物

## 技术栈

- 纯前端，无框架依赖
- HTML + CSS

## 部署

云端部署：将项目文件放到任意静态服务器即可运行

本地部署：下载项目zip文件后，直接点击index.html即可运行


## 项目结构

```
├── index.html                 # 页面
├── style.css                  # 样式
├── app.js                     # 经验计算、作物排序等核心逻辑
├── plants-data.js             # 植物数据
└── README.md
```

## 数据说明

### 新增普通作物

编辑 `plants-data.js`，在 `PLANTS_DATABASE` 对象中添加：

```js
"作物名": { name: "作物名", level: 等级, seedPrice: 种子价, sellPrice: 售价, exp: 经验, firstTime: 成熟小时, reTime: 再熟小时, seasons: 季数, land: "any" }
```

参数说明：

| 字段 | 说明 | 示例 |
|------|------|------|
| `firstTime` | 首次成熟时间（小时） | `8` = 8小时 |
| `reTime` | 再成熟时间，单季填 `0` | `0` 或 `4` |
| `seasons` | 总季数 | `1` 或 `2` |
| `land` | 适用土地 | `"any"` |

### 新增活动植物

需要在 **两个文件** 中各加一处：

**1. `plants-data.js`** — 在 `活动植物` 区段添加数据：

```js
// ========== 活动植物 ==========
...
"作物名": { name: "作物名", level: 0, seedPrice: 0, sellPrice: 0, exp: 0, firstTime: 成熟小时, reTime: 0, seasons: 1, land: "any" }
```

> level、seedPrice、sellPrice、exp 全部填 0

**2. `app.js`** — 在 `SPECIAL_PLANT_LAST_ORDER` 数组末尾添加名称：

```js
const SPECIAL_PLANT_LAST_ORDER = [
    ..., '作物名'
];
```

> 同时更新注释中的数量，如 `（共N种）`→ `（共N+1种）`

## 许可证

GPL-3.0

---
