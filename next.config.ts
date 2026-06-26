import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/home-2",
        destination: "/",
        permanent: true
      },
      {
        source: "/home-2/",
        destination: "/",
        permanent: true
      },
      {
        source: "/visitor-visa-2",
        destination: "/services/visitor-visa",
        permanent: true
      },
      {
        source: "/visitor-visa-2/",
        destination: "/services/visitor-visa",
        permanent: true
      },
      {
        source: "/c11-work-permit",
        destination: "/services/work-business-visa",
        permanent: true
      },
      {
        source: "/c11-work-permit/",
        destination: "/services/work-business-visa",
        permanent: true
      }
    ];
  },
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
