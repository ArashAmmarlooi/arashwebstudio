import fs from "fs";

const src = fs.readFileSync("lib/blog.ts", "utf8").replace(/\r\n/g, "\n");

function extractBetween(start, end) {
  const from = src.indexOf(start);
  if (from === -1) throw new Error(`Missing start: ${start.slice(0, 40)}`);
  const to = src.indexOf(end, from + start.length);
  if (to === -1) throw new Error(`Missing end after: ${start.slice(0, 40)}`);
  return src.slice(from + start.length, to).trim();
}

const planning = extractBetween(
  '  "planning-a-business-website": {\n    en: {\n',
  "\n    },\n    fr: {",
).replace(/locale: "en",\s*/g, "");

const content = extractBetween(
  "const contentDrafts: Record<Locale, LocalizedDraft> = {\n  en: {",
  "\n  },\n  fr: {",
);

const seo = extractBetween(
  "const seoDrafts: Record<Locale, LocalizedDraft> = {\n  en: {",
  "\n  },\n  fr: {",
);

const output = `export const blogSlugs = [
  "planning-a-business-website",
  "better-website-content-guide",
  "seo-guide-small-medium-business",
] as const;

export type BlogSlug = (typeof blogSlugs)[number];

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  checklist?: string[];
};

export type BlogArticle = {
  slug: BlogSlug;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  intro: string[];
  sections: BlogSection[];
  relatedServiceSlug: string;
};

export type BlogLabels = {
  eyebrow: string;
  indexTitle: string;
  indexDescription: string;
  readArticle: string;
  published: string;
  updated: string;
  by: string;
  checklist: string;
  backToBlog: string;
  relatedTitle: string;
  relatedDescription: string;
  relatedCta: string;
  contactStudio: string;
};

const blogImages: Record<BlogSlug, { src: string; alt: string }> = {
  "planning-a-business-website": {
    src: "/images/hero-devices.png",
    alt: "Responsive business website shown across laptop and mobile screens",
  },
  "better-website-content-guide": {
    src: "/images/service-advertising.png",
    alt: "Website content and page planning workspace",
  },
  "seo-guide-small-medium-business": {
    src: "/images/service-software.png",
    alt: "Website performance and search visibility dashboard",
  },
};

export function getBlogImage(slug: BlogSlug) {
  return blogImages[slug];
}

export const blogLabels: BlogLabels = {
  eyebrow: "Website growth guides",
  indexTitle: "Web design, content and SEO insights",
  indexDescription:
    "Practical guidance for small and medium-sized businesses planning a website, improving content and building sustainable search visibility anywhere in the world.",
  readArticle: "Read article",
  published: "Published",
  updated: "Updated",
  by: "By",
  checklist: "Checklist",
  backToBlog: "Back to the blog",
  relatedTitle: "Need help putting this into practice?",
  relatedDescription:
    "Explore the related service and discuss a website shaped around your business.",
  relatedCta: "View related service",
  contactStudio: "Contact the studio",
};

const dates = {
  publishedAt: "2026-07-13",
  updatedAt: "2026-07-13",
  author: "Arash Web Studio",
};

const articles: Record<BlogSlug, BlogArticle> = {
  "planning-a-business-website": {
    slug: "planning-a-business-website",
    ...dates,
    ${planning},
  },
  "better-website-content-guide": {
    slug: "better-website-content-guide",
    ...dates,
    ${content},
    relatedServiceSlug: "small-business-web-design",
  },
  "seo-guide-small-medium-business": {
    slug: "seo-guide-small-medium-business",
    ...dates,
    ${seo},
    relatedServiceSlug: "small-business-web-design",
  },
};

export function getBlogArticle(slug: string): BlogArticle | undefined {
  if (!blogSlugs.includes(slug as BlogSlug)) return undefined;
  return articles[slug as BlogSlug];
}

export function getBlogArticles(): BlogArticle[] {
  return blogSlugs.map((slug) => articles[slug]);
}
`;

fs.writeFileSync("lib/blog.ts", output);
console.log("trimmed blog.ts to English only");
