import { capitalizeAllWords } from '@/utils';
import { SOFTWARE } from './config';

/**
 * Generates url for given Software
 * @param {string} software Software name
 * @returns {string} Relative URL
 */
export function softwareToUrl(software: string): string {
  return `/software/${software.replace(/ /g, '-')}/`;
}

/**
 * Generates user friendly title for given Software
 * @param {string} software Software name
 * @returns {string} User friendly title
 */
export function softwareToTitle(software: string): string {
  return capitalizeAllWords(decodeURIComponent(software));
}

/**
 * Returns list of unique Software
 * @returns {Promise<string[]>} List of Software as strings
 */
export async function getSoftwareList() {
  const uniqueAndSortedArticles = Array.from(new Set(SOFTWARE)).sort();
  return uniqueAndSortedArticles;
}
