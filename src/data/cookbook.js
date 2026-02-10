// =========================================
// 實戰食譜資料
// =========================================

export const cookbookData = [
    {
        id: 'find-duplicates',
        name: '如何找出重複的資料',
        emoji: '🔍',
        difficulty: '基礎',
        context: '當老闆說「為什麼有兩筆一模一樣的訂單？」或是你懷疑資料被重複匯入時使用。',
        solution: `-- 找出重複的 email
SELECT email, COUNT(*) AS duplicate_count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;`,
        advancedSolution: `-- 進階：列出重複資料的完整內容
SELECT *
FROM tasks
WHERE title IN (
    SELECT title
    FROM tasks
    GROUP BY title
    HAVING COUNT(*) > 1
)
ORDER BY title, id;`,
        explanation: [
            'GROUP BY email — 把相同 email 的資料歸為一組',
            'COUNT(*) — 計算每組有幾筆',
            'HAVING COUNT(*) > 1 — 只留下出現超過 1 次的組（重複的）',
        ],
        tip: 'WHERE 在分組之前篩選，HAVING 在分組之後篩選（能用聚合函數）。',
        performanceNote: '大資料表上 GROUP BY 需掃描整張表。若經常查重複，建議建立 UNIQUE 約束。',
        related: ['SELECT', 'GROUP BY'],
    },
    {
        id: 'safe-update-delete',
        name: '如何安全地 UPDATE / DELETE',
        emoji: '🛡️',
        difficulty: '基礎',
        context: '每次要修改或刪除資料時，為了避免「不小心改到全部」的災難。',
        solution: `-- 安全操作 SOP：三步驟
-- Step 1: 先 SELECT 確認目標
SELECT * FROM tasks WHERE id = 1;

-- Step 2: 確認無誤後再執行
UPDATE tasks
SET is_completed = TRUE
WHERE id = 1;

-- Step 3: 再 SELECT 驗證結果
SELECT * FROM tasks WHERE id = 1;`,
        advancedSolution: `-- 使用 Transaction 保護（進階）
BEGIN;

UPDATE tasks SET is_completed = TRUE WHERE id = 1;
-- 確認結果
SELECT * FROM tasks WHERE id = 1;

-- 如果正確就 COMMIT，錯誤就 ROLLBACK
COMMIT;
-- 或 ROLLBACK;`,
        explanation: [
            '永遠先 SELECT 確認你要操作的目標',
            '用主鍵 (id) 作為 WHERE 條件最精確、最安全',
            'Transaction 可以讓你「反悔」— ROLLBACK 還原所有操作',
        ],
        tip: '養成習慣：每次 UPDATE/DELETE 前都複製 WHERE 條件先 SELECT 一次。',
        performanceNote: null,
        related: ['UPDATE', 'DELETE', 'Primary_Key'],
    },
];
