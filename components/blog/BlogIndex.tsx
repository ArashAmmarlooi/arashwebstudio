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
            src="/images/hero-devices.png"
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
        {articles.map((article) => {
          const image = getBlogImage(article.slug);
          const href = localizedPath(locale, `/blog/${article.slug}`);

          return (
            <article
              key={article.slug}
              className="surface group flex h-full flex-col overflow-hidden rounded-3xl"
            >
              <Link
                href={href}
                className="relative block aspect-[4/3] overflow-hidden"
                aria-label={article.title}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
                    href={href}
                    className="transition-colors hover:text-tealdeep dark:hover:text-sage"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-4 flex-1 leading-relaxed text-inktxt/65 dark:text-creamtxt/65">
                  {article.excerpt}
                </p>
                <Link
                  href={href}
                  className="accent mt-7 inline-flex items-center gap-2 font-semibold"
                >
                  {labels.readArticle}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
