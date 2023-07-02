import { getAllFilesMetadata } from '@/lib/mdx';
import { Paginator } from '@/components/Paginator';
import { PostInfo } from '@/models';
import { getAuthorInfo, getBlogs } from '@/lib/fetch-utils';
import { POSTS_PER_PAGE } from '@/lib/constants';
import { getPageNumbers } from '@/lib/utils';
import slugify from '@sindresorhus/slugify';
import { Pagination } from '@/components/Pagination';

export default async function Pages({ params }: { params: { category: string; page: string } }) {
  const allPosts = await getAllFilesMetadata<PostInfo>('blog');
  const pageIndex = parseInt(params.page, 10) - 1;
  const allPostsByCategory = allPosts.filter((post) =>
    post.categories?.map((item) => slugify(item)).includes(params.category)
  );
  const data = allPostsByCategory.slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);
  const { authorName } = await getAuthorInfo();

  return (
    <>
      <div className="row">
        <Paginator pages={data} authorName={authorName} />
      </div>
      <div className="row">
        <Pagination
          itemsNumber={allPostsByCategory.length}
          currentPage={Number(params.page)}
          parentPath={`blog/categories/${params.category}`}
        />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return getPageNumbers(blogs.posts.length)
    .slice(1)
    .map((page) => ({
      page
    }));
}
