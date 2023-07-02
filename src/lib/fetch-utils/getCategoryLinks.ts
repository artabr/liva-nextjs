import { getAllFilesMetadata } from '@/lib/mdx';
import { PostInfo } from '@/models';
import { getCategoryLink } from '@/lib/utils';
import slugify from '@sindresorhus/slugify';

export const getCategoryLinks = async () => {
  const postsMetadata = await getAllFilesMetadata<PostInfo>('blog');

  const siteCategories = [...new Set(postsMetadata.map((post) => post.categories).flat())];

  return siteCategories.map((category) => ({
    title: category,
    url: getCategoryLink(slugify(category ?? ''))
  }));
};
