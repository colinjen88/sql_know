# 📘 SQL 自學與知識庫建構計畫 (SQL Mastery & Knowledge Base Plan)

**專案代號：** `project_task_tracker_mvp`
**建立日期：** 2024-02-10
**目標：** 透過實作「任務管理系統」，從零掌握 SQL 資料庫建置，並建立一套可供日後查詢的第二大腦知識庫。

---

## 1. 🛠️ 環境與技術堆疊 (Tech Stack)

在寫下第一行程式碼之前，請確保以下工具已就緒：

- [ ] **資料庫引擎 (Database Engine):** `PostgreSQL`
    - *理由：* 業界標準，功能強大且嚴謹。
- [ ] **管理工具 (GUI Client):** `DBeaver` (推薦) 或 `VS Code` (需安裝 SQLTools 插件)
    - *理由：* 視覺化管理表格，避免只用黑底白字終端機操作。
- [ ] **筆記系統 (Knowledge Base):** `Obsidian` / `Notion` / `VS Code`
    - *理由：* 支援 Markdown，方便貼程式碼。

---

## 2. 🗂️ 知識庫架構設計 (Knowledge Schema)

我們將筆記分為四大功能區塊。請依照此目錄結構建立資料夾：

```text
SQL_Learning/
├── 01_Syntax_Dictionary/   (語法字典：查指令用，例如 SELECT.md)
├── 02_Core_Concepts/       (核心觀念：面試與原理用，例如 Primary_Key.md)
├── 03_Cookbook/            (實戰食譜：複製貼上用，例如 Remove_Duplicates.md)
├── 04_Project_Logs/        (專案日誌：記錄開發過程與除錯)
└── README.md               (本計畫書)

## 3. 📝 筆記模板 (Templates)

為保持知識庫整潔，請嚴格遵守以下模板格式。

### Type A: 📖 語法字典 (Syntax Dictionary)
> **用途：** 當你忘記指令怎麼拼、參數順序時快速查閱。
> **檔名建議：** `指令名稱.md` (e.g., `SELECT.md`)

```markdown
# [指令名稱] (e.g., SELECT)

## 語法結構 (Syntax)
```sql
-- 在此貼上標準語法，使用大寫表示關鍵字，小寫表示變數
SELECT column1, column2
FROM table_name;

## 參數說明 (Parameters)
* `參數 1`: ...
* `參數 2`: ...

## 最小可行範例 (Hello World)
```sql
-- 最簡單的執行範例
SELECT * FROM users;
```

## 回傳結果 (Return)
執行後會回傳什麼？ (e.g., 回傳一個結果集 Result Set，或是受影響的列數)


### Type B: 🧠 核心觀念 (Core Concepts)
> **用途：** 理解「為什麼」要這樣做，面試與設計資料庫時使用。
> **檔名建議：** `觀念名稱.md` (e.g., `Normalization.md`)

```markdown
# [觀念名稱] (e.g., Primary Key)

## 一句話解釋 (ELI5)
> 用小學生也能聽懂的話解釋。

## 生活化比喻 (Analogy)
* 像是... (e.g., 主鍵就像是每個人的「身分證字號」，絕對不會重複)

## 為什麼重要？ (Why it matters)
* 如果不用這個觀念，會發生什麼災難？

## 視覺化 / 關聯圖 (Visuals)
(在此用文字描述關聯，或貼上截圖)

## 相關語法
* [[LINK_TO_SYNTAX]]

### Type C: 🍳 實戰食譜 (Cookbook)
> **用途：** 遇到具體需求時，直接複製修改的程式碼片段。
> **檔名建議：** `如何_動詞_受詞.md` (e.g., `How_to_find_duplicates.md`)

# 如何 [解決特定問題]

## 使用情境 (Context)
當老闆要求...或是遇到...錯誤時使用。

