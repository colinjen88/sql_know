// =========================================
// AI & LLM 開發規範
// =========================================

export const styleGuideData = [
  {
    name: 'Prompt 結構規範',
    emoji: '📝',
    summary: '一致的提示詞結構有助於模型的穩定輸出。',
    rules: [
      {
        title: '變數注入標籤',
        desc: '使用標記明確區分指令與動態內容。',
        bad: '下指令：幫我總結以下內容：[內容]',
        good: '下指令：幫我總結以下內容：\n\n<content>\n{{USER_INPUT}}\n</content>'
      }
    ]
  }
];
