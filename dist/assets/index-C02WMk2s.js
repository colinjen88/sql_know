(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const g of o.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const W={};let ye=null,ee=null;function k(t,a){W[t]=a}function Oe(t){ee=t}function S(t,a={}){const e=a&&Object.keys(a).length>0?`#${t}?${new URLSearchParams(a).toString()}`:`#${t}`;window.location.hash=e}function ke(){return ye}function Ce(){const t=window.location.hash.slice(1)||"dashboard",[a,e]=t.split("?"),i={};return e&&new URLSearchParams(e).forEach((r,o)=>{i[o]=r}),{path:a,params:i}}function ge(){const{path:t,params:a}=Ce();ye={path:t,params:a};const e=W[t];e?e(a):W.dashboard&&W.dashboard({}),ee&&ee(t,a)}function we(){window.addEventListener("hashchange",ge),ge()}const P=[{id:"phase-1",phase:1,emoji:"🌱",title:"Phase 1: 基礎生存",subtitle:"The Foundation",desc:"能夠手動對單一表格進行增刪改查。",skills:[{id:"ddl-create",name:"CREATE TABLE / DROP TABLE",category:"DDL (定義)",hint:"理解 INT, TEXT, BOOLEAN 等資料型別。",link:"create-table"},{id:"dml-insert",name:"INSERT INTO",category:"DML (新增)",hint:"如何寫入資料。",link:"insert-into"},{id:"dml-select",name:"SELECT / WHERE",category:"DML (讀取)",hint:"如何把資料撈出來，並使用 AND, OR 篩選。",link:"select"},{id:"dml-update",name:"UPDATE",category:"DML (更新)",hint:"修改狀態，千萬記得加 WHERE。",link:"update"},{id:"dml-delete",name:"DELETE",category:"DML (刪除)",hint:"刪除資料，千萬記得加 WHERE。",link:"delete"}]},{id:"phase-2",phase:2,emoji:"🌿",title:"Phase 2: 結構與關聯",subtitle:"Relationships",desc:"加入 users 表格，讓任務可以指派給人。",skills:[{id:"constraints",name:"PRIMARY KEY / FOREIGN KEY",category:"約束 (Constraints)",hint:"保護資料完整性。",link:null},{id:"joins",name:"INNER JOIN / LEFT JOIN",category:"連結 (Joins)",hint:"SQL 的靈魂，將兩張表拼在一起看。",link:null},{id:"design-1n",name:"一對多關聯 (1:N)",category:"設計 (Design)",hint:"一個使用者可以有多個任務。",link:null}]},{id:"phase-3",phase:3,emoji:"🌳",title:"Phase 3: 數據洞察",subtitle:"Insights",desc:"製作簡易統計報表。",skills:[{id:"aggregation",name:"COUNT / SUM / AVG",category:"聚合 (Aggregation)",hint:"計算總數。",link:null},{id:"grouping",name:"GROUP BY / HAVING",category:"分群 (Grouping)",hint:"依類別統計（每個人完成了幾個任務？）。",link:null},{id:"ordering",name:"ORDER BY / LIMIT",category:"排序與限制",hint:"排行榜功能。",link:null}]}],fe="sql-mastery-progress";function Y(){try{return JSON.parse(localStorage.getItem(fe)||"{}")}catch{return{}}}function $e(t,a){const e=Y();e[t]=a,localStorage.setItem(fe,JSON.stringify(e))}function Te(t){return!!Y()[t]}function ie(){const t=Y();let a=0,e=0;return P.forEach(i=>{i.skills.forEach(r=>{a++,t[r.id]&&e++})}),a===0?0:Math.round(e/a*100)}function be(t){const a=Y(),e=P.find(o=>o.id===t);if(!e)return 0;let i=e.skills.length,r=e.skills.filter(o=>a[o.id]).length;return i===0?0:Math.round(r/i*100)}function De(t,a=120){const e=(a-16)/2,i=2*Math.PI*e,r=i-t/100*i;return`
    <div class="progress-ring-container">
      <div class="progress-ring" style="width:${a}px;height:${a}px">
        <svg width="${a}" height="${a}" viewBox="0 0 ${a} ${a}">
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="var(--color-primary)" />
              <stop offset="100%" stop-color="var(--color-accent)" />
            </linearGradient>
          </defs>
          <circle class="progress-ring-bg" cx="${a/2}" cy="${a/2}" r="${e}" />
          <circle class="progress-ring-fill" cx="${a/2}" cy="${a/2}" r="${e}"
            stroke-dasharray="${i}" stroke-dashoffset="${r}" />
        </svg>
        <div class="progress-ring-text">
          <div class="progress-ring-percent">${t}%</div>
          <div class="progress-ring-label">完成率</div>
        </div>
      </div>
    </div>
  `}const se="sql-mastery-journal";function ne(){try{return JSON.parse(localStorage.getItem(se)||"[]")}catch{return[]}}function Me(t){const a=ne();a.unshift({...t,id:Date.now(),date:new Date().toISOString()}),localStorage.setItem(se,JSON.stringify(a))}function Fe(t){const a=ne().filter(e=>e.id!==t);localStorage.setItem(se,JSON.stringify(a))}const V=[{id:"dashboard",icon:"home",label:"首頁總覽",section:"main"},{id:"syntax",icon:"book-open",label:"語法字典",section:"learn",badge:"5"},{id:"concepts",icon:"lightbulb",label:"核心觀念",section:"learn",badge:"2"},{id:"cookbook",icon:"chef-hat",label:"實戰食譜",section:"learn",badge:"2"},{id:"tech",icon:"wrench",label:"技術選型",section:"learn",badge:"New"},{id:"guide",icon:"ruler",label:"開發規範",section:"learn",badge:"New"},{id:"roadmap",icon:"map",label:"學習路徑",section:"track"},{id:"journal",icon:"notebook-pen",label:"學習日誌",section:"track"}],Pe={home:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',"book-open":'<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',lightbulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',"chef-hat":'<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/>',map:'<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',"notebook-pen":'<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L11.3 8.713a1 1 0 0 0-.256.421l-.887 3.315 3.315-.887a1 1 0 0 0 .421-.256z"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',ruler:'<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0l12.6 12.6z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>'};function re(t,a=""){return`<svg class="${a}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Pe[t]||""}</svg>`}function Re(){const t=document.getElementById("sidebar"),a=ke(),e=a?a.path:"dashboard",i=ie(),r={main:V.filter(o=>o.section==="main"),learn:V.filter(o=>o.section==="learn"),track:V.filter(o=>o.section==="track")};t.innerHTML=`
    <div class="logo-area">
      <div class="logo-icon">${re("home","")}</div>
      <div class="logo-text">SQL Mastery</div>
    </div>
    
    <nav class="sidebar-nav">
      ${Q("",r.main,e)}
      ${Q("學習資源",r.learn,e)}
      ${Q("進度追蹤",r.track,e)}
    </nav>
    
    <div class="sidebar-progress" style="margin-top:auto; padding-top:24px; border-top:1px solid var(--border-color);">
      <div class="sidebar-progress-label" style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:12px; color:var(--text-muted);">
        <span>整體進度</span>
        <span>${i}%</span>
      </div>
      <div class="sidebar-progress-bar">
        <div class="sidebar-progress-fill" style="width: ${i}%"></div>
      </div>
    </div>
  `,t.querySelectorAll(".nav-item").forEach(o=>{o.addEventListener("click",()=>{S(o.dataset.route)})})}function Q(t,a,e){const i=t?`<div class="nav-section-title">${t}</div>`:"",r=a.map(o=>{const g=e===o.id?"active":"",u=o.badge==="New"?"nav-badge badge-new":"nav-badge",T=o.badge?`<span class="${u}">${o.badge}</span>`:"";return`
      <div class="nav-item ${g}" data-route="${o.id}">
        ${re(o.icon,"nav-icon")}
        <span>${o.label}</span>
        ${T}
      </div>
    `}).join("");return i+r}const me={dashboard:{title:"Dashboard",breadcrumb:"Overview"},syntax:{title:"Syntax Dictionary",breadcrumb:"SQL Syntax"},concepts:{title:"Core Concepts",breadcrumb:"Foundations"},cookbook:{title:"Cookbook",breadcrumb:"Practical Recipes"},tech:{title:"Tech Stack",breadcrumb:"Technologies"},guide:{title:"Style Guide",breadcrumb:"Coding Standards"},roadmap:{title:"Roadmap",breadcrumb:"Learning Path"},journal:{title:"Journal",breadcrumb:"Learning Log"}};function Be(t="dashboard"){const a=document.getElementById("header"),e=me[t]||me.dashboard;a.innerHTML=`
    <div>
      <div style="font-weight: 600; font-size: 16px; color: var(--text-primary); margin-bottom: 2px;">${e.title}</div>
      <div class="breadcrumb" style="font-size: 13px;">
        <span>SQL Mastery</span>
        <span style="color: var(--text-muted)">/</span>
        <span class="current">${e.breadcrumb}</span>
      </div>
    </div>
    
    <div class="search-bar" id="global-search">
      ${re("search","search-icon")}
      <input type="text" class="search-input" placeholder="Search (Cmd+K)..." id="search-input" />
    </div>
  `;const i=document.getElementById("search-input");i&&i.addEventListener("input",r=>{const o=new CustomEvent("global-search",{detail:r.target.value});window.dispatchEvent(o)})}const $=[{id:"create-table",name:"CREATE TABLE",emoji:"🏗️",phase:1,category:"DDL",summary:"建立新的資料表，定義欄位名稱、型別與約束條件。",syntax:`CREATE TABLE table_name (
    column1 data_type CONSTRAINT,
    column2 data_type CONSTRAINT,
    ...
);`,params:[{name:"table_name",desc:"資料表名稱，建議複數小寫 + 底線"},{name:"column",desc:"欄位名稱"},{name:"data_type",desc:"資料型別（INT, TEXT, BOOLEAN 等）"},{name:"CONSTRAINT",desc:"約束（NOT NULL, PRIMARY KEY, DEFAULT）"}],example:`-- 建立 tasks 資料表（Phase 1 目標表格）
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,result:"成功時回傳 CREATE TABLE，代表表格已建立。",warning:null,related:["INSERT_INTO","Primary_Key","Data_Types"]},{id:"insert-into",name:"INSERT INTO",emoji:"➕",phase:1,category:"DML",summary:"向資料表中插入新的資料列，可一次插入多筆。",syntax:`-- 指定欄位插入
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);

-- 一次插入多筆
INSERT INTO table_name (column1, column2, ...)
VALUES
    (value1a, value2a, ...),
    (value1b, value2b, ...);`,params:[{name:"table_name",desc:"目標表格"},{name:"(column1, ...)",desc:"要填入的欄位清單（有 DEFAULT 可省略）"},{name:"VALUES",desc:"對應欄位的值，順序必須一致"}],example:`-- 新增一筆任務
INSERT INTO tasks (title)
VALUES ('買牛奶');

-- 一次新增多筆任務
INSERT INTO tasks (title, is_completed)
VALUES
    ('寫程式', FALSE),
    ('運動', FALSE),
    ('看 SQL 教學', TRUE);`,result:"成功時回傳 INSERT 0 N，N 為插入的列數。",warning:"文字值必須用單引號，不能用雙引號。",related:["SELECT","CREATE_TABLE"]},{id:"select",name:"SELECT",emoji:"🔍",phase:1,category:"DML",summary:"從資料表中查詢資料，可搭配 WHERE 篩選條件。",syntax:`-- 基本查詢
SELECT column1, column2
FROM table_name;

-- 條件篩選
SELECT column1, column2
FROM table_name
WHERE condition;

-- 查詢所有欄位
SELECT *
FROM table_name;`,params:[{name:"column",desc:"要查詢的欄位名稱"},{name:"*",desc:"萬用字元，代表所有欄位"},{name:"table_name",desc:"目標資料表"},{name:"WHERE",desc:"篩選條件（可選）"}],example:`-- 撈出所有任務
SELECT * FROM tasks;

-- 只撈未完成的任務
SELECT id, title
FROM tasks
WHERE is_completed = FALSE;

-- 撈出標題包含「牛奶」的任務
SELECT *
FROM tasks
WHERE title LIKE '%牛奶%';`,result:"回傳一個結果集 (Result Set)，以表格形式呈現符合條件的資料列。",warning:null,related:["INSERT_INTO","UPDATE","DELETE"]},{id:"update",name:"UPDATE",emoji:"✏️",phase:1,category:"DML",summary:"修改資料表中既有的資料列。千萬記得加 WHERE！",syntax:`UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;`,params:[{name:"table_name",desc:"要更新的資料表"},{name:"SET column = value",desc:"要修改的欄位與新值"},{name:"WHERE",desc:"篩選條件，務必加上！"}],example:`-- 將「買牛奶」標記為已完成
UPDATE tasks
SET is_completed = TRUE
WHERE title = '買牛奶';

-- 同時修改多個欄位
UPDATE tasks
SET title = '去超市買牛奶', is_completed = FALSE
WHERE id = 1;`,result:"成功時回傳 UPDATE N，N 為受影響的列數。",warning:"⚠️ 千萬記得加 WHERE！不加會更新整張表格的所有資料。",related:["SELECT","DELETE","Primary_Key"]},{id:"delete",name:"DELETE",emoji:"🗑️",phase:1,category:"DML",summary:"刪除資料表中的資料列。千萬記得加 WHERE！",syntax:`DELETE FROM table_name
WHERE condition;`,params:[{name:"table_name",desc:"目標表格"},{name:"WHERE",desc:"篩選條件，務必加上！"}],example:`-- 刪除已完成的任務
DELETE FROM tasks
WHERE is_completed = TRUE;

-- 刪除特定一筆任務
DELETE FROM tasks
WHERE id = 5;`,result:"成功時回傳 DELETE N，N 為被刪除的列數。",warning:"⚠️ 千萬記得加 WHERE！不加會刪除整張表格所有資料，無法復原。",related:["SELECT","UPDATE","CREATE_TABLE"]},{id:"window_functions",name:"Window Functions (視窗函數)",emoji:"🪟",category:"Analysis",phase:3,summary:"不需 Group By 也能做分組統計，排名與累計的神器。",syntax:`SELECT column,
       func() OVER (PARTITION BY ... ORDER BY ...)
FROM table;`,params:[{name:"OVER()",desc:"定義視窗範圍的核心關鍵字"},{name:"PARTITION BY",desc:"分組依據 (類似 Group By 但不合併列)"},{name:"ORDER BY",desc:"排序依據 (影響排名與累計順序)"}],example:`-- 找出每個部門薪水最高的員工 (排名)
SELECT name, dept, salary,
       RANK() OVER (PARTITION BY dept ORDER BY salary DESC) as rank
FROM employees;`,result:"回傳所有員工資料，並附帶該員工在部門內的薪資排名 (rank)。",related:["GROUP_BY"],advanced:{title:"常用函數比較",content:`<ul>
        <li><code>ROW_NUMBER()</code>: 強制流水號 (1, 2, 3, 4)，即使同分也不重複。</li>
        <li><code>RANK()</code>: 跳號排名 (1, 2, 2, 4)，同分時名次相同。</li>
        <li><code>DENSE_RANK()</code>: 不跳號排名 (1, 2, 2, 3)，同分時名次相同。</li>
        <li><code>LAG() / LEAD()</code>: 取得 前一列 / 後一列 的值 (做 YoY 成長率必備)。</li>
      </ul>`}},{id:"cte",name:"CTE (通用資料表運算式)",emoji:"🔗",category:"Query",phase:3,summary:"把複雜查詢變成「暫存表」，讓 SQL 像寫程式一樣有變數。",syntax:`WITH cte_name AS (
    SELECT ...
)
SELECT * FROM cte_name;`,params:[{name:"WITH",desc:"宣告 CTE 的起始關鍵字"},{name:"cte_name",desc:"自訂的暫存表名稱"}],example:`WITH HighSalary AS (
    SELECT * FROM employees WHERE salary > 100000
)
SELECT dept, COUNT(*)
FROM HighSalary
GROUP BY dept;`,result:"先篩選出高薪員工 (HighSalary)，再對這個結果集進行部門統計。",related:["SELECT","Subquery"],advanced:{title:"Recursive CTE (遞迴)",content:`<p>CTE 最強大的功能是<strong>遞迴</strong>，用來處理樹狀結構 (如：組織圖、留言串)。</p>
<pre><code class="language-sql">WITH RECURSIVE subordinates AS (
    -- Anchor member (起點)
    SELECT id, name, manager_id FROM employees WHERE id = 1
    UNION ALL
    -- Recursive member (遞迴)
    SELECT e.id, e.name, e.manager_id
    FROM employees e
    INNER JOIN subordinates s ON e.manager_id = s.id
)
SELECT * FROM subordinates;</code></pre>`}},{id:"primary-key",name:"PRIMARY KEY",emoji:"🔑",phase:2,category:"Constraint",summary:"用來唯一識別資料列的約束條件，強迫欄位值不得重複且不為 NULL。",syntax:`CREATE TABLE table_name (
    id SERIAL PRIMARY KEY, -- 簡寫
    ...
);
-- 或是
CREATE TABLE table_name (
    id INT,
    CONSTRAINT pk_name PRIMARY KEY (id)
);`,params:[{name:"SERIAL",desc:"PostgreSQL 專用的自動遞增整數型別"},{name:"PRIMARY KEY",desc:"宣告此欄位為主鍵"}],example:`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL
);`,result:"建立表格時設定主鍵約束。",related:["CREATE_TABLE","Foreign_Key"]},{id:"foreign-key",name:"FOREIGN KEY",emoji:"🔗",phase:2,category:"Constraint",summary:"建立與另一張表的關聯，確保資料完整性 (Referential Integrity)。",syntax:`CREATE TABLE table_name (
    ...
    other_id INT REFERENCES other_table(id)
);
-- 或是
CREATE TABLE table_name (
    ...
    CONSTRAINT fk_name FOREIGN KEY (other_id) REFERENCES other_table(id)
);`,params:[{name:"REFERENCES",desc:"指向哪張表的哪個欄位"},{name:"ON DELETE CASCADE",desc:"(選用) 當父表刪除時，自動刪除子表資料"}],example:`CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE
);`,result:"建立表格時設定外鍵約束。",related:["CREATE_TABLE","Primary_Key"]},{id:"inner-join",name:"INNER JOIN",emoji:"🤝",phase:2,category:"Query",summary:"連結兩張表，只保留「兩邊都有對應」的資料列 (交集)。",syntax:`SELECT ...
FROM table_A
INNER JOIN table_B ON table_A.key = table_B.key;`,params:[{name:"INNER JOIN",desc:"連結關鍵字"},{name:"ON",desc:"連結條件 (通常是 id = foreign_key)"}],example:`-- 找出所有有任務的使用者及其任務
SELECT users.username, tasks.title
FROM users
INNER JOIN tasks ON users.id = tasks.user_id;`,result:"回傳符合連結條件的資料列。孤兒資料 (沒對應的) 會被過濾掉。",related:["SELECT","Left_Join","Foreign_Key"]},{id:"left-join",name:"LEFT JOIN",emoji:"👈",phase:2,category:"Query",summary:"連結兩張表，保留左邊表格的所有資料，右邊沒對應的填 NULL (左保留)。",syntax:`SELECT ...
FROM table_A
LEFT JOIN table_B ON table_A.key = table_B.key;`,params:[{name:"LEFT JOIN",desc:"以左表為主，右表為輔"}],example:`-- 找出所有使用者，即使他沒有任務 (任務欄位會是 NULL)
SELECT users.username, tasks.title
FROM users
LEFT JOIN tasks ON users.id = tasks.user_id;`,result:"回傳左表所有資料。若右表無對應資料，則該欄位顯示 NULL。",related:["SELECT","Inner_Join"]}],le=[{id:"primary-key",name:"Primary Key (主鍵)",emoji:"🔑",phase:1,eli5:"主鍵就是每一筆資料的「身分證字號」，絕對不會重複、不能為空，用來唯一辨識一筆資料。",analogy:"像是每個人的身分證字號 — 每人獨一無二，不可能兩個人共用同一組。也像圖書館每本書的 ISBN。",whyMatters:["沒有主鍵的話，如果有兩筆「買牛奶」，你無法精確地「只更新其中一筆」","資料庫會自動阻止你插入重複的主鍵值","是關聯的基礎 — Phase 2 學 JOIN 時，兩張表必須靠主鍵 + 外鍵連接"],visual:`tasks 表格
┌────┬────────────┬──────────────┬─────────────────────┐
│ id │   title    │ is_completed │     created_at      │
│ PK │            │              │                     │
├────┼────────────┼──────────────┼─────────────────────┤
│  1 │ 買牛奶     │ FALSE        │ 2024-02-10 10:00:00 │
│  2 │ 寫程式     │ FALSE        │ 2024-02-10 10:05:00 │
│  3 │ 運動       │ TRUE         │ 2024-02-10 10:10:00 │
└────┴────────────┴──────────────┴─────────────────────┘`,codeExample:`-- 使用 SERIAL + PRIMARY KEY 自動產生遞增主鍵
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);

