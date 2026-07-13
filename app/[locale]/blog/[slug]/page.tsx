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
  if (!isTranslatedLocale(params.locale)) return {};
  const article = getBlogArticle(params.slug, params.locale);
  if (!article) return {};
  const basePath = `/blog/${article.slug}`;
  const path = localizedPath(params.locale, basePath);

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
      locale: localeInfo[params.locale].openGraph,
      alternateLocale: Object.values(localeInfo)
        .map(({ openGraph }) => openGraph)
        .filter(
          (openGraph) => openGraph !== localeInfo[params.locale].openGraph,
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
  if (!isTranslatedLocale(params.locale)) notFound();
  const article = getBlogArticle(params.slug, params.locale);
  if (!article) notFound();
  return <BlogArticle article={article} />;
}
