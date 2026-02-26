// =========================================
// Header Component
// =========================================

import { makeSvg } from './sidebar.js';
import { store } from '../store.js';

const PAGE_TITLES = {
  dashboard: { title: 'Dashboard', breadcrumb: 'Overview' },
  syntax: { title: 'Syntax Dictionary', breadcrumb: 'Reference' },
  concepts: { title: 'Core Concepts', breadcrumb: 'Foundations' },
  cookbook: { title: 'Cookbook', breadcrumb: 'Recipes' },
  tech: { title: 'Tech Stack', breadcrumb: 'Technologies' },
  guide: { title: 'Style Guide', breadcrumb: 'Standards' },
  roadmap: { title: 'Roadmap', breadcrumb: 'Learning Path' },
  journal: { title: 'Journal', breadcrumb: 'Logs' },
};

export function renderHeader(route = 'dashboard') {
  const header = document.getElementById('header');
  const page = PAGE_TITLES[route] || PAGE_TITLES.dashboard;
  const currentKB = store.getCurrentKB();
  const kbs = store.getKBs();

  header.innerHTML = `
    <div class="header-left">
      <div class="kb-switcher-container">
        <div class="kb-current" id="kb-selector-btn">
          <div class="kb-icon-mini" style="background-color: ${currentKB.color}">
            ${makeSvg(currentKB.icon, 'mini-svg')}
          </div>
          <span class="kb-name">${currentKB.name}</span>
          ${makeSvg('chevron-down', 'chevron-icon')}
        </div>
        
        <div class="kb-dropdown" id="kb-dropdown">
          ${Object.values(kbs).map(kb => `
            <div class="kb-option ${kb.id === currentKB.id ? 'active' : ''}" data-kb-id="${kb.id}">
              <div class="kb-icon-mini" style="background-color: ${kb.color}">
                ${makeSvg(kb.icon, 'mini-svg')}
              </div>
              <div class="kb-option-info">
                <div class="kb-option-name">${kb.name}</div>
                <div class="kb-option-desc">${kb.description}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="header-titles">
        <div style="font-weight: 600; font-size: 16px; color: var(--text-primary); margin-bottom: 2px;">${page.title}</div>
        <div class="breadcrumb" style="font-size: 13px;">
          <span>${currentKB.name}</span>
          <span style="color: var(--text-muted)">/</span>
          <span class="current">${page.breadcrumb}</span>
        </div>
      </div>
    </div>
    
    <div class="search-bar" id="global-search">
      ${makeSvg('search', 'search-icon')}
      <input type="text" class="search-input" placeholder="Search (Cmd+K)..." id="search-input" />
    </div>
  `;

  // Search functionality
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const event = new CustomEvent('global-search', { detail: e.target.value });
      window.dispatchEvent(event);
    });
  }

  // KB Switcher functionality
  const selectorBtn = document.getElementById('kb-selector-btn');
  const dropdown = document.getElementById('kb-dropdown');
  
  if (selectorBtn && dropdown) {
    selectorBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('show');
    });

    dropdown.querySelectorAll('.kb-option').forEach(option => {
      option.addEventListener('click', (e) => {
        const kbId = option.dataset.kbId;
        if (store.setKB(kbId)) {
          // No more window.reload()! 
          // Navigation will be handled by the kb-change listener in main.js
          window.location.hash = '#dashboard'; 
        }
      });
    });
  }
}
