/** @jsx h */
import { Head } from "$fresh/runtime.ts";
import { type ComponentChildren, h } from "preact";
import Header from "@/components/Header.tsx";
import { tw } from "@tw";

export default function Page(
  {
    title,
    stylesheets,
    scripts,
    bodyScripts,
    bodyAttributes,
    children,
  }: {
    title?: string;
    stylesheets?: Array<string>;
    scripts?: Array<string>;
    bodyScripts?: Array<string>;
    bodyAttributes?: Record<string, string>;
    children: ComponentChildren;
  },
) {
  return (
    <html class="dark">
      <Head>
        <title>{title || "Omar Aziz"}</title>
        {/* <link href="/favicon.ico" rel="icon" type="image/x-icon" /> */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script type="module" src="https://cdn.skypack.dev/twind/shim"></script>
        <link rel="stylesheet" href="/index.css" />

        {stylesheets?.map((href) => (
          <link href={href} type="text/css" rel="stylesheet" />
        ))}
        {scripts?.map((src) => <script src={src} />)}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="annonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;400;700&family=Inter:wght@200;400;900&family=JetBrains+Mono:wght@200;400;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        class={tw([
          "bg-white dark:bg-[#0b0c13] text-black dark:text-white",
        ])}
      >
        <Header />
        {children}
        {bodyScripts?.map((src) => <script src={src} />)}
      </body>
    </html>
  );
}
