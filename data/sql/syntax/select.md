# SELECT

從資料表中查詢資料，可搭配 WHERE 篩選條件。

## 📐 語法結構
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

## 📋 參數說明
| 參數 | 說明 |
| --- | --- |
| `column` | 要查詢的欄位名稱 |
| `*` | 萬用字元，代表所有欄位 |
| `table_name` | 目標資料表 |
| `WHERE` | 篩選條件（可選） |

## 🚀 範例程式碼
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

## 📤 回傳結果
回傳一個結果集 (Result Set)，以表格形式呈現符合條件的資料列。
