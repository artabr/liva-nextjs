import { PostMetadata } from '@/models';
import { formatPostDate } from '@/lib/utils';

export type PillarPostProps = {
  post: PostMetadata;
};

export const PillarPost = ({ post }: PillarPostProps) => {
  return (
    <div className="col-10 featured-post-slider">
      <article className="card featured-post">
        <div className="row g-0 align-items-center">
          <div className="col-md-5">{post.image && <img src={post.image} className="card-img" alt={post.title} />}</div>
          <div className="col-md-6 offset-md-1">
            <div className="card-body">
              <div className="mb-3 post-meta">
                <span>By Art</span>
                <span className="border-bottom border-primary px-2 mx-1" />
                <span>{formatPostDate(post.date)}</span>
              </div>
              <a href={post.slug} className="h1 fw-bold d-block text-dark mb-4 card-title">
                {post.title}
              </a>
              <p className="card-text">{post.description}...</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
