import { RecentPost } from '@/components/RecentPost';
import { BlogPosts } from '@/components/BlogPosts';
import { getAllFilesMetadata } from '@/lib/mdx';

async function getData() {
  return getAllFilesMetadata('blog');
}

export default async function Home() {
  const data = await getData();

  const recentPosts = data.slice(0, 3);

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            {recentPosts.map((post) => (
              <RecentPost key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <BlogPosts pages={data} />
    </div>
  );
}
