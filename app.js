// ============================================
// QQ农场计时器 - 主应用逻辑（精简版）
// 支持红、黑、金、紫土地完整加成（增产、加速、经验）
// 默认等级1，不记忆等级
// ============================================

// ========== 全局状态 ==========
let state = {
    selectedLand: 'gold'
};

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    renderPlantGrid();
    initServiceWorker();
    selectLand(state.selectedLand);
    updateStickyOffsets();

    const farmLevelInput = document.getElementById('farm-level-input');
    if (farmLevelInput) {
        farmLevelInput.value = 1;
    }
    analysisState.farmLevel = 1;
    selectAnalysisLand(analysisState.selectedLand);

    window.addEventListener('resize', updateStickyOffsets);
});

// ========== 辅助函数 ==========
function updateStickyOffsets() {
    const root = document.documentElement;
    const header = document.querySelector('.app-header');
    const tabNav = document.querySelector('.tab-nav');

    const headerHeight = header ? Math.round(header.getBoundingClientRect().height) : 0;
    const tabHeight = tabNav ? Math.round(tabNav.getBoundingClientRect().height) : 0;

    root.style.setProperty('--header-sticky-height', `${headerHeight}px`);
    root.style.setProperty('--tab-sticky-height', `${tabHeight}px`);
    root.style.setProperty('--plant-sticky-top', `${headerHeight + tabHeight}px`);
}

// ========== 标签页切换 ==========
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `tab-${tabName}`);
    });
    requestAnimationFrame(updateStickyOffsets);
}

// ========== 土地类型选择（种植页） ==========
function selectLand(landType) {
    state.selectedLand = landType;
    const land = LAND_TYPES[landType];
    
    document.querySelectorAll('#land-options .land-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.land === landType);
    });
    
    // 更新加成文本（简短）
    const bonusText = document.getElementById('land-bonus-text');
    let bonusStr = '';
    if (land.yieldBonus > 0) bonusStr += `增产+${Math.round(land.yieldBonus*100)}% `;
    if (land.timeBonus > 0) bonusStr += `· 成熟-${Math.round(land.timeBonus*100)}%`;
    if (land.expBonus > 0) bonusStr += ` · 经验+${Math.round(land.expBonus*100)}%`;
    if (bonusStr === '') bonusStr = '无加成';
    bonusText.textContent = bonusStr;
    
    // 更新详细信息（解锁等级）
    const detailText = document.getElementById('land-detail-text');
    if (detailText) {
        detailText.textContent = `解锁等级 Lv.${land.level}`;
    }
    
    renderPlantGrid(document.getElementById('plant-search-input').value);
}

// ========== 植物排序 ==========
const SPECIAL_PLANT_LAST_ORDER = ['新春红包', '哈哈南瓜', '爱心果', '蔷薇', '蝴蝶兰'];
const SHOP_PLANT_ORDER = [
    '白萝卜', '胡萝卜', '大白菜', '大蒜', '大葱', '水稻', '小麦', '玉米', '鲜姜', '土豆',
    '小白菜', '生菜', '油菜', '茄子', '红枣', '蒲公英', '银莲花', '番茄', '花菜', '韭菜',
    '小雏菊', '豌豆', '莲藕', '红玫瑰', '秋菊（黄色）', '满天星', '含羞草', '牵牛花',
    '秋菊（红色）', '辣椒', '黄瓜', '芹菜', '天香百合', '南瓜', '核桃', '山楂', '菠菜',
    '草莓', '苹果', '四叶草', '非洲菊', '火绒草', '花香根鸢尾', '虞美人', '向日葵',
    '西瓜', '黄豆', '香蕉', '竹笋', '桃子', '甘蔗', '橙子', '茉莉花', '葡萄', '丝瓜',
    '榛子', '迎春花', '石榴', '栗子', '柚子', '蘑菇', '菠萝', '箬竹', '无花果', '椰子',
    '花生', '金针菇', '葫芦', '猕猴桃', '梨', '爱心果', '睡莲', '火龙果', '枇杷', '樱桃',
    '李子', '荔枝', '香瓜', '木瓜', '桂圆', '月柿', '杨桃', '蔷薇', '蝴蝶兰', '哈密瓜',
    '桑葚', '柠檬', '芒果', '杨梅', '榴莲', '番石榴', '瓶子树', '蓝莓', '猪笼草', '山竹',
    '曼陀罗华', '曼珠沙华', '苦瓜', '天堂鸟', '冬瓜', '豹皮花', '杏子', '金桔'
];

