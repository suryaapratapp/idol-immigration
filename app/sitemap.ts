import type { MetadataRoute } from "next";
import { countries } from "@/data/countries";
import { allServiceCards } from "@/data/services";
import { resources } from "@/data/resources";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/founders",
    "/services",
    "/settlement-support",
    "/countries",
    "/resources",
    "/success-stories",
    "/contact"
  ];

  const dynamicRoutes = [
    ...allServiceCards.map((service) => `/services/${service.slug}`),
    ...countries.map((country) => `/countries/${country.slug}`),
    ...resources.map((resource) => `/resources/${resource.slug}`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
