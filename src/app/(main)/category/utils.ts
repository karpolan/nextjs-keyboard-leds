import { getContentFiles } from '@/app/(main)/[...slug]/utils';

/**
 * Generates url for given Category
 * @param {string} category Category name
 * @returns {string} Relative URL
 */
export function categoryToUrl(category: string): string {
  return `/category/${category.replace(/ /g, '-')}/`;
}

/**
 * Returns list of unique Categories from all content files
 * @returns {Promise<string[]>} List Categories as strings
 */
export async function getCategoryList() {
  const contentFiles = await getContentFiles();
  const allCategories: string[] = contentFiles.reduce((all: string[], fileName: string) => {
    const { categories } = require(`@/app/(main)/[...slug]/${fileName}`);
    return [...all, ...categories];
  }, []);
  const uniqueCategories = Array.from(new Set(allCategories)).sort();
  return uniqueCategories;
}
