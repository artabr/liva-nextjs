import { data } from '@/components/Sidebar/mockData';

export type TagWidgetProps = {
  title?: string;
};

export const TagWidget = (props: TagWidgetProps) => {
  return (
    <div className="widget">
      <h4 className="widget-title">Tag</h4>
      {Object.entries(data.tags).length !== 0 && (
        <ul className="list-inline">
          {Object.entries(data.tags).map(([name, items]) => (
            <li key={`tag-${name}`} className="list-inline-item">
              <a href={`/tags/${name.toLowerCase()}/`} className="d-block p-2 bg-primary text-white">
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
