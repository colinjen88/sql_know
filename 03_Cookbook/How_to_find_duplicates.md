# 如何找出重複的資料 (Find Duplicates)

## 使用情境 (Context)
當老闆說「為什麼有兩筆一模一樣的訂單？」或是你懷疑資料被重複匯入時使用。

## 解決方案 (Code Snippet)
```sql
-- 找出重複的 email
SELECT email, COUNT(*) AS duplicate_count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

```sql
-- 找出重複的任務標題
SELECT title, COUNT(*) AS duplicate_count
FROM tasks
GROUP BY title
HAVING COUNT(*) > 1;
```

```sql
-- 進階：列出重複資料的完整內容（包含 id，方便決定要刪哪一筆）
SELECT *
FROM tasks
WHERE title IN (
    SELECT title
    FROM tasks
    GROUP BY title
    HAVING COUNT(*) > 1
)
ORDER BY title, id;
```

## 原理解析 (Explanation)
1. `GROUP BY email` — 把相同 email 的資料歸為一組
2. `COUNT(*)` — 計算每組有幾筆
3. `HAVING COUNT(*) > 1` — 只留下出現超過 1 次的組（也就是重複的）

> **WHERE vs HAVING 差異：**
> * `WHERE` 在分組**之前**篩選
> * `HAVING` 在分組**之後**篩選（所以能用 `COUNT(*)` 這種聚合函數）

## 注意事項 (Performance Note)
⚠️ 在大資料表上執行時，`GROUP BY` 會需要掃描整張表，可能會比較慢。
如果經常需要查重複，建議在該欄位上建立 `UNIQUE` 約束，讓資料庫自動阻止重複資料插入。
