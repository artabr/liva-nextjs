import Link from 'next/link';

export const SearchList = () => {
  const mockData = [
    {
      id: 'mock-key',
      link: 'https://mock-link.com',
      title: 'Mock Title',
      snippet: 'Mock snippet',
      tags: 'Mock Tags',
      categories: 'Mock Categories'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {mockData.map((item) => (
              <div className="py-4 border-bottom" key={`summary-${item.id}`}>
                <h4>
                  <Link href={item.link}>{item.title}</Link>
                </h4>
                <p>{item.snippet}</p>
                {item.tags && <p>Tags: {item.tags}</p>}
                {item.categories && <p>Categories: {item.categories}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
