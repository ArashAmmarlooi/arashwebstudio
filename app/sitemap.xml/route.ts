import { blogSlugs, getBlogArticle } from "@/lib/blog";
import {
  languageAlternates,
  locales,
  localizedPath,
  type Locale,
} from "@/lib/i18n";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

type SitemapPage = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: string;
  lastModified: string;
};

type SitemapPageInput = Omit<SitemapPage, "lastModified"> & {
  lastModified?: string;
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function alternateLinks(path: string) {
  return Object.entries(languageAlternates(path))
    .map(
      ([language, href]) =>
        `    <xhtml:link rel="alternate" hreflang="${language}" href="${escapeXml(absoluteUrl(href))}" />`,
    )
    .join("\n");
}

export function GET() {
  const siteUpdated = "2026-07-13";
  const pageInputs: SitemapPageInput[] = [
    { path: "/", changeFrequency: "monthly", priority: "1.0" },
    { path: "/about", changeFrequency: "yearly", priority: "0.7" },
    { path: "/contact", changeFrequency: "yearly", priority: "0.8" },
    { path: "/services", changeFrequency: "monthly", priority: "0.9" },
    { path: "/pricing", changeFrequency: "monthly", priority: "0.8" },
    ...services.map((service) => ({
      path: `/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: "0.9",
    })),
    { path: "/blog", changeFrequency: "weekly", priority: "0.8" },
    ...blogSlugs.map((slug) => ({
      path: `/blog/${slug}`,
      changeFrequency: "monthly" as const,
      priority: "0.7",
      lastModified: getBlogArticle(slug, "en")?.updatedAt ?? siteUpdated,
    })),
  ];
  const pages: SitemapPage[] = pageInputs.map((page) => ({
    ...page,
    lastModified:
      "lastModified" in page && page.lastModified
        ? page.lastModified
        : siteUpdated,
  }));

  const urls = pages
    .flatMap((page) =>
      locales.map((locale: Locale) => {
        const localizedUrl = absoluteUrl(localizedPath(locale, page.path));

        return `  <url>
    <loc>${escapeXml(localizedUrl)}</loc>
${alternateLinks(page.path)}
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
      }),
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
