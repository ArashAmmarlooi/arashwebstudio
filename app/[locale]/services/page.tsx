import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceOverview } from "@/components/services/ServicePages";
import {
  isTranslatedLocale,
  languageAlternates,
  localeInfo,
  localizedPath,
  translatedLocales,
} from "@/lib/i18n";
import {
  getLocalizedServices,
  serviceLocalizations,
} from "@/lib/service-translations";
import { siteConfig } from "@/lib/site";

type LocalizedServicesPageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export function generateMetadata({
  params,
}: LocalizedServicesPageProps): Metadata {
  if (!isTranslatedLocale(params.locale)) {
    return {};
  }

  const { locale } = params;
  const { copy } = serviceLocalizations[locale];
  const path = localizedPath(locale, "/services");

  return {
    title: copy.overviewMetaTitle,
    description: copy.overviewMetaDescription,
    alternates: {
      canonical: path,
      languages: languageAlternates("/services"),
    },
    openGraph: {
      url: path,
      title: copy.overviewMetaTitle,
      description: copy.overviewMetaDescription,
      siteName: siteConfig.name,
      locale: localeInfo[locale].openGraph,
      alternateLocale: Object.values(localeInfo)
        .map(({ openGraph }) => openGraph)
        .filter((openGraph) => openGraph !== localeInfo[locale].openGraph),
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.overviewMetaTitle,
      description: copy.overviewMetaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default function LocalizedServicesPage({
  params,
}: LocalizedServicesPageProps) {
  if (!isTranslatedLocale(params.locale)) {
    notFound();
  }

  const { locale } = params;
  const { copy } = serviceLocalizations[locale];

  return (
    <ServiceOverview
      locale={locale}
      services={getLocalizedServices(locale)}
      copy={copy}
    />
  );
}
