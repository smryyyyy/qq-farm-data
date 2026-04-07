// ============================================
// QQ农场经典 - 植物数据库 & 土地类型
// 数据来源：QQ经典农场游戏配置 (Plant.json + ItemInfo.json)
// 来源：github.com/panoptes88/qq-farm-bot
// 更新：2026-03-31 | 129种作物 | Lv.1-140
// 时间单位：小时(h)，普通土地(无加成)
// sellPrice = 果实单价 × 果实数量
// ============================================

const LAND_TYPES = {
    normal: { id: "normal", name: "普通土地", emoji: "🟫", level: 0, yieldBonus: 0, timeBonus: 0, expBonus: 0 },
    red:    { id: "red",    name: "红土地",   emoji: "🔴", level: 28, yieldBonus: 0.10, timeBonus: 0, expBonus: 0 },
    black:  { id: "black",  name: "黑土地",   emoji: "⬛", level: 40, yieldBonus: 0.20, timeBonus: 0.20, expBonus: 0 },
    gold:   { id: "gold",   name: "金土地",   emoji: "🟡", level: 58, yieldBonus: 0.28, timeBonus: 0.20, expBonus: 0.28 }
};

// level:解锁等级 seedPrice:种子价 sellPrice:果实总售价
// exp:经验 firstTime:首季成熟时间(h) reTime:再熟时间(h，默认按首季一半处理) seasons:季数
// land:"any"=所有 "red"=红土及以上 category:分类
const PLANTS_DATABASE = {

    // ===== 蔬菜 =====
    "白萝卜": { name: "白萝卜", emoji: "🥬", level: 1, seedPrice: 1, sellPrice: 10, exp: 1, firstTime: 0.02, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },
    "胡萝卜": { name: "胡萝卜", emoji: "🥕", level: 2, seedPrice: 2, sellPrice: 20, exp: 2, firstTime: 0.03, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },
    "大白菜": { name: "大白菜", emoji: "🥬", level: 3, seedPrice: 5, sellPrice: 40, exp: 5, firstTime: 0.08, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },
    "大蒜": { name: "大蒜", emoji: "🧄", level: 4, seedPrice: 10, sellPrice: 100, exp: 10, firstTime: 0.17, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },
    "大葱": { name: "大葱", emoji: "🧅", level: 5, seedPrice: 21, sellPrice: 210, exp: 20, firstTime: 0.33, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },

    // ===== 粮食 =====
    "水稻": { name: "水稻", emoji: "🌾", level: 6, seedPrice: 42, sellPrice: 420, exp: 41, firstTime: 0.67, reTime: 0, seasons: 1, land: "any", category: "粮食" },
    "小麦": { name: "小麦", emoji: "🌾", level: 7, seedPrice: 63, sellPrice: 600, exp: 62, firstTime: 1, reTime: 0, seasons: 1, land: "any", category: "粮食" },
    "玉米": { name: "玉米", emoji: "🌽", level: 8, seedPrice: 84, sellPrice: 840, exp: 82, firstTime: 1.33, reTime: 0, seasons: 1, land: "any", category: "粮食" },

    // ===== 蔬菜 =====
    "鲜姜": { name: "鲜姜", emoji: "🫚", level: 9, seedPrice: 111, sellPrice: 1080, exp: 106, firstTime: 1.67, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },
    "土豆": { name: "土豆", emoji: "🥔", level: 10, seedPrice: 134, sellPrice: 1320, exp: 128, firstTime: 2, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },
    "小白菜": { name: "小白菜", emoji: "🥬", level: 11, seedPrice: 167, sellPrice: 1600, exp: 160, firstTime: 2.5, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },
    "生菜": { name: "生菜", emoji: "🥬", level: 12, seedPrice: 201, sellPrice: 2000, exp: 192, firstTime: 3, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },

    // ===== 粮食 =====
    "油菜": { name: "油菜", emoji: "🫒", level: 13, seedPrice: 288, sellPrice: 2800, exp: 272, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "粮食" },

    // ===== 蔬菜 =====
    "茄子": { name: "茄子", emoji: "🍆", level: 14, seedPrice: 576, sellPrice: 5600, exp: 544, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },

    // ===== 水果 =====
    "红枣": { name: "红枣", emoji: "🔴", level: 15, seedPrice: 864, sellPrice: 8600, exp: 816, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "水果" },

    // ===== 花卉 =====
    "蒲公英": { name: "蒲公英", emoji: "🌼", level: 16, seedPrice: 1728, sellPrice: 17200, exp: 1632, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "花卉" },
    "银莲花": { name: "银莲花", emoji: "🌸", level: 17, seedPrice: 320, sellPrice: 3200, exp: 288, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "花卉" },

    // ===== 蔬菜 =====
    "番茄": { name: "番茄", emoji: "🍅", level: 18, seedPrice: 640, sellPrice: 6400, exp: 576, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },
    "花菜": { name: "花菜", emoji: "🥦", level: 19, seedPrice: 960, sellPrice: 9600, exp: 864, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },
    "韭菜": { name: "韭菜", emoji: "🥬", level: 20, seedPrice: 1920, sellPrice: 19200, exp: 1728, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },

    // ===== 花卉 =====
    "小雏菊": { name: "小雏菊", emoji: "🌼", level: 21, seedPrice: 352, sellPrice: 3400, exp: 304, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "花卉" },

    // ===== 红土作物 =====
    "昙花": { name: "昙花", emoji: "🌙", level: 21, seedPrice: 3360, sellPrice: 4032, exp: 840, firstTime: 8, reTime: 4, seasons: 2, land: "red", category: "红土作物" },

    // ===== 蔬菜 =====
    "豌豆": { name: "豌豆", emoji: "🫛", level: 22, seedPrice: 704, sellPrice: 7000, exp: 608, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },
    "莲藕": { name: "莲藕", emoji: "🪷", level: 23, seedPrice: 1056, sellPrice: 10400, exp: 912, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },

    // ===== 花卉 =====
    "红玫瑰": { name: "红玫瑰", emoji: "🌹", level: 24, seedPrice: 2112, sellPrice: 21000, exp: 1824, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "花卉" },
    "秋菊（黄色）": { name: "秋菊（黄色）", emoji: "🌼", level: 25, seedPrice: 396, sellPrice: 3800, exp: 324, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "花卉" },
    "满天星": { name: "满天星", emoji: "💐", level: 26, seedPrice: 792, sellPrice: 7800, exp: 648, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "花卉" },
    "含羞草": { name: "含羞草", emoji: "🌿", level: 27, seedPrice: 1188, sellPrice: 11800, exp: 972, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "花卉" },
    "牵牛花": { name: "牵牛花", emoji: "🌺", level: 28, seedPrice: 2376, sellPrice: 23600, exp: 1944, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "花卉" },
    "秋菊（红色）": { name: "秋菊（红色）", emoji: "🌼", level: 29, seedPrice: 444, sellPrice: 4400, exp: 344, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "花卉" },

    // ===== 作物 =====
    "新春红包": { name: "新春红包", emoji: "🧧", level: 30, seedPrice: 0, sellPrice: 20, exp: 688, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "作物" },

    // ===== 蔬菜 =====
    "辣椒": { name: "辣椒", emoji: "🌶️", level: 30, seedPrice: 888, sellPrice: 8800, exp: 688, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },

    // ===== 作物 =====
    "哈哈南瓜": { name: "哈哈南瓜", emoji: "🌱", level: 31, seedPrice: 28080, sellPrice: 35100, exp: 1, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "作物" },

    // ===== 蔬菜 =====
    "黄瓜": { name: "黄瓜", emoji: "🥒", level: 31, seedPrice: 1332, sellPrice: 13200, exp: 1032, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },
    "芹菜": { name: "芹菜", emoji: "🥬", level: 32, seedPrice: 2664, sellPrice: 26600, exp: 2064, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },

    // ===== 花卉 =====
    "天香百合": { name: "天香百合", emoji: "💐", level: 33, seedPrice: 496, sellPrice: 4800, exp: 368, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "花卉" },

    // ===== 蔬菜 =====
    "南瓜": { name: "南瓜", emoji: "🎃", level: 34, seedPrice: 992, sellPrice: 9800, exp: 736, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },

    // ===== 坚果 =====
    "核桃": { name: "核桃", emoji: "🌰", level: 35, seedPrice: 1488, sellPrice: 14800, exp: 1104, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "坚果" },

    // ===== 水果 =====
    "山楂": { name: "山楂", emoji: "🍎", level: 36, seedPrice: 2976, sellPrice: 29600, exp: 2208, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "水果" },

    // ===== 蔬菜 =====
    "菠菜": { name: "菠菜", emoji: "🥬", level: 37, seedPrice: 560, sellPrice: 5600, exp: 392, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },

    // ===== 水果 =====
    "草莓": { name: "草莓", emoji: "🍓", level: 38, seedPrice: 1120, sellPrice: 11200, exp: 784, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "水果" },
    "苹果": { name: "苹果", emoji: "🍎", level: 39, seedPrice: 1680, sellPrice: 16800, exp: 1176, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "水果" },

    // ===== 花卉 =====
    "四叶草": { name: "四叶草", emoji: "🍀", level: 40, seedPrice: 3360, sellPrice: 33600, exp: 2352, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "花卉" },
    "非洲菊": { name: "非洲菊", emoji: "🌻", level: 41, seedPrice: 624, sellPrice: 6200, exp: 420, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "花卉" },
    "火绒草": { name: "火绒草", emoji: "❄️", level: 42, seedPrice: 1248, sellPrice: 12400, exp: 840, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "花卉" },
    "花香根鸢尾": { name: "花香根鸢尾", emoji: "💜", level: 43, seedPrice: 1872, sellPrice: 18600, exp: 1260, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "花卉" },
    "虞美人": { name: "虞美人", emoji: "🌺", level: 44, seedPrice: 3744, sellPrice: 37400, exp: 2520, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "花卉" },

    // ===== 作物 =====
    "向日葵": { name: "向日葵", emoji: "🌻", level: 45, seedPrice: 700, sellPrice: 7000, exp: 448, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "作物" },

    // ===== 水果 =====
    "西瓜": { name: "西瓜", emoji: "🍉", level: 46, seedPrice: 1400, sellPrice: 14000, exp: 896, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "水果" },

    // ===== 粮食 =====
    "黄豆": { name: "黄豆", emoji: "🫘", level: 47, seedPrice: 2100, sellPrice: 21000, exp: 1344, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "粮食" },

    // ===== 水果 =====
    "香蕉": { name: "香蕉", emoji: "🍌", level: 48, seedPrice: 4200, sellPrice: 42000, exp: 2688, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "水果" },

    // ===== 作物 =====
    "竹笋": { name: "竹笋", emoji: "🎋", level: 49, seedPrice: 780, sellPrice: 7800, exp: 476, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "作物" },

    // ===== 水果 =====
    "桃子": { name: "桃子", emoji: "🍑", level: 50, seedPrice: 1560, sellPrice: 15600, exp: 952, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "水果" },

    // ===== 粮食 =====
    "甘蔗": { name: "甘蔗", emoji: "🎋", level: 51, seedPrice: 2340, sellPrice: 23400, exp: 1428, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "粮食" },

    // ===== 水果 =====
    "橙子": { name: "橙子", emoji: "🍊", level: 52, seedPrice: 4680, sellPrice: 46800, exp: 2856, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "水果" },

    // ===== 花卉 =====
    "茉莉花": { name: "茉莉花", emoji: "🤍", level: 53, seedPrice: 864, sellPrice: 8600, exp: 508, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "花卉" },

    // ===== 水果 =====
    "葡萄": { name: "葡萄", emoji: "🍇", level: 54, seedPrice: 1728, sellPrice: 17200, exp: 1016, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "水果" },

    // ===== 蔬菜 =====
    "丝瓜": { name: "丝瓜", emoji: "🥒", level: 55, seedPrice: 2592, sellPrice: 25800, exp: 1524, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "蔬菜" },

    // ===== 坚果 =====
    "榛子": { name: "榛子", emoji: "🌰", level: 56, seedPrice: 5184, sellPrice: 51800, exp: 3048, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "坚果" },

    // ===== 花卉 =====
    "迎春花": { name: "迎春花", emoji: "🌼", level: 57, seedPrice: 960, sellPrice: 9600, exp: 540, firstTime: 4, reTime: 0, seasons: 1, land: "any", category: "花卉" },

    // ===== 水果 =====
    "石榴": { name: "石榴", emoji: "🍎", level: 58, seedPrice: 1920, sellPrice: 19200, exp: 1080, firstTime: 8, reTime: 0, seasons: 1, land: "any", category: "水果" },

    // ===== 坚果 =====
    "栗子": { name: "栗子", emoji: "🌰", level: 59, seedPrice: 2880, sellPrice: 28800, exp: 1620, firstTime: 12, reTime: 0, seasons: 1, land: "any", category: "坚果" },

    // ===== 作物 =====
    "柚子": { name: "柚子", emoji: "🍊", level: 60, seedPrice: 5760, sellPrice: 57600, exp: 3240, firstTime: 24, reTime: 0, seasons: 1, land: "any", category: "作物" },

    // ===== 红土作物 =====
    "荷包牡丹": { name: "荷包牡丹", emoji: "💗", level: 61, seedPrice: 13680, sellPrice: 8208, exp: 840, firstTime: 8, reTime: 4, seasons: 2, land: "red", category: "红土作物" },

    // ===== 花卉 =====
    "蘑菇": { name: "蘑菇", emoji: "🍄", level: 61, seedPrice: 1584, sellPrice: 7800, exp: 429, firstTime: 4, reTime: 2, seasons: 2, land: "any", category: "花卉" },

    // ===== 红土作物 =====
    "银杏树苗": { name: "银杏树苗", emoji: "🍂", level: 61, seedPrice: 5742, sellPrice: 3432, exp: 720, firstTime: 8, reTime: 4, seasons: 2, land: "red", category: "红土作物" },
    "风信子": { name: "风信子", emoji: "💜", level: 61, seedPrice: 1914, sellPrice: 1128, exp: 720, firstTime: 8, reTime: 4, seasons: 2, land: "red", category: "红土作物" },

    // ===== 水果 =====
    "菠萝": { name: "菠萝", emoji: "🍍", level: 62, seedPrice: 3168, sellPrice: 15800, exp: 858, firstTime: 8, reTime: 4, seasons: 2, land: "any", category: "水果" },

    // ===== 蔬菜 =====
    "箬竹": { name: "箬竹", emoji: "🎋", level: 63, seedPrice: 4752, sellPrice: 23600, exp: 1287, firstTime: 12, reTime: 6, seasons: 2, land: "any", category: "蔬菜" },

    // ===== 水果 =====
    "无花果": { name: "无花果", emoji: "🫐", level: 64, seedPrice: 9504, sellPrice: 47400, exp: 2574, firstTime: 24, reTime: 12, seasons: 2, land: "any", category: "水果" },
    "椰子": { name: "椰子", emoji: "🥥", level: 65, seedPrice: 1746, sellPrice: 8600, exp: 456, firstTime: 4, reTime: 2, seasons: 2, land: "any", category: "水果" },
    "花生": { name: "花生", emoji: "🥜", level: 66, seedPrice: 3492, sellPrice: 17400, exp: 912, firstTime: 8, reTime: 4, seasons: 2, land: "any", category: "水果" },

    // ===== 蔬菜 =====
    "金针菇": { name: "金针菇", emoji: "🍄", level: 67, seedPrice: 5238, sellPrice: 26000, exp: 1368, firstTime: 12, reTime: 6, seasons: 2, land: "any", category: "蔬菜" },

    // ===== 花卉 =====
    "葫芦": { name: "葫芦", emoji: "🫙", level: 68, seedPrice: 10476, sellPrice: 52200, exp: 2736, firstTime: 24, reTime: 12, seasons: 2, land: "any", category: "花卉" },

    // ===== 水果 =====
    "猕猴桃": { name: "猕猴桃", emoji: "🥝", level: 69, seedPrice: 1914, sellPrice: 9400, exp: 480, firstTime: 4, reTime: 2, seasons: 2, land: "any", category: "水果" },
    "梨": { name: "梨", emoji: "🍐", level: 70, seedPrice: 3828, sellPrice: 19000, exp: 960, firstTime: 8, reTime: 4, seasons: 2, land: "any", category: "水果" },

    // ===== 红土作物 =====
    "爱心果": { name: "爱心果", emoji: "❤️", level: 71, seedPrice: 69552, sellPrice: 166848, exp: 3840, firstTime: 8, reTime: 4, seasons: 2, land: "red", category: "红土作物" },

    // ===== 花卉 =====
    "睡莲": { name: "睡莲", emoji: "🪷", level: 71, seedPrice: 5742, sellPrice: 28600, exp: 1440, firstTime: 12, reTime: 6, seasons: 2, land: "any", category: "花卉" },

    // ===== 水果 =====
    "火龙果": { name: "火龙果", emoji: "🐉", level: 72, seedPrice: 11484, sellPrice: 57400, exp: 2880, firstTime: 24, reTime: 12, seasons: 2, land: "any", category: "水果" },
    "枇杷": { name: "枇杷", emoji: "🍑", level: 73, seedPrice: 2088, sellPrice: 10400, exp: 510, firstTime: 4, reTime: 2, seasons: 2, land: "any", category: "水果" },
    "樱桃": { name: "樱桃", emoji: "🍒", level: 74, seedPrice: 4176, sellPrice: 20800, exp: 1020, firstTime: 8, reTime: 4, seasons: 2, land: "any", category: "水果" },
    "李子": { name: "李子", emoji: "🫐", level: 75, seedPrice: 6264, sellPrice: 31200, exp: 1530, firstTime: 12, reTime: 6, seasons: 2, land: "any", category: "水果" },
    "荔枝": { name: "荔枝", emoji: "🔴", level: 76, seedPrice: 12528, sellPrice: 62600, exp: 3060, firstTime: 24, reTime: 12, seasons: 2, land: "any", category: "水果" },
    "香瓜": { name: "香瓜", emoji: "🍈", level: 77, seedPrice: 2280, sellPrice: 11400, exp: 537, firstTime: 4, reTime: 2, seasons: 2, land: "any", category: "水果" },
    "木瓜": { name: "木瓜", emoji: "🍈", level: 78, seedPrice: 4560, sellPrice: 22800, exp: 1074, firstTime: 8, reTime: 4, seasons: 2, land: "any", category: "水果" },
    "桂圆": { name: "桂圆", emoji: "🟤", level: 79, seedPrice: 6840, sellPrice: 34200, exp: 1611, firstTime: 12, reTime: 6, seasons: 2, land: "any", category: "水果" },
    "月柿": { name: "月柿", emoji: "🟠", level: 80, seedPrice: 13680, sellPrice: 68400, exp: 3222, firstTime: 24, reTime: 12, seasons: 2, land: "any", category: "水果" },
    "杨桃": { name: "杨桃", emoji: "⭐", level: 81, seedPrice: 2472, sellPrice: 12200, exp: 567, firstTime: 4, reTime: 2, seasons: 2, land: "any", category: "水果" },

    // ===== 红土作物 =====
    "蔷薇": { name: "蔷薇", emoji: "🌹", level: 81, seedPrice: 2898, sellPrice: 1728, exp: 720, firstTime: 8, reTime: 4, seasons: 2, land: "red", category: "红土作物" },
    "蝴蝶兰": { name: "蝴蝶兰", emoji: "🦋", level: 81, seedPrice: 8694, sellPrice: 5208, exp: 720, firstTime: 8, reTime: 4, seasons: 2, land: "red", category: "红土作物" },

    // ===== 水果 =====
    "哈密瓜": { name: "哈密瓜", emoji: "🍈", level: 82, seedPrice: 4944, sellPrice: 24600, exp: 1134, firstTime: 8, reTime: 4, seasons: 2, land: "any", category: "水果" },
    "桑葚": { name: "桑葚", emoji: "🫐", level: 83, seedPrice: 7416, sellPrice: 37000, exp: 1701, firstTime: 12, reTime: 6, seasons: 2, land: "any", category: "水果" },
    "柠檬": { name: "柠檬", emoji: "🍋", level: 84, seedPrice: 14832, sellPrice: 74000, exp: 3402, firstTime: 24, reTime: 12, seasons: 2, land: "any", category: "水果" },
    "芒果": { name: "芒果", emoji: "🥭", level: 85, seedPrice: 2682, sellPrice: 13400, exp: 597, firstTime: 4, reTime: 2, seasons: 2, land: "any", category: "水果" },
    "杨梅": { name: "杨梅", emoji: "🫐", level: 86, seedPrice: 5364, sellPrice: 26800, exp: 1194, firstTime: 8, reTime: 4, seasons: 2, land: "any", category: "水果" },
    "榴莲": { name: "榴莲", emoji: "🍈", level: 87, seedPrice: 8046, sellPrice: 40200, exp: 1791, firstTime: 12, reTime: 6, seasons: 2, land: "any", category: "水果" },
    "番石榴": { name: "番石榴", emoji: "🍐", level: 88, seedPrice: 16092, sellPrice: 80400, exp: 3582, firstTime: 24, reTime: 12, seasons: 2, land: "any", category: "水果" },

    // ===== 红土作物 =====
    "瓶子树": { name: "瓶子树", emoji: "🫙", level: 89, seedPrice: 2898, sellPrice: 14400, exp: 627, firstTime: 4, reTime: 2, seasons: 2, land: "red", category: "红土作物" },

    // ===== 水果 =====
    "蓝莓": { name: "蓝莓", emoji: "🫐", level: 90, seedPrice: 5796, sellPrice: 28800, exp: 1254, firstTime: 8, reTime: 4, seasons: 2, land: "any", category: "水果" },

    // ===== 红土作物 =====
    "猪笼草": { name: "猪笼草", emoji: "🌿", level: 91, seedPrice: 8694, sellPrice: 43400, exp: 1881, firstTime: 12, reTime: 6, seasons: 2, land: "red", category: "红土作物" },

    // ===== 水果 =====
    "山竹": { name: "山竹", emoji: "🟣", level: 92, seedPrice: 17388, sellPrice: 86800, exp: 3762, firstTime: 24, reTime: 12, seasons: 2, land: "any", category: "水果" },

    // ===== 花卉 =====
    "曼陀罗华": { name: "曼陀罗华", emoji: "🤍", level: 93, seedPrice: 3120, sellPrice: 15600, exp: 660, firstTime: 4, reTime: 2, seasons: 2, land: "any", category: "花卉" },

    // ===== 红土作物 =====
    "曼珠沙华": { name: "曼珠沙华", emoji: "🔴", level: 94, seedPrice: 6240, sellPrice: 31200, exp: 1320, firstTime: 8, reTime: 4, seasons: 2, land: "red", category: "红土作物" },

    // ===== 蔬菜 =====
    "苦瓜": { name: "苦瓜", emoji: "🥒", level: 95, seedPrice: 9360, sellPrice: 46800, exp: 1980, firstTime: 12, reTime: 6, seasons: 2, land: "any", category: "蔬菜" },

    // ===== 花卉 =====
    "天堂鸟": { name: "天堂鸟", emoji: "🐦", level: 96, seedPrice: 18720, sellPrice: 93600, exp: 3960, firstTime: 24, reTime: 12, seasons: 2, land: "any", category: "花卉" },

    // ===== 蔬菜 =====
    "冬瓜": { name: "冬瓜", emoji: "🥒", level: 97, seedPrice: 3360, sellPrice: 16800, exp: 693, firstTime: 4, reTime: 2, seasons: 2, land: "any", category: "蔬菜" },

    // ===== 花卉 =====
    "豹皮花": { name: "豹皮花", emoji: "🌸", level: 98, seedPrice: 6720, sellPrice: 33600, exp: 1386, firstTime: 8, reTime: 4, seasons: 2, land: "any", category: "花卉" },

    // ===== 水果 =====
    "杏子": { name: "杏子", emoji: "🍑", level: 99, seedPrice: 10080, sellPrice: 50400, exp: 2079, firstTime: 12, reTime: 6, seasons: 2, land: "any", category: "水果" },
    "金桔": { name: "金桔", emoji: "🍊", level: 100, seedPrice: 20160, sellPrice: 100800, exp: 4158, firstTime: 24, reTime: 12, seasons: 2, land: "any", category: "水果" },
    "红毛丹": { name: "红毛丹", emoji: "🔴", level: 102, seedPrice: 3600, sellPrice: 18000, exp: 726, firstTime: 4, reTime: 2, seasons: 2, land: "any", category: "水果" },

    // ===== 花卉 =====
    "宝华玉兰": { name: "宝华玉兰", emoji: "🌸", level: 104, seedPrice: 7200, sellPrice: 36000, exp: 1452, firstTime: 8, reTime: 8, seasons: 2, land: "any", category: "花卉" },

    // ===== 水果 =====
    "芭蕉": { name: "芭蕉", emoji: "🍌", level: 106, seedPrice: 10800, sellPrice: 54000, exp: 2178, firstTime: 12, reTime: 12, seasons: 2, land: "any", category: "水果" },

    // ===== 花卉 =====
    "依米花": { name: "依米花", emoji: "🌸", level: 108, seedPrice: 21600, sellPrice: 108000, exp: 4356, firstTime: 24, reTime: 24, seasons: 2, land: "any", category: "花卉" },

    // ===== 水果 =====
    "番荔枝": { name: "番荔枝", emoji: "🍎", level: 110, seedPrice: 3858, sellPrice: 19200, exp: 762, firstTime: 4, reTime: 4, seasons: 2, land: "any", category: "水果" },

    // ===== 花卉 =====
    "大王花": { name: "大王花", emoji: "🌺", level: 112, seedPrice: 7716, sellPrice: 38400, exp: 1524, firstTime: 8, reTime: 8, seasons: 2, land: "any", category: "花卉" },

    // ===== 水果 =====
    "橄榄": { name: "橄榄", emoji: "🫒", level: 114, seedPrice: 11574, sellPrice: 57800, exp: 2286, firstTime: 12, reTime: 12, seasons: 2, land: "any", category: "水果" },
    "人参果": { name: "人参果", emoji: "🌟", level: 116, seedPrice: 23148, sellPrice: 115600, exp: 4572, firstTime: 24, reTime: 24, seasons: 2, land: "any", category: "水果" },
    "百香果": { name: "百香果", emoji: "🟡", level: 118, seedPrice: 4122, sellPrice: 20600, exp: 795, firstTime: 4, reTime: 4, seasons: 2, land: "any", category: "水果" },

    // ===== 红土作物 =====
    "金花茶": { name: "金花茶", emoji: "🌼", level: 120, seedPrice: 8244, sellPrice: 41200, exp: 1590, firstTime: 8, reTime: 8, seasons: 2, land: "red", category: "红土作物" },

    // ===== 水果 =====
    "灯笼果": { name: "灯笼果", emoji: "🟠", level: 122, seedPrice: 12366, sellPrice: 61800, exp: 2385, firstTime: 12, reTime: 12, seasons: 2, land: "any", category: "水果" },

    // ===== 红土作物 =====
    "天山雪莲": { name: "天山雪莲", emoji: "🏔️", level: 124, seedPrice: 24732, sellPrice: 123600, exp: 4770, firstTime: 24, reTime: 24, seasons: 2, land: "red", category: "红土作物" },

    // ===== 花卉 =====
    "芦荟": { name: "芦荟", emoji: "🌿", level: 126, seedPrice: 4392, sellPrice: 21800, exp: 831, firstTime: 4, reTime: 4, seasons: 2, land: "any", category: "花卉" },

    // ===== 红土作物 =====
    "金边灵芝": { name: "金边灵芝", emoji: "✨", level: 128, seedPrice: 8784, sellPrice: 43800, exp: 1662, firstTime: 8, reTime: 8, seasons: 2, land: "red", category: "红土作物" },

    // ===== 花卉 =====
    "薄荷": { name: "薄荷", emoji: "🌿", level: 130, seedPrice: 13176, sellPrice: 65800, exp: 2493, firstTime: 12, reTime: 12, seasons: 2, land: "any", category: "花卉" },

    // ===== 红土作物 =====
    "何首乌": { name: "何首乌", emoji: "🌿", level: 132, seedPrice: 26352, sellPrice: 131600, exp: 4986, firstTime: 24, reTime: 24, seasons: 2, land: "red", category: "红土作物" },

    // ===== 水果 =====
    "菠萝蜜": { name: "菠萝蜜", emoji: "🍈", level: 134, seedPrice: 4680, sellPrice: 23400, exp: 867, firstTime: 4, reTime: 4, seasons: 2, land: "any", category: "水果" },

    // ===== 红土作物 =====
    "人参": { name: "人参", emoji: "🌿", level: 136, seedPrice: 9360, sellPrice: 46800, exp: 1734, firstTime: 8, reTime: 8, seasons: 2, land: "red", category: "红土作物" },

    // ===== 水果 =====
    "鳄梨": { name: "鳄梨", emoji: "🥑", level: 138, seedPrice: 14040, sellPrice: 70200, exp: 2601, firstTime: 12, reTime: 12, seasons: 2, land: "any", category: "水果" },

    // ===== 红土作物 =====
    "似血杜鹃": { name: "似血杜鹃", emoji: "🌺", level: 140, seedPrice: 28080, sellPrice: 140400, exp: 5202, firstTime: 24, reTime: 24, seasons: 2, land: "red", category: "红土作物" },
};

