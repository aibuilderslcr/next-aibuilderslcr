import type { MetadataRoute } from "next";

const origin = "https://www.aibuilderslcr.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/demos", "/members"].map((path) => ({ url: `${origin}${path}` }));
}
