import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Ensure static files are properly served
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
