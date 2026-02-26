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
      },
      {
        id: 'ai-cot',
        name: '思維鏈 (CoT)',
        category: '推理',
        hint: '引導模型進行邏輯推導。',
        link: 'chain-of-thought'
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
        hint: '使用 SDK 調用模型並處理 Streaming。',
        link: 'chat-completion-roles'
      },
      {
        id: 'ai-embedding',
        name: 'Embedding 向量化',
        category: '基礎',
        hint: '理解文字如何變成數字座標。',
        link: 'embeddings'
      },
      {
        id: 'ai-rag',
        name: 'RAG 知識庫搭建',
        category: '應用',
        hint: '整合向量資料庫與檢索流程。',
        link: 'rag-flow'
      }
    ]
  },
  {
    id: 'ai-phase-3',
    phase: 3,
    emoji: '🚀',
    title: 'Phase 3: 智能體與生產環境優化',
    desc: '開發能自動執行任務的 Agent，並優化生產環境性能。',
    skills: [
      {
        id: 'ai-agents',
        name: 'AI Agents 基礎',
        category: '進階',
        hint: '使用工具 (Function Calling) 解決複雜任務。',
        link: 'agents'
      },
      {
        id: 'ai-eval',
        name: '模型評估與監控',
        category: '運維',
        hint: '量化模型表現，減少幻覺。',
        link: 'hallucination'
      }
    ]
  }
];
