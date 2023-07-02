import { getAllFilesMetadata } from '@/lib/mdx';
import { Paginator } from '@/components/Paginator';
import { Sidebar } from '@/app/components/Sidebar';
import { Pagination } from '@/components/Pagination';
import { getAuthorInfo } from '@/lib/fetch-utils';
import { PostInfo } from '@/models';
import { POSTS_PER_PAGE } from '@/lib/constants';

async function getData() {
  const allPosts = await getAllFilesMetadata<PostInfo>('blog');

  return allPosts.slice(0, POSTS_PER_PAGE);
}

export default async function Blog() {
  const data = await getData();
  const { authorName } = await getAuthorInfo();

  return (
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
  );
}