// ========== 成熟时间计算 ==========

function calcGrowTime(plantName, landType) {
    const plant = PLANTS_DATABASE[plantName];
    const land = LAND_TYPES[landType];
    if (!plant || !land) return 0;
    return Math.round(plant.firstTime * (1 - land.timeBonus) * 10) / 10;
}

function calcTotalGrowTime(plantName, landType) {
    const plant = PLANTS_DATABASE[plantName];
    const land = LAND_TYPES[landType];
    if (!plant || !land) return 0;
    const m = 1 - land.timeBonus;
    let total = plant.firstTime * m;
    if (plant.seasons > 1) total += plant.reTime * m * (plant.seasons - 1);
    return Math.round(total * 10) / 10;
}

function canPlantOnLand(plant, landType) {
    if (plant.land === "any") return true;
    const order = ["normal", "red", "black", "gold"];
    return order.indexOf(landType) >= order.indexOf(plant.land);
}

function getSeasonTimes(plantName, landType) {
    const plant = PLANTS_DATABASE[plantName];
    const land = LAND_TYPES[landType];
    if (!plant || !land) return [];
    const m = 1 - land.timeBonus;
    const times = [Math.round(plant.firstTime * m * 10) / 10];
    for (let i = 1; i < plant.seasons; i++) times.push(Math.round(plant.reTime * m * 10) / 10);
    return times;
}

