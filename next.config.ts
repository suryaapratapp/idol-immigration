import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/favicons"
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**"
      }
    ]
  }
};

export default nextConfig;
