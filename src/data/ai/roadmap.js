// =========================================
// AI & LLM 學習路徑
// =========================================

export const roadmapData = [
  {
    id: 'ai-phase-1',
    phase: 1,
    emoji: '🤖',
    title: 'Phase 1: 提示詞工程基礎',
    desc: '掌握如何與 LLM 進行高效對話，穩定輸出結果。',
    skills: [
      {
        id: 'ai-tokens',
        name: '理解 Tokens 運作',
        category: '基礎底層',
        hint: '學習如何計算成本與處理 Context 限制。',
        link: 'tokens'
      },
      {
        id: 'ai-prompting',
        name: '基礎提示詞技巧',
        category: 'Prompting',
        hint: 'Zero-shot 與 Few-shot 的應用場景。',
        link: 'prompt-engineering'
      }
    ]
  },
  {
    id: 'ai-phase-2',
    phase: 2,
    emoji: '🔌',
    title: 'Phase 2: RAG 與 API 整合',
    desc: '將 AI 模型接入外部資料，打造具備專屬知識的系統。',
    skills: [
      {
        id: 'ai-api',
        name: 'LLM API 串接',
        category: '開發',
        hint: '使用 OpenAI 或 Anthropic SDK 進行調用。',
        link: null
      },
      {
        id: 'ai-rag',
        name: 'RAG 知識庫搭建',
        category: '應用',
        hint: '理解整合向量資料庫與檢索流程。',
        link: null
      }
    ]
  }
];
