import { getAuthorBio } from '@/lib/fetch-utils';

import { AboutPage } from '@/components/AboutPage';

export default async function About() {
	const data = await getAuthorBio();

	return <AboutPage {...data} />;
}
