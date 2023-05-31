import { data } from '@/components/Sidebar/mockData';

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
              <a href={`/categories/${name.toLowerCase()}/`}>{name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
