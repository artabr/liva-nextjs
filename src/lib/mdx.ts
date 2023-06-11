import fs from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import { FileMetadata, FrontMatterMetadata } from '@/models';

import { CONTENT_PATH } from '@/lib/constants';
import { getSlugFromFilename } from '@/lib/utils';

export async function getAllFilesMetadata(folder: string): Promise<FileMetadata[]> {
  const pattern = `${CONTENT_PATH}/${folder}/**/*.{md,mdx}`;

  const files = await glob(pattern);

  return files.map((file) => {
    const source = fs.readFileSync(file, 'utf8');
    const metadata = matter(source).data as FrontMatterMetadata;
    return {
      ...metadata,
      slug: getSlugFromFilename(file, CONTENT_PATH)
    };
  });
}
