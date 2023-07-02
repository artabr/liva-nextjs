import { getAllFilesMetadata } from '@/lib/mdx';
import { Paginator } from '@/components/Paginator';
import { PostInfo } from '@/models';
import slugify from '@sindresorhus/slugify';
import { getBlogs } from '@/lib/fetch-utils/getBlogs';

async function getData(category: string) {
  const allPosts = await getAllFilesMetadata<PostInfo>('blog');

  return allPosts.filter((post) => post.categories?.map((item) => slugify(item)).includes(category));
}

export default async function Categories({ params }: { params: { category: string } }) {
  const data = await getData(params.category);

  return <Paginator pages={data} />;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.categories.map((category) => ({
    category: slugify(category ?? '')
  }));
}
