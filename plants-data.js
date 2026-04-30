// ============================================
// QQ农场经典 - 植物数据库（基于最新数据）
// 数据来源：419g.com 作物查询接口（2026-04-23）
// 包含单季和双季植物共 200+ 种，所有数值为最终值
// 活动植物（艾草、荷包牡丹、昙花、蔷薇、风信子、蝴蝶兰、爱心果、银杏树苗、新春红包）已重置为 0
// 已移除 emoji、category 字段，land 统一为 "any"
// ============================================

const LAND_TYPES = {
    normal: { id: "normal", name: "普通土地", emoji: "🟫", level: 0, yieldBonus: 0, timeBonus: 0, expBonus: 0 },
    red:    { id: "red",    name: "红土地",   emoji: "🔴", level: 28, yieldBonus: 1.00, timeBonus: 0, expBonus: 0 },
    black:  { id: "black",  name: "黑土地",   emoji: "⬛", level: 40, yieldBonus: 2.00, timeBonus: 0.20, expBonus: 0 },
    gold:   { id: "gold",   name: "金土地",   emoji: "🟡", level: 58, yieldBonus: 3.00, timeBonus: 0.20, expBonus: 0.20 },
    purple: { id: "purple", name: "紫土地",   emoji: "🟣", level: 90, yieldBonus: 3.00, timeBonus: 0.20, expBonus: 0.25 }
};

