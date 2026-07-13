import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndex from "@/components/blog/BlogIndex";
import { blogLabels } from "@/lib/blog";
import {
  isTranslatedLocale,
  languageAlternates,
  localeInfo,
  localizedPath,
} from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type LocalizedBlogPageProps = {
  params: { locale: string };
};

export function generateStaticParams() {
  return ["fr", "es", "de", "it", "pt", "zh"].map((locale) => ({ locale }));
}

export function generateMetadata({ params }: LocalizedBlogPageProps): Metadata {
  if (!isTranslatedLocale(params.locale)) return {};
  const locale = params.locale;
  const labels = blogLabels[locale];
  const path = localizedPath(locale, "/blog");

  return {
    title: labels.indexTitle,
    description: labels.indexDescription,
    alternates: {
      canonical: path,
      languages: languageAlternates("/blog"),
    },
    openGraph: {
      type: "website",
      url: path,
      locale: localeInfo[locale].openGraph,
      alternateLocale: Object.values(localeInfo)
        .map(({ openGraph }) => openGraph)
        .filter((openGraph) => openGraph !== localeInfo[locale].openGraph),
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
}

export default function LocalizedBlogPage({ params }: LocalizedBlogPageProps) {
  if (!isTranslatedLocale(params.locale)) notFound();
  return <BlogIndex locale={params.locale} />;
}
