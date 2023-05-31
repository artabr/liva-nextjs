import { AdvertisementWidget } from '@/components/AdvertisementWidget';
import { AboutWidget } from '@/components/AboutWidget';
import { CategoryWidget } from '@/components/CategoryWidget';
import { SocialWidget } from '@/components/SocialWidget';
import { TagWidget } from '@/components/TagWidget';

export const Sidebar = () => {
  return (
    <div className="col-lg-4">
      <div className="widgets">
        <AboutWidget />
        <CategoryWidget />
        <TagWidget />
        <SocialWidget />
        <AdvertisementWidget />
      </div>
    </div>
  );
};
