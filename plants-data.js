// QQ农场经典植物数据库
// 包含植物名称、成熟时间（分钟）、经验值、金币等信息
const PLANTS_DATABASE = {
    // === 白萝卜（级别1解锁）===
    "白萝卜": {
        id: "white_radish",
        name: "白萝卜",
        emoji: "🥬",
        level: 1,
        seedPrice: 80,
        sellPrice: 140,
        exp: 10,
        growthTime: 10, // 10小时
        stages: 1,
        season: "all"
    },
    // === 红萝卜（级别1解锁）===
    "胡萝卜": {
        id: "carrot",
        name: "胡萝卜",
        emoji: "🥕",
        level: 1,
        seedPrice: 120,
        sellPrice: 250,
        exp: 14,
        growthTime: 10,
        stages: 1,
        season: "all"
    },
    // === 玉米（级别4解锁）===
    "玉米": {
        id: "corn",
        name: "玉米",
        emoji: "🌽",
        level: 4,
        seedPrice: 150,
        sellPrice: 310,
        exp: 16,
        growthTime: 11,
        stages: 1,
        season: "all"
    },
    // === 土豆（级别7解锁）===
    "土豆": {
        id: "potato",
        name: "土豆",
        emoji: "🥔",
        level: 7,
        seedPrice: 180,
        sellPrice: 380,
        exp: 18,
        growthTime: 12,
        stages: 1,
        season: "all"
    },
    // === 茄子（级别10解锁）===
    "茄子": {
        id: "eggplant",
        name: "茄子",
        emoji: "🍆",
        level: 10,
        seedPrice: 230,
        sellPrice: 470,
        exp: 20,
        growthTime: 14,
        stages: 1,
        season: "all"
    },
    // === 番茄（级别13解锁）===
    "番茄": {
        id: "tomato",
        name: "番茄",
        emoji: "🍅",
        level: 13,
        seedPrice: 290,
        sellPrice: 560,
        exp: 22,
        growthTime: 16,
        stages: 1,
        season: "all"
    },
    // === 豌豆（级别16解锁）===
    "豌豆": {
        id: "pea",
        name: "豌豆",
        emoji: "🫛",
        level: 16,
        seedPrice: 360,
        sellPrice: 680,
        exp: 24,
        growthTime: 18,
        stages: 1,
        season: "all"
    },
    // === 辣椒（级别19解锁）===
    "辣椒": {
        id: "chili",
        name: "辣椒",
        emoji: "🌶️",
        level: 19,
        seedPrice: 440,
        sellPrice: 830,
        exp: 26,
        growthTime: 20,
        stages: 1,
        season: "all"
    },
    // === 南瓜（级别22解锁）===
    "南瓜": {
        id: "pumpkin",
        name: "南瓜",
        emoji: "🎃",
        level: 22,
        seedPrice: 540,
        sellPrice: 990,
        exp: 28,
        growthTime: 22,
        stages: 1,
        season: "all"
    },
    // === 草莓（级别5解锁）===
    "草莓": {
        id: "strawberry",
        name: "草莓",
        emoji: "🍓",
        level: 5,
        seedPrice: 380,
        sellPrice: 720,
        exp: 20,
        growthTime: 2, // 2小时（短周期作物）
        stages: 1,
        season: "all"
    },
    // === 桃子（级别25解锁）===
    "桃子": {
        id: "peach",
        name: "桃子",
        emoji: "🍑",
        level: 25,
        seedPrice: 660,
        sellPrice: 1200,
        exp: 30,
        growthTime: 24,
        stages: 1,
        season: "all"
    },
    // === 葡萄（级别28解锁）===
    "葡萄": {
        id: "grape",
        name: "葡萄",
        emoji: "🍇",
        level: 28,
        seedPrice: 800,
        sellPrice: 1440,
        exp: 34,
        growthTime: 26,
        stages: 1,
        season: "all"
    },
    // === 西瓜（级别31解锁）===
    "西瓜": {
        id: "watermelon",
        name: "西瓜",
        emoji: "🍉",
        level: 31,
        seedPrice: 960,
        sellPrice: 1700,
        exp: 38,
        growthTime: 28,
        stages: 1,
        season: "summer"
    },
    // === 香蕉（级别34解锁）===
    "香蕉": {
        id: "banana",
        name: "香蕉",
        emoji: "🍌",
        level: 34,
        seedPrice: 1150,
        sellPrice: 2000,
        exp: 42,
        growthTime: 30,
        stages: 1,
        season: "all"
    },
    // === 橙子（级别37解锁）===
    "橙子": {
        id: "orange",
        name: "橙子",
        emoji: "🍊",
        level: 37,
        seedPrice: 1360,
        sellPrice: 2340,
        exp: 46,
        growthTime: 32,
        stages: 1,
        season: "all"
    },
    // === 石榴（级别40解锁）===
    "石榴": {
        id: "pomegranate",
        name: "石榴",
        emoji: "❤️",
        level: 40,
        seedPrice: 1600,
        sellPrice: 2720,
        exp: 50,
        growthTime: 34,
        stages: 1,
        season: "all"
    },
    // === 椰子（级别43解锁）===
    "椰子": {
        id: "coconut",
        name: "椰子",
        emoji: "🥥",
        level: 43,
        seedPrice: 1870,
        sellPrice: 3150,
        exp: 55,
        growthTime: 36,
        stages: 1,
        season: "all"
    },
    // === 葫芦（级别8解锁，特殊作物）===
    "葫芦": {
        id: "calabash",
        name: "葫芦",
        emoji: "🫙",
        level: 8,
        seedPrice: 300,
        sellPrice: 560,
        exp: 22,
        growthTime: 20,
        stages: 1,
        season: "all"
    },
    // === 人参（高级作物）===
    "人参": {
        id: "ginseng",
        name: "人参",
        emoji: "🌿",
        level: 45,
        seedPrice: 2200,
        sellPrice: 3650,
        exp: 60,
        growthTime: 40,
        stages: 1,
        season: "all"
    },
    // === 灵芝（高级作物）===
    "灵芝": {
        id: "lingzhi",
        name: "灵芝",
        emoji: "🍄",
        level: 48,
        seedPrice: 2600,
        sellPrice: 4250,
        exp: 65,
        growthTime: 44,
        stages: 1,
        season: "all"
    },
    // === 冬虫夏草（顶级作物）===
    "冬虫夏草": {
        id: "cordyceps",
        name: "冬虫夏草",
        emoji: "🪱",
        level: 50,
        seedPrice: 3000,
        sellPrice: 4900,
        exp: 72,
        growthTime: 48,
        stages: 1,
        season: "all"
    },
    // === 天山雪莲（顶级作物）===
    "天山雪莲": {
        id: "snow_lotus",
        name: "天山雪莲",
        emoji: "❄️",
        level: 52,
        seedPrice: 3500,
        sellPrice: 5600,
        exp: 80,
        growthTime: 52,
        stages: 1,
        season: "winter"
    },
    // === 牡丹（特殊花卉）===
    "牡丹": {
        id: "peony",
        name: "牡丹",
        emoji: "🌷",
        level: 30,
        seedPrice: 500,
        sellPrice: 880,
        exp: 18,
        growthTime: 12,
        stages: 1,
        season: "spring"
    },
    // === 玫瑰（特殊花卉）===
    "玫瑰": {
        id: "rose",
        name: "玫瑰",
        emoji: "🌹",
        level: 20,
        seedPrice: 420,
        sellPrice: 750,
        exp: 16,
        growthTime: 10,
        stages: 1,
        season: "all"
    },
    // === 郁金香（特殊花卉）===
    "郁金香": {
        id: "tulip",
        name: "郁金香",
        emoji: "🌷",
        level: 15,
        seedPrice: 350,
        sellPrice: 620,
        exp: 15,
        growthTime: 8,
        stages: 1,
        season: "spring"
    },
    // === 向日葵（特殊花卉）===
    "向日葵": {
        id: "sunflower",
        name: "向日葵",
        emoji: "🌻",
        level: 12,
        seedPrice: 270,
        sellPrice: 500,
        exp: 14,
        growthTime: 6,
        stages: 1,
        season: "summer"
    }
};

