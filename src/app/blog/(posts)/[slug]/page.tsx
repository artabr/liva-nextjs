import { getFileBySlug } from '@/lib/mdx';
import { SinglePost } from '@/components/SinglePost';
import { getAuthorInfo, getBlogs } from '@/lib/fetch-utils';
import slugify from '@sindresorhus/slugify';

async function getData(slug: string) {
  return getFileBySlug('blog', slug);
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);
  const { authorName } = await getAuthorInfo();

  return <SinglePost {...data} authorName={authorName} />;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.posts.map((post) => ({
    slug: slugify(post.slug ?? '')
  }));
}
