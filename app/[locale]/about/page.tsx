import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import LocalizedAbout from "@/components/LocalizedAbout";
import { isTranslatedLocale, languageAlternates, localeInfo, localizedPath } from "@/lib/i18n";
import { getPageTranslations } from "@/lib/page-translations";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isTranslatedLocale(params.locale)) return {};
  const t = getPageTranslations(params.locale).metadata;
  const canonical = localizedPath(params.locale, "/about");
  return {
    title: t.aboutTitle,
    description: t.aboutDescription,
    alternates: { canonical, languages: languageAlternates("/about") },
    openGraph: { locale: localeInfo[params.locale].openGraph, url: canonical, siteName: siteConfig.name, title: t.aboutTitle, description: t.aboutDescription, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title: t.aboutTitle, description: t.aboutDescription, images: ["/opengraph-image"] },
  };
}

export default function LocalizedAboutPage({ params }: { params: { locale: string } }) {
  if (!isTranslatedLocale(params.locale)) notFound();
  const t = getPageTranslations(params.locale);
  const path = localizedPath(params.locale, "/about");
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl(path)}#page`,
    url: absoluteUrl(path),
    name: t.metadata.aboutTitle,
    description: t.metadata.aboutDescription,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${absoluteUrl("/")}#business` },
    inLanguage: localeInfo[params.locale].htmlLang,
  };
  return (
    <>
      <JsonLd data={schema} />
      <LocalizedAbout locale={params.locale} />
    </>
  );
}
