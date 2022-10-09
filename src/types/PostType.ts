import type {MarkdownContent, MarkdownInstance} from 'astro';

export interface PostAutoGeneratedMetadata {
  /** ex. "3 min read" */
  minutesRead: string;
}

export interface PostMetadata extends PostAutoGeneratedMetadata {
  title: string;
  description: string;
  /** ex. "2022-02-30" or "2022-02-30T01:23:45.678Z" */
  publishDate: string;
  /** default : `true` */
  toc?: boolean;
  heroImage?: string | undefined;
  tags: string[];
  series?: string;
  comments?: boolean;
}

export type PostContent = MarkdownContent<PostMetadata>;
export type PostInstance = MarkdownInstance<PostMetadata>;

export interface Heading {
  depth: number;
  slug: string;
  text: string;
}
