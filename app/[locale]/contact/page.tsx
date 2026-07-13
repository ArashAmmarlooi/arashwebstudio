import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import LocalizedContact from "@/components/LocalizedContact";
import { isTranslatedLocale, languageAlternates, localeInfo, localizedPath } from "@/lib/i18n";
import { getPageTranslations } from "@/lib/page-translations";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale;
  if (!isTranslatedLocale(locale)) return {};
  const t = getPageTranslations(locale).metadata;
  const canonical = localizedPath(locale, "/contact");
  return {
    title: t.contactTitle,
    description: t.contactDescription,
    alternates: { canonical, languages: languageAlternates("/contact") },
    openGraph: { locale: localeInfo[locale].openGraph, url: canonical, siteName: siteConfig.name, title: t.contactTitle, description: t.contactDescription, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title: t.contactTitle, description: t.contactDescription, images: ["/opengraph-image"] },
  };
}

export default function LocalizedContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  if (!isTranslatedLocale(locale)) notFound();
  const t = getPageTranslations(locale);
  const path = localizedPath(locale, "/contact");
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl(path)}#page`,
    url: absoluteUrl(path),
    name: t.metadata.contactTitle,
    description: t.metadata.contactDescription,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${absoluteUrl("/")}#business` },
    mainEntity: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "sales",
      areaServed: [siteConfig.city, siteConfig.region, "CA", "Worldwide"],
      availableLanguage: ["English"],
    },
    inLanguage: localeInfo[locale].htmlLang,
  };
  return (
    <>
      <JsonLd data={schema} />
      <LocalizedContact locale={locale} />
    </>
  );
}
