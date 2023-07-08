import { PostInfo } from '@/models';

import { getAllFilesMetadata } from '@/lib/mdx';

export const getBlogs = async () => {
  const postsMetadata = await getAllFilesMetadata<PostInfo>('blog');

  const siteCategories = [...new Set(postsMetadata.map((post) => post.categories).flat())];
  const siteTags = [...new Set(postsMetadata.map((post) => post.tags).flat())];

  return {
    posts: postsMetadata,
    categories: siteCategories,
    tags: siteTags
  };
};
