// featured post
export const FeaturedPosts = (featuredPosts) => {
  return (
    <section className="section-sm">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 featured-post-slider">
            {featuredPosts.map((post) => (
              <article key={post.id} className="card featured-post">
                <div className="row no-gutters align-items-center">
                  <div className="col-md-5">
                    {post.image && <img src={post.image.src} className="card-img" alt={post.image.title} />}
                  </div>
                  <div className="col-md-6 offset-md-1">
                    <div className="card-body">
                      <div className="mb-3 post-meta">
                        <span>By {post.author}</span>
                        {!post.hideDate && (
                          <>
                            <span className="border-bottom border-primary px-2 mx-1" />
                            <span>{post.publishedDate}</span>
                          </>
                        )}
                      </div>
                      <a href={post.url} className="h1 font-weight-bold d-block text-dark mb-4 card-title">
                        {post.title}
                      </a>
                      <p className="card-text">{post.summary}...</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// recent post
export const RecentPosts = (recentPosts) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          {recentPosts.map((post) => (
            <div key={post.id} className="col-lg-4 small-post-border">
              <article className="media">
                {post.image && (
                  <div className="recent-post-thumb mr-3" style={{ backgroundImage: `url(${post.image.src});` }} />
                )}
                <div className="media-body">
                  <div className="mb-3 post-meta">
                    <span>By {post.author}</span>
                    {!post.hideDate && (
                      <>
                        <span className="border-bottom border-primary px-2 mx-1" />
                        <span>{post.publishedDate}</span>
                      </>
                    )}
                  </div>
                  <a href={post.url} className="h5 d-block mb-3">
                    {post.title}
                  </a>
                  <a href={post.url} className="btn btn-outline-primary">
                    read more
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// blog post
export const BlogPosts = (blogPosts) => {
  return (
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="row">
              {blogPosts.map((post) => (
                <div key={post.id} className="col-md-6 mb-4">
                  <article className="card">
                    {post.image && <img src={post.image.src} className="card-img-top" alt={post.image.title} />}
                    <div className="card-body px-0">
                      {post.categories &&
                        post.categories.map((category) => (
                          <a key={category.id} href={category.url} className="text-primary">
                            {category.title}
                          </a>
                        ))}
                      <a href={post.url} className="h5 d-block my-3">
                        {post.title}
                      </a>
                      <div className="mb-3 post-meta">
                        <span>By {post.author}</span>
                        {!post.hideDate && (
                          <>
                            <span className="border-bottom border-primary px-2 mx-1" />
                            <span>{post.publishedDate}</span>
                          </>
                        )}
                      </div>
                      <p className="card-text">{post.summary}</p>
                      <a href={post.url} className="btn btn-outline-primary">
                        read more
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div>Sidebar</div>

          <div className="col-12 mt-5">Pagination</div>
        </div>
      </div>
    </section>
  );
};
