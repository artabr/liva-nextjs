import { AuthorInfo } from '@/models';

import { getFileBySlug } from '@/lib/mdx';

export const getAuthorBio = async () => {
  const authorBio = await getFileBySlug<AuthorInfo>('about');

  return authorBio;
};
