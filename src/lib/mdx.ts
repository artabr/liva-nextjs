import path from 'path';
import fs from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePrismPlus from 'rehype-prism-plus';
import { FileMetadata, FrontMatterMetadata, Post } from '@/models';

import { CONTENT_PATH } from '@/lib/constants';
import { getSlugFromFilename } from '@/lib/utils';

const root = process.cwd();

export async function getAllFilesMetadata(folder: string): Promise<FileMetadata[]> {
  const pattern = `${CONTENT_PATH}/${folder}/**/*.{md,mdx}`;

  const files = await glob(pattern);

  return files.map((file) => {
    const source = fs.readFileSync(file, 'utf8');
    const metadata = matter(source).data as FrontMatterMetadata;
    return {
      ...metadata,
      slug: getSlugFromFilename(file, CONTENT_PATH)
    };
  });
}

export async function getFileBySlug(type: string, slug: string): Promise<Post> {
  const mdxPath = path.join(root, CONTENT_PATH, type, `${slug}.mdx`);
  const mdPath = path.join(root, CONTENT_PATH, type, `${slug}.md`);
  const source = fs.existsSync(mdxPath) ? fs.readFileSync(mdxPath, 'utf8') : fs.readFileSync(mdPath, 'utf8');

  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'esbuild.exe');
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild');
  }

  const { code, frontmatter } = await bundleMDX<FrontMatterMetadata>({
    source,
    cwd: path.join(root, 'components'),
    mdxOptions: (options) => {
      // eslint-disable-next-line no-param-reassign
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath
      ];
      // eslint-disable-next-line no-param-reassign
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        [rehypePrismPlus, { ignoreMissing: true }]
      ];
      return options;
    }
  });

  return {
    ...frontmatter,
    code,
    slug,
    filename: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`
  };
}
