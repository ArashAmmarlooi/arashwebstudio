export type PricingPackage = {
  id: "starter" | "business" | "premium";
  price: string;
  featured?: boolean;
};

export type PricingLineItem = {
  id: string;
  price: string;
  priceNote?: string;
};

export type PricingMonthlyPlan = {
  id: "care" | "care-plus" | "seo-starter" | "seo-pro";
  price: string;
};

export const pricingPackages: PricingPackage[] = [
  { id: "starter", price: "$400" },
  { id: "business", price: "$1,000", featured: true },
  { id: "premium", price: "$2,000" },
];

export const pricingAlaCarteGroups = [
  {
    id: "pages-design",
    items: [
      { id: "extra-page", price: "$175" },
      { id: "landing-page", price: "$299" },
      { id: "blog-setup", price: "$250" },
      { id: "logo-design", price: "$100" },
      { id: "brand-guide", price: "$450" },
      { id: "gallery-page", price: "$125" },
    ],
  },
  {
    id: "features",
    items: [
      { id: "contact-form", price: "$100" },
      { id: "google-maps", price: "$79" },
      { id: "booking-system", price: "$399" },
      { id: "live-chat", price: "$149" },
      { id: "newsletter", price: "$129" },
      { id: "payment-gateway", price: "$299" },
    ],
  },
  {
    id: "commerce",
    items: [
      { id: "ecommerce-setup", price: "from $899" },
      { id: "extra-product", price: "$5", priceNote: "/product" },
      { id: "mobile-app", price: "from $4,999" },
      { id: "custom-software", price: "Custom quote" },
      { id: "redesign", price: "from $699" },
      { id: "domain-hosting", price: "$99" },
    ],
  },
] as const;

export const pricingMonthlyPlans: PricingMonthlyPlan[] = [
  { id: "care", price: "$79" },
  { id: "care-plus", price: "$149" },
  { id: "seo-starter", price: "$300" },
  { id: "seo-pro", price: "$350" },
];

export type PricingCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  currency: string;
  packagesTitle: string;
  packagesSubtitle: string;
  packages: Record<
    PricingPackage["id"],
    {
      name: string;
      subtitle: string;
      priceNote: string;
      features: string[];
      cta: string;
      badge?: string;
    }
  >;
  alaCarteTitle: string;
  alaCarteSubtitle: string;
  alaCarteGroups: Record<
    (typeof pricingAlaCarteGroups)[number]["id"],
    { title: string; items: Record<string, string> }
  >;
  monthlyTitle: string;
  monthlySubtitle: string;
  monthlyPlans: Record<
    PricingMonthlyPlan["id"],
    { name: string; subtitle: string; features: string[] }
  >;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaText: string;
  emailCta: string;
  callCta: string;
  footerNote: string;
};

