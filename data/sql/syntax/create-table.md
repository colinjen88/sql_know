# CREATE TABLE

建立新的資料表，定義欄位名稱、型別與約束條件。

## 📐 語法結構
```sql
CREATE TABLE table_name (
    column1 data_type CONSTRAINT,
    column2 data_type CONSTRAINT,
    ...
);
```

## 📋 參數說明
| 參數 | 說明 |
| --- | --- |
| `table_name` | 資料表名稱，建議複數小寫 + 底線 |
| `column` | 欄位名稱 |
| `data_type` | 資料型別（INT, TEXT, BOOLEAN 等） |
| `CONSTRAINT` | 約束（NOT NULL, PRIMARY KEY, DEFAULT） |

## 🚀 範例程式碼
```sql
-- 建立 tasks 資料表（Phase 1 目標表格）
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📤 回傳結果
成功時回傳 CREATE TABLE，代表表格已建立。