// 按成熟时间排序的植物列表（用于睡眠方案计算）
function getPlantsSortedByTime() {
    return Object.values(PLANTS_DATABASE)
        .sort((a, b) => a.growthTime - b.growthTime);
}

// 根据成熟时间范围查找植物
function findPlantsByTimeRange(minHours, maxHours) {
    return Object.values(PLANTS_DATABASE).filter(p => 
        p.growthTime >= minHours && p.growthTime <= maxHours
    ).sort((a, b) => a.growthTime - b.growthTime);
}

// 查找最接近指定时间的植物
function findClosestPlant(targetHours) {
    const plants = Object.values(PLANTS_DATABASE);
    let closest = plants[0];
    let minDiff = Math.abs(plants[0].growthTime - targetHours);
    
    plants.forEach(p => {
        const diff = Math.abs(p.growthTime - targetHours);
        if (diff < minDiff) {
            minDiff = diff;
            closest = p;
        }
    });
    
    return { plant: closest, diff: minDiff };
}

// 搜索植物
function searchPlants(keyword) {
    if (!keyword) return Object.values(PLANTS_DATABASE);
    const kw = keyword.toLowerCase();
    return Object.values(PLANTS_DATABASE).filter(p => 
        p.name.toLowerCase().includes(kw) || 
        p.emoji.includes(kw)
    );
}
