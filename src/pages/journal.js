// =========================================
// Journal Page — Learning Log
// =========================================

import {
    getJournalEntries,
    addJournalEntry,
    deleteJournalEntry,
} from '../components/progressRing.js';

export function renderJournal() {
    const main = document.getElementById('main-content');
    const entries = getJournalEntries();

    main.innerHTML = `
    <div class="fade-slide-in">
      <h2 class="page-title">📅 學習日誌</h2>
      <p class="page-desc">記錄每日的學習過程、踩過的坑、與解決方案。嚴格遵守「遇到 → 查詢 → 記錄 → 實作」循環。</p>

      <!-- New Entry Form -->
      <div class="card" style="margin-bottom: 28px;">
        <div class="card-header">
          <div class="card-icon cyan">✏️</div>
          <div>
            <div class="card-title">新增日誌</div>
            <div class="card-subtitle">記錄今天學到的東西</div>
          </div>
        </div>
        <div class="card-body">
          <div style="margin-bottom: 14px;">
            <label style="font-size: 13px; color: var(--text-muted); display: block; margin-bottom: 6px;">📌 主題摘要</label>
            <input class="filter-input" type="text" id="journal-title" placeholder="例如：學會使用 CREATE TABLE" style="width: 100%;" />
          </div>
          <div style="margin-bottom: 14px;">
            <label style="font-size: 13px; color: var(--text-muted); display: block; margin-bottom: 6px;">📝 今日心得</label>
            <textarea class="filter-input" id="journal-content" rows="4" placeholder="今天學到了什麼？遇到什麼問題？怎麼解決的？" style="width: 100%; resize: vertical; font-family: var(--font-sans);"></textarea>
          </div>
          <div style="margin-bottom: 14px;">
            <label style="font-size: 13px; color: var(--text-muted); display: block; margin-bottom: 6px;">🏷️ 階段</label>
            <select class="filter-input" id="journal-phase" style="width: 200px;">
              <option value="Phase 1">🌱 Phase 1 — 基礎生存</option>
              <option value="Phase 2">🌿 Phase 2 — 結構與關聯</option>
              <option value="Phase 3">🌳 Phase 3 — 數據洞察</option>
            </select>
          </div>
          <button class="btn btn-primary" id="journal-submit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
            新增記錄
          </button>
        </div>
      </div>

      <!-- Timeline -->
      <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: var(--text-primary);">📚 歷史記錄</h3>

      ${entries.length === 0 ? `
        <div class="empty-state">
          <div class="empty-state-emoji">📝</div>
          <div class="empty-state-text">還沒有日誌記錄，開始你的第一篇吧！</div>
        </div>
      ` : `
        <div class="journal-timeline">
          ${entries.map(entry => renderEntry(entry)).join('')}
        </div>
      `}
    </div>
  `;

    // submit handler
    document.getElementById('journal-submit').addEventListener('click', () => {
        const title = document.getElementById('journal-title').value.trim();
        const content = document.getElementById('journal-content').value.trim();
        const phase = document.getElementById('journal-phase').value;

        if (!title || !content) {
            alert('請填寫主題摘要和今日心得！');
            return;
        }

        addJournalEntry({ title, content, phase });
        renderJournal();
    });

    // delete handlers
    main.querySelectorAll('[data-delete-id]').forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('確定要刪除這篇日誌嗎？')) {
                deleteJournalEntry(parseInt(btn.dataset.deleteId));
                renderJournal();
            }
        });
    });
}

function renderEntry(entry) {
    const date = new Date(entry.date);
    const dateStr = date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
    });
    const timeStr = date.toLocaleTimeString('zh-TW', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return `
    <div class="journal-entry">
      <div class="journal-date">${dateStr} ${timeStr}</div>
      <div class="journal-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
          <div>
            <div style="font-size: 16px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">${entry.title}</div>
            <span class="tag tag-cyan">${entry.phase}</span>
          </div>
          <button class="btn-secondary btn" style="padding: 4px 10px; font-size: 12px;" data-delete-id="${entry.id}">
            🗑️ 刪除
          </button>
        </div>
        <div style="color: var(--text-secondary); font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${entry.content}</div>
      </div>
    </div>
  `;
}
