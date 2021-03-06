import { Handlers } from "$fresh/server.ts";

const CSS = /* css */ `
/** Hack to get around botched TOC */
hr, ol > li:first-child, hr, ul > li:first-child, hr + h2 {
  display: none;
  visibility: hidden;
}

:root {
  --article-background-dark: rgb(29, 225, 49);
  --article-background-light: hsla(244, 49.5%, 97%, 11)
}

p {
  padding: 5px;
}

main,article,p,div {
  white-space:pre-line;
  word-break:break-all;
  overflow:auto;
}

*[class*=prose] h1,
*[class*=prose] h2,
*[class*=prose] h3,
*[class*=prose] h4,
*[class*=prose] h5 {
  font-family: Inter !important;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 1.25rem !important;
  margin-bottom: 1.25rem !important;
  --tw-text-opacity: 1;
  width: 100%;
}
*[class*=prose] h1:hover,
*[class*=prose] h2:hover,
*[class*=prose] h3:hover,
*[class*=prose] h4:hover,
*[class*=prose] h5:hover {
  cursor: pointer;
}
.dark *[class*=prose] h1:hover,
.dark *[class*=prose] h2:hover,
.dark *[class*=prose] h3:hover,
.dark *[class*=prose] h4:hover,
.dark *[class*=prose] h5:hover {
  --tw-text-opacity: 1;
  /* color: rgba(255, 255, 255, var(--tw-text-opacity)); */
}

[data-article-title] {
  will-change: transform;
  background: linear-gradient(-45deg, #91aadb, #ffdcd0, #a99ede);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

[data-article-title]::selection {
  background-color: linear-gradient(-45deg, #2b00ff, #fd4c11, #eaff00);
  -webkit-text-fill-color: initial;
}
@keyframes gradient {
  0% {
    background-position: 90% 50%;
  }
  50% {
    background-position: 150% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

* {
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  max-width: 100%;
}

html.dark [data-theme=light],
html.light [data-theme=dark] {
  display: none;
  visibility: hidden;
}

[data-line-numbers] {
  counter-reset: line;
}

[data-line-numbers] > .line:before {
  counter-increment: line;
  content: counter(line);
  text-align: justify;
  display: inline-block;
  text-align: right;
  --tw-text-opacity: 1;
  color: rgba(209, 213, 219, var(--tw-text-opacity));
  --tw-ordinal: var(--tw-empty, );
  --tw-slashed-zero: var(--tw-empty, );
  --tw-numeric-figure: var(--tw-empty, );
  --tw-numeric-spacing: tabular-nums;
  --tw-numeric-fraction: var(--tw-empty, );
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  margin-right: 8px;
}
[data-line-numbers] > .line:before:hover {
  --tw-text-opacity: 1;
  color: rgba(243, 244, 246, var(--tw-text-opacity));
}
@media (min-width: 640px) {
  [data-line-numbers] > .line:before {
    margin-right: 12px;
  }
}
p,
span {
  max-width: 100%;
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
}
.dark p,
.dark span {
  --tw-text-opacity: 1;
  color: rgba(243, 244, 246, var(--tw-text-opacity));
}
pre {
  width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  font-size: 16px !important;
}
svg,
g {
  color: red @apply w-full h-full;
}
pre[class*=language-] {
  width: 100%;
  margin: 25px 0 25px 0 !important;
}
*[class*=prose] pre[class*=language-] {
  background-color: transparent;
  max-width: 100%;
  overflow-x: auto;
  word-break: break-all;
}
*[class*=prose] div[data-rehype-pretty-code-fragment] {
  font-family: JetBrains Mono;
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
  border-radius: .5rem;
  border-width: 1px;
  font-weight: 200;
  font-size: .875rem;
  line-height: 1.25rem;
  line-height: 1.55rem;
  margin-top: .75rem;
  margin-bottom: .75rem;
  max-width: 100%;
  min-width: 100%;
  overflow: hidden;
  padding: .25rem;
  width: 100%
}
.dark *[class*=prose] div[data-rehype-pretty-code-fragment] {
  --tw-bg-opacity: .2;
  background-color: rgba(64, 64, 64, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(24, 24, 27, var(--tw-border-opacity))
}
*[class*=prose] div[data-rehype-pretty-code-fragment]:hover {
  border-width: 1px;
  cursor: text
}
@media (min-width: 640px) {
  *[class*=prose] div[data-rehype-pretty-code-fragment] {
    border-radius: .375rem;
    font-size: 1rem;
    line-height: 1.5rem
  }
}
*[class*=prose] > p ~ div {
  margin-top: .5rem
}
[data-rehype-pretty-code-title] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  font-size: .875rem;
  line-height: 1.25rem;
  padding-left: .5rem;
  padding-right: .5rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  --tw-border-opacity: 1;
  border-color: rgba(212, 212, 216, var(--tw-border-opacity));
  border-radius: 0;
  border-bottom-width: 1px;
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity))
}
.dark [data-rehype-pretty-code-title] {
  background-color: transparent;
  --tw-border-opacity: 1;
  border-color: rgba(24, 24, 27, var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity))
}
[data-rehype-pretty-code-title][data-language]:after {
  content: " "attr(data-language);
  margin-left: auto;
  text-align: right;
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity));
  text-transform: uppercase
}
span.line *::selection,
span.line::selection,
span.line > span *::selection,
span.line > span::selection {
  --tw-bg-opacity: 1;
  background-color: rgba(251, 207, 232, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity))
}
span.line,
span.line > span {
  max-width: 100%;
  overflow: auto;
  -webkit-user-select: all;
  -moz-user-select: all;
  -ms-user-select: all;
  user-select: all;
  white-space: pre;
  word-break: break-all
}
*[class*=prose] > ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  --tw-ordinal: var(--tw-empty, );
  --tw-slashed-zero: var(--tw-empty, );
  --tw-numeric-figure: var(--tw-empty, );
  --tw-numeric-spacing: tabular-nums;
  --tw-numeric-fraction: var(--tw-empty, );
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)
}
*[class*=prose] > p {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  white-space: pre-line;
  overflow-wrap: break-word;
  margin-bottom: 0
}
.dark .anchor:hover {
  --tw-text-opacity: 1;
  color: rgba(226, 232, 240, var(--tw-text-opacity))
}
.anchor:hover {
  visibility: visible
}
*[class*=prose] code:after,
*[class*=prose] code:before {
  display: none
}
*[class*=prose] .anchor {
  --tw-text-opacity: 1;
  color: rgba(82, 82, 91, var(--tw-text-opacity));
  text-underline-offset: 8px;
  text-decoration: none
}
.dark *[class*=prose] .anchor {
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity))
}
.dark *[class*=prose] .anchor:hover {
  --tw-text-opacity: 1;
  color: rgba(226, 232, 240, var(--tw-text-opacity))
}
*[class*=prose] .anchor:hover {
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline
}
*[class*=prose] a {
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgba(71, 85, 105, var(--tw-text-opacity));
  --tw-text-decoration-opacity: .6;
  -webkit-text-decoration-color: rgba(242, 242, 242, var(--tw-text-decoration-opacity));
  text-decoration-color: rgba(242, 242, 242, var(--tw-text-decoration-opacity));
  text-underline-offset: 4px;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}
.dark *[class*=prose] a {
  --tw-text-opacity: 1;
  color: rgba(226, 232, 240, var(--tw-text-opacity))
}
*[class*=prose] a:hover {
  --tw-text-opacity: 1;
  color: rgba(59, 130, 246, var(--tw-text-opacity));
  text-decoration: none
}
.prose .anchor {
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  /* margin-left: -.5rem; */
  max-width: 700px;
  /* padding-right: .5rem */
}
.prose a {
  width: 100%;
  -webkit-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  -o-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  -webkit-transition-duration: .15s;
  -o-transition-duration: .15s;
  transition-duration: .15s
}
.anchor:before {
  --tw-text-opacity: 1;
  color: rgba(209, 213, 219, var(--tw-text-opacity));
  font-size: 1.25rem;
  line-height: 1.75rem;
  /* margin-right: .375rem; */
  padding-right: 0.6rem;
  content: "#";
}

.dark .anchor:before {
  --tw-text-opacity: 1;
  color: rgba(100, 116, 139, var(--tw-text-opacity))
}
.anchor:before:hover {
  --tw-text-opacity: 1;
  color: rgba(226, 232, 240, var(--tw-text-opacity))
}

.dark .prose *:hover > .anchor {
  --tw-text-opacity: 1;
  color: rgba(244, 244, 245, var(--tw-text-opacity))
}

.prose *:hover > .anchor {
  visibility: visible;
}

*[class*=prose] pre code {
  border: initial;
}

*[class*=prose] > :first-child {
  margin-top: 1.25em !important;
  margin-bottom: 1.25em !important;
}

.token.comment {
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
}
.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(244, 114, 182, var(--tw-text-opacity));
}
.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  --tw-text-opacity: 1;
  color: rgba(167, 139, 250, var(--tw-text-opacity));
}
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  --tw-text-opacity: 1;
  color: rgba(245, 158, 11, var(--tw-text-opacity))
}
.token.keyword {
  --tw-text-opacity: 1;
  color: rgba(124, 58, 237, var(--tw-text-opacity));
}
.token.atrule,
.token.attr-value {
  --tw-text-opacity: 1;
  color: rgba(16, 185, 129, var(--tw-text-opacity));
}
.token.function,
.token.class-name {
  --tw-text-opacity: 1;
  color: rgba(236, 72, 153, var(--tw-text-opacity));
}
.token.regex,
.token.important,
.token.variable {
  --tw-text-opacity: 1;
  color: rgba(245, 158, 11, var(--tw-text-opacity));
}
code[class*=language-],
pre[class*=language-] {
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
}
.dark code[class*=language-],
.dark pre[class*=language-] {
  --tw-text-opacity: 1;
  color: rgba(249, 250, 251, var(--tw-text-opacity));
}
pre::-webkit-scrollbar {
  display: none;
}
input[type=text],
input[type=email] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
svg {
  --tw-text-opacity: 1;
  color: rgba(253, 253, 253, var(--tw-text-opacity));
}
.step > h3 {
  margin-top: 0;
  margin-bottom: 0;
}
.dark *[class*=prose] > p {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
*[class*=prose] .tweet a {
  text-decoration: inherit;
  font-weight: inherit
}
#table-of-contents {
  font-size: 1.2rem;
  line-height: 1;
  margin-top: 1.5rem !important;
  margin-bottom: 0 !important
}
ol > li > a {
  --tw-text-opacity: 1 !important;
  color: rgba(121, 130, 255, var(--tw-text-opacity)) !important;
}
table {
  display: block;
  max-width: fit-content;
  overflow-x: auto;
  white-space: nowrap
}
a[title=link] {
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgba(96, 165, 250, var(--tw-text-opacity));
  --tw-text-decoration-opacity: 1;
  -webkit-text-decoration-color: rgba(242, 242, 242, var(--tw-text-decoration-opacity));
  text-decoration-color: rgba(242, 242, 242, var(--tw-text-decoration-opacity));
  text-underline-offset: 4px;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}
a[title=link]:hover {
  --tw-text-opacity: 1;
  color: rgba(59, 130, 246, var(--tw-text-opacity));
  text-decoration: none
}
h1 {
  font-family: Inter;
  font-size: 2.25rem;
  line-height: 2.5rem
}
.capsize:before {
  content: "";
  margin-bottom: -.098em;
  display: table
}
.capsize:after {
  content: "";
  margin-top: -.219em;
  display: table
}
.skip-nav {
  padding: .75rem 1rem;
  position: absolute;
  left: -25%;
  top: -2rem;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-translate-z: 0;
  --tw-rotate: 0;
  --tw-rotate-x: 0;
  --tw-rotate-y: 0;
  --tw-rotate-z: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scale-z: 1;
  -webkit-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));
  -ms-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));
  transform: translate(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));
  --tw-translate-y: -3rem;
  -webkit-transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  -o-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  -webkit-transition-duration: .15s;
  -o-transition-duration: .15s;
  transition-duration: .15s;
  -webkit-transition-duration: .2s;
  -o-transition-duration: .2s;
  transition-duration: .2s
}

.skip-nav:focus {
  top: 1rem;
  --tw-translate-y: .75rem
}

#skip {
  scroll-margin-top: 1.125rem
}

@supports not (backdrop-filter: none) {
  .sticky-nav {
    backdrop-filter: none;
    --tw-bg-opacity: 1
  }
}

.prose pre,
pre[class*=shiki] {
  --tw-bg-opacity: 1;
  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
  border-radius: .375rem;
  border-width: 1px;
  margin-top: .75rem;
  margin-bottom: .75rem;
  padding: .75rem
}

.dark .prose pre,
.dark pre[class*=shiki] {
  --tw-bg-opacity: 1 !important;
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity)) !important;
  --tw-border-opacity: 1;
  border-color: rgba(31, 41, 55, var(--tw-border-opacity))
}

.prose p > code {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
  border-radius: .5rem;
  font-weight: 200;
  padding: .25rem;
  --tw-text-opacity: 1;
  color: rgba(244, 114, 182, var(--tw-text-opacity));
  letter-spacing: .05em
}

.prose p > code:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity))
}

.dark .prose p > code {
  --tw-bg-opacity: 1;
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity))
}

.dark .prose p > code:hover {
  background-color: transparent;
  --tw-border-opacity: 1;
  border-color: rgba(17, 24, 39, var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity))
}

.prose p > code *::selection,
.prose p > code::selection {
  --tw-text-opacity: 1;
  color: rgba(75, 85, 99, var(--tw-text-opacity))
}

p {
  overflow: hidden !important;
  word-break: break-all;
}

.prose pre code {
  padding: 0;
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
  border: initial
}

.dark .prose pre code {
  --tw-text-opacity: 1;
  color: rgba(229, 231, 235, var(--tw-text-opacity))
}

.prose img {
  margin: 0;
}

.prose > :first-child {
  margin-top: 1.25em !important;
  margin-bottom: 1.25em !important
}

.rehype-code-title {
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  border-width: 1px;
  border-bottom-width: 0px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-weight: 700;
  font-size: .875rem;
  line-height: 1.25rem;
  padding: .75rem 1.25rem;
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity))
}

.dark .rehype-code-title {
  --tw-bg-opacity: 1;
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(55, 65, 81, var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(229, 231, 235, var(--tw-text-opacity))
}

.rehype-code-title + pre {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: 0
}

.highlight-line {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(59, 130, 246, var(--tw-border-opacity));
  border-left-width: 4px;
  display: block;
  /* margin-left: -1rem; */
  /* margin-right: -1rem; */
  padding-left: 1rem;
  padding-right: 1rem
}
.dark .highlight-line {
  --tw-bg-opacity: 1;
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity))
}

.metric-card > a {
  text-decoration: none
}

.metric-card > p {
  margin-top: .5rem;
  margin-bottom: .5rem
}

.prose .tweet a {
  text-decoration: inherit;
  font-weight: inherit
}

.prose .callout > p {
  margin: 0 !important
}

[data-article-title] {
  will-change: transform;
  background: linear-gradient(-45deg, #91aadb, #ffdcd0, #a99ede);
  background-size: 400% 400%;
  animation: svelte-hhn14x-gradient 15s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
}

[data-article-title]::selection {
  background-color: linear-gradient(-45deg, #2b00ff, #fd4c11, #eaff00);
  -webkit-text-fill-color: initial
}

@keyframes svelte-hhn14x-gradient {
  0% {
    background-position: 90% 50%
  }
  50% {
    background-position: 150% 50%
  }
  to {
    background-position: 0% 50%
  }
}

`;

export const handler: Handlers = {
  GET: () => {
    return new Response(CSS, {
      headers: {
        "content-type": "text/css",
        "cache-control": "public, max-age=31536000, immutable",
      },
    });
  },
};
