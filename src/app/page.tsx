import { RecentPost } from '@/components/RecentPost';
import { getAllFilesMetadata } from '@/lib/mdx';
import { PillarPost } from '@/components/PillarPost';
import { PostInfo } from '@/models';
import { Paginator } from '@/components/Paginator';
import { Sidebar } from '@/server-components/Sidebar';
import { Pagination } from '@/components/Pagination';
import { getBlogLink } from '@/lib/utils';
import { getAuthorInfo } from '@/lib/fetch-utils';

async function getData() {
  return getAllFilesMetadata<PostInfo>('blog');
}

export default async function Home() {
  const data = await getData();
  const { authorName } = await getAuthorInfo();

  const recentPosts = data.filter((post) => post.type === 'featured').slice(0, 3);
  const pillarPost = data.find((post) => post.type === 'pillar');

  return (
    <div>
      <section className="section-sm">
        <div className="container">
          <div className="row justify-content-center">
            {pillarPost && <PillarPost post={pillarPost} authorName={authorName} />}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {recentPosts.map((post) => (
              <RecentPost key={getBlogLink(post.slug)} post={post} authorName={authorName} />
            ))}
          </div>
        </div>
      </section>
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="row">
                <Paginator pages={data} authorName={authorName} />
              </div>
            </div>
            {/* @ts-expect-error Async Server Component */}
            <Sidebar />
            <div className="col-12 mt-5">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
