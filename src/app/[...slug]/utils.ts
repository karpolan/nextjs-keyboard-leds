import { readdir } from 'node:fs/promises';
import path from 'node:path';

export async function getContentFiles(): Promise<string[]> {
  // const directoryPath = path.join(__dirname, '../../../../../src/app/[...slug]');
  const directoryPath = 'src/app/[...slug]';
  const fileNames = [];
  try {
    const files = await readdir(directoryPath);
    for (const file of files) {
      fileNames.push(file);
    }
    fileNames.filter((file) => file !== 'index.ts');
  } catch (error) {
    console.error('Unable to scan directory: ' + error);
  }

  const result = fileNames.filter((file) => !['page.tsx', 'utils.ts'].includes(file));
  console.log('getContentFiles()', result);
  return result;
}

export async function generateStaticParams() {
  const files = await getContentFiles();
  const result = files.map((file) => {
    const justName = file.substring(0, file.indexOf('.')); // File name without extension
    const asArray = justName.split('-');
    // const slugAsString = [asArray[0] + '/' + asArray[1] + '/' + asArray[2] + '/' + justName.substring(11);
    const slugAsArray = [asArray[0], asArray[1], asArray[2], justName.substring(11)];
    console.log(file, '=', slugAsArray);
    return {
      params: {
        slug: slugAsArray,
      },
    };
  });
  return result;
}
