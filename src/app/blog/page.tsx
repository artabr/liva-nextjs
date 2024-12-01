import { Sidebar } from '@/app/components/Sidebar';

import type { PostInfo } from '@/models';

import { POSTS_PER_PAGE } from '@/lib/constants';

import { getAuthorInfo } from '@/lib/fetch-utils';

import { getAllFilesMetadata } from '@/lib/mdx';

import { Pagination } from '@/components/Pagination';
import { Paginator } from '@/components/Paginator';

export default async function Blog() {
  const allPosts = await getAllFilesMetadata<PostInfo>('blog');

  const data = allPosts.slice(0, POSTS_PER_PAGE);
  const { authorName } = await getAuthorInfo();

  return (
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
  );
}
