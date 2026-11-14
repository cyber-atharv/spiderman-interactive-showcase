import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/spiderman-interactive-showcase",
  assetPrefix: "/spiderman-interactive-showcase",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
