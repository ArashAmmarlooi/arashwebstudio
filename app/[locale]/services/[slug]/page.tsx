import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/services/ServicePages";
import {
  isTranslatedLocale,
  languageAlternates,
  localeInfo,
  localizedPath,
  translatedLocales,
} from "@/lib/i18n";
import {
  getLocalizedService,
  serviceLocalizations,
} from "@/lib/service-translations";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

type LocalizedServicePageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return translatedLocales.flatMap((locale) =>
    services.map(({ slug }) => ({ locale, slug })),
  );
}

export function generateMetadata({
  params,
}: LocalizedServicePageProps): Metadata {
  if (!isTranslatedLocale(params.locale)) {
    return {};
  }

  const service = getLocalizedService(params.locale, params.slug);

  if (!service) {
    return {};
  }

  const path = localizedPath(params.locale, `/services/${service.slug}`);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: path,
      languages: languageAlternates(`/services/${service.slug}`),
    },
    openGraph: {
      url: path,
      title: service.metaTitle,
      description: service.metaDescription,
      siteName: siteConfig.name,
      locale: localeInfo[params.locale].openGraph,
      alternateLocale: Object.values(localeInfo)
        .map(({ openGraph }) => openGraph)
        .filter(
          (openGraph) => openGraph !== localeInfo[params.locale].openGraph,
        ),
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default function LocalizedServicePage({
  params,
}: LocalizedServicePageProps) {
  if (!isTranslatedLocale(params.locale)) {
    notFound();
  }

  const service = getLocalizedService(params.locale, params.slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetail
      locale={params.locale}
      service={service}
      copy={serviceLocalizations[params.locale].copy}
    />
  );
}
