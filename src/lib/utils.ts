import { ensureLeadingSlash } from 'next/dist/shared/lib/page-path/ensure-leading-slash';
import { POSTS_PER_PAGE } from '@/lib/constants';

export function getSlugFromFilename(filename: string, contentPath: string, folder?: string) {
  const folderPath = folder ? `/${folder}` : '';

  return filename.replace(`${contentPath}${folderPath}`, '').replace(/\.(mdx|md)/, '');
}

export function getBlogLink(slug: string) {
  return `/blog${ensureLeadingSlash(slug)}`;
}

export function getCategoryLink(slug: string) {
  return `/blog/categories${ensureLeadingSlash(slug)}`;
}

export function getTagLink(slug: string) {
  return `/blog/tags${ensureLeadingSlash(slug)}`;
}

export function getPageLink(page: string) {
  return `/pages${ensureLeadingSlash(page)}`;
}

export function getPageNumbers(itemsNumber: number) {
  return [...Array(Math.ceil(itemsNumber / POSTS_PER_PAGE))].map((_, index) => (index + 1).toString());
}

export function formatPostDate(dateString?: string) {
  return dateString
    ? new Date(dateString).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    : '';
}
