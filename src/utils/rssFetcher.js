/**
 * Fetches RSS feed and converts it to JSON using rss2json.com API
 * @param {string} url - RSS feed URL
 * @returns {Promise<Object>} - The feed data
 */
export async function fetchRSS(url) {
  const API_KEY = ''; // Optional API key for rss2json
  const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;
  
  try {
    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error('Failed to fetch RSS');
    const data = await response.json();
    if (data.status !== 'ok') throw new Error(data.message || 'Error parsing RSS');
    return data;
  } catch (error) {
    console.error('RSS Fetch Error:', error);
    return null;
  }
}
