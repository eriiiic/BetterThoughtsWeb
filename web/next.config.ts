import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    // Required for `@cloudflare/next-on-pages`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    incrementalCacheHandlerPath: "@cloudflare/next-on-pages/adapter",
  },
};

export default nextConfig;
