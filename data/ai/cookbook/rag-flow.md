# 基礎 RAG 檢索增強生成

RAG (Retrieval-Augmented Generation) 是目前解決 LLM 幻覺、賦予模型最新知識的最強方案。

## 🛠️ 實作步驟

### 1. 準備文件 (Ingestion)
將您的知識庫內容（如 Markdown, PDF, HTML）收集起來。

### 2. 切片與向量化 (Chunking & Embedding)
- 使用 `RecursiveCharacterTextSplitter` 將長文章切成適當大小（例如 500 tokens）。
- 調用 Embedding 模型（如 OpenAI `text-embedding-3-small`）轉換為向量。

### 3. 儲存至向量資料庫 (Storage)
推薦工具：`Pinecone`, `ChromaDB`, 或 `PostgreSQL + pgvector`。

### 4. 檢索與生成 (Retrieval & Generation)
- **使用者詢問**：“SELECT 怎麼寫？”
- **檢索**：在向量庫中找出最相關的 3 段語法說明。
- **送往 LLM**：
  ```text
  你是一位助教，請根據以下資訊回答問題：
  ---
  {檢索到的內容}
  ---
  問題：{使用者詢問}
  ```

## 💡 小撇步
實作 RAG 時，切片的質量與檢索後的 **Re-ranking** 通常比模型本身更重要！
