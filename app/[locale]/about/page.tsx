import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import LocalizedAbout from "@/components/LocalizedAbout";
import { isTranslatedLocale, languageAlternates, localeInfo, localizedPath } from "@/lib/i18n";
import { getPageTranslations } from "@/lib/page-translations";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale;
  if (!isTranslatedLocale(locale)) return {};
  const t = getPageTranslations(locale).metadata;
  const canonical = localizedPath(locale, "/about");
  return {
    title: t.aboutTitle,
    description: t.aboutDescription,
    alternates: { canonical, languages: languageAlternates("/about") },
    openGraph: { locale: localeInfo[locale].openGraph, url: canonical, siteName: siteConfig.name, title: t.aboutTitle, description: t.aboutDescription, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title: t.aboutTitle, description: t.aboutDescription, images: ["/opengraph-image"] },
  };
}

export default function LocalizedAboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  if (!isTranslatedLocale(locale)) notFound();
  const t = getPageTranslations(locale);
  const path = localizedPath(locale, "/about");
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl(path)}#page`,
    url: absoluteUrl(path),
    name: t.metadata.aboutTitle,
    description: t.metadata.aboutDescription,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${absoluteUrl("/")}#business` },
    inLanguage: localeInfo[locale].htmlLang,
  };
  return (
    <>
      <JsonLd data={schema} />
      <LocalizedAbout locale={locale} />
    </>
  );
}
