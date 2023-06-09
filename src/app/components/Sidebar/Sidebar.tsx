import { AboutWidget } from '@/server-components/AboutWidget';
import { AdvertisementWidget } from '@/server-components/AdvertisementWidget';
import { CategoryWidget } from '@/server-components/CategoryWidget';
import { SocialWidget } from '@/server-components/SocialWidget';
import { TagWidget } from '@/server-components/TagWidget';

export default async function Sidebar() {
  return (
    <div className="col-lg-4">
      <div className="widgets">
        {/* @ts-expect-error Async Server Component */}
        <AboutWidget />
        {/* @ts-expect-error Async Server Component */}
        <CategoryWidget />
        {/* @ts-expect-error Async Server Component */}
        <TagWidget />
        {/* @ts-expect-error Async Server Component */}
        <SocialWidget />
        <AdvertisementWidget />
      </div>
    </div>
  );
}
