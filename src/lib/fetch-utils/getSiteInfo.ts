import { getFileMetadata } from '@/lib/mdx';
import { SiteInfoData } from '@/models';

export const getSiteInfo = async () => {
  const siteInfo = await getFileMetadata<SiteInfoData>('_metadata', 'site-info');

  return siteInfo;
};
