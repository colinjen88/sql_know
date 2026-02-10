// =========================================
// Code Block Component
// =========================================

import Prism from 'prismjs';
import 'prismjs/components/prism-sql';

export function renderCodeBlock(code, lang = 'sql') {
  const highlighted = Prism.highlight(code.trim(), Prism.languages[lang] || Prism.languages.sql, lang);
  const id = 'cb-' + Math.random().toString(36).slice(2, 9);

  const copyIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
  const checkIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

  return `
    <div class="code-block">
      <div class="code-block-header">
        <span class="code-block-lang">${lang}</span>
        <button class="code-block-copy" data-copy-id="${id}" onclick="window.__copyCode('${id}')">
          <span class="icon-wrapper">${copyIcon}</span>
          <span class="text-wrapper">複製</span>
        </button>
      </div>
      <div class="code-content-wrapper">
        <pre id="${id}" class="line-numbers"><code class="language-${lang}">${highlighted}</code></pre>
      </div>
    </div>
  `;
}

// Global copy handler
window.__copyCode = function (id) {
  const pre = document.getElementById(id);
  if (!pre) return;
  const text = pre.textContent;

  const copyIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
  const checkIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector(`[data-copy-id="${id}"]`);
    if (btn) {
      btn.classList.add('copied');
      btn.querySelector('.icon-wrapper').innerHTML = checkIcon;
      btn.querySelector('.text-wrapper').textContent = '已複製';

      setTimeout(() => {
        btn.classList.remove('copied');
        btn.querySelector('.icon-wrapper').innerHTML = copyIcon;
        btn.querySelector('.text-wrapper').textContent = '複製';
      }, 2000);
    }
  });
};