// ========== 自定义植物管理 ==========

function normalizePlantRecord(plant, { isCustom = false } = {}) {
    if (!plant) return plant;
    if ((plant.firstTime === undefined || plant.firstTime === null) && plant.growthTime !== undefined) plant.firstTime = plant.growthTime;
    if (plant.seasons === undefined || plant.seasons === null) plant.seasons = 1;

    if (plant.seasons > 1) {
        const firstTime = Number(plant.firstTime) || 0;
        plant.reTime = Math.round(firstTime / 2 * 10) / 10;
    } else {
        plant.reTime = 0;
    }

    if (!plant.land) plant.land = "any";
    if (!plant.category) plant.category = isCustom ? "自定义" : "作物";
    if (!plant.emoji) plant.emoji = "🌱";
    if (plant.level === undefined || plant.level === null) plant.level = 0;
    if (plant.seedPrice === undefined || plant.seedPrice === null) plant.seedPrice = 0;
    if (plant.sellPrice === undefined || plant.sellPrice === null) plant.sellPrice = 0;
    if (plant.exp === undefined || plant.exp === null) plant.exp = 0;
    if (plant.growthTime === undefined || plant.growthTime === null) plant.growthTime = plant.firstTime || 0;
    if (isCustom) plant.isCustom = true;
    return plant;
}

