// =========================================
// SQL 語法字典資料
// =========================================

export const syntaxData = [
    {
        id: 'create-table',
        name: 'CREATE TABLE',
        emoji: '🏗️',
        phase: 1,
        category: 'DDL',
        summary: '建立新的資料表，定義欄位名稱、型別與約束條件。',
        syntax: `CREATE TABLE table_name (
    column1 data_type CONSTRAINT,
    column2 data_type CONSTRAINT,
    ...
);`,
        params: [
            { name: 'table_name', desc: '資料表名稱，建議複數小寫 + 底線' },
            { name: 'column', desc: '欄位名稱' },
            { name: 'data_type', desc: '資料型別（INT, TEXT, BOOLEAN 等）' },
            { name: 'CONSTRAINT', desc: '約束（NOT NULL, PRIMARY KEY, DEFAULT）' },
        ],
        example: `-- 建立 tasks 資料表（Phase 1 目標表格）
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        result: '成功時回傳 CREATE TABLE，代表表格已建立。',
        warning: null,
        related: ['INSERT_INTO', 'Primary_Key', 'Data_Types'],
    },
    {
        id: 'insert-into',
        name: 'INSERT INTO',
        emoji: '➕',
        phase: 1,
        category: 'DML',
        summary: '向資料表中插入新的資料列，可一次插入多筆。',
        syntax: `-- 指定欄位插入
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);

-- 一次插入多筆
INSERT INTO table_name (column1, column2, ...)
VALUES
    (value1a, value2a, ...),
    (value1b, value2b, ...);`,
        params: [
            { name: 'table_name', desc: '目標表格' },
            { name: '(column1, ...)', desc: '要填入的欄位清單（有 DEFAULT 可省略）' },
            { name: 'VALUES', desc: '對應欄位的值，順序必須一致' },
        ],
        example: `-- 新增一筆任務
INSERT INTO tasks (title)
VALUES ('買牛奶');

-- 一次新增多筆任務
INSERT INTO tasks (title, is_completed)
VALUES
    ('寫程式', FALSE),
    ('運動', FALSE),
    ('看 SQL 教學', TRUE);`,
        result: '成功時回傳 INSERT 0 N，N 為插入的列數。',
        warning: '文字值必須用單引號，不能用雙引號。',
        related: ['SELECT', 'CREATE_TABLE'],
    },
    {
        id: 'select',
        name: 'SELECT',
        emoji: '🔍',
        phase: 1,
        category: 'DML',
        summary: '從資料表中查詢資料，可搭配 WHERE 篩選條件。',
        syntax: `-- 基本查詢
SELECT column1, column2
FROM table_name;

-- 條件篩選
SELECT column1, column2
FROM table_name
WHERE condition;

-- 查詢所有欄位
SELECT *
FROM table_name;`,
        params: [
            { name: 'column', desc: '要查詢的欄位名稱' },
            { name: '*', desc: '萬用字元，代表所有欄位' },
            { name: 'table_name', desc: '目標資料表' },
            { name: 'WHERE', desc: '篩選條件（可選）' },
        ],
        example: `-- 撈出所有任務
SELECT * FROM tasks;

-- 只撈未完成的任務
SELECT id, title
FROM tasks
WHERE is_completed = FALSE;

-- 撈出標題包含「牛奶」的任務
SELECT *
FROM tasks
WHERE title LIKE '%牛奶%';`,
        result: '回傳一個結果集 (Result Set)，以表格形式呈現符合條件的資料列。',
        warning: null,
        related: ['INSERT_INTO', 'UPDATE', 'DELETE'],
    },
    {
        id: 'update',
        name: 'UPDATE',
        emoji: '✏️',
        phase: 1,
        category: 'DML',
        summary: '修改資料表中既有的資料列。千萬記得加 WHERE！',
        syntax: `UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;`,
        params: [
            { name: 'table_name', desc: '要更新的資料表' },
            { name: 'SET column = value', desc: '要修改的欄位與新值' },
            { name: 'WHERE', desc: '篩選條件，務必加上！' },
        ],
        example: `-- 將「買牛奶」標記為已完成
UPDATE tasks
SET is_completed = TRUE
WHERE title = '買牛奶';

-- 同時修改多個欄位
UPDATE tasks
SET title = '去超市買牛奶', is_completed = FALSE
WHERE id = 1;`,
        result: '成功時回傳 UPDATE N，N 為受影響的列數。',
        warning: '⚠️ 千萬記得加 WHERE！不加會更新整張表格的所有資料。',
        related: ['SELECT', 'DELETE', 'Primary_Key'],
    },
    {
        id: 'delete',
        name: 'DELETE',
        emoji: '🗑️',
        phase: 1,
        category: 'DML',
        summary: '刪除資料表中的資料列。千萬記得加 WHERE！',
        syntax: `DELETE FROM table_name
WHERE condition;`,
        params: [
            { name: 'table_name', desc: '目標表格' },
            { name: 'WHERE', desc: '篩選條件，務必加上！' },
        ],
        example: `-- 刪除已完成的任務
DELETE FROM tasks
WHERE is_completed = TRUE;

-- 刪除特定一筆任務
DELETE FROM tasks
WHERE id = 5;`,
        result: '成功時回傳 DELETE N，N 為被刪除的列數。',
        warning: '⚠️ 千萬記得加 WHERE！不加會刪除整張表格所有資料，無法復原。',
        related: ['SELECT', 'UPDATE', 'CREATE_TABLE'],
    },
];
