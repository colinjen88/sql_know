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
    {
        id: 'orm',
        name: 'ORM (Object-Relational Mapping)',
        emoji: '🔄',
        description: '不用手寫 SQL 也能操作資料庫？連接程式碼物件與資料表的翻譯機。',
        items: [
            {
                name: 'Prisma / TypeORM',
                type: 'Node.js / TypeScript',
                verdict: '🏆 現代開發首選',
                pros: ['型別安全 (Type-safe)', '自動生成 Client', '遷移 (Migration) 工具好用'],
                cons: ['對複雜 SQL 支援度有限', '效能有時不如 Raw SQL'],
                recommendation: '寫 TypeScript 後端時，Prisma 是目前最強大的選擇。',
            },
            {
                name: 'Django ORM / Eloquent',
                type: 'Python / PHP',
                verdict: '快速開發神器',
                pros: ['Active Record 模式 (直覺)', '與框架高度整合', '電池附帶 (Batteries-included)'],
                cons: ['容易產生 N+1 問題', '複雜查詢難以維護'],
                recommendation: '使用 Django (Python) 或 Laravel (PHP) 建構全端網站時首選。',
            },
            {
                name: 'Hibernate / Entity Framework',
                type: 'Java / C# (.NET)',
                verdict: '企業級標準',
                pros: ['Data Mapper 模式 (解耦)', '支援複雜關聯映射', '成熟穩定'],
                cons: ['學習曲線陡峭', '設定繁瑣', '啟動較慢'],
                recommendation: '大型企業系統、複雜邏輯後端的標準配備。',
            },
        ],
    },
    {
        id: 'stack',
        name: '全端開發組合 (Full Stack Combo)',
        emoji: '⚡',
        description: '單打獨鬥最強組合：前端、後端、資料庫一次搞定。',
        items: [
            {
                name: 'Nuxt 3 + Prisma + PostgreSQL + Tailwind',
                type: 'The Golden Stack (黃金標準)',
                verdict: '🏆 現代全端首選',
                pros: [
                    '極佳開發體驗 (DX): 自動引入、熱更新',
                    '完全型別安全 (Type Safety): 從 DB 到前端',
                    'Server 內建 (Nitro): 不需額外架設 API Server',
                    'Tailwind: 快速刻版，與 Component 完美結合'
                ],
                cons: ['學習曲線較高 (需熟 Vue 3 + TS)', '對純靜態站稍嫌厚重'],
                recommendation: '想一個人快速做出 SaaS 產品、公司內部系統或複雜應用的最佳選擇。',
            },
            {
                name: 'Next.js + tRPC + Prisma (T3 Stack)',
                type: 'React Ecosystem (React 生態)',
                verdict: '⚛️ React 界的標準',
                pros: [
                    'tRPC: 前後端型別 100% 同步，改後端前端自動報錯',
                    '與 Nuxt 3 相似但生態系更龐大 (套件更多)',
                    'Vercel 部署體驗極佳'
                ],
                cons: ['設定繁瑣 (Boilerplate)', 'React Server Components 學習曲線陡峭'],
                recommendation: '如果你是 React 愛好者，這就是你的「黃金組合」。',
            },
            {
                name: 'Django + PostgreSQL + HTMX',
                type: 'The "Boring" Stack (穩健組合)',
                verdict: '🛡️ 企業級/快速開發',
                pros: [
                    'Batteries-included: 內建後台、權限、ORM，什麼都有',
                    'Python 生態: 方便整合 AI/ML 功能',
                    'HTMX: 不寫複雜 JS 也能有 SPA 體驗'
                ],
                cons: ['效能略低於 Node.js', '對即時互動 (WebSocket) 支援較弱'],
                recommendation: '適合需要高度客製化後台、強調資料安全性或 AI 整合的專案。',
            }
        ],
    },
];
