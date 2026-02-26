import { marked } from 'marked';

/**
 * Fetches and parses a markdown file.
 * @param {string} filePath - Absolute or relative path to the .md file.
 * @returns {Promise<string>} - The parsed HTML string.
 */
export async function loadMarkdown(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch markdown: ${response.statusText}`);
        }
        const text = await response.text();
        return marked.parse(text);
    } catch (error) {
        console.error('Error loading markdown:', error);
        return `<div class="error-msg">Error loading content: ${error.message}</div>`;
    }
}
