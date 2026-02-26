# Transformer 架構

Transformer 是現代生成式 AI（如 GPT, Gemini, Claude）的底層神經網路架構，於 2017 年由 Google 論文 《Attention is All You Need》 提出。

## 🏗️ 核心組件：自注意力機制 (Self-Attention)
Transformer 最大的創新是它不按順序處理文字，而是**同時**看整句話。
透過計算詞與詞之間的「注意力權重」，模型能理解「它」在句子中到底是指代哪個物件。

## 🚀 優勢
- **並行化**：讓大規模 GPU 訓練成為可能。
- **長程依賴**：能處理數千字以外的關聯性。
- **跨領域**：現在已廣泛運用於 Vision (ViT) 與語音處理。

## 📚 歷史分位
1.  **Encoder-Only** (如 BERT)：擅長理解、分類。
2.  **Decoder-Only** (如 GPT)：擅長生成、創造。
3.  **Encoder-Decoder** (如 T5)：擅長翻譯。
