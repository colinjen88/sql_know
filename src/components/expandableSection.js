// =========================================
// UI Utility: Expandable Section
// =========================================

export function renderExpandableSection(title, content, isOpen = false) {
    const id = 'expand-' + Math.random().toString(36).substr(2, 9);

    return `
    <div class="expandable-section ${isOpen ? 'open' : ''}" id="${id}">
      <button class="expand-btn" data-toggle-section="${id}" aria-expanded="${isOpen}">
        <span class="expand-icon">▶</span>
        <span class="expand-title">${title}</span>
        <span class="expand-hint">點擊展開進階內容</span>
      </button>
      <div class="expand-content">
        ${content}
      </div>
    </div>
  `;
}
