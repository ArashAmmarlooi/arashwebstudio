export const blogSlugs = [
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
    title: "How to plan a website and contact the right web designer",
    description:
      "Learn how to define your website goals, prepare useful content, compare web designers and plan a responsive, SEO-ready business website.",
    excerpt:
      "A practical guide to website goals, content, features, budgets and the questions to ask a web designer.",
    intro: [
      "A useful website starts with clear goals. Before you contact a designer, define your audience, the actions you want visitors to take, the pages you need and the content you already have.",
      "Whether you need a business site, booking experience, e-commerce store or campaign landing page, a thoughtful brief helps you compare proposals fairly and launch something useful, accessible and ready for search.",
    ],
    sections: [
      {
        heading: "Define what the website must achieve",
        paragraphs: [
          "State the business outcome first: more qualified inquiries, online bookings, product sales, stronger credibility or clearer service information. A clinic may need appointment scheduling, a hotel may need reservations, a salon may need service pages and a contact path, while other businesses may need quote requests or product discovery.",
        ],
        checklist: [
          "Write one sentence describing your audience and main goal.",
          "List the three most important visitor actions.",
          "Note any integrations or approval steps required.",
        ],
      },
      {
        heading: "List the pages and features you need",
        paragraphs: [
          "A focused brochure site is different from a site with online payments, appointment scheduling, member accounts or a searchable catalogue. Each feature adds interface states, testing, accessibility work and ongoing maintenance. Separate launch essentials from features that can follow later.",
        ],
        checklist: [
          "List each page and its primary purpose.",
          "Mark which features are required at launch.",
          "Document booking tools, payment systems and third-party services.",
        ],
      },
      {
        heading: "Prepare content and examples before you reach out",
        paragraphs: [
          "Designers work faster when you can share existing text, photos, logo files, brand guidelines and websites you admire. If content is missing, say who will write and approve it. Strong website content should explain services clearly and support SEO from the start.",
        ],
        checklist: [
          "Gather text, photos, logos and brand references.",
          "Collect examples of layouts or sites you like.",
          "Identify who owns copywriting and approvals.",
        ],
      },
      {
        heading: "How to contact a web designer and compare proposals",
        paragraphs: [
          "Reach out with your goals, required pages, examples, timeline, budget range and available content. Ask what is included in strategy, responsive design, SEO foundations, revisions, launch support and training. Compare proposals by deliverables and exclusions, not price alone.",
        ],
        checklist: [
          "Share audience, goals, pages and deadline.",
          "Ask how communication and revisions will work.",
          "Confirm ownership of domain, accounts and source files.",
        ],
      },
      {
        heading: "Plan for SEO, responsive design and long-term ownership",
        paragraphs: [
          "Performance, accessibility, analytics, privacy-aware forms, redirects and technical SEO are part of a dependable launch. Hosting, domain renewal, software updates and support are recurring responsibilities. A lower initial quote can cost more if these items are excluded or the site is difficult to update.",
        ],
        checklist: [
          "Confirm mobile-first responsive design is included.",
          "Ask what technical SEO and analytics setup includes.",
          "Clarify post-launch support, backups and update process.",
        ],
      },
    ],
    relatedServiceSlug: "small-business-web-design",
  },
  "better-website-content-guide": {
    slug: "better-website-content-guide",
    ...dates,
    title: "How to create better content for your business website",
    description:
      "A practical guide to clear website messaging, useful service pages, strong calls to action, accessible images and content that supports SEO.",
    excerpt:
      "Help visitors understand what you offer, who it is for and what they should do next.",
    intro: [
      "Good website content answers real customer questions in plain language. It explains the business, services, process and next step without forcing visitors to search through vague claims.",
      "Use this guide before a launch or content update. Ask someone unfamiliar with your business to find your main service, understand its value and contact you without guidance.",
    ],
    sections: [
      {
        heading: "Lead with the information visitors need",
        paragraphs: [
          "State what you do, who you help and the main outcome near the top of each important page. Use specific headings, short paragraphs and descriptive links. Clinics might prioritize appointment information, hotels may highlight reservations, and other service businesses may focus on quote requests or consultations.",
        ],
        checklist: [
          "Give every page one clear purpose and primary action.",
          "Replace generic slogans with useful customer-focused details.",
          "Test every page on a small screen and a slower connection.",
        ],
      },
      {
        heading: "Build useful service pages",
        paragraphs: [
          "Create a dedicated page for each meaningful service when there is enough unique information to help a visitor decide. Explain the problem, process, expected outcome and common questions. Avoid thin pages that repeat the same copy with only a keyword changed.",
        ],
        checklist: [
          "Use clear page titles, headings and internal links.",
          "Explain who each service is for and what it includes.",
          "Link related services and relevant guides naturally.",
        ],
      },
      {
        heading: "Make contact and booking paths clear",
        paragraphs: [
          "Tell visitors what happens after they submit a form, request a quote, reserve a room or book an appointment. Ask only for information needed for the next step, display privacy expectations and provide a useful alternative contact method.",
        ],
        checklist: [
          "Test every form and scheduling link from start to finish.",
          "Set clear response-time and process expectations.",
          "Track completed actions without collecting unnecessary personal data.",
        ],
      },
      {
        heading: "Use original, accessible media",
        paragraphs: [
          "Relevant images, examples and diagrams can build understanding and trust. Compress media, use descriptive alternative text when an image adds meaning and remove outdated claims. Review important pages regularly as services and customer questions change.",
        ],
      },
    ],
    relatedServiceSlug: "small-business-web-design",
  },
  "seo-guide-small-medium-business": {
    slug: "seo-guide-small-medium-business",
    ...dates,
    title: "A practical SEO guide for small and medium-sized businesses",
    description:
      "A realistic SEO guide covering technical foundations, helpful content, search intent, authority and meaningful measurement.",
    excerpt:
      "Build a fast, useful and trustworthy website that search engines can understand and customers want to use.",
    intro: [
      "SEO helps the right people discover and evaluate a business through search. It is not a one-time trick, and no checklist can guarantee a ranking: relevance, quality, competition, authority and search context all influence results.",
      "Start with a technically sound website and genuinely useful content. Then measure qualified enquiries, sales, bookings and other business outcomes—not rankings alone.",
    ],
    sections: [
      {
        heading: "Fix website foundations",
        paragraphs: [
          "Create a clear page for each real service or location that deserves distinct information. Use descriptive titles and headings, make contact details easy to verify and ensure pages work quickly on mobile. Do not produce near-duplicate neighbourhood pages with only the place name changed.",
        ],
        checklist: [
          "Confirm indexable pages, self canonicals and working internal links.",
          "Place consistent business details and service-area information where helpful.",
          "Add relevant structured data without marking up claims users cannot see.",
        ],
      },
      {
        heading: "Match content to search intent",
        paragraphs: [
          "Research the language customers use and the questions they ask before contacting a provider. Build focused pages around real services, problems and decision points. Use descriptive titles, logical headings and internal links that help both people and search engines understand the site.",
        ],
        checklist: [
          "Assign one clear search purpose to each important page.",
          "Answer common questions with original, evidence-based content.",
          "Avoid keyword stuffing and near-duplicate pages.",
        ],
      },
      {
        heading: "Build authority and trust",
        paragraphs: [
          "Show real expertise through useful guides, transparent service information, policies, examples and accurate business details. Earn relevant mentions and links through genuine partnerships, strong work and resources worth referencing; never buy manipulative links or publish fabricated reviews.",
        ],
        checklist: [
          "Keep author, business and contact information accurate.",
          "Request honest customer feedback without filtering responses.",
          "Update or remove claims and links that are no longer current.",
        ],
      },
      {
        heading: "Measure outcomes and improve",
        paragraphs: [
          "Connect analytics and search performance tools, respecting consent and privacy requirements. Record a baseline, annotate major changes and review trends over meaningful periods. Search results fluctuate, so combine visibility data with qualified leads and revenue-related actions.",
        ],
        checklist: [
          "Track form completions, calls, bookings and direction clicks.",
          "Review queries and landing pages for unmet customer questions.",
          "Update weak content and technical issues before publishing more pages.",
        ],
      },
    ],
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
