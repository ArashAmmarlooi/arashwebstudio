import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blog/BlogArticle";
import { blogSlugs, getBlogArticle } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type BlogArticlePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogArticlePageProps): Metadata {
  const article = getBlogArticle(params.slug);
  if (!article) return {};
  const path = `/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author }],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      url: path,
      locale: siteConfig.locale,
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
  const article = getBlogArticle(params.slug);
  if (!article) notFound();
  return <BlogArticle article={article} />;
}
