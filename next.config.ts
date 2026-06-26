import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → deployable on any static host (cPanel/O2switch, GitHub Pages…)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
