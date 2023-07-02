import { ensureLeadingSlash } from 'next/dist/shared/lib/page-path/ensure-leading-slash';

export function getSlugFromFilename(filename: string, contentPath: string, folder?: string) {
  const folderPath = folder ? `/${folder}` : '';

  return filename.replace(`${contentPath}${folderPath}`, '').replace(/\.(mdx|md)/, '');
}

export function getBlogLink(slug: string) {
  return `/blog${ensureLeadingSlash(slug)}`;
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
