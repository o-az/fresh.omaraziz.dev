import { createElement } from "preact";
import render from "preact-render-to-string";

import {
  frontMatter,
  mdx,
  preactJsxRuntime,
  type RehypeAutolinkHeadings,
  rehypeAutolinkHeadings,
  rehypeCodeTitles,
  rehypePrism,
  rehypeSlug,
  remarkGfm,
  remarkMath,
  remarkMdxImages,
  remarkMdxMathEnhanced,
  remarkToC,
} from "./packages.ts";

const basePath = "../data/articles";

async function readFile(filename: string): Promise<string> {
  try {
    const path = new URL(`${basePath}/${filename}.mdx`, import.meta.url);
    return await Deno.readTextFile(path);
  } catch (error) {
    const errorMessage = error instanceof Error
      ? error.message
      : `Encoutered an error: ` + error;
    throw new Error(errorMessage);
  }
}

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

const rehypeAutolinkHeadingsOptions: RehypeAutolinkHeadings = {
  behavior: "wrap",
  properties: { class: "anchor" },
};

export async function getMdxFile(filename: string): Promise<ParsedContent> {
  const content = await readFile(filename);
  const { data: frontmatter } = frontMatter(content) as { data: Frontmatter };
  const { default: evaluateMdx } = await mdx.evaluate(content, {
    // remarkRehypeOptions: { allowDangerousHtml: true },
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
      remarkMath,
      [remarkToC, {
        tight: true,
        ordered: false,
        prefix: "",
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
    format: "mdx",
    // useMDXComponents: false,
  });
  const html = render(createElement(evaluateMdx, {}, {}), {}, {
    shallow: true,
    xml: true,
  });
  return { html, frontmatter };
}
