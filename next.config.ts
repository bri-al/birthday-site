import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/birthday-site",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
