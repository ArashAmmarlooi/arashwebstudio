import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { getService, services } from "@/lib/services";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getService(params.slug);

  if (!service) {
    return {};
  }

  const path = `/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      url: path,
      title: service.metaTitle,
      description: service.metaDescription,
      siteName: siteConfig.name,
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

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  const path = `/services/${service.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${absoluteUrl(path)}#service`,
      name: service.title,
      description: service.metaDescription,
      url: absoluteUrl(path),
      provider: { "@id": `${absoluteUrl("/")}#business` },
      areaServed: [
        { "@type": "City", name: siteConfig.city },
        { "@type": "AdministrativeArea", name: siteConfig.region },
        { "@type": "Country", name: "Canada" },
        { "@type": "Place", name: "Worldwide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
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
            href="/"
            className="accent text-sm font-semibold uppercase tracking-[0.18em]"
          >
            Home
          </Link>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {service.title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
            {service.description}
          </p>
          <p className="mt-4 text-sm font-medium text-inktxt/50 dark:text-creamtxt/50">
            Based in Montreal, Quebec · Available across Canada and worldwide
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-block rounded-full bg-teal px-8 py-4 font-semibold text-white transition-colors hover:bg-tealdeep"
          >
            Discuss Your Project
          </Link>
        </div>
        <Image
          src={service.image}
          alt={`${service.title} by Arash Web Studio`}
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
              Who it is for
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold">
              A solution shaped around your business
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
              What your project can include
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
          Ready to talk about your project?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
          Share what you are building, who it is for and what success looks like.
          Arash will reply with practical next steps.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-teal px-8 py-4 font-semibold text-white transition-colors hover:bg-tealdeep"
        >
          Start a Conversation
        </Link>
      </section>
    </>
  );
}
