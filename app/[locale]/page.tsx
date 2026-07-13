import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedHome from "@/components/LocalizedHome";
import { isTranslatedLocale, languageAlternates, localeInfo, localizedPath } from "@/lib/i18n";
import { getPageTranslations } from "@/lib/page-translations";
import { siteConfig } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale;
  if (!isTranslatedLocale(locale)) return {};
  const t = getPageTranslations(locale).metadata;
  const canonical = localizedPath(locale);
  return {
    title: { absolute: t.homeTitle },
    description: t.homeDescription,
    alternates: { canonical, languages: languageAlternates() },
    openGraph: { type: "website", locale: localeInfo[locale].openGraph, url: canonical, siteName: siteConfig.name, title: t.homeTitle, description: t.homeDescription, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title: t.homeTitle, description: t.homeDescription, images: ["/opengraph-image"] },
  };
}

export default function LocalizedHomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  if (!isTranslatedLocale(locale)) notFound();
  return <LocalizedHome locale={locale} />;
}
