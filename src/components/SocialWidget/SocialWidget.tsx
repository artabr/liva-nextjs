import { data } from '@/components/Sidebar/mockData';
import Link from 'next/link';

export const SocialWidget = () => {
  return (
    <div className="widget">
      <h4 className="widget-title">Social</h4>
      <ul className="list-inline social-links">
        {data.socialLinks.map(({ id, link, IconComponent }) => (
          <li key={id} className="list-inline-item">
            <Link href={link}>
              <IconComponent />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
