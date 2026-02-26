// =========================================
// Roadmap Page — Learning Path & Skill Tree
// =========================================

import { getData } from '../data/dataLoader.js';
import {
  isSkillComplete,
  setSkillComplete,
  getPhaseProgress,
  getOverallProgress,
} from '../components/progressRing.js';
import { renderSidebar } from '../components/sidebar.js';
import { navigate } from '../router.js';

export function renderRoadmap() {
  const roadmapData = getData('roadmap');
  const main = document.getElementById('main-content');
  const progress = getOverallProgress();

  const isAI = store.currentKB === 'ai';
  const pageTitle = isAI ? '🧠 AI 學習地圖' : '🗺️ 學習路徑';
  const pageDesc = isAI
    ? '從基礎提示工程到高級 Agent 開發。跟隨這個路徑，掌握成為 AI 工程師所需的核心技能。'
    : '透過三個階段完成 Task Tracker 任務管理系統。勾選已掌握的技能，追蹤你的學習進度。';

  main.innerHTML = `
    <div class="fade-slide-in">
      <h2 class="page-title">${pageTitle}</h2>
      <p class="page-desc">${pageDesc}</p>

      ${!isAI ? `
      <div class="callout" style="margin-bottom: 28px;">
        <strong>🎯 目標：</strong> 建立 tasks 表格 → 新增資料 → 查詢篩選 → 更新刪除 → 多表關聯 → 統計報表
      </div>
      ` : ''}

      <div class="roadmap-container">
        ${roadmapData.map(phase => renderPhase(phase)).join('')}
      </div>
    </div>
  `;

  // checkbox toggle
  main.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', () => {
      const skillId = item.dataset.skillId;
      const currentlyCompleted = isSkillComplete(skillId);
      setSkillComplete(skillId, !currentlyCompleted);
      renderRoadmap();
      renderSidebar(); // update sidebar progress
    });
  });

  // link to syntax
  main.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      navigate('syntax', { id: link.dataset.link });
    });
  });
}

function renderPhase(phase) {
  const pct = getPhaseProgress(phase.id);
  const phaseClass = `phase-${phase.phase}`;

  return `
    <div class="roadmap-phase">
      <div class="phase-header">
        <span class="phase-badge ${phaseClass}">${phase.emoji} Phase ${phase.phase}</span>
        <div style="flex: 1;">
          <div class="phase-title">${phase.title}</div>
          <div class="phase-desc">${phase.desc}</div>
        </div>
        <span style="font-size: 14px; font-weight: 600; color: var(--text-muted);">${pct}%</span>
      </div>

      ${phase.skills.map(skill => renderSkill(skill)).join('')}
    </div>
  `;
}

function renderSkill(skill) {
  const completed = isSkillComplete(skill.id);
  const completedClass = completed ? 'completed' : '';
  const checkedClass = completed ? 'checked' : '';

  return `
    <div class="skill-item ${completedClass}" data-skill-id="${skill.id}">
      <div class="skill-checkbox ${checkedClass}"></div>
      <div style="flex: 1;">
        <div class="skill-name">${skill.name}</div>
        <div class="skill-hint">
          <span class="tag tag-cyan" style="margin-right: 6px;">${skill.category}</span>
          ${skill.hint}
        </div>
      </div>
      ${skill.link ? `<span class="tag tag-amber" data-link="${skill.link}" style="cursor: pointer; align-self: center;">查看語法 →</span>` : ''}
    </div>
  `;
}
