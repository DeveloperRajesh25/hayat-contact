import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'ni6f1bnmnusal1wh.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
