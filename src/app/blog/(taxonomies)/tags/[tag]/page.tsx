import { getAllFilesMetadata } from '@/lib/mdx';
import { Paginator } from '@/components/Paginator';
import { PostInfo } from '@/models';
import slugify from '@sindresorhus/slugify';
import { getAuthorInfo, getBlogs } from '@/lib/fetch-utils';
import { POSTS_PER_PAGE } from '@/lib/constants';
import { Pagination } from '@/components/Pagination';

export default async function Tags({ params }: { params: { tag: string } }) {
  const allPosts = await getAllFilesMetadata<PostInfo>('blog');
  const allPostsByTag = allPosts.filter((post) => post.tags?.map((item) => slugify(item)).includes(params.tag));
  const data = allPostsByTag.slice(0, POSTS_PER_PAGE);
  const { authorName } = await getAuthorInfo();

  return (
    <>
      <div className="row">
        <Paginator pages={data} authorName={authorName} />
      </div>
      <div className="row">
        <Pagination itemsNumber={allPostsByTag.length} parentPath={`blog/tags/${params.tag}`} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.tags.map((tag) => ({
    tag: slugify(tag ?? '')
  }));
}
