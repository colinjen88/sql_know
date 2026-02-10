// =========================================
// 核心觀念資料
// =========================================

export const conceptsData = [
    {
        id: 'primary-key',
        name: 'Primary Key (主鍵)',
        emoji: '🔑',
        phase: 1,
        eli5: '主鍵就是每一筆資料的「身分證字號」，絕對不會重複、不能為空，用來唯一辨識一筆資料。',
        analogy: '像是每個人的身分證字號 — 每人獨一無二，不可能兩個人共用同一組。也像圖書館每本書的 ISBN。',
        whyMatters: [
            '沒有主鍵的話，如果有兩筆「買牛奶」，你無法精確地「只更新其中一筆」',
            '資料庫會自動阻止你插入重複的主鍵值',
            '是關聯的基礎 — Phase 2 學 JOIN 時，兩張表必須靠主鍵 + 外鍵連接',
        ],
        visual: `tasks 表格
┌────┬────────────┬──────────────┬─────────────────────┐
│ id │   title    │ is_completed │     created_at      │
│ PK │            │              │                     │
├────┼────────────┼──────────────┼─────────────────────┤
│  1 │ 買牛奶     │ FALSE        │ 2024-02-10 10:00:00 │
│  2 │ 寫程式     │ FALSE        │ 2024-02-10 10:05:00 │
│  3 │ 運動       │ TRUE         │ 2024-02-10 10:10:00 │
└────┴────────────┴──────────────┴─────────────────────┘`,
        codeExample: `-- 使用 SERIAL + PRIMARY KEY 自動產生遞增主鍵
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);

-- 用主鍵精確操作資料
UPDATE tasks SET is_completed = TRUE WHERE id = 1;
DELETE FROM tasks WHERE id = 3;`,
        related: ['CREATE_TABLE', 'UPDATE', 'DELETE'],
    },
    {
        id: 'data-types',
        name: 'Data Types (資料型別)',
        emoji: '📦',
        phase: 1,
        eli5: '資料型別就是告訴資料庫：「這個欄位要存什麼種類的東西？」就像行李箱有分大小，你得選對尺寸。',
        analogy: '像是 Excel 的儲存格格式 — 你可以設定「數字」、「文字」、「日期」，SQL 也一樣。選錯型別就像把大象塞進小盒子。',
        whyMatters: [
            '型別錯誤會導致查詢爆炸：如果把年齡存成 TEXT，就無法做 WHERE age > 18',
            '節省儲存空間：BOOLEAN 只佔 1 byte，用 TEXT 存會佔更多',
            '資料驗證：INTEGER 欄位會自動拒絕 abc 這種文字',
        ],
        visual: null,
        typeTable: [
            { type: 'INTEGER / INT', desc: '整數', example: '年齡、數量' },
            { type: 'SERIAL', desc: '自動遞增整數', example: '主鍵' },
            { type: 'TEXT', desc: '不限長度文字', example: '文章內容' },
            { type: 'VARCHAR(n)', desc: '限制長度文字', example: '使用者名稱' },
            { type: 'BOOLEAN', desc: 'TRUE / FALSE', example: '是否完成' },
            { type: 'TIMESTAMP', desc: '日期時間', example: '建立時間' },
            { type: 'NUMERIC(p,s)', desc: '精確小數', example: '金額' },
            { type: 'DATE', desc: '僅日期', example: '生日' },
        ],
        codeExample: `CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,          -- 自動遞增整數
    title TEXT NOT NULL,             -- 不限長度文字
    is_completed BOOLEAN DEFAULT FALSE, -- 布林值
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 日期時間
);`,
        related: ['CREATE_TABLE', 'INSERT_INTO'],
    },
];
