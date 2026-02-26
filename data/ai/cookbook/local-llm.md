# 使用 Ollama 跑本地模型

Ollama 是一個開源框架，旨在讓用戶能在個人電腦（MacOS, Linux, Windows）上輕鬆部署並運行大型語言模型。

## 🏠 為什麼要用本地模型？
1.  **數據隱私**：所有的對話都在你的機器上處理，不會傳輸到任何伺服器。
2.  **完全免費**：除了電費與硬體成本，不需支付 API 呼叫費。
3.  **無須聯網**：非常適合離線開發環境。

## 🚀 快速上手
1.  **下載**：前往 [ollama.com](https://ollama.com) 下載安裝程式。
2.  **運行模型**：打開終端機輸入：
    ```bash
    ollama run llama3
    ```
3.  **API 調用**：Ollama 啟動後會在 `localhost:11434` 開啟一個 REST API。

## 🛠️ 開發整合
許多工具（如 Open WebUI, Everything AI）都原生支援 Ollama。你也可以在 Python 中輕鬆呼叫：
```python
import ollama
response = ollama.chat(model='llama3', messages=[
  { 'role': 'user', 'content': '為何天空是藍色的？' },
])
print(response['message']['content'])
```

## ⚠️ 硬體要求
- **8B 模型**（如 Llama 3 8B）：建議 16GB RAM。
- **70B 模型**：建議 64GB+ RAM 與強大的 GPU。
