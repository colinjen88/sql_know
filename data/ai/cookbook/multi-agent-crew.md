# 多智能體協作 (Multi-Agent Crew)

多智能體協作是指定義多個具備不同角色（Role）與目標（Goal）的 AI 助手，並讓他們在一個任務框架下相互分工、討論與協作。

## 🤝 核心要素
1.  **Agents (代理人)**：每個代理人有其專業領域、性格與工具。
2.  **Tasks (任務)**：具體的任務說明與預期輸出。
3.  **Process (流程)**：處理任務的順序（循序、平行或層級式）。

## 🚀 實作範例 (CrewAI 概念)
假設你要寫一份市場分析報告：
- **Agent 1 (Researcher)**：負責上網搜尋最新的 AI 趨勢與數據。
- **Agent 2 (Writer)**：負責根據 Researcher 的結果撰寫優美的部落格文章。
- **Agent 3 (QA)**：負責檢查文章的邏輯、事實準確性與語法錯誤。

## 🛠️ 程式邏輯示意
```javascript
// 定義研究員
const researcher = new Agent({
  role: '技術研究員',
  goal: '整理 2024 年 LLM 的三大關鍵趨勢',
  backstory: '你是一位資深的技術分析師，擅長從碎片化的網路資訊中提取核心價值。',
  tools: [searchTool]
});

// 定義工作流
const crew = new Crew({
  agents: [researcher, writer, qa],
  tasks: [researchTask, writingTask, reviewTask],
  process: 'sequential' // 循序執行
});

const result = await crew.kickoff();
```

## ✅ 優勢
- **專業分工**：模型不需要在一個 Prompt 中同時處理搜尋、計算與創作，減少出錯率。
- **自糾錯性**：Agent 之間可以互相審核，提升最終產出的質量。
