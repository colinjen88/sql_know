// =========================================
// Resource Gallery Page
// =========================================

import { getData } from '../data/dataLoader.js';
import { store } from '../store.js';

export function renderResources() {
  const main = document.getElementById('main-content');
  const resourcesData = getData('resources');
  const currentKB = store.getCurrentKB();

  main.innerHTML = `
    <div class="fade-slide-in">
      <h2 class="page-title">🧰 ${currentKB.labels.resources || '資源工具箱'}</h2>
      <p class="page-desc">精選的 AI 學習資源、開源工具、常用框架與經典論文，助你事半功倍。</p>

      <div class="resource-container">
        ${resourcesData.map(group => `
          <div class="resource-group" style="margin-bottom: 40px;">
            <h3 class="resource-group-title" style="font-size: 18px; font-weight: 700; color: var(--color-primary); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
              ${group.category}
            </h3>
            <div class="grid-2">
              ${group.items.map(item => `
                <div class="card stagger-item">
                  <div class="card-body">
                    <div style="font-weight: 700; font-size: 16px; margin-bottom: 8px; color: var(--text-primary);">${item.name}</div>
                    <div style="font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">${item.desc}</div>
                    <a href="${item.link}" target="_blank" class="btn btn-secondary" style="font-size: 12px; display: inline-flex; align-items: center; gap: 6px;">
                      立即造訪
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
