import { getAllFilesMetadata } from '@/lib/mdx';
import { Paginator } from '@/components/Paginator';
import { PostInfo } from '@/models';
import slugify from '@sindresorhus/slugify';
import { getAuthorInfo, getBlogs } from '@/lib/fetch-utils';
import { POSTS_PER_PAGE } from '@/lib/constants';
import { Pagination } from '@/components/Pagination';

export default async function Categories({ params }: { params: { category: string } }) {
  const allPosts = await getAllFilesMetadata<PostInfo>('blog');
  const allPostsByCategory = allPosts.filter((post) =>
    post.categories?.map((item) => slugify(item)).includes(params.category)
  );
  const data = allPostsByCategory.slice(0, POSTS_PER_PAGE);
  const { authorName } = await getAuthorInfo();

  return (
    <>
      <div className="row">
        <Paginator pages={data} authorName={authorName} />
      </div>
      <div className="row">
        <Pagination itemsNumber={allPostsByCategory.length} parentPath={`blog/categories/${params.category}`} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.categories.map((category) => ({
    category: slugify(category ?? '')
  }));
}
