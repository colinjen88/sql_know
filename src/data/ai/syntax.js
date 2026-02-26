// =========================================
// AI & LLM 語法/指令字典
// =========================================

export const syntaxData = [
  {
    id: 'zero-shot',
    command: 'Zero-Shot Prompting',
    category: 'Basic',
    desc: '直接向模型提問，不提供任何範例。',
    usage: '適用於模型本身就有強大預訓練知識的簡單任務。',
    example: 'Translate the following English text to French: "Hello, how are you?"'
  },
  {
    id: 'few-shot',
    command: 'Few-Shot Prompting',
    category: 'Refinement',
    desc: '提供一些「範例對」給模型，引導它理解輸出格式或邏輯。',
    usage: '當輸出格式複雜或需要特定風格時。',
    example: 'Text: Happy -> Label: Positive\nText: Sad -> Label: Negative\nText: Excited -> Label:'
  },
  {
    id: 'chain-of-thought',
    command: 'Chain of Thought (CoT)',
    category: 'Reasoning',
    desc: '引導模型「一步步思考」，解決複雜邏輯問題。',
    usage: '數學題、邏輯推導或需要中間步驟的任務。',
    example: 'Let\'s think step by step. First, calculate the...'
  },
  {
    id: 'system-prompt',
    command: 'System Prompt',
    category: 'Architecture',
    desc: '定義 AI 的角色與基礎行為準則。',
    usage: '設定 AI 的性格、專業領域、禁止事項。',
    example: 'You are a helpful assistant that only speaks in code.'
  }
];
