# SQL 查詢智能體 (SQL Agent)

讓 AI 具備讀取資料庫 Schema 並自動生成、執行 SQL 的能力。這是企業級 AI 應用中最常見的場景之一。

## 🛠️ 實作策略

### 1. Schema 注入 (Context Ingestion)
在 System Prompt 中提供當前資料庫的表結構（DDL）。
```sql
CREATE TABLE users (id INT, name TEXT, age INT);
CREATE TABLE orders (id INT, user_id INT, amount DECIMAL);
```

### 2. Few-shot SQL 範例
提供「問題 -> SQL」的配對範例，確保模型理解特定的 SQL 方言（如 SQLite 與 PostgreSQL 的差異）。

### 3. 三步思考法 (CoT)
要求模型先寫下：
- **分析**：需要用到哪幾張表？
- **邏輯**：如何關聯 (Join) 與篩選 (Where)？
- **SQL**：最終生成的程式碼。

## 🚀 實戰範例
**User Query:** "找出上個月消費總額超過 1000 元的用戶姓名。"

**Agent 處理過程:**
1. **分析**：需要 `users` 表獲取姓名，以及 `orders` 表計算總額。
2. **關聯**：使用 `id` 與 `user_id` 進行 JOIN。
3. **生成的 SQL:**
   ```sql
   SELECT u.name, SUM(o.amount) as total
   FROM users u
   JOIN orders o ON u.id = o.user_id
   WHERE o.order_date > '2024-01-01'
   GROUP BY u.name
   HAVING total > 1000;
   ```

## ⚠️ 安全警告 (Security)
**禁止直接執行！**
在生產環境中，AI 生成的 SQL 必須經過「唯讀帳號」限制，並在程式端進行輸入檢查（Sanitization），以防止 SQL 注入。
