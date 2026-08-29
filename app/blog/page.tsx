import type { Metadata } from "next";
import BlogIndex from "@/components/blog/BlogIndex";
import { blogLabels } from "@/lib/blog";
import { languageAlternates, localeInfo, translatedLocales } from "@/lib/i18n";
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
    alternateLocale: translatedLocales.map((locale) => localeInfo[locale].openGraph),
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
