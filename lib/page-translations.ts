import type { Locale } from "@/lib/i18n";

type Step = { title: string; description: string };
type Value = { title: string; description: string };
type ProjectOption = { value: string; label: string };

export type PageTranslations = {
  nav: {
    home: string;
    about: string;
    services: string;
    pricing: string;
    blog: string;
    contact: string;
    startProject: string;
    primaryLabel: string;
    mobileLabel: string;
    openMenu: string;
    closeMenu: string;
    homeLabel: string;
    languageLabel: string;
  };
  footer: {
    description: string;
    pages: string;
    services: string;
    getInTouch: string;
    location: string;
    serviceArea: string;
    copyright: string;
    serviceTitles: Record<string, string>;
  };
  home: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    processEyebrow: string;
    processTitle: string;
    steps: Step[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  about: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    statLabels: [string, string, string, string];
    storyTitle: string;
    storyTitleAccent: string;
    storyParagraphs: [string, string];
    imageAlt: string;
    valuesEyebrow: string;
    valuesTitle: string;
    values: Value[];
    ctaTitle: string;
    ctaAccent: string;
    ctaButton: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    directTitle: string;
    directText: string;
    phone: string;
    email: string;
    serviceArea: string;
    serviceAreaValue: string;
    experience: string;
    formTitle: string;
    name: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    projectType: string;
    projectOptions: ProjectOption[];
    details: string;
    sending: string;
    send: string;
    success: string;
    genericError: string;
    errorFallback: string;
  };
  metadata: {
    homeTitle: string;
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
};

const serviceValues = [
  "Business Website",
  "E-commerce Store",
  "Booking / Appointment Website",
  "Advertising / Campaign Landing Page",
  "Mobile Application",
  "Custom Software",
  "Something Else",
] as const;

function options(labels: readonly string[]): ProjectOption[] {
  return serviceValues.map((value, index) => ({ value, label: labels[index] }));
}

export const pageTranslations: Record<Locale, PageTranslations> = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", pricing: "Pricing", blog: "Blog", contact: "Contact", startProject: "Start a Project", primaryLabel: "Primary navigation", mobileLabel: "Mobile navigation", openMenu: "Open menu", closeMenu: "Close menu", homeLabel: "Arash Web Studio home", languageLabel: "Language" },
    footer: {
      description: "Arash Web Studio designs responsive websites, e-commerce experiences, booking systems, mobile apps and custom software for small and medium-sized businesses worldwide.",
      pages: "Pages", services: "Services", getInTouch: "Get in touch", location: "Remote digital studio", serviceArea: "Working with clients worldwide", copyright: "Web design and digital solutions worldwide.",
      serviceTitles: { "ecommerce-web-design": "E-commerce Website Design", "booking-website-design": "Booking & Appointment Websites", "small-business-web-design": "Small & Medium Business Web Design", "mobile-app-design": "Mobile Application Design", "custom-software-development": "Custom Software Development", "brand-identity-design": "Brand & Visual Identity Design" },
    },
    home: {
      eyebrow: "Web · SEO · Mobile · Software", title: "Digital experiences built for", titleAccent: "business growth.", intro: "Responsive web design and development for small and medium-sized businesses anywhere in the world. We create business websites, e-commerce stores, booking and appointment experiences, advertising landing pages, mobile apps and custom software.", primaryCta: "Start Your Project", secondaryCta: "About the Studio", imageAlt: "Responsive website design displayed on a phone and laptop", processEyebrow: "How it works", processTitle: "From strategy to measurable growth",
      steps: [{ title: "Discover", description: "We listen to your vision, your business and your goals." }, { title: "Design", description: "Clean concepts crafted around your brand and audience." }, { title: "Build", description: "Careful development for web, mobile and software." }, { title: "Launch", description: "We ship, optimize and support your product worldwide." }],
      ctaTitle: "Ready to improve your digital presence?", ctaText: "Tell us about your goals and we will shape a responsive, search-ready website, app or platform around your business.", ctaButton: "Let's Talk",
    },
    about: {
      eyebrow: "About us", title: "Independent studio.", titleAccent: "Business-focused design.", intro: "Arash Web Studio is a digital design and development studio managed by Arash Ammarlooi. Since 2013, the studio has built practical digital experiences for organizations around the world.", statLabels: ["Years of experience", "Projects delivered", "Countries reached", "Commitment to quality"], storyTitle: "A flexible studio built around", storyTitleAccent: "your goals", storyParagraphs: ["Arash Web Studio combines strategy, design and development in one focused process. Clients have a clear point of contact from the first conversation through launch, with trusted specialists involved when a project needs additional expertise.", "The work is shaped around each organization, its audience and its market. The aim is not simply to launch an attractive page, but to create a useful, accessible and responsive digital experience that can support long-term growth."], imageAlt: "Globe representing businesses served worldwide", valuesEyebrow: "What drives us", valuesTitle: "Our values",
      values: [{ title: "Flexible Collaboration", description: "A focused core studio works with trusted independent specialists when a project needs additional expertise." }, { title: "Purposeful Craft", description: "Every layout, interaction and technical decision should serve the audience and the business goal." }, { title: "Business-First Thinking", description: "Design is connected to clear outcomes such as stronger credibility, qualified inquiries, bookings and sales." }, { title: "Long-Term Partnership", description: "The process includes clear communication, a dependable launch and room for continued improvement." }],
      ctaTitle: "Want personal service backed by", ctaAccent: "real experience?", ctaButton: "Get in Touch",
    },
    contact: {
      eyebrow: "Contact", title: "Let's make something", titleAccent: "useful.", intro: "Tell Arash Web Studio about your goals, audience, required pages or features, timeline and available content. You will usually receive a reply within 24 hours.", directTitle: "Contact the studio", directText: "Call, text or email to discuss a new website, redesign, e-commerce experience, booking flow, mobile app or custom platform.", phone: "Phone", email: "Email", serviceArea: "Service area", serviceAreaValue: "Available to businesses worldwide", experience: "10+ years of experience · projects delivered across 5 countries.", formTitle: "Start your project", name: "Your name", emailPlaceholder: "Your email", phonePlaceholder: "Phone (optional)", projectType: "Project type", projectOptions: options(serviceValues), details: "Tell us about your business, goals, audience, timeline and required features", sending: "Sending...", send: "Send Message", success: "Message sent! We'll get back to you within 24 hours.", genericError: "Something went wrong.", errorFallback: "You can also email us directly at",
    },
    metadata: { homeTitle: "Web Design, SEO & Development | Arash Web Studio", homeDescription: "Responsive websites, e-commerce, booking systems, mobile apps and custom software for small and medium-sized businesses worldwide.", aboutTitle: "About Arash Web Studio", aboutDescription: "Learn how Arash Web Studio approaches responsive design, SEO, content, development and long-term digital growth.", contactTitle: "Contact Arash Web Studio", contactDescription: "Contact the studio to discuss a responsive business website, e-commerce store, booking experience, mobile app or custom software project." },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", services: "Services", pricing: "Tarifs", blog: "Blogue", contact: "Contact", startProject: "Démarrer un projet", primaryLabel: "Navigation principale", mobileLabel: "Navigation mobile", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", homeLabel: "Accueil d’Arash Web Studio", languageLabel: "Langue" },
    footer: { description: "Arash Web Studio conçoit des sites adaptatifs, des expériences de commerce électronique, des systèmes de réservation, des applications mobiles et des logiciels sur mesure pour les petites et moyennes entreprises du monde entier.", pages: "Pages", services: "Services", getInTouch: "Nous joindre", location: "Studio numérique à distance", serviceArea: "Collaboration avec des clients du monde entier", copyright: "Conception web et solutions numériques dans le monde entier.", serviceTitles: { "ecommerce-web-design": "Conception de sites de commerce électronique", "booking-website-design": "Sites de réservation et de prise de rendez-vous", "small-business-web-design": "Conception web pour petites et moyennes entreprises", "mobile-app-design": "Conception d’applications mobiles", "custom-software-development": "Développement de logiciels sur mesure", "brand-identity-design": "Conception de marque et d’identité visuelle" } },
    home: { eyebrow: "Web · SEO · Mobile · Logiciel", title: "Des expériences numériques conçues pour", titleAccent: "faire progresser votre entreprise.", intro: "Conception et développement web adaptatifs pour les petites et moyennes entreprises partout dans le monde. Nous créons des sites d’entreprise, des boutiques en ligne, des parcours de réservation et de rendez-vous, des pages de campagne, des applications mobiles et des logiciels sur mesure.", primaryCta: "Démarrer votre projet", secondaryCta: "À propos du studio", imageAlt: "Site web adaptatif affiché sur un téléphone et un ordinateur portable", processEyebrow: "Notre méthode", processTitle: "De la stratégie à une croissance mesurable", steps: [{ title: "Découverte", description: "Nous écoutons votre vision, votre activité et vos objectifs." }, { title: "Conception", description: "Des concepts clairs adaptés à votre marque et à votre public." }, { title: "Réalisation", description: "Un développement soigné pour le web, le mobile et les logiciels." }, { title: "Lancement", description: "Nous livrons, optimisons et soutenons votre produit partout dans le monde." }], ctaTitle: "Prêt à améliorer votre présence numérique?", ctaText: "Présentez-nous vos objectifs et nous créerons un site, une application ou une plateforme adaptative et optimisée pour la recherche.", ctaButton: "Parlons-en" },
    about: { eyebrow: "À propos", title: "Studio indépendant.", titleAccent: "Conception axée sur l’entreprise.", intro: "Arash Web Studio est un studio de conception et de développement numérique géré par Arash Ammarlooi. Depuis 2013, le studio crée des expériences numériques pratiques pour des organisations du monde entier.", statLabels: ["Années d’expérience", "Projets réalisés", "Pays desservis", "Engagement envers la qualité"], storyTitle: "Un studio flexible centré sur", storyTitleAccent: "vos objectifs", storyParagraphs: ["Arash Web Studio réunit stratégie, conception et développement dans un processus ciblé. Les clients disposent d’un point de contact clair du premier échange au lancement, avec l’appui de spécialistes de confiance lorsque le projet exige une expertise supplémentaire.", "Chaque projet est adapté à l’organisation, à son public et à son marché. L’objectif est de créer une expérience numérique utile, accessible et adaptative qui favorise une croissance durable."], imageAlt: "Globe représentant des entreprises servies dans le monde entier", valuesEyebrow: "Ce qui nous anime", valuesTitle: "Nos valeurs", values: [{ title: "Collaboration flexible", description: "Un studio central ciblé collabore avec des spécialistes indépendants de confiance lorsque le projet exige une expertise supplémentaire." }, { title: "Conception intentionnelle", description: "Chaque mise en page, interaction et décision technique doit servir le public et l’objectif de l’entreprise." }, { title: "Une vision axée sur l’entreprise", description: "La conception vise des résultats clairs comme une meilleure crédibilité, des demandes qualifiées, des réservations et des ventes." }, { title: "Partenariat durable", description: "Le processus privilégie une communication claire, un lancement fiable et une amélioration continue." }], ctaTitle: "Vous souhaitez un service attentif appuyé par", ctaAccent: "une expérience concrète?", ctaButton: "Nous joindre" },
    contact: { eyebrow: "Contact", title: "Créons quelque chose d’", titleAccent: "utile.", intro: "Présentez à Arash Web Studio vos objectifs, votre public, les pages ou fonctions requises, votre échéancier et le contenu disponible. Vous recevrez généralement une réponse dans les 24 heures.", directTitle: "Contacter le studio", directText: "Appelez, textez ou écrivez-nous pour discuter d’un nouveau site, d’une refonte, d’une boutique en ligne, d’un parcours de réservation, d’une application mobile ou d’une plateforme sur mesure.", phone: "Téléphone", email: "Courriel", serviceArea: "Zone desservie", serviceAreaValue: "Disponible pour les entreprises du monde entier", experience: "Plus de 10 ans d’expérience · projets réalisés dans 5 pays.", formTitle: "Démarrer votre projet", name: "Votre nom", emailPlaceholder: "Votre courriel", phonePlaceholder: "Téléphone (facultatif)", projectType: "Type de projet", projectOptions: options(["Site web d’entreprise", "Boutique en ligne", "Site de réservation ou de rendez-vous", "Publicité / Page de campagne", "Application mobile", "Logiciel sur mesure", "Autre"]), details: "Parlez-nous de votre entreprise, de vos objectifs, de votre public, de votre échéancier et des fonctions requises", sending: "Envoi en cours...", send: "Envoyer le message", success: "Message envoyé! Nous vous répondrons dans les 24 heures.", genericError: "Une erreur est survenue.", errorFallback: "Vous pouvez aussi nous écrire directement à" },
    metadata: { homeTitle: "Conception web, SEO et développement | Arash Web Studio", homeDescription: "Sites adaptatifs, commerce électronique, systèmes de réservation, applications mobiles et logiciels sur mesure pour les petites et moyennes entreprises du monde entier.", aboutTitle: "À propos d’Arash Web Studio", aboutDescription: "Découvrez l’approche d’Arash Web Studio en matière de conception adaptative, de SEO, de contenu, de développement et de croissance numérique durable.", contactTitle: "Contacter Arash Web Studio", contactDescription: "Contactez le studio pour discuter d’un site d’entreprise adaptatif, d’une boutique en ligne, d’un parcours de réservation, d’une application mobile ou d’un logiciel sur mesure." },
  },
  es: {
    nav: { home: "Inicio", about: "Nosotros", services: "Servicios", pricing: "Precios", blog: "Blog", contact: "Contacto", startProject: "Iniciar un proyecto", primaryLabel: "Navegación principal", mobileLabel: "Navegación móvil", openMenu: "Abrir menú", closeMenu: "Cerrar menú", homeLabel: "Inicio de Arash Web Studio", languageLabel: "Idioma" },
    footer: { description: "Arash Web Studio diseña sitios adaptables, comercio electrónico, sistemas de reservas, aplicaciones móviles y software a medida para pequeñas y medianas empresas de todo el mundo.", pages: "Páginas", services: "Servicios", getInTouch: "Contacto", location: "Estudio digital remoto", serviceArea: "Trabajamos con clientes de todo el mundo", copyright: "Diseño web y soluciones digitales para todo el mundo.", serviceTitles: { "ecommerce-web-design": "Diseño de sitios de comercio electrónico", "booking-website-design": "Sitios de reservas y citas", "small-business-web-design": "Diseño web para pequeñas y medianas empresas", "mobile-app-design": "Diseño de aplicaciones móviles", "custom-software-development": "Desarrollo de software a medida", "brand-identity-design": "Diseño de marca e identidad visual" } },
    home: { eyebrow: "Web · SEO · Móvil · Software", title: "Experiencias digitales creadas para", titleAccent: "impulsar tu negocio.", intro: "Diseño y desarrollo web adaptable para pequeñas y medianas empresas de cualquier parte del mundo. Creamos sitios empresariales, tiendas en línea, experiencias de reservas y citas, páginas de campañas, aplicaciones móviles y software a medida.", primaryCta: "Inicia tu proyecto", secondaryCta: "Sobre el estudio", imageAlt: "Diseño web adaptable mostrado en un teléfono y un portátil", processEyebrow: "Cómo funciona", processTitle: "De la estrategia al crecimiento medible", steps: [{ title: "Descubrimiento", description: "Escuchamos tu visión, tu negocio y tus objetivos." }, { title: "Diseño", description: "Conceptos claros creados para tu marca y tu público." }, { title: "Desarrollo", description: "Desarrollo meticuloso para web, móvil y software." }, { title: "Lanzamiento", description: "Publicamos, optimizamos y damos soporte a tu producto en todo el mundo." }], ctaTitle: "¿Listo para mejorar tu presencia digital?", ctaText: "Cuéntanos tus objetivos y crearemos un sitio, una aplicación o una plataforma adaptable y preparada para buscadores.", ctaButton: "Hablemos" },
    about: { eyebrow: "Nosotros", title: "Estudio independiente.", titleAccent: "Diseño orientado al negocio.", intro: "Arash Web Studio es un estudio de diseño y desarrollo digital gestionado por Arash Ammarlooi. Desde 2013 crea experiencias digitales prácticas para organizaciones de todo el mundo.", statLabels: ["Años de experiencia", "Proyectos entregados", "Países alcanzados", "Compromiso con la calidad"], storyTitle: "Un estudio flexible centrado en", storyTitleAccent: "tus objetivos", storyParagraphs: ["Arash Web Studio reúne estrategia, diseño y desarrollo en un proceso enfocado. Los clientes cuentan con un punto de contacto claro desde la primera conversación hasta el lanzamiento, con especialistas de confianza cuando el proyecto requiere experiencia adicional.", "Cada trabajo se adapta a la organización, su público y su mercado. El objetivo es crear una experiencia digital útil, accesible y adaptable que apoye el crecimiento a largo plazo."], imageAlt: "Globo que representa empresas atendidas en todo el mundo", valuesEyebrow: "Lo que nos impulsa", valuesTitle: "Nuestros valores", values: [{ title: "Colaboración flexible", description: "Un estudio central enfocado trabaja con especialistas independientes de confianza cuando se necesita experiencia adicional." }, { title: "Diseño con propósito", description: "Cada composición, interacción y decisión técnica debe servir al público y al objetivo empresarial." }, { title: "Pensamiento empresarial", description: "El diseño se conecta con resultados claros como credibilidad, consultas cualificadas, reservas y ventas." }, { title: "Alianza a largo plazo", description: "El proceso incluye comunicación clara, un lanzamiento fiable y espacio para mejorar." }], ctaTitle: "¿Quieres un servicio atento respaldado por", ctaAccent: "experiencia real?", ctaButton: "Contáctanos" },
    contact: { eyebrow: "Contacto", title: "Hagamos algo", titleAccent: "útil.", intro: "Cuéntale a Arash Web Studio tus objetivos, público, páginas o funciones necesarias, plazo y contenido disponible. Normalmente recibirás una respuesta en 24 horas.", directTitle: "Contacta con el estudio", directText: "Llama, envía un mensaje o un correo para hablar de un nuevo sitio, rediseño, comercio electrónico, flujo de reservas, aplicación móvil o plataforma a medida.", phone: "Teléfono", email: "Correo electrónico", serviceArea: "Área de servicio", serviceAreaValue: "Disponible para empresas de todo el mundo", experience: "Más de 10 años de experiencia · proyectos entregados en 5 países.", formTitle: "Inicia tu proyecto", name: "Tu nombre", emailPlaceholder: "Tu correo electrónico", phonePlaceholder: "Teléfono (opcional)", projectType: "Tipo de proyecto", projectOptions: options(["Sitio web empresarial", "Tienda en línea", "Sitio de reservas o citas", "Publicidad / Página de campaña", "Aplicación móvil", "Software a medida", "Otro"]), details: "Cuéntanos sobre tu negocio, objetivos, público, plazo y funciones necesarias", sending: "Enviando...", send: "Enviar mensaje", success: "¡Mensaje enviado! Te responderemos en un plazo de 24 horas.", genericError: "Algo salió mal.", errorFallback: "También puedes escribirnos directamente a" },
    metadata: { homeTitle: "Diseño web, SEO y desarrollo | Arash Web Studio", homeDescription: "Sitios adaptables, comercio electrónico, sistemas de reservas, aplicaciones móviles y software a medida para pequeñas y medianas empresas de todo el mundo.", aboutTitle: "Sobre Arash Web Studio", aboutDescription: "Conoce el enfoque de Arash Web Studio sobre diseño adaptable, SEO, contenido, desarrollo y crecimiento digital a largo plazo.", contactTitle: "Contacta con Arash Web Studio", contactDescription: "Contacta con el estudio para hablar de un sitio empresarial adaptable, tienda en línea, experiencia de reservas, aplicación móvil o software a medida." },
  },
  it: {
    nav: { home: "Home", about: "Chi siamo", services: "Servizi", pricing: "Prezzi", blog: "Blog", contact: "Contatti", startProject: "Avvia un progetto", primaryLabel: "Navigazione principale", mobileLabel: "Navigazione mobile", openMenu: "Apri menu", closeMenu: "Chiudi menu", homeLabel: "Home di Arash Web Studio", languageLabel: "Lingua" },
    footer: { description: "Arash Web Studio progetta siti responsive, e-commerce, sistemi di prenotazione, app mobili e software su misura per piccole e medie imprese in tutto il mondo.", pages: "Pagine", services: "Servizi", getInTouch: "Contatti", location: "Studio digitale da remoto", serviceArea: "Collaboriamo con clienti in tutto il mondo", copyright: "Web design e soluzioni digitali in tutto il mondo.", serviceTitles: { "ecommerce-web-design": "Progettazione di siti e-commerce", "booking-website-design": "Siti per prenotazioni e appuntamenti", "small-business-web-design": "Web design per piccole e medie imprese", "mobile-app-design": "Progettazione di applicazioni mobili", "custom-software-development": "Sviluppo software su misura", "brand-identity-design": "Brand e identità visiva" } },
    home: { eyebrow: "Web · SEO · Mobile · Software", title: "Esperienze digitali create per", titleAccent: "far crescere il business.", intro: "Web design e sviluppo responsive per piccole e medie imprese ovunque nel mondo. Creiamo siti aziendali, negozi online, esperienze di prenotazione e appuntamento, pagine per campagne, app mobili e software su misura.", primaryCta: "Avvia il tuo progetto", secondaryCta: "Chi siamo", imageAlt: "Design web responsivo visualizzato su smartphone e laptop", processEyebrow: "Come funziona", processTitle: "Dalla strategia alla crescita misurabile", steps: [{ title: "Scoperta", description: "Ascoltiamo la tua visione, la tua attività e i tuoi obiettivi." }, { title: "Progettazione", description: "Concept essenziali creati per il tuo brand e il tuo pubblico." }, { title: "Sviluppo", description: "Sviluppo accurato per web, dispositivi mobili e software." }, { title: "Lancio", description: "Pubblichiamo, ottimizziamo e supportiamo il tuo prodotto in tutto il mondo." }], ctaTitle: "Vuoi migliorare la tua presenza digitale?", ctaText: "Raccontaci i tuoi obiettivi e creeremo un sito, un’app o una piattaforma responsive e pronta per i motori di ricerca.", ctaButton: "Parliamone" },
    about: { eyebrow: "Chi siamo", title: "Studio indipendente.", titleAccent: "Design orientato al business.", intro: "Arash Web Studio è uno studio di design e sviluppo digitale gestito da Arash Ammarlooi. Dal 2013 crea esperienze digitali pratiche per organizzazioni in tutto il mondo.", statLabels: ["Anni di esperienza", "Progetti consegnati", "Paesi raggiunti", "Impegno per la qualità"], storyTitle: "Uno studio flessibile costruito intorno ai", storyTitleAccent: "tuoi obiettivi", storyParagraphs: ["Arash Web Studio unisce strategia, design e sviluppo in un processo mirato. I clienti hanno un referente chiaro dal primo colloquio al lancio, con specialisti di fiducia quando servono competenze aggiuntive.", "Ogni progetto è modellato sull’organizzazione, il suo pubblico e il suo mercato. L’obiettivo è creare un’esperienza digitale utile, accessibile e responsive che sostenga la crescita nel tempo."], imageAlt: "Globo che rappresenta aziende servite in tutto il mondo", valuesEyebrow: "Ciò che ci guida", valuesTitle: "I nostri valori", values: [{ title: "Collaborazione flessibile", description: "Uno studio centrale e focalizzato collabora con specialisti indipendenti di fiducia quando servono competenze aggiuntive." }, { title: "Design consapevole", description: "Ogni layout, interazione e decisione tecnica deve servire il pubblico e l’obiettivo aziendale." }, { title: "Mentalità orientata al business", description: "Il design è collegato a risultati chiari come credibilità, richieste qualificate, prenotazioni e vendite." }, { title: "Partnership duratura", description: "Il processo comprende comunicazione chiara, un lancio affidabile e spazio per migliorare." }], ctaTitle: "Vuoi un servizio attento sostenuto da", ctaAccent: "esperienza concreta?", ctaButton: "Contattaci" },
    contact: { eyebrow: "Contatti", title: "Creiamo qualcosa di", titleAccent: "utile.", intro: "Racconta ad Arash Web Studio obiettivi, pubblico, pagine o funzioni necessarie, tempi e contenuti disponibili. Di solito riceverai una risposta entro 24 ore.", directTitle: "Contatta lo studio", directText: "Chiama, invia un messaggio o un’e-mail per parlare di un nuovo sito, un redesign, e-commerce, un flusso di prenotazione, un’app mobile o una piattaforma su misura.", phone: "Telefono", email: "E-mail", serviceArea: "Area servita", serviceAreaValue: "Disponibile per aziende in tutto il mondo", experience: "Oltre 10 anni di esperienza · progetti consegnati in 5 paesi.", formTitle: "Avvia il tuo progetto", name: "Il tuo nome", emailPlaceholder: "La tua e-mail", phonePlaceholder: "Telefono (facoltativo)", projectType: "Tipo di progetto", projectOptions: options(["Sito web aziendale", "Negozio e-commerce", "Sito per prenotazioni o appuntamenti", "Pubblicità / Pagina per campagna", "Applicazione mobile", "Software su misura", "Altro"]), details: "Raccontaci attività, obiettivi, pubblico, tempi e funzioni necessarie", sending: "Invio in corso...", send: "Invia messaggio", success: "Messaggio inviato! Ti risponderemo entro 24 ore.", genericError: "Qualcosa è andato storto.", errorFallback: "Puoi anche scriverci direttamente a" },
    metadata: { homeTitle: "Web design, SEO e sviluppo | Arash Web Studio", homeDescription: "Siti responsive, e-commerce, sistemi di prenotazione, app mobili e software su misura per piccole e medie imprese in tutto il mondo.", aboutTitle: "Chi è Arash Web Studio", aboutDescription: "Scopri l’approccio di Arash Web Studio a design responsive, SEO, contenuti, sviluppo e crescita digitale nel tempo.", contactTitle: "Contatta Arash Web Studio", contactDescription: "Contatta lo studio per un sito aziendale responsive, un negozio online, un’esperienza di prenotazione, un’app mobile o software su misura." },
  },
};

export function getPageTranslations(locale: Locale) {
  return pageTranslations[locale];
}