## 解決方案 (Code Snippet)
```sql
-- Copy & Paste 區域
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

## 原理解析 (Explanation)
為什麼這樣寫會動？關鍵在哪個指令？

## 注意事項 (Performance Note)
⚠️ 資料量大時是否會變慢？有無副作用？

---

## 4. ⚖️ 命名規範 (Naming Conventions) - **重要！**

為了不讓未來的自己痛苦，我們從第一天就遵守以下規範：

1.  **Snake Case (蛇形命名法):** 所有資料表、欄位名稱一律使用 **小寫英文** 加 **底線**。
    * ✅ `user_id`, `created_at`, `task_status`
    * ❌ `UserId`, `CreatedAt`, `Task Status`
2.  **資料表用複數 (Plural):**
    * ✅ `tasks`, `users`, `orders`
    * ❌ `task`, `user`, `order`
3.  **主鍵統一命名:**
    * 建議統一使用 `id` 作為該表的主鍵，引用時使用 `table_name_id` (如 `user_id`)。

---

## 5. 🗺️ 專案實作路徑 (Roadmap & Skill Tree)

我們將透過三個階段完成 **Task Tracker (任務管理板)**。

### 🎯 目標資料表設計 (Target Schema)
這是我們第一階段要建立的 `tasks` 表格：
* `id` (INT / SERIAL): 任務編號 (主鍵)
* `title` (TEXT / VARCHAR): 任務名稱
* `is_completed` (BOOLEAN): 是否完成
* `created_at` (TIMESTAMP): 建立時間

### 🌱 Phase 1: 基礎生存 (The Foundation)
**目標：** 能夠手動對單一表格進行增刪改查。

- [ ] **DDL (定義):** `CREATE TABLE`, `DROP TABLE`
    - *學習重點：* 理解 `INT`, `TEXT`, `BOOLEAN` 等資料型別。
- [ ] **DML (新增):** `INSERT INTO`
    - *學習重點：* 如何寫入資料。
- [ ] **DML (讀取):** `SELECT`, `WHERE`
    - *學習重點：* 如何把資料撈出來，並使用 `AND`, `OR` 篩選。
- [ ] **DML (更新):** `UPDATE`
    - *學習重點：* 修改狀態，**千萬記得加 WHERE**。
- [ ] **DML (刪除):** `DELETE`
    - *學習重點：* 刪除資料，**千萬記得加 WHERE**。

### 🌿 Phase 2: 結構與關聯 (Relationships)
**目標：** 加入 `users` 表格，讓任務可以指派給人。

- [ ] **約束 (Constraints):** `PRIMARY KEY` (主鍵), `FOREIGN KEY` (外鍵)
    - *學習重點：* 保護資料完整性。
- [ ] **連結 (Joins):** `INNER JOIN`, `LEFT JOIN`
    - *學習重點：* 這是 SQL 的靈魂，將兩張表拼在一起看。
- [ ] **設計 (Design):** 一對多關聯 (1:N)
    - *學習重點：* 一個使用者可以有多個任務。

### 🌳 Phase 3: 數據洞察 (Insights)
**目標：** 製作簡易統計報表。

- [ ] **聚合 (Aggregation):** `COUNT`, `SUM`, `AVG`
    - *學習重點：* 計算總數。
- [ ] **分群 (Grouping):** `GROUP BY`, `HAVING`
    - *學習重點：* 依類別統計 (例如：每個人完成了幾個任務？)。
- [ ] **排序與限制:** `ORDER BY`, `LIMIT`
    - *學習重點：* 排行榜功能。

---

## 6. 🔄 學習工作流 (The Workflow)

嚴格遵守 **「遇到問題 -> 查詢 -> 記錄 -> 實作」** 的循環。

1.  **Define (定義問題):** * "我現在需要建立一個表格來存任務。"
2.  **Learn (獲取知識):** * 查詢 "SQL create table syntax postgres"。
3.  **Record (知識建檔):** * 將學到的語法寫入 `01_Syntax_Dictionary/CREATE_TABLE.md`。
4.  **Implement (動手實作):** * 在 DBeaver 中執行程式碼。
5.  **Refine (優化與除錯):** * 如果報錯，將錯誤訊息與解法寫入 `04_Project_Logs/Day1_Errors.md`。
    * 如果寫出好用的查詢，存入 `03_Cookbook/`。

---

## 7. ✅ 第一階段檢核點 (Definition of Done)

當你能夠**不看筆記**，在 DBeaver 中獨立完成以下動作時，代表 Phase 1 通關：

1.  用 SQL 指令建立出 `tasks` 表格，包含正確的欄位型別。
2.  新增 3 筆不同的任務資料 (買牛奶、寫程式、運動)。
3.  寫出一段 SQL，只把「未完成」的任務撈出來。
4.  將「買牛奶」的任務狀態改為「已完成」。