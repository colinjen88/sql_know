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
    {
        id: 'indexing',
        name: 'Indexing (索引)',
        emoji: '⚡',
        phase: 3,
        eli5: '像是書本的「目錄」。沒有目錄，找內容要一頁頁翻 (Full Scan)；有目錄，直接翻到那一頁 (Index Seek)。',
        analogy: '字典的部首索引。如果你要找「機」這個字，你會從「木」部首開始找（索引），而不是從第一頁「ㄅ」開始翻（全表掃描）。',
        whyMatters: [
            '效能優化的第一步：讓查詢從 10秒 變成 0.1秒。',
            '代價：雖然查詢變快，但寫入 (INSERT/UPDATE) 會變慢，因為要同時更新目錄。',
            '主鍵 (Primary Key) 預設就會建立索引。'
        ],
        advanced: {
            title: '進階索引策略',
            content: `<ul>
        <li><strong>B-Tree Index:</strong> 最常用的通用索引 (適合 =, >, <, BETWEEN)。</li>
        <li><strong>Hash Index:</strong> 僅適合精確匹配 (=)，不支援範圍查詢。</li>
        <li><strong>Composite Index (複合索引):</strong> 針對多個欄位建索引 (e.g., WHERE a = 1 AND b = 2)。注意 <strong>最左前綴原則 (Leftmost Prefix Rule)</strong>。</li>
      </ul>`
        }
    },
    {
        id: 'transactions',
        name: 'Transactions (交易)',
        emoji: '🤝',
        phase: 3,
        eli5: '「要嘛全做，要嘛全不做」。保證一連串操作是不可分割的整體。',
        analogy: '銀行轉帳。A 扣款 100 元，B 加值 100 元。這兩個動作必須同時成功。如果 A 扣款成功但 B 加值失敗，系統必須把錢退回給 A (Rollback)。',
        whyMatters: [
            '確保資料的一致性 (Consistency)。',
            '避免髒讀 (Dirty Read) 與資料錯亂。'
        ],
        codeExample: `BEGIN; -- 開始交易
UPDATE accounts SET balance = balance - 100 WHERE name = 'Alice';
UPDATE accounts SET balance = balance + 100 WHERE name = 'Bob';
COMMIT; -- 確認提交 (若有錯誤則 ROLLBACK)`,
        typeTable: [
            { type: 'ACID', desc: 'Atomic (原子性)', example: '不可分割' },
            { type: 'ACID', desc: 'Consistency (一致性)', example: '符合約束' },
            { type: 'ACID', desc: 'Isolation (隔離性)', example: '互不干擾' },
            { type: 'ACID', desc: 'Durability (持久性)', example: '永不遺失' }
        ]
    },
    {
        id: 'foreign-key',
        name: 'Foreign Key (外鍵)',
        emoji: '🔗',
        phase: 2,
        eli5: '外鍵是用來「指向別人家主鍵」的欄位，確保資料的關聯是正確的，不能隨便指到不存在的人。',
        analogy: '像是員工證上的「部門代號」。如果部門代號是 "D01"，那麼公司一定要有一個叫 "D01" 的部門，不能憑空捏造。',
        whyMatters: [
            'Referential Integrity (參考完整性)：防止孤兒資料 (Orphan Record)。',
            '如果刪除了部門，系統會警告你「還有員工屬於這個部門」，避免誤刪。',
            '是 JOIN 的基礎。'
        ],
        visual: `
users 表 (主鍵: id)   tasks 表 (外鍵: user_id)
┌────┬───────┐       ┌────┬────────┬─────────┐
│ id │ name  │ <──── │ id │ title  │ user_id │
├────┼───────┤       ├────┼────────┼─────────┤
│  1 │ Alice │       │ 10 │ 買牛奶 │    1    │
│  2 │ Bob   │       │ 11 │ 寫程式 │    1    │
└────┴───────┘       │ 12 │ 運動   │    2    │
                     └────┴────────┴─────────┘
user_id 必須存在於 users 表的 id 中！`,
        codeExample: `CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) -- 設定外鍵
);`,
        related: ['Primary_Key', 'CREATE_TABLE']
    },
    {
        id: 'joins',
        name: 'Joins (連結)',
        emoji: '🤝',
        phase: 2,
        eli5: '把兩張分開的表格，依照共同的欄位 (通常是 ID) 拼成一張大表格。',
        analogy: '像是把「學生名單」和「成績單」擺在一起對照。名單有名字沒成績，成績單有分數沒名字，合起來才知道「王小明考 100 分」。',
        whyMatters: [
            '正規化後的資料散落在不同表格，必須靠 JOIN 才能還原完整資訊。',
            'Inner Join (交集)：只留兩邊都有的。',
            'Left Join (左保留)：左邊全留，右邊有就補，沒有就填 NULL。'
        ],
        visual: `
Inner Join:        Left Join:
  (A ∩ B)            (A 全部 + B 的交集)
  只取有對應的        A 的孤兒也會留下
`,
        typeTable: [
            { type: 'INNER JOIN', desc: '兩邊都有才留', example: '有分發到部門的員工' },
            { type: 'LEFT JOIN', desc: '左邊全留', example: '所有員工 (含無部門)' },
            { type: 'RIGHT JOIN', desc: '右邊全留', example: '所有部門 (含無員工)' },
            { type: 'FULL JOIN', desc: '兩邊全留', example: '所有員工與部門' }
        ],
        codeExample: `SELECT users.name, tasks.title
FROM users
INNER JOIN tasks ON users.id = tasks.user_id;`,
        related: ['Primary_Key', 'Foreign_Key', 'SELECT']
    }
];