const PLANTS_DATABASE = {
    // ========== 单季植物 ==========
    "白萝卜": { name: "白萝卜", level: 1, seedPrice: 2, sellPrice: 10, exp: 1, firstTime: 1/60, reTime: 0, seasons: 1, land: "any" },
    "胡萝卜": { name: "胡萝卜", level: 2, seedPrice: 4, sellPrice: 20, exp: 2, firstTime: 2/60, reTime: 0, seasons: 1, land: "any" },
    "大白菜": { name: "大白菜", level: 3, seedPrice: 10, sellPrice: 40, exp: 5, firstTime: 5/60, reTime: 0, seasons: 1, land: "any" },
    "大蒜": { name: "大蒜", level: 4, seedPrice: 20, sellPrice: 100, exp: 10, firstTime: 10/60, reTime: 0, seasons: 1, land: "any" },
    "大葱": { name: "大葱", level: 5, seedPrice: 42, sellPrice: 210, exp: 20, firstTime: 20/60, reTime: 0, seasons: 1, land: "any" },
    "水稻": { name: "水稻", level: 6, seedPrice: 84, sellPrice: 420, exp: 41, firstTime: 40/60, reTime: 0, seasons: 1, land: "any" },
    "小麦": { name: "小麦", level: 7, seedPrice: 126, sellPrice: 600, exp: 62, firstTime: 1, reTime: 0, seasons: 1, land: "any" },
    "玉米": { name: "玉米", level: 8, seedPrice: 168, sellPrice: 840, exp: 82, firstTime: 1.33, reTime: 0, seasons: 1, land: "any" },
    "鲜姜": { name: "鲜姜", level: 9, seedPrice: 223, sellPrice: 1080, exp: 106, firstTime: 1.67, reTime: 0, seasons: 1, land: "any" },
    "土豆": { name: "土豆", level: 10, seedPrice: 268, sellPrice: 1320, exp: 128, firstTime: 2, reTime: 0, seasons: 1, land: "any" },
    "小白菜": { name: "小白菜", level: 11, seedPrice: 335, sellPrice: 1600, exp: 160, firstTime: 2.5, reTime: 0, seasons: 1, land: "any" },
    "生菜": { name: "生菜", level: 12, seedPrice: 402, sellPrice: 2000, exp: 192, firstTime: 3, reTime: 0, seasons: 1, land: "any" },
    "油菜": { name: "油菜", level: 13, seedPrice: 576, sellPrice: 2800, exp: 272, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "茄子": { name: "茄子", level: 14, seedPrice: 1152, sellPrice: 5600, exp: 544, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "红枣": { name: "红枣", level: 15, seedPrice: 1728, sellPrice: 8600, exp: 816, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "蒲公英": { name: "蒲公英", level: 16, seedPrice: 3456, sellPrice: 17200, exp: 1632, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "银莲花": { name: "银莲花", level: 17, seedPrice: 640, sellPrice: 3200, exp: 288, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "番茄": { name: "番茄", level: 18, seedPrice: 1280, sellPrice: 6400, exp: 576, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "花菜": { name: "花菜", level: 19, seedPrice: 1920, sellPrice: 9600, exp: 864, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "韭菜": { name: "韭菜", level: 20, seedPrice: 3840, sellPrice: 19200, exp: 1728, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "小雏菊": { name: "小雏菊", level: 21, seedPrice: 704, sellPrice: 3400, exp: 304, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "豌豆": { name: "豌豆", level: 22, seedPrice: 1408, sellPrice: 7000, exp: 608, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "莲藕": { name: "莲藕", level: 23, seedPrice: 2112, sellPrice: 10400, exp: 912, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "红玫瑰": { name: "红玫瑰", level: 24, seedPrice: 4224, sellPrice: 21000, exp: 1824, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "秋菊（黄色）": { name: "秋菊（黄色）", level: 25, seedPrice: 792, sellPrice: 3800, exp: 324, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "满天星": { name: "满天星", level: 26, seedPrice: 1584, sellPrice: 7800, exp: 648, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "含羞草": { name: "含羞草", level: 27, seedPrice: 2376, sellPrice: 11800, exp: 972, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "牵牛花": { name: "牵牛花", level: 28, seedPrice: 4752, sellPrice: 23600, exp: 1944, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "秋菊（红色）": { name: "秋菊（红色）", level: 29, seedPrice: 888, sellPrice: 4400, exp: 344, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "新春红包": { name: "新春红包", level: 0, seedPrice: 0, sellPrice: 0, exp: 0, firstTime: 8, reTime: 0, seasons: 1, land: "any" },  // 活动植物，数值归零
    "辣椒": { name: "辣椒", level: 30, seedPrice: 1776, sellPrice: 8800, exp: 688, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "黄瓜": { name: "黄瓜", level: 31, seedPrice: 2664, sellPrice: 13200, exp: 1032, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "芹菜": { name: "芹菜", level: 32, seedPrice: 5328, sellPrice: 26600, exp: 2064, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "天香百合": { name: "天香百合", level: 33, seedPrice: 992, sellPrice: 4800, exp: 368, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "南瓜": { name: "南瓜", level: 34, seedPrice: 1984, sellPrice: 9800, exp: 736, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "核桃": { name: "核桃", level: 35, seedPrice: 2976, sellPrice: 14800, exp: 1104, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "山楂": { name: "山楂", level: 36, seedPrice: 5952, sellPrice: 29600, exp: 2208, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "菠菜": { name: "菠菜", level: 37, seedPrice: 1120, sellPrice: 5600, exp: 392, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "草莓": { name: "草莓", level: 38, seedPrice: 2240, sellPrice: 11200, exp: 784, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "苹果": { name: "苹果", level: 39, seedPrice: 3360, sellPrice: 16800, exp: 1176, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "四叶草": { name: "四叶草", level: 40, seedPrice: 6720, sellPrice: 33600, exp: 2352, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "非洲菊": { name: "非洲菊", level: 41, seedPrice: 1248, sellPrice: 6200, exp: 420, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "火绒草": { name: "火绒草", level: 42, seedPrice: 2496, sellPrice: 12400, exp: 840, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "花香根鸢尾": { name: "花香根鸢尾", level: 43, seedPrice: 3744, sellPrice: 18600, exp: 1260, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "虞美人": { name: "虞美人", level: 44, seedPrice: 7488, sellPrice: 37400, exp: 2520, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "向日葵": { name: "向日葵", level: 45, seedPrice: 1400, sellPrice: 7000, exp: 448, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "西瓜": { name: "西瓜", level: 46, seedPrice: 2800, sellPrice: 14000, exp: 896, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "黄豆": { name: "黄豆", level: 47, seedPrice: 4200, sellPrice: 21000, exp: 1344, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "香蕉": { name: "香蕉", level: 48, seedPrice: 8400, sellPrice: 42000, exp: 2688, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "竹笋": { name: "竹笋", level: 49, seedPrice: 1560, sellPrice: 7800, exp: 476, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "桃子": { name: "桃子", level: 50, seedPrice: 3120, sellPrice: 15600, exp: 952, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "甘蔗": { name: "甘蔗", level: 51, seedPrice: 4680, sellPrice: 23400, exp: 1428, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "橙子": { name: "橙子", level: 52, seedPrice: 9360, sellPrice: 46800, exp: 2856, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "茉莉花": { name: "茉莉花", level: 53, seedPrice: 1728, sellPrice: 8600, exp: 508, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "葡萄": { name: "葡萄", level: 54, seedPrice: 3456, sellPrice: 17200, exp: 1016, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "丝瓜": { name: "丝瓜", level: 55, seedPrice: 5184, sellPrice: 25800, exp: 1542, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "榛子": { name: "榛子", level: 56, seedPrice: 10368, sellPrice: 51800, exp: 3048, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "迎春花": { name: "迎春花", level: 57, seedPrice: 1920, sellPrice: 9600, exp: 540, firstTime: 4, reTime: 0, seasons: 1, land: "any" },
    "石榴": { name: "石榴", level: 58, seedPrice: 3840, sellPrice: 19200, exp: 1080, firstTime: 8, reTime: 0, seasons: 1, land: "any" },
    "栗子": { name: "栗子", level: 59, seedPrice: 5760, sellPrice: 28800, exp: 1620, firstTime: 12, reTime: 0, seasons: 1, land: "any" },
    "柚子": { name: "柚子", level: 60, seedPrice: 11520, sellPrice: 57600, exp: 3240, firstTime: 24, reTime: 0, seasons: 1, land: "any" },
    "荷包牡丹": { name: "荷包牡丹", level: 0, seedPrice: 0, sellPrice: 0, exp: 0, firstTime: 8, reTime: 4, seasons: 2, land: "any" },  // 活动植物，数值归零
    "蘑菇": { name: "蘑菇", level: 61, seedPrice: 3168, sellPrice: 15600, exp: 429, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "银杏树苗": { name: "银杏树苗", level: 0, seedPrice: 0, sellPrice: 0, exp: 0, firstTime: 8, reTime: 4, seasons: 2, land: "any" },  // 活动植物，数值归零
    "风信子": { name: "风信子", level: 0, seedPrice: 0, sellPrice: 0, exp: 0, firstTime: 8, reTime: 4, seasons: 2, land: "any" },    // 活动植物，数值归零
    "艾草": { name: "艾草", level: 0, seedPrice: 0, sellPrice: 0, exp: 0, firstTime: 8, reTime: 4, seasons: 2, land: "any" },      // 活动植物，数值归零
    "昙花": { name: "昙花", level: 0, seedPrice: 0, sellPrice: 0, exp: 0, firstTime: 8, reTime: 4, seasons: 2, land: "any" },      // 活动植物，数值归零
    "蔷薇": { name: "蔷薇", level: 0, seedPrice: 0, sellPrice: 0, exp: 0, firstTime: 8, reTime: 4, seasons: 2, land: "any" },      // 活动植物，数值归零
    "蝴蝶兰": { name: "蝴蝶兰", level: 0, seedPrice: 0, sellPrice: 0, exp: 0, firstTime: 8, reTime: 4, seasons: 2, land: "any" }, // 活动植物，数值归零
    "爱心果": { name: "爱心果", level: 0, seedPrice: 0, sellPrice: 0, exp: 0, firstTime: 8, reTime: 4, seasons: 2, land: "any" },   // 活动植物，数值归零
    "菠萝": { name: "菠萝", level: 62, seedPrice: 6336, sellPrice: 31600, exp: 858, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "箬竹": { name: "箬竹", level: 63, seedPrice: 9504, sellPrice: 47200, exp: 1287, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "无花果": { name: "无花果", level: 64, seedPrice: 19008, sellPrice: 94800, exp: 2574, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "椰子": { name: "椰子", level: 65, seedPrice: 3492, sellPrice: 17200, exp: 456, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "花生": { name: "花生", level: 66, seedPrice: 6984, sellPrice: 34800, exp: 912, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "金针菇": { name: "金针菇", level: 67, seedPrice: 10476, sellPrice: 52000, exp: 1368, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "葫芦": { name: "葫芦", level: 68, seedPrice: 20952, sellPrice: 104400, exp: 2736, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "猕猴桃": { name: "猕猴桃", level: 69, seedPrice: 3828, sellPrice: 18800, exp: 480, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "梨": { name: "梨", level: 70, seedPrice: 7656, sellPrice: 38000, exp: 960, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "睡莲": { name: "睡莲", level: 71, seedPrice: 11484, sellPrice: 57200, exp: 1440, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "火龙果": { name: "火龙果", level: 72, seedPrice: 22968, sellPrice: 114800, exp: 2880, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "枇杷": { name: "枇杷", level: 73, seedPrice: 4176, sellPrice: 20800, exp: 510, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "樱桃": { name: "樱桃", level: 74, seedPrice: 8352, sellPrice: 41600, exp: 1020, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "李子": { name: "李子", level: 75, seedPrice: 12528, sellPrice: 62400, exp: 1530, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "荔枝": { name: "荔枝", level: 76, seedPrice: 25056, sellPrice: 125200, exp: 3060, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "香瓜": { name: "香瓜", level: 77, seedPrice: 4560, sellPrice: 22800, exp: 537, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "木瓜": { name: "木瓜", level: 78, seedPrice: 9120, sellPrice: 45600, exp: 1074, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "桂圆": { name: "桂圆", level: 79, seedPrice: 13680, sellPrice: 68400, exp: 1611, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "月柿": { name: "月柿", level: 80, seedPrice: 27360, sellPrice: 136800, exp: 3222, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "杨桃": { name: "杨桃", level: 81, seedPrice: 4944, sellPrice: 24400, exp: 567, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "哈密瓜": { name: "哈密瓜", level: 82, seedPrice: 9888, sellPrice: 49200, exp: 1134, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "桑葚": { name: "桑葚", level: 83, seedPrice: 14832, sellPrice: 74000, exp: 1701, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "柠檬": { name: "柠檬", level: 84, seedPrice: 29664, sellPrice: 148000, exp: 3402, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "芒果": { name: "芒果", level: 85, seedPrice: 5364, sellPrice: 26800, exp: 597, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "杨梅": { name: "杨梅", level: 86, seedPrice: 10728, sellPrice: 53600, exp: 1194, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "榴莲": { name: "榴莲", level: 87, seedPrice: 16092, sellPrice: 80400, exp: 1791, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "番石榴": { name: "番石榴", level: 88, seedPrice: 32184, sellPrice: 160800, exp: 3582, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "瓶子树": { name: "瓶子树", level: 89, seedPrice: 5796, sellPrice: 28800, exp: 627, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "蓝莓": { name: "蓝莓", level: 90, seedPrice: 11592, sellPrice: 57600, exp: 1254, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "猪笼草": { name: "猪笼草", level: 91, seedPrice: 17388, sellPrice: 86600, exp: 1881, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "山竹": { name: "山竹", level: 92, seedPrice: 34776, sellPrice: 173600, exp: 3762, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "曼陀罗华": { name: "曼陀罗华", level: 93, seedPrice: 6240, sellPrice: 31200, exp: 660, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "曼珠沙华": { name: "曼珠沙华", level: 94, seedPrice: 12480, sellPrice: 62400, exp: 1320, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "苦瓜": { name: "苦瓜", level: 95, seedPrice: 18720, sellPrice: 93600, exp: 1980, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "天堂鸟": { name: "天堂鸟", level: 96, seedPrice: 37440, sellPrice: 187200, exp: 3960, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "冬瓜": { name: "冬瓜", level: 97, seedPrice: 6720, sellPrice: 33600, exp: 693, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "豹皮花": { name: "豹皮花", level: 98, seedPrice: 13440, sellPrice: 67200, exp: 1386, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "杏子": { name: "杏子", level: 99, seedPrice: 20160, sellPrice: 100800, exp: 2079, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "金桔": { name: "金桔", level: 100, seedPrice: 40320, sellPrice: 201600, exp: 4158, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "红毛丹": { name: "红毛丹", level: 102, seedPrice: 7200, sellPrice: 36000, exp: 726, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "莴笋": { name: "莴笋", level: 104, seedPrice: 14400, sellPrice: 72000, exp: 1452, firstTime: 8, reTime: 8, seasons: 2, land: "any" },
    "芭蕉": { name: "芭蕉", level: 106, seedPrice: 21600, sellPrice: 108000, exp: 2178, firstTime: 12, reTime: 12, seasons: 2, land: "any" },
    "依米花": { name: "依米花", level: 108, seedPrice: 43200, sellPrice: 216000, exp: 4356, firstTime: 24, reTime: 24, seasons: 2, land: "any" },
    "番荔枝": { name: "番荔枝", level: 110, seedPrice: 7716, sellPrice: 38400, exp: 762, firstTime: 4, reTime: 4, seasons: 2, land: "any" },
    "大王花": { name: "大王花", level: 112, seedPrice: 15432, sellPrice: 76800, exp: 1524, firstTime: 8, reTime: 8, seasons: 2, land: "any" },
    "橄榄": { name: "橄榄", level: 114, seedPrice: 23148, sellPrice: 115600, exp: 2286, firstTime: 12, reTime: 12, seasons: 2, land: "any" },
    "人参果": { name: "人参果", level: 116, seedPrice: 46296, sellPrice: 231200, exp: 4572, firstTime: 24, reTime: 24, seasons: 2, land: "any" },
    "百香果": { name: "百香果", level: 118, seedPrice: 8244, sellPrice: 41200, exp: 795, firstTime: 4, reTime: 4, seasons: 2, land: "any" },
    "金花茶": { name: "金花茶", level: 120, seedPrice: 16488, sellPrice: 82400, exp: 1590, firstTime: 8, reTime: 8, seasons: 2, land: "any" },
    "灯笼果": { name: "灯笼果", level: 122, seedPrice: 24732, sellPrice: 123600, exp: 2385, firstTime: 12, reTime: 12, seasons: 2, land: "any" },
    "天山雪莲": { name: "天山雪莲", level: 124, seedPrice: 49464, sellPrice: 247200, exp: 4770, firstTime: 24, reTime: 24, seasons: 2, land: "any" },
    "芦荟": { name: "芦荟", level: 126, seedPrice: 8784, sellPrice: 43600, exp: 831, firstTime: 4, reTime: 4, seasons: 2, land: "any" },
    "金边灵芝": { name: "金边灵芝", level: 128, seedPrice: 17568, sellPrice: 87600, exp: 1662, firstTime: 8, reTime: 8, seasons: 2, land: "any" },
    "薄荷": { name: "薄荷", level: 130, seedPrice: 26352, sellPrice: 131600, exp: 2493, firstTime: 12, reTime: 12, seasons: 2, land: "any" },
    "何首乌": { name: "何首乌", level: 132, seedPrice: 52704, sellPrice: 263200, exp: 4986, firstTime: 24, reTime: 24, seasons: 2, land: "any" },
    "晚香玉": { name: "晚香玉", level: 134, seedPrice: 9360, sellPrice: 46800, exp: 867, firstTime: 4, reTime: 4, seasons: 2, land: "any" },
    "人参": { name: "人参", level: 136, seedPrice: 18720, sellPrice: 93600, exp: 1734, firstTime: 8, reTime: 8, seasons: 2, land: "any" },
    "鳄梨": { name: "鳄梨", level: 138, seedPrice: 28080, sellPrice: 140400, exp: 2601, firstTime: 12, reTime: 12, seasons: 2, land: "any" },
    "似血杜鹃": { name: "似血杜鹃", level: 140, seedPrice: 56160, sellPrice: 280800, exp: 5202, firstTime: 24, reTime: 24, seasons: 2, land: "any" },

    // ========== 新增高级植物 ==========
    "宋梅": { name: "宋梅", level: 164, seedPrice: 66960, sellPrice: 334800, exp: 5886, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "蓝铃花": { name: "蓝铃花", level: 162, seedPrice: 33440, sellPrice: 167200, exp: 2943, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "六月雪": { name: "六月雪", level: 160, seedPrice: 22344, sellPrice: 111600, exp: 1962, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "君子兰": { name: "君子兰", level: 158, seedPrice: 11172, sellPrice: 55600, exp: 981, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "兰花": { name: "兰花", level: 156, seedPrice: 63288, sellPrice: 316400, exp: 5670, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "月季花": { name: "月季花", level: 154, seedPrice: 31644, sellPrice: 158000, exp: 2835, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "宝华玉兰": { name: "宝华玉兰", level: 152, seedPrice: 21096, sellPrice: 105200, exp: 1890, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "艳蝶兰": { name: "艳蝶兰", level: 150, seedPrice: 10548, sellPrice: 52400, exp: 945, firstTime: 4, reTime: 2, seasons: 2, land: "any" },
    "马蹄莲": { name: "马蹄莲", level: 148, seedPrice: 59616, sellPrice: 298000, exp: 5436, firstTime: 24, reTime: 12, seasons: 2, land: "any" },
    "薰衣草": { name: "薰衣草", level: 146, seedPrice: 29808, sellPrice: 148800, exp: 2718, firstTime: 12, reTime: 6, seasons: 2, land: "any" },
    "郁金香": { name: "郁金香", level: 144, seedPrice: 19872, sellPrice: 99200, exp: 1812, firstTime: 8, reTime: 4, seasons: 2, land: "any" },
    "文殊兰": { name: "文殊兰", level: 142, seedPrice: 9936, sellPrice: 49600, exp: 906, firstTime: 4, reTime: 2, seasons: 2, land: "any" }
};

// ========== 数据规范化（补全缺失的 reTime） ==========
function normalizePlantRecord(plant) {
    if (!plant) return plant;
    if (plant.seasons > 1 && (!plant.reTime || plant.reTime === 0)) {
        plant.reTime = Math.round(plant.firstTime / 2 * 10) / 10;
    }
    if (plant.seasons === 1) plant.reTime = 0;
    return plant;
}
Object.keys(PLANTS_DATABASE).forEach(name => {
    normalizePlantRecord(PLANTS_DATABASE[name]);
});

// ========== 土地加成计算函数 ==========
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
    // 所有植物 land 均为 "any"，始终返回 true
    return true;
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

function searchPlants(keyword, landType = "normal") {
    if (!keyword) return Object.values(PLANTS_DATABASE);
    const kw = keyword.toLowerCase();
    return Object.values(PLANTS_DATABASE).filter(p => p.name.toLowerCase().includes(kw));
}