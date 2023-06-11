export function getSlugFromFilename(filename: string, contentPath: string) {
  return filename.replace(contentPath, '').replace(/\.(mdx|md)/, '');
}
