import { data } from '@/components/Sidebar/mockData';

export type SocialWidgetProps = {
  title?: string;
};

export const SocialWidget = (props: SocialWidgetProps) => {
  return (
    <div className="widget">
      <h4 className="widget-title">Social</h4>
      <ul className="list-inline social-links">
        {data.socialLinks.map((link, index) => (
          <li key={`social-link-${index}`} className="list-inline-item">
            <a href={link.link}>
              <i className={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
