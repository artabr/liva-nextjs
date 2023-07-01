import { PostFileMetadata } from '@/models';
import { formatPostDate } from '@/lib/utils';
import Link from 'next/link';

export type RecentPostProps = {
  post: PostFileMetadata;
};

export const RecentPost = ({ post }: RecentPostProps) => {
  return (
    <div className="col-lg-4 small-post-border">
      <article className="d-flex">
        <div className="flex-shrink-0">
          {post.image && <div className="recent-post-thumb me-3" style={{ backgroundImage: `url(${post.image});` }} />}
        </div>
        <div className="flex-grow-1 ms-3">
          <div className="mb-3 post-meta">
            <span>By Art</span>
            <span className="border-bottom border-primary px-2 mx-1" />
            <span>{formatPostDate(post.date)}</span>
          </div>
          <Link href={post.slug} className="h5 d-block mb-3">
            {post.title}
          </Link>
          <Link href={post.slug} className="btn btn-outline-primary">
            read more
          </Link>
        </div>
      </article>
    </div>
  );
};
