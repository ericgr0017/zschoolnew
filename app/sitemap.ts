import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zschool.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/how-zschool-works",
    "/courses",
    "/technology",
    "/advisory-board",
    "/governance",
    "/updates",
    "/model",
    "/trust",
    "/for-universities",
    "/for-organizations",
    "/for-executives",
    "/about",
    "/contact",
  ];

  return routes
    .filter((route) => route !== "/how-zschool-works")
    .map((route) => ({
      url: `${baseUrl}${route}`,
    }));
}
