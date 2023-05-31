export type RecentPostProps = {
  id: string;
  title: string;
  url: string;
  author: string;
  publishedDate: string;
  hideDate?: boolean;
  image?: {
    src: string;
  };
};

export const RecentPost = (props: RecentPostProps) => {
  return (
    <div key={props.id} className="col-lg-4 small-post-border">
      <article className="media">
        {props.image && (
          <div className="recent-post-thumb mr-3" style={{ backgroundImage: `url(${props.image.src});` }} />
        )}
        <div className="media-body">
          <div className="mb-3 post-meta">
            <span>By {props.author}</span>
            {!props.hideDate && (
              <>
                <span className="border-bottom border-primary px-2 mx-1" />
                <span>{props.publishedDate}</span>
              </>
            )}
          </div>
          <a href={props.url} className="h5 d-block mb-3">
            {props.title}
          </a>
          <a href={props.url} className="btn btn-outline-primary">
            read more
          </a>
        </div>
      </article>
    </div>
  );
};
