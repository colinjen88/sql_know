// =========================================
// Prompt Playground (Simulated)
// =========================================

import { store } from '../store.js';

export function renderPlayground() {
  const main = document.getElementById('main-content');
  const currentKB = store.getCurrentKB();

  main.innerHTML = `
    <div class="fade-slide-in">
      <h2 class="page-title">🧪 ${currentKB.labels.playground || '提示詞實驗室'}</h2>
      <p class="page-desc">在這裡模擬不同參數對 AI 回答的影響。調整左側參數，觀察右側結果的變化。</p>

      <div class="playground-container">
        <!-- Controls -->
        <div class="playground-sidebar card">
          <div class="control-group">
            <label class="control-label">System Prompt 範本</label>
            <select id="template-select" class="control-select">
              <option value="default">預設助手</option>
              <option value="coder">專業程式碼專家</option>
              <option value="translator">高水平翻譯員</option>
              <option value="critical">嚴格的批判性思考家</option>
            </select>
          </div>

          <div class="control-group">
            <label class="control-label">System Prompt</label>
            <textarea id="system-prompt" class="control-textarea" placeholder="例如：你是一位專業的程式導師...">你是一個親切的 AI 助手。</textarea>
          </div>

          <div class="control-group">
            <label class="control-label">Temperature: <span id="temp-val">0.7</span></label>
            <input type="range" id="temp-range" min="0" max="1" step="0.1" value="0.7" class="control-slider">
            <div class="control-hint">0 為嚴謹穩定，1 為充滿創意。</div>
          </div>

          <div class="control-group">
            <label class="control-label">模式選擇</label>
            <select id="mode-select" class="control-select">
              <option value="creative">創意寫作</option>
              <option value="coding">程式編寫</option>
              <option value="logic">邏輯推理</option>
              <option value="chat">通用對話</option>
            </select>
          </div>

          <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button id="run-btn" class="btn btn-primary" style="flex: 1;">執行模擬 ✨</button>
            <button id="clear-btn" class="btn btn-secondary" style="width: 50px; padding: 10px;">🗑️</button>
          </div>
        </div>

        <!-- Editor & Output -->
        <div class="playground-main">
          <div class="card" style="margin-bottom: 20px;">
            <div class="card-header">
              <div class="card-title">User Message</div>
            </div>
            <textarea id="user-input" class="control-textarea" style="height: 100px;" placeholder="輸入您的指令...">請幫我寫一首關於貓的短詩。</textarea>
          </div>

          <div class="card playground-output-card">
            <div class="card-header">
              <div class="card-title">Assistant Output (Simulated)</div>
            </div>
            <div id="output-area" class="output-content">
              點擊「執行模擬」來查看結果...
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Styles
  const style = document.createElement('style');
  style.id = 'playground-styles';
  style.textContent = `
    .playground-container { display: flex; gap: 24px; align-items: flex-start; }
    .playground-sidebar { width: 300px; padding: 20px; flex-shrink: 0; }
    .playground-main { flex: 1; display: flex; flex-direction: column; }
    .control-group { margin-bottom: 20px; }
    .control-label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: var(--text-primary); }
    .control-textarea { width: 100%; height: 80px; padding: 10px; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-dark); color: var(--text-primary); font-family: inherit; resize: vertical; }
    .control-slider { width: 100%; margin: 10px 0; }
    .control-hint { font-size: 11px; color: var(--text-muted); }
    .control-select { width: 100%; padding: 8px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-dark); color: var(--text-primary); }
    .output-content { min-height: 200px; padding: 16px; font-size: 15px; line-height: 1.6; color: var(--text-secondary); white-space: pre-wrap; }
    .playground-output-card { border-left: 4px solid var(--color-primary); }
    .typing-effect { border-right: 2px solid var(--color-primary); animation: blink 0.7s infinite; }
    @keyframes blink { 50% { border-color: transparent; } }
  `;
  document.head.appendChild(style);

  // Logic
  const tempRange = document.getElementById('temp-range');
  const tempVal = document.getElementById('temp-val');
  const runBtn = document.getElementById('run-btn');
  const clearBtn = document.getElementById('clear-btn');
  const outputArea = document.getElementById('output-area');
  const templateSelect = document.getElementById('template-select');
  const systemPrompt = document.getElementById('system-prompt');
  const userInput = document.getElementById('user-input');

  const TEMPLATES = {
    default: "你是一個親切的 AI 助手。",
    coder: "你是一位精通 Python 與 JavaScript 的資深工程師，總是輸出乾淨且具備註釋的程式碼。",
    translator: "你是一位專業的翻譯員，擅長在保持原意的基礎上進行信、雅、達的翻譯，特別是英譯中。",
    critical: "你是一位嚴格的批判性思考家，會對使用者的觀點進行深度剖析並指出潛在的邏輯漏洞。"
  };

  templateSelect.addEventListener('change', (e) => {
    systemPrompt.value = TEMPLATES[e.target.value] || TEMPLATES.default;
  });

  tempRange.addEventListener('input', (e) => {
    tempVal.textContent = e.target.value;
  });

  clearBtn.addEventListener('click', () => {
    outputArea.innerHTML = '點擊「執行模擬」來查看結果...';
    userInput.value = '';
  });

  const SIMULATED_RESPONSES = {
    creative: {
      high: "在月光的銀邊下，\n一抹輕盈的影子滑過屋脊。\n琥珀色的眼睛閃爍著星塵，\n牠不是在走路，是在與風跳舞。",
      low: "貓是一種貓科動物。\n牠們有柔軟的毛和尖銳的爪子。\n喜歡在晚上活動並捕捉獵物。"
    },
    coding: "```python\ndef get_cat_fact():\n    return \"Cats have 32 muscles in each ear.\"\n\nprint(get_cat_fact())\n```",
    logic: "根據您的要求，分析如下：\n1. 目標：描述貓的特性。\n2. 方法：採用文學性修辭。\n3. 結論：貓具備優雅與神祕的雙重特質。",
    chat: "你好！很高興能為你服務。請問今天有什麼我可以幫你的嗎？無論是學術問題、創意寫作還是單純聊天，我都在這裡。"
  };

  runBtn.addEventListener('click', () => {
    const temp = parseFloat(tempRange.value);
    const mode = document.getElementById('mode-select').value;
    const isCoder = systemPrompt.value.includes('工程師');
    
    let response = "";

    outputArea.innerHTML = '<span class="typing-effect">AI 正在思考中...</span>';
    
    setTimeout(() => {
      if (isCoder && mode !== 'coding') {
        response = "身為一名工程師，我建議將這個問題拆解為更小的組件。即便是在非程式領域，這種邏輯依然適用。";
      } else if (mode === 'creative') {
        response = temp > 0.5 ? SIMULATED_RESPONSES.creative.high : SIMULATED_RESPONSES.creative.low;
      } else {
        response = SIMULATED_RESPONSES[mode] || SIMULATED_RESPONSES.chat;
      }

      // Add a "Model Label" for more realism
      const modelName = temp > 0.8 ? "Creative-Model-v1" : "Balanced-Model-v2";
      outputArea.innerHTML = `<div style="font-size: 10px; color: var(--color-primary); margin-bottom: 8px; font-weight: 700;">MODEL: ${modelName} (Simulated)</div>`;
      
      const textContainer = document.createElement('div');
      outputArea.appendChild(textContainer);

      // Simple typing effect
      let i = 0;
      const timer = setInterval(() => {
        textContainer.innerHTML = response.slice(0, i) + '<span class="typing-effect"></span>';
        i++;
        if (i > response.length) {
          clearInterval(timer);
          textContainer.innerHTML = response;
        }
      }, 20);
    }, 600);
  });
}
