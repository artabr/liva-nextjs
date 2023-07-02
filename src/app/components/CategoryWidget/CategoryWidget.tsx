import Link from 'next/link';
import { getCategoryLinks } from '@/lib/fetch-utils';

export default async function CategoryWidget() {
  const categoryLinks = await getCategoryLinks();

  return (
    <div className="widget">
      <h4 className="widget-title">Category</h4>
      {categoryLinks.length !== 0 && (
        <ul className="list-unstyled">
          {categoryLinks.map(({ title, url }) => (
            <li key={title}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
