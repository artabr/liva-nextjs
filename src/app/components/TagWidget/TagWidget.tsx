import Link from 'next/link';

import { getTagLinks } from '@/lib/fetch-utils';

export default async function TagWidget() {
  const tagLinks = await getTagLinks();

  return (
    <div className="widget">
      <h4 className="widget-title">Tag</h4>
      {tagLinks.length !== 0 && (
        <ul className="list-inline">
          {tagLinks.map(({ title, url }) => (
            <li key={title} className="list-inline-item">
              <Link href={url} className="d-block p-2 bg-primary text-white">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
