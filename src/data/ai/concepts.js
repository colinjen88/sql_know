// =========================================
// AI & LLM 核心觀念
// =========================================

export const conceptsData = [
  {
    id: 'tokens',
    name: 'Tokens (標記)',
    emoji: '🧩',
    phase: 1,
    eli5: 'Tokens 就像是 LLM 的「文字碎屑」。它不是以一個個字來處理，而是把字拆成更小的單位來理解。',
    analogy: '像是樂高積木。每個積木塊都是一個 Token，組合成完整的模型（句子）。1000 個 Tokens 約等於 750 個中文字。',
    whyMatters: [
      'Token 是收費的單位：不管是 API 還是運算資源。',
      'Context Window 的限制：LLM 一次能讀多少 Token 是有限制的。',
      '中文 Token 效率通常比英文低。'
    ],
    visual: `文字: "Hello world"
Tokens: ["Hello", " world"]

文字: "今天天氣不錯"
Tokens: ["今", "天天", "氣", "不", "錯"]`,
    codeExample: `// Tokenizer 範例 (偽代碼)
const tokens = tokenizer.encode("Hello world");
console.log(tokens.length); // 2`,
    related: ['LLM', 'Context_Window']
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering (提示工程)',
    emoji: '🪄',
    phase: 1,
    eli5: '這就是「跟 AI 說話的藝術」。你說得越精確，AI 給你的答案就越好。',
    analogy: '像是下達給實習生的指令。如果你說「去買午餐」，他可能買錯；如果你說「去巷口買一家排骨飯，不要加辣」，他就能精確完成。',
    whyMatters: [
      '提高輸出品質：減少幻覺 (Hallucination)。',
      '控制格式：讓 AI 輸出 JSON、Markdown 等特定格式。',
      '減少運算成本：更短、更精確的 Prompt 更省錢。'
    ],
    codeExample: `### Prompt 範例
Role: 你是一位專業的 SQL 專家
Task: 請幫我寫一個查詢，找出過去 30 天內消費最多的前 10 名用戶
Format: 請輸出為 Markdown 表格`,
    related: ['RAG', 'Few_Shot']
  }
];
