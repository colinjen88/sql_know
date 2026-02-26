# 知識庫系統 (Knowledge System) 架構優化與說明文件

本文件詳細說明了專案從單一 SQL 筆記改版為「多知識庫系統」的優化歷程、架構設計以及未來擴充計劃。

## 1. 核心改動說明

### 1.1 多知識庫支援 (Multi-KB Support)
系統已從硬編碼的 SQL 模式，轉型為可動態切換的通用知識庫框架。
- **切換機制**：透過 `Header` 左側的下拉選單，使用者可在不同的知識庫（如 SQL Mastery, AI & LLM Guide）之間快速切換。
- **狀態管理**：新增 `store.js` 負責管理當前啟用的知識庫狀態，並持久化存儲於 `localStorage`。
- **資料隔離**：各個知識庫的學習進度、日誌記錄與資料內容均實現物理或邏輯上的隔離。

### 1.2 資料架構模組化
為了支援多種知識庫，資料層進行了目錄重構：
- `src/data/sql/`: 存放原本的 SQL 核心資料。
- `src/data/ai/`: 存放新建立的 AI 知識庫資料。
- `dataLoader.js`: 統一的資料出口，根據當前 KB ID 自動注入正確的資料內容。

### 1.3 UI/UX 優化
- **動態主題**：側邊欄、進度條與 Logo 會根據當前知識庫的主題色進行變色，提供視覺上的即時回饋。
- **自動計數 (Badge)**：側邊欄選單會根據各知識庫內的實際資料量自動顯示筆數（如語法數量、觀念數量）。
- **SPA 導航優化**：麵包屑與頁面標題會同步顯示當前知識庫名稱。

## 2. 檔案架構

```bash
src/
├── components/         # 共用組件 (Sidebar, Header, Progress, etc.)
├── data/
│   ├── sql/            # SQL 專屬資料
│   ├── ai/             # AI 專屬資料
│   └── dataLoader.js   # 資料分發層 (Data Facade)
├── pages/              # 頁面模板 (Dashboard, Syntax, etc.)
├── store.js            # 全域狀態管理 (KB State)
├── main.js             # 入口檔案，負責初始化與事件委派
└── router.js           # 路由控制
```

### 1.4 非同步 Markdown 載入 (Dynamic Markdown)
- **內容解耦**：將核心內容（如語法詳細說明、核心觀念）從 `.js` 移至 `.md` 檔案。
- **解析器**：採用 `marked` 解析 Markdown 語法，支援表格、程式碼塊與列表渲染。

### 1.5 強化型搜尋功能
- **全域掃描**：搜尋時會同時掃描當前知識庫的所有類別（語法、觀念、食譜）。
- **即時過濾**：在 Header 輸入關鍵字即可連動各個列表頁面的過濾狀態。

### 1.6 即時無刷新切換 (SPA Level UX)
- **無重整切換**：透過 `kb-change` 事件與 `router` 手動觸發重繪，切換知識庫不再需要 `window.reload()`。
- **動態標籤**：導覽列標籤會隨知識庫類型動態變更（如：語法字典 vs 提示詞框架）。

## 2. 檔案架構

```bash
src/
├── components/         # 共用組件 (Sidebar, Header, Progress, etc.)
├── data/
│   ├── sql/            # SQL 專屬資料 (.js & .md)
│   ├── ai/             # AI 專屬資料 (.js & .md)
│   └── dataLoader.js   # 資料分發層 (Data Facade)
├── utils/              # 工具類 (mdLoader.js)
├── pages/              # 頁面模板 (Dashboard, Syntax, etc.)
├── store.js            # 全域狀態管理 (KB State & Labels)
├── main.js             # 入口檔案，負責初始化與全域搜尋事件
└── router.js           # 路由控制 (支援非同步渲染)
```

## 3. 未來優化建議

### 3.1 搜尋結果覆蓋層 (Search Overlay)
目前的搜尋是連動各頁面的 Filter，未來可增加一個彈出式的全域搜尋結果列表。

### 3.2 現代化框架轉型 (Vue/React)
當系統規模擴展至 5 個以上知識庫時，建議將 vanilla JS 遷移至現代化框架（如 Vue 3 或 Nuxt 3），以獲得更好的狀態響應式更新與組件化維護體驗。

### 後續建議
- 資料擴充 ：您可以繼續在 `data/ai/` 或 `data/sql/` 目錄下填充更多 `.md` 檔案。
- 自動化佈署 ：若您有 VPS，可以利用專案內的 `vps_deploy.sh` 進行自動化更新。
---
*更新日期：2026-02-26*
*維護者：Trae Pair Programmer*
