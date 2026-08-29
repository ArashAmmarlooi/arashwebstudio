import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { BlogArticle as BlogArticleData } from "@/lib/blog";
import { blogLabels, getBlogImage } from "@/lib/blog";
import { localizedPath, localeInfo } from "@/lib/i18n";
import { getPageTranslations } from "@/lib/page-translations";
import { absoluteUrl, siteConfig } from "@/lib/site";

type BlogArticleProps = {
  article: BlogArticleData;
};

function formatDate(value: string, locale: BlogArticleData["locale"]) {
  return new Intl.DateTimeFormat(localeInfo[locale].htmlLang, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default function BlogArticle({ article }: BlogArticleProps) {
  const { locale } = article;
  const labels = blogLabels[locale];
  const image = getBlogImage(article.slug);
  const articlePath = localizedPath(locale, `/blog/${article.slug}`);
  const blogPath = localizedPath(locale, "/blog");
  const servicePath = localizedPath(
    locale,
    `/services/${article.relatedServiceSlug}`,
  );

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${absoluteUrl(articlePath)}#article`,
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      inLanguage: localeInfo[locale].htmlLang,
      mainEntityOfPage: absoluteUrl(articlePath),
      image: absoluteUrl(image.src),
      author: {
        "@type": "Organization",
        name: article.author,
      },
      publisher: {
        "@id": `${absoluteUrl("/")}#business`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      inLanguage: localeInfo[locale].htmlLang,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: getPageTranslations(locale).nav.home,
          item: absoluteUrl(localizedPath(locale)),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: labels.indexTitle,
          item: absoluteUrl(blogPath),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: absoluteUrl(articlePath),
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <article>
        <header className="mx-auto max-w-4xl px-6 pb-14 pt-40">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold uppercase tracking-[0.16em]">
            <Link href={localizedPath(locale)} className="accent">
              ← {getPageTranslations(locale).nav.home}
            </Link>
            <span className="text-inktxt/30 dark:text-creamtxt/30" aria-hidden="true">
              /
            </span>
            <Link href={blogPath} className="accent">
              {labels.backToBlog}
            </Link>
          </div>
          <h1 className="mt-7 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-7 text-xl leading-relaxed text-inktxt/65 dark:text-creamtxt/65">
            {article.excerpt}
          </p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-inktxt/50 dark:text-creamtxt/50">
            <span>
              {labels.by} {article.author}
            </span>
            <span>
              {labels.published}{" "}
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt, locale)}
              </time>
            </span>
            <span>
              {labels.updated}{" "}
              <time dateTime={article.updatedAt}>
                {formatDate(article.updatedAt, locale)}
              </time>
            </span>
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={720}
            sizes="(min-width: 1024px) 896px, 100vw"
            priority
            className="mt-10 aspect-[5/3] w-full rounded-3xl object-cover shadow-xl shadow-inktxt/10 dark:shadow-black/30"
          />
        </header>

        <div className="mx-auto max-w-3xl px-6 pb-10">
          {article.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 text-lg leading-8 text-inktxt/75 dark:text-creamtxt/75"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mx-auto max-w-3xl space-y-14 px-6 pb-20">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-3xl font-bold tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 leading-8 text-inktxt/70 dark:text-creamtxt/70"
                >
                  {paragraph}
                </p>
              ))}
              {section.checklist && (
                <div className="surface mt-7 rounded-3xl p-7">
                  <h3 className="font-display text-lg font-bold">
                    {labels.checklist}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {section.checklist.map((item) => (
                      <li key={item} className="flex gap-3 leading-7">
                        <span className="accent font-bold" aria-hidden="true">
                          ✓
                        </span>
                        <span className="text-inktxt/70 dark:text-creamtxt/70">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>
      </article>

      <aside className="border-y border-inktxt/10 bg-card/50 dark:border-white/10 dark:bg-nightcard/40">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-bold">
            {labels.relatedTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-inktxt/65 dark:text-creamtxt/65">
            {labels.relatedDescription}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href={servicePath}
              className="inline-block rounded-full bg-teal px-7 py-3.5 font-semibold text-white transition-colors hover:bg-tealdeep"
            >
              {labels.relatedCta}
            </Link>
            <Link
              href={localizedPath(locale, "/contact")}
              className="inline-block rounded-full border border-inktxt/15 px-7 py-3.5 font-semibold transition-colors hover:bg-inktxt/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              {labels.contactStudio}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
