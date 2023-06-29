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

export type WithSlug<T> = T & {
  slug: string;
};

export type PostFileMetadata = WithSlug<PostMetadata>;

export type WithFiledata<T> = T & {
  code: string;
  filename: string;
};

export type Post = WithFiledata<PostFileMetadata>;
