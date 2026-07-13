import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath, localeInfo } from "@/lib/i18n";
import { blogLabels, getBlogArticles, getBlogImage } from "@/lib/blog";
import { getPageTranslations } from "@/lib/page-translations";

type BlogIndexProps = {
  locale: Locale;
};

function formatDate(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(localeInfo[locale].htmlLang, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default function BlogIndex({ locale }: BlogIndexProps) {
  const labels = blogLabels[locale];
  const homeLabel = getPageTranslations(locale).nav.home;
  const articles = getBlogArticles(locale);

  return (
    <>
      <header className="mx-auto max-w-5xl px-6 pb-14 pt-36">
        <Link
          href={localizedPath(locale)}
          className="accent inline-flex items-center gap-2 text-sm font-semibold"
        >
          <span aria-hidden="true">←</span> {homeLabel}
        </Link>
        <div className="mt-10 overflow-hidden rounded-3xl shadow-xl shadow-inktxt/10 dark:shadow-black/30">
          <Image
            src="/images/hero-devices.svg"
            alt={labels.indexTitle}
            width={1200}
            height={640}
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
            className="aspect-[15/8] w-full object-cover"
          />
        </div>
        <div className="mt-10 text-center">
        <p className="accent text-sm font-semibold uppercase tracking-[0.18em]">
          {labels.eyebrow}
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
          {labels.indexTitle}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-inktxt/65 dark:text-creamtxt/65">
          {labels.indexDescription}
        </p>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-7 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="surface flex h-full overflow-hidden rounded-3xl"
          >
            <Link
              href={localizedPath(locale, `/blog/${article.slug}`)}
              className="block overflow-hidden"
              aria-label={article.title}
            >
              <Image
                src={getBlogImage(article.slug).src}
                alt={getBlogImage(article.slug).alt}
                width={800}
                height={500}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="aspect-[8/5] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </Link>
            <div className="flex flex-1 flex-col p-7">
            <p className="text-sm text-inktxt/50 dark:text-creamtxt/50">
              {labels.updated}{" "}
              <time dateTime={article.updatedAt}>
                {formatDate(article.updatedAt, locale)}
              </time>
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight">
              <Link
                href={localizedPath(locale, `/blog/${article.slug}`)}
                className="transition-colors hover:text-tealdeep dark:hover:text-sage"
              >
                {article.title}
              </Link>
            </h2>
            <p className="mt-4 flex-1 leading-relaxed text-inktxt/65 dark:text-creamtxt/65">
              {article.excerpt}
            </p>
            <Link
              href={localizedPath(locale, `/blog/${article.slug}`)}
              className="accent mt-7 font-semibold"
            >
              {labels.readArticle} <span aria-hidden="true">→</span>
            </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
