import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint checks during builds
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc/**",
      },
      {
        protocol: "https",
        hostname: "www.instagram.com",
        pathname: "/uc/**",
      },
    ],
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
};

export default nextConfig;
