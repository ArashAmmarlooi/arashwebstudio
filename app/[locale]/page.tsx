import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedHome from "@/components/LocalizedHome";
import { isTranslatedLocale, languageAlternates, localeInfo, localizedPath } from "@/lib/i18n";
import { getPageTranslations } from "@/lib/page-translations";
import { siteConfig } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isTranslatedLocale(params.locale)) return {};
  const t = getPageTranslations(params.locale).metadata;
  const canonical = localizedPath(params.locale);
  return {
    title: { absolute: t.homeTitle },
    description: t.homeDescription,
    alternates: { canonical, languages: languageAlternates() },
    openGraph: { type: "website", locale: localeInfo[params.locale].openGraph, url: canonical, siteName: siteConfig.name, title: t.homeTitle, description: t.homeDescription, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title: t.homeTitle, description: t.homeDescription, images: ["/opengraph-image"] },
  };
}

export default function LocalizedHomePage({ params }: { params: { locale: string } }) {
  if (!isTranslatedLocale(params.locale)) notFound();
  return <LocalizedHome locale={params.locale} />;
}
