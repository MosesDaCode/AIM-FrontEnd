import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // enable export to out folder, which is used for ftp server
  trailingSlash: true, // fixes issue with mapping of pages with/without .html
  images: {
    unoptimized: true, // disable image optimization to make images work in production
  },
};

export default nextConfig;
