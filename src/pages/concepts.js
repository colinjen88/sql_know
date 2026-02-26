// =========================================
// Core Concepts Page
// =========================================

import { getData } from '../data/dataLoader.js';
import { renderCodeBlock } from '../components/codeBlock.js';
import { renderExpandableSection } from '../components/expandableSection.js';
import { navigate } from '../router.js';
import { loadMarkdown } from '../utils/mdLoader.js';
import { store } from '../store.js';

export async function renderConcepts(params = {}) {
  const conceptsData = getData('concepts');
  const main = document.getElementById('main-content');
  const query = params.q || '';

  if (params.id) {
    await renderConceptDetail(params.id);
    return;
  }

  const filtered = conceptsData.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.eli5.toLowerCase().includes(query.toLowerCase())
  );

  const currentKB = store.getCurrentKB();

  main.innerHTML = `
    <div class="fade-slide-in">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;">
        <div>
          <h2 class="page-title">🧠 ${currentKB.labels.concepts}</h2>
          <p class="page-desc">${currentKB.descriptions.concepts}</p>
        </div>
        <div class="search-bar" style="width: 300px;">
          <input type="text" class="search-input" id="concepts-search" placeholder="搜尋觀念..." value="${query}">
        </div>
      </div>

      <div class="grid-3">
        ${filtered.map((item, i) => `
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
      ${filtered.length === 0 ? '<div class="empty-state"><div class="empty-state-emoji">🔍</div><div class="empty-state-text">找不到相關觀念</div></div>' : ''}
    </div>
  `;

  // Search input handler
  const searchInput = document.getElementById('concepts-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value;
      navigate('concepts', { q });

      // Maintain focus
      setTimeout(() => {
        const input = document.getElementById('concepts-search');
        if (input) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      }, 0);
    });
  }

  main.querySelectorAll('.card-clickable[data-id]').forEach(card => {
    card.addEventListener('click', () => navigate('concepts', { id: card.dataset.id }));
  });
}

async function renderConceptDetail(id) {
  const conceptsData = getData('concepts');
  const main = document.getElementById('main-content');
  const item = conceptsData.find(c => c.id === id);

  if (!item) {
    main.innerHTML = '<div class="empty-state"><div class="empty-state-emoji">❓</div><div class="empty-state-text">找不到此觀念</div></div>';
    return;
  }

  // Show loading state
  main.innerHTML = `<div class="loading">Loading content...</div>`;

  const currentKB = store.getCurrentKB().id;
  const mdPath = `/data/${currentKB}/concepts/${item.id}.md`;
  const htmlContent = await loadMarkdown(mdPath);

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

      <div class="markdown-content">
        ${htmlContent}
      </div>

       ${item.advanced ? renderExpandableSection(
    `⚡ 進階：${item.advanced.title}`,
    item.advanced.content
  ) : ''}

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
