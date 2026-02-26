/**
 * Simple translation utility for MVP
 * Uses MyMemory API (Free, no key required for low volume)
 */

/**
 * Translates text to Traditional Chinese
 * @param {string} text - Text to translate
 * @returns {Promise<string>} - Translated text
 */
export async function translateToZh(text) {
  if (!text || /[\u4e00-\u9fa5]/.test(text)) return text; // Skip if empty or already contains Chinese

  // Truncate long text to avoid API limits (MyMemory limit is around 500 chars per request)
  const truncatedText = text.length > 400 ? text.slice(0, 400) + '...' : text;
  
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(truncatedText)}&langpair=en|zh-TW`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Translation API failed');
    const data = await response.json();
    
    if (data.responseData && data.responseData.translatedText) {
      return data.responseData.translatedText;
    }
    return text; // Fallback to original
  } catch (error) {
    console.error('Translation Error:', error);
    return text; // Fallback to original
  }
}
