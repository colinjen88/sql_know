// =========================================
// AI & LLM 技術選型
// =========================================

export const techStackData = [
  {
    id: 'llm-models',
    name: 'LLM 模型與服務商',
    emoji: '🤖',
    description: '選擇適合的基礎模型是應用的核心。',
    items: [
      {
        id: 'openai',
        name: 'OpenAI (GPT-4o)',
        type: '商用 API',
        verdict: '業界標準 / 首選',
        pros: ['推理能力最強', '開發生態系最完整', 'API 穩定度高'],
        cons: ['數據隱私限制', '需支付費用', '偶爾有速率限制'],
        recommendation: '適合絕大多數商用場景與快速開發原型。',
        quickStart: 'npm install openai',
        links: [{ label: '官方文檔', url: 'https://platform.openai.com/docs/' }]
      },
      {
        id: 'ollama',
        name: 'Ollama (Local)',
        type: '本地運行',
        verdict: '隱私首選',
        pros: ['完全離線運行', '免費用', '支援多種開源模型'],
        cons: ['依賴本地硬體 (GPU)', '推理速度受限'],
        recommendation: '適合實驗性開發、處理敏感數據。',
        quickStart: 'ollama run llama3',
        links: [{ label: 'Ollama 官網', url: 'https://ollama.com/' }]
      }
    ]
  }
];
