export type Page = {
  title: string;
  publishDate: Date;
  params: {
    permalink: string;
    image?: string;
    categories: {
      id: string;
      title: string;
    }[];
    title: string;
    author: string;
    hideDate?: boolean;
    summary: string;
  };
};

export type PaginatorProps = {
  pages: Page[];
};

export const Paginator = ({ pages }: PaginatorProps) => {
  return (
    <div className="row">
      {pages.map((page, index) => (
        <div key={`post-${index}`} className="col-md-6 mb-4">
          <article className="card">
            {page.params.image && <img src={page.params.image} className="card-img-top" alt={page.title} />}
            <div className="card-body px-0">
              {page.params.categories.map((category) => (
                <a
                  key={`category-${category.id}`}
                  href={`/categories/${category.title.toLowerCase()}`}
                  className="text-primary"
                >
                  {category.title}
                </a>
              ))}
              <a href={page.params.permalink} className="h5 d-block my-3">
                {page.params.title}
              </a>
              <div className="mb-3 post-meta">
                <span>By {page.params.author}</span>
                {!page.params.hideDate && (
                  <>
                    <span className="border-bottom border-primary px-2 mx-1" />
                    <span>
                      {page.publishDate.toLocaleDateString('en-US', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </>
                )}
              </div>
              <p className="card-text">{page.params.summary}</p>
              <a href={page.params.permalink} className="btn btn-outline-primary">
                read more
              </a>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};
