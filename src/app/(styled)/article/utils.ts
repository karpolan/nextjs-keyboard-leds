import { capitalizeAllWords } from '@/utils';
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
 * Generates user friendly title for given Software
 * @param {string} software Software name
 * @returns {string} User friendly title
 */
export function articleToTitle(software: string): string {
  return capitalizeAllWords(decodeURIComponent(software));
}

/**
 * Returns list of unique Articles
 * @returns {Promise<string[]>} List of Articles as strings
 */
export async function getArticleList() {
  const uniqueAndSortedArticles = Array.from(new Set(ARTICLES)).sort();
  return uniqueAndSortedArticles;
}
