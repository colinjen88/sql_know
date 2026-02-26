# 部署指南：liro.it.com (隱藏 Port 版)

這份指南將協助您將專案部署到 Hostinger VPS，並達成以下目標：
1.  **專案運行在 Port 8860**：避免與 VPS 上現有的 `liro.pro`、`liro.life` 專案冲突。
2.  **網址不顯示 Port**：使用 `https://liro.it.com` 即可訪問。
3.  **多域名共存**：Nginx 會自動根據網址 (Server Name) 區分不同專案，**絕對不會互蓋**。

---

## 第一階段：Cloudflare DNS 設定 (單純子網域版)
針對您「只買子網域 (Subdomain)」的情況，Cloudflare 把 `liro.it.com` 當作一個完整的網站 (Zone)。
**這是最容易設定錯誤的地方，請務必這這麼做：**

1.  **新增紀錄 (Add Record)**：
    *   **Type (類型)**: `A`
    *   **Name (名稱)**: `@` (代表根網域，結果會是 liro.it.com)
    *   **IPv4 address (內容)**: `145.79.28.71`
    *   **Proxy status (代理)**: ✅ **Proxied (橘色雲朵)**

> **⚠️ 千萬不要填 `liro`**
> 如果您在此時 Name 填 `liro`，網址會變成 `liro.liro.it.com`，這樣就錯了！

---

## 第二階段：本機打包 (Local Build)
在您的開發電腦終端機執行：

```bash
npm run build
```
這會在專案目錄下產生一個 `dist` 資料夾，裡面是編譯好的網頁檔案。

---

## 第三階段：VPS 主機設定

### 3.1 上傳檔案
建議路徑：`/var/www/liro_it_com`

範例指令 (SCP):
```bash
# 假設您在本機專案根目錄
scp -r dist/ root@145.79.28.71:/var/www/liro_it_com
```

### 3.2 啟動專案 (Port 8860)
我們使用 `pm2` 與 `serve` 來讓網頁在背景運行於 8860 Port。

1.  **連線到 VPS**:
    ```bash
    ssh root@145.79.28.71
    ```

2.  **安裝 PM2 與 serve (若未安裝)**:
    ```bash
    npm install -g pm2 serve
    ```

3.  **啟動服務**:
    ```bash
    # 進入目錄
    cd /var/www/liro_it_com

    # 使用 pm2 啟動 serve，指定 port 8860，名稱設為 liro-it-com 避免重複
    pm2 start serve --name "liro-it-com" -- -s . -l 8860
    
    # 儲存設定 (重開機自動啟動)
    pm2 save
    pm2 startup
    ```
    *(現在您的專案已經在主機內部 `http://localhost:8860` 運行中)*

---

## 第四階段：Nginx 反向代理 (流量引導)

1.  **建立專屬設定檔**:
    ```bash
    nano /etc/nginx/sites-available/liro.it.com
    ```

2.  **貼上以下內容**:
    ```nginx
    server {
        listen 80;
        server_name liro.it.com;

        location / {
            # 將流量轉發到內部的 8860 Port
            proxy_pass http://127.0.0.1:8860;
            
            # 轉發必要的 Header
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
    ```
    *(重點：Nginx 會看 `server_name` 是 `liro.it.com` 才會轉發給 8860。如果訪客是打 `liro.pro`，Nginx 會因為名字不對而不理會這份設定，轉而去讀 `liro.pro` 的設定檔，所以兩者互不干擾。)*

3.  **啟用設定並重啟 Nginx**:
    ```bash
    # 建立連結
    ln -s /etc/nginx/sites-available/liro.it.com /etc/nginx/sites-enabled/
    
    # 檢查設定語法是否正確
    nginx -t
    
    # 重啟 Nginx
    systemctl reload nginx
    ```

---

## 第五階段：驗證
1.  打開瀏覽器輸入 `https://liro.it.com`。
2.  您應該能看到專案內容。
3.  同時測試原本的 `liro.pro` 與 `liro.life`，確認它們依然正常運作。
