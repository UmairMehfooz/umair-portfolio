import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {};

// Blog posts are .mdx files in src/content/blog.
const withMDX = createMDX({});

export default withMDX(nextConfig);
