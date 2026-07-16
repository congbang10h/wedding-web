import type { MetadataRoute } from "next";
import { weddingConfig } from "@/config/wedding";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  return weddingConfig.seo.public
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteUrl}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
