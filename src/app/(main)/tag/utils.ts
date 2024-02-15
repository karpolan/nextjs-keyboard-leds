import { getContentFiles } from '@/app/(main)/[...slug]/utils';

/**
 * Generates url for given Tag
 * @param {string} tag Tag name
 * @returns {string} Relative URL
 */
export function tagToUrl(tag: string): string {
  return `/tag/${tag.replace(/ /g, '-')}/`;
}

/**
 * Returns list of unique Tags from all content files
 * @returns {Promise<string[]>} List of Tags as strings
 */
export async function getTagList() {
  const contentFiles = await getContentFiles();
  const allTags: string[] = contentFiles.reduce((all: string[], fileName: string) => {
    const { tags } = require(`@/app/(main)/[...slug]/${fileName}`);
    return [...all, ...tags];
  }, []);
  const uniqueTags = Array.from(new Set(allTags)).sort();
  return uniqueTags;
}
