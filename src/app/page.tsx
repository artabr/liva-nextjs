import { RecentPost } from '@/components/RecentPost';
import { BlogPosts } from '@/components/BlogPosts';
import { getAllFilesMetadata } from '@/lib/mdx';

const recentPosts = [
  {
    id: '1',
    title: 'How to use React Context effectively',
    url: '/blog/how-to-use-react-context-effectively'
  },
  {
    id: '2',
    title: 'How to use React Context effectively',
    url: '/blog/how-to-use-react-context-effectively'
  },
  {
    id: '3',
    title: 'How to use React Context effectively',
    url: '/blog/how-to-use-react-context-effectively'
  }
];

async function getData() {
  return getAllFilesMetadata('blog');
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            {recentPosts.map((post) => (
              <RecentPost
                key={post.id}
                id={post.id}
                title={post.title}
                url={post.url}
                author="Art"
                publishedDate="2021-01-01"
              />
            ))}
          </div>
        </div>
      </section>
      <BlogPosts pages={data} />
    </div>
  );
}
