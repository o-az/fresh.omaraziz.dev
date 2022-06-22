import { createElement } from 'preact';
import render from 'preact-render-to-string';
import * as preactJsxRuntime from 'https://esm.sh/preact@10.8.1/jsx-runtime';

import * as mdx from 'https://esm.sh/@mdx-js/mdx@2.1.2';
/** MDX Plugins */
import { default as remarkGfm } from 'https://esm.sh/remark-gfm@3.0.1';
import { default as remarkToC } from 'https://esm.sh/remark-toc@8.0.1';
import { default as remarkMath } from 'https://esm.sh/remark-math@5.1.1';
import { remarkMdxImages } from 'https://esm.sh/remark-mdx-images@1.0.3';
import { default as remarkMdxMathEnhanced } from 'https://esm.sh/remark-mdx-math-enhanced@0.0.1-beta.3';
import { parse as frontMatter } from 'https://deno.land/x/frontmatter@v0.1.4/mod.ts';
import {
  default as rehypeAutolinkHeadings,
  Options as RehypeAutolinkHeadings,
} from 'https://esm.sh/rehype-autolink-headings@6.1.1';
import { default as rehypeCodeTitles } from 'https://esm.sh/rehype-code-titles@1.1.0';
import { default as rehypeSlug } from 'https://esm.sh/rehype-slug@5.0.1';
import { default as rehypePrism } from 'https://esm.sh/rehype-prism-plus@1.4.1';

const basePath = '../data/articles';

async function readFile(filename: string): Promise<string> {
  try {
    const path = new URL(`${basePath}/${filename}.mdx`, import.meta.url);
    return await Deno.readTextFile(path);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : `Encoutered an error: ` + error;
    throw new Error(errorMessage);
  }
}

export type Frontmatter = { title: string; publishedOn: string; tags: string[]; image?: string };
export interface ParsedContent {
  html: string;
  frontmatter: Frontmatter;
}

const rehypeAutolinkHeadingsOptions: RehypeAutolinkHeadings = {
  behavior: 'wrap',
  properties: { class: 'anchor' },
};

export async function getMdxFile(filename: string): Promise<ParsedContent> {
  const content = await readFile(filename);
  const { data: frontmatter } = frontMatter(content) as { data: Frontmatter };
  const { default: evaluateMdx } = await mdx.evaluate(content, {
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeSlug,
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
      rehypePrism,
    ],
    remarkPlugins: [
      [remarkGfm, {
        singleTilde: true,
        tablePipeAlign: true,
        stringLength: (str: string) => str.length,
      }],
      remarkMdxMathEnhanced,
      // remarkMath,
      [remarkToC, {
        tight: true,
        ordered: false,
        prefix: '',
        skip: undefined,
        parents: undefined,
        maxDepth: 2,
      }],
      remarkMdxImages,
    ],
    useDynamicImport: true,
    jsx: preactJsxRuntime.jsx,
    Fragment: preactJsxRuntime.Fragment,
    jsxs: preactJsxRuntime.jsxs,
    format: 'mdx',
  });
  const html = render(createElement(evaluateMdx, {}, {}), {}, { shallow: true, xml: true });
  return { html, frontmatter };
}