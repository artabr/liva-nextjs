import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/models';
import { ensureLeadingSlash } from 'next/dist/shared/lib/page-path/ensure-leading-slash';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

export type SinglePostProps = Post;

export const SinglePost = (props: SinglePostProps) => {
  const { categories, title, date, image, code } = props;

  const ContentComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {categories?.map((category) => (
              <Link
                key={`category-${category}`}
                href={`/categories/${category.toLowerCase()}`}
                className="text-primary"
              >
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
              <Image
                src={ensureLeadingSlash(image)}
                className="img-fluid w-100 mb-4"
                width={267}
                height={267}
                alt={title ?? ''}
              />
            )}
            <div className="content mb-5">
              <ContentComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
