# UPDATE

## 語法結構 (Syntax)
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

## 參數說明 (Parameters)
* `table_name`: 要更新的資料表
* `SET column = value`: 要修改的欄位與新值，可一次改多個欄位
* `WHERE condition`: 篩選條件，**務必加上！**

## ⚠️ 最重要的提醒
> **千萬記得加 WHERE！**
> 不加 WHERE 會更新**整張表格的所有資料列**，這是最常見的災難性錯誤。

```sql
-- ❌ 危險！會把所有任務都標成完成
UPDATE tasks
SET is_completed = TRUE;

-- ✅ 安全！只更新 id = 1 的那筆
UPDATE tasks
SET is_completed = TRUE
WHERE id = 1;
```

## 最小可行範例 (Hello World)
```sql
-- 將「買牛奶」標記為已完成
UPDATE tasks
SET is_completed = TRUE
WHERE title = '買牛奶';

-- 同時修改多個欄位
UPDATE tasks
SET title = '去超市買牛奶', is_completed = FALSE
WHERE id = 1;
```

## 回傳結果 (Return)
成功時回傳 `UPDATE N`，其中 `N` 為受影響的列數。例如 `UPDATE 1` 代表成功更新了 1 筆資料。

## 安全操作 SOP
1. **先 SELECT** 確認目標：`SELECT * FROM tasks WHERE id = 1;`
2. **再 UPDATE** 修改資料：`UPDATE tasks SET ... WHERE id = 1;`
3. **最後 SELECT** 驗證結果：`SELECT * FROM tasks WHERE id = 1;`

## 相關指令
* [[SELECT]] — 更新前先用 SELECT 確認目標
* [[DELETE]] — 刪除也需要同樣的 WHERE 安全意識

## 相關觀念
* [[Primary_Key]] — 使用主鍵作為 WHERE 條件最安全
