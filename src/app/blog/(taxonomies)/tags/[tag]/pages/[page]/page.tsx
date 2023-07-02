import { getAllFilesMetadata } from '@/lib/mdx';
import { Paginator } from '@/components/Paginator';
import { PostInfo } from '@/models';
import { getAuthorInfo, getBlogs } from '@/lib/fetch-utils';
import { POSTS_PER_PAGE } from '@/lib/constants';
import { getPageNumbers } from '@/lib/utils';
import slugify from '@sindresorhus/slugify';

async function getData(tag: string, page: string) {
  const allPosts = await getAllFilesMetadata<PostInfo>('blog');
  const pageIndex = parseInt(page, 10) - 1;

  return allPosts
    .filter((post) => post.tags?.map((item) => slugify(item)).includes(tag))
    .slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);
}

export default async function Pages({ params }: { params: { tag: string; page: string } }) {
  const data = await getData(params.tag, params.page);
  const { authorName } = await getAuthorInfo();

  return <Paginator pages={data} authorName={authorName} />;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return getPageNumbers(blogs.posts.length).map((page) => ({
    page
  }));
}
