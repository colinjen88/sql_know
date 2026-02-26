// =========================================
// AI & LLM 語法/指令字典
// =========================================

export const syntaxData = [
  {
    id: 'zero-shot',
    name: 'Zero-Shot Prompting',
    emoji: '🎯',
    category: 'Basic Prompting',
    phase: 1,
    summary: '直接向模型提問，不提供任何範例。適用於模型本身就有強大預訓練知識的簡單任務。',
    syntax: 'User: [您的問題]',
    params: [
      { name: 'Prompt', desc: '直接描述您的需求或問題。' }
    ],
    example: 'Translate the following English text to French: "Hello, how are you?"',
    related: ['few-shot', 'prompt-engineering']
  },
  {
    id: 'few-shot',
    name: 'Few-Shot Prompting',
    emoji: '📑',
    category: 'Basic Prompting',
    phase: 1,
    summary: '提供一些「範例對」給模型，引導它理解輸出格式或邏輯。',
    syntax: 'User: [範例1] -> [結果1]\\nUser: [範例2] -> [結果2]\\nUser: [您的問題]',
    params: [
      { name: 'Examples', desc: '提供 3-5 個高質量的輸入輸出範例。' }
    ],
    example: 'Text: Happy -> Label: Positive\\nText: Sad -> Label: Negative\\nText: Excited -> Label:',
    related: ['zero-shot', 'prompt-engineering']
  },
  {
    id: 'chain-of-thought',
    name: 'Chain of Thought (CoT)',
    emoji: '⛓️',
    category: 'Advanced Prompting',
    phase: 1,
    summary: '引導模型「一步步思考」，顯著提升複雜邏輯問題的解決能力。',
    syntax: 'User: [問題] + "Let\'s think step by step."',
    params: [
      { name: 'Reasoning Prompt', desc: '通常使用 "Let\'s think step by step" 作為觸發詞。' }
    ],
    example: '問題：我有 3 個蘋果，吃了 1 個後又買了 2 個，現在有幾個？\\n回答：讓我們一步步思考。首先，3-1=2。接著，2+2=4。所以我有 4 個蘋果。',
    related: ['prompt-engineering', 'few-shot']
  },
  {
    id: 'temperature',
    name: 'Temperature',
    emoji: '🌡️',
    category: 'Parameters',
    phase: 1,
    summary: '控制輸出的隨機性與創造力。值越高輸出越發散。',
    syntax: 'temperature: [0.0 - 2.0]',
    params: [
      { name: 'Value', desc: '0 = 嚴謹穩定；1 = 創意發散。' }
    ],
    example: 'temperature: 0.2 (適合寫程式)\\ntemperature: 0.8 (適合創意寫作)',
    related: ['top-p']
  },
  {
    id: 'json-mode',
    name: 'JSON Mode',
    emoji: '📦',
    category: 'Response Format',
    phase: 2,
    summary: '強制模型僅輸出有效的 JSON 格式。',
    syntax: 'response_format: { "type": "json_object" }',
    params: [
      { name: 'Constraint', desc: '必須在 Prompt 中明確要求輸出 JSON。' }
    ],
    example: 'User: 總結這篇評論，以 JSON 格式輸出：{"sentiment": "...", "score": 0.0}',
    related: ['system-role']
  },
  {
    id: 'tool-definition',
    name: 'Tool Definition (Function Calling)',
    emoji: '🔧',
    category: 'Parameters',
    phase: 3,
    summary: '定義模型可以調用的外部工具。',
    syntax: 'tools: [{ "type": "function", "function": { ... } }]',
    params: [
      { name: 'Parameters', desc: '使用 JSON Schema 定義函數參數。' }
    ],
    example: '{"name": "get_weather", "parameters": {"type": "object", "properties": {"location": {"type": "string"}}}}',
    related: ['agents']
  },
  {
    id: 'seed',
    name: 'Seed',
    emoji: '🌱',
    category: 'Parameters',
    phase: 2,
    summary: '固定亂數種子，讓模型在相同輸入下產生一致的回答。',
    syntax: 'seed: [integer]',
    params: [
      { name: 'Reproducibility', desc: '對於測試與除錯非常重要。' }
    ],
    example: 'seed: 42',
    related: ['temperature']
  },
  {
    id: 'top-p',
    name: 'Top-P (Nucleus Sampling)',
    emoji: '📊',
    category: 'Parameters',
    phase: 2,
    summary: '另一種控制隨機性的方式，模型只考慮機率加總前 P% 的單字。',
    syntax: 'top_p: [0.0 - 1.0]',
    params: [
      { name: 'P', desc: '0.1 代表只看前 10% 機率的詞。' }
    ],
    example: 'top_p: 0.1',
    related: ['temperature']
  },
  {
    id: 'stop-sequences',
    name: 'Stop Sequences',
    emoji: '🛑',
    category: 'Parameters',
    phase: 2,
    summary: '設定一組字串，當模型輸出遇到這些字串時立即停止。',
    syntax: 'stop: ["\\n", "User:", "###"]',
    params: [
      { name: 'Stop', desc: '最多可設定 4 個停止序列。' }
    ],
    example: 'stop: ["\\n"] (防止輸出多行內容)',
    related: ['max-tokens']
  }
];
