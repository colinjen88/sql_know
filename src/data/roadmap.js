// =========================================
// 學習路徑資料
// =========================================

export const roadmapData = [
    {
        id: 'phase-1',
        phase: 1,
        emoji: '🌱',
        title: 'Phase 1: 基礎生存',
        subtitle: 'The Foundation',
        desc: '能夠手動對單一表格進行增刪改查。',
        skills: [
            {
                id: 'ddl-create',
                name: 'CREATE TABLE / DROP TABLE',
                category: 'DDL (定義)',
                hint: '理解 INT, TEXT, BOOLEAN 等資料型別。',
                link: 'create-table',
            },
            {
                id: 'dml-insert',
                name: 'INSERT INTO',
                category: 'DML (新增)',
                hint: '如何寫入資料。',
                link: 'insert-into',
            },
            {
                id: 'dml-select',
                name: 'SELECT / WHERE',
                category: 'DML (讀取)',
                hint: '如何把資料撈出來，並使用 AND, OR 篩選。',
                link: 'select',
            },
            {
                id: 'dml-update',
                name: 'UPDATE',
                category: 'DML (更新)',
                hint: '修改狀態，千萬記得加 WHERE。',
                link: 'update',
            },
            {
                id: 'dml-delete',
                name: 'DELETE',
                category: 'DML (刪除)',
                hint: '刪除資料，千萬記得加 WHERE。',
                link: 'delete',
            },
        ],
    },
    {
        id: 'phase-2',
        phase: 2,
        emoji: '🌿',
        title: 'Phase 2: 結構與關聯',
        subtitle: 'Relationships',
        desc: '加入 users 表格，讓任務可以指派給人。',
        skills: [
            {
                id: 'constraints',
                name: 'PRIMARY KEY / FOREIGN KEY',
                category: '約束 (Constraints)',
                hint: '保護資料完整性。',
                link: null,
            },
            {
                id: 'joins',
                name: 'INNER JOIN / LEFT JOIN',
                category: '連結 (Joins)',
                hint: 'SQL 的靈魂，將兩張表拼在一起看。',
                link: null,
            },
            {
                id: 'design-1n',
                name: '一對多關聯 (1:N)',
                category: '設計 (Design)',
                hint: '一個使用者可以有多個任務。',
                link: null,
            },
        ],
    },
    {
        id: 'phase-3',
        phase: 3,
        emoji: '🌳',
        title: 'Phase 3: 數據洞察',
        subtitle: 'Insights',
        desc: '製作簡易統計報表。',
        skills: [
            {
                id: 'aggregation',
                name: 'COUNT / SUM / AVG',
                category: '聚合 (Aggregation)',
                hint: '計算總數。',
                link: null,
            },
            {
                id: 'grouping',
                name: 'GROUP BY / HAVING',
                category: '分群 (Grouping)',
                hint: '依類別統計（每個人完成了幾個任務？）。',
                link: null,
            },
            {
                id: 'ordering',
                name: 'ORDER BY / LIMIT',
                category: '排序與限制',
                hint: '排行榜功能。',
                link: null,
            },
        ],
    },
];
