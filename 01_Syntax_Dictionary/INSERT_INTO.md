# INSERT INTO

## 語法結構 (Syntax)
```sql
-- 指定欄位插入
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);

-- 一次插入多筆
INSERT INTO table_name (column1, column2, ...)
VALUES
    (value1a, value2a, ...),
    (value1b, value2b, ...),
    (value1c, value2c, ...);
```

## 參數說明 (Parameters)
* `table_name`: 要插入資料的目標表格
* `(column1, column2, ...)`: 要填入的欄位清單（有 DEFAULT 的欄位可省略）
* `VALUES`: 對應欄位的值，順序必須一致

## 最小可行範例 (Hello World)
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

## 回傳結果 (Return)
成功時回傳 `INSERT 0 N`，其中 `N` 為插入的列數。例如插入 3 筆會顯示 `INSERT 0 3`。

## ⚠️ 注意事項
* `SERIAL` 和有 `DEFAULT` 的欄位可以不寫，資料庫會自動補值
* 文字值必須用**單引號** `'...'`，不能用雙引號
* 數字和布林值不需要引號

## 相關指令
* [[SELECT]] — 插入資料後，用 SELECT 確認資料是否正確
* [[CREATE_TABLE]] — 插入前必須先建好表格

## 相關觀念
* [[Primary_Key]] — 主鍵欄位（如 `id`）會自動遞增，不需要手動填入
