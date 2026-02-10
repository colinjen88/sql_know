// =========================================
// Sidebar Component
// =========================================

import { navigate, getCurrentRoute } from '../router.js';
import { getOverallProgress } from './progressRing.js';

const NAV_ITEMS = [
  { id: 'dashboard', icon: 'home', label: '首頁總覽', section: 'main' },
  { id: 'syntax', icon: 'book-open', label: '語法字典', section: 'learn', badge: '5' },
  { id: 'concepts', icon: 'lightbulb', label: '核心觀念', section: 'learn', badge: '2' },
  { id: 'cookbook', icon: 'chef-hat', label: '實戰食譜', section: 'learn', badge: '2' },
  { id: 'tech', icon: 'wrench', label: '技術選型', section: 'learn', badge: 'New' },
  { id: 'guide', icon: 'ruler', label: '開發規範', section: 'learn', badge: 'New' },
  { id: 'roadmap', icon: 'map', label: '學習路徑', section: 'track' },
  { id: 'journal', icon: 'notebook-pen', label: '學習日誌', section: 'track' },
];

const ICON_SVG = {
  'home': '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  'lightbulb': '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  'chef-hat': '<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/>',
  'map': '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  'notebook-pen': '<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L11.3 8.713a1 1 0 0 0-.256.421l-.887 3.315 3.315-.887a1 1 0 0 0 .421-.256z"/>',
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'wrench': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  'ruler': '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0l12.6 12.6z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',
};

function makeSvg(iconId, cls = '') {
  return `<svg class="${cls}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON_SVG[iconId] || ''}</svg>`;
}

export function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  const current = getCurrentRoute();
  const activePath = current ? current.path : 'dashboard';
  const progress = getOverallProgress();

  const sections = {
    main: NAV_ITEMS.filter(i => i.section === 'main'),
    learn: NAV_ITEMS.filter(i => i.section === 'learn'),
    track: NAV_ITEMS.filter(i => i.section === 'track'),
  };

  sidebar.innerHTML = `
    <div class="sidebar-brand">
      <div class="sidebar-brand-icon">📘</div>
      <div class="sidebar-brand-text">
        <div class="sidebar-brand-title">SQL Mastery</div>
        <div class="sidebar-brand-subtitle">Knowledge Base</div>
      </div>
    </div>
    <nav class="sidebar-nav">
      ${renderSection('', sections.main, activePath)}
      ${renderSection('學習資源', sections.learn, activePath)}
      ${renderSection('進度追蹤', sections.track, activePath)}
    </nav>
    <div class="sidebar-progress">
      <div class="sidebar-progress-label">
        <span>整體進度</span>
        <span>${progress}%</span>
      </div>
      <div class="sidebar-progress-bar">
        <div class="sidebar-progress-fill" style="width: ${progress}%"></div>
      </div>
    </div>
  `;

  sidebar.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      navigate(link.dataset.route);
    });
  });
}

function renderSection(label, items, activePath) {
  const labelHtml = label ? `<div class="sidebar-section-label">${label}</div>` : '';
  const linksHtml = items.map(item => {
    const isActive = activePath === item.id ? 'active' : '';
    const badgeHtml = item.badge ? `<span class="sidebar-link-badge">${item.badge}</span>` : '';
    return `
      <div class="sidebar-link ${isActive}" data-route="${item.id}">
        ${makeSvg(item.icon, 'sidebar-link-icon')}
        <span>${item.label}</span>
        ${badgeHtml}
      </div>
    `;
  }).join('');
  return labelHtml + linksHtml;
}

export { makeSvg, ICON_SVG };
