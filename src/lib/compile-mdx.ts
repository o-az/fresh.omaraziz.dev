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
import { default as rehypeAutolinkHeadings } from 'https://esm.sh/rehype-autolink-headings@6.1.1';
import { default as rehypeCodeTitles } from 'https://esm.sh/rehype-code-titles@1.1.0';
import { default as rehypeSlug } from 'https://esm.sh/rehype-slug@5.0.1';
import { default as rehypePrism } from 'https://esm.sh/rehype-prism-plus@1.4.1';

// import { default as remarkFrontmatter } from 'https://esm.sh/remark-frontmatter@4.0.1';
// import { remarkMdxFrontmatter } from 'https://esm.sh/remark-mdx-frontmatter@1.1.1';
// import { default as remarkParse } from 'https://esm.sh/remark-parse@10.0.1';
// import { default as remarkRehype } from 'https://esm.sh/remark-rehype@10.1.0';
// import { default as rehypeStringify } from 'https://esm.sh/rehype-stringify@9.0.3';
// import { unified } from 'https://esm.sh/unified@10.1.2';

import { devLogger } from '@/utilities/devLogger.ts';
const basePath = '../data/articles';

async function readFile(filename: string): Promise<string> {
  try {
    const path = new URL(`${basePath}/${filename}.mdx`, import.meta.url);
    return await Deno.readTextFile(path);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : `Encoutered an error: ` + error;
    devLogger(errorMessage);
    throw new Error(errorMessage);
  }
}

export type Frontmatter = { title: string; publishedOn: string; tags: string[]; image?: string };
export interface ParsedContent {
  html: string;
  frontmatter: Frontmatter;
}

export async function getMdxFile(filename: string): Promise<{
  evaluated: ParsedContent;
  compiled: string | unknown;
}> {
  const content = await readFile(filename);
  // const file = await unified()
  //   .use(remarkParse)
  //   .use(remarkRehype)
  //   .use(remarkGfm)
  //   .use(remarkToC)
  //   .use(remarkFrontmatter, ['yaml', 'toml'])
  //   .use(remarkMath)
  //   .use(remarkToC)
  //   .use(rehypePrism)
  //   .use([rehypeAutolinkHeadings, {
  //     settings: {
  //       behavior: 'wrap',
  //       properties: { className: ['anchor'] },
  //     },
  //   }])
  //   .use([rehypeCodeTitles])
  //   .use([rehypeSlug])
  //   .use([rehypeStringify])

  //   .process(content);
  // console.log(file);
  // const mdxCompile = await mdx.compile(content, {
  //   recmaPlugins: [],
  //   remarkRehypeOptions: { allowDangerousHtml: true },
  //   rehypePlugins: [
  //     // rehypeHighlight,
  //     rehypePrism,

  //     [rehypeAutolinkHeadings, {
  //       behavior: 'wrap',
  //       properties: { className: ['anchor'] },
  //     }],
  //     rehypeCodeTitles,
  //     rehypeSlug,
  //     // [rehypePrettyCode.default],
  //   ],
  //   remarkPlugins: [
  //     [remarkGfm, {
  //       singleTilde: true,
  //       tablePipeAlign: true,
  //       stringLength: (str: string) => str.length,
  //     }],
  //     [remarkFrontmatter, ['yaml', 'toml']],
  //     // remarkMdxMathEnhanced,
  //     remarkMdxFrontmatter,
  //     [remarkToC, {
  //       tight: true,
  //       ordered: false,
  //       prefix: '',
  //       skip: undefined,
  //       parents: undefined,
  //       maxDepth: 2,
  //     }],
  //     // remarkShikiTwoslash.default,
  //     remarkMath,
  //     remarkMdxImages,
  //   ],
  //   jsx: true,
  //   useDynamicImport: true,
  //   format: 'detect',
  //   jsxImportSource: 'preact',
  //   outputFormat: 'function-body',
  //   providerImportSource: '@mdx-js/preact',
  // });
  // const { data, dirname, value, history, path, cwd } = mdxCompile;
  // const frontmatter = { tags: [], title: '', publishedOn: '2022-02-02', image: '' } as Frontmatter;
  const { data: frontmatter } = frontMatter(content) as { data: Frontmatter };
  const { default: evaluateMdx } = await mdx.evaluate(content, {
    remarkRehypeOptions: { allowDangerousHtml: true },
    rehypePlugins: [
      rehypePrism,
      [rehypeAutolinkHeadings, {
        behavior: 'wrap',
        properties: { className: ['anchor'] },
      }],
      rehypeCodeTitles,
      rehypeSlug,
    ],
    remarkPlugins: [
      [remarkGfm, {
        singleTilde: true,
        tablePipeAlign: true,
        stringLength: (str: string) => str.length,
      }],
      remarkMdxMathEnhanced,
      [remarkToC, {
        tight: true,
        ordered: false,
        prefix: '',
        skip: undefined,
        parents: undefined,
        maxDepth: 2,
      }],
      remarkMath,
      remarkMdxImages,
    ],
    useDynamicImport: true,
    jsx: preactJsxRuntime.jsx,
    Fragment: preactJsxRuntime.Fragment,
    jsxs: preactJsxRuntime.jsxs,
    format: 'mdx',
    useMDXComponents: false,
  });
  const html = render(createElement(evaluateMdx, {}, {}), {}, { shallow: true, xml: true });
  console.log(html);
  return { evaluated: { html, frontmatter }, compiled: 'value' };
}
