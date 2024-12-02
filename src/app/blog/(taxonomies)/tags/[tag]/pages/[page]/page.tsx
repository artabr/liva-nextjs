import slugify from '@sindresorhus/slugify';

import type { PostInfo } from '@/models';

import { POSTS_PER_PAGE } from '@/lib/constants';

import { getAuthorInfo, getBlogs } from '@/lib/fetch-utils';
import { getAllFilesMetadata } from '@/lib/mdx';
import { getPageNumbers } from '@/lib/utils';

import { Pagination } from '@/components/Pagination';
import { Paginator } from '@/components/Paginator';

export default async function Pages({
  params,
}: { params: { tag: string; page: string } }) {
  const allPosts = await getAllFilesMetadata<PostInfo>('blog');
  const pageIndex = Number.parseInt(params.page, 10) - 1;
  const allPostsByTag = allPosts.filter((post) =>
    post.tags?.map((item) => slugify(item)).includes(params.tag),
  );
  const data = allPostsByTag.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE,
  );
  const { authorName } = await getAuthorInfo();

  return (
    <>
      <div className="row">
        <Paginator pages={data} authorName={authorName} />
      </div>
      <div className="row">
        <Pagination
          itemsNumber={allPosts.length}
          currentPage={Number(params.page)}
          parentPath={`blog/tags/${params.tag}`}
        />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.tags.flatMap((tag) => {
    const postsByTag = blogs.posts.filter((post) => post.tags?.includes(tag));
    const pageNumbers = getPageNumbers(postsByTag.length);

    return pageNumbers.slice(1).map((page) => ({
      tag,
      page,
    }));
  });
}