-- 用主鍵精確操作資料
UPDATE tasks SET is_completed = TRUE WHERE id = 1;
DELETE FROM tasks WHERE id = 3;`,related:["CREATE_TABLE","UPDATE","DELETE"]},{id:"data-types",name:"Data Types (資料型別)",emoji:"📦",phase:1,eli5:"資料型別就是告訴資料庫：「這個欄位要存什麼種類的東西？」就像行李箱有分大小，你得選對尺寸。",analogy:"像是 Excel 的儲存格格式 — 你可以設定「數字」、「文字」、「日期」，SQL 也一樣。選錯型別就像把大象塞進小盒子。",whyMatters:["型別錯誤會導致查詢爆炸：如果把年齡存成 TEXT，就無法做 WHERE age > 18","節省儲存空間：BOOLEAN 只佔 1 byte，用 TEXT 存會佔更多","資料驗證：INTEGER 欄位會自動拒絕 abc 這種文字"],visual:null,typeTable:[{type:"INTEGER / INT",desc:"整數",example:"年齡、數量"},{type:"SERIAL",desc:"自動遞增整數",example:"主鍵"},{type:"TEXT",desc:"不限長度文字",example:"文章內容"},{type:"VARCHAR(n)",desc:"限制長度文字",example:"使用者名稱"},{type:"BOOLEAN",desc:"TRUE / FALSE",example:"是否完成"},{type:"TIMESTAMP",desc:"日期時間",example:"建立時間"},{type:"NUMERIC(p,s)",desc:"精確小數",example:"金額"},{type:"DATE",desc:"僅日期",example:"生日"}],codeExample:`CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,          -- 自動遞增整數
    title TEXT NOT NULL,             -- 不限長度文字
    is_completed BOOLEAN DEFAULT FALSE, -- 布林值
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 日期時間
);`,related:["CREATE_TABLE","INSERT_INTO"]},{id:"indexing",name:"Indexing (索引)",emoji:"⚡",phase:3,eli5:"像是書本的「目錄」。沒有目錄，找內容要一頁頁翻 (Full Scan)；有目錄，直接翻到那一頁 (Index Seek)。",analogy:"字典的部首索引。如果你要找「機」這個字，你會從「木」部首開始找（索引），而不是從第一頁「ㄅ」開始翻（全表掃描）。",whyMatters:["效能優化的第一步：讓查詢從 10秒 變成 0.1秒。","代價：雖然查詢變快，但寫入 (INSERT/UPDATE) 會變慢，因為要同時更新目錄。","主鍵 (Primary Key) 預設就會建立索引。"],advanced:{title:"進階索引策略",content:`<ul>
        <li><strong>B-Tree Index:</strong> 最常用的通用索引 (適合 =, >, <, BETWEEN)。</li>
        <li><strong>Hash Index:</strong> 僅適合精確匹配 (=)，不支援範圍查詢。</li>
        <li><strong>Composite Index (複合索引):</strong> 針對多個欄位建索引 (e.g., WHERE a = 1 AND b = 2)。注意 <strong>最左前綴原則 (Leftmost Prefix Rule)</strong>。</li>
      </ul>`}},{id:"transactions",name:"Transactions (交易)",emoji:"🤝",phase:3,eli5:"「要嘛全做，要嘛全不做」。保證一連串操作是不可分割的整體。",analogy:"銀行轉帳。A 扣款 100 元，B 加值 100 元。這兩個動作必須同時成功。如果 A 扣款成功但 B 加值失敗，系統必須把錢退回給 A (Rollback)。",whyMatters:["確保資料的一致性 (Consistency)。","避免髒讀 (Dirty Read) 與資料錯亂。"],codeExample:`BEGIN; -- 開始交易