function comparePlantsForUI(a, b) {
    const specialA = SPECIAL_PLANT_LAST_ORDER.indexOf(a.name);
    const specialB = SPECIAL_PLANT_LAST_ORDER.indexOf(b.name);
    const aIsSpecial = specialA !== -1;
    const bIsSpecial = specialB !== -1;

    if (aIsSpecial && !bIsSpecial) return 1;
    if (!aIsSpecial && bIsSpecial) return -1;
    if (aIsSpecial && bIsSpecial) return specialA - specialB;

    const shopA = SHOP_PLANT_ORDER.indexOf(a.name);
    const shopB = SHOP_PLANT_ORDER.indexOf(b.name);
    const aInShop = shopA !== -1;
    const bInShop = shopB !== -1;

    if (aInShop && bInShop) return shopA - shopB;
    if (aInShop && !bInShop) return -1;
    if (!aInShop && bInShop) return 1;

    if ((a.level || 0) !== (b.level || 0)) return (a.level || 0) - (b.level || 0);
    return (a.name || '').localeCompare(b.name || '', 'zh-CN');
}

// ========== 植物网格 ==========
function renderPlantGrid(filter = '') {
    const grid = document.getElementById('plant-grid');
    const landType = state.selectedLand;
    let plants;
    if (filter) {
        plants = searchPlants(filter, landType);
    } else {
        plants = Object.values(PLANTS_DATABASE).filter(p => canPlantOnLand(p, landType));
    }
    plants.sort(comparePlantsForUI);
    
    grid.innerHTML = plants.map(plant => {
        const growTime = calcGrowTime(plant.name, landType);
        const totalTime = calcTotalGrowTime(plant.name, landType);
        const seasonsInfo = plant.seasons > 1 ? `${plant.seasons}季·总${totalTime}h` : '单季';
        const seasonsClass = plant.seasons > 1 ? 'plant-seasons' : 'plant-seasons is-placeholder';
        
        return `
            <div class="plant-card" onclick="startPlantTimer('${plant.name}')">
                <div class="plant-emoji">${plant.emoji}</div>
                <div class="plant-name">${plant.name}</div>
                <div class="plant-time">${growTime}小时${plant.seasons > 1 ? '(首季)' : ''}</div>
                <span class="${seasonsClass}">${seasonsInfo}</span>
                <div class="plant-level">Lv.${plant.level}</div>
                <div class="plant-profit"><span class="coin">💰${plant.sellPrice}</span></div>
            </div>
        `;
    }).join('');
}

function filterPlants(keyword) {
    renderPlantGrid(keyword);
}