const pricingCopy: PricingCopy = {
    metaTitle: "Pricing & Tariffs",
    metaDescription:
      "Transparent website packages, à la carte services and monthly care plans for small and medium-sized businesses. Prices in CAD.",
    eyebrow: "Transparent pricing",
    title: "Simple plans for",
    titleAccent: "every business.",
    intro:
      "No hidden fees. Whether you need a starter site or a full e-commerce platform, there is a plan that fits your budget and goals.",
    currency: "CAD",
    packagesTitle: "Website packages",
    packagesSubtitle:
      "All packages include mobile-responsive design, fast loading and basic SEO setup.",
    packages: {
      starter: {
        name: "Starter",
        subtitle: "Perfect for new small businesses",
        priceNote: "One-time payment · 2–3 week delivery",
        features: [
          "Up to 3 pages (Home, About, Contact)",
          "Mobile and tablet responsive design",
          "Contact form with email notifications",
          "Google Maps integration",
          "Basic on-page SEO setup",
          "1 month of free support",
        ],
        cta: "Get started",
      },
      business: {
        name: "Business",
        subtitle: "For growing local businesses",
        priceNote: "One-time payment · 3–4 week delivery",
        badge: "Most popular",
        features: [
          "Up to 7 pages (Services, Gallery, FAQ…)",
          "Custom modern design matching your brand",
          "Contact form + WhatsApp / call button",
          "Google Business Profile setup",
          "Advanced on-page SEO optimization",
          "Social media links integration",
          "3 months of free support",
        ],
        cta: "Get started",
      },
      premium: {
        name: "Premium",
        subtitle: "Full-featured online presence",
        priceNote: "One-time payment · 4–6 week delivery",
        features: [
          "Up to 12 pages + blog section",
          "E-commerce ready (up to 25 products)",
          "Online booking or appointment system",
          "Multi-language support (FR / EN)",
          "Full SEO audit and implementation",
          "Google Analytics and Search Console setup",
          "6 months of free support",
        ],
        cta: "Get started",
      },
    },
    alaCarteTitle: "À la carte services",
    alaCarteSubtitle: "Build your own package or add extras to any plan.",
    alaCarteGroups: {
      "pages-design": {
        title: "Pages & design",
        items: {
          "extra-page": "Additional page (standard)",
          "landing-page": "Landing page (single-page promo)",
          "blog-setup": "Blog section setup",
          "logo-design": "Logo design (3 concepts)",
          "brand-guide": "Brand style guide",
          "gallery-page": "Photo gallery page",
        },
      },
      features: {
        title: "Features & integrations",
        items: {
          "contact-form": "Contact form setup",
          "google-maps": "Google Maps embed",
          "booking-system": "Online booking system",
          "live-chat": "Live chat widget",
          newsletter: "Newsletter signup (Mailchimp)",
          "payment-gateway": "Payment gateway (Stripe / PayPal)",
        },
      },
      commerce: {
        title: "E-commerce & apps",
        items: {
          "ecommerce-setup": "E-commerce store setup",
          "extra-product": "Each additional product (bulk)",
          "mobile-app": "Mobile app (iOS or Android)",
          "custom-software": "Custom software / dashboard",
          redesign: "Website redesign (existing site)",
          "domain-hosting": "Domain and hosting setup",
        },
      },
    },
    monthlyTitle: "Monthly plans",
    monthlySubtitle: "Keep your website secure, updated and ranking on Google.",
    monthlyPlans: {
      care: {
        name: "Website Care",
        subtitle: "Essential maintenance for peace of mind.",
        features: [
          "Security updates and backups",
          "Uptime monitoring",
          "Up to 1 content update / month",
          "Email support (48h response)",
        ],
      },
      "care-plus": {
        name: "Website Care+",
        subtitle: "For businesses that need regular changes.",
        features: [
          "Everything in Website Care",
          "Up to 4 content updates / month",
          "Monthly performance report",
          "Priority support (24h response)",
        ],
      },
      "seo-starter": {
        name: "SEO Starter",
        subtitle: "Get found on Google in Montreal.",
        features: [
          "Keyword research and tracking",
          "On-page SEO optimization",
          "Google Business Profile management",
          "Monthly ranking report",
        ],
      },
      "seo-pro": {
        name: "SEO Pro",
        subtitle: "Aggressive growth for competitive markets.",
        features: [
          "Everything in SEO Starter",
          "Content creation (2 articles / month)",
          "Local citation building",
          "Competitor analysis report",
          "Monthly strategy call",
        ],
      },
    },
    faqTitle: "Common questions",
    faqs: [
      {
        question: "Do you require a deposit?",
        answer:
          "Yes — 50% upfront to start, 50% on delivery. Monthly plans are billed at the start of each month.",
      },
      {
        question: "How long does a website take?",
        answer:
          "Starter: 2–3 weeks. Business: 3–4 weeks. Premium: 4–6 weeks. Timeline depends on how quickly you provide content.",
      },
      {
        question: "Do I own my website?",
        answer:
          "Absolutely. Once paid in full, you own all design files, code and content. No lock-in contracts.",
      },
      {
        question: "What about hosting and domain?",
        answer:
          "We can set it up for you ($99 one-time) or you can use your own. Typical hosting costs $10–20/month separately.",
      },
      {
        question: "Can I upgrade my package later?",
        answer:
          "Yes. You only pay the difference. Many clients start with Starter and upgrade as their business grows.",
      },
      {
        question: "Can you help with content and copywriting?",
        answer:
          "Yes — we can help shape page copy, service descriptions and calls to action so the site speaks clearly to your audience.",
      },
    ],
    ctaTitle: "Ready to grow your business?",
    ctaText:
      "Get a free consultation and custom quote. No obligation — let's talk about your project.",
    emailCta: "Email us",
    callCta: "Call us",
    footerNote: "Prices in CAD, subject to change.",
};

export function getPricingCopy(): PricingCopy {
  return pricingCopy;
}
