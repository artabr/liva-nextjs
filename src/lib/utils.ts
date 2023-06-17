export function getSlugFromFilename(filename: string, contentPath: string) {
  return filename.replace(contentPath, '').replace(/\.(mdx|md)/, '');
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