// ========== 种植确认弹窗（仅确认按钮） ==========
function startPlantTimer(plantName, optionalLandType) {
    const plant = PLANTS_DATABASE[plantName];
    if (!plant) {
        showToast('未找到该植物信息');
        return;
    }
    
    const landType = optionalLandType || state.selectedLand || 'gold';
    const land = LAND_TYPES[landType];
    const growTime = calcGrowTime(plantName, landType);
    const totalTime = calcTotalGrowTime(plantName, landType);
    const seasonTimes = getSeasonTimes(plantName, landType);
    
    let seasonsInfo = '';
    if (plant.seasons > 1) {
        const seasonList = seasonTimes.map((t, i) => `<div class="season-row">第${i+1}季: <strong>${t}小时</strong></div>`).join('');
        seasonsInfo = `
            <div class="seasons-detail">
                <div class="seasons-title">📅 各季成熟时间（${land.emoji} ${land.name}）</div>
                ${seasonList}
                <div class="seasons-total">全部收获预计 <strong>${totalTime}小时</strong></div>
            </div>
        `;
    }
    
    const yieldBonus = land.yieldBonus > 0 ? `<span>📈 ${land.emoji}增产+${Math.round(land.yieldBonus*100)}%</span>` : '';
    const timeBonus = land.timeBonus > 0 ? `<span>⏱️ 成熟-${Math.round(land.timeBonus*100)}%</span>` : '';
    const expBonus = land.expBonus > 0 ? `<span>✨ 经验+${Math.round(land.expBonus*100)}%</span>` : '';
    
    showConfirm(
        `${plant.emoji} 种植信息`,
        `在 <strong>${land.emoji} ${land.name}</strong> 上种植 <strong>${plant.name}</strong><br>
        首季成熟：<strong>${growTime}小时</strong><br>
        <small>💰 收入 ${Math.round(plant.sellPrice * (1+land.yieldBonus))} · ⭐ 经验 +${Math.round(plant.exp * (1+land.expBonus))} · ${plant.seasons}季作物</small>
        ${yieldBonus}${timeBonus}${expBonus}
        ${seasonsInfo}`,
        () => {}
    );
}

// ========== 分析页面（支持经验加成） ==========
let analysisState = {
    farmLevel: 1,
    selectedLand: 'gold',
    results: []
};

function updateFarmLevel(level) {
    level = parseInt(level);
    if (isNaN(level)) level = 1;
    level = Math.min(140, Math.max(1, level));
    analysisState.farmLevel = level;
    
    const hint = document.getElementById('plant-count-hint');
    if (hint) {
        const unlocked = Object.values(PLANTS_DATABASE).filter(p => p.level <= level).length;
        hint.textContent = `已解锁 ${unlocked}/${Object.keys(PLANTS_DATABASE).length} 种植物`;
    }
    calculateEfficiency();
}

function adjustLevel(delta) {
    const input = document.getElementById('farm-level-input');
    let level = parseInt(input.value) || 1;
    level += delta;
    level = Math.min(140, Math.max(1, level));
    input.value = level;
    updateFarmLevel(level);
}

function selectAnalysisLand(landType) {
    analysisState.selectedLand = landType;
    document.querySelectorAll('#analysis-land-options .land-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.land === landType);
    });
    calculateEfficiency();
}

function calculateEfficiency() {
    const land = LAND_TYPES[analysisState.selectedLand];
    if (!land) return;
    const plants = Object.values(PLANTS_DATABASE)
        .filter(p => p.level <= analysisState.farmLevel)
        .filter(p => canPlantOnLand(p, analysisState.selectedLand))
        .map(plant => {
            const growTime = calcGrowTime(plant.name, analysisState.selectedLand);
            const totalTime = calcTotalGrowTime(plant.name, analysisState.selectedLand);
            const sellPrice = Math.round(plant.sellPrice * (1 + land.yieldBonus));
            const profit = sellPrice - plant.seedPrice;
            const totalProfit = profit * plant.seasons;
            // 经验受土地经验加成
            const expPerSeason = Math.round(plant.exp * (1 + land.expBonus));
            const totalExp = expPerSeason * plant.seasons;
            const incomePerHour = totalTime > 0 ? totalProfit / totalTime : 0;
            const expPerHour = totalTime > 0 ? totalExp / totalTime : 0;
            return {
                ...plant,
                growTime,
                totalTime,
                sellPrice,
                profit,
                totalProfit,
                totalExp,
                incomePerHour,
                expPerHour
            };
        });
    analysisState.results = plants;
    sortAnalysisResults();
}

function sortAnalysisResults() {
    const sortBy = document.getElementById('analysis-sort').value;
    let sorted = [...analysisState.results];
    switch(sortBy) {
        case 'income': sorted.sort((a,b) => b.incomePerHour - a.incomePerHour); break;
        case 'exp': sorted.sort((a,b) => b.expPerHour - a.expPerHour); break;
        case 'totalIncome': sorted.sort((a,b) => b.totalProfit - a.totalProfit); break;
        case 'totalExp': sorted.sort((a,b) => b.totalExp - a.totalExp); break;
        case 'time': sorted.sort((a,b) => a.growTime - b.growTime); break;
    }
    renderAnalysisResults(sorted);
}

