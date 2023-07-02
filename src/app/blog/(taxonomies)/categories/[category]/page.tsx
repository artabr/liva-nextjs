import { getAllFilesMetadata } from '@/lib/mdx';
import { Paginator } from '@/components/Paginator';
import { PostInfo } from '@/models';
import slugify from '@sindresorhus/slugify';
import { getAuthorInfo, getBlogs } from '@/lib/fetch-utils';

async function getData(category: string) {
  const allPosts = await getAllFilesMetadata<PostInfo>('blog');

  return allPosts.filter((post) => post.categories?.map((item) => slugify(item)).includes(category));
}

export default async function Categories({ params }: { params: { category: string } }) {
  const data = await getData(params.category);
  const { authorName } = await getAuthorInfo();

  return <Paginator pages={data} authorName={authorName} />;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.categories.map((category) => ({
    category: slugify(category ?? '')
  }));
}
