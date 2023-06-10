export type FrontMatterMetadata = {
  title?: string;
  date?: string;
  draft?: boolean;
  image?: string;
  description?: string;
  categories?: string[];
  tags?: string[];
  type?: string;
};

export type FileMetadata = FrontMatterMetadata & {
  slug: string;
};

export type PostMetadata = FileMetadata;
