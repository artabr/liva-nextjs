import { data } from '@/components/Sidebar/mockData';
import Link from 'next/link';

export type CategoryWidgetProps = {
  title?: string;
};

export const CategoryWidget = (props: CategoryWidgetProps) => {
  return (
    <div className="widget">
      <h4 className="widget-title">Category</h4>
      {Object.entries(data.categories).length !== 0 && (
        <ul className="list-unstyled">
          {Object.entries(data.categories).map(([name, items]) => (
            <li key={`category-${name}`}>
              <Link href={`/categories/${name.toLowerCase()}/`}>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
