// =========================================
// AI & LLM 開發規範
// =========================================

export const styleGuideData = [
  {
    id: 'prompt-structure',
    name: 'Prompt 結構規範 (CO-STAR)',
    emoji: '📝',
    summary: '一致且結構化的提示詞結構，能顯著提升模型的穩定輸出並減少廢話。',
    rules: [
      {
        title: 'Context (背景背景)',
        desc: '提供任務背景，讓模型了解當前場景。',
        good: '我正在開發一個電子商務網站，需要生成商品描述。',
        bad: '寫一段商品描述。'
      },
      {
        title: 'Objective (目標)',
        desc: '明確定義你希望模型執行的具體任務。',
        good: '為這款「人體工學辦公椅」撰寫一段 100 字以內的銷售文案。',
        bad: '介紹這張椅子。'
      },
      {
        title: 'Style (風格)',
        desc: '指定輸出的語氣或特定專業風格。',
        good: '語氣應專業、具有說服力且具備科技感。',
        bad: '隨便寫寫。'
      },
      {
        title: 'Tone (語調)',
        desc: '設定回答的情感基調（如親切、嚴肅、幽默）。',
        good: '語調應熱情且充滿活力。',
        bad: '正常講話。'
      },
      {
        title: 'Audience (受眾)',
        desc: '定義目標讀者，調整資訊深度。',
        good: '目標受眾是 25-40 歲的上班族。',
        bad: '給一般人看。'
      },
      {
        title: 'Response (回應格式)',
        desc: '指定輸出的資料格式。',
        good: '請輸出為 JSON 格式，包含 title, features, price 三個欄位。',
        bad: '直接回答我。'
      }
    ]
  },
  {
    id: 'variable-injection',
    name: '變數注入與標籤化',
    emoji: '🏷️',
    summary: '使用 XML 標籤或特定的變數佔位符，明確區分指令與動態內容，防止 Prompt Injection。',
    rules: [
      {
        title: '使用 XML 標籤',
        desc: '這對 Claude 與 GPT 系列模型效果極佳。',
        good: '請總結以下內容：\\n\\n<text>\\n{{USER_INPUT}}\\n</text>',
        bad: '幫我總結：[內容]'
      },
      {
        title: '明確的分隔線',
        desc: '當輸入內容較長時，使用分隔符標記。',
        good: '--- 下方為輸入資料 ---',
        bad: '內容如下。'
      }
    ]
  }
];
