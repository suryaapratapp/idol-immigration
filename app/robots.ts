import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/home-2/", "/visitor-visa-2/", "/c11-work-permit/"]
      }
    ],
    sitemap: `${site.url}/sitemap.xml`
  };
}
