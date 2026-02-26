// =========================================
// Dashboard Page
// =========================================

import { getData } from '../data/dataLoader.js';
import { renderProgressRing, getOverallProgress, getPhaseProgress } from '../components/progressRing.js';
import { navigate } from '../router.js';
import { store } from '../store.js';

export function renderDashboard() {
  const currentKB = store.getCurrentKB();
  const syntaxData = getData('syntax');
  const conceptsData = getData('concepts');
  const cookbookData = getData('cookbook');
  const roadmapData = getData('roadmap');

  const main = document.getElementById('main-content');
  const progress = getOverallProgress();

  const totalSkills = roadmapData.reduce((sum, p) => sum + p.skills.length, 0);
  const completedSkills = Math.round((progress / 100) * totalSkills);

  const objectiveText = currentKB.id === 'sql'
    ? '透過實作「任務管理系統」，從零掌握 SQL 資料庫技能。'
    : '掌握從 Prompt Engineering 到 RAG 的全方位 AI 開發能力。';

  main.innerHTML = `
    <div class="fade-slide-in">
      <h2 class="page-title">歡迎回來！👋</h2>
      <p class="page-desc">繼續你的 ${currentKB.name} 學習之旅。${objectiveText}</p>

      <!-- Stats Row -->
      <div class="grid-3" style="margin-bottom: 28px;">
        <div class="stat-card stagger-item card-clickable" data-nav="syntax">
          <div class="stat-icon card-icon cyan">📖</div>
          <div class="stat-info">
            <div class="stat-value">${syntaxData.length}</div>
            <div class="stat-label">${currentKB.labels.syntax}</div>
          </div>
        </div>
        <div class="stat-card stagger-item card-clickable" data-nav="concepts">
          <div class="stat-icon card-icon amber">🧠</div>
          <div class="stat-info">
            <div class="stat-value">${conceptsData.length}</div>
            <div class="stat-label">${currentKB.labels.concepts}</div>
          </div>
        </div>
        <div class="stat-card stagger-item card-clickable" data-nav="cookbook">
          <div class="stat-icon card-icon emerald">🍳</div>
          <div class="stat-info">
            <div class="stat-value">${cookbookData.length}</div>
            <div class="stat-label">${currentKB.labels.cookbook}</div>
          </div>
        </div>
        <div class="stat-card stagger-item card-clickable" data-nav="tech">
          <div class="stat-icon card-icon cyan">🔧</div>
          <div class="stat-info">
            <div class="stat-value">2</div>
            <div class="stat-label">${currentKB.labels.tech || '技術選型'}</div>
          </div>
        </div>
        <div class="stat-card stagger-item card-clickable" data-nav="guide">
          <div class="stat-icon card-icon amber">📏</div>
          <div class="stat-info">
            <div class="stat-value">3</div>
            <div class="stat-label">${currentKB.labels.guide || '開發規範'}</div>
          </div>
        </div>
        <div class="stat-card stagger-item card-clickable" data-nav="roadmap">
          <div class="stat-icon card-icon" style="background: rgba(139,92,246,0.15)">🎯</div>
          <div class="stat-info">
            <div class="stat-value">${completedSkills}/${totalSkills}</div>
            <div class="stat-label">技能完成</div>
          </div>
        </div>
      </div>

      <!-- Progress & Phases -->
      <div class="grid-2" style="margin-bottom: 28px;">
        <div class="card stagger-item">
          <div class="card-header">
            <div class="card-icon cyan">📊</div>
            <div>
              <div class="card-title">學習進度</div>
              <div class="card-subtitle">整體完成率</div>
            </div>
          </div>
          <div style="display: flex; justify-content: center; padding: 16px 0;">
            ${renderProgressRing(progress, 140)}
          </div>
        </div>

        <div class="card stagger-item">
          <div class="card-header">
            <div class="card-icon amber">🗺️</div>
            <div>
              <div class="card-title">三階段進度</div>
              <div class="card-subtitle">Phase 1 → 2 → 3</div>
            </div>
          </div>
          <div class="card-body">
            ${roadmapData.map(phase => renderPhaseBar(phase)).join('')}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 12px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: var(--text-primary);">⚡ 快速入口 (${currentKB.labels.syntax})</h3>
      </div>
      <div class="grid-3">
        ${syntaxData.slice(0, 3).map((item, i) => `
          <div class="card card-clickable stagger-item" data-nav="syntax" data-detail="${item.id}">
            <div class="card-header">
              <div class="card-icon cyan">${item.emoji || '📄'}</div>
              <div>
                <div class="card-title">${item.name || item.command}</div>
                <span class="tag tag-cyan">${item.category}</span>
              </div>
            </div>
            <div class="card-body">${item.summary || item.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // attach click handlers
  main.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.nav;
      const detail = el.dataset.detail;
      if (detail) {
        navigate(target, { id: detail });
      } else {
        navigate(target);
      }
    });
  });
}

function renderPhaseBar(phase) {
  const pct = getPhaseProgress(phase.id);
  return `
    <div style="margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <span style="font-size: 14px; font-weight: 500;">${phase.emoji} ${phase.title}</span>
        <span style="font-size: 12px; color: var(--text-muted);">${pct}%</span>
      </div>
      <div class="sidebar-progress-bar">
        <div class="sidebar-progress-fill" style="width: ${pct}%"></div>
      </div>
    </div>
  `;
}
