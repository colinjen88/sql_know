# JSON Mode (JSON 模式)

JSON Mode 是一項進階功能，確保 API 回傳的內容是一個有效的 JSON 字串，便於程式後續解析（Parsing）。

## 🎯 核心用途
將非結構化的對話內容，轉換為結構化的數據。

- **情境**：從一段客服對話中提取「訂單編號」與「問題類別」。
- **情境**：將一段新聞摘要轉換成特定格式存入資料庫。

## 📐 配置要求
在 OpenAI 或 Vercel AI SDK 中啟用時通常需要兩步：
1. **設定參數**：將 `response_format` 設為 `{ "type": "json_object" }`。
2. **System Prompt**：必須在 Prompt 中明確指示模型輸出 JSON（例如： "You are a helpful assistant designed to output JSON."）。

## 🚀 範例
**System Prompt:**
> 你是一個資訊提取助手。請提取用戶內容中的姓名與年齡，並以 JSON 格式回傳。

**User:**
> 我叫陳小明，今年 25 歲，住在台北。

**Model Result:**
```json
{
  "name": "陳小明",
  "age": 25,
  "location": "台北"
}
```

## ⚠️ 常見陷阱
- **未提及 JSON**：即便啟用了 JSON Mode，若 Prompt 中沒寫 JSON，API 可能會回報錯誤。
- **過長輸出**：若模型在輸出完整的 JSON 閉合括號前達到 `max_tokens` 限制，JSON 會損壞。
