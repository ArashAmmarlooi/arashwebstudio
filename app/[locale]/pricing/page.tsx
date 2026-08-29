import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import PricingPage from "@/components/PricingPage";
import { isTranslatedLocale, languageAlternates, localeInfo, localizedPath } from "@/lib/i18n";
import { getPricingCopy } from "@/lib/pricing";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale;
  if (!isTranslatedLocale(locale)) return {};
  const copy = getPricingCopy(locale);
  const canonical = localizedPath(locale, "/pricing");
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: { canonical, languages: languageAlternates("/pricing") },
    openGraph: {
      locale: localeInfo[locale].openGraph,
      url: canonical,
      siteName: siteConfig.name,
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default function LocalizedPricingRoute({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  if (!isTranslatedLocale(locale)) notFound();
  const copy = getPricingCopy(locale);
  const path = localizedPath(locale, "/pricing");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#page`,
    url: absoluteUrl(path),
    name: copy.metaTitle,
    description: copy.metaDescription,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${absoluteUrl("/")}#business` },
    inLanguage: localeInfo[locale].htmlLang,
  };

  return (
    <>
      <JsonLd data={schema} />
      <PricingPage locale={locale} />
    </>
  );
}
