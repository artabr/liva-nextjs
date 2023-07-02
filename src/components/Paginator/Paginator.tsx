import Image from 'next/image';
import { PostFileInfo } from '@/models';
import Link from 'next/link';
import { formatPostDate, getBlogLink, getCategoryLink } from '@/lib/utils';
import slugify from '@sindresorhus/slugify';
import { ensureLeadingSlash } from 'next/dist/shared/lib/page-path/ensure-leading-slash';

export type PaginatorProps = {
  pages: PostFileInfo[];
  authorName?: string;
};

export const Paginator = ({ pages, authorName }: PaginatorProps) => {
  return (
    <div className="row">
      {pages.map((page, index) => (
        <div key={`post-${index}`} className="col-md-6 mb-4">
          <article className="card">
            {page.image && (
              <div className="card-img-wrapper">
                <Image src={ensureLeadingSlash(page.image)} className="card-img-top" alt={page.title ?? ''} fill />
              </div>
            )}
            <div className="card-body px-0">
              {page.categories?.map((category) => (
                <Link key={category} href={getCategoryLink(slugify(category))} className="text-primary">
                  {category}
                </Link>
              ))}
              <Link href={getBlogLink(page.slug)} className="h5 d-block my-3">
                {page.title}
              </Link>
              <div className="mb-3 post-meta">
                <span>By {authorName}</span>
                <span className="border-bottom border-primary px-2 mx-1" />
                <span>{formatPostDate(page.date)}</span>
              </div>
              <p className="card-text">{page.summary}</p>
              <Link href={getBlogLink(page.slug)} className="btn btn-outline-primary">
                read more
              </Link>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};
