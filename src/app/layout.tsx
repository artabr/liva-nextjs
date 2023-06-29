import './globals.scss';
import { Inter } from 'next/font/google';
import { Navigation, NavigationItem } from '@/components/Header';
import { Newsletter } from '@/components/Newsletter/Newsletter';
import { Footer } from '@/components/Footer';
import { getFileMetadata } from '@/lib/mdx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Liva | Personal blog template for Next.js',
  description: `Liva is a modern and fully customizable minimal blog theme that will help you create any kind of website
    whether that's personal, travel, news, photography, tech, food, or other niches.`
};

type HeaderMenu = {
  items: NavigationItem[];
};

async function getData() {
  return getFileMetadata<HeaderMenu>('_metadata', 'header-menu');
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation items={data.items} />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
