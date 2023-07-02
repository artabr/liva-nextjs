import { getFileBySlug } from '@/lib/mdx';
import { SinglePost } from '@/components/SinglePost';
import { getBlogs } from '@/lib/fetch-utils/getBlogs';
import slugify from '@sindresorhus/slugify';

async function getData(slug: string) {
  return getFileBySlug('blog', slug);
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  return <SinglePost {...data} />;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.posts.map((post) => ({
    slug: slugify(post.slug ?? '')
  }));
}
