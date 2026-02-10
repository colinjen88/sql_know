# 📘 SQL 學習知識庫 (SQL Knowledge Base)

> 本知識庫是依照 [SQL自學與知識庫建構計畫](SQL自學與知識庫建構計畫.md) 所建置的第二大腦系統。
> 透過實作「任務管理系統 (Task Tracker)」，從零掌握 SQL 資料庫技能。

---

## 📂 目錄結構

| 資料夾 | 用途 | 何時使用 |
|--------|------|----------|
| [`01_Syntax_Dictionary/`](01_Syntax_Dictionary/) | 📖 語法字典 | 忘記指令怎麼寫時查閱 |
| [`02_Core_Concepts/`](02_Core_Concepts/) | 🧠 核心觀念 | 面試準備、理解原理 |
| [`03_Cookbook/`](03_Cookbook/) | 🍳 實戰食譜 | 遇到具體需求時複製貼上 |
| [`04_Project_Logs/`](04_Project_Logs/) | 📅 專案日誌 | 記錄每日學習與除錯過程 |
| `src/data/techStack.js` | 🔧 技術選型 | 資料庫與 GUI 工具比較 |
| `src/data/styleGuide.js` | 📏 開發規範 | 團隊命名與開發規則 |

---

## 📖 語法字典索引 (Syntax Dictionary)

### Phase 1 — 基礎生存
| 指令 | 說明 | 狀態 |
|------|------|------|
| [CREATE_TABLE](01_Syntax_Dictionary/CREATE_TABLE.md) | 建立資料表 | ✅ |
| [INSERT_INTO](01_Syntax_Dictionary/INSERT_INTO.md) | 新增資料 | ✅ |
| [SELECT](01_Syntax_Dictionary/SELECT.md) | 查詢資料 | ✅ |
| [UPDATE](01_Syntax_Dictionary/UPDATE.md) | 更新資料 | ✅ |
| [DELETE](01_Syntax_Dictionary/DELETE.md) | 刪除資料 | ✅ |

### Phase 2 — 結構與關聯
| 指令 | 說明 | 狀態 |
|------|------|------|
| PRIMARY KEY / FOREIGN KEY | 約束條件 | ⬜ |
| INNER JOIN / LEFT JOIN | 表格連結 | ⬜ |

### Phase 3 — 數據洞察
| 指令 | 說明 | 狀態 |
|------|------|------|
| COUNT / SUM / AVG | 聚合函數 | ⬜ |
| GROUP BY / HAVING | 分群統計 | ⬜ |
| ORDER BY / LIMIT | 排序與限制 | ⬜ |

---

## 🧠 核心觀念索引 (Core Concepts)

| 觀念 | 一句話說明 | 狀態 |
|------|-----------|------|
| [Primary_Key](02_Core_Concepts/Primary_Key.md) | 每筆資料的身分證字號 | ✅ |
| [Data_Types](02_Core_Concepts/Data_Types.md) | 告訴資料庫欄位要存什麼 | ✅ |

---

## 🍳 實戰食譜索引 (Cookbook)

| 食譜 | 使用情境 | 狀態 |
|------|---------|------|
| [How_to_find_duplicates](03_Cookbook/How_to_find_duplicates.md) | 找出重複資料 | ✅ |

---

## 🛠️ 技術堆疊
- **資料庫引擎：** PostgreSQL
- **管理工具：** DBeaver / VS Code + SQLTools
- **筆記系統：** Markdown + Git
- **Web App:** Vite + Vanilla JS (Port: `7730`)

---

## 📝 使用方式

1. **查語法** → 到 `01_Syntax_Dictionary/` 找對應指令
2. **懂原理** → 到 `02_Core_Concepts/` 閱讀觀念說明
3. **抄程式碼** → 到 `03_Cookbook/` 複製解決方案
4. **寫新筆記** → 複製各資料夾中的 `_TEMPLATE.md` 模板
5. **記錄學習** → 到 `04_Project_Logs/` 寫學習日誌
