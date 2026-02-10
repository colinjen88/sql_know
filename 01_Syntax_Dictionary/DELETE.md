# DELETE

## 語法結構 (Syntax)
```sql
DELETE FROM table_name
WHERE condition;
```

## 參數說明 (Parameters)
* `table_name`: 要刪除資料的目標表格
* `WHERE condition`: 篩選條件，**務必加上！**

## ⚠️ 最重要的提醒
> **千萬記得加 WHERE！**
> 不加 WHERE 會刪除**整張表格的所有資料**，無法復原。

```sql
-- ❌ 災難！刪光所有任務
DELETE FROM tasks;

-- ✅ 安全！只刪除 id = 3 的那筆
DELETE FROM tasks
WHERE id = 3;
```

## 最小可行範例 (Hello World)
```sql
-- 刪除已完成的任務
DELETE FROM tasks
WHERE is_completed = TRUE;

-- 刪除特定一筆任務
DELETE FROM tasks
WHERE id = 5;
```

## 回傳結果 (Return)
成功時回傳 `DELETE N`，其中 `N` 為被刪除的列數。例如 `DELETE 2` 代表刪除了 2 筆資料。

## 安全操作 SOP
1. **先 SELECT** 確認即將刪除的資料：`SELECT * FROM tasks WHERE is_completed = TRUE;`
2. **確認無誤後再 DELETE**：`DELETE FROM tasks WHERE is_completed = TRUE;`
3. **再 SELECT** 驗證刪除結果：`SELECT * FROM tasks;`

## DELETE vs DROP vs TRUNCATE
| 指令 | 作用 | 可復原？ |
|------|------|----------|
| `DELETE FROM tasks WHERE ...` | 刪除符合條件的**資料列** | ✅ 可用 Transaction 復原 |
| `DELETE FROM tasks` | 刪除**所有資料列**（表格還在） | ✅ 可用 Transaction 復原 |
| `TRUNCATE TABLE tasks` | 清空**所有資料**（更快） | ❌ 不可復原 |
| `DROP TABLE tasks` | 刪除**整張表格**（結構也消失） | ❌ 不可復原 |

## 相關指令
* [[SELECT]] — 刪除前先用 SELECT 確認目標
* [[UPDATE]] — 有時候「標記刪除」比真的刪除更安全（軟刪除）
* [[CREATE_TABLE]] — 如果不小心 DROP 了，就得重建

## 相關觀念
* [[Primary_Key]] — 用主鍵刪除最精確
