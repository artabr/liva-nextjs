import { getFileBySlug } from '@/lib/mdx';
import { SinglePost } from '@/components/SinglePost';
import { getBlogs } from '@/lib/fetch-utils/getBlogs';
import slugify from '@sindresorhus/slugify';
import { getBlogLink } from '@/lib/utils';

async function getData(slug: string) {
  return getFileBySlug('blog', slug);
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const blogs = await getBlogs();

  if (blogs.categories.map((item) => slugify(item ?? '')).includes(params.slug)) {
    return <h1>This is a category.</h1>;
  }

  if (blogs.tags.map((item) => slugify(item ?? '')).includes(params.slug)) {
    return <h1>This is a tag.</h1>;
  }

  const data = await getData(params.slug);

  return <SinglePost {...data} />;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  const allPaths = [...blogs.categories, ...blogs.tags, ...blogs.posts.map((post) => getBlogLink(post.slug))];

  return allPaths.map((path) => ({
    slug: slugify(path ?? '')
  }));
}
