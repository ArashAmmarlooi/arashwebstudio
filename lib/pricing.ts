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
};

export function getPricingCopy(locale: Locale): PricingCopy {
  return pricingCopy[locale];
}
