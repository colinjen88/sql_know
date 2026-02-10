// =========================================
// Header Component
// =========================================

import { makeSvg } from './sidebar.js';

const PAGE_TITLES = {
  dashboard: { title: '首頁總覽', breadcrumb: 'Dashboard' },
  syntax: { title: '📖 語法字典', breadcrumb: 'Syntax Dictionary' },
  concepts: { title: '🧠 核心觀念', breadcrumb: 'Core Concepts' },
  cookbook: { title: '🍳 實戰食譜', breadcrumb: 'Cookbook' },
  tech: { title: '🔧 技術選型', breadcrumb: 'Tech Stack' },
  guide: { title: '📏 開發規範', breadcrumb: 'Style Guide' },
  roadmap: { title: '🗺️ 學習路徑', breadcrumb: 'Roadmap' },
  journal: { title: '📅 學習日誌', breadcrumb: 'Journal' },
};

export function renderHeader(route = 'dashboard') {
  const header = document.getElementById('header');
  const page = PAGE_TITLES[route] || PAGE_TITLES.dashboard;

  header.innerHTML = `
    <div class="header-left">
      <h1 class="header-title">${page.title}</h1>
      <span class="header-breadcrumb">${page.breadcrumb}</span>
    </div>
    <div class="header-right">
      <div class="header-search" id="global-search">
        ${makeSvg('search', 'header-search-icon')}
        <input type="text" placeholder="搜尋語法、觀念..." id="search-input" />
      </div>
    </div>
  `;

  // search functionality
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const event = new CustomEvent('global-search', { detail: e.target.value });
      window.dispatchEvent(event);
    });
  }
}