UPDATE accounts SET balance = balance - 100 WHERE name = 'Alice';
UPDATE accounts SET balance = balance + 100 WHERE name = 'Bob';
COMMIT; -- 確認提交 (若有錯誤則 ROLLBACK)`,typeTable:[{type:"ACID",desc:"Atomic (原子性)",example:"不可分割"},{type:"ACID",desc:"Consistency (一致性)",example:"符合約束"},{type:"ACID",desc:"Isolation (隔離性)",example:"互不干擾"},{type:"ACID",desc:"Durability (持久性)",example:"永不遺失"}]},{id:"foreign-key",name:"Foreign Key (外鍵)",emoji:"🔗",phase:2,eli5:"外鍵是用來「指向別人家主鍵」的欄位，確保資料的關聯是正確的，不能隨便指到不存在的人。",analogy:'像是員工證上的「部門代號」。如果部門代號是 "D01"，那麼公司一定要有一個叫 "D01" 的部門，不能憑空捏造。',whyMatters:["Referential Integrity (參考完整性)：防止孤兒資料 (Orphan Record)。","如果刪除了部門，系統會警告你「還有員工屬於這個部門」，避免誤刪。","是 JOIN 的基礎。"],visual:`
users 表 (主鍵: id)   tasks 表 (外鍵: user_id)
┌────┬───────┐       ┌────┬────────┬─────────┐
│ id │ name  │ <──── │ id │ title  │ user_id │
├────┼───────┤       ├────┼────────┼─────────┤
│  1 │ Alice │       │ 10 │ 買牛奶 │    1    │
│  2 │ Bob   │       │ 11 │ 寫程式 │    1    │
└────┴───────┘       │ 12 │ 運動   │    2    │
                     └────┴────────┴─────────┘
user_id 必須存在於 users 表的 id 中！`,codeExample:`CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) -- 設定外鍵
);`,related:["Primary_Key","CREATE_TABLE"]},{id:"joins",name:"Joins (連結)",emoji:"🤝",phase:2,eli5:"把兩張分開的表格，依照共同的欄位 (通常是 ID) 拼成一張大表格。",analogy:"像是把「學生名單」和「成績單」擺在一起對照。名單有名字沒成績，成績單有分數沒名字，合起來才知道「王小明考 100 分」。",whyMatters:["正規化後的資料散落在不同表格，必須靠 JOIN 才能還原完整資訊。","Inner Join (交集)：只留兩邊都有的。","Left Join (左保留)：左邊全留，右邊有就補，沒有就填 NULL。"],visual:`
Inner Join:        Left Join:
  (A ∩ B)            (A 全部 + B 的交集)
  只取有對應的        A 的孤兒也會留下
`,typeTable:[{type:"INNER JOIN",desc:"兩邊都有才留",example:"有分發到部門的員工"},{type:"LEFT JOIN",desc:"左邊全留",example:"所有員工 (含無部門)"},{type:"RIGHT JOIN",desc:"右邊全留",example:"所有部門 (含無員工)"},{type:"FULL JOIN",desc:"兩邊全留",example:"所有員工與部門"}],codeExample:`SELECT users.name, tasks.title
FROM users
INNER JOIN tasks ON users.id = tasks.user_id;`,related:["Primary_Key","Foreign_Key","SELECT"]}],oe=[{id:"find-duplicates",name:"如何找出重複的資料",emoji:"🔍",difficulty:"基礎",context:"當老闆說「為什麼有兩筆一模一樣的訂單？」或是你懷疑資料被重複匯入時使用。",solution:`-- 找出重複的 email
SELECT email, COUNT(*) AS duplicate_count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;`,advancedSolution:`-- 進階：列出重複資料的完整內容
SELECT *
FROM tasks
WHERE title IN (
    SELECT title
    FROM tasks
    GROUP BY title
    HAVING COUNT(*) > 1
)
ORDER BY title, id;`,explanation:["GROUP BY email — 把相同 email 的資料歸為一組","COUNT(*) — 計算每組有幾筆","HAVING COUNT(*) > 1 — 只留下出現超過 1 次的組（重複的）"],tip:"WHERE 在分組之前篩選，HAVING 在分組之後篩選（能用聚合函數）。",performanceNote:"大資料表上 GROUP BY 需掃描整張表。若經常查重複，建議建立 UNIQUE 約束。",related:["SELECT","GROUP BY"]},{id:"safe-update-delete",name:"如何安全地 UPDATE / DELETE",emoji:"🛡️",difficulty:"基礎",context:"每次要修改或刪除資料時，為了避免「不小心改到全部」的災難。",solution:`-- 安全操作 SOP：三步驟
-- Step 1: 先 SELECT 確認目標
SELECT * FROM tasks WHERE id = 1;

-- Step 2: 確認無誤後再執行
UPDATE tasks
SET is_completed = TRUE
WHERE id = 1;

-- Step 3: 再 SELECT 驗證結果
SELECT * FROM tasks WHERE id = 1;`,advancedSolution:`-- 使用 Transaction 保護（進階）
BEGIN;

UPDATE tasks SET is_completed = TRUE WHERE id = 1;
-- 確認結果
SELECT * FROM tasks WHERE id = 1;

-- 如果正確就 COMMIT，錯誤就 ROLLBACK
COMMIT;
-- 或 ROLLBACK;`,explanation:["永遠先 SELECT 確認你要操作的目標","用主鍵 (id) 作為 WHERE 條件最精確、最安全","Transaction 可以讓你「反悔」— ROLLBACK 還原所有操作"],tip:"養成習慣：每次 UPDATE/DELETE 前都複製 WHERE 條件先 SELECT 一次。",performanceNote:null,related:["UPDATE","DELETE","Primary_Key"]},{id:"avoid_n_plus_1",name:"避免 N+1 Query 問題",emoji:"🐢",difficulty:"Intermediate",context:"當你在迴圈中執行 SQL 查詢時，效能會呈現指數級下降。",solution:`-- BAD: 在迴圈裡跑 100 次查詢
-- javascript: users.forEach(u => query('SELECT * FROM posts WHERE user_id = ?', u.id))

-- GOOD: 用 IN 一次查完
SELECT * FROM posts WHERE user_id IN (1, 2, 3, ...);`,explanation:["每一次 SQL 查詢都有網路開銷 (Network Latency)。","N+1 代表：1 次查詢找出 N 個人，然後跑 N 次查詢找他們的文章。","盡量用 JOIN 或 WHERE IN 將多次查詢合併為一次。"]},{id:"index_usage",name:"確認索引是否生效",emoji:"🔍",difficulty:"Advanced",context:"明明建了索引，查詢還是很慢？可能是查詢寫法讓索引失效了。",solution:`-- 1. 使用 EXPLAIN ANALYZE 查看執行計畫
EXPLAIN ANALYZE SELECT * FROM users WHERE age = 25;

-- 結果若出現 "Seq Scan" (循序掃描) 代表沒用到索引。
-- 若出現 "Index Scan" 或 "Bitmap Heap Scan" 代表用到索引。`,advancedSolution:`-- 常見索引失效案例：

-- BAD: 在索引欄位上做運算
SELECT * FROM users WHERE YEAR(created_at) = 2023;

