// =========================================
// Cookbook Page
// =========================================

import { cookbookData } from '../data/cookbook.js';
import { renderCodeBlock } from '../components/codeBlock.js';
import { navigate } from '../router.js';

export function renderCookbook(params = {}) {
    const main = document.getElementById('main-content');

    if (params.id) {
        renderCookbookDetail(params.id);
        return;
    }

    main.innerHTML = `
    <div class="fade-slide-in">
      <h2 class="page-title">🍳 實戰食譜</h2>
      <p class="page-desc">遇到具體需求時，直接複製修改的程式碼片段。</p>

      <div class="grid-3">
        ${cookbookData.map((item, i) => `
          <div class="card card-clickable stagger-item" data-id="${item.id}">
            <div class="card-header">
              <div class="card-icon emerald">${item.emoji}</div>
              <div>
                <div class="card-title">${item.name}</div>
                <span class="tag tag-emerald">${item.difficulty}</span>
              </div>
            </div>
            <div class="card-body">${item.context}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

    main.querySelectorAll('.card-clickable[data-id]').forEach(card => {
        card.addEventListener('click', () => navigate('cookbook', { id: card.dataset.id }));
    });
}

function renderCookbookDetail(id) {
    const main = document.getElementById('main-content');
    const item = cookbookData.find(c => c.id === id);

    if (!item) {
        main.innerHTML = '<div class="empty-state"><div class="empty-state-emoji">❓</div><div class="empty-state-text">找不到此食譜</div></div>';
        return;
    }

    main.innerHTML = `
    <div class="detail-view">
      <div class="detail-header">
        <button class="detail-back" id="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          返回列表
        </button>
        <span style="font-size: 28px;">${item.emoji}</span>
        <h2 class="detail-title">${item.name}</h2>
        <span class="tag tag-emerald">${item.difficulty}</span>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">📌 使用情境</h3>
        <div class="callout">${item.context}</div>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">✅ 解決方案</h3>
        ${renderCodeBlock(item.solution)}
      </div>

      ${item.advancedSolution ? `
        <div class="detail-section">
          <h3 class="detail-section-title">🚀 進階版本</h3>
          ${renderCodeBlock(item.advancedSolution)}
        </div>
      ` : ''}

      <div class="detail-section">
        <h3 class="detail-section-title">🔍 原理解析</h3>
        <div class="detail-section-content">
          <ul>
            ${item.explanation.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>
      </div>

      ${item.tip ? `
        <div class="callout" style="margin-bottom: 24px;">
          <strong>💡 小提示：</strong> ${item.tip}
        </div>
      ` : ''}

      ${item.performanceNote ? `
        <div class="callout warning" style="margin-bottom: 24px;">
          <strong>⚠️ 效能注意：</strong> ${item.performanceNote}
        </div>
      ` : ''}
    </div>
  `;

    document.getElementById('back-btn').addEventListener('click', () => navigate('cookbook'));
}
