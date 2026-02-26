// =========================================
// Global Store — State Management
// =========================================

const KNOWLEDGE_BASES = {
  sql: {
    id: 'sql',
    name: 'SQL Mastery',
    icon: 'database',
    color: '#6366f1', // Indigo
    secondaryColor: '#818cf8',
    description: 'Structured Query Language knowledge base',
    labels: {
      syntax: '語法字典',
      concepts: '核心觀念',
      cookbook: '實戰食譜',
      roadmap: '學習路徑',
      journal: '學習日誌'
    },
    navGroups: [
      { id: 'main', label: '' },
      { id: 'learn', label: '學習資源' },
      { id: 'track', label: '進度追蹤' }
    ],
    navItems: [
      { id: 'dashboard', icon: 'home', label: '首頁總覽', section: 'main' },
      { id: 'syntax', icon: 'book-open', label: '語法字典', section: 'learn' },
      { id: 'concepts', icon: 'lightbulb', label: '核心觀念', section: 'learn' },
      { id: 'cookbook', icon: 'chef-hat', label: '實戰食譜', section: 'learn' },
      { id: 'tech', icon: 'wrench', label: '技術選型', section: 'learn' },
      { id: 'guide', icon: 'ruler', label: '開發規範', section: 'learn' },
      { id: 'roadmap', icon: 'map', label: '學習路徑', section: 'track' },
      { id: 'journal', icon: 'notebook-pen', label: '學習日誌', section: 'track' },
    ],
    descriptions: {
      syntax: '當你忘記指令怎麼寫時，來這裡快速查閱。',
      concepts: '理解「為什麼」要這樣做，面試與設計資料庫時使用。',
      cookbook: '遇到具體需求時，直接複製修改的程式碼片段。'
    }
  },
  ai: {
    id: 'ai',
    name: 'AI & LLM Guide',
    icon: 'cpu',
    color: '#8b5cf6', // Violet
    secondaryColor: '#a78bfa',
    description: 'Artificial Intelligence and LLM knowledge base',
    labels: {
      syntax: '提示詞字典',
      concepts: '模型機理',
      cookbook: '實戰工作流',
      roadmap: '技術雷達',
      journal: '開發日誌',
      news: 'AI 動態',
      playground: '提示詞實驗室'
    },
    navGroups: [
      { id: 'main', label: '' },
      { id: 'learn', label: '核心知識' },
      { id: 'tools', label: '實踐工具' },
      { id: 'news', label: '情報獲取' },
      { id: 'track', label: '進度追蹤' }
    ],
    navItems: [
      { id: 'dashboard', icon: 'home', label: '首頁總覽', section: 'main' },
      { id: 'concepts', icon: 'lightbulb', label: '模型機理', section: 'learn' },
      { id: 'syntax', icon: 'book-open', label: '提示詞框架', section: 'learn' },
      { id: 'cookbook', icon: 'chef-hat', label: '實戰工作流', section: 'tools' },
      { id: 'playground', icon: 'flask-conical', label: '提示詞實驗室', section: 'tools' },
      { id: 'news', icon: 'rss', label: 'AI 動態', section: 'news' },
      { id: 'roadmap', icon: 'map', label: '技術雷達', section: 'track' },
      { id: 'journal', icon: 'notebook-pen', label: '開發日誌', section: 'track' },
    ],
    rssFeeds: [
      { name: 'OpenAI Blog', url: 'https://openai.com/news/rss/' },
      { name: 'AI News', url: 'https://www.artificialintelligence-news.com/feed/' },
      { name: 'MIT AI News', url: 'https://news.mit.edu/topic/artificial-intelligence-rss.xml' }
    ],
    descriptions: {
      syntax: '精確控制 LLM 輸出的提示詞模式與結構。',
      concepts: '理解 Transformer、Tokens 與 Embedding 的運作原理。',
      cookbook: '從 RAG 到 Agent 的端到端實作流程參考。'
    }
  }
};

let currentKBId = localStorage.getItem('active_kb') || 'sql';

export const store = {
  getKBs: () => KNOWLEDGE_BASES,

  getCurrentKB: () => KNOWLEDGE_BASES[currentKBId],

  setKB: (kbId) => {
    if (KNOWLEDGE_BASES[kbId]) {
      currentKBId = kbId;
      localStorage.setItem('active_kb', kbId);
      // Dispatch event for components to react
      window.dispatchEvent(new CustomEvent('kb-change', { detail: KNOWLEDGE_BASES[kbId] }));
      return true;
    }
    return false;
  }
};
