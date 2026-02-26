# Tool Definition (工具定義/函數調用)

Tool Definition（通常伴隨著 Function Calling 功能）讓 AI 能擴展其能力邊界，執行它原本做不到的事，如「查天氣」、「發送郵件」或「讀取資料庫」。

## 🤖 運作流程
1. **定義工具**：開發者向模型描述一個函數（名稱、用途、參數格式）。
2. **思考與決定**：模型判斷用戶需求是否需要該工具。
3. **產出参数**：模型不直接回答問題，而是輸出「我想調用 X 函數，參數是 Y」。
4. **執行與回傳**：開發者在程式端執行該函數，並將結果傳回給模型。
5. **最終回答**：模型根據回傳結果，產出人類可讀的回答。

## 📐 定義格式 (JSON Schema)
```json
{
  "type": "function",
  "function": {
    "name": "get_current_weather",
    "description": "獲取指定城市的當前天氣",
    "parameters": {
      "type": "object",
      "properties": {
        "location": {
          "type": "string",
          "description": "城市名稱，例如：台北市"
        },
        "unit": {
          "type": "string",
          "enum": ["celsius", "fahrenheit"]
        }
      },
      "required": ["location"]
    }
  }
}
```

## ⚠️ 安全建議
- **權限控制**：不要給予 AI 刪除資料庫或存取機密檔案的直接工具。
- **沙盒環境**：對於寫程式等工具，應在隔離環境執行。
- **人工確認**：對於金融交易等敏感操作，應由 AI 產出「草稿」後，由人類確認執行。
