import './globals.scss';
import { Inter } from 'next/font/google';
import { Navigation, NavigationItem } from '@/components/Header';
import { Newsletter } from '@/components/Newsletter/Newsletter';
import { Footer, FooterProps } from '@/components/Footer';
import { getFileBySlug, getFileMetadata } from '@/lib/mdx';
import { MDXComponent } from '@/components/MDXComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Liva | Personal blog template for Next.js',
  description: `Liva is a modern and fully customizable minimal blog theme that will help you create any kind of website
    whether that's personal, travel, news, photography, tech, food, or other niches.`
};

type HeaderMenuData = {
  items: NavigationItem[];
};

type FooterData = FooterProps;

async function getData() {
  const headerMenu = await getFileMetadata<HeaderMenuData>('_metadata', 'header-menu');
  const footer = await getFileBySlug<FooterData>('_metadata', 'footer');

  return { headerMenu, footer };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { headerMenu, footer } = await getData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation items={headerMenu.items} />
        {children}
        <Newsletter />
        <Footer {...footer}>
          <MDXComponent code={footer.code} />
        </Footer>
      </body>
    </html>
  );
}
