import { getAllFilesMetadata } from '@/lib/mdx';
import { PostMetadata } from '@/models';

export const getBlogs = async () => {
  const postsMetadata = await getAllFilesMetadata<PostMetadata>('blog');

  const siteCategories = [...new Set(postsMetadata.map((post) => post.categories).flat())];
  const siteTags = [...new Set(postsMetadata.map((post) => post.tags).flat())];

  return {
    blogs: postsMetadata,
    categories: siteCategories,
    tags: siteTags
  };
};
