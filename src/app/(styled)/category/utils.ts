import { getContentFiles } from '@/app/(styled)/[...slug]/utils';

/**
 * Generates url for given Category
 * @param {string} tag Tag name
 * @returns {string} Relative URL
 */
export function categoryToUrl(tag: string): string {
  return `/category/${tag.replace(/ /g, '-')}/`;
}

/**
 * Returns list of unique categories from all content files
 * @returns {Promise<string[]>} List categories as strings
 */
export async function getCategoryList() {
  const contentFiles = await getContentFiles();
  const allCategories: string[] = contentFiles.reduce((all: string[], fileName: string) => {
    const { categories } = require(`@/app/(styled)/[...slug]/${fileName}`);
    return [...all, ...categories];
  }, []);
  const uniqueCategories = Array.from(new Set(allCategories)).sort();
  return uniqueCategories;
}
