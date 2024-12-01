import type { PostInfo } from '@/models';

import { getAllFilesMetadata } from '@/lib/mdx';

export const getBlogs = async () => {
	const postsMetadata = await getAllFilesMetadata<PostInfo>('blog');

	const siteCategories = [
		...new Set(postsMetadata.flatMap((post) => post.categories)),
	];
	const siteTags = [...new Set(postsMetadata.flatMap((post) => post.tags))];

	return {
		posts: postsMetadata,
		categories: siteCategories,
		tags: siteTags,
	};
};
