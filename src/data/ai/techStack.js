// =========================================
// AI & LLM 技術選型
// =========================================

export const techStackData = [
  {
    id: 'llm-providers',
    name: '模型供應商 (LLM Providers)',
    emoji: '🧠',
    description: '選擇適合的基礎模型是應用的核心，需平衡能力、延遲與成本。',
    items: [
      {
        id: 'openai',
        name: 'OpenAI (GPT-4o / gpt-4-turbo)',
        type: 'Closed Source',
        intro: '目前的業界標準，具備最強大的推理能力與最完整的開發者生態。',
        verdict: '🏆 綜合實力最強',
        pros: ['推理能力頂尖', 'Function Calling 極其穩定', 'API 響應速度快'],
        cons: ['資料隱私疑慮 (雖然 Enterprise 版有保障)', '價格較高', '過度依賴單一供應商'],
        links: [{ label: 'Official Site', url: 'https://openai.com/' }]
      },
      {
        id: 'anthropic',
        name: 'Anthropic (Claude 3.5 Sonnet)',
        type: 'Closed Source',
        intro: '以程式編寫與自然語言理解著稱，是目前 GPT-4o 的最強有力競爭者。',
        verdict: '💻 程式開發首選',
        pros: ['程式碼生成極其精確', '語氣更自然、更有條理', '更大的上下文窗口 (200k)'],
        cons: ['API 穩定性偶爾稍遜於 OpenAI'],
        links: [{ label: 'Official Site', url: 'https://www.anthropic.com/' }]
      },
      {
        id: 'ollama',
        name: 'Ollama (Llama 3 / Mistral)',
        type: 'Open Source (Local)',
        intro: '讓你在本地輕鬆運行開源模型，完全掌控資料隱私且零成本。',
        verdict: '🏠 本地部署首選',
        pros: ['完全私密、零 API 費用', '離線可用', '社群模型豐富'],
        cons: ['需要強大的本地硬體 (GPU)', '推理能力通常弱於頂尖閉源模型'],
        links: [{ label: 'Official Site', url: 'https://ollama.com/' }]
      }
    ]
  },
  {
    id: 'frameworks',
    name: '開發框架 (Frameworks)',
    emoji: '🛠️',
    description: '簡化 LLM 應用的開發流程，提供 RAG、Agent 與鏈式調用的抽象。',
    items: [
      {
        id: 'langchain',
        name: 'LangChain',
        type: 'Orchestration',
        intro: '最受歡迎的 AI 開發框架，提供豐富的組件來構建複雜的 LLM 鏈。',
        verdict: '📚 功能最全面',
        pros: ['組件極其豐富 (向量庫、載入器、記憶體)', '跨模型調用方便'],
        cons: ['過於抽象導致學習曲線陡峭', '程式碼庫較重'],
        links: [{ label: 'Docs', url: 'https://js.langchain.com/' }]
      },
      {
        id: 'vercel-ai-sdk',
        name: 'Vercel AI SDK',
        type: 'Frontend-focused',
        intro: '為 React/Next.js 優化的 SDK，處理 Streaming 與 UI 狀態極其簡單。',
        verdict: '✨ 前端整合最順手',
        pros: ['與 React Hooks 完美整合', '內建 Streaming 支援', '輕量化'],
        links: [{ label: 'Docs', url: 'https://sdk.vercel.ai/docs' }]
      }
    ]
  }
];
