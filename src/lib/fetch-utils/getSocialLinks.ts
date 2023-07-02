import { getFileMetadata } from '@/lib/mdx';
import { SiteInfo } from '@/models';

export const getSocialLinks = async () => {
  const siteInfo = await getFileMetadata<SiteInfo>('_metadata', 'site-info');

  return siteInfo.socialLinks;
};
