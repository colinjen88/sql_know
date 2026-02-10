// =========================================
// Tech Stack Page
// =========================================

import { techStackData } from '../data/techStack.js';
import { navigate } from '../router.js';

export function renderTech(params = {}) {
    const main = document.getElementById('main-content');

    main.innerHTML = `
    <div class="fade-slide-in">
      <h2 class="page-title">🔧 技術選型</h2>
      <p class="page-desc">工欲善其事，必先利其器。這裡記錄了工具選擇的理由與比較。</p>

      ${techStackData.map(section => renderTechSection(section)).join('')}
    </div>
  `;
}

function renderTechSection(section) {
    return `
    <div class="card stagger-item" style="margin-bottom: 32px;">
      <div class="card-header">
        <div class="card-icon cyan">${section.emoji}</div>
        <div>
          <div class="card-title">${section.name}</div>
          <div class="card-subtitle">${section.description}</div>
        </div>
      </div>

      <div class="grid-3">
        ${section.items.map(item => renderTechItem(item)).join('')}
      </div>
    </div>
  `;
}

function renderTechItem(item) {
    const isRecommended = item.verdict.includes('首選') || item.verdict.includes('最全');

    return `
    <div class="tech-item" style="
      background: rgba(255,255,255,0.03); 
      border-radius: var(--radius-md); 
      padding: 16px; 
      border: 1px solid ${isRecommended ? 'var(--color-primary)' : 'var(--border-color)'};
      position: relative;
    ">
      ${isRecommended ? '<div style="position: absolute; top: -10px; right: 10px; background: var(--color-primary); color: #000; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 10px;">RECOMMENDED</div>' : ''}
      
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span style="font-weight: 700; font-size: 16px; color: var(--text-primary);">${item.name}</span>
        <span class="tag tag-cyan">${item.type}</span>
      </div>
      
      <div style="font-size: 13px; color: var(--color-accent); font-weight: 600; margin-bottom: 12px;">${item.verdict}</div>
      
      <div style="margin-bottom: 12px;">
        <div style="font-size: 12px; color: var(--color-success); margin-bottom: 4px;">✅ 優點</div>
        <ul style="padding-left: 16px; font-size: 13px; color: var(--text-secondary);">
          ${item.pros.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 12px;">
         <div style="font-size: 12px; color: var(--color-danger); margin-bottom: 4px;">❌ 缺點</div>
         <ul style="padding-left: 16px; font-size: 13px; color: var(--text-secondary);">
          ${item.cons.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>

      <div style="font-size: 13px; color: var(--text-muted); padding-top: 12px; border-top: 1px solid var(--border-color); line-height: 1.5;">
        💡 ${item.recommendation}
      </div>
    </div>
  `;
}
