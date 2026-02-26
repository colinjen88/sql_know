// =========================================
// News Feed Page
// =========================================

import { store } from '../store.js';
import { fetchRSS } from '../utils/rssFetcher.js';
import { translateToZh } from '../utils/translator.js';

export async function renderNews() {
  const main = document.getElementById('main-content');
  const currentKB = store.getCurrentKB();
  const feeds = currentKB.rssFeeds || [];

  main.innerHTML = `
    <div class="fade-slide-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <h2 class="page-title">📡 ${currentKB.labels.news || '最新動態'}</h2>
        <div class="tag tag-cyan">MVP 自動翻譯已開啟</div>
      </div>
      <p class="page-desc">訂閱來自全球的 AI 相關新聞與技術部落格，掌握第一手情報。</p>

      <div id="news-container" class="news-grid">
        <div class="loading">正在載入並翻譯新聞情報...</div>
      </div>
    </div>
  `;

  if (feeds.length === 0) {
    document.getElementById('news-container').innerHTML = `
      <div class="empty-state">
        <div class="empty-state-emoji">📭</div>
        <div class="empty-state-text">目前沒有訂閱源</div>
      </div>
    `;
    return;
  }

  // Load all feeds
  const allResults = await Promise.all(feeds.map(feed => fetchRSS(feed.url)));
  
  // Combine and sort by date
  let allItems = [];
  allResults.forEach((result, index) => {
    if (result && result.items) {
      result.items.forEach(item => {
        allItems.push({
          ...item,
          source: feeds[index].name,
          pubDate: new Date(item.pubDate)
        });
      });
    }
  });

  allItems.sort((a, b) => b.pubDate - a.pubDate);
  // Limit items for translation to avoid API rate limits
  const displayItems = allItems.slice(0, 10);

  const container = document.getElementById('news-container');
  if (displayItems.length === 0) {
    container.innerHTML = `<div class="empty-state">無法載入新聞，請檢查網路連線或稍後再試。</div>`;
    return;
  }

  // Translate top news for better experience
  const translatedItems = await Promise.all(displayItems.map(async (item) => {
    const cleanDesc = item.description.replace(/<[^>]*>/g, '').slice(0, 150);
    const [zhTitle, zhDesc] = await Promise.all([
      translateToZh(item.title),
      translateToZh(cleanDesc)
    ]);
    return { ...item, zhTitle, zhDesc };
  }));

  container.innerHTML = translatedItems.map(item => `
    <div class="news-card card stagger-item">
      <div class="news-source">${item.source}</div>
      <h3 class="news-title">
        <a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.zhTitle}</a>
      </h3>
      <div class="news-meta">
        <span>${item.pubDate.toLocaleDateString()}</span>
        ${item.author ? `<span>• ${item.author}</span>` : ''}
      </div>
      <div class="news-description">${item.zhDesc}...</div>
      <div class="news-original" style="font-size: 11px; color: var(--text-muted); margin-top: 8px; border-top: 1px dashed var(--border-color); padding-top: 8px;">
        原文: ${item.title}
      </div>
      <a href="${item.link}" target="_blank" class="news-link">閱讀更多 →</a>
    </div>
  `).join('');
}
