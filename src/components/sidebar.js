// =========================================
// Sidebar Component
// =========================================

import { navigate, getCurrentRoute } from '../router.js';
import { getOverallProgress } from './progressRing.js';
import { store } from '../store.js';
import { getData } from '../data/dataLoader.js';

const NAV_ITEMS = [
  { id: 'dashboard', icon: 'home', labelKey: 'dashboard', defaultLabel: '首頁總覽', section: 'main' },
  { id: 'syntax', icon: 'book-open', labelKey: 'syntax', defaultLabel: '參考字典', section: 'learn' },
  { id: 'concepts', icon: 'lightbulb', labelKey: 'concepts', defaultLabel: '核心觀念', section: 'learn' },
  { id: 'cookbook', icon: 'chef-hat', labelKey: 'cookbook', defaultLabel: '實戰食譜', section: 'learn' },
  { id: 'tech', icon: 'wrench', labelKey: 'tech', defaultLabel: '技術選型', section: 'learn' },
  { id: 'guide', icon: 'ruler', labelKey: 'guide', defaultLabel: '開發規範', section: 'learn' },
  { id: 'roadmap', icon: 'map', labelKey: 'roadmap', defaultLabel: '學習路徑', section: 'track' },
  { id: 'journal', icon: 'notebook-pen', labelKey: 'journal', defaultLabel: '學習日誌', section: 'track' },
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
  'database': '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>',
  'cpu': '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M15 2v2"/><path d="M9 2v2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 20v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'rss': '<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',
  'flask-conical': '<path d="M10 2v8"/><path d="M14 2v8"/><path d="M8.5 2h7"/><path d="M7 22h10"/><path d="M9 14.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/><path d="M15 17.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/><path d="M7 10h10l3.5 10.5c.3.9-.3 1.5-1.2 1.5H4.7c-.9 0-1.5-.6-1.2-1.5L7 10z"/>',
};

function makeSvg(iconId, cls = '') {
  return `<svg class="${cls}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON_SVG[iconId] || ''}</svg>`;
}

export function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  const current = getCurrentRoute();
  const activePath = current ? current.path : 'dashboard';
  const progress = getOverallProgress();
  const currentKB = store.getCurrentKB();

  // Use the pre-defined navItems from store.js
  const baseItems = currentKB.navItems;

  // Dynamic badges
  const counts = {
    syntax: getData('syntax').length,
    concepts: getData('concepts').length,
    cookbook: getData('cookbook').length,
  };

  const navWithBadges = baseItems.map(item => ({
    ...item,
    badge: counts[item.id] ? counts[item.id].toString() : null
  }));

  const groupedNav = currentKB.navGroups.map(group => ({
    ...group,
    items: navWithBadges.filter(i => i.section === group.id)
  }));

  sidebar.innerHTML = `
    <div class="logo-area">
      <div class="logo-icon" style="background: ${currentKB.color}">${makeSvg(currentKB.icon, '')}</div>
      <div class="logo-text" style="color: var(--text-primary)">${currentKB.name}</div>
    </div>
    
    <nav class="sidebar-nav">
      ${groupedNav.map(group => renderSection(group.label, group.items, activePath)).join('')}
    </nav>
    
    <div class="sidebar-progress" style="margin-top:auto; padding-top:24px; border-top:1px solid var(--border-color);">
      <div class="sidebar-progress-label" style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:12px; color:var(--text-muted);">
        <span>${currentKB.id.toUpperCase()} 進度</span>
        <span>${progress}%</span>
      </div>
      <div class="sidebar-progress-bar">
        <div class="sidebar-progress-fill" style="width: ${progress}%; background: ${currentKB.color}"></div>
      </div>
    </div>
  `;

  // Attach event listeners
  sidebar.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      navigate(link.dataset.route);
    });
  });
}

function renderSection(label, items, activePath) {
  const labelHtml = label ? `<div class="nav-section-title">${label}</div>` : '';
  const linksHtml = items.map(item => {
    const isActive = activePath === item.id ? 'active' : '';
    const badgeClass = item.badge === 'New' ? 'nav-badge badge-new' : 'nav-badge';
    const badgeHtml = item.badge ? `<span class="${badgeClass}">${item.badge}</span>` : '';
    return `
      <div class="nav-item ${isActive}" data-route="${item.id}">
        ${makeSvg(item.icon, 'nav-icon')}
        <span>${item.label}</span>
        ${badgeHtml}
      </div>
    `;
  }).join('');

  return labelHtml + linksHtml;
}

export { makeSvg, ICON_SVG };
