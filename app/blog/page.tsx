import type { Metadata } from "next";
import BlogIndex from "@/components/blog/BlogIndex";
import { blogLabels } from "@/lib/blog";
import { languageAlternates, localeInfo } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const labels = blogLabels.en;

export const metadata: Metadata = {
  title: labels.indexTitle,
  description: labels.indexDescription,
  alternates: {
    canonical: "/blog",
    languages: languageAlternates("/blog"),
  },
  openGraph: {
    type: "website",
    url: "/blog",
    locale: localeInfo.en.openGraph,
    alternateLocale: [
      localeInfo.fr.openGraph,
      localeInfo.es.openGraph,
      localeInfo.de.openGraph,
      localeInfo.it.openGraph,
      localeInfo.pt.openGraph,
      localeInfo.zh.openGraph,
    ],
    siteName: siteConfig.name,
    title: labels.indexTitle,
    description: labels.indexDescription,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: labels.indexTitle,
    description: labels.indexDescription,
    images: ["/opengraph-image"],
  },
};

export default function BlogPage() {
  return <BlogIndex locale="en" />;
}
