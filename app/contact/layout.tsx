import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { languageAlternates, localeInfo, translatedLocales } from "@/lib/i18n";
import { absoluteUrl, siteConfig } from "@/lib/site";

const description =
  "Contact Arash Web Studio to discuss a responsive business website, e-commerce store, booking experience, mobile app or custom software project.";

export const metadata: Metadata = {
  title: "Contact Arash Web Studio",
  description,
  alternates: {
    canonical: "/contact",
    languages: languageAlternates("/contact"),
  },
  openGraph: {
    url: "/contact",
    title: "Contact Arash Web Studio",
    description,
    siteName: siteConfig.name,
    locale: localeInfo.en.openGraph,
    alternateLocale: translatedLocales.map((locale) => localeInfo[locale].openGraph),
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Arash Web Studio",
    description,
    images: ["/opengraph-image"],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${absoluteUrl("/contact")}#page`,
  url: absoluteUrl("/contact"),
  name: "Contact Arash Web Studio",
  isPartOf: { "@id": `${absoluteUrl("/")}#website` },
  about: { "@id": `${absoluteUrl("/")}#business` },
  mainEntity: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    contactType: "sales",
    areaServed: [siteConfig.areaServed],
    availableLanguage: ["English"],
  },
  inLanguage: "en",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      {children}
    </>
  );
}
