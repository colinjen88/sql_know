// =========================================
// Tech Stack Page
// =========================================

import { techStackData } from '../data/techStack.js';
import { navigate } from '../router.js';
import { renderCodeBlock } from '../components/codeBlock.js';

export function renderTech(params = {}) {
  const main = document.getElementById('main-content');

  // 1. Detail View
  if (params.id) {
    renderTechDetail(params.id);
    return;
  }

  // 2. Overview (List)
  main.innerHTML = `
    <div class="fade-slide-in">
      <h2 class="page-title">🔧 技術選型</h2>
      <p class="page-desc">工欲善其事，必先利其器。這裡記錄了工具選擇的理由與比較。</p>

      ${techStackData.map(section => renderTechSection(section)).join('')}

      <!-- Tech Index Section -->
      <div class="card" style="margin-top: 48px; border-color: var(--color-primary); background: rgba(99, 102, 241, 0.03);">
        <div class="card-header">
           <div class="card-title">📚 技術總覽 (Total Index)</div>
        </div>
        <div class="card-body" style="margin-bottom:16px;">
            點擊以下標籤，查看該技術的<strong>快速上手指令</strong>與<strong>學習資源</strong>。
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${renderTechIndex()}
        </div>
      </div>
    </div>
  `;

  // Attach click events for Index
  main.querySelectorAll('.tech-index-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      navigate('tech', { id: tag.dataset.id });
    });
  });

  // Attach click events for Names and Buttons in lists
  main.querySelectorAll('.tech-detail-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      navigate('tech', { id: link.dataset.id });
    });
  });
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
  const isRecommended = item.verdict.includes('首選') || item.verdict.includes('最全') || item.verdict.includes('標準');

  // Clickable Name if ID exists
  const nameHtml = item.id
    ? `<span class="tech-detail-link" data-id="${item.id}" style="cursor:pointer; text-decoration:underline; text-decoration-color:rgba(129,140,248,0.5); text-underline-offset:4px;">${item.name}</span>`
    : item.name;

  // View Details Button if ID exists
  const btnHtml = item.id
    ? `<div style="margin-top:16px; text-align:right;">
             <button class="btn-secondary tech-detail-link" data-id="${item.id}" style="font-size:12px; padding:6px 12px;">
               查看詳情 &rarr;
             </button>
           </div>`
    : '';

  return `
    <div class="tech-item" style="
      background: rgba(0,0,0,0.02); 
      border-radius: var(--radius-md); 
      padding: 16px; 
      border: 1px solid ${isRecommended ? 'var(--color-primary)' : 'var(--border-color)'};
      position: relative;
      display: flex;
      flex-direction: column;
    ">
      ${isRecommended ? '<div style="position: absolute; top: -10px; right: 10px; background: var(--color-primary); color: #ffe359; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 10px;">RECOMMENDED</div>' : ''}
      
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span style="font-weight: 700; font-size: 16px; color: var(--text-primary);">${nameHtml}</span>
        <span class="tag tag-cyan">${item.type}</span>
      </div>
      
      <div style="font-size: 13px; color: var(--color-accent); font-weight: 600; margin-bottom: 12px;">${item.verdict}</div>
      
      <div style="margin-bottom: 12px; flex: 1;">
        <div style="font-size: 12px; color: var(--color-success); margin-bottom: 4px;">✅ 優點</div>
        <ul style="padding-left: 16px; font-size: 13px; color: var(--text-secondary);">
          ${item.pros ? item.pros.map(p => `<li>${p}</li>`).join('') : ''}
        </ul>
      </div>

      <div style="margin-bottom: 12px;">
         <div style="font-size: 12px; color: var(--color-danger); margin-bottom: 4px;">❌ 缺點</div>
         <ul style="padding-left: 16px; font-size: 13px; color: var(--text-secondary);">
          ${item.cons ? item.cons.map(c => `<li>${c}</li>`).join('') : ''}
        </ul>
      </div>

      <div style="font-size: 13px; color: var(--text-muted); padding-top: 12px; border-top: 1px solid var(--border-color); line-height: 1.5;">
        💡 ${item.recommendation}
        ${btnHtml}
      </div>
    </div>
  `;
}

function renderTechIndex() {
  const allTechs = techStackData.flatMap(s => s.items).filter(i => i.id);
  return allTechs.map(t => `
        <span class="tag tech-index-tag" data-id="${t.id}" style="cursor:pointer; padding: 6px 12px; font-size:13px; background:var(--bg-card); border:1px solid var(--border-color); transition:all 0.2s;">
            ${t.name} 
        </span>
    `).join('');
}

function renderTechDetail(id) {
  const main = document.getElementById('main-content');
  const allTechs = techStackData.flatMap(s => s.items);
  const item = allTechs.find(t => t.id === id);

  if (!item) {
    main.innerHTML = '<div class="empty-state">❌ 找不到該技術資料</div>';
    return;
  }

  // Prepare links HTML
  const linksHtml = item.links && item.links.length > 0
    ? item.links.map(link => `
            <a href="${link.url}" target="_blank" class="btn btn-secondary" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
               ${link.label}
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          `).join('')
    : '<div style="color:var(--text-muted);">暫無連結</div>';

  // Prepare Quick Start HTML
  const quickStartHtml = item.quickStart
    ? `<div class="detail-section">
             <h3 class="detail-section-title">🚀 快速上手 (Quick Start)</h3>
             ${renderCodeBlock(item.quickStart, 'bash')}
           </div>`
    : '';

  main.innerHTML = `
    <div class="detail-view fade-slide-in">
      <div class="detail-header">
        <button class="detail-back" id="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          返回列表
        </button>
        <div style="font-size: 48px; margin-bottom:16px;">${item.name.includes('Nuxt') ? '⚡' : '🛠️'}</div>
        <h2 class="detail-title">${item.name}</h2>
        <span class="tag tag-cyan">${item.type}</span>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <div class="card-body">
            ${item.intro ? `<div style="font-size:16px; line-height:1.8; margin-bottom:20px; color:var(--text-primary);">${item.intro}</div>` : ''}
            
            <div style="font-size:14px; color:var(--text-secondary); padding:16px; background:rgba(0,0,0,0.02); border-radius:8px; display:flex; gap:8px;">
                <span style="font-size:16px;">💡</span>
                <span style="line-height:1.6;">${item.recommendation}</span>
            </div>
        </div>
         <div style="margin-top:16px; padding-top:16px; border-top:1px solid var(--border-color); font-weight:600; color:var(--color-accent); padding-left:24px; padding-right:24px; padding-bottom:24px;">
           ${item.verdict}
         </div>
      </div>

      ${quickStartHtml}

      ${item.guide && item.guide.length > 0 ? `
      <div class="detail-section">
        <h3 class="detail-section-title">🛑 經驗指南 (Pitfalls & Tips)</h3>
        <ul style="list-style: none; padding: 0;">
          ${item.guide.map(tips => `
            <li style="margin-bottom: 12px; padding: 12px; background: rgba(0,0,0,0.02); border-left: 3px solid var(--color-accent); border-radius: 0 4px 4px 0; font-size: 14px; line-height: 1.6;">
              ${tips}
            </li>
          `).join('')}
        </ul>
      </div>
      ` : ''}

      <div class="detail-section">
        <h3 class="detail-section-title">🔗 相關資源</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            ${linksHtml}
        </div>
      </div>

    </div>
    `;

  document.getElementById('back-btn').addEventListener('click', () => navigate('tech'));
}
