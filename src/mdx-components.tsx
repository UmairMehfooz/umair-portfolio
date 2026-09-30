import type { MDXComponents } from "mdx/types";

// Required by @next/mdx. Post styling lives in the .post rules in globals.css.
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
