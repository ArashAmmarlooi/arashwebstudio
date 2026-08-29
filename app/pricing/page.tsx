import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PricingPage from "@/components/PricingPage";
import { languageAlternates, localeInfo, translatedLocales } from "@/lib/i18n";
import { getPricingCopy } from "@/lib/pricing";
import { absoluteUrl, siteConfig } from "@/lib/site";

const copy = getPricingCopy("en");

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  alternates: {
    canonical: "/pricing",
    languages: languageAlternates("/pricing"),
  },
  openGraph: {
    url: "/pricing",
    title: copy.metaTitle,
    description: copy.metaDescription,
    siteName: siteConfig.name,
    locale: localeInfo.en.openGraph,
    alternateLocale: translatedLocales.map((locale) => localeInfo[locale].openGraph),
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.metaTitle,
    description: copy.metaDescription,
    images: ["/opengraph-image"],
  },
};

const pricingPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${absoluteUrl("/pricing")}#page`,
  url: absoluteUrl("/pricing"),
  name: copy.metaTitle,
  description: copy.metaDescription,
  isPartOf: { "@id": `${absoluteUrl("/")}#website` },
  about: { "@id": `${absoluteUrl("/")}#business` },
  inLanguage: "en",
};

export default function PricingRoute() {
  return (
    <>
      <JsonLd data={pricingPageSchema} />
      <PricingPage locale="en" />
    </>
  );
}
