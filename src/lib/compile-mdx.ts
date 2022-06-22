import { default as remarkGfm } from 'https://esm.sh/remark-gfm@3.0.1';
import { default as remarkToC } from 'https://esm.sh/remark-toc@8.0.1';
import { default as remarkMath } from 'https://esm.sh/remark-math@5.1.1';
import { parse as frontMatter } from 'https://deno.land/x/frontmatter@v0.1.4/mod.ts';
import {
  default as rehypeAutolinkHeadings,
  Options as RehypeAutolinkHeadings,
} from 'https://esm.sh/rehype-autolink-headings@6.1.1';
import { default as rehypeCodeTitles } from 'https://esm.sh/rehype-code-titles@1.1.0';
import { default as rehypeSlug } from 'https://esm.sh/rehype-slug@5.0.1';
import { default as rehypePrism } from 'https://esm.sh/rehype-prism@2.1.2';
import { default as rehypeMathjax } from 'https://esm.sh/rehype-mathjax@4.0.2?bundle';
import type { Frontmatter, ParsedContent } from '@/types/index.ts';
import { readFile } from '@/utilities/index.ts';
import * as Unified from 'https://esm.sh/unified@10.1.2';
import { default as remarkParser } from 'https://esm.sh/remark-parse@10.0.1';
import { default as remarkRehype } from 'https://esm.sh/remark-rehype@10.1.0';
import { default as rehypeStringify } from 'https://esm.sh/rehype-stringify@9.0.3';

const basePath = '../data/articles';

const rehypeAutolinkHeadingsOptions: RehypeAutolinkHeadings = {
  behavior: 'wrap',
  properties: { class: 'anchor' },
};

export async function getMdxFile(filename: string): Promise<ParsedContent> {
  const content = await readFile(`${basePath}/${filename}.mdx`);
  const { data: frontmatter } = frontMatter(content) as { data: Frontmatter };
  const compiledMarkdown = await Unified.unified()
    .use(remarkParser as Unified.Plugin)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(remarkToC)
    .use(remarkMath)
    .use(rehypeStringify as Unified.Plugin)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions)
    .use(rehypeCodeTitles)
    .use(rehypePrism)
    .process(content);
  const { value: html } = compiledMarkdown;
  return { html: String(html), frontmatter };
}
