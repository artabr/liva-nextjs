import { AboutPage } from '@/components/AboutPage';

export default function About() {
  const title = 'About Us';
  const content =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  // Replace with the actual image URL
  const image = { src: 'https://example.com/about-image.jpg' };

  return <AboutPage title={title} content={content} image={image} />;
}
