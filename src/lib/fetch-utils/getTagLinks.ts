import slugify from '@sindresorhus/slugify';

import type { PostInfo } from '@/models';

import { getAllFilesMetadata } from '@/lib/mdx';
import { getTagLink } from '@/lib/utils';

export const getTagLinks = async () => {
	const postsMetadata = await getAllFilesMetadata<PostInfo>('blog');

	const siteTags = [...new Set(postsMetadata.flatMap((post) => post.tags))];

	return siteTags.map((tag) => ({
		title: tag,
		url: getTagLink(slugify(tag ?? '')),
	}));
};
