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
                intro: '最強大的開源關聯式資料庫。支援複雜查詢、JSON 儲存與地理資訊 (GIS)，以 ACID 嚴謹性與強大擴展力著稱，是現代 Web 應用與企業系統的首選。',
                verdict: '🏆 首選推薦',
                pros: ['功能最強大 (JSON, GIS)', '業界標準，開源免費', '嚴謹的 ACID 事務'],
                cons: ['配置稍複雜', '資源佔用較高'],
                recommendation: '學習 SQL 的最佳起點，幾乎所有現代 Web 應用都支援。',
                id: 'postgresql',
                quickStart: `# Install via Docker
docker run --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres

# Or MacOS (Homebrew)
brew install postgresql
brew services start postgresql`,
                guide: [
                    '⚠️ 權限地雷：安裝後預設只有 postgres 用戶能登入，建議立刻建立專屬 User。',
                    '⚡ 效能優化：關聯表 (Foreign Key) 記得建 Index，否則 Join 查詢會慢到懷疑人生。',
                    '🔧 JSONB 陷阱：雖然好用，但若高頻更新該欄位，會導致 Table Bloat (膨脹)，請謹慎使用。',
                    '🐳 Docker 推薦：Windows 本機安裝常有權限問題，用 Docker 跑 DB 是最乾淨的解法。'
                ],
                links: [
                    { label: 'Official Site', url: 'https://www.postgresql.org/' },
                    { label: 'Postgres Guide', url: 'https://www.postgresqltutorial.com/' }
                ]
            },
            {
                name: 'MySQL / MariaDB',
                type: 'RDBMS',
                intro: '最普及的開源資料庫，以速度與穩定性著稱。適合網路應用、CMS 系統與中小型專案，擁有龐大的社群支援與豐富的外掛生態。',
                verdict: '老牌穩定',
                pros: ['市佔率極高', '安裝簡單', '社群資源豐富'],
                cons: ['進階功能較少 (Window Fn)', '預設設定有時太寬鬆'],
                recommendation: '許多 legacy 專案在使用，適合第二個學習。',
                id: 'mysql',
                links: [{ label: 'Official Site', url: 'https://www.mysql.com/' }]
            },
            {
                name: 'SQLite',
                type: 'Embedded',
                intro: '輕量級、免安裝的嵌入式資料庫。所有資料存在單一檔案中，無需伺服器進程，極其適合手機 App、測試環境或單機工具軟體。',
                verdict: '輕量級',
                pros: ['單一檔案，免安裝', '適合測試與小型 App', '零配置'],
                cons: ['不支援多人併發', '型別檢查較弱'],
                recommendation: '手機 App 或僅需單機儲存時使用。',
                id: 'sqlite',
                links: [{ label: 'Official Site', url: 'https://www.sqlite.org/' }]
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
                intro: '功能最完整的免費資料庫管理工具。支援 JDBC 驅動連線幾乎所有資料庫類型，提供視覺化 ER 圖生成、資料匯入匯出與 SQL 編輯功能。',
                verdict: '🏆 功能最全',
                pros: ['支援所有資料庫', '強大的 ER 圖生成', '免費開源 (Community 版)'],
                cons: ['介面較複雜 (Eclipse 風格)', '啟動稍慢'],
                recommendation: '專業後端開發者的標準配備。',
                id: 'dbeaver',
                guide: [
                    '⚠️ 驅動程式：第一次連線時會自動下載 Driver，請保持網路暢通。',
                    '📂 腳本管理：建議將常用 SQL 存成 Script 檔案管理，不要只依賴 History。',
                    '⚡ 記憶體：Java 寫的比較吃記憶體，若電腦慢可改用輕量的 Adminer 或 SQLTools。'
                ],
                links: [{ label: 'Download', url: 'https://dbeaver.io/' }]
            },
            {
                name: 'VSCode SQLTools',
                type: 'VSCode Extension',
                intro: '專為 VSCode 使用者設計的資料庫連結外掛。讓你不需要切換視窗，就能直接在編輯器內執行查詢、檢視資料表結構，輕量且方便。',
                verdict: '輕便整合',
                pros: ['不用切換視窗', '直接在編輯器執行 SQL', '輕量快速'],
                cons: ['功能較陽春', '視覺化圖表較弱'],
                recommendation: '簡單查詢或不想開大軟體時使用。',
                id: 'sqltools',
                links: [{ label: 'Marketplace', url: 'https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools' }]
            },
            {
                name: 'TablePlus',
                type: 'Desktop App',
                intro: '目前市面上顏值最高、速度最快的原生資料庫管理軟體。介面現代化，操作流暢，但免費版有同時開啟視窗數量的限制。',
                verdict: '顏值最高',
                pros: ['原生應用 (Native)，速度極快', '介面精美現代', '體驗極佳'],
                cons: ['免費版有分頁限制', '進階功能需付費'],
                recommendation: '追求極致體驗且願意付費的開發者。',
                id: 'tableplus',
                links: [{ label: 'Official Site', url: 'https://tableplus.com/' }]
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
                intro: '現代化的 Node.js/TypeScript ORM。透過定義 Schema 自動生成型別安全的客戶端 API，讓操作資料庫像在寫原生程式碼一樣直覺，大幅減少 SQL 拼寫錯誤。',
                verdict: '🏆 現代開發首選',
                pros: ['型別安全 (Type-safe)', '自動生成 Client', '遷移 (Migration) 工具好用'],
                cons: ['對複雜 SQL 支援度有限', '效能有時不如 Raw SQL'],
                recommendation: '寫 TypeScript 後端時，Prisma 是目前最強大的選擇。',
                id: 'prisma',
                quickStart: `npm install prisma --save-dev
npx prisma init`,
                guide: [
                    '⚠️ 熱更新陷阱：在 Next/Nuxt 開發模式下，務必使用 Singleton 模式宣告 Prisma Client，否則連線數會爆炸。',
                    '🔧 Generate：每次修改 `schema.prisma` 後，一定要執行 `npx prisma generate` 更新型別。',
                    '⚡ N+1 問題：雖然關聯查詢方便，但迴圈內查詢是大忌，善用 `include` 一次抓取。'
                ],
                links: [
                    { label: 'Prisma Docs', url: 'https://www.prisma.io/docs' },
                    { label: 'Prisma Examples', url: 'https://github.com/prisma/prisma-examples' }
                ]
            },
            {
                name: 'Django ORM / Eloquent',
                type: 'Python / PHP',
                intro: '框架內建的強大 ORM，採用 Active Record 模式。雖然在極端效能調校上不如 Data Mapper 靈活，但對於快速開發與直覺操作有著巨大的優勢。',
                verdict: '快速開發神器',
                pros: ['Active Record 模式 (直覺)', '與框架高度整合', '電池附帶 (Batteries-included)'],
                cons: ['容易產生 N+1 問題', '複雜查詢難以維護'],
                recommendation: '使用 Django (Python) 或 Laravel (PHP) 建構全端網站時首選。',
                id: 'django-orm',
                links: [{ label: 'Django Docs', url: 'https://docs.djangoproject.com/en/stable/topics/db/' }]
            },
            {
                name: 'Hibernate / Entity Framework',
                type: 'Java / C# (.NET)',
                intro: '企業級應用的標準 ORM 解決方案。功能極其強大，支援複雜的物件關聯映射與快取機制，是傳統大型系統的基石。',
                verdict: '企業級標準',
                pros: ['Data Mapper 模式 (解耦)', '支援複雜關聯映射', '成熟穩定'],
                cons: ['學習曲線陡峭', '設定繁瑣', '啟動較慢'],
                recommendation: '大型企業系統、複雜邏輯後端的標準配備。',
                id: 'hibernate',
                links: [{ label: 'Hibernate ORM', url: 'https://hibernate.org/orm/' }]
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
                id: 'nuxt-prisma-tail',
                name: 'Nuxt 3 + Prisma + PostgreSQL + Tailwind',
                type: 'The Golden Stack (黃金標準)',
                intro: '集大成的全端開發框架。整合了 Vue 3 的反應式前端、Nitro 的高效後端、Prisma 的型別安全與 Tailwind 的原子化樣式，是單人極速開發 SaaS 的神器。',
                verdict: '🏆 現代全端首選',
                pros: [
                    '極佳開發體驗 (DX): 自動引入、熱更新',
                    '完全型別安全 (Type Safety): 從 DB 到前端',
                    'Server 內建 (Nitro): 不需額外架設 API Server',
                    'Tailwind: 快速刻版，與 Component 完美結合'
                ],
                cons: ['學習曲線較高 (需熟 Vue 3 + TS)', '對純靜態站稍嫌厚重'],
                recommendation: '想一個人快速做出 SaaS 產品、公司內部系統或複雜應用的最佳選擇。',
                quickStart: `# Initialize Nuxt project
npx nuxi@latest init my-app
cd my-app

# Install dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Install Prisma
npm install prisma --save-dev
npx prisma init`,
                guide: [
                    '⚠️ 伺服器除錯：`console.log` 在 Server 端這裡會印在終端機，而不是瀏覽器控制台。',
                    '🔧 自動引入：Nuxt 自動引入 Component 很方便，但若遇到同名衝突，需手動 import 解決。',
                    '⚡ Tailwind：建議安裝 VSCode 套件 (Tailwind CSS IntelliSense) 輔助，避免寫出錯誤 class。'
                ],
                links: [
                    { label: 'Nuxt 3 Docs', url: 'https://nuxt.com/docs' },
                    { label: 'Prisma Quickstart', url: 'https://www.prisma.io/docs/getting-started' },
                    { label: 'Tailwind Guides', url: 'https://tailwindcss.com/docs/guides/nuxtjs' }
                ]
            },
            {
                id: 'next-t3',
                name: 'Next.js + tRPC + Prisma (T3 Stack)',
                type: 'React Ecosystem (React 生態)',
                intro: 'React 生態系中最受推崇的全端組合。透過 tRPC 實現前後端型別 100% 同步，修改後端 API 定義，前端錯誤會立即顯示，開發體驗極致流暢。',
                verdict: '⚛️ React 界的標準',
                pros: [
                    'tRPC: 前後端型別 100% 同步，改後端前端自動報錯',
                    '與 Nuxt 3 相似但生態系更龐大 (套件更多)',
                    'Vercel 部署體驗極佳'
                ],
                cons: ['設定繁瑣 (Boilerplate)', 'React Server Components 學習曲線陡峭'],
                recommendation: '如果你是 React 愛好者，這就是你的「黃金組合」。',
                quickStart: `npm create t3-app@latest`,
                links: [
                    { label: 'Create T3 App', url: 'https://create.t3.gg/' },
                    { label: 'Next.js Docs', url: 'https://nextjs.org/docs' }
                ]
            },
            {
                id: 'django-htmx',
                name: 'Django + PostgreSQL + HTMX',
                type: 'The "Boring" Stack (穩健組合)',
                intro: '返璞歸真的高效開發組合。利用 Django 強大的後台與 ORM，搭配 HTMX 在不寫複雜 JavaScript 的情況下實現局部更新，是單人全端與內部工具開發的隱藏強者。',
                verdict: '🛡️ 企業級/快速開發',
                pros: [
                    'Batteries-included: 內建後台、權限、ORM，什麼都有',
                    'Python 生態: 方便整合 AI/ML 功能',
                    'HTMX: 不寫複雜 JS 也能有 SPA 體驗'
                ],
                cons: ['效能略低於 Node.js', '對即時互動 (WebSocket) 支援較弱'],
                recommendation: '適合需要高度客製化後台、強調資料安全性或 AI 整合的專案。',
                quickStart: `# Install Django
pip install django
django-admin startproject myproject

# Install HTMX via CDN in template (simplest way)
<script src="https://unpkg.com/htmx.org@1.9.10"></script>`,
                links: [
                    { label: 'Django Intro', url: 'https://www.djangoproject.com/start/' },
                    { label: 'HTMX Docs', url: 'https://htmx.org/docs/' }
                ]
            }
        ],
    },
];
