import { getFileBySlug } from '@/lib/mdx';
import { AuthorInfo } from '@/models';

export const getAuthorBio = async () => {
  const authorBio = await getFileBySlug<AuthorInfo>('about');

  return authorBio;
};
