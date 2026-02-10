# SELECT

## 語法結構 (Syntax)
```sql
-- 基本查詢
SELECT column1, column2
FROM table_name;

-- 條件篩選
SELECT column1, column2
FROM table_name
WHERE condition;

-- 查詢所有欄位
SELECT *
FROM table_name;
```

## 參數說明 (Parameters)
* `column1, column2`: 要查詢的欄位名稱
* `*`: 萬用字元，代表所有欄位
* `table_name`: 目標資料表
* `WHERE condition`: 篩選條件（可選）

## WHERE 條件運算子速查
| 運算子 | 說明 | 範例 |
|--------|------|------|
| `=` | 等於 | `WHERE id = 1` |
| `!=` 或 `<>` | 不等於 | `WHERE status <> 'done'` |
| `>`, `<`, `>=`, `<=` | 大小比較 | `WHERE age >= 18` |
| `AND` | 且 | `WHERE a = 1 AND b = 2` |
| `OR` | 或 | `WHERE a = 1 OR a = 2` |
| `NOT` | 非 | `WHERE NOT is_completed` |
| `IN` | 在清單中 | `WHERE id IN (1, 2, 3)` |
| `LIKE` | 模糊比對 | `WHERE title LIKE '%牛奶%'` |
| `IS NULL` | 為空值 | `WHERE deleted_at IS NULL` |

## 最小可行範例 (Hello World)
```sql
-- 撈出所有任務
SELECT * FROM tasks;

-- 只撈未完成的任務
SELECT id, title
FROM tasks
WHERE is_completed = FALSE;

-- 撈出標題包含「牛奶」的任務
SELECT *
FROM tasks
WHERE title LIKE '%牛奶%';
```

## 回傳結果 (Return)
回傳一個**結果集 (Result Set)**，以表格形式呈現符合條件的資料列。如果沒有符合條件的資料，會回傳空的結果集（0 rows）。

## 相關指令
* [[INSERT_INTO]] — 先用 INSERT 塞資料，再用 SELECT 驗證
* [[UPDATE]] — 通常先 SELECT 確認目標，再 UPDATE
* [[DELETE]] — 同上，先 SELECT 確認再刪

## 相關觀念
* [[Data_Types]] — 不同型別的比較方式不同
