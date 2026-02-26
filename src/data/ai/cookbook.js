// =========================================
// AI & LLM 實戰食譜
// =========================================

export const cookbookData = [
  {
    id: 'rag-flow',
    name: '基礎 RAG 檢索增強生成',
    emoji: '🔍',
    phase: 2,
    difficulty: 'Intermediate',
    desc: '如何讓 AI 根據你的專屬文件（如這份知識庫）進行精確問答，解決幻覺問題。',
    steps: [
      '1. **載入文件**：讀取 PDF、Markdown 或資料庫內容。',
      '2. **切分文本 (Chunking)**：將長文切成 500-1000 tokens 的小片段。',
      '3. **向量化 (Embedding)**：將片段轉換為向量座標。',
      '4. **存入向量庫**：如 Pinecone, Chroma 或 FAISS。',
      '5. **檢索與回答**：根據用戶問題找出最相關片段，連同問題一起丟給 LLM。'
    ],
    codeExample: `// 偽代碼：檢索流程
const context = vectorDB.search(userQuery, topK=3);
const prompt = \`請根據以下內容回答問題：\\n\\n\${context}\\n\\n問題：\${userQuery}\`;
const answer = await llm.generate(prompt);`
  },
  {
    id: 'text-classification',
    name: '精確文本分類器',
    emoji: '🏷️',
    phase: 1,
    difficulty: 'Beginner',
    desc: '使用 Few-shot 技巧，讓模型穩定地將輸入分類到指定標籤中。',
    steps: [
      '1. **定義標籤**：明確告知模型有哪些分類可選。',
      '2. **提供範例**：給予 3-5 個正確分類的範例。',
      '3. **設定約束**：要求模型「僅輸出標籤名稱」，不要有額外廢話。'
    ],
    codeExample: `System: 你是一個文本分類器。標籤僅限：[客訴, 詢價, 感謝, 垃圾郵件]。
User:
Text: 請問這台筆電現在多少錢？有現貨嗎？ -> Label: 詢價
Text: 你們的服務真的很爛，寄錯東西了。 -> Label: 客訴
Text: 感謝你們快速的出貨速度！ -> Label:`
  },
  {
    id: 'long-doc-summary',
    name: '長文件遞歸總結',
    emoji: '📝',
    phase: 2,
    difficulty: 'Intermediate',
    desc: '當文件超過 Context Window 時，如何使用 Map-Reduce 策略進行總結。',
    steps: [
      '1. **分段**：將文件拆分為多個模型可處理的片段。',
      '2. **局部總結 (Map)**：對每個片段分別生成摘要。',
      '3. **合併總結 (Reduce)**：將所有摘要合併後，再次進行最終總結。'
    ],
    codeExample: `// 策略示意
const partialSummaries = chunks.map(c => llm.summarize(c));
const finalSummary = llm.summarize(partialSummaries.join("\\n"));`
  },
  {
    id: 'local-llm',
    name: '使用 Ollama 跑本地模型',
    emoji: '🏠',
    phase: 1,
    difficulty: 'Beginner',
    desc: '為了隱私與離線需求，在個人電腦上部署並運行 Llama 3 或 Mistral。',
    steps: [
      '1. **安裝 Ollama**：至官網下載對應作業系統的版本。',
      '2. **下載模型**：指令行輸入 \`ollama run llama3\`。',
      '3. **API 調用**：Ollama 預設提供相容 OpenAI 的本地 API (port 11434)。'
    ],
    codeExample: `curl http://localhost:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Why is the sky blue?"
}'`
  },
  {
    id: 'sql-agent',
    name: 'SQL 查詢智能體',
    emoji: '📊',
    phase: 3,
    difficulty: 'Advanced',
    desc: '結合 SQL 知識庫，讓 AI 能根據自然語言自動生成並執行 SQL 查詢。',
    steps: [
      '1. **Schema 注入**：將資料庫表結構 (DDL) 放入 System Prompt。',
      '2. **Few-shot SQL**：提供幾個「問題 -> SQL」的範例。',
      '3. **思考鏈 (CoT)**：要求模型先分析問題，再生成 SQL。',
      '4. **工具執行**：模型生成 SQL 後，由程式執行並回傳結果。',
      '5. **結果總結**：模型根據查詢結果生成人類可讀的答案。'
    ],
    codeExample: `System: 你是一個 SQL 專家。資料庫有 users(id, name, age) 表。
User: 幫我找 20 歲以上的用戶總數。
Assistant:
思考：需要使用 COUNT 函數與 WHERE 子句。
SQL: SELECT COUNT(*) FROM users WHERE age > 20;`
  },
  {
    id: 'evaluator-optimizer',
    name: '評估-優化器模式',
    emoji: '⚖️',
    phase: 3,
    difficulty: 'Advanced',
    desc: '使用兩組模型，一個負責生成 (Generator)，一個負責審查 (Evaluator)，循環迭代直到滿意。',
    steps: [
      '1. **生成初步答案**：由第一個模型產出內容。',
      '2. **批判性審查**：由第二個模型指出初步答案的缺點、錯誤或不符合規範之處。',
      '3. **遞歸優化**：第一個模型根據審查意見重新修改。',
      '4. **終止條件**：達到預設迭代次數或審查通過。'
    ],
    codeExample: `Generator -> [初步草稿]
Evaluator -> "第 2 點邏輯不通，且格式不符合 JSON。"
Generator (優化後) -> [修正後的最終版本]`
  },
  {
    id: 'multi-agent-crew',
    name: '多智能體協作 (Multi-Agent)',
    emoji: '🤝',
    phase: 3,
    difficulty: 'Advanced',
    desc: '定義多個具備不同角色 (Role) 的 AI，讓他們互相分工完成一個大型專案（如：寫一份完整的市場報告）。',
    steps: [
      '1. **角色定義 (Agents)**：例如定義「研究員」、「主編」與「校對員」。',
      '2. **任務分配 (Tasks)**：研究員負責蒐集數據，主編負責統整撰稿，校對員負責檢查錯誤。',
      '3. **流程設計 (Process)**：決定是循序執行 (Sequential) 還是並行執行 (Hierarchical)。',
      '4. **工具綁定**：讓研究員具備「上網搜尋」工具，主編具備「讀取本地文件」工具。'
    ],
    codeExample: `// CrewAI 邏輯示意
const researcher = new Agent({ role: 'Researcher', goal: 'Find AI news' });
const writer = new Agent({ role: 'Writer', goal: 'Write a blog post' });
const crew = new Crew({ agents: [researcher, writer], tasks: [...] });`
  },
  {
    id: 'auto-evaluation',
    name: '自動化評估流程 (G-Eval)',
    emoji: '🧪',
    phase: 3,
    difficulty: 'Intermediate',
    desc: '在發布模型前，使用一組標準化測試題 (Dataset)，並由模型自動給予分數與改善建議。',
    steps: [
      '1. **建立測試集**：準備 100 組預期的「問題-答案對」。',
      '2. **批量執行**：將問題餵給不同版本或參數的模型。',
      '3. **AI 打分**：請 GPT-4 根據「連貫性」、「準確性」與「格式」進行 1-5 分的評比。',
      '4. **生成熱點圖**：找出模型最容易犯錯的場景。'
    ],
    codeExample: `### 評估指令範例
請根據以下指標對 AI 的回答進行評分：
1. 準確性：是否符合提供的參考文件？
2. 簡潔性：是否有多餘的廢話？
請輸出 JSON：{"score": 4.5, "reason": "內容精確但格式不符。"}`
  }
];
