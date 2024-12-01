import type { SiteInfo } from '@/models';

import { getFileMetadata } from '@/lib/mdx';

export const getSocialLinks = async () => {
	const siteInfo = await getFileMetadata<SiteInfo>('_metadata', 'site-info');

	return siteInfo.socialLinks;
};
