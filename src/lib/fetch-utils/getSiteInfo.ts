import { getFileMetadata } from '@/lib/mdx';
import { SiteInfo } from '@/models';

export const getSiteInfo = async () => {
  const siteInfo = await getFileMetadata<SiteInfo>('_metadata', 'site-info');

  return siteInfo;
};
