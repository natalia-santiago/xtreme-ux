// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://xtremeconcretecutting.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/service-areas", "/projects", "/reviews", "/contact"];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));
}