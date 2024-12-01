export type FrontMatter = {
  title?: string;
  type?: string;
  [key: string]: unknown;
};

export type PostInfo = FrontMatter & {
  date?: string;
  draft?: boolean;
  image?: string;
  summary?: string;
  categories?: string[];
  tags?: string[];
};

export type FileInfo = {
  slug: string;
};

export type PostFileInfo = PostInfo & FileInfo;

export type FileContent = {
  code: string;
};

export type Post = PostFileInfo & FileContent;

export type IconLink = {
  title: string;
  url: string;
  icon: string;
};

export type SiteInfo = {
  socialLinks: IconLink[];
};

export type AuthorInfo = FrontMatter & {
  authorName: string;
  summary: string;
  image: string;
};
