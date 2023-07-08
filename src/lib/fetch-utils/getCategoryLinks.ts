import slugify from '@sindresorhus/slugify';

import { PostInfo } from '@/models';

import { getAllFilesMetadata } from '@/lib/mdx';
import { getCategoryLink } from '@/lib/utils';

export const getCategoryLinks = async () => {
  const postsMetadata = await getAllFilesMetadata<PostInfo>('blog');

  const siteCategories = [...new Set(postsMetadata.map((post) => post.categories).flat())];

  return siteCategories.map((category) => ({
    title: category,
    url: getCategoryLink(slugify(category ?? ''))
  }));
};
