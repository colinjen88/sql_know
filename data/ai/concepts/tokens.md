# Tokens (標記)

Tokens 就像是 LLM 的「文字碎屑」。它不是以一個個字來處理，而是把字拆成更小的單位來理解。

## 🎯 生活化比喻
像是樂高積木。每個積木塊都是一個 Token，組合成完整的模型（句子）。1000 個 Tokens 約等於 750 個中文字。

## ⚠️ 為什麼重要？
- Token 是收費的單位：不管是 API 還是運算資源。
- Context Window 的限制：LLM 一次能讀多少 Token 是有限制的。
- 中文 Token 效率通常比英文低。

## 📊 視覺化
```text
文字: "Hello world"
Tokens: ["Hello", " world"]

文字: "今天天氣不錯"
Tokens: ["今", "天天", "氣", "不", "錯"]
```

## 💻 程式碼範例
```javascript
// Tokenizer 範例 (偽代碼)
const tokens = tokenizer.encode("Hello world");
console.log(tokens.length); // 2
```
