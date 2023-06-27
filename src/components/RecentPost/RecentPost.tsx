import { PostMetadata } from '@/models';
import { formatPostDate } from '@/lib/utils';

export type RecentPostProps = {
  post: PostMetadata;
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
          <a href={post.slug} className="h5 d-block mb-3">
            {post.title}
          </a>
          <a href={post.slug} className="btn btn-outline-primary">
            read more
          </a>
        </div>
      </article>
    </div>
  );
};
