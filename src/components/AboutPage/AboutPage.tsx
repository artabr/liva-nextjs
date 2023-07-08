import { ensureLeadingSlash } from 'next/dist/shared/lib/page-path/ensure-leading-slash';
import Image from 'next/image';

import { AuthorInfo, FileContent, FileInfo, Post } from '@/models';

import { MDXComponent } from '@/components/MDXComponent';

export type SinglePostProps = AuthorInfo & FileInfo & FileContent;

export const AboutPage = (props: SinglePostProps) => {
  const { title, image, code, authorName } = props;

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            {image && (
              <Image
                src={ensureLeadingSlash(image)}
                alt={authorName}
                width="335"
                height="335"
                className="img-fluid d-block mx-auto rounded-circle mb-4"
              />
            )}
            <h4 className="widget-title">{title}</h4>
            <div className="content">
              <MDXComponent code={code} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
