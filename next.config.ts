import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        hostname: "upload.wikimedia.org"
      }
    ],
  },
};

export default nextConfig;
