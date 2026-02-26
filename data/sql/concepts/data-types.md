# Data Types (資料型別)

資料型別就是告訴資料庫：「這個欄位要存什麼種類的東西？」就像行李箱有分大小，你得選對尺寸。

## 🎯 生活化比喻
像是 Excel 的儲存格格式 — 你可以設定「數字」、「文字」、「日期」，SQL 也一樣。選錯型別就像把大象塞進小盒子。

## ⚠️ 為什麼重要？
- 型別錯誤會導致查詢爆炸：如果把年齡存成 TEXT，就無法做 WHERE age > 18
- 節省儲存空間：BOOLEAN 只佔 1 byte，用 TEXT 存會佔更多
- 資料驗證：INTEGER 欄位會自動拒絕 abc 這種文字

## 📦 型別總覽
| 型別 | 說明 | 用途範例 |
| --- | --- | --- |
| `INTEGER / INT` | 整數 | 年齡、數量 |
| `SERIAL` | 自動遞增整數 | 主鍵 |
| `TEXT` | 不限長度文字 | 文章內容 |
| `VARCHAR(n)` | 限制長度文字 | 使用者名稱 |
| `BOOLEAN` | TRUE / FALSE | 是否完成 |
| `TIMESTAMP` | 日期時間 | 建立時間 |
| `NUMERIC(p,s)` | 精確小數 | 金額 |
| `DATE` | 僅日期 | 生日 |

## 💻 程式碼範例
```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,          -- 自動遞增整數
    title TEXT NOT NULL,             -- 不限長度文字
    is_completed BOOLEAN DEFAULT FALSE, -- 布林值
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 日期時間
);
```
