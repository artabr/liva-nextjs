export const data = {
  paginator: {
    pages: [
      {
        params: {
          image: 'https://example.com/image.jpg',
          categories: ['category1', 'category2'],
          permalink: 'https://example.com/post1',
          title: 'Post 1',
          summary: 'This is the summary of Post 1',
          hideDate: false
        },
        site: {
          params: {
            author: 'John Doe'
          }
        },
        publishDate: new Date()
      },
      {
        params: {
          image: null,
          categories: ['category3'],
          permalink: 'https://example.com/post2',
          title: 'Post 2',
          summary: 'This is the summary of Post 2',
          hideDate: true
        },
        site: {
          params: {
            author: 'Jane Smith'
          }
        },
        publishDate: new Date()
      }
      // Add more pages here if needed
    ]
  }
};
