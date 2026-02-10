// =========================================
// Style Guide Page
// =========================================

import { styleGuideData } from '../data/styleGuide.js';
import { renderCodeBlock } from '../components/codeBlock.js';

export function renderGuide(params = {}) {
    const main = document.getElementById('main-content');

    main.innerHTML = `
    <div class="fade-slide-in">
      <h2 class="page-title">📏 開發規範</h2>
      <p class="page-desc">一致的風格能減少認知負荷，讓團隊協作更順暢。</p>

      ${styleGuideData.map(section => renderGuideSection(section)).join('')}
    </div>
  `;
}

function renderGuideSection(section) {
    return `
    <div class="stagger-item" style="margin-bottom: 40px;">
      <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
        <span>${section.emoji}</span>
        ${section.name}
      </h3>
      <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 20px;">${section.summary}</p>

      ${section.rules.map(rule => renderRule(rule)).join('')}
    </div>
  `;
}

function renderRule(rule) {
    return `
    <div class="card" style="margin-bottom: 24px;">
      <div style="margin-bottom: 16px;">
        <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">${rule.title}</div>
        <div style="font-size: 14px; color: var(--text-secondary);">${rule.desc}</div>
      </div>

      <div class="grid-2">
        <div>
          <div style="font-size: 12px; font-weight: 600; color: var(--color-danger); margin-bottom: 8px; text-transform: uppercase;">🚫 Bad</div>
          ${renderCodeBlock(rule.bad, 'sql')}
        </div>
        <div>
           <div style="font-size: 12px; font-weight: 600; color: var(--color-success); margin-bottom: 8px; text-transform: uppercase;">✅ Good</div>
           ${renderCodeBlock(rule.good, 'sql')}
        </div>
      </div>
    </div>
  `;
}
