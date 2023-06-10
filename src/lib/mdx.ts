import path from 'path';
import fs from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import { FileMetadata, FrontMatterMetadata } from '@/models';

import { CONTENT_PATH } from '@/lib/constants';

export async function getAllFilesMetadata(folder: string): Promise<FileMetadata[]> {
  const pattern = path.join(CONTENT_PATH, folder, '**/*.md');

  const files = await glob(pattern);

  return files.map((file) => {
    const source = fs.readFileSync(file, 'utf8');
    const metadata = matter(source).data as FrontMatterMetadata;
    return {
      ...metadata,
      slug: file
    };
  });
}