function loadCustomPlants() {
    try {
        const data = JSON.parse(localStorage.getItem("farm-custom-plants")) || [];
        data.forEach(p => {
            if (p.name && !PLANTS_DATABASE[p.name]) {
                PLANTS_DATABASE[p.name] = normalizePlantRecord({
                    id: p.id || "custom_" + Date.now(),
                    name: p.name,
                    emoji: p.emoji || "🌱",
                    level: p.level ?? 0,
                    seedPrice: p.seedPrice ?? 100,
                    sellPrice: p.sellPrice ?? 200,
                    exp: p.exp ?? 10,
                    firstTime: p.firstTime,
                    reTime: p.reTime,
                    seasons: p.seasons,
                    land: p.land || "any",
                    category: p.category || "自定义",
                    isCustom: true
                }, { isCustom: true });
            }
        });
    } catch (e) { console.warn("加载自定义植物失败:", e); }
}

function saveCustomPlants() {
    const customs = Object.values(PLANTS_DATABASE).filter(p => p.isCustom);
    localStorage.setItem("farm-custom-plants", JSON.stringify(customs));
}

function addPlantToDatabase(name, firstTimeHours, seasons) {
    if (!name || firstTimeHours <= 0) return null;
    if (PLANTS_DATABASE[name]) { showToast(`❌ "${name}" 已存在（与内置或自定义植物重名）`); return null; }
    const reTime = seasons > 1 ? Math.round(firstTimeHours / 2 * 10) / 10 : 0;
    const plant = normalizePlantRecord({
        id: "custom_" + Date.now(), name, emoji: "🌱",
        level: 0, seedPrice: Math.round(firstTimeHours * 10), sellPrice: Math.round(firstTimeHours * 20),
        exp: Math.round(firstTimeHours),
        firstTime: firstTimeHours, reTime, seasons,
        land: "any", category: "自定义", isCustom: true
    }, { isCustom: true });
    PLANTS_DATABASE[name] = plant;
    saveCustomPlants();
    return plant;
}

