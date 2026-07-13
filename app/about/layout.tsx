import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { languageAlternates, localeInfo } from "@/lib/i18n";
import { absoluteUrl, siteConfig } from "@/lib/site";

const description =
  "Meet Arash Ammarlooi, founder and lead designer at Arash Web Studio in Montreal, and learn about his collaborative approach to digital projects.";

export const metadata: Metadata = {
  title: "About Arash Ammarlooi",
  description,
  alternates: {
    canonical: "/about",
    languages: languageAlternates("/about"),
  },
  openGraph: {
    url: "/about",
    title: "About Arash Ammarlooi",
    description,
    siteName: siteConfig.name,
    locale: localeInfo.en.openGraph,
    alternateLocale: [
      localeInfo.fr.openGraph,
      localeInfo.es.openGraph,
      localeInfo.de.openGraph,
      localeInfo.it.openGraph,
      localeInfo.pt.openGraph,
      localeInfo.zh.openGraph,
    ],
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Arash Ammarlooi",
    description,
    images: ["/opengraph-image"],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${absoluteUrl("/about")}#page`,
  url: absoluteUrl("/about"),
  name: "About Arash Web Studio",
  description:
    "The experience, values and collaborative approach behind Arash Web Studio.",
  isPartOf: { "@id": `${absoluteUrl("/")}#website` },
  about: { "@id": `${absoluteUrl("/")}#business` },
  inLanguage: "en-CA",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      {children}
    </>
  );
}
