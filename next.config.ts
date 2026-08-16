import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOSTNAME || "cdn-portfolio.developedbyme.my.id",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