function removePlantFromDatabase(name) {
    if (!PLANTS_DATABASE[name] || !PLANTS_DATABASE[name].isCustom) return;
    delete PLANTS_DATABASE[name];
    saveCustomPlants();
}

// ========== 兼容旧接口 ==========
Object.keys(PLANTS_DATABASE).forEach(name => {
    normalizePlantRecord(PLANTS_DATABASE[name]);
});

// ========== 查询工具函数 ==========

function getPlantsSortedByTime(landType = "normal") {
    return Object.values(PLANTS_DATABASE)
        .filter(p => canPlantOnLand(p, landType))
        .sort((a, b) => calcGrowTime(a.name, landType) - calcGrowTime(b.name, landType));
}

function findPlantsByTimeRange(minHours, maxHours, landType = "normal") {
    return Object.values(PLANTS_DATABASE)
        .filter(p => { if (!canPlantOnLand(p, landType)) return false; const t = calcGrowTime(p.name, landType); return t >= minHours && t <= maxHours; })
        .sort((a, b) => calcGrowTime(a.name, landType) - calcGrowTime(b.name, landType));
}

function findClosestPlant(targetHours, landType = "normal") {
    const plants = Object.values(PLANTS_DATABASE).filter(p => canPlantOnLand(p, landType));
    let closest = plants[0];
    let minDiff = Math.abs(calcGrowTime(plants[0].name, landType) - targetHours);
    plants.forEach(p => { const diff = Math.abs(calcGrowTime(p.name, landType) - targetHours); if (diff < minDiff) { minDiff = diff; closest = p; } });
    return { plant: closest, diff: minDiff };
}

function searchPlants(keyword, landType = "normal") {
    if (!keyword) return Object.values(PLANTS_DATABASE).filter(p => canPlantOnLand(p, landType));
    const kw = keyword.toLowerCase();
    return Object.values(PLANTS_DATABASE).filter(p =>
        (p.name.toLowerCase().includes(kw) || p.emoji.includes(kw)) && canPlantOnLand(p, landType)
    );
}
