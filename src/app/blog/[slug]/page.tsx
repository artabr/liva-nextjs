import { getFileBySlug } from '@/lib/mdx';
import { SinglePost } from '@/components/SinglePost';
import { getBlogs } from '@/lib/fetch-utils/getBlogs';

async function getData(slug: string) {
  return getFileBySlug('blog', slug);
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const blogs = await getBlogs();

  if (blogs.categories.map((item) => item?.toLowerCase()).includes(params.slug)) {
    return <h1>This is a category.</h1>;
  }

  if (blogs.tags.map((item) => item?.toLowerCase()).includes(params.slug)) {
    return <h1>This is a tag.</h1>;
  }

  const data = await getData(params.slug);

  return <SinglePost {...data} />;
}
