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
        question: "Do you work in French and English?",
        answer:
          "Yes — all packages can be built bilingual (FR/EN). Premium includes full multi-language support.",
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
          "live-chat": "Widget de clavardage en direct",
          newsletter: "Inscription infolettre (Mailchimp)",
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
    },
    monthlyTitle: "Forfaits mensuels",
    monthlySubtitle: "Gardez votre site sécurisé, à jour et visible sur Google.",
    monthlyPlans: {
      care: {
        name: "Website Care",
        subtitle: "Entretien essentiel pour votre tranquillité d’esprit.",
        features: [
          "Mises à jour de sécurité et sauvegardes",
          "Surveillance de disponibilité",
          "Jusqu’à 1 mise à jour de contenu / mois",
          "Support par courriel (réponse sous 48 h)",
        ],
      },
      "care-plus": {
        name: "Website Care+",
        subtitle: "Pour les entreprises qui changent souvent leur contenu.",
        features: [
          "Tout ce qui est inclus dans Website Care",
          "Jusqu’à 4 mises à jour de contenu / mois",
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
          "live-chat": "Widget de chat en vivo",
          newsletter: "Suscripción a newsletter (Mailchimp)",
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
    },
    monthlyTitle: "Planes mensuales",
    monthlySubtitle: "Mantén tu sitio seguro, actualizado y posicionado en Google.",
    monthlyPlans: {
      care: {
        name: "Website Care",
        subtitle: "Mantenimiento esencial para tu tranquilidad.",
        features: [
          "Actualizaciones de seguridad y copias de seguridad",
          "Monitorización de disponibilidad",
          "Hasta 1 actualización de contenido / mes",
          "Soporte por correo (respuesta en 48 h)",
        ],
      },
      "care-plus": {
        name: "Website Care+",
        subtitle: "Para negocios que necesitan cambios frecuentes.",
        features: [
          "Todo lo incluido en Website Care",
          "Hasta 4 actualizaciones de contenido / mes",
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
    ],
    ctaTitle: "¿Listo para hacer crecer tu negocio?",
    ctaText:
      "Obtén una consulta gratuita y un presupuesto personalizado. Sin compromiso — hablemos de tu proyecto.",
    emailCta: "Enviar correo",
    callCta: "Llamar",
    footerNote: "Precios en CAD, sujetos a cambios.",
  },
  de: {
    metaTitle: "Preise und Tarife",
    metaDescription:
      "Transparente Website-Pakete, Einzelleistungen und monatliche Betreuungspläne für kleine und mittlere Unternehmen. Preise in CAD.",
    eyebrow: "Transparente Preise",
    title: "Einfache Pakete für",
    titleAccent: "jedes Unternehmen.",
    intro:
      "Keine versteckten Gebühren. Ob Starter-Website oder vollständige E-Commerce-Plattform — es gibt ein Paket, das zu Budget und Zielen passt.",
    currency: "CAD",
    packagesTitle: "Website-Pakete",
    packagesSubtitle:
      "Alle Pakete umfassen responsives Design, schnelle Ladezeiten und grundlegendes SEO-Setup.",
    packages: {
      starter: {
        name: "Starter",
        subtitle: "Ideal für neue kleine Unternehmen",
        priceNote: "Einmalzahlung · Lieferung in 2–3 Wochen",
        features: [
          "Bis zu 3 Seiten (Start, Über uns, Kontakt)",
          "Responsives Design für Mobilgeräte und Tablets",
          "Kontaktformular mit E-Mail-Benachrichtigungen",
          "Google-Maps-Integration",
          "Grundlegendes On-Page-SEO",
          "1 Monat kostenloser Support",
        ],
        cta: "Loslegen",
      },
      business: {
        name: "Business",
        subtitle: "Für wachsende lokale Unternehmen",
        priceNote: "Einmalzahlung · Lieferung in 3–4 Wochen",
        badge: "Am beliebtesten",
        features: [
          "Bis zu 7 Seiten (Leistungen, Galerie, FAQ…)",
          "Individuelles modernes Design passend zur Marke",
          "Kontaktformular + WhatsApp / Anruf-Button",
          "Google-Business-Profil-Setup",
          "Erweiterte On-Page-SEO-Optimierung",
          "Integration sozialer Medien",
          "3 Monate kostenloser Support",
        ],
        cta: "Loslegen",
      },
      premium: {
        name: "Premium",
        subtitle: "Vollständige Online-Präsenz",
        priceNote: "Einmalzahlung · Lieferung in 4–6 Wochen",
        features: [
          "Bis zu 12 Seiten + Blog-Bereich",
          "E-Commerce-fähig (bis zu 25 Produkte)",
          "Online-Buchungs- oder Terminsystem",
          "Mehrsprachiger Support (FR / EN)",
          "Vollständiges SEO-Audit und Umsetzung",
          "Google Analytics und Search Console Setup",
          "6 Monate kostenloser Support",
        ],
        cta: "Loslegen",
      },
    },
    alaCarteTitle: "Einzelne Leistungen",
    alaCarteSubtitle: "Stellen Sie Ihr eigenes Paket zusammen oder ergänzen Sie jedes Paket.",
    alaCarteGroups: {
      "pages-design": {
        title: "Seiten & Design",
        items: {
          "extra-page": "Zusätzliche Seite (Standard)",
          "landing-page": "Landingpage (Promotion)",
          "blog-setup": "Blog-Bereich einrichten",
          "logo-design": "Logo-Design (3 Konzepte)",
          "brand-guide": "Marken-Styleguide",
          "gallery-page": "Fotogalerie-Seite",
        },
      },
      features: {
        title: "Funktionen & Integrationen",
        items: {
          "contact-form": "Kontaktformular einrichten",
          "google-maps": "Google Maps einbinden",
          "booking-system": "Online-Buchungssystem",
          "live-chat": "Live-Chat-Widget",
          newsletter: "Newsletter-Anmeldung (Mailchimp)",
          "payment-gateway": "Zahlungsgateway (Stripe / PayPal)",
        },
      },
      commerce: {
        title: "E-Commerce & Apps",
        items: {
          "ecommerce-setup": "Onlineshop einrichten",
          "extra-product": "Zusätzliches Produkt (Menge)",
          "mobile-app": "Mobile App (iOS oder Android)",
          "custom-software": "Individuelle Software / Dashboard",
          redesign: "Website-Redesign (bestehende Seite)",
          "domain-hosting": "Domain- und Hosting-Setup",
        },
      },
    },
    monthlyTitle: "Monatliche Pläne",
    monthlySubtitle: "Halten Sie Ihre Website sicher, aktuell und bei Google sichtbar.",
    monthlyPlans: {
      care: {
        name: "Website Care",
        subtitle: "Wesentliche Wartung für Ihre Sicherheit.",
        features: [
          "Sicherheitsupdates und Backups",
          "Uptime-Monitoring",
          "Bis zu 1 Inhaltsupdate / Monat",
          "E-Mail-Support (Antwort innerhalb 48 h)",
        ],
      },
      "care-plus": {
        name: "Website Care+",
        subtitle: "Für Unternehmen mit regelmäßigen Änderungen.",
        features: [
          "Alles aus Website Care",
          "Bis zu 4 Inhaltsupdates / Monat",
          "Monatlicher Performance-Bericht",
          "Prioritäts-Support (Antwort innerhalb 24 h)",
        ],
      },
      "seo-starter": {
        name: "SEO Starter",
        subtitle: "Bei Google in Montreal gefunden werden.",
        features: [
          "Keyword-Recherche und Tracking",
          "On-Page-SEO-Optimierung",
          "Google-Business-Profil-Verwaltung",
          "Monatlicher Ranking-Bericht",
        ],
      },
      "seo-pro": {
        name: "SEO Pro",
        subtitle: "Aktives Wachstum in wettbewerbsintensiven Märkten.",
        features: [
          "Alles aus SEO Starter",
          "Content-Erstellung (2 Artikel / Monat)",
          "Aufbau lokaler Zitationen",
          "Wettbewerbsanalyse-Bericht",
          "Monatlicher Strategie-Call",
        ],
      },
    },
    faqTitle: "Häufige Fragen",
    faqs: [
      {
        question: "Ist eine Anzahlung erforderlich?",
        answer:
          "Ja — 50 % zum Start, 50 % bei Lieferung. Monatliche Pläne werden zu Monatsbeginn abgerechnet.",
      },
      {
        question: "Wie lange dauert eine Website?",
        answer:
          "Starter: 2–3 Wochen. Business: 3–4 Wochen. Premium: 4–6 Wochen. Der Zeitplan hängt davon ab, wie schnell Sie Inhalte liefern.",
      },
      {
        question: "Gehört die Website mir?",
        answer:
          "Ja. Nach vollständiger Bezahlung gehören Ihnen alle Design-Dateien, der Code und die Inhalte. Keine Bindungsverträge.",
      },
      {
        question: "Was ist mit Hosting und Domain?",
        answer:
          "Wir können das für Sie einrichten ($99 einmalig) oder Sie nutzen Ihre eigenen. Hosting kostet typischerweise $10–20/Monat extra.",
      },
      {
        question: "Kann ich mein Paket später upgraden?",
        answer:
          "Ja. Sie zahlen nur die Differenz. Viele Kunden starten mit Starter und erweitern später.",
      },
      {
        question: "Arbeiten Sie auf Französisch und Englisch?",
        answer:
          "Ja — alle Pakete können zweisprachig (FR/EN) sein. Premium enthält vollständigen Mehrsprach-Support.",
      },
    ],
    ctaTitle: "Bereit, Ihr Unternehmen wachsen zu lassen?",
    ctaText:
      "Erhalten Sie eine kostenlose Beratung und ein individuelles Angebot. Unverbindlich — sprechen wir über Ihr Projekt.",
    emailCta: "E-Mail senden",
    callCta: "Anrufen",
    footerNote: "Preise in CAD, Änderungen vorbehalten.",
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
          "live-chat": "Widget chat live",
          newsletter: "Iscrizione newsletter (Mailchimp)",
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
    },
    monthlyTitle: "Piani mensili",
    monthlySubtitle: "Mantieni il sito sicuro, aggiornato e visibile su Google.",
    monthlyPlans: {
      care: {
        name: "Website Care",
        subtitle: "Manutenzione essenziale per la tua tranquillità.",
        features: [
          "Aggiornamenti di sicurezza e backup",
          "Monitoraggio uptime",
          "Fino a 1 aggiornamento contenuti / mese",
          "Supporto email (risposta entro 48 h)",
        ],
      },
      "care-plus": {
        name: "Website Care+",
        subtitle: "Per attività che richiedono modifiche frequenti.",
        features: [
          "Tutto ciò che è incluso in Website Care",
          "Fino a 4 aggiornamenti contenuti / mese",
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
    ],
    ctaTitle: "Pronto a far crescere la tua attività?",
    ctaText:
      "Ottieni una consulenza gratuita e un preventivo personalizzato. Senza impegno — parliamo del tuo progetto.",
    emailCta: "Invia email",
    callCta: "Chiama",
    footerNote: "Prezzi in CAD, soggetti a modifiche.",
  },
  pt: {
    metaTitle: "Preços e tarifas",
    metaDescription:
      "Pacotes web transparentes, serviços à la carte e planos mensais para pequenas e médias empresas. Preços em CAD.",
    eyebrow: "Preços transparentes",
    title: "Planos simples para",
    titleAccent: "cada negócio.",
    intro:
      "Sem taxas ocultas. Quer precise de um site inicial ou de uma plataforma de comércio eletrónico completa, há um plano que se adapta ao seu orçamento e objetivos.",
    currency: "CAD",
    packagesTitle: "Pacotes web",
    packagesSubtitle:
      "Todos os pacotes incluem design responsivo, carregamento rápido e configuração SEO básica.",
    packages: {
      starter: {
        name: "Starter",
        subtitle: "Perfeito para novas pequenas empresas",
        priceNote: "Pagamento único · entrega em 2–3 semanas",
        features: [
          "Até 3 páginas (Início, Sobre, Contacto)",
          "Design responsivo para telemóvel e tablet",
          "Formulário de contacto com notificações por e-mail",
          "Integração Google Maps",
          "Configuração SEO básica",
          "1 mês de suporte gratuito",
        ],
        cta: "Começar",
      },
      business: {
        name: "Business",
        subtitle: "Para negócios locais em crescimento",
        priceNote: "Pagamento único · entrega em 3–4 semanas",
        badge: "Mais popular",
        features: [
          "Até 7 páginas (Serviços, Galeria, FAQ…)",
          "Design moderno personalizado para a sua marca",
          "Formulário + botão WhatsApp / chamada",
          "Configuração Google Business Profile",
          "Otimização SEO avançada",
          "Integração de redes sociais",
          "3 meses de suporte gratuito",
        ],
        cta: "Começar",
      },
      premium: {
        name: "Premium",
        subtitle: "Presença online completa",
        priceNote: "Pagamento único · entrega em 4–6 semanas",
        features: [
          "Até 12 páginas + secção de blog",
          "Pronto para comércio eletrónico (até 25 produtos)",
          "Sistema de reservas ou marcações",
          "Suporte multilingue (FR / EN)",
          "Auditoria SEO completa e implementação",
          "Configuração Google Analytics e Search Console",
          "6 meses de suporte gratuito",
        ],
        cta: "Começar",
      },
    },
    alaCarteTitle: "Serviços à la carte",
    alaCarteSubtitle: "Crie o seu próprio pacote ou adicione extras a qualquer plano.",
    alaCarteGroups: {
      "pages-design": {
        title: "Páginas e design",
        items: {
          "extra-page": "Página adicional (padrão)",
          "landing-page": "Landing page promocional",
          "blog-setup": "Configuração de secção de blog",
          "logo-design": "Design de logótipo (3 conceitos)",
          "brand-guide": "Guia de estilo da marca",
          "gallery-page": "Página de galeria fotográfica",
        },
      },
      features: {
        title: "Funcionalidades e integrações",
        items: {
          "contact-form": "Configuração de formulário de contacto",
          "google-maps": "Incorporação Google Maps",
          "booking-system": "Sistema de reservas online",
          "live-chat": "Widget de chat ao vivo",
          newsletter: "Inscrição na newsletter (Mailchimp)",
          "payment-gateway": "Gateway de pagamento (Stripe / PayPal)",
        },
      },
      commerce: {
        title: "Comércio e apps",
        items: {
          "ecommerce-setup": "Configuração de loja online",
          "extra-product": "Produto adicional (volume)",
          "mobile-app": "Aplicação móvel (iOS ou Android)",
          "custom-software": "Software / painel personalizado",
          redesign: "Redesign de site existente",
          "domain-hosting": "Configuração de domínio e alojamento",
        },
      },
    },
    monthlyTitle: "Planos mensais",
    monthlySubtitle: "Mantenha o site seguro, atualizado e visível no Google.",
    monthlyPlans: {
      care: {
        name: "Website Care",
        subtitle: "Manutenção essencial para a sua tranquilidade.",
        features: [
          "Atualizações de segurança e backups",
          "Monitorização de disponibilidade",
          "Até 1 atualização de conteúdo / mês",
          "Suporte por e-mail (resposta em 48 h)",
        ],
      },
      "care-plus": {
        name: "Website Care+",
        subtitle: "Para negócios que precisam de alterações frequentes.",
        features: [
          "Tudo incluído no Website Care",
          "Até 4 atualizações de conteúdo / mês",
          "Relatório mensal de desempenho",
          "Suporte prioritário (resposta em 24 h)",
        ],
      },
      "seo-starter": {
        name: "SEO Starter",
        subtitle: "Seja encontrado no Google em Montreal.",
        features: [
          "Pesquisa e acompanhamento de palavras-chave",
          "Otimização SEO on-page",
          "Gestão do Google Business Profile",
          "Relatório mensal de posicionamento",
        ],
      },
      "seo-pro": {
        name: "SEO Pro",
        subtitle: "Crescimento ativo em mercados competitivos.",
        features: [
          "Tudo incluído no SEO Starter",
          "Criação de conteúdo (2 artigos / mês)",
          "Criação de citações locais",
          "Relatório de análise da concorrência",
          "Chamada estratégica mensal",
        ],
      },
    },
    faqTitle: "Perguntas frequentes",
    faqs: [
      {
        question: "Exigem um depósito?",
        answer:
          "Sim — 50% no início, 50% na entrega. Os planos mensais são faturados no início de cada mês.",
      },
      {
        question: "Quanto tempo demora um site?",
        answer:
          "Starter: 2–3 semanas. Business: 3–4 semanas. Premium: 4–6 semanas. O prazo depende da rapidez com que fornece o conteúdo.",
      },
      {
        question: "O site pertence-me?",
        answer:
          "Sim. Depois de pago na totalidade, possui todos os ficheiros de design, código e conteúdo. Sem contratos de retenção.",
      },
      {
        question: "E quanto ao alojamento e domínio?",
        answer:
          "Podemos configurar por si ($99 uma vez) ou pode usar os seus. O alojamento costuma custar $10–20/mês separadamente.",
      },
      {
        question: "Posso fazer upgrade do pacote mais tarde?",
        answer:
          "Sim. Paga apenas a diferença. Muitos clientes começam com Starter e evoluem depois.",
      },
      {
        question: "Trabalham em francês e inglês?",
        answer:
          "Sim — todos os pacotes podem ser bilingues (FR/EN). Premium inclui suporte multilingue completo.",
      },
    ],
    ctaTitle: "Pronto para fazer crescer o seu negócio?",
    ctaText:
      "Obtenha uma consulta gratuita e um orçamento personalizado. Sem compromisso — falemos do seu projeto.",
    emailCta: "Enviar e-mail",
    callCta: "Ligar",
    footerNote: "Preços em CAD, sujeitos a alteração.",
  },
  zh: {
    metaTitle: "价格与套餐",
    metaDescription:
      "为中小型企业提供透明的网站套餐、单项服务与月度维护计划。价格以 CAD 计。",
    eyebrow: "透明定价",
    title: "适合",
    titleAccent: "各类企业的简洁方案。",
    intro:
      "无隐藏费用。无论您需要入门网站还是完整电商平台，都有符合预算与目标的方案。",
    currency: "CAD",
    packagesTitle: "网站套餐",
    packagesSubtitle: "所有套餐均包含响应式设计、快速加载与基础 SEO 配置。",
    packages: {
      starter: {
        name: "Starter",
        subtitle: "适合新成立的小型企业",
        priceNote: "一次性付款 · 2–3 周交付",
        features: [
          "最多 3 个页面（首页、关于、联系）",
          "手机与平板响应式设计",
          "带邮件通知的联系表单",
          "Google 地图集成",
          "基础页面 SEO 配置",
          "1 个月免费支持",
        ],
        cta: "开始",
      },
      business: {
        name: "Business",
        subtitle: "适合成长中的本地企业",
        priceNote: "一次性付款 · 3–4 周交付",
        badge: "最受欢迎",
        features: [
          "最多 7 个页面（服务、图库、FAQ 等）",
          "符合品牌的定制现代设计",
          "联系表单 + WhatsApp / 电话按钮",
          "Google Business Profile 配置",
          "高级页面 SEO 优化",
          "社交媒体链接集成",
          "3 个月免费支持",
        ],
        cta: "开始",
      },
      premium: {
        name: "Premium",
        subtitle: "功能完整的在线形象",
        priceNote: "一次性付款 · 4–6 周交付",
        features: [
          "最多 12 个页面 + 博客板块",
          "支持电子商务（最多 25 个产品）",
          "在线预订或预约系统",
          "多语言支持（法语 / 英语）",
          "完整 SEO 审计与实施",
          "Google Analytics 与 Search Console 配置",
          "6 个月免费支持",
        ],
        cta: "开始",
      },
    },
    alaCarteTitle: "单项服务",
    alaCarteSubtitle: "自由组合套餐或为任意方案添加附加项。",
    alaCarteGroups: {
      "pages-design": {
        title: "页面与设计",
        items: {
          "extra-page": "额外页面（标准）",
          "landing-page": "落地页（单页推广）",
          "blog-setup": "博客板块搭建",
          "logo-design": "Logo 设计（3 个方案）",
          "brand-guide": "品牌风格指南",
          "gallery-page": "照片图库页面",
        },
      },
      features: {
        title: "功能与集成",
        items: {
          "contact-form": "联系表单配置",
          "google-maps": "Google 地图嵌入",
          "booking-system": "在线预订系统",
          "live-chat": "在线聊天组件",
          newsletter: "邮件订阅（Mailchimp）",
          "payment-gateway": "支付网关（Stripe / PayPal）",
        },
      },
      commerce: {
        title: "电商与应用",
        items: {
          "ecommerce-setup": "电商商店搭建",
          "extra-product": "额外产品（批量）",
          "mobile-app": "移动应用（iOS 或 Android）",
          "custom-software": "定制软件 / 仪表盘",
          redesign: "现有网站改版",
          "domain-hosting": "域名与托管配置",
        },
      },
    },
    monthlyTitle: "月度计划",
    monthlySubtitle: "保持网站安全、更新并在 Google 上获得曝光。",
    monthlyPlans: {
      care: {
        name: "Website Care",
        subtitle: "基础维护，让您安心。",
        features: [
          "安全更新与备份",
          "正常运行时间监控",
          "每月最多 1 次内容更新",
          "邮件支持（48 小时内回复）",
        ],
      },
      "care-plus": {
        name: "Website Care+",
        subtitle: "适合需要频繁更新的企业。",
        features: [
          "包含 Website Care 全部内容",
          "每月最多 4 次内容更新",
          "月度性能报告",
          "优先支持（24 小时内回复）",
        ],
      },
      "seo-starter": {
        name: "SEO Starter",
        subtitle: "在蒙特利尔通过 Google 被发现。",
        features: [
          "关键词研究与跟踪",
          "页面 SEO 优化",
          "Google Business Profile 管理",
          "月度排名报告",
        ],
      },
      "seo-pro": {
        name: "SEO Pro",
        subtitle: "在竞争激烈的市场中积极增长。",
        features: [
          "包含 SEO Starter 全部内容",
          "内容创作（每月 2 篇文章）",
          "本地引用建设",
          "竞争对手分析报告",
          "月度策略沟通",
        ],
      },
    },
    faqTitle: "常见问题",
    faqs: [
      {
        question: "是否需要定金？",
        answer: "需要 — 开工前支付 50%，交付时支付 50%。月度计划在每月初计费。",
      },
      {
        question: "网站需要多长时间？",
        answer:
          "Starter：2–3 周。Business：3–4 周。Premium：4–6 周。时间取决于您提供内容的速度。",
      },
      {
        question: "网站归我所有吗？",
        answer: "当然。付清全款后，您拥有所有设计文件、代码和内容。无绑定合同。",
      },
      {
        question: "托管和域名怎么办？",
        answer:
          "我们可以为您配置（一次性 $99），或使用您自己的。托管通常另需 $10–20/月。",
      },
      {
        question: "之后可以升级套餐吗？",
        answer: "可以。您只需支付差价。许多客户从 Starter 开始，随后升级。",
      },
      {
        question: "支持法语和英语吗？",
        answer: "支持 — 所有套餐均可双语（FR/EN）。Premium 包含完整多语言支持。",
      },
    ],
    ctaTitle: "准备好推动业务增长了吗？",
    ctaText: "获取免费咨询与定制报价。无强制义务 — 欢迎聊聊您的项目。",
    emailCta: "发送邮件",
    callCta: "致电",
    footerNote: "价格以 CAD 计，可能调整。",
  },
};

export function getPricingCopy(locale: Locale): PricingCopy {
  return pricingCopy[locale];
}
