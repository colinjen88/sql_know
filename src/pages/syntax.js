// =========================================
// Syntax Dictionary Page
// =========================================

import { syntaxData } from '../data/syntax.js';
import { renderCodeBlock } from '../components/codeBlock.js';
import { renderExpandableSection } from '../components/expandableSection.js';
import { navigate } from '../router.js';

let currentFilter = '';

export function renderSyntax(params = {}) {
  const main = document.getElementById('main-content');

  if (params.id) {
    renderSyntaxDetail(params.id);
    return;
  }

  const filtered = currentFilter
    ? syntaxData.filter(s =>
      s.name.toLowerCase().includes(currentFilter.toLowerCase()) ||
      s.summary.includes(currentFilter) ||
      s.category.toLowerCase().includes(currentFilter.toLowerCase())
    )
    : syntaxData;

  main.innerHTML = `
    <div class="fade-slide-in">
      <h2 class="page-title">📖 語法字典</h2>
      <p class="page-desc">當你忘記指令怎麼寫時，來這裡快速查閱。點擊卡片查看完整語法說明。</p>

      <div class="filter-bar">
        <input class="filter-input" type="text" placeholder="搜尋指令名稱..." id="syntax-search" value="${currentFilter}" />
        <button class="filter-tag ${!currentFilter ? 'active' : ''}" data-filter="">全部</button>
        <button class="filter-tag ${currentFilter === 'DDL' ? 'active' : ''}" data-filter="DDL">DDL</button>
        <button class="filter-tag ${currentFilter === 'DML' ? 'active' : ''}" data-filter="DML">DML</button>
      </div>

      <div class="grid-3">
        ${filtered.map((item, i) => `
          <div class="card card-clickable stagger-item" data-id="${item.id}">
            <div class="card-header">
              <div class="card-icon cyan">${item.emoji}</div>
              <div>
                <div class="card-title">${item.name}</div>
                <div style="display: flex; gap: 6px; margin-top: 4px;">
                  <span class="tag tag-cyan">${item.category}</span>
                  <span class="tag tag-emerald">Phase ${item.phase}</span>
                </div>
              </div>
            </div>
            <div class="card-body">${item.summary}</div>
            ${item.warning ? `<div class="callout warning" style="margin-top: 12px; font-size: 13px;">${item.warning}</div>` : ''}
          </div>
        `).join('')}
      </div>

      ${filtered.length === 0 ? '<div class="empty-state"><div class="empty-state-emoji">🔍</div><div class="empty-state-text">找不到符合條件的語法</div></div>' : ''}
    </div>
  `;

  // Event listeners
  main.querySelectorAll('.card-clickable[data-id]').forEach(card => {
    card.addEventListener('click', () => navigate('syntax', { id: card.dataset.id }));
  });

  const searchInput = document.getElementById('syntax-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentFilter = e.target.value;
      renderSyntax(params);
    });
  }

  main.querySelectorAll('.filter-tag[data-filter]').forEach(tag => {
    tag.addEventListener('click', () => {
      currentFilter = tag.dataset.filter;
      renderSyntax(params);
    });
  });
}

function renderSyntaxDetail(id) {
  const main = document.getElementById('main-content');
  const item = syntaxData.find(s => s.id === id);

  if (!item) {
    main.innerHTML = '<div class="empty-state"><div class="empty-state-emoji">❓</div><div class="empty-state-text">找不到此語法</div></div>';
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
        <span class="tag tag-cyan">${item.category}</span>
        <span class="tag tag-emerald">Phase ${item.phase}</span>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <div class="card-body">${item.summary}</div>
      </div>

      ${item.warning ? `<div class="callout warning" style="margin-bottom: 24px;"><strong>⚠️ 重要提醒：</strong> ${item.warning}</div>` : ''}

      <div class="detail-section">
        <h3 class="detail-section-title">📐 語法結構</h3>
        ${renderCodeBlock(item.syntax)}
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">📋 參數說明</h3>
        <table class="data-table">
          <thead><tr><th>參數</th><th>說明</th></tr></thead>
          <tbody>
            ${item.params.map(p => `<tr><td><code>${p.name}</code></td><td>${p.desc}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">🚀 範例程式碼</h3>
        ${renderCodeBlock(item.example)}
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">📤 回傳結果</h3>
        <div class="callout">${item.result}</div>
      </div>

      ${item.advanced ? renderExpandableSection(
    `🚀 進階：${item.advanced.title}`,
    item.advanced.content
  ) : ''}

      ${item.related.length > 0 ? `
        <div class="detail-section">
          <h3 class="detail-section-title">🔗 相關連結</h3>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${item.related.map(r => `<span class="tag tag-cyan" style="cursor: pointer;" data-related="${r}">${r}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => navigate('syntax'));

  main.querySelectorAll('[data-related]').forEach(tag => {
    tag.addEventListener('click', () => {
      const relId = tag.dataset.related.toLowerCase().replace(/_/g, '-');
      const found = syntaxData.find(s => s.id === relId);
      if (found) navigate('syntax', { id: found.id });
      else navigate('concepts');
    });
  });
}
