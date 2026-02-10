# CREATE TABLE

## 語法結構 (Syntax)
```sql
CREATE TABLE table_name (
    column1 data_type CONSTRAINT,
    column2 data_type CONSTRAINT,
    ...
);
```

## 參數說明 (Parameters)
* `table_name`: 資料表名稱，建議用**複數小寫英文 + 底線**（如 `tasks`, `user_roles`）
* `column`: 欄位名稱
* `data_type`: 資料型別（見 [[Data_Types]]）
* `CONSTRAINT`: 約束條件（如 `NOT NULL`, `PRIMARY KEY`, `DEFAULT`）

## 常用資料型別速查
| 型別 | 說明 | 範例 |
|------|------|------|
| `INT` / `INTEGER` | 整數 | 1, 42, -7 |
| `SERIAL` | 自動遞增整數（PostgreSQL 專用） | 自動產生 1, 2, 3... |
| `TEXT` | 不限長度文字 | 'Hello World' |
| `VARCHAR(n)` | 限制長度文字 | VARCHAR(100) |
| `BOOLEAN` | 布林值 | TRUE / FALSE |
| `TIMESTAMP` | 日期時間 | '2024-02-10 14:30:00' |
| `DATE` | 僅日期 | '2024-02-10' |

## 最小可行範例 (Hello World)
```sql
-- 建立 tasks 資料表（Phase 1 目標表格）
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 回傳結果 (Return)
成功時回傳 `CREATE TABLE`，代表表格已建立。可用 `\dt` (psql) 或在 DBeaver 中重新整理來確認。

## 相關指令
* [[DROP_TABLE]] — 刪除表格（`DROP TABLE tasks;`）
* [[INSERT_INTO]] — 建好表格後，下一步就是塞資料

## 相關觀念
* [[Primary_Key]] — 為什麼需要主鍵
* [[Data_Types]] — 如何選擇正確的資料型別
