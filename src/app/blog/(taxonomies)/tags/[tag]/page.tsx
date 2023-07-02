import { getAllFilesMetadata } from '@/lib/mdx';
import { Paginator } from '@/components/Paginator';
import { PostInfo } from '@/models';
import slugify from '@sindresorhus/slugify';
import { getBlogs } from '@/lib/fetch-utils/getBlogs';

async function getData(tag: string) {
  const allPosts = await getAllFilesMetadata<PostInfo>('blog');

  return allPosts.filter((post) => post.tags?.map((item) => slugify(item)).includes(tag));
}

export default async function Tags({ params }: { params: { tag: string } }) {
  const data = await getData(params.tag);

  return <Paginator pages={data} />;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.tags.map((tag) => ({
    tag: slugify(tag ?? '')
  }));
}
