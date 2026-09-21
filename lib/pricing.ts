import type { Locale } from "@/lib/i18n";

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
  id: "care" | "care-plus" | "seo-starter" | "seo-pro" | "ai-starter" | "ai-growth" | "ai-pro";
  price: string;
};

export type PricingItMonthlyPlan = {
  id: "it-lite" | "it-standard" | "it-business" | "it-web-bundle";
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
      { id: "ai-voice-agent", price: "$999" },
      { id: "calendar-automation", price: "$249" },
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
  {
    id: "it-support",
    items: [
      { id: "pc-setup", price: "from $149" },
      { id: "router-wifi", price: "from $199" },
      { id: "domain-dns", price: "$149" },
      { id: "hosting-ssl", price: "from $99" },
      { id: "email-setup", price: "from $199" },
      { id: "remote-hourly", price: "$95/hr" },
      { id: "onsite-hourly", price: "from $125/hr" },
      { id: "backup-setup", price: "from $249" },
    ],
  },
] as const;

export const pricingItMonthlyPlans: PricingItMonthlyPlan[] = [
  { id: "it-lite", price: "$149" },
  { id: "it-standard", price: "$299" },
  { id: "it-business", price: "$499" },
  { id: "it-web-bundle", price: "$649" },
];

export const pricingMonthlyPlans: PricingMonthlyPlan[] = [
  { id: "care", price: "$79" },
  { id: "care-plus", price: "$149" },
  { id: "seo-starter", price: "$200" },
  { id: "seo-pro", price: "$350" },
  { id: "ai-starter", price: "$299" },
  { id: "ai-growth", price: "$499" },
  { id: "ai-pro", price: "$799" },
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
  itMonthlyTitle: string;
  itMonthlySubtitle: string;
  itMarketNote: string;
  itTablePlan: string;
  itTablePrice: string;
  itTableBestFor: string;
  itTableIncludes: string;
  itMonthlyPlans: Record<
    PricingItMonthlyPlan["id"],
    { name: string; bestFor: string; includes: string[] }
  >;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaText: string;
  emailCta: string;
  callCta: string;
  footerNote: string;
};

