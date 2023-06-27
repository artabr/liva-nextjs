import { RecentPost } from '@/components/RecentPost';
import { BlogPosts } from '@/components/BlogPosts';
import { getAllFilesMetadata } from '@/lib/mdx';
import { PillarPost } from '@/components/PillarPost';

async function getData() {
  return getAllFilesMetadata('blog');
}

export default async function Home() {
  const data = await getData();

  const recentPosts = data.filter((post) => post.type === 'featured').slice(0, 3);
  const pillarPost = data.find((post) => post.type === 'pillar');

  return (
    <div>
      <section className="section-sm">
        <div className="container">
          <div className="row justify-content-center">{pillarPost && <PillarPost post={pillarPost} />}</div>
        </div>
      </section>
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
