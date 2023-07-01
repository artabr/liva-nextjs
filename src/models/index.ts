export type FrontMatterMetadata = {
  title?: string;
  type?: string;
  [key: string]: unknown;
};

export type PostMetadata = FrontMatterMetadata & {
  date?: string;
  draft?: boolean;
  image?: string;
  description?: string;
  categories?: string[];
  tags?: string[];
};

export type FileData = {
  slug: string;
};

export type PostFileMetadata = PostMetadata & FileData;

export type FileContent = {
  code: string;
};

export type Post = PostFileMetadata & FileContent;

export type IconLink = {
  title: string;
  url: string;
  icon: string;
};
