import { BlogPosts } from '@/components/BlogPosts';
import { getAllFilesMetadata } from '@/lib/mdx';

async function getData() {
  return getAllFilesMetadata('blog');
}

export default async function Blog() {
  const data = await getData();

  return <BlogPosts pages={data} />;
}
