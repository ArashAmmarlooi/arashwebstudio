import type { Metadata } from "next";
import { ServiceOverview, type ServicePageCopy } from "@/components/services/ServicePages";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const copy: ServicePageCopy = {
  overviewMetaTitle: "Web Design and Digital Services",
  overviewMetaDescription:
    "Web design services for e-commerce, booking and appointment websites, small and medium-sized businesses, mobile apps, custom software and brand identity.",
  eyebrow: "Web · Mobile · Software · Brand",
  overviewTitle: "Digital services shaped around your business",
  overviewIntroduction:
    "From strategy through launch, we create clear, durable experiences for small and medium-sized businesses around the world.",
  overviewCta: "View service",
  home: "Home",
  services: "Services",
  location: "Working with clients worldwide",
  discussProject: "Discuss Your Project",
  audienceLabel: "Who it is for",
  audienceTitle: "A solution shaped around your business",
  deliverablesTitle: "What your project can include",
  finalTitle: "Ready to talk about your project?",
  finalDescription:
    "Share what you are building, who it is for and what success looks like. We will reply with practical next steps.",
  finalCta: "Start a Conversation",
  imageAltSuffix: "by Arash Web Studio",
};

export const metadata: Metadata = {
  title: copy.overviewMetaTitle,
  description: copy.overviewMetaDescription,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
    title: copy.overviewMetaTitle,
    description: copy.overviewMetaDescription,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.overviewMetaTitle,
    description: copy.overviewMetaDescription,
    images: ["/opengraph-image"],
  },
};

export default function ServicesPage() {
  return <ServiceOverview services={services} copy={copy} />;
}
