import { getFileBySlug } from '@/lib/mdx';
import { SinglePost } from '@/components/SinglePost';

async function getData(slug: string) {
  return getFileBySlug('blog', slug);
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  return <SinglePost {...data} />;
}
