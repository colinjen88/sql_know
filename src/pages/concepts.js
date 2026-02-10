// =========================================
// Core Concepts Page
// =========================================

import { conceptsData } from '../data/concepts.js';
import { renderCodeBlock } from '../components/codeBlock.js';
import { navigate } from '../router.js';

export function renderConcepts(params = {}) {
    const main = document.getElementById('main-content');

    if (params.id) {
        renderConceptDetail(params.id);
        return;
    }

    main.innerHTML = `
    <div class="fade-slide-in">
      <h2 class="page-title">🧠 核心觀念</h2>
      <p class="page-desc">理解「為什麼」要這樣做，面試與設計資料庫時使用。</p>

      <div class="grid-3">
        ${conceptsData.map((item, i) => `
          <div class="card card-clickable stagger-item" data-id="${item.id}">
            <div class="card-header">
              <div class="card-icon amber">${item.emoji}</div>
              <div>
                <div class="card-title">${item.name}</div>
                <span class="tag tag-emerald">Phase ${item.phase}</span>
              </div>
            </div>
            <div class="callout" style="margin-bottom: 0;">
              ${item.eli5}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

    main.querySelectorAll('.card-clickable[data-id]').forEach(card => {
        card.addEventListener('click', () => navigate('concepts', { id: card.dataset.id }));
    });
}

function renderConceptDetail(id) {
    const main = document.getElementById('main-content');
    const item = conceptsData.find(c => c.id === id);

    if (!item) {
        main.innerHTML = '<div class="empty-state"><div class="empty-state-emoji">❓</div><div class="empty-state-text">找不到此觀念</div></div>';
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
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">💡 一句話解釋 (ELI5)</h3>
        <div class="callout">${item.eli5}</div>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">🎯 生活化比喻</h3>
        <div class="detail-section-content">
          <p>${item.analogy}</p>
        </div>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">⚠️ 為什麼重要？</h3>
        <div class="detail-section-content">
          <ul>
            ${item.whyMatters.map(w => `<li>${w}</li>`).join('')}
          </ul>
        </div>
      </div>

      ${item.visual ? `
        <div class="detail-section">
          <h3 class="detail-section-title">📊 視覺化</h3>
          ${renderCodeBlock(item.visual, 'text')}
        </div>
      ` : ''}

      ${item.typeTable ? `
        <div class="detail-section">
          <h3 class="detail-section-title">📦 型別總覽</h3>
          <table class="data-table">
            <thead><tr><th>型別</th><th>說明</th><th>用途範例</th></tr></thead>
            <tbody>
              ${item.typeTable.map(t => `<tr><td><code>${t.type}</code></td><td>${t.desc}</td><td>${t.example}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      ` : ''}

      <div class="detail-section">
        <h3 class="detail-section-title">💻 程式碼範例</h3>
        ${renderCodeBlock(item.codeExample)}
      </div>

      ${item.related.length > 0 ? `
        <div class="detail-section">
          <h3 class="detail-section-title">🔗 相關連結</h3>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${item.related.map(r => `<span class="tag tag-amber" style="cursor: pointer;" data-related="${r}">${r}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

    document.getElementById('back-btn').addEventListener('click', () => navigate('concepts'));
}
