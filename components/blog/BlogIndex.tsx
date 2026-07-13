import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath, localeInfo } from "@/lib/i18n";
import { blogLabels, getBlogArticles } from "@/lib/blog";

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
  const articles = getBlogArticles(locale);

  return (
    <>
      <header className="mx-auto max-w-5xl px-6 pb-14 pt-40 text-center">
        <p className="accent text-sm font-semibold uppercase tracking-[0.18em]">
          {labels.eyebrow}
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
          {labels.indexTitle}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-inktxt/65 dark:text-creamtxt/65">
          {labels.indexDescription}
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl gap-7 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="surface flex h-full flex-col rounded-3xl p-7"
          >
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
          </article>
        ))}
      </section>
    </>
  );
}
