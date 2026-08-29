import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blog/BlogArticle";
import { blogSlugs, getBlogArticle } from "@/lib/blog";
import { languageAlternates, localeInfo, translatedLocales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type BlogArticlePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogArticlePageProps): Metadata {
  const article = getBlogArticle(params.slug, "en");
  if (!article) return {};
  const path = `/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author }],
    alternates: {
      canonical: path,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "article",
      url: path,
      locale: localeInfo.en.openGraph,
      alternateLocale: translatedLocales.map((locale) => localeInfo[locale].openGraph),
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

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const article = getBlogArticle(params.slug, "en");
  if (!article) notFound();
  return <BlogArticle article={article} />;
}