-- GOOD: 轉換條件，保持欄位乾淨
SELECT * FROM users WHERE created_at >= '2023-01-01' AND created_at < '2024-01-01';`,explanation:["對欄位使用函數 (e.g., YEAR(), LOWER()) 會導致資料庫無法直接比對索引樹。",'使用 LIKE "%keyword" (前綴模糊) 也會讓 B-Tree 索引失效。',"OR 條件有時也會導致索引失效，可考慮用 UNION 改寫。"]}];function Ue(){const t=document.getElementById("main-content"),a=ie(),e=P.reduce((r,o)=>r+o.skills.length,0),i=Math.round(a/100*e);t.innerHTML=`
    <div class="fade-slide-in">
      <h2 class="page-title">歡迎回來！👋</h2>
      <p class="page-desc">繼續你的 SQL 學習之旅。透過實作「任務管理系統」，從零掌握 SQL 資料庫技能。</p>

      <!-- Stats Row -->
      <div class="grid-3" style="margin-bottom: 28px;">
        <div class="stat-card stagger-item card-clickable" data-nav="syntax">
          <div class="stat-icon card-icon cyan">📖</div>
          <div class="stat-info">
            <div class="stat-value">${$.length}</div>
            <div class="stat-label">語法指令</div>
          </div>
        </div>
        <div class="stat-card stagger-item card-clickable" data-nav="concepts">
          <div class="stat-icon card-icon amber">🧠</div>
          <div class="stat-info">
            <div class="stat-value">${le.length}</div>
            <div class="stat-label">核心觀念</div>
          </div>
        </div>
        <div class="stat-card stagger-item card-clickable" data-nav="cookbook">
          <div class="stat-icon card-icon emerald">🍳</div>
          <div class="stat-info">
            <div class="stat-value">${oe.length}</div>
            <div class="stat-label">實戰食譜</div>
          </div>
        </div>
        <div class="stat-card stagger-item card-clickable" data-nav="tech">
          <div class="stat-icon card-icon cyan">🔧</div>
          <div class="stat-info">
            <div class="stat-value">2</div>
            <div class="stat-label">技術選型</div>
          </div>
        </div>
        <div class="stat-card stagger-item card-clickable" data-nav="guide">
          <div class="stat-icon card-icon amber">📏</div>
          <div class="stat-info">
            <div class="stat-value">3</div>
            <div class="stat-label">開發規範</div>
          </div>
        </div>
        <div class="stat-card stagger-item card-clickable" data-nav="roadmap">
          <div class="stat-icon card-icon" style="background: rgba(139,92,246,0.15)">🎯</div>
          <div class="stat-info">
            <div class="stat-value">${i}/${e}</div>
            <div class="stat-label">技能完成</div>
          </div>
        </div>
      </div>

      <!-- Progress & Phases -->
      <div class="grid-2" style="margin-bottom: 28px;">
        <div class="card stagger-item">
          <div class="card-header">
            <div class="card-icon cyan">📊</div>
            <div>
              <div class="card-title">學習進度</div>
              <div class="card-subtitle">整體完成率</div>
            </div>
          </div>
          <div style="display: flex; justify-content: center; padding: 16px 0;">
            ${De(a,140)}
          </div>
        </div>

        <div class="card stagger-item">
          <div class="card-header">
            <div class="card-icon amber">🗺️</div>
            <div>
              <div class="card-title">三階段進度</div>
              <div class="card-subtitle">Phase 1 → 2 → 3</div>
            </div>
          </div>
          <div class="card-body">
            ${P.map(r=>_e(r)).join("")}
          </div>
        </div>
      </div>

      <!-- Quick Access -->
      <div style="margin-bottom: 12px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: var(--text-primary);">⚡ 快速入口</h3>
      </div>
      <div class="grid-3">
        ${$.slice(0,3).map((r,o)=>`
          <div class="card card-clickable stagger-item" data-nav="syntax" data-detail="${r.id}">
            <div class="card-header">
              <div class="card-icon cyan">${r.emoji}</div>
              <div>
                <div class="card-title">${r.name}</div>
                <span class="tag tag-cyan">${r.category}</span>
              </div>
            </div>
            <div class="card-body">${r.summary}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `,t.querySelectorAll("[data-nav]").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.nav,g=r.dataset.detail;g?S(o,{id:g}):S(o)})})}function _e(t){const a=be(t.id);return`
    <div style="margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <span style="font-size: 14px; font-weight: 500;">${t.emoji} ${t.title}</span>
        <span style="font-size: 12px; color: var(--text-muted);">${a}%</span>
      </div>
      <div class="sidebar-progress-bar">
        <div class="sidebar-progress-fill" style="width: ${a}%"></div>
      </div>
    </div>
  `}var ve=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function He(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var X={exports:{}},he;function je(){return he||(he=1,(function(t){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var e=(function(i){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,g={},u={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function n(s){return s instanceof T?new T(s.type,n(s.content),s.alias):Array.isArray(s)?s.map(n):s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(n){return Object.prototype.toString.call(n).slice(8,-1)},objId:function(n){return n.__id||Object.defineProperty(n,"__id",{value:++o}),n.__id},clone:function n(s,l){l=l||{};var d,c;switch(u.util.type(s)){case"Object":if(c=u.util.objId(s),l[c])return l[c];d={},l[c]=d;for(var E in s)s.hasOwnProperty(E)&&(d[E]=n(s[E],l));return d;case"Array":return c=u.util.objId(s),l[c]?l[c]:(d=[],l[c]=d,s.forEach(function(m,p){d[p]=n(m,l)}),d);default:return s}},getLanguage:function(n){for(;n;){var s=r.exec(n.className);if(s)return s[1].toLowerCase();n=n.parentElement}return"none"},setLanguage:function(n,s){n.className=n.className.replace(RegExp(r,"gi"),""),n.classList.add("language-"+s)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(d){var n=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(d.stack)||[])[1];if(n){var s=document.getElementsByTagName("script");for(var l in s)if(s[l].src==n)return s[l]}return null}},isActive:function(n,s,l){for(var d="no-"+s;n;){var c=n.classList;if(c.contains(s))return!0;if(c.contains(d))return!1;n=n.parentElement}return!!l}},languages:{plain:g,plaintext:g,text:g,txt:g,extend:function(n,s){var l=u.util.clone(u.languages[n]);for(var d in s)l[d]=s[d];return l},insertBefore:function(n,s,l,d){d=d||u.languages;var c=d[n],E={};for(var m in c)if(c.hasOwnProperty(m)){if(m==s)for(var p in l)l.hasOwnProperty(p)&&(E[p]=l[p]);l.hasOwnProperty(m)||(E[m]=c[m])}var h=d[n];return d[n]=E,u.languages.DFS(u.languages,function(b,N){N===h&&b!=n&&(this[b]=E)}),E},DFS:function n(s,l,d,c){c=c||{};var E=u.util.objId;for(var m in s)if(s.hasOwnProperty(m)){l.call(s,m,s[m],d||m);var p=s[m],h=u.util.type(p);h==="Object"&&!c[E(p)]?(c[E(p)]=!0,n(p,l,null,c)):h==="Array"&&!c[E(p)]&&(c[E(p)]=!0,n(p,l,m,c))}}},plugins:{},highlightAll:function(n,s){u.highlightAllUnder(document,n,s)},highlightAllUnder:function(n,s,l){var d={callback:l,container:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};u.hooks.run("before-highlightall",d),d.elements=Array.prototype.slice.apply(d.container.querySelectorAll(d.selector)),u.hooks.run("before-all-elements-highlight",d);for(var c=0,E;E=d.elements[c++];)u.highlightElement(E,s===!0,d.callback)},highlightElement:function(n,s,l){var d=u.util.getLanguage(n),c=u.languages[d];u.util.setLanguage(n,d);var E=n.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&u.util.setLanguage(E,d);var m=n.textContent,p={element:n,language:d,grammar:c,code:m};function h(N){p.highlightedCode=N,u.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,u.hooks.run("after-highlight",p),u.hooks.run("complete",p),l&&l.call(p.element)}if(u.hooks.run("before-sanity-check",p),E=p.element.parentElement,E&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!p.code){u.hooks.run("complete",p),l&&l.call(p.element);return}if(u.hooks.run("before-highlight",p),!p.grammar){h(u.util.encode(p.code));return}if(s&&i.Worker){var b=new Worker(u.filename);b.onmessage=function(N){h(N.data)},b.postMessage(JSON.stringify({language:p.language,code:p.code,immediateClose:!0}))}else h(u.highlight(p.code,p.grammar,p.language))},highlight:function(n,s,l){var d={code:n,grammar:s,language:l};if(u.hooks.run("before-tokenize",d),!d.grammar)throw new Error('The language "'+d.language+'" has no grammar.');return d.tokens=u.tokenize(d.code,d.grammar),u.hooks.run("after-tokenize",d),T.stringify(u.util.encode(d.tokens),d.language)},tokenize:function(n,s){var l=s.rest;if(l){for(var d in l)s[d]=l[d];delete s.rest}var c=new M;return C(c,c.head,n),B(n,c,s,c.head,0),U(c)},hooks:{all:{},add:function(n,s){var l=u.hooks.all;l[n]=l[n]||[],l[n].push(s)},run:function(n,s){var l=u.hooks.all[n];if(!(!l||!l.length))for(var d=0,c;c=l[d++];)c(s)}},Token:T};i.Prism=u;function T(n,s,l,d){this.type=n,this.content=s,this.alias=l,this.length=(d||"").length|0}T.stringify=function n(s,l){if(typeof s=="string")return s;if(Array.isArray(s)){var d="";return s.forEach(function(h){d+=n(h,l)}),d}var c={type:s.type,content:n(s.content,l),tag:"span",classes:["token",s.type],attributes:{},language:l},E=s.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(c.classes,E):c.classes.push(E)),u.hooks.run("wrap",c);var m="";for(var p in c.attributes)m+=" "+p+'="'+(c.attributes[p]||"").replace(/"/g,"&quot;")+'"';return"<"+c.tag+' class="'+c.classes.join(" ")+'"'+m+">"+c.content+"</"+c.tag+">"};function D(n,s,l,d){n.lastIndex=s;var c=n.exec(l);if(c&&d&&c[1]){var E=c[1].length;c.index+=E,c[0]=c[0].slice(E)}return c}function B(n,s,l,d,c,E){for(var m in l)if(!(!l.hasOwnProperty(m)||!l[m])){var p=l[m];p=Array.isArray(p)?p:[p];for(var h=0;h<p.length;++h){if(E&&E.cause==m+","+h)return;var b=p[h],N=b.inside,ce=!!b.lookbehind,ue=!!b.greedy,xe=b.alias;if(ue&&!b.pattern.global){var Le=b.pattern.toString().match(/[imsuy]*$/)[0];b.pattern=RegExp(b.pattern.source,Le+"g")}for(var pe=b.pattern||b,R=d.next,L=c;R!==s.tail&&!(E&&L>=E.reach);L+=R.value.length,R=R.next){var w=R.value;if(s.length>n.length)return;if(!(w instanceof T)){var _=1,A;if(ue){if(A=D(pe,L,n,ce),!A||A.index>=n.length)break;var H=A.index,Ie=A.index+A[0].length,O=L;for(O+=R.value.length;H>=O;)R=R.next,O+=R.value.length;if(O-=R.value.length,L=O,R.value instanceof T)continue;for(var F=R;F!==s.tail&&(O<Ie||typeof F.value=="string");F=F.next)_++,O+=F.value.length;_--,w=n.slice(L,O),A.index-=L}else if(A=D(pe,0,w,ce),!A)continue;var H=A.index,j=A[0],K=w.slice(0,H),Ee=w.slice(H+j.length),z=L+w.length;E&&z>E.reach&&(E.reach=z);var G=R.prev;K&&(G=C(s,G,K),L+=K.length),q(s,G,_);var Ne=new T(m,N?u.tokenize(j,N):j,xe,j);if(R=C(s,G,Ne),Ee&&C(s,R,Ee),_>1){var J={cause:m+","+h,reach:z};B(n,s,l,R.prev,L,J),E&&J.reach>E.reach&&(E.reach=J.reach)}}}}}}function M(){var n={value:null,prev:null,next:null},s={value:null,prev:n,next:null};n.next=s,this.head=n,this.tail=s,this.length=0}function C(n,s,l){var d=s.next,c={value:l,prev:s,next:d};return s.next=c,d.prev=c,n.length++,c}function q(n,s,l){for(var d=s.next,c=0;c<l&&d!==n.tail;c++)d=d.next;s.next=d,d.prev=s,n.length-=c}function U(n){for(var s=[],l=n.head.next;l!==n.tail;)s.push(l.value),l=l.next;return s}if(!i.document)return i.addEventListener&&(u.disableWorkerMessageHandler||i.addEventListener("message",function(n){var s=JSON.parse(n.data),l=s.language,d=s.code,c=s.immediateClose;i.postMessage(u.highlight(d,u.languages[l],l)),c&&i.close()},!1)),u;var y=u.util.currentScript();y&&(u.filename=y.src,y.hasAttribute("data-manual")&&(u.manual=!0));function v(){u.manual||u.highlightAll()}if(!u.manual){var f=document.readyState;f==="loading"||f==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",v):window.requestAnimationFrame?window.requestAnimationFrame(v):window.setTimeout(v,16)}return u})(a);t.exports&&(t.exports=e),typeof ve<"u"&&(ve.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(r,o){var g={};g["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},g.cdata=/^<!\[CDATA\[|\]\]>$/i;var u={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:g}};u["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var T={};T[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:u},e.languages.insertBefore("markup","cdata",T)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(i,r){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:e.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,(function(i){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var o=i.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,(function(){if(typeof e>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading…",r=function(y,v){return"✖ Error "+y+" while fetching file: "+v},o="✖ Error: File does not exist or is empty",g={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},u="data-src-status",T="loading",D="loaded",B="failed",M="pre[data-src]:not(["+u+'="'+D+'"]):not(['+u+'="'+T+'"])';function C(y,v,f){var n=new XMLHttpRequest;n.open("GET",y,!0),n.onreadystatechange=function(){n.readyState==4&&(n.status<400&&n.responseText?v(n.responseText):n.status>=400?f(r(n.status,n.statusText)):f(o))},n.send(null)}function q(y){var v=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(v){var f=Number(v[1]),n=v[2],s=v[3];return n?s?[f,Number(s)]:[f,void 0]:[f,f]}}e.hooks.add("before-highlightall",function(y){y.selector+=", "+M}),e.hooks.add("before-sanity-check",function(y){var v=y.element;if(v.matches(M)){y.code="",v.setAttribute(u,T);var f=v.appendChild(document.createElement("CODE"));f.textContent=i;var n=v.getAttribute("data-src"),s=y.language;if(s==="none"){var l=(/\.(\w+)$/.exec(n)||[,"none"])[1];s=g[l]||l}e.util.setLanguage(f,s),e.util.setLanguage(v,s);var d=e.plugins.autoloader;d&&d.loadLanguages(s),C(n,function(c){v.setAttribute(u,D);var E=q(v.getAttribute("data-range"));if(E){var m=c.split(/\r\n?|\n/g),p=E[0],h=E[1]==null?m.length:E[1];p<0&&(p+=m.length),p=Math.max(0,Math.min(p-1,m.length)),h<0&&(h+=m.length),h=Math.max(0,Math.min(h,m.length)),c=m.slice(p,h).join(`
`),v.hasAttribute("data-start")||v.setAttribute("data-start",String(p+1))}f.textContent=c,e.highlightElement(f)},function(c){v.setAttribute(u,B),f.textContent=c})}}),e.plugins.fileHighlight={highlight:function(v){for(var f=(v||document).querySelectorAll(M),n=0,s;s=f[n++];)e.highlightElement(s)}};var U=!1;e.fileHighlight=function(){U||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),U=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(X)),X.exports}var Ge=je();const Z=He(Ge);Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};function I(t,a="sql"){const e=Z.highlight(t.trim(),Z.languages[a]||Z.languages.sql,a),i="cb-"+Math.random().toString(36).slice(2,9);return`
    <div class="code-block">
      <div class="code-block-header">
        <span class="code-block-lang">${a}</span>
        <button class="code-block-copy" data-copy-id="${i}" onclick="window.__copyCode('${i}')">
          <span class="icon-wrapper"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg></span>
          <span class="text-wrapper">複製</span>
        </button>
      </div>
      <div class="code-content-wrapper">
        <pre id="${i}" class="line-numbers"><code class="language-${a}">${e}</code></pre>
      </div>
    </div>
  `}window.__copyCode=function(t){const a=document.getElementById(t);if(!a)return;const e=a.textContent,i='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',r='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';navigator.clipboard.writeText(e).then(()=>{const o=document.querySelector(`[data-copy-id="${t}"]`);o&&(o.classList.add("copied"),o.querySelector(".icon-wrapper").innerHTML=r,o.querySelector(".text-wrapper").textContent="已複製",setTimeout(()=>{o.classList.remove("copied"),o.querySelector(".icon-wrapper").innerHTML=i,o.querySelector(".text-wrapper").textContent="複製"},2e3))})};function Se(t,a,e=!1){const i="expand-"+Math.random().toString(36).substr(2,9);return`
    <div class="expandable-section ${e?"open":""}" id="${i}">
      <button class="expand-btn" data-toggle-section="${i}" aria-expanded="${e}">
        <span class="expand-icon">▶</span>
        <span class="expand-title">${t}</span>
        <span class="expand-hint">點擊展開進階內容</span>
      </button>
      <div class="expand-content">
        ${a}
      </div>
    </div>
  `}let x="";function te(t={}){const a=document.getElementById("main-content");if(t.q&&(x=t.q),t.id){We(t.id);return}const e=x?$.filter(r=>r.name.toLowerCase().includes(x.toLowerCase())||r.summary.includes(x)||r.category.toLowerCase().includes(x.toLowerCase())):$;a.innerHTML=`
    <div class="fade-slide-in">
      <h2 class="page-title">📖 語法字典</h2>
      <p class="page-desc">當你忘記指令怎麼寫時，來這裡快速查閱。點擊卡片查看完整語法說明。</p>

      <div class="filter-bar">
        <input class="filter-input" type="text" placeholder="搜尋指令名稱..." id="syntax-search" value="${x}" />
        <button class="filter-tag ${x?"":"active"}" data-filter="">全部</button>
        <button class="filter-tag ${x==="DDL"?"active":""}" data-filter="DDL">DDL</button>
        <button class="filter-tag ${x==="DML"?"active":""}" data-filter="DML">DML</button>
      </div>

      <div class="grid-3">
        ${e.map((r,o)=>`
          <div class="card card-clickable stagger-item" data-id="${r.id}">
            <div class="card-header">
              <div class="card-icon cyan">${r.emoji}</div>
              <div>
                <div class="card-title">${r.name}</div>
                <div style="display: flex; gap: 6px; margin-top: 4px;">
                  <span class="tag tag-cyan">${r.category}</span>
                  <span class="tag tag-emerald">Phase ${r.phase}</span>
                </div>
              </div>
            </div>
            <div class="card-body">${r.summary}</div>
            ${r.warning?`<div class="callout warning" style="margin-top: 12px; font-size: 13px;">${r.warning}</div>`:""}
          </div>
        `).join("")}
      </div>

      ${e.length===0?'<div class="empty-state"><div class="empty-state-emoji">🔍</div><div class="empty-state-text">找不到符合條件的語法</div></div>':""}
    </div>
  `,a.querySelectorAll(".card-clickable[data-id]").forEach(r=>{r.addEventListener("click",()=>S("syntax",{id:r.dataset.id}))});const i=document.getElementById("syntax-search");i&&i.addEventListener("input",r=>{x=r.target.value,te(t),setTimeout(()=>{const o=document.getElementById("syntax-search");if(o){const g=o.value.length;o.focus(),o.setSelectionRange(g,g)}},0)}),a.querySelectorAll(".filter-tag[data-filter]").forEach(r=>{r.addEventListener("click",()=>{x=r.dataset.filter,te(t)})})}function We(t){const a=document.getElementById("main-content"),e=$.find(i=>i.id===t);if(!e){a.innerHTML='<div class="empty-state"><div class="empty-state-emoji">❓</div><div class="empty-state-text">找不到此語法</div></div>';return}a.innerHTML=`
    <div class="detail-view">
      <div class="detail-header">
        <button class="detail-back" id="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          返回列表
        </button>
        <span style="font-size: 28px;">${e.emoji}</span>
        <h2 class="detail-title">${e.name}</h2>
        <span class="tag tag-cyan">${e.category}</span>
        <span class="tag tag-emerald">Phase ${e.phase}</span>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <div class="card-body">${e.summary}</div>
      </div>

      ${e.warning?`<div class="callout warning" style="margin-bottom: 24px;"><strong>⚠️ 重要提醒：</strong> ${e.warning}</div>`:""}

      <div class="detail-section">
        <h3 class="detail-section-title">📐 語法結構</h3>
        ${I(e.syntax)}
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">📋 參數說明</h3>
        <table class="data-table">
          <thead><tr><th>參數</th><th>說明</th></tr></thead>
          <tbody>
            ${e.params.map(i=>`<tr><td><code>${i.name}</code></td><td>${i.desc}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">🚀 範例程式碼</h3>
        ${I(e.example)}
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">📤 回傳結果</h3>
        <div class="callout">${e.result}</div>
      </div>

      ${e.advanced?Se(`🚀 進階：${e.advanced.title}`,e.advanced.content):""}

      ${e.related.length>0?`
        <div class="detail-section">
          <h3 class="detail-section-title">🔗 相關連結</h3>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${e.related.map(i=>`<span class="tag tag-cyan" style="cursor: pointer;" data-related="${i}">${i}</span>`).join("")}
          </div>
        </div>
      `:""}
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>S("syntax")),a.querySelectorAll("[data-related]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.related.toLowerCase().replace(/_/g,"-"),o=$.find(g=>g.id===r);o?S("syntax",{id:o.id}):S("concepts")})})}function Ye(t={}){const a=document.getElementById("main-content");if(t.id){qe(t.id);return}a.innerHTML=`
    <div class="fade-slide-in">
      <h2 class="page-title">🧠 核心觀念</h2>
      <p class="page-desc">理解「為什麼」要這樣做，面試與設計資料庫時使用。</p>

      <div class="grid-3">
        ${le.map((e,i)=>`
          <div class="card card-clickable stagger-item" data-id="${e.id}">
            <div class="card-header">
              <div class="card-icon amber">${e.emoji}</div>
              <div>
                <div class="card-title">${e.name}</div>
                <span class="tag tag-emerald">Phase ${e.phase}</span>
              </div>
            </div>
            <div class="callout" style="margin-bottom: 0;">
              ${e.eli5}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,a.querySelectorAll(".card-clickable[data-id]").forEach(e=>{e.addEventListener("click",()=>S("concepts",{id:e.dataset.id}))})}function qe(t){const a=document.getElementById("main-content"),e=le.find(i=>i.id===t);if(!e){a.innerHTML='<div class="empty-state"><div class="empty-state-emoji">❓</div><div class="empty-state-text">找不到此觀念</div></div>';return}a.innerHTML=`
    <div class="detail-view">
      <div class="detail-header">
        <button class="detail-back" id="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          返回列表
        </button>
        <span style="font-size: 28px;">${e.emoji}</span>
        <h2 class="detail-title">${e.name}</h2>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">💡 一句話解釋 (ELI5)</h3>
        <div class="callout">${e.eli5}</div>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">🎯 生活化比喻</h3>
        <div class="detail-section-content">
          <p>${e.analogy}</p>
        </div>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">⚠️ 為什麼重要？</h3>
        <div class="detail-section-content">
          <ul>
            ${e.whyMatters.map(i=>`<li>${i}</li>`).join("")}
          </ul>
        </div>
      </div>

      ${e.visual?`
        <div class="detail-section">
          <h3 class="detail-section-title">📊 視覺化</h3>
          ${I(e.visual,"text")}
        </div>
      `:""}

      ${e.typeTable?`
        <div class="detail-section">
          <h3 class="detail-section-title">📦 型別總覽</h3>
          <table class="data-table">
            <thead><tr><th>型別</th><th>說明</th><th>用途範例</th></tr></thead>
            <tbody>
              ${e.typeTable.map(i=>`<tr><td><code>${i.type}</code></td><td>${i.desc}</td><td>${i.example}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      `:""}

      <div class="detail-section">
        <h3 class="detail-section-title">💻 程式碼範例</h3>
        ${I(e.codeExample)}
      </div>

       ${e.advanced?Se(`⚡ 進階：${e.advanced.title}`,e.advanced.content):""}

      ${e.related.length>0?`
        <div class="detail-section">
          <h3 class="detail-section-title">🔗 相關連結</h3>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${e.related.map(i=>`<span class="tag tag-amber" style="cursor: pointer;" data-related="${i}">${i}</span>`).join("")}
          </div>
        </div>
      `:""}
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>S("concepts"))}function Ke(t={}){const a=document.getElementById("main-content");if(t.id){ze(t.id);return}a.innerHTML=`
    <div class="fade-slide-in">
      <h2 class="page-title">🍳 實戰食譜</h2>
      <p class="page-desc">遇到具體需求時，直接複製修改的程式碼片段。</p>

      <div class="grid-3">
        ${oe.map((e,i)=>`
          <div class="card card-clickable stagger-item" data-id="${e.id}">
            <div class="card-header">
              <div class="card-icon emerald">${e.emoji}</div>
              <div>
                <div class="card-title">${e.name}</div>
                <span class="tag tag-emerald">${e.difficulty}</span>
              </div>
            </div>
            <div class="card-body">${e.context}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `,a.querySelectorAll(".card-clickable[data-id]").forEach(e=>{e.addEventListener("click",()=>S("cookbook",{id:e.dataset.id}))})}function ze(t){const a=document.getElementById("main-content"),e=oe.find(i=>i.id===t);if(!e){a.innerHTML='<div class="empty-state"><div class="empty-state-emoji">❓</div><div class="empty-state-text">找不到此食譜</div></div>';return}a.innerHTML=`
    <div class="detail-view">
      <div class="detail-header">
        <button class="detail-back" id="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          返回列表
        </button>
        <span style="font-size: 28px;">${e.emoji}</span>
        <h2 class="detail-title">${e.name}</h2>
        <span class="tag tag-emerald">${e.difficulty}</span>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">📌 使用情境</h3>
        <div class="callout">${e.context}</div>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">✅ 解決方案</h3>
        ${I(e.solution)}
      </div>

      ${e.advancedSolution?`
        <div class="detail-section">
          <h3 class="detail-section-title">🚀 進階版本</h3>
          ${I(e.advancedSolution)}
        </div>
      `:""}

      <div class="detail-section">
        <h3 class="detail-section-title">🔍 原理解析</h3>
        <div class="detail-section-content">
          <ul>
            ${e.explanation.map(i=>`<li>${i}</li>`).join("")}
          </ul>
        </div>
      </div>

      ${e.tip?`
        <div class="callout" style="margin-bottom: 24px;">
          <strong>💡 小提示：</strong> ${e.tip}
        </div>
      `:""}

      ${e.performanceNote?`
        <div class="callout warning" style="margin-bottom: 24px;">
          <strong>⚠️ 效能注意：</strong> ${e.performanceNote}
        </div>
      `:""}
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>S("cookbook"))}function Ae(){const t=document.getElementById("main-content");ie(),t.innerHTML=`
    <div class="fade-slide-in">
      <h2 class="page-title">🗺️ 學習路徑</h2>
      <p class="page-desc">透過三個階段完成 Task Tracker 任務管理系統。勾選已掌握的技能，追蹤你的學習進度。</p>

      <div class="callout" style="margin-bottom: 28px;">
        <strong>🎯 目標：</strong> 建立 tasks 表格 → 新增資料 → 查詢篩選 → 更新刪除 → 多表關聯 → 統計報表
      </div>

      ${P.map(a=>Je(a)).join("")}
    </div>
  `,t.querySelectorAll(".skill-item").forEach(a=>{a.addEventListener("click",()=>{const e=a.dataset.skillId,i=Te(e);$e(e,!i),Ae(),Re()})}),t.querySelectorAll("[data-link]").forEach(a=>{a.addEventListener("click",e=>{e.stopPropagation(),S("syntax",{id:a.dataset.link})})})}function Je(t){const a=be(t.id);return`
    <div class="roadmap-phase">
      <div class="phase-header">
        <span class="phase-badge ${`phase-${t.phase}`}">${t.emoji} Phase ${t.phase}</span>
        <div style="flex: 1;">
          <div class="phase-title">${t.title}</div>
          <div class="phase-desc">${t.desc}</div>
        </div>
        <span style="font-size: 14px; font-weight: 600; color: var(--text-muted);">${a}%</span>
      </div>

      ${t.skills.map(i=>Ve(i)).join("")}
    </div>
  `}function Ve(t){const a=Te(t.id),e=a?"completed":"",i=a?"checked":"";return`
    <div class="skill-item ${e}" data-skill-id="${t.id}">
      <div class="skill-checkbox ${i}"></div>
      <div style="flex: 1;">
        <div class="skill-name">${t.name}</div>
        <div class="skill-hint">
          <span class="tag tag-cyan" style="margin-right: 6px;">${t.category}</span>
          ${t.hint}
        </div>
      </div>
      ${t.link?`<span class="tag tag-amber" data-link="${t.link}" style="cursor: pointer; align-self: center;">查看語法 →</span>`:""}
    </div>
  `}function ae(){const t=document.getElementById("main-content"),a=ne();t.innerHTML=`
    <div class="fade-slide-in">
      <h2 class="page-title">📅 學習日誌</h2>
      <p class="page-desc">記錄每日的學習過程、踩過的坑、與解決方案。嚴格遵守「遇到 → 查詢 → 記錄 → 實作」循環。</p>

      <!-- New Entry Form -->
      <div class="card" style="margin-bottom: 28px;">
        <div class="card-header">
          <div class="card-icon cyan">✏️</div>
          <div>
            <div class="card-title">新增日誌</div>
            <div class="card-subtitle">記錄今天學到的東西</div>
          </div>
        </div>
        <div class="card-body">
          <div style="margin-bottom: 14px;">
            <label style="font-size: 13px; color: var(--text-muted); display: block; margin-bottom: 6px;">📌 主題摘要</label>
            <input class="filter-input" type="text" id="journal-title" placeholder="例如：學會使用 CREATE TABLE" style="width: 100%;" />
          </div>
          <div style="margin-bottom: 14px;">
            <label style="font-size: 13px; color: var(--text-muted); display: block; margin-bottom: 6px;">📝 今日心得</label>
            <textarea class="filter-input" id="journal-content" rows="4" placeholder="今天學到了什麼？遇到什麼問題？怎麼解決的？" style="width: 100%; resize: vertical; font-family: var(--font-sans);"></textarea>
          </div>
          <div style="margin-bottom: 14px;">
            <label style="font-size: 13px; color: var(--text-muted); display: block; margin-bottom: 6px;">🏷️ 階段</label>
            <select class="filter-input" id="journal-phase" style="width: 200px;">
              <option value="Phase 1">🌱 Phase 1 — 基礎生存</option>
              <option value="Phase 2">🌿 Phase 2 — 結構與關聯</option>
              <option value="Phase 3">🌳 Phase 3 — 數據洞察</option>
            </select>
          </div>
          <button class="btn btn-primary" id="journal-submit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
            新增記錄
          </button>
        </div>
      </div>

      <!-- Timeline -->
      <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: var(--text-primary);">📚 歷史記錄</h3>

      ${a.length===0?`
        <div class="empty-state">
          <div class="empty-state-emoji">📝</div>
          <div class="empty-state-text">還沒有日誌記錄，開始你的第一篇吧！</div>
        </div>
      `:`
        <div class="journal-timeline">
          ${a.map(e=>Qe(e)).join("")}
        </div>
      `}
    </div>
  `,document.getElementById("journal-submit").addEventListener("click",()=>{const e=document.getElementById("journal-title").value.trim(),i=document.getElementById("journal-content").value.trim(),r=document.getElementById("journal-phase").value;if(!e||!i){alert("請填寫主題摘要和今日心得！");return}Me({title:e,content:i,phase:r}),ae()}),t.querySelectorAll("[data-delete-id]").forEach(e=>{e.addEventListener("click",()=>{confirm("確定要刪除這篇日誌嗎？")&&(Fe(parseInt(e.dataset.deleteId)),ae())})})}function Qe(t){const a=new Date(t.date),e=a.toLocaleDateString("zh-TW",{year:"numeric",month:"long",day:"numeric",weekday:"short"}),i=a.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit"});return`
    <div class="journal-entry">
      <div class="journal-date">${e} ${i}</div>
      <div class="journal-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
          <div>
            <div style="font-size: 16px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">${t.title}</div>
            <span class="tag tag-cyan">${t.phase}</span>
          </div>
          <button class="btn-secondary btn" style="padding: 4px 10px; font-size: 12px;" data-delete-id="${t.id}">
            🗑️ 刪除
          </button>
        </div>
        <div style="color: var(--text-secondary); font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${t.content}</div>
      </div>
    </div>
  `}const de=[{id:"database",name:"資料庫 (Database)",emoji:"🗄️",description:"核心儲存引擎，選擇正確的資料庫決定了系統的擴展性與功能邊界。",items:[{name:"PostgreSQL",type:"RDBMS",intro:"最強大的開源關聯式資料庫。支援複雜查詢、JSON 儲存與地理資訊 (GIS)，以 ACID 嚴謹性與強大擴展力著稱，是現代 Web 應用與企業系統的首選。",verdict:"🏆 首選推薦",pros:["功能最強大 (JSON, GIS)","業界標準，開源免費","嚴謹的 ACID 事務"],cons:["配置稍複雜","資源佔用較高"],recommendation:"學習 SQL 的最佳起點，幾乎所有現代 Web 應用都支援。",id:"postgresql",quickStart:`# Install via Docker
docker run --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres

# Or MacOS (Homebrew)
brew install postgresql
brew services start postgresql`,guide:["⚠️ 權限地雷：安裝後預設只有 postgres 用戶能登入，建議立刻建立專屬 User。","⚡ 效能優化：關聯表 (Foreign Key) 記得建 Index，否則 Join 查詢會慢到懷疑人生。","🔧 JSONB 陷阱：雖然好用，但若高頻更新該欄位，會導致 Table Bloat (膨脹)，請謹慎使用。","🐳 Docker 推薦：Windows 本機安裝常有權限問題，用 Docker 跑 DB 是最乾淨的解法。"],links:[{label:"Official Site",url:"https://www.postgresql.org/"},{label:"Postgres Guide",url:"https://www.postgresqltutorial.com/"}]},{name:"MySQL / MariaDB",type:"RDBMS",intro:"最普及的開源資料庫，以速度與穩定性著稱。適合網路應用、CMS 系統與中小型專案，擁有龐大的社群支援與豐富的外掛生態。",verdict:"老牌穩定",pros:["市佔率極高","安裝簡單","社群資源豐富"],cons:["進階功能較少 (Window Fn)","預設設定有時太寬鬆"],recommendation:"許多 legacy 專案在使用，適合第二個學習。",id:"mysql",links:[{label:"Official Site",url:"https://www.mysql.com/"}]},{name:"SQLite",type:"Embedded",intro:"輕量級、免安裝的嵌入式資料庫。所有資料存在單一檔案中，無需伺服器進程，極其適合手機 App、測試環境或單機工具軟體。",verdict:"輕量級",pros:["單一檔案，免安裝","適合測試與小型 App","零配置"],cons:["不支援多人併發","型別檢查較弱"],recommendation:"手機 App 或僅需單機儲存時使用。",id:"sqlite",links:[{label:"Official Site",url:"https://www.sqlite.org/"}]}]},{id:"gui",name:"管理工具 (GUI Client)",emoji:"🖥️",description:"不用記所有指令，視覺化工具能大幅提升開發效率。",items:[{name:"DBeaver",type:"Desktop App",intro:"功能最完整的免費資料庫管理工具。支援 JDBC 驅動連線幾乎所有資料庫類型，提供視覺化 ER 圖生成、資料匯入匯出與 SQL 編輯功能。",verdict:"🏆 功能最全",pros:["支援所有資料庫","強大的 ER 圖生成","免費開源 (Community 版)"],cons:["介面較複雜 (Eclipse 風格)","啟動稍慢"],recommendation:"專業後端開發者的標準配備。",id:"dbeaver",guide:["⚠️ 驅動程式：第一次連線時會自動下載 Driver，請保持網路暢通。","📂 腳本管理：建議將常用 SQL 存成 Script 檔案管理，不要只依賴 History。","⚡ 記憶體：Java 寫的比較吃記憶體，若電腦慢可改用輕量的 Adminer 或 SQLTools。"],links:[{label:"Download",url:"https://dbeaver.io/"}]},{name:"VSCode SQLTools",type:"VSCode Extension",intro:"專為 VSCode 使用者設計的資料庫連結外掛。讓你不需要切換視窗，就能直接在編輯器內執行查詢、檢視資料表結構，輕量且方便。",verdict:"輕便整合",pros:["不用切換視窗","直接在編輯器執行 SQL","輕量快速"],cons:["功能較陽春","視覺化圖表較弱"],recommendation:"簡單查詢或不想開大軟體時使用。",id:"sqltools",links:[{label:"Marketplace",url:"https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools"}]},{name:"TablePlus",type:"Desktop App",intro:"目前市面上顏值最高、速度最快的原生資料庫管理軟體。介面現代化，操作流暢，但免費版有同時開啟視窗數量的限制。",verdict:"顏值最高",pros:["原生應用 (Native)，速度極快","介面精美現代","體驗極佳"],cons:["免費版有分頁限制","進階功能需付費"],recommendation:"追求極致體驗且願意付費的開發者。",id:"tableplus",links:[{label:"Official Site",url:"https://tableplus.com/"}]}]},{id:"orm",name:"ORM (Object-Relational Mapping)",emoji:"🔄",description:"不用手寫 SQL 也能操作資料庫？連接程式碼物件與資料表的翻譯機。",items:[{name:"Prisma / TypeORM",type:"Node.js / TypeScript",intro:"現代化的 Node.js/TypeScript ORM。透過定義 Schema 自動生成型別安全的客戶端 API，讓操作資料庫像在寫原生程式碼一樣直覺，大幅減少 SQL 拼寫錯誤。",verdict:"🏆 現代開發首選",pros:["型別安全 (Type-safe)","自動生成 Client","遷移 (Migration) 工具好用"],cons:["對複雜 SQL 支援度有限","效能有時不如 Raw SQL"],recommendation:"寫 TypeScript 後端時，Prisma 是目前最強大的選擇。",id:"prisma",quickStart:`npm install prisma --save-dev
npx prisma init`,guide:["⚠️ 熱更新陷阱：在 Next/Nuxt 開發模式下，務必使用 Singleton 模式宣告 Prisma Client，否則連線數會爆炸。","🔧 Generate：每次修改 `schema.prisma` 後，一定要執行 `npx prisma generate` 更新型別。","⚡ N+1 問題：雖然關聯查詢方便，但迴圈內查詢是大忌，善用 `include` 一次抓取。"],links:[{label:"Prisma Docs",url:"https://www.prisma.io/docs"},{label:"Prisma Examples",url:"https://github.com/prisma/prisma-examples"}]},{name:"Django ORM / Eloquent",type:"Python / PHP",intro:"框架內建的強大 ORM，採用 Active Record 模式。雖然在極端效能調校上不如 Data Mapper 靈活，但對於快速開發與直覺操作有著巨大的優勢。",verdict:"快速開發神器",pros:["Active Record 模式 (直覺)","與框架高度整合","電池附帶 (Batteries-included)"],cons:["容易產生 N+1 問題","複雜查詢難以維護"],recommendation:"使用 Django (Python) 或 Laravel (PHP) 建構全端網站時首選。",id:"django-orm",links:[{label:"Django Docs",url:"https://docs.djangoproject.com/en/stable/topics/db/"}]},{name:"Hibernate / Entity Framework",type:"Java / C# (.NET)",intro:"企業級應用的標準 ORM 解決方案。功能極其強大，支援複雜的物件關聯映射與快取機制，是傳統大型系統的基石。",verdict:"企業級標準",pros:["Data Mapper 模式 (解耦)","支援複雜關聯映射","成熟穩定"],cons:["學習曲線陡峭","設定繁瑣","啟動較慢"],recommendation:"大型企業系統、複雜邏輯後端的標準配備。",id:"hibernate",links:[{label:"Hibernate ORM",url:"https://hibernate.org/orm/"}]}]},{id:"stack",name:"全端開發組合 (Full Stack Combo)",emoji:"⚡",description:"單打獨鬥最強組合：前端、後端、資料庫一次搞定。",items:[{id:"nuxt-prisma-tail",name:"Nuxt 3 + Prisma + PostgreSQL + Tailwind",type:"The Golden Stack (黃金標準)",intro:"集大成的全端開發框架。整合了 Vue 3 的反應式前端、Nitro 的高效後端、Prisma 的型別安全與 Tailwind 的原子化樣式，是單人極速開發 SaaS 的神器。",verdict:"🏆 現代全端首選",pros:["極佳開發體驗 (DX): 自動引入、熱更新","完全型別安全 (Type Safety): 從 DB 到前端","Server 內建 (Nitro): 不需額外架設 API Server","Tailwind: 快速刻版，與 Component 完美結合"],cons:["學習曲線較高 (需熟 Vue 3 + TS)","對純靜態站稍嫌厚重"],recommendation:"想一個人快速做出 SaaS 產品、公司內部系統或複雜應用的最佳選擇。",quickStart:`# Initialize Nuxt project
npx nuxi@latest init my-app
cd my-app

# Install dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Install Prisma
npm install prisma --save-dev
npx prisma init`,guide:["⚠️ 伺服器除錯：`console.log` 在 Server 端這裡會印在終端機，而不是瀏覽器控制台。","🔧 自動引入：Nuxt 自動引入 Component 很方便，但若遇到同名衝突，需手動 import 解決。","⚡ Tailwind：建議安裝 VSCode 套件 (Tailwind CSS IntelliSense) 輔助，避免寫出錯誤 class。"],links:[{label:"Nuxt 3 Docs",url:"https://nuxt.com/docs"},{label:"Prisma Quickstart",url:"https://www.prisma.io/docs/getting-started"},{label:"Tailwind Guides",url:"https://tailwindcss.com/docs/guides/nuxtjs"}]},{id:"next-t3",name:"Next.js + tRPC + Prisma (T3 Stack)",type:"React Ecosystem (React 生態)",intro:"React 生態系中最受推崇的全端組合。透過 tRPC 實現前後端型別 100% 同步，修改後端 API 定義，前端錯誤會立即顯示，開發體驗極致流暢。",verdict:"⚛️ React 界的標準",pros:["tRPC: 前後端型別 100% 同步，改後端前端自動報錯","與 Nuxt 3 相似但生態系更龐大 (套件更多)","Vercel 部署體驗極佳"],cons:["設定繁瑣 (Boilerplate)","React Server Components 學習曲線陡峭"],recommendation:"如果你是 React 愛好者，這就是你的「黃金組合」。",quickStart:"npm create t3-app@latest",links:[{label:"Create T3 App",url:"https://create.t3.gg/"},{label:"Next.js Docs",url:"https://nextjs.org/docs"}]},{id:"django-htmx",name:"Django + PostgreSQL + HTMX",type:'The "Boring" Stack (穩健組合)',intro:"返璞歸真的高效開發組合。利用 Django 強大的後台與 ORM，搭配 HTMX 在不寫複雜 JavaScript 的情況下實現局部更新，是單人全端與內部工具開發的隱藏強者。",verdict:"🛡️ 企業級/快速開發",pros:["Batteries-included: 內建後台、權限、ORM，什麼都有","Python 生態: 方便整合 AI/ML 功能","HTMX: 不寫複雜 JS 也能有 SPA 體驗"],cons:["效能略低於 Node.js","對即時互動 (WebSocket) 支援較弱"],recommendation:"適合需要高度客製化後台、強調資料安全性或 AI 整合的專案。",quickStart:`# Install Django
pip install django
django-admin startproject myproject

# Install HTMX via CDN in template (simplest way)
<script src="https://unpkg.com/htmx.org@1.9.10"><\/script>`,links:[{label:"Django Intro",url:"https://www.djangoproject.com/start/"},{label:"HTMX Docs",url:"https://htmx.org/docs/"}]}]}];function Xe(t={}){const a=document.getElementById("main-content");if(t.id){at(t.id);return}a.innerHTML=`
    <div class="fade-slide-in">
      <h2 class="page-title">🔧 技術選型</h2>
      <p class="page-desc">工欲善其事，必先利其器。這裡記錄了工具選擇的理由與比較。</p>

      ${de.map(e=>Ze(e)).join("")}

      <!-- Tech Index Section -->
      <div class="card" style="margin-top: 48px; border-color: var(--color-primary); background: rgba(99, 102, 241, 0.03);">
        <div class="card-header">
           <div class="card-title">📚 技術總覽 (Total Index)</div>
        </div>
        <div class="card-body" style="margin-bottom:16px;">
            點擊以下標籤，查看該技術的<strong>快速上手指令</strong>與<strong>學習資源</strong>。
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${tt()}
        </div>
      </div>
    </div>
  `,a.querySelectorAll(".tech-index-tag").forEach(e=>{e.addEventListener("click",()=>{S("tech",{id:e.dataset.id})})}),a.querySelectorAll(".tech-detail-link").forEach(e=>{e.addEventListener("click",i=>{i.stopPropagation(),S("tech",{id:e.dataset.id})})})}function Ze(t){return`
    <div class="card stagger-item" style="margin-bottom: 32px;">
      <div class="card-header">
        <div class="card-icon cyan">${t.emoji}</div>
        <div>
          <div class="card-title">${t.name}</div>
          <div class="card-subtitle">${t.description}</div>
        </div>
      </div>

      <div class="grid-3">
        ${t.items.map(a=>et(a)).join("")}
      </div>
    </div>
  `}function et(t){const a=t.verdict.includes("首選")||t.verdict.includes("最全")||t.verdict.includes("標準"),e=t.id?`<span class="tech-detail-link" data-id="${t.id}" style="cursor:pointer; text-decoration:underline; text-decoration-color:rgba(129,140,248,0.5); text-underline-offset:4px;">${t.name}</span>`:t.name,i=t.id?`<div style="margin-top:16px; text-align:right;">
             <button class="btn-secondary tech-detail-link" data-id="${t.id}" style="font-size:12px; padding:6px 12px;">
               查看詳情 &rarr;
             </button>
           </div>`:"";return`
    <div class="tech-item" style="
      background: rgba(0,0,0,0.02); 
      border-radius: var(--radius-md); 
      padding: 16px; 
      border: 1px solid ${a?"var(--color-primary)":"var(--border-color)"};
      position: relative;
      display: flex;
      flex-direction: column;
    ">
      ${a?'<div style="position: absolute; top: -10px; right: 10px; background: var(--color-primary); color: #ffe359; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 10px;">RECOMMENDED</div>':""}
      
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span style="font-weight: 700; font-size: 16px; color: var(--text-primary);">${e}</span>
        <span class="tag tag-cyan">${t.type}</span>
      </div>
      
      <div style="font-size: 13px; color: var(--color-accent); font-weight: 600; margin-bottom: 12px;">${t.verdict}</div>
      
      <div style="margin-bottom: 12px; flex: 1;">
        <div style="font-size: 12px; color: var(--color-success); margin-bottom: 4px;">✅ 優點</div>
        <ul style="padding-left: 16px; font-size: 13px; color: var(--text-secondary);">
          ${t.pros?t.pros.map(r=>`<li>${r}</li>`).join(""):""}
        </ul>
      </div>

      <div style="margin-bottom: 12px;">
         <div style="font-size: 12px; color: var(--color-danger); margin-bottom: 4px;">❌ 缺點</div>
         <ul style="padding-left: 16px; font-size: 13px; color: var(--text-secondary);">
          ${t.cons?t.cons.map(r=>`<li>${r}</li>`).join(""):""}
        </ul>
      </div>

      <div style="font-size: 13px; color: var(--text-muted); padding-top: 12px; border-top: 1px solid var(--border-color); line-height: 1.5;">
        💡 ${t.recommendation}
        ${i}
      </div>
    </div>
  `}function tt(){return de.flatMap(a=>a.items).filter(a=>a.id).map(a=>`
        <span class="tag tech-index-tag" data-id="${a.id}" style="cursor:pointer; padding: 6px 12px; font-size:13px; background:var(--bg-card); border:1px solid var(--border-color); transition:all 0.2s;">
            ${a.name} 
        </span>
    `).join("")}function at(t){const a=document.getElementById("main-content"),i=de.flatMap(g=>g.items).find(g=>g.id===t);if(!i){a.innerHTML='<div class="empty-state">❌ 找不到該技術資料</div>';return}const r=i.links&&i.links.length>0?i.links.map(g=>`
            <a href="${g.url}" target="_blank" class="btn btn-secondary" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
               ${g.label}
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          `).join(""):'<div style="color:var(--text-muted);">暫無連結</div>',o=i.quickStart?`<div class="detail-section">
             <h3 class="detail-section-title">🚀 快速上手 (Quick Start)</h3>
             ${I(i.quickStart,"bash")}
           </div>`:"";a.innerHTML=`
    <div class="detail-view fade-slide-in">
      <div class="detail-header">
        <button class="detail-back" id="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          返回列表
        </button>
        <div style="font-size: 48px; margin-bottom:16px;">${i.name.includes("Nuxt")?"⚡":"🛠️"}</div>
        <h2 class="detail-title">${i.name}</h2>
        <span class="tag tag-cyan">${i.type}</span>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <div class="card-body">
            ${i.intro?`<div style="font-size:16px; line-height:1.8; margin-bottom:20px; color:var(--text-primary);">${i.intro}</div>`:""}
            
            <div style="font-size:14px; color:var(--text-secondary); padding:16px; background:rgba(0,0,0,0.02); border-radius:8px; display:flex; gap:8px;">
                <span style="font-size:16px;">💡</span>
                <span style="line-height:1.6;">${i.recommendation}</span>
            </div>
        </div>
         <div style="margin-top:16px; padding-top:16px; border-top:1px solid var(--border-color); font-weight:600; color:var(--color-accent); padding-left:24px; padding-right:24px; padding-bottom:24px;">
           ${i.verdict}
         </div>
      </div>

      ${o}

      ${i.guide&&i.guide.length>0?`
      <div class="detail-section">
        <h3 class="detail-section-title">🛑 經驗指南 (Pitfalls & Tips)</h3>
        <ul style="list-style: none; padding: 0;">
          ${i.guide.map(g=>`
            <li style="margin-bottom: 12px; padding: 12px; background: rgba(0,0,0,0.02); border-left: 3px solid var(--color-accent); border-radius: 0 4px 4px 0; font-size: 14px; line-height: 1.6;">
              ${g}
            </li>
          `).join("")}
        </ul>
      </div>
      `:""}

      <div class="detail-section">
        <h3 class="detail-section-title">🔗 相關資源</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            ${r}
        </div>
      </div>

    </div>
    `,document.getElementById("back-btn").addEventListener("click",()=>S("tech"))}const it=[{id:"naming",name:"命名慣例 (Naming Conventions)",emoji:"🏷️",summary:"統一的命名讓程式碼像是一個人寫的，避免團隊混亂。",rules:[{title:"Snake Case (蛇形命名)",desc:"所有資料表、欄位名稱一律使用小寫英文加底線。",bad:"UserId, CreateDate, TaskStatus",good:"user_id, create_date, task_status"},{title:"Plural Tables (複數表名)",desc:"資料表是「資料的集合」，所以用複數名詞。",bad:"user, task, order",good:"users, tasks, orders"},{title:"Primary Key (主鍵)",desc:"統一使用 `id` 作為該表主鍵，外鍵則用 `table_id`。",bad:"u_id, UserID, pk_users",good:"id (在 users 表), user_id (在 orders 表)"}]},{id:"formatting",name:"語法格式 (Formatting)",emoji:"🎨",summary:"良好的排版能讓 SQL 查詢的可讀性提升十倍。",rules:[{title:"Uppercase Keywords (關鍵字大寫)",desc:"SQL 關鍵字使用全大寫，與變數區隔。",bad:"select * from users where id = 1",good:"SELECT * FROM users WHERE id = 1"},{title:"New Lines (換行)",desc:"每個主要子句 (SELECT, FROM, WHERE) 獨立一行。",bad:"SELECT * FROM users WHERE age > 18 AND active = true",good:`SELECT *
FROM users
WHERE age > 18
  AND active = true`},{title:"Indentation (縮排)",desc:"子句內容縮排 2 或 4 格空格 (統一即可)。",bad:`SELECT
id,
name
FROM users`,good:`SELECT
    id,
    name
FROM users`}]},{id:"safety",name:"安全規範 (Safety Rules)",emoji:"🛡️",summary:"防止手滑刪庫的救命規則。",rules:[{title:"Destructive WHERE (破壞性操作)",desc:"UPDATE 和 DELETE 永遠要先寫 WHERE，再寫指令。",bad:"DELETE FROM users; -- 忘記寫 WHERE",good:`DELETE FROM users
WHERE id = 99; -- 雖然語法順序在後，但心裡要先想 WHERE`},{title:"Select First (先查後改)",desc:"在執行 UPDATE/DELETE 前，先用 SELECT 驗證範圍。",bad:"直接執行 UPDATE ...",good:`1. SELECT * FROM users WHERE ...
2. 確認無誤
3. UPDATE users SET ... WHERE ...`}]}];function st(t={}){const a=document.getElementById("main-content");a.innerHTML=`
    <div class="fade-slide-in">
      <h2 class="page-title">📏 開發規範</h2>
      <p class="page-desc">一致的風格能減少認知負荷，讓團隊協作更順暢。</p>

      ${it.map(e=>nt(e)).join("")}
    </div>
  `}function nt(t){return`
    <div class="stagger-item" style="margin-bottom: 40px;">
      <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
        <span>${t.emoji}</span>
        ${t.name}
      </h3>
      <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 20px;">${t.summary}</p>

      ${t.rules.map(a=>rt(a)).join("")}
    </div>
  `}function rt(t){return`
    <div class="card" style="margin-bottom: 24px;">
      <div style="margin-bottom: 16px;">
        <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">${t.title}</div>
        <div style="font-size: 14px; color: var(--text-secondary);">${t.desc}</div>
      </div>

      <div class="grid-2">
        <div>
          <div style="font-size: 12px; font-weight: 600; color: var(--color-danger); margin-bottom: 8px; text-transform: uppercase;">🚫 Bad</div>
          ${I(t.bad,"sql")}
        </div>
        <div>
           <div style="font-size: 12px; font-weight: 600; color: var(--color-success); margin-bottom: 8px; text-transform: uppercase;">✅ Good</div>
           ${I(t.good,"sql")}
        </div>
      </div>
    </div>
  `}k("dashboard",t=>Ue());k("syntax",t=>te(t));k("concepts",t=>Ye(t));k("cookbook",t=>Ke(t));k("tech",t=>Xe(t));k("guide",t=>st(t));k("roadmap",t=>Ae());k("journal",t=>ae());Oe(t=>{Re(),Be(t);const a=document.getElementById("main-content");a&&(a.scrollTop=0),window.Prism&&window.Prism.highlightAll()});window.addEventListener("global-search",t=>{t.detail.length>0&&window.location.hash.slice(1).split("?")[0]});document.addEventListener("click",t=>{const a=t.target.closest("[data-toggle-section]");if(a){const e=a.dataset.toggleSection,i=document.getElementById(e);if(i){i.classList.toggle("open");const r=i.classList.contains("open");a.setAttribute("aria-expanded",r)}}});we();
