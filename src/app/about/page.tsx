import { AboutPage } from '@/components/AboutPage';
import { getFileBySlug } from '@/lib/mdx';

async function getData() {
  return getFileBySlug('about');
}

export default async function About() {
  const data = await getData();

  return <AboutPage {...data} />;
}
