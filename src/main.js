// =========================================
// Knowledge System — Main Entry Point
// =========================================

import './style.css';
import './components/expandableSection.css';
import { initRouter, registerRoute, setRouteChangeCallback } from './router.js';
import { renderSidebar } from './components/sidebar.js';
import { renderHeader } from './components/header.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderSyntax } from './pages/syntax.js';
import { renderConcepts } from './pages/concepts.js';
import { renderCookbook } from './pages/cookbook.js';
import { renderRoadmap } from './pages/roadmap.js';
import { renderJournal } from './pages/journal.js';

import { renderTech } from './pages/tech.js';
import { renderGuide } from './pages/guide.js';

// Register routes
registerRoute('dashboard', (params) => renderDashboard(params));
registerRoute('syntax', (params) => renderSyntax(params));
registerRoute('concepts', (params) => renderConcepts(params));
registerRoute('cookbook', (params) => renderCookbook(params));
registerRoute('tech', (params) => renderTech(params));
registerRoute('guide', (params) => renderGuide(params));
registerRoute('roadmap', (params) => renderRoadmap(params));
registerRoute('journal', (params) => renderJournal(params));

import { store } from './store.js';

// Apply theme based on KB
function applyTheme() {
    const kb = store.getCurrentKB();
    document.documentElement.style.setProperty('--color-primary', kb.color);
    document.documentElement.style.setProperty('--color-secondary', kb.secondaryColor || kb.color);
}

// Update sidebar & header on route change
function refreshUI(path) {
    applyTheme();
    const { path: currentPath } = path ? { path } : { path: window.location.hash.slice(1).split('?')[0] || 'dashboard' };
    renderSidebar();
    renderHeader(currentPath);

    // Scroll main to top on route change
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.scrollTop = 0;

    // Trigger Syntax Highlighting
    if (window.Prism) {
        window.Prism.highlightAll();
    }
}

setRouteChangeCallback((path) => {
    refreshUI(path);
});

// Listen for KB changes to refresh without full reload
window.addEventListener('kb-change', () => {
    applyTheme();
    renderSidebar();

    // Get current route to refresh header and page content
    const { path } = window.location.hash.slice(1).split('?')[0] ?
        { path: window.location.hash.slice(1).split('?')[0] } :
        { path: 'dashboard' };

    renderHeader(path);
    initRouter(); // This now safely re-handles the current route without adding more listeners
});

// Global search handler
window.addEventListener('global-search', (e) => {
    const query = e.detail.toLowerCase();
    if (query.length === 0) return;

    console.log('Centralized Search for:', query);

    // Cross-category search within active KB
    const categories = ['syntax', 'concepts', 'cookbook'];
    const results = [];

    categories.forEach(cat => {
        const data = getData(cat);
        const matches = data.filter(item =>
            item.name.toLowerCase().includes(query) ||
            (item.summary && item.summary.toLowerCase().includes(query))
        );
        if (matches.length > 0) {
            results.push({ category: cat, matches });
        }
    });

    console.table(results);

    // Provide immediate feedback to existing page components
    const syntaxSearch = document.getElementById('syntax-search');
    if (syntaxSearch) {
        syntaxSearch.value = query;
        syntaxSearch.dispatchEvent(new Event('input'));
    }

    const conceptsSearch = document.getElementById('concepts-search');
    if (conceptsSearch) {
        conceptsSearch.value = query;
        conceptsSearch.dispatchEvent(new Event('input'));
    }
});

// Global event delegation for interactive elements
document.addEventListener('click', (e) => {
    const expandBtn = e.target.closest('[data-toggle-section]');
    if (expandBtn) {
        const targetId = expandBtn.dataset.toggleSection;
        const section = document.getElementById(targetId);
        if (section) {
            section.classList.toggle('open');
            const isExpanded = section.classList.contains('open');
            expandBtn.setAttribute('aria-expanded', isExpanded);
        }
    }
});

// Initialize
await initRouter();
