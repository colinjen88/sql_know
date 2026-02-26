# 基礎 RAG 檢索增強生成

這是一個經典的 RAG 流程設計，適用於建立「文件聊天機器人」或「企業內部知識助手」。

## 📋 準備工作
- 一個 LLM API (OpenAI / Gemini / Ollama)。
- 一個向量資料庫 (Pinecone / Chroma / Qdrant)。
- 一個 Embedding 模型。

## 🚀 實作步驟

### 第一步：數據處理 (ETL)
讀取原有的知識庫檔案（如 .md），並進行切分。
> **Tip**: 建議加上 10-15% 的重疊 (Overlap)，避免語意在邊界處斷裂。

### 第二步：向量化與存儲
調用 Embedding API 將片段轉換為向量。
```javascript
// 範例：將片段存入
const vector = await getEmbedding(textChunk);
await vectorDB.upsert(id, vector, { text: textChunk });
```

### 第三步：構建對話檢索
1. 獲取用戶輸入。
2. 檢索最相似的 3-5 個片段。
3. 建立 **System Prompt**：
   ```text
   你是一位專業的資料庫管理員。請僅根據以下提供的 <Context> 回答。
   如果答案不在 Context 中，請誠實回答「我不知道」，不要自行對外搜尋。
   
   <Context>
   ${retrieved_chunks}
   </Context>
   ```

## 🛠️ 常見優化技巧
- **Hybrid Search**：結合傳統關鍵字搜尋與語意搜尋。
- **Rerank**：檢索出 20 個片段，再用一個更高精確的模型挑選出前 5 個。
- **Prompt Compression**：如果檢索到的內容太多，嘗試先摘要再回答。
