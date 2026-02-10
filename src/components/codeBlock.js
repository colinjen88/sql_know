// =========================================
// Code Block Component
// =========================================

import Prism from 'prismjs';
import 'prismjs/components/prism-sql';

export function renderCodeBlock(code, lang = 'sql') {
    const highlighted = Prism.highlight(code.trim(), Prism.languages[lang] || Prism.languages.sql, lang);
    const id = 'cb-' + Math.random().toString(36).slice(2, 9);

    return `
    <div class="code-block">
      <div class="code-block-header">
        <span class="code-block-lang">${lang}</span>
        <button class="code-block-copy" data-copy-id="${id}" onclick="window.__copyCode('${id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          <span>複製</span>
        </button>
      </div>
      <pre id="${id}"><code class="language-${lang}">${highlighted}</code></pre>
    </div>
  `;
}

// Global copy handler
window.__copyCode = function (id) {
    const pre = document.getElementById(id);
    if (!pre) return;
    const text = pre.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector(`[data-copy-id="${id}"]`);
        if (btn) {
            btn.classList.add('copied');
            btn.querySelector('span').textContent = '已複製！';
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.querySelector('span').textContent = '複製';
            }, 2000);
        }
    });
};
