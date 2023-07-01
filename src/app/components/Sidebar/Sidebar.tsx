import { AdvertisementWidget } from '@/server-components/AdvertisementWidget';
import { AboutWidget } from '@/server-components/AboutWidget';
import { CategoryWidget } from '@/server-components/CategoryWidget';
import { SocialWidget } from '@/server-components/SocialWidget';
import { TagWidget } from '@/server-components/TagWidget';

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