const pricingCopy: Record<Locale, PricingCopy> = {
  en: {
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
          "1 months of free support",
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
          "2 months of free support",
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
          "ai-voice-agent": "AI voice agent setup & training",
          "calendar-automation": "Calendar & scheduling automation",
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
      "it-support": {
        title: "IT support & networking",
        items: {
          "pc-setup": "New computer setup & data migration",
          "router-wifi": "Router / Wi-Fi setup & optimization",
          "domain-dns": "Domain & DNS setup / transfer help",
          "hosting-ssl": "Hosting, SSL & website connection check",
          "email-setup": "Email & workspace setup (M365 / Google)",
          "remote-hourly": "Remote IT support (extra time)",
          "onsite-hourly": "On-site visit (local area)",
          "backup-setup": "Backup solution setup",
        },
      },
    },
    monthlyTitle: "Monthly plans",
    monthlySubtitle: "Website care, SEO, and AI automation — keep your digital presence secure, updated, and growing.",
    monthlyPlans: {
      care: {
        name: "Website Care",
        subtitle: "Essential maintenance for peace of mind.",
        features: [
          "Security updates and backups",
          "Uptime monitoring",
          "Up to 3 content update / month",
          "Email support (48h response)",
        ],
      },
      "care-plus": {
        name: "Website Care+",
        subtitle: "For businesses that need regular changes.",
        features: [
          "Everything in Website Care",
          "Up to 7 content updates / month",
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
      "ai-starter": {
        name: "AI Voice Starter",
        subtitle: "After-hours call answering & basic booking (1,000 min).",
        features: [
          "After-hours / inbound call answering (1 number)",
          "Natural voice conversation & FAQ answering",
          "Direct calendar booking & schedule sync",
          "1,000 call minutes included / month",
          "Instant SMS & email booking notifications",
        ],
      },
      "ai-growth": {
        name: "AI Automation Growth",
        subtitle: "24/7 continuous answering, calendar sync & SMS (2,500 min).",
        features: [
          "24/7 continuous call answering (1–2 numbers)",
          "Two-way live calendar sync & reschedule handling",
          "Automated SMS reminders & cancellation recovery",
          "2,500 call minutes included / month",
          "Call logs, conversation transcripts & lead capture",
        ],
      },
      "ai-pro": {
        name: "AI Automation Pro",
        subtitle: "Multiple providers/locations, CRM & analytics (6,000 min).",
        features: [
          "Multi-provider & multi-location call routing",
          "Full CRM integration & automated lead qualification",
          "6,000 call minutes included / month",
          "Advanced conversation analytics & call recordings",
          "Custom voice tuning & priority 24/7 support",
        ],
      },
    },
    itMonthlyTitle: "IT help desk & networking plans",
    itMonthlySubtitle:
      "Remote help desk plus light networking, domains, and hosting support. On-site visits available in our local service area.",
    itMarketNote:
      "Many Canadian providers charge about $45–$125+ per user/month for managed IT. These flat plans are built for small teams that want predictable monthly fees with included support sessions.",
    itTablePlan: "Plan",
    itTablePrice: "Price",
    itTableBestFor: "Best for",
    itTableIncludes: "Includes (summary)",
    itMonthlyPlans: {
      "it-lite": {
        name: "IT Help Desk Lite",
        bestFor: "1–3 users, occasional issues",
        includes: [
          "Up to 2 remote support tickets/month (30 min each)",
          "Email support (next business day)",
          "Software update guidance",
          "Password & account help",
        ],
      },
      "it-standard": {
        name: "IT Help Desk Standard",
        bestFor: "4–10 users, regular needs",
        includes: [
          "Up to 5 remote sessions/month (45 min each)",
          "Priority email support (24h)",
          "Remote PC tune-up quarterly",
          "Microsoft 365 / Google admin basics",
          "Minor DNS & email routing help",
        ],
      },
      "it-business": {
        name: "IT Business Care",
        bestFor: "Growing office, depends on systems",
        includes: [
          "Up to 8 remote sessions/month",
          "Priority phone & email support",
          "Monthly health check (backups, updates, Wi-Fi)",
          "Domain & DNS review",
          "1 on-site visit/month (local area) or credited remote hours",
        ],
      },
      "it-web-bundle": {
        name: "IT + Web Bundle",
        bestFor: "Clients on Website Care+",
        includes: [
          "Everything in Website Care+",
          "Everything in IT Help Desk Standard",
          "One invoice — website + help desk together",
          "Bundle savings vs separate plans",
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
        question: "Do you work in French and English?",
        answer:
          "Yes — all packages can be built bilingual (FR/EN). Premium includes full multi-language support.",
      },
      {
        question: "Do you offer on-site IT visits?",
        answer:
          "Yes. IT Business Care includes one on-site visit per month in our local service area (or equivalent remote time). Additional on-site time is from $125/hr. Remote help desk is available worldwide.",
      },
      {
        question: "What happens if I use more IT time than my plan includes?",
        answer:
          "Extra remote support is billed at $95/hr. We will always confirm before work that goes beyond your included sessions.",
      },
    ],
    ctaTitle: "Ready to grow your business?",
    ctaText:
      "Get a free consultation and custom quote. No obligation — let's talk about your project.",
    emailCta: "Email us",
    callCta: "Call us",
    footerNote: "Prices in CAD, subject to change.",
  },
  fr: {
    metaTitle: "Tarifs et forfaits",
    metaDescription:
      "Forfaits web transparents, services à la carte et plans mensuels pour les petites et moyennes entreprises. Prix en CAD.",
    eyebrow: "Tarification transparente",
    title: "Des forfaits simples pour",
    titleAccent: "chaque entreprise.",
    intro:
      "Aucun frais caché. Que vous ayez besoin d’un site de départ ou d’une plateforme e-commerce complète, il existe un forfait adapté à votre budget et à vos objectifs.",
    currency: "CAD",
    packagesTitle: "Forfaits web",
    packagesSubtitle:
      "Tous les forfaits incluent un design adaptatif, un chargement rapide et une configuration SEO de base.",
    packages: {
      starter: {
        name: "Starter",
        subtitle: "Idéal pour les nouvelles petites entreprises",
        priceNote: "Paiement unique · livraison en 2–3 semaines",
        features: [
          "Jusqu’à 3 pages (Accueil, À propos, Contact)",
          "Design adaptatif mobile et tablette",
          "Formulaire de contact avec notifications par courriel",
          "Intégration Google Maps",
          "Configuration SEO de base",
          "1 mois de support gratuit",
        ],
        cta: "Commencer",
      },
      business: {
        name: "Business",
        subtitle: "Pour les entreprises locales en croissance",
        priceNote: "Paiement unique · livraison en 3–4 semaines",
        badge: "Le plus populaire",
        features: [
          "Jusqu’à 7 pages (Services, Galerie, FAQ…)",
          "Design moderne sur mesure aligné à votre marque",
          "Formulaire + bouton WhatsApp / appel",
          "Configuration du profil Google Business",
          "Optimisation SEO avancée",
          "Intégration des réseaux sociaux",
          "3 mois de support gratuit",
        ],
        cta: "Commencer",
      },
      premium: {
        name: "Premium",
        subtitle: "Présence en ligne complète",
        priceNote: "Paiement unique · livraison en 4–6 semaines",
        features: [
          "Jusqu’à 12 pages + section blogue",
          "Prêt pour le commerce électronique (jusqu’à 25 produits)",
          "Système de réservation ou de rendez-vous",
          "Support multilingue (FR / EN)",
          "Audit SEO complet et mise en œuvre",
          "Configuration Google Analytics et Search Console",
          "6 mois de support gratuit",
        ],
        cta: "Commencer",
      },
    },
    alaCarteTitle: "Services à la carte",
    alaCarteSubtitle: "Composez votre propre forfait ou ajoutez des options.",
    alaCarteGroups: {
      "pages-design": {
        title: "Pages et design",
        items: {
          "extra-page": "Page supplémentaire (standard)",
          "landing-page": "Page d’atterrissage promotionnelle",
          "blog-setup": "Mise en place d’une section blogue",
          "logo-design": "Conception de logo (3 concepts)",
          "brand-guide": "Guide de style de marque",
          "gallery-page": "Page galerie photo",
        },
      },
      features: {
        title: "Fonctions et intégrations",
        items: {
          "contact-form": "Configuration de formulaire de contact",
          "google-maps": "Intégration Google Maps",
          "booking-system": "Système de réservation en ligne",
          "ai-voice-agent": "Configuration et entraînement d'agent vocal IA",
          "calendar-automation": "Automatisation d'agenda et réservations",
          "payment-gateway": "Passerelle de paiement (Stripe / PayPal)",
        },
      },
      commerce: {
        title: "Commerce et applications",
        items: {
          "ecommerce-setup": "Mise en place d’une boutique en ligne",
          "extra-product": "Produit supplémentaire (volume)",
          "mobile-app": "Application mobile (iOS ou Android)",
          "custom-software": "Logiciel / tableau de bord sur mesure",
          redesign: "Refonte de site existant",
          "domain-hosting": "Configuration domaine et hébergement",
        },
      },
      "it-support": {
        title: "Support TI et réseau",
        items: {
          "pc-setup": "Configuration d’ordinateur et migration de données",
          "router-wifi": "Configuration routeur / Wi-Fi",
          "domain-dns": "Domaine et DNS (configuration / transfert)",
          "hosting-ssl": "Hébergement, SSL et connexion du site",
          "email-setup": "Courriel et espace de travail (M365 / Google)",
          "remote-hourly": "Support TI à distance (temps supplémentaire)",
          "onsite-hourly": "Visite sur place (zone locale)",
          "backup-setup": "Mise en place de sauvegardes",
        },
      },
    },
    monthlyTitle: "Forfaits mensuels",
    monthlySubtitle:
      "Entretien du site, SEO et automatisation IA — gardez votre présence numérique sécurisée et en croissance.",
    monthlyPlans: {
      care: {
        name: "Website Care",
        subtitle: "Entretien essentiel pour votre tranquillité d’esprit.",
        features: [
          "Mises à jour de sécurité et sauvegardes",
          "Surveillance de disponibilité",
          "Jusqu’à 3 mises à jour de contenu / mois",
          "Support par courriel (réponse sous 48 h)",
        ],
      },
      "care-plus": {
        name: "Website Care+",
        subtitle: "Pour les entreprises qui changent souvent leur contenu.",
        features: [
          "Tout ce qui est inclus dans Website Care",
          "Jusqu’à 7 mises à jour de contenu / mois",
          "Rapport de performance mensuel",
          "Support prioritaire (réponse sous 24 h)",
        ],
      },
      "seo-starter": {
        name: "SEO Starter",
        subtitle: "Soyez trouvé sur Google à Montréal.",
        features: [
          "Recherche et suivi de mots-clés",
          "Optimisation SEO on-page",
          "Gestion du profil Google Business",
          "Rapport de classement mensuel",
        ],
      },
      "seo-pro": {
        name: "SEO Pro",
        subtitle: "Croissance active sur les marchés compétitifs.",
        features: [
          "Tout ce qui est inclus dans SEO Starter",
          "Création de contenu (2 articles / mois)",
          "Création de citations locales",
          "Rapport d’analyse concurrentielle",
          "Appel stratégique mensuel",
        ],
      },
      "ai-starter": {
        name: "IA Vocale Starter",
        subtitle: "Accueil hors heures d'ouverture et réservation (1 000 min).",
        features: [
          "Réponse aux appels entrants / hors heures (1 numéro)",
          "Conversation vocale naturelle et réponses aux FAQ",
          "Prise de rendez-vous directe et synchro agenda",
          "1 000 minutes d'appels incluses / mois",
          "Notifications instantanées par SMS et courriel",
        ],
      },
      "ai-growth": {
        name: "Automatisation IA Growth",
        subtitle: "Accueil 24/7, synchro d'agenda et confirmations SMS (2 500 min).",
        features: [
          "Réponse aux appels 24/7 en continu (1–2 numéros)",
          "Synchronisation d'agenda bidirectionnelle et reprogrammations",
          "Rappels automatiques par SMS et relances",
          "2 500 minutes d'appels incluses / mois",
          "Historique des appels, transcriptions et capture CRM",
        ],
      },
      "ai-pro": {
        name: "Automatisation IA Pro",
        subtitle: "Multi-praticiens/succursales, CRM et analytique (6 000 min).",
        features: [
          "Routage multi-praticiens et multi-établissements",
          "Intégration CRM complète et qualification de prospects",
          "6 000 minutes d'appels incluses / mois",
          "Analytique avancée des conversations et enregistrements",
          "Ajustement vocal sur mesure et support prioritaire",
        ],
      },
    },
    itMonthlyTitle: "Forfaits help desk TI et réseau",
    itMonthlySubtitle:
      "Help desk à distance, réseau léger, domaines et hébergement. Visites sur place dans notre zone de service.",
    itMarketNote:
      "Beaucoup de fournisseurs au Canada facturent environ 45–125 $+ par utilisateur/mois. Ces forfaits fixes conviennent aux petites équipes qui veulent un coût prévisible.",
    itTablePlan: "Forfait",
    itTablePrice: "Prix",
    itTableBestFor: "Idéal pour",
    itTableIncludes: "Inclus (résumé)",
    itMonthlyPlans: {
      "it-lite": {
        name: "Help Desk TI Lite",
        bestFor: "1–3 utilisateurs, besoins occasionnels",
        includes: [
          "Jusqu’à 2 billets de support à distance/mois (30 min chacun)",
          "Support par courriel (jour ouvrable suivant)",
          "Conseils pour mises à jour logicielles",
          "Aide mots de passe et comptes",
        ],
      },
      "it-standard": {
        name: "Help Desk TI Standard",
        bestFor: "4–10 utilisateurs, besoins réguliers",
        includes: [
          "Jusqu’à 5 sessions à distance/mois (45 min chacune)",
          "Courriel prioritaire (24 h)",
          "Optimisation PC à distance (trimestrielle)",
          "Bases admin Microsoft 365 / Google",
          "Aide DNS et routage courriel mineur",
        ],
      },
      "it-business": {
        name: "TI Business Care",
        bestFor: "Bureau en croissance, plusieurs systèmes",
        includes: [
          "Jusqu’à 8 sessions à distance/mois",
          "Support téléphone et courriel prioritaire",
          "Bilan mensuel (sauvegardes, mises à jour, Wi-Fi)",
          "Revue domaine et DNS",
          "1 visite sur place/mois (zone locale) ou heures à distance créditées",
        ],
      },
      "it-web-bundle": {
        name: "Forfait TI + Web",
        bestFor: "Clients avec Website Care+",
        includes: [
          "Tout ce qui est inclus dans Website Care+",
          "Tout ce qui est inclus dans Help Desk TI Standard",
          "Une facture — site web et help desk ensemble",
          "Économies par rapport aux forfaits séparés",
        ],
      },
    },
    faqTitle: "Questions fréquentes",
    faqs: [
      {
        question: "Exigez-vous un acompte?",
        answer:
          "Oui — 50 % au départ, 50 % à la livraison. Les forfaits mensuels sont facturés au début de chaque mois.",
      },
      {
        question: "Combien de temps prend un site web?",
        answer:
          "Starter : 2–3 semaines. Business : 3–4 semaines. Premium : 4–6 semaines. Le délai dépend de la rapidité avec laquelle vous fournissez le contenu.",
      },
      {
        question: "Est-ce que je possède mon site?",
        answer:
          "Absolument. Une fois payé en totalité, vous possédez tous les fichiers de design, le code et le contenu. Aucun contrat restrictif.",
      },
      {
        question: "Et l’hébergement et le domaine?",
        answer:
          "Nous pouvons les configurer pour vous (99 $ une fois) ou vous pouvez utiliser les vôtres. L’hébergement coûte généralement 10–20 $/mois.",
      },
      {
        question: "Puis-je changer de forfait plus tard?",
        answer:
          "Oui. Vous ne payez que la différence. Beaucoup de clients commencent avec Starter et évoluent ensuite.",
      },
      {
        question: "Travaillez-vous en français et en anglais?",
        answer:
          "Oui — tous les forfaits peuvent être bilingues (FR/EN). Premium inclut un support multilingue complet.",
      },
      {
        question: "Proposez-vous des visites TI sur place?",
        answer:
          "Oui. TI Business Care inclut une visite sur place par mois dans notre zone de service (ou un crédit d’heures à distance). Le temps supplémentaire sur place est à partir de 125 $/h. Le help desk à distance est disponible partout.",
      },
      {
        question: "Que se passe-t-il si j’utilise plus de temps TI que mon forfait?",
        answer:
          "Le support à distance supplémentaire est facturé 95 $/h. Nous confirmons toujours avant tout travail au-delà des sessions incluses.",
      },
    ],
    ctaTitle: "Prêt à faire croître votre entreprise?",
    ctaText:
      "Obtenez une consultation gratuite et un devis personnalisé. Sans obligation — parlons de votre projet.",
    emailCta: "Nous écrire",
    callCta: "Nous appeler",
    footerNote: "Prix en CAD, sujets à changement.",
  },
  es: {
    metaTitle: "Precios y tarifas",
    metaDescription:
      "Paquetes web transparentes, servicios a la carta y planes mensuales para pequeñas y medianas empresas. Precios en CAD.",
    eyebrow: "Precios transparentes",
    title: "Planes simples para",
    titleAccent: "cada negocio.",
    intro:
      "Sin cargos ocultos. Ya sea que necesites un sitio inicial o una plataforma de comercio electrónico completa, hay un plan que se adapta a tu presupuesto y objetivos.",
    currency: "CAD",
    packagesTitle: "Paquetes web",
    packagesSubtitle:
      "Todos los paquetes incluyen diseño adaptable, carga rápida y configuración SEO básica.",
    packages: {
      starter: {
        name: "Starter",
        subtitle: "Perfecto para nuevas pequeñas empresas",
        priceNote: "Pago único · entrega en 2–3 semanas",
        features: [
          "Hasta 3 páginas (Inicio, Nosotros, Contacto)",
          "Diseño adaptable para móvil y tableta",
          "Formulario de contacto con notificaciones por correo",
          "Integración con Google Maps",
          "Configuración SEO básica",
          "1 mes de soporte gratuito",
        ],
        cta: "Empezar",
      },
      business: {
        name: "Business",
        subtitle: "Para negocios locales en crecimiento",
        priceNote: "Pago único · entrega en 3–4 semanas",
        badge: "Más popular",
        features: [
          "Hasta 7 páginas (Servicios, Galería, FAQ…)",
          "Diseño moderno personalizado acorde a tu marca",
          "Formulario + botón de WhatsApp / llamada",
          "Configuración de Google Business Profile",
          "Optimización SEO avanzada",
          "Integración de redes sociales",
          "3 meses de soporte gratuito",
        ],
        cta: "Empezar",
      },
      premium: {
        name: "Premium",
        subtitle: "Presencia online completa",
        priceNote: "Pago único · entrega en 4–6 semanas",
        features: [
          "Hasta 12 páginas + sección de blog",
          "Listo para comercio electrónico (hasta 25 productos)",
          "Sistema de reservas o citas",
          "Soporte multilingüe (FR / EN)",
          "Auditoría SEO completa e implementación",
          "Configuración de Google Analytics y Search Console",
          "6 meses de soporte gratuito",
        ],
        cta: "Empezar",
      },
    },
    alaCarteTitle: "Servicios a la carta",
    alaCarteSubtitle: "Crea tu propio paquete o añade extras a cualquier plan.",
    alaCarteGroups: {
      "pages-design": {
        title: "Páginas y diseño",
        items: {
          "extra-page": "Página adicional (estándar)",
          "landing-page": "Landing page promocional",
          "blog-setup": "Configuración de sección de blog",
          "logo-design": "Diseño de logo (3 conceptos)",
          "brand-guide": "Guía de estilo de marca",
          "gallery-page": "Página de galería fotográfica",
        },
      },
      features: {
        title: "Funciones e integraciones",
        items: {
          "contact-form": "Configuración de formulario de contacto",
          "google-maps": "Incorporación de Google Maps",
          "booking-system": "Sistema de reservas online",
          "ai-voice-agent": "Configuración y entrenamiento de agente de voz IA",
          "calendar-automation": "Automatización de calendario y citas",
          "payment-gateway": "Pasarela de pago (Stripe / PayPal)",
        },
      },
      commerce: {
        title: "Comercio y apps",
        items: {
          "ecommerce-setup": "Configuración de tienda online",
          "extra-product": "Producto adicional (volumen)",
          "mobile-app": "Aplicación móvil (iOS o Android)",
          "custom-software": "Software / panel personalizado",
          redesign: "Rediseño de sitio existente",
          "domain-hosting": "Configuración de dominio y hosting",
        },
      },
      "it-support": {
        title: "Soporte TI y redes",
        items: {
          "pc-setup": "Configuración de PC y migración de datos",
          "router-wifi": "Router / Wi-Fi y optimización",
          "domain-dns": "Dominio y DNS (configuración / transferencia)",
          "hosting-ssl": "Hosting, SSL y conexión del sitio",
          "email-setup": "Correo y workspace (M365 / Google)",
          "remote-hourly": "Soporte remoto (tiempo extra)",
          "onsite-hourly": "Visita presencial (zona local)",
          "backup-setup": "Configuración de copias de seguridad",
        },
      },
    },
    monthlyTitle: "Planes mensuales",
    monthlySubtitle:
      "Cuidado del sitio, SEO y automatización IA — mantén tu presencia digital segura y en crecimiento.",
    monthlyPlans: {
      care: {
        name: "Website Care",
        subtitle: "Mantenimiento esencial para tu tranquilidad.",
        features: [
          "Actualizaciones de seguridad y copias de seguridad",
          "Monitorización de disponibilidad",
          "Hasta 3 actualizaciones de contenido / mes",
          "Soporte por correo (respuesta en 48 h)",
        ],
      },
      "care-plus": {
        name: "Website Care+",
        subtitle: "Para negocios que necesitan cambios frecuentes.",
        features: [
          "Todo lo incluido en Website Care",
          "Hasta 7 actualizaciones de contenido / mes",
          "Informe mensual de rendimiento",
          "Soporte prioritario (respuesta en 24 h)",
        ],
      },
      "seo-starter": {
        name: "SEO Starter",
        subtitle: "Hazte visible en Google en Montreal.",
        features: [
          "Investigación y seguimiento de palabras clave",
          "Optimización SEO on-page",
          "Gestión de Google Business Profile",
          "Informe mensual de posicionamiento",
        ],
      },
      "seo-pro": {
        name: "SEO Pro",
        subtitle: "Crecimiento activo en mercados competitivos.",
        features: [
          "Todo lo incluido en SEO Starter",
          "Creación de contenido (2 artículos / mes)",
          "Creación de citas locales",
          "Informe de análisis de competencia",
          "Llamada estratégica mensual",
        ],
      },
      "ai-starter": {
        name: "Voz IA Starter",
        subtitle: "Atención fuera de horario y citas básicas (1.000 min).",
        features: [
          "Atención telefónica / fuera de horario (1 número)",
          "Conversación de voz natural y respuestas a FAQ",
          "Agendamiento directo en calendario en tiempo real",
          "1.000 minutos de llamada incluidos / mes",
          "Notificaciones inmediatas por SMS y correo",
        ],
      },
      "ai-growth": {
        name: "Automatización IA Growth",
        subtitle: "Atención 24/7, sincronización de calendario y SMS (2.500 min).",
        features: [
          "Atención telefónica continua 24/7 (1–2 números)",
          "Sincronización bidireccional de calendario y cambios de hora",
          "Recordatorios automáticos por SMS y seguimiento",
          "2.500 minutos de llamada incluidos / mes",
          "Registro de llamadas, transcripciones y captura de prospectos",
        ],
      },
      "ai-pro": {
        name: "Automatización IA Pro",
        subtitle: "Múltiples especialistas/sedes, CRM y analítica (6.000 min).",
        features: [
          "Enrutamiento para múltiples profesionales y sedes",
          "Integración completa con CRM y cualificación de leads",
          "6.000 minutos de llamada incluidos / mes",
          "Analítica avanzada de conversaciones y grabaciones",
          "Calibración de voz personalizada y soporte prioritario",
        ],
      },
    },
    itMonthlyTitle: "Planes de help desk TI y redes",
    itMonthlySubtitle:
      "Help desk remoto, redes ligeras, dominios y hosting. Visitas presenciales en nuestra zona de servicio.",
    itMarketNote:
      "Muchos proveedores en Canadá cobran alrededor de 45–125 $+ por usuario/mes. Estos planes fijos están pensados para equipos pequeños con tarifa predecible.",
    itTablePlan: "Plan",
    itTablePrice: "Precio",
    itTableBestFor: "Ideal para",
    itTableIncludes: "Incluye (resumen)",
    itMonthlyPlans: {
      "it-lite": {
        name: "Help Desk TI Lite",
        bestFor: "1–3 usuarios, necesidades ocasionales",
        includes: [
          "Hasta 2 tickets remotos/mes (30 min cada uno)",
          "Correo (siguiente día hábil)",
          "Guía de actualizaciones de software",
          "Ayuda con contraseñas y cuentas",
        ],
      },
      "it-standard": {
        name: "Help Desk TI Standard",
        bestFor: "4–10 usuarios, necesidades regulares",
        includes: [
          "Hasta 5 sesiones remotas/mes (45 min cada una)",
          "Correo prioritario (24 h)",
          "Optimización remota del PC (trimestral)",
          "Bases de admin Microsoft 365 / Google",
          "Ayuda menor con DNS y correo",
        ],
      },
      "it-business": {
        name: "TI Business Care",
        bestFor: "Oficina en crecimiento, varios sistemas",
        includes: [
          "Hasta 8 sesiones remotas/mes",
          "Soporte telefónico y por correo prioritario",
          "Revisión mensual (copias, actualizaciones, Wi-Fi)",
          "Revisión de dominio y DNS",
          "1 visita presencial/mes (zona local) o horas remotas acreditadas",
        ],
      },
      "it-web-bundle": {
        name: "Paquete TI + Web",
        bestFor: "Clientes con Website Care+",
        includes: [
          "Todo lo incluido en Website Care+",
          "Todo lo incluido en Help Desk TI Standard",
          "Una factura — sitio web y help desk juntos",
          "Ahorro frente a planes separados",
        ],
      },
    },
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "¿Requieren un depósito?",
        answer:
          "Sí — 50 % al inicio, 50 % en la entrega. Los planes mensuales se facturan al comienzo de cada mes.",
      },
      {
        question: "¿Cuánto tarda un sitio web?",
        answer:
          "Starter: 2–3 semanas. Business: 3–4 semanas. Premium: 4–6 semanas. El plazo depende de la rapidez con la que proporciones el contenido.",
      },
      {
        question: "¿Soy dueño de mi sitio web?",
        answer:
          "Por supuesto. Una vez pagado por completo, eres dueño de todos los archivos de diseño, código y contenido. Sin contratos restrictivos.",
      },
      {
        question: "¿Qué pasa con el hosting y el dominio?",
        answer:
          "Podemos configurarlo por ti ($99 una vez) o puedes usar el tuyo. El hosting suele costar $10–20/mes por separado.",
      },
      {
        question: "¿Puedo mejorar mi paquete más adelante?",
        answer:
          "Sí. Solo pagas la diferencia. Muchos clientes empiezan con Starter y escalan después.",
      },
      {
        question: "¿Trabajan en francés e inglés?",
        answer:
          "Sí — todos los paquetes pueden ser bilingües (FR/EN). Premium incluye soporte multilingüe completo.",
      },
      {
        question: "¿Ofrecen visitas TI presenciales?",
        answer:
          "Sí. TI Business Care incluye una visita presencial al mes en nuestra zona de servicio (o tiempo remoto equivalente). Tiempo extra presencial desde 125 $/h. El help desk remoto está disponible en todo el mundo.",
      },
      {
        question: "¿Qué pasa si uso más tiempo TI que incluye mi plan?",
        answer:
          "El soporte remoto adicional se factura a 95 $/h. Siempre confirmamos antes de trabajar fuera de las sesiones incluidas.",
      },
    ],
    ctaTitle: "¿Listo para hacer crecer tu negocio?",
    ctaText:
      "Obtén una consulta gratuita y un presupuesto personalizado. Sin compromiso — hablemos de tu proyecto.",
    emailCta: "Enviar correo",
    callCta: "Llamar",
    footerNote: "Precios en CAD, sujetos a cambios.",
  },
  it: {
    metaTitle: "Prezzi e tariffe",
    metaDescription:
      "Pacchetti web trasparenti, servizi à la carte e piani mensili per piccole e medie imprese. Prezzi in CAD.",
    eyebrow: "Prezzi trasparenti",
    title: "Piani semplici per",
    titleAccent: "ogni attività.",
    intro:
      "Nessun costo nascosto. Che tu abbia bisogno di un sito iniziale o di una piattaforma e-commerce completa, c’è un piano adatto al tuo budget e ai tuoi obiettivi.",
    currency: "CAD",
    packagesTitle: "Pacchetti web",
    packagesSubtitle:
      "Tutti i pacchetti includono design responsive, caricamento rapido e configurazione SEO di base.",
    packages: {
      starter: {
        name: "Starter",
        subtitle: "Perfetto per nuove piccole imprese",
        priceNote: "Pagamento unico · consegna in 2–3 settimane",
        features: [
          "Fino a 3 pagine (Home, Chi siamo, Contatti)",
          "Design responsive per mobile e tablet",
          "Modulo di contatto con notifiche email",
          "Integrazione Google Maps",
          "Configurazione SEO di base",
          "1 mese di supporto gratuito",
        ],
        cta: "Inizia",
      },
      business: {
        name: "Business",
        subtitle: "Per attività locali in crescita",
        priceNote: "Pagamento unico · consegna in 3–4 settimane",
        badge: "Più popolare",
        features: [
          "Fino a 7 pagine (Servizi, Galleria, FAQ…)",
          "Design moderno personalizzato per il tuo brand",
          "Modulo + pulsante WhatsApp / chiamata",
          "Configurazione Google Business Profile",
          "Ottimizzazione SEO avanzata",
          "Integrazione social media",
          "3 mesi di supporto gratuito",
        ],
        cta: "Inizia",
      },
      premium: {
        name: "Premium",
        subtitle: "Presenza online completa",
        priceNote: "Pagamento unico · consegna in 4–6 settimane",
        features: [
          "Fino a 12 pagine + sezione blog",
          "Pronto per e-commerce (fino a 25 prodotti)",
          "Sistema di prenotazione o appuntamenti",
          "Supporto multilingue (FR / EN)",
          "Audit SEO completo e implementazione",
          "Configurazione Google Analytics e Search Console",
          "6 mesi di supporto gratuito",
        ],
        cta: "Inizia",
      },
    },
    alaCarteTitle: "Servizi à la carte",
    alaCarteSubtitle: "Crea il tuo pacchetto o aggiungi extra a qualsiasi piano.",
    alaCarteGroups: {
      "pages-design": {
        title: "Pagine e design",
        items: {
          "extra-page": "Pagina aggiuntiva (standard)",
          "landing-page": "Landing page promozionale",
          "blog-setup": "Configurazione sezione blog",
          "logo-design": "Design logo (3 concept)",
          "brand-guide": "Guida di stile del brand",
          "gallery-page": "Pagina galleria fotografica",
        },
      },
      features: {
        title: "Funzioni e integrazioni",
        items: {
          "contact-form": "Configurazione modulo di contatto",
          "google-maps": "Incorporazione Google Maps",
          "booking-system": "Sistema di prenotazione online",
          "ai-voice-agent": "Configurazione e training di agenti vocali IA",
          "calendar-automation": "Automazione calendario e appuntamenti",
          "payment-gateway": "Gateway di pagamento (Stripe / PayPal)",
        },
      },
      commerce: {
        title: "E-commerce e app",
        items: {
          "ecommerce-setup": "Configurazione negozio online",
          "extra-product": "Prodotto aggiuntivo (volume)",
          "mobile-app": "App mobile (iOS o Android)",
          "custom-software": "Software / dashboard personalizzato",
          redesign: "Redesign sito esistente",
          "domain-hosting": "Configurazione dominio e hosting",
        },
      },
      "it-support": {
        title: "Supporto IT e reti",
        items: {
          "pc-setup": "Configurazione PC e migrazione dati",
          "router-wifi": "Router / Wi-Fi e ottimizzazione",
          "domain-dns": "Dominio e DNS (setup / trasferimento)",
          "hosting-ssl": "Hosting, SSL e collegamento sito",
          "email-setup": "Email e workspace (M365 / Google)",
          "remote-hourly": "Supporto remoto (tempo extra)",
          "onsite-hourly": "Visita in loco (zona locale)",
          "backup-setup": "Configurazione backup",
        },
      },
    },
    monthlyTitle: "Piani mensili",
    monthlySubtitle:
      "Cura del sito, SEO e automazione IA — mantieni la presenza digitale sicura e in crescita.",
    monthlyPlans: {
      care: {
        name: "Website Care",
        subtitle: "Manutenzione essenziale per la tua tranquillità.",
        features: [
          "Aggiornamenti di sicurezza e backup",
          "Monitoraggio uptime",
          "Fino a 3 aggiornamenti contenuti / mese",
          "Supporto email (risposta entro 48 h)",
        ],
      },
      "care-plus": {
        name: "Website Care+",
        subtitle: "Per attività che richiedono modifiche frequenti.",
        features: [
          "Tutto ciò che è incluso in Website Care",
          "Fino a 7 aggiornamenti contenuti / mese",
          "Report mensile sulle performance",
          "Supporto prioritario (risposta entro 24 h)",
        ],
      },
      "seo-starter": {
        name: "SEO Starter",
        subtitle: "Fatti trovare su Google a Montreal.",
        features: [
          "Ricerca e monitoraggio keyword",
          "Ottimizzazione SEO on-page",
          "Gestione Google Business Profile",
          "Report mensile posizionamento",
        ],
      },
      "seo-pro": {
        name: "SEO Pro",
        subtitle: "Crescita attiva su mercati competitivi.",
        features: [
          "Tutto ciò che è incluso in SEO Starter",
          "Creazione contenuti (2 articoli / mese)",
          "Creazione citazioni locali",
          "Report analisi concorrenti",
          "Call strategica mensile",
        ],
      },
      "ai-starter": {
        name: "Voce IA Starter",
        subtitle: "Risposta fuori orario e prenotazioni base (1.000 min).",
        features: [
          "Risposta alle chiamate / fuori orario (1 numero)",
          "Conversazione vocale naturale e risposte a FAQ",
          "Prenotazione diretta e sincronizzazione calendario",
          "1.000 minuti di chiamata inclusi / mese",
          "Notifiche istantanee via SMS ed e-mail",
        ],
      },
      "ai-growth": {
        name: "Automazione IA Growth",
        subtitle: "Risposta 24/7, sincronizzazione calendario e SMS (2.500 min).",
        features: [
          "Risposta telefonica continua 24/7 (1–2 numeri)",
          "Sincronizzazione bidirezionale calendario e riprogrammazione",
          "Promemoria automatici via SMS e recupero cancellazioni",
          "2.500 minuti di chiamata inclusi / mese",
          "Registro chiamate, trascrizioni e acquisizione lead",
        ],
      },
      "ai-pro": {
        name: "Automazione IA Pro",
        subtitle: "Multi-professionista/sedi, CRM e analytics (6.000 min).",
        features: [
          "Instradamento per più professionisti e sedi",
          "Integrazione CRM completa e qualificazione lead",
          "6.000 minuti di chiamata inclusi / mese",
          "Analytics avanzata delle conversazioni e registrazioni",
          "Calibrazione vocale su misura e supporto prioritario",
        ],
      },
    },
    itMonthlyTitle: "Piani help desk IT e reti",
    itMonthlySubtitle:
      "Help desk remoto, reti leggere, domini e hosting. Visite in loco nella nostra zona di servizio.",
    itMarketNote:
      "Molti fornitori in Canada applicano circa 45–125 $+ per utente/mese. Questi piani flat sono pensati per piccoli team con costo mensile prevedibile.",
    itTablePlan: "Piano",
    itTablePrice: "Prezzo",
    itTableBestFor: "Ideale per",
    itTableIncludes: "Include (riepilogo)",
    itMonthlyPlans: {
      "it-lite": {
        name: "Help Desk IT Lite",
        bestFor: "1–3 utenti, esigenze occasionali",
        includes: [
          "Fino a 2 ticket remoti/mese (30 min ciascuno)",
          "Email (giorno lavorativo successivo)",
          "Guida aggiornamenti software",
          "Aiuto password e account",
        ],
      },
      "it-standard": {
        name: "Help Desk IT Standard",
        bestFor: "4–10 utenti, esigenze regolari",
        includes: [
          "Fino a 5 sessioni remote/mese (45 min ciascuna)",
          "Email prioritaria (24 h)",
          "Ottimizzazione PC remota (trimestrale)",
          "Basi admin Microsoft 365 / Google",
          "Aiuto minore DNS e email",
        ],
      },
      "it-business": {
        name: "IT Business Care",
        bestFor: "Ufficio in crescita, più sistemi",
        includes: [
          "Fino a 8 sessioni remote/mese",
          "Supporto telefonico ed email prioritario",
          "Controllo mensile (backup, aggiornamenti, Wi-Fi)",
          "Revisione dominio e DNS",
          "1 visita in loco/mese (zona locale) o ore remote accreditate",
        ],
      },
      "it-web-bundle": {
        name: "Pacchetto IT + Web",
        bestFor: "Clienti con Website Care+",
        includes: [
          "Tutto ciò che è incluso in Website Care+",
          "Tutto ciò che è incluso in Help Desk IT Standard",
          "Una fattura — sito e help desk insieme",
          "Risparmio rispetto ai piani separati",
        ],
      },
    },
    faqTitle: "Domande frequenti",
    faqs: [
      {
        question: "Richiedete un acconto?",
        answer:
          "Sì — 50% all’inizio, 50% alla consegna. I piani mensili vengono fatturati all’inizio di ogni mese.",
      },
      {
        question: "Quanto tempo serve per un sito web?",
        answer:
          "Starter: 2–3 settimane. Business: 3–4 settimane. Premium: 4–6 settimane. I tempi dipendono da quanto rapidamente fornisci i contenuti.",
      },
      {
        question: "Il sito mi appartiene?",
        answer:
          "Assolutamente. Una volta pagato per intero, possiedi tutti i file di design, il codice e i contenuti. Nessun vincolo contrattuale.",
      },
      {
        question: "E hosting e dominio?",
        answer:
          "Possiamo configurarli per te ($99 una tantum) oppure puoi usare i tuoi. L’hosting costa in genere $10–20/mese a parte.",
      },
      {
        question: "Posso aggiornare il pacchetto in seguito?",
        answer:
          "Sì. Paghi solo la differenza. Molti clienti iniziano con Starter e crescono nel tempo.",
      },
      {
        question: "Lavorate in francese e inglese?",
        answer:
          "Sì — tutti i pacchetti possono essere bilingue (FR/EN). Premium include supporto multilingue completo.",
      },
      {
        question: "Offrite visite IT in loco?",
        answer:
          "Sì. IT Business Care include una visita in loco al mese nella nostra zona di servizio (o ore remote equivalenti). Tempo extra in loco da 125 $/h. Il help desk remoto è disponibile in tutto il mondo.",
      },
      {
        question: "Cosa succede se uso più tempo IT del piano incluso?",
        answer:
          "Il supporto remoto aggiuntivo è fatturato a 95 $/h. Confermiamo sempre prima di lavorare oltre le sessioni incluse.",
      },
    ],
    ctaTitle: "Pronto a far crescere la tua attività?",
    ctaText:
      "Ottieni una consulenza gratuita e un preventivo personalizzato. Senza impegno — parliamo del tuo progetto.",
    emailCta: "Invia email",
    callCta: "Chiama",
    footerNote: "Prezzi in CAD, soggetti a modifiche.",
  },
};

export function getPricingCopy(locale: Locale): PricingCopy {
  return pricingCopy[locale];
}
