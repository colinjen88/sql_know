// =========================================
// Progress Ring + Progress State
// =========================================

import { getData } from '../data/dataLoader.js';
import { store } from '../store.js';

const getStorageKey = () => `knowsys-progress-${store.getCurrentKB().id}`;
const getJournalKey = () => `knowsys-journal-${store.getCurrentKB().id}`;

export function getProgress() {
    try {
        return JSON.parse(localStorage.getItem(getStorageKey()) || '{}');
    } catch {
        return {};
    }
}

export function setSkillComplete(skillId, completed) {
    const progress = getProgress();
    progress[skillId] = completed;
    localStorage.setItem(getStorageKey(), JSON.stringify(progress));
}

export function isSkillComplete(skillId) {
    return !!getProgress()[skillId];
}

export function getOverallProgress() {
    const roadmapData = getData('roadmap');
    const progress = getProgress();
    let total = 0;
    let done = 0;
    roadmapData.forEach(phase => {
        phase.skills.forEach(skill => {
            total++;
            // Support both string IDs and objects if needed
            const id = typeof skill === 'string' ? skill : skill.id;
            if (progress[id]) done++;
        });
    });
    return total === 0 ? 0 : Math.round((done / total) * 100);
}

export function getPhaseProgress(phaseId) {
    const roadmapData = getData('roadmap');
    const progress = getProgress();
    const phase = roadmapData.find(p => p.id === phaseId || p.phase === phaseId);
    if (!phase) return 0;
    let total = phase.skills.length;
    let done = phase.skills.filter(s => {
        const id = typeof s === 'string' ? s : s.id;
        return progress[id];
    }).length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
}

export function renderProgressRing(percent, size = 120) {
    const r = (size - 16) / 2;
    const circumference = 2 * Math.PI * r;
    const offset = circumference - (percent / 100) * circumference;

    return `
    <div class="progress-ring-container">
      <div class="progress-ring" style="width:${size}px;height:${size}px">
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="var(--color-primary)" />
              <stop offset="100%" stop-color="var(--color-accent)" />
            </linearGradient>
          </defs>
          <circle class="progress-ring-bg" cx="${size / 2}" cy="${size / 2}" r="${r}" />
          <circle class="progress-ring-fill" cx="${size / 2}" cy="${size / 2}" r="${r}"
            stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" />
        </svg>
        <div class="progress-ring-text">
          <div class="progress-ring-percent">${percent}%</div>
          <div class="progress-ring-label">完成率</div>
        </div>
      </div>
    </div>
  `;
}

// Journal data
export function getJournalEntries() {
    try {
        return JSON.parse(localStorage.getItem(getJournalKey()) || '[]');
    } catch {
        return [];
    }
}

export function addJournalEntry(entry) {
    const entries = getJournalEntries();
    entries.unshift({ ...entry, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem(getJournalKey(), JSON.stringify(entries));
}

export function deleteJournalEntry(id) {
    const entries = getJournalEntries().filter(e => e.id !== id);
    localStorage.setItem(getJournalKey(), JSON.stringify(entries));
}
