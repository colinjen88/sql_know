// =========================================
// 開發規範資料
// =========================================

export const styleGuideData = [
    {
        id: 'naming',
        name: '命名慣例 (Naming Conventions)',
        emoji: '🏷️',
        summary: '統一的命名讓程式碼像是一個人寫的，避免團隊混亂。',
        rules: [
            {
                title: 'Snake Case (蛇形命名)',
                desc: '所有資料表、欄位名稱一律使用小寫英文加底線。',
                bad: 'UserId, CreateDate, TaskStatus',
                good: 'user_id, create_date, task_status',
            },
            {
                title: 'Plural Tables (複數表名)',
                desc: '資料表是「資料的集合」，所以用複數名詞。',
                bad: 'user, task, order',
                good: 'users, tasks, orders',
            },
            {
                title: 'Primary Key (主鍵)',
                desc: '統一使用 `id` 作為該表主鍵，外鍵則用 `table_id`。',
                bad: 'u_id, UserID, pk_users',
                good: 'id (在 users 表), user_id (在 orders 表)',
            },
        ],
    },
    {
        id: 'formatting',
        name: '語法格式 (Formatting)',
        emoji: '🎨',
        summary: '良好的排版能讓 SQL 查詢的可讀性提升十倍。',
        rules: [
            {
                title: 'Uppercase Keywords (關鍵字大寫)',
                desc: 'SQL 關鍵字使用全大寫，與變數區隔。',
                bad: 'select * from users where id = 1',
                good: 'SELECT * FROM users WHERE id = 1',
            },
            {
                title: 'New Lines (換行)',
                desc: '每個主要子句 (SELECT, FROM, WHERE) 獨立一行。',
                bad: 'SELECT * FROM users WHERE age > 18 AND active = true',
                good: `SELECT *
FROM users
WHERE age > 18
  AND active = true`,
            },
            {
                title: 'Indentation (縮排)',
                desc: '子句內容縮排 2 或 4 格空格 (統一即可)。',
                bad: `SELECT
id,
name
FROM users`,
                good: `SELECT
    id,
    name
FROM users`,
            },
        ],
    },
    {
        id: 'safety',
        name: '安全規範 (Safety Rules)',
        emoji: '🛡️',
        summary: '防止手滑刪庫的救命規則。',
        rules: [
            {
                title: 'Destructive WHERE (破壞性操作)',
                desc: 'UPDATE 和 DELETE 永遠要先寫 WHERE，再寫指令。',
                bad: 'DELETE FROM users; -- 忘記寫 WHERE',
                good: `DELETE FROM users
WHERE id = 99; -- 雖然語法順序在後，但心裡要先想 WHERE`,
            },
            {
                title: 'Select First (先查後改)',
                desc: '在執行 UPDATE/DELETE 前，先用 SELECT 驗證範圍。',
                bad: '直接執行 UPDATE ...',
                good: `1. SELECT * FROM users WHERE ...
2. 確認無誤
3. UPDATE users SET ... WHERE ...`,
            },
        ],
    },
];
