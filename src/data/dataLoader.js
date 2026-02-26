// =========================================
// Data Loader — Handles multi-KB data
// =========================================

import { store } from '../store.js';

// SQL Data
import * as sqlConcepts from './sql/concepts.js';
import * as sqlSyntax from './sql/syntax.js';
import * as sqlCookbook from './sql/cookbook.js';
import * as sqlRoadmap from './sql/roadmap.js';
import * as sqlTech from './sql/techStack.js';
import * as sqlGuide from './sql/styleGuide.js';

// AI Data
import * as aiConcepts from './ai/concepts.js';
import * as aiSyntax from './ai/syntax.js';
import * as aiCookbook from './ai/cookbook.js';
import * as aiRoadmap from './ai/roadmap.js';
import * as aiTech from './ai/techStack.js';
import * as aiGuide from './ai/styleGuide.js';

const DATA_MAP = {
  sql: {
    concepts: sqlConcepts.conceptsData,
    syntax: sqlSyntax.syntaxData,
    cookbook: sqlCookbook.cookbookData,
    roadmap: sqlRoadmap.roadmapData,
    tech: sqlTech.techStackData,
    guide: sqlGuide.styleGuideData
  },
  ai: {
    concepts: aiConcepts.conceptsData,
    syntax: aiSyntax.syntaxData,
    cookbook: aiCookbook.cookbookData,
    roadmap: aiRoadmap.roadmapData,
    tech: aiTech.techStackData,
    guide: aiGuide.styleGuideData
  }
};

export function getData(type) {
  const currentKB = store.getCurrentKB().id;
  return DATA_MAP[currentKB][type] || [];
}
