import { getAllFilesMetadata } from '@/lib/mdx';
import { PostInfo } from '@/models';
import { getTagLink } from '@/lib/utils';
import slugify from '@sindresorhus/slugify';

export const getTagLinks = async () => {
  const postsMetadata = await getAllFilesMetadata<PostInfo>('blog');

  const siteTags = [...new Set(postsMetadata.map((post) => post.tags).flat())];

  return siteTags.map((tag) => ({
    title: tag,
    url: getTagLink(slugify(tag ?? ''))
  }));
};
