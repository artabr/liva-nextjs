import { getFileMetadata } from '@/lib/mdx';
import { AuthorInfo } from '@/models';

export const getAuthorInfo = async () => {
  const authorInfo = await getFileMetadata<AuthorInfo>('about');

  return authorInfo;
};
