import type { Metadata } from "next";
import BlogIndex from "@/components/blog/BlogIndex";
import { blogLabels } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: blogLabels.indexTitle,
  description: blogLabels.indexDescription,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "/blog",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: blogLabels.indexTitle,
    description: blogLabels.indexDescription,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: blogLabels.indexTitle,
    description: blogLabels.indexDescription,
    images: ["/opengraph-image"],
  },
};

export default function BlogPage() {
  return <BlogIndex />;
}
