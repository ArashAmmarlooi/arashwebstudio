import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blog/BlogArticle";
import { blogSlugs, getBlogArticle } from "@/lib/blog";
import {
  isTranslatedLocale,
  languageAlternates,
  localeInfo,
  localizedPath,
  translatedLocales,
} from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type LocalizedArticlePageProps = {
  params: { locale: string; slug: string };
};

export function generateStaticParams() {
  return translatedLocales.flatMap((locale) =>
    blogSlugs.map((slug) => ({ locale, slug })),
  );
}

export function generateMetadata({
  params,
}: LocalizedArticlePageProps): Metadata {
  const locale = params.locale;
  if (!isTranslatedLocale(locale)) return {};
  const article = getBlogArticle(params.slug, locale);
  if (!article) return {};
  const basePath = `/blog/${article.slug}`;
  const path = localizedPath(locale, basePath);

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author }],
    alternates: {
      canonical: path,
      languages: languageAlternates(basePath),
    },
    openGraph: {
      type: "article",
      url: path,
      locale: localeInfo[locale].openGraph,
      alternateLocale: Object.values(localeInfo)
        .map(({ openGraph }) => openGraph)
        .filter(
          (openGraph) => openGraph !== localeInfo[locale].openGraph,
        ),
      siteName: siteConfig.name,
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/opengraph-image"],
    },
  };
}

export default function LocalizedArticlePage({
  params,
}: LocalizedArticlePageProps) {
  const locale = params.locale;
  if (!isTranslatedLocale(locale)) notFound();
  const article = getBlogArticle(params.slug, locale);
  if (!article) notFound();
  return <BlogArticle article={article} />;
}
