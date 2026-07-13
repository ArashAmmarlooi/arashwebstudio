import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lastModified = new Date().toISOString().split("T")[0];
  const pages = [
    { path: "/", changeFrequency: "monthly", priority: "1.0" },
    { path: "/about", changeFrequency: "yearly", priority: "0.7" },
    { path: "/contact", changeFrequency: "yearly", priority: "0.8" },
    ...services.map((service) => ({
      path: `/services/${service.slug}`,
      changeFrequency: "monthly",
      priority: "0.9",
    })),
  ];

  const urls = pages
    .map(
      ({ path, changeFrequency, priority }) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
