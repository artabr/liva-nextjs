export const FeaturedPosts = (featuredPosts) => {
  return (
    <section className="section-sm">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 featured-post-slider">
            {featuredPosts.map((post) => (
              <article key={post.id} className="card featured-post">
                <div className="row g-0 align-items-center">
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
                      <a href={post.url} className="h1 fw-bold d-block text-dark mb-4 card-title">
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
