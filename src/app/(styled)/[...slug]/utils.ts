import { ReactNode } from 'react';
import { readdir } from 'node:fs/promises';
import { IS_DEBUG } from '@/config';

export type ContentFile = {
  categories?: string[];
  content: ReactNode;
  href?: string;
  title?: string;
  tags?: string[];
};

export function contentFileNameToUrl(fileName: string): string {
  const justName = fileName.substring(0, fileName.indexOf('.')); // File name without extension
  const asArray = justName.split('-');
  const result = '/' + asArray[0] + '/' + asArray[1] + '/' + asArray[2] + '/' + justName.substring(11);
  return result;
}

export async function getContentFiles(): Promise<string[]> {
  const directoryPath = 'src/app/(styled)/[...slug]';
  const fileNames = [];
  try {
    const files = await readdir(directoryPath);
    for (const fileName of files) {
      fileNames.push(fileName);
    }
  } catch (error) {
    console.error('Unable to scan directory: ' + error);
  }

  const result = fileNames
    .filter((file) => !['page.tsx', 'utils.ts'].includes(file))
    .sort((a, b) => b.localeCompare(a, undefined, { numeric: true })); // Sort by ISO date in beginning of file name
  IS_DEBUG && console.log('getContentFiles()', result);
  return result;
}
