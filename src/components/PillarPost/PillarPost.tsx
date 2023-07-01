import Image from 'next/image';
import { PostFileInfo } from '@/models';
import Link from 'next/link';
import { formatPostDate } from '@/lib/utils';
import { ensureLeadingSlash } from 'next/dist/shared/lib/page-path/ensure-leading-slash';

export type PillarPostProps = {
  post: PostFileInfo;
};

export const PillarPost = ({ post }: PillarPostProps) => {
  return (
    <div className="col-10">
      <article className="card featured-post">
        <div className="row g-0 align-items-center">
          <div className="col-md-5">
            {post.image && (
              <div className="pillar-img-wrapper">
                <Image src={ensureLeadingSlash(post.image)} className="pillar-img" alt={post.title ?? ''} fill />
              </div>
            )}
          </div>
          <div className="col-md-6 offset-md-1">
            <div className="card-body">
              <div className="mb-3 post-meta">
                <span>By Art</span>
                <span className="border-bottom border-primary px-2 mx-1" />
                <span>{formatPostDate(post.date)}</span>
              </div>
              <Link href={post.slug} className="h1 fw-bold d-block text-dark mb-4 card-title">
                {post.title}
              </Link>
              <p className="card-text">{post.description}...</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
