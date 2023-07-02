import { AboutPage } from '@/components/AboutPage';
import { getAuthorBio } from '@/lib/fetch-utils';

export default async function About() {
  const data = await getAuthorBio();

  return <AboutPage {...data} />;
}
