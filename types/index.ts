export type Frontmatter = {
  title: string;
  publishedOn: string;
  tags: string[];
  image?: string;
};
export interface ParsedContent {
  html: string;
  frontmatter: Frontmatter;
}

export interface Article {
  filename: string;
  title: string;
  description: string;
  publishedOn: string;
  tags: string[];
  readingTime: string;
}
