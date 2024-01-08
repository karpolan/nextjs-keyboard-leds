import { ARTICLES } from './config';

/**
 * Generates url for given Article
 * @param {string} article Article name
 * @returns {string} Relative URL
 */
export function articleToUrl(article: string): string {
  return `/article/${article.replace(/ /g, '-')}/`;
}

/**
 * Returns list of unique Articles
 * @returns {Promise<string[]>} List of Articles as strings
 */
export async function getArticleList() {
  const uniqueAndSortedArticles = Array.from(new Set(ARTICLES)).sort();
  return uniqueAndSortedArticles;
}
