import { AuthorInfo } from '@/models';

import { getFileMetadata } from '@/lib/mdx';

export const getAuthorInfo = async () => {
  const authorInfo = await getFileMetadata<AuthorInfo>('about');

  return authorInfo;
};
