import slugify from '@sindresorhus/slugify';

import { PostInfo } from '@/models';

import { getAllFilesMetadata } from '@/lib/mdx';
import { getTagLink } from '@/lib/utils';

export const getTagLinks = async () => {
  const postsMetadata = await getAllFilesMetadata<PostInfo>('blog');

  const siteTags = [...new Set(postsMetadata.map((post) => post.tags).flat())];

  return siteTags.map((tag) => ({
    title: tag,
    url: getTagLink(slugify(tag ?? ''))
  }));
};
