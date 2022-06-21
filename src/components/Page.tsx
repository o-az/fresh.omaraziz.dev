/** @jsx h */
import { Head } from '$fresh/runtime.ts';
import { type ComponentChildren, h } from 'preact';
import Header from '@/components/Header.tsx';
import { tw } from '@tw';

export default function Page(
  {
    title,
    links,
    scripts,
    bodyScripts,
    bodyAttributes,
    extraStyleSheet,
    children,
  }: {
    title?: string;
    links?: Array<h.JSX.HTMLAttributes<HTMLLinkElement>>;
    scripts?: Array<h.JSX.HTMLAttributes<HTMLScriptElement>>;
    bodyScripts?: Array<h.JSX.HTMLAttributes<HTMLScriptElement>>;
    bodyAttributes?: Record<string, string>;
    extraStyleSheet?: string;
    children: ComponentChildren;
  },
) {
  let bodyAttrs;
  if (bodyAttributes) {
    const { class: _, ...rest } = bodyAttributes;
    bodyAttrs = rest;
  }
  return (
    <html class='dark'>
      <Head>
        <title>{title || 'Omar Aziz'}</title>
        <script src='https://cdn.tailwindcss.com'></script>
        <script type='module' src='https://cdn.skypack.dev/twind/shim'></script>

        <link rel='stylesheet' href='/index.css' />
        {links?.map((link) => <link {...link} />)}
        {scripts?.map((script) => <script {...script} />)}
        <style type='text/css'>{extraStyleSheet}</style>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='annonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;400;700&family=Inter:wght@200;400;900&family=JetBrains+Mono:wght@200;400;800&display=swap'
          rel='stylesheet'
        />
        <link href='https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css' rel='stylesheet' type='text/css' />
      </Head>
      <body
        class={tw([
          'bg-white dark:bg-[#0b0c13] text-black dark:text-white',
          bodyAttributes?.class ?? '',
        ])}
        {...bodyAttrs}
      >
        <Header />
        {children}
        {bodyScripts?.map((script) => <script {...script} />)}
      </body>
    </html>
  );
}
