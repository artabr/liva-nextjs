import Link from 'next/link';
import { getSocialLinks } from '@/lib/fetch-utils';
import { Icon } from '@/components/Icon';

export default async function SocialWidget() {
  const socialLinks = await getSocialLinks();

  return (
    <div className="widget">
      <h4 className="widget-title">Social</h4>
      <ul className="list-inline social-links">
        {socialLinks.map(({ title, url, icon }) => (
          <li key={title} className="list-inline-item">
            <Link href={url}>
              <Icon icon={icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
