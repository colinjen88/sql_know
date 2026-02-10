// =========================================
// SQL Mastery — Main Entry Point
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

// Update sidebar & header on route change
setRouteChangeCallback((path) => {
    renderSidebar();
    renderHeader(path);

    // Scroll main to top on route change
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.scrollTop = 0;
});

// Global search handler
window.addEventListener('global-search', (e) => {
    const query = e.detail;
    if (query.length > 0) {
        // Simple search: navigate to syntax with search as filter
        // (could be expanded to search across all data)
        const currentHash = window.location.hash.slice(1).split('?')[0];
        // Keep user on same page, let page handle search
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
initRouter();