function renderAnalysisResults(results) {
    const resultDiv = document.getElementById('analysis-result');
    const summaryDiv = document.getElementById('analysis-summary');
    const listDiv = document.getElementById('efficiency-plant-list');
    if (!resultDiv) return;
    resultDiv.style.display = 'block';
    
    const topIncome = results[0];
    const topExp = [...results].sort((a,b) => b.expPerHour - a.expPerHour)[0];
    summaryDiv.innerHTML = `
        <div class="summary-item"><span class="summary-label">🏆 最高收益</span><span class="summary-value">${topIncome.emoji} ${topIncome.name}</span><span class="summary-sub">${topIncome.incomePerHour.toFixed(1)}/h</span></div>
        <div class="summary-divider"></div>
        <div class="summary-item"><span class="summary-label">⭐ 最高经验</span><span class="summary-value">${topExp.emoji} ${topExp.name}</span><span class="summary-sub">${topExp.expPerHour.toFixed(1)}/h</span></div>
    `;
    
    listDiv.innerHTML = results.map((plant, idx) => {
        const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : (idx+1);
        const seasonsTag = plant.seasons > 1 ? `<span class="plant-seasons">${plant.seasons}季</span>` : '';
        return `
            <div class="analysis-plant-card" onclick="startPlantTimer('${plant.name}', '${analysisState.selectedLand}')">
                <div class="analysis-plant-rank">${medal}</div>
                <div class="analysis-plant-emoji">${plant.emoji}</div>
                <div class="analysis-plant-info">
                    <div class="analysis-plant-name">${plant.name} ${seasonsTag}</div>
                    <div class="analysis-plant-time">${plant.growTime}h · ${plant.totalTime}h</div>
                </div>
                <div class="analysis-plant-stats">
                    <div class="stat-item income"><span class="stat-value">${plant.incomePerHour.toFixed(0)}</span><span class="stat-label">收益/h</span></div>
                    <div class="stat-item exp"><span class="stat-value">${plant.expPerHour.toFixed(0)}</span><span class="stat-label">经验/h</span></div>
                </div>
            </div>
        `;
    }).join('');
}

function showAnalysisHelp() {
    const modal = document.getElementById('analysis-help-modal');
    if (modal) modal.style.display = 'flex';
}
function closeAnalysisHelp() {
    const modal = document.getElementById('analysis-help-modal');
    if (modal) modal.style.display = 'none';
}

// ========== 分享 ==========
async function handleShare() {
    const shareText = '🌾 QQ农场计时器 - 超好用的农场植物计时工具，再也不用错过收菜时间了！\n\nhttps://sweetyrimo.github.io/qq-farm-timer/';
    try {
        await navigator.clipboard.writeText(shareText);
        showToast('✅ 已复制到剪贴板');
    } catch {
        const textarea = document.createElement('textarea');
        textarea.value = shareText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('✅ 已复制到剪贴板');
    }
}

// ========== Toast ==========
function showToast(message) {
    const existing = document.querySelectorAll('.toast');
    existing.forEach(t => t.remove());
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ========== 确认弹窗（仅确认按钮） ==========
function showConfirm(title, message, onConfirm) {
    const old = document.getElementById('confirm-overlay');
    if (old) old.remove();
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'confirm-overlay';
    overlay.innerHTML = `
        <div class="confirm-dialog">
            <h3>${title}</h3>
            <div class="confirm-body">${message}</div>
            <div class="confirm-actions" style="justify-content: center;">
                <button class="primary-btn confirm-yes" style="width:auto;padding:10px 28px;">确认</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('.confirm-yes').onclick = () => {
        overlay.remove();
        if (onConfirm) onConfirm();
    };
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
}

// ========== Service Worker ==========
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(e => console.warn('SW注册失败', e));
        });
    }
}

function refreshApp() {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
    setTimeout(() => location.reload(), 500);
}
function dismissUpdateToast() { document.getElementById('update-toast')?.remove(); }