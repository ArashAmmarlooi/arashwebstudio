import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";

const description =
  "Contact Arash Ammarlooi, a Montreal web designer, to discuss a business website, e-commerce store, mobile app or custom software project.";

export const metadata: Metadata = {
  title: "Contact a Montreal Web Designer",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact Arash Web Studio",
    description,
    siteName: siteConfig.name,
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
    areaServed: [siteConfig.city, siteConfig.region, "CA", "Worldwide"],
    availableLanguage: ["English"],
  },
  inLanguage: "en-CA",
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
