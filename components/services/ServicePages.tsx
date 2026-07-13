import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  localeInfo,
  localizedPath,
  type Locale,
} from "@/lib/i18n";
import type {
  LocalizedService,
  ServicePageCopy,
} from "@/lib/service-translations";
import { absoluteUrl, siteConfig } from "@/lib/site";

type ServiceOverviewProps = {
  locale: Locale;
  services: LocalizedService[];
  copy: ServicePageCopy;
};

type ServiceDetailProps = {
  locale: Locale;
  copy: ServicePageCopy;
  service: LocalizedService;
};

function servicePath(locale: Locale, slug: string) {
  return localizedPath(locale, `/services/${slug}`);
}

function serviceArea() {
  return [
    { "@type": "City", name: siteConfig.city },
    { "@type": "AdministrativeArea", name: siteConfig.region },
    { "@type": "Country", name: siteConfig.country },
    { "@type": "Place", name: "Worldwide" },
  ];
}

export function ServiceOverview({
  locale,
  services,
  copy,
}: ServiceOverviewProps) {
  const path = localizedPath(locale, "/services");
  const inLanguage = localeInfo[locale].htmlLang;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      inLanguage,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: copy.home,
          item: absoluteUrl(localizedPath(locale)),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.services,
          item: absoluteUrl(path),
        },
      ],
    },
    ...services.map((service) => {
      const detailPath = servicePath(locale, service.slug);

      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${absoluteUrl(detailPath)}#service`,
        name: service.title,
        description: service.metaDescription,
        url: absoluteUrl(detailPath),
        inLanguage,
        provider: { "@id": `${absoluteUrl("/")}#business` },
        areaServed: serviceArea(),
      };
    }),
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-40 text-center sm:pb-20">
        <p className="accent text-sm font-semibold uppercase tracking-[0.2em]">
          {copy.eyebrow}
        </p>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          {copy.overviewTitle}
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
          {copy.overviewIntroduction}
        </p>
        <p className="mt-4 text-sm font-medium text-inktxt/50 dark:text-creamtxt/50">
          {copy.location}
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-7 px-6 pb-28 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.slug}
            className="surface group flex h-full flex-col overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.title} ${copy.imageAltSuffix}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h2 className="font-display text-2xl font-bold">
                {service.title}
              </h2>
              <p className="mt-4 flex-1 leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
                {service.cardDescription}
              </p>
              <Link
                href={servicePath(locale, service.slug)}
                className="accent mt-7 inline-flex items-center gap-2 font-semibold"
              >
                {copy.overviewCta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export function ServiceDetail({
  locale,
  service,
  copy,
}: ServiceDetailProps) {
  const path = servicePath(locale, service.slug);
  const overviewPath = localizedPath(locale, "/services");
  const inLanguage = localeInfo[locale].htmlLang;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${absoluteUrl(path)}#service`,
      name: service.title,
      description: service.metaDescription,
      url: absoluteUrl(path),
      inLanguage,
      provider: { "@id": `${absoluteUrl("/")}#business` },
      areaServed: serviceArea(),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      inLanguage,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: copy.home,
          item: absoluteUrl(localizedPath(locale)),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.services,
          item: absoluteUrl(overviewPath),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: absoluteUrl(path),
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-40 lg:grid-cols-2">
        <div>
          <Link
            href={overviewPath}
            className="accent text-sm font-semibold uppercase tracking-[0.18em]"
          >
            {copy.services}
          </Link>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {service.title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
            {service.description}
          </p>
          <p className="mt-4 text-sm font-medium text-inktxt/50 dark:text-creamtxt/50">
            {copy.location}
          </p>
          <Link
            href={localizedPath(locale, "/contact")}
            className="mt-9 inline-block rounded-full bg-teal px-8 py-4 font-semibold text-white transition-colors hover:bg-tealdeep"
          >
            {copy.discussProject}
          </Link>
        </div>
        <Image
          src={service.image}
          alt={`${service.title} ${copy.imageAltSuffix}`}
          width={800}
          height={800}
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
          className="w-full rounded-3xl shadow-xl shadow-inktxt/10 dark:shadow-black/40"
        />
      </section>

      <section className="border-y border-inktxt/10 bg-card/50 py-20 dark:border-white/10 dark:bg-nightcard/40">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
          <div>
            <p className="accent text-sm font-semibold uppercase tracking-[0.18em]">
              {copy.audienceLabel}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold">
              {copy.audienceTitle}
            </h2>
            <p className="mt-6 leading-relaxed text-inktxt/65 dark:text-creamtxt/65">
              {service.audience}
            </p>
            <p className="mt-5 leading-relaxed text-inktxt/65 dark:text-creamtxt/65">
              {service.outcome}
            </p>
          </div>
          <div className="surface rounded-3xl p-8">
            <h2 className="font-display text-2xl font-bold">
              {copy.deliverablesTitle}
            </h2>
            <ul className="mt-7 space-y-4">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3">
                  <span className="accent mt-0.5 font-bold" aria-hidden="true">
                    ✓
                  </span>
                  <span className="text-inktxt/70 dark:text-creamtxt/70">
                    {deliverable}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          {copy.finalTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
          {copy.finalDescription}
        </p>
        <Link
          href={localizedPath(locale, "/contact")}
          className="mt-8 inline-block rounded-full bg-teal px-8 py-4 font-semibold text-white transition-colors hover:bg-tealdeep"
        >
          {copy.finalCta}
        </Link>
      </section>
    </>
  );
}
