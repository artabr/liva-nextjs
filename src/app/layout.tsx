import './globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Liva | Personal blog template for Next.js',
  description: `Liva is a modern and fully customizable minimal blog theme that will help you create any kind of website
    whether that's personal, travel, news, photography, tech, food, or other niches.`
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
