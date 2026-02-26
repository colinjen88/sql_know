# INSERT INTO

向資料表中插入新的資料列，可一次插入多筆。

## 📐 語法結構
```sql
-- 指定欄位插入
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);

-- 一次插入多筆
INSERT INTO table_name (column1, column2, ...)
VALUES
    (value1a, value2a, ...),
    (value1b, value2b, ...);
```

## 📋 參數說明
| 參數 | 說明 |
| --- | --- |
| `table_name` | 目標表格 |
| `(column1, ...)` | 要填入的欄位清單（有 DEFAULT 可省略） |
| `VALUES` | 對應欄位的值，順序必須一致 |

## 🚀 範例程式碼
```sql
-- 新增一筆任務
INSERT INTO tasks (title)
VALUES ('買牛奶');

-- 一次新增多筆任務
INSERT INTO tasks (title, is_completed)
VALUES
    ('寫程式', FALSE),
    ('運動', FALSE),
    ('看 SQL 教學', TRUE);
```

## 📤 回傳結果
成功時回傳 INSERT 0 N，N 為插入的列數。
