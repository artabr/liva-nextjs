import { getFileMetadata } from '@/lib/mdx';
import { SiteInfoData } from '@/models';

export const getSocialLinks = async () => {
  const siteInfo = await getFileMetadata<SiteInfoData>('_metadata', 'site-info');

  return siteInfo.socialLinks;
};
