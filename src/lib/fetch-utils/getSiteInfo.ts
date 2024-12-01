import type { SiteInfo } from '@/models';

import { getFileMetadata } from '@/lib/mdx';

export const getSiteInfo = async () => {
  const siteInfo = await getFileMetadata<SiteInfo>('_metadata', 'site-info');

  return siteInfo;
};
