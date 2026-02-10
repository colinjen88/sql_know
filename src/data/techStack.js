// =========================================
// 技術選型資料
// =========================================

export const techStackData = [
    {
        id: 'database',
        name: '資料庫 (Database)',
        emoji: '🗄️',
        description: '核心儲存引擎，選擇正確的資料庫決定了系統的擴展性與功能邊界。',
        items: [
            {
                name: 'PostgreSQL',
                type: 'RDBMS',
                verdict: '🏆 首選推薦',
                pros: ['功能最強大 (JSON, GIS)', '業界標準，開源免費', '嚴謹的 ACID 事務'],
                cons: ['配置稍複雜', '資源佔用較高'],
                recommendation: '學習 SQL 的最佳起點，幾乎所有現代 Web 應用都支援。',
            },
            {
                name: 'MySQL / MariaDB',
                type: 'RDBMS',
                verdict: '老牌穩定',
                pros: ['市佔率極高', '安裝簡單', '社群資源豐富'],
                cons: ['進階功能較少 (Window Fn)', '預設設定有時太寬鬆'],
                recommendation: '許多 legacy 專案在使用，適合第二個學習。',
            },
            {
                name: 'SQLite',
                type: 'Embedded',
                verdict: '輕量級',
                pros: ['單一檔案，免安裝', '適合測試與小型 App', '零配置'],
                cons: ['不支援多人併發', '型別檢查較弱'],
                recommendation: '手機 App 或僅需單機儲存時使用。',
            },
        ],
    },
    {
        id: 'gui',
        name: '管理工具 (GUI Client)',
        emoji: '🖥️',
        description: '不用記所有指令，視覺化工具能大幅提升開發效率。',
        items: [
            {
                name: 'DBeaver',
                type: 'Desktop App',
                verdict: '🏆 功能最全',
                pros: ['支援所有資料庫', '強大的 ER 圖生成', '免費開源 (Community 版)'],
                cons: ['介面較複雜 (Eclipse 風格)', '啟動稍慢'],
                recommendation: '專業後端開發者的標準配備。',
            },
            {
                name: 'VSCode SQLTools',
                type: 'VSCode Extension',
                verdict: '輕便整合',
                pros: ['不用切換視窗', '直接在編輯器執行 SQL', '輕量快速'],
                cons: ['功能較陽春', '視覺化圖表較弱'],
                recommendation: '簡單查詢或不想開大軟體時使用。',
            },
            {
                name: 'TablePlus',
                type: 'Desktop App',
                verdict: '顏值最高',
                pros: ['原生應用 (Native)，速度極快', '介面精美現代', '體驗極佳'],
                cons: ['免費版有分頁限制', '進階功能需付費'],
                recommendation: '追求極致體驗且願意付費的開發者。',
            },
        ],
    },
];
