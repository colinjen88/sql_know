// =========================================
// Header Component
// =========================================

import { makeSvg } from './sidebar.js';

const PAGE_TITLES = {
  dashboard: { title: 'Dashboard', breadcrumb: 'Overview' },
  syntax: { title: 'Syntax Dictionary', breadcrumb: 'SQL Syntax' },
  concepts: { title: 'Core Concepts', breadcrumb: 'Foundations' },
  cookbook: { title: 'Cookbook', breadcrumb: 'Practical Recipes' },
  tech: { title: 'Tech Stack', breadcrumb: 'Technologies' },
  guide: { title: 'Style Guide', breadcrumb: 'Coding Standards' },
  roadmap: { title: 'Roadmap', breadcrumb: 'Learning Path' },
  journal: { title: 'Journal', breadcrumb: 'Learning Log' },
};

export function renderHeader(route = 'dashboard') {
  const header = document.getElementById('header');
  const page = PAGE_TITLES[route] || PAGE_TITLES.dashboard;

  // Uses inline styles for header title to keep CSS clean and specific to header context
  // Uses .search-bar .search-input .search-icon classes defined in style.css

  header.innerHTML = `
    <div>
      <div style="font-weight: 600; font-size: 16px; color: var(--text-primary); margin-bottom: 2px;">${page.title}</div>
      <div class="breadcrumb" style="font-size: 13px;">
        <span>SQL Mastery</span>
        <span style="color: var(--text-muted)">/</span>
        <span class="current">${page.breadcrumb}</span>
      </div>
    </div>
    
    <div class="search-bar" id="global-search">
      ${makeSvg('search', 'search-icon')}
      <input type="text" class="search-input" placeholder="Search (Cmd+K)..." id="search-input" />
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
