import { Page } from '@/components/Paginator';

export const pages: Page[] = [
  {
    title: 'Post 1',
    publishDate: new Date(),
    params: {
      image: 'https://example.com/image.jpg',
      categories: [
        { id: '1', title: 'category1' },
        { id: '2', title: 'category2' }
      ],
      permalink: 'https://example.com/post1',
      summary: 'This is the summary of Post 1',
      hideDate: false,
      author: 'John Doe'
    }
  },
  {
    title: 'Post 2',
    publishDate: new Date(),
    params: {
      image: 'https://example.com/image.jpg',
      categories: [{ id: '3', title: 'category3' }],
      permalink: 'https://example.com/post2',
      summary: 'This is the summary of Post 2',
      hideDate: true,
      author: 'Jane Smith'
    }
  }
];
