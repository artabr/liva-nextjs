import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/models';
import { ensureLeadingSlash } from 'next/dist/shared/lib/page-path/ensure-leading-slash';
import { MDXComponent } from '@/components/MDXComponent';
import { getCategoryLink } from '@/lib/utils';
import slugify from '@sindresorhus/slugify';

export type SinglePostProps = Post;

export const SinglePost = (props: SinglePostProps) => {
  const { categories, title, date, image, code } = props;

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {categories?.map((category) => (
              <Link key={category} href={getCategoryLink(slugify(category))} className="text-primary">
                {category}
              </Link>
            ))}
            <h2>{title}</h2>
            <div className="mb-3 post-meta">
              <span>By Author</span>
              <span className="border-bottom border-primary px-2 mx-1" />
              <span>
                {new Date(date ?? Date.now()).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
            {image && (
              <div className="single-img-wrapper mb-4">
                <Image src={ensureLeadingSlash(image)} className="single-img" alt={title ?? ''} fill />
              </div>
            )}
            <div className="content mb-5">
              <MDXComponent code={code} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
