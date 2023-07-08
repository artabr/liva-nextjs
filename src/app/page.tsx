import { PostInfo } from '@/models';

import { POSTS_PER_PAGE } from '@/lib/constants';

import { getAuthorInfo } from '@/lib/fetch-utils';

import { getAllFilesMetadata } from '@/lib/mdx';

import { getBlogLink } from '@/lib/utils';

import { FeaturedPost } from '@/components/FeaturedPost';
import { Pagination } from '@/components/Pagination';
import { Paginator } from '@/components/Paginator';
import { PillarPost } from '@/components/PillarPost';

import { Sidebar } from '@/server-components/Sidebar';

export default async function Home() {
  const allPosts = await getAllFilesMetadata<PostInfo>('blog');

  const data = allPosts.slice(0, POSTS_PER_PAGE);
  const { authorName } = await getAuthorInfo();

  const recentPosts = allPosts.filter((post) => post.type === 'featured').slice(0, 3);
  const pillarPost = allPosts.find((post) => post.type === 'pillar');

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
              <FeaturedPost key={getBlogLink(post.slug)} post={post} authorName={authorName} />
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
              <div className="row">
                <Pagination itemsNumber={allPosts.length} parentPath="blog" />
              </div>
            </div>
            {/* @ts-expect-error Async Server Component */}
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
}
