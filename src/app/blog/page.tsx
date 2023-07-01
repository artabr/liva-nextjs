import { getAllFilesMetadata } from '@/lib/mdx';
import { Paginator } from '@/components/Paginator';

async function getData() {
  return getAllFilesMetadata('blog');
}

export default async function Blog() {
  const data = await getData();

  return <Paginator pages={data} />;
}
