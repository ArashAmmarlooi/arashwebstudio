import type { TranslatedLocale } from "@/lib/i18n";
import type { Service } from "@/lib/services";

export type LocalizedService = Omit<Service, "slug" | "image"> & {
  slug: Service["slug"];
  image: Service["image"];
};

export type ServicePageCopy = {
  overviewMetaTitle: string;
  overviewMetaDescription: string;
  eyebrow: string;
  overviewTitle: string;
  overviewIntroduction: string;
  overviewCta: string;
  home: string;
  services: string;
  location: string;
  discussProject: string;
  audienceLabel: string;
  audienceTitle: string;
  deliverablesTitle: string;
  finalTitle: string;
  finalDescription: string;
  finalCta: string;
  imageAltSuffix: string;
};

type ServiceLocalization = {
  copy: ServicePageCopy;
  services: LocalizedService[];
};

export const serviceLocalizations: Record<
  TranslatedLocale,
  ServiceLocalization
> = {
  fr: {
    copy: {
      overviewMetaTitle: "Services de conception web et numérique",
      overviewMetaDescription:
        "Services numériques pour PME : commerce électronique, réservations, sites d’entreprise, applications mobiles, logiciels sur mesure et identité visuelle.",
      eyebrow: "Web · Mobile · Logiciel · Marque",
      overviewTitle: "Des services numériques adaptés à votre entreprise",
      overviewIntroduction:
        "De la stratégie au lancement, nous concevons des expériences claires et durables pour les petites et moyennes entreprises du monde entier.",
      overviewCta: "Découvrir le service",
      home: "Accueil",
      services: "Services",
      location: "Studio à distance · Disponible dans le monde entier",
      discussProject: "Discuter de votre projet",
      audienceLabel: "À qui s’adresse ce service",
      audienceTitle: "Une solution pensée pour votre entreprise",
      deliverablesTitle: "Ce que votre projet peut comprendre",
      finalTitle: "Prêt à parler de votre projet ?",
      finalDescription:
        "Expliquez-nous ce que vous souhaitez créer, à qui cela s’adresse et comment vous définissez la réussite. Le studio vous proposera des prochaines étapes concrètes.",
      finalCta: "Commencer la discussion",
      imageAltSuffix: "par Arash Web Studio",
    },
    services: [
      {
        slug: "ecommerce-web-design",
        title: "Conception de sites de commerce électronique",
        metaTitle: "Conception de sites de commerce électronique",
        description:
          "Des boutiques en ligne où les produits sont faciles à découvrir, le paiement inspire confiance et l’affichage adaptatif aide à transformer les visiteurs en clients.",
        cardDescription:
          "Des boutiques claires et adaptatives où les produits sont faciles à trouver et à acheter.",
        metaDescription:
          "Conception de sites de commerce électronique pour PME et marques en ligne : une boutique adaptative, des produits clairs et un parcours d’achat fluide.",
        image: "/images/service-ecommerce.png",
        audience:
          "Ce service s’adresse aux détaillants, artisans et marques en croissance qui ont besoin d’une boutique en ligne professionnelle ou souhaitent améliorer une expérience d’achat existante.",
        deliverables: [
          "Stratégie de boutique et parcours client",
          "Pages de produits et de collections adaptatives",
          "Intégration du paiement et de la caisse",
          "Analytique, bases du référencement et soutien au lancement",
        ],
        outcome:
          "Vous obtenez une boutique facile à gérer et à parcourir, conçue autour des actions essentielles : trouver des produits et finaliser ses achats.",
      },
      {
        slug: "booking-website-design",
        title: "Conception de sites de réservation et de rendez-vous",
        metaTitle: "Sites de réservation et de prise de rendez-vous",
        description:
          "Des parcours rapides et adaptés aux mobiles qui rendent la disponibilité, les services, les horaires et la confirmation faciles à comprendre.",
        cardDescription:
          "Des réservations et rendez-vous simples sur tous les appareils.",
        metaDescription:
          "Conception de sites de réservation pour hôtels, cliniques, salons et entreprises de services, avec calendrier, paiement et confirmations clairs.",
        image: "/images/service-booking.png",
        audience:
          "Ce service s’adresse aux hôtels, cliniques, salons, consultants et entreprises de services qui souhaitent simplifier leurs réservations ou rendez-vous.",
        deliverables: [
          "Stratégie du parcours de réservation",
          "Disponibilités, services et tarifs adaptés aux mobiles",
          "Intégration du calendrier, du paiement et des confirmations",
          "Analytique, référencement technique et soutien au lancement",
        ],
        outcome:
          "Vos clients peuvent choisir un service, trouver un créneau et confirmer leur demande avec moins d’obstacles, tandis que votre équipe réduit les tâches manuelles.",
      },
      {
        slug: "small-business-web-design",
        title: "Conception web pour petites entreprises",
        metaTitle: "Conception web pour petites et moyennes entreprises",
        description:
          "Des sites professionnels et des pages d’atterrissage ciblées qui expliquent votre valeur, renforcent votre crédibilité et facilitent la prise de contact.",
        cardDescription:
          "Des sites professionnels qui inspirent confiance et génèrent des demandes qualifiées.",
        metaDescription:
          "Conception web pour petites et moyennes entreprises : un site rapide et adaptatif qui présente vos services, inspire confiance et génère des demandes qualifiées.",
        image: "/images/service-advertising.png",
        audience:
          "Ce service convient aux consultants, entrepreneurs, services professionnels, entreprises locales et jeunes sociétés qui veulent un site crédible axé sur la génération de clients potentiels.",
        deliverables: [
          "Stratégie de pages et structure axée sur la conversion",
          "Conception d’interface personnalisée et adaptative",
          "Formulaires de contact et appels à l’action",
          "Bases techniques du référencement et analytique",
        ],
        outcome:
          "Vous recevez un site clair et professionnel qui répond aux questions des clients, soutient votre processus de vente et accompagne la croissance de votre entreprise.",
      },
      {
        slug: "mobile-app-design",
        title: "Conception d’applications mobiles",
        metaTitle: "Conception d’applications mobiles iOS et Android",
        description:
          "Une conception de produits mobiles pratique et intuitive pour iOS et Android, des premiers parcours et prototypes jusqu’à un système d’interface abouti.",
        cardDescription:
          "Des expériences intuitives, des premiers parcours aux interfaces abouties.",
        metaDescription:
          "Conception d’applications mobiles iOS et Android : transformez votre idée en parcours clairs, prototypes interactifs et interface aboutie prête au développement.",
        image: "/images/service-mobile.png",
        audience:
          "Ce service s’adresse aux équipes produit et organisations qui valident une nouvelle application, améliorent un produit existant ou préparent une interface claire pour le développement.",
        deliverables: [
          "Découverte du produit et parcours utilisateurs",
          "Maquettes fonctionnelles et prototypes interactifs",
          "Interface adaptative et système de conception",
          "Transmission aux développeurs et soutien à la conception",
        ],
        outcome:
          "La conception finale offre une expérience simple aux utilisateurs et une direction cohérente, claire et documentée aux développeurs.",
      },
      {
        slug: "custom-software-development",
        title: "Développement de logiciels sur mesure",
        metaTitle: "Développement de logiciels et d’applications web sur mesure",
        description:
          "Des tableaux de bord, portails et applications web conçus selon vos processus, sans imposer à votre entreprise les limites d’un logiciel générique.",
        cardDescription:
          "Des tableaux de bord, portails et applications adaptés à vos processus.",
        metaDescription:
          "Développement de logiciels et d’applications web sur mesure pour tableaux de bord, portails clients et processus d’entreprise, selon vos besoins.",
        image: "/images/service-software.png",
        audience:
          "Ce service convient aux entreprises qui utilisent des feuilles de calcul, des outils déconnectés ou des processus manuels et ont besoin d’un système numérique ciblé.",
        deliverables: [
          "Analyse des besoins et des processus",
          "Architecture de l’application et conception de l’interface",
          "Développement frontal et dorsal adaptatif",
          "Tests, déploiement et amélioration continue",
        ],
        outcome:
          "Vous obtenez un logiciel adapté au fonctionnement de votre organisation, avec une interface claire et une base capable d’évoluer avec vos besoins.",
      },
      {
        slug: "brand-identity-design",
        title: "Conception de marque et d’identité visuelle",
        metaTitle: "Conception de marque et d’identité visuelle",
        description:
          "Des identités visuelles souples avec logo, palette de couleurs, typographie et lignes directrices numériques pour rendre votre entreprise cohérente et reconnaissable.",
        cardDescription:
          "Des identités visuelles cohérentes qui rendent votre entreprise mémorable.",
        metaDescription:
          "Conception de marque et d’identité visuelle pour PME et produits numériques : orientation du logo, couleurs, typographie et guide de marque pratique.",
        image: "/images/service-brand.png",
        audience:
          "Ce service s’adresse aux nouvelles entreprises qui créent leur première identité et aux organisations établies qui souhaitent une direction visuelle plus cohérente et moderne.",
        deliverables: [
          "Découverte de la marque et direction visuelle",
          "Système de logo et variantes pratiques",
          "Couleurs, typographie et composants numériques",
          "Guide pour une utilisation quotidienne cohérente",
        ],
        outcome:
          "Vous obtenez une identité reconnaissable qui fonctionne sur votre site, vos profils sociaux, vos présentations et les autres points de contact avec vos clients.",
      },
    ],
  },
  es: {
    copy: {
      overviewMetaTitle: "Servicios de diseño web y digital",
      overviewMetaDescription:
        "Servicios digitales para pymes: comercio electrónico, reservas, sitios empresariales, aplicaciones móviles, software a medida e identidad de marca.",
      eyebrow: "Web · Móvil · Software · Marca",
      overviewTitle: "Servicios digitales adaptados a tu negocio",
      overviewIntroduction:
        "Desde la estrategia hasta el lanzamiento, creamos experiencias claras y duraderas para pequeñas y medianas empresas de todo el mundo.",
      overviewCta: "Ver servicio",
      home: "Inicio",
      services: "Servicios",
      location: "Estudio remoto · Disponible en todo el mundo",
      discussProject: "Hablemos de tu proyecto",
      audienceLabel: "Para quién es",
      audienceTitle: "Una solución adaptada a tu negocio",
      deliverablesTitle: "Qué puede incluir tu proyecto",
      finalTitle: "¿Listo para hablar de tu proyecto?",
      finalDescription:
        "Cuéntanos qué estás creando, para quién es y cómo sería un buen resultado. El estudio responderá con próximos pasos prácticos.",
      finalCta: "Iniciar una conversación",
      imageAltSuffix: "por Arash Web Studio",
    },
    services: [
      {
        slug: "ecommerce-web-design",
        title: "Diseño de sitios web de comercio electrónico",
        metaTitle: "Diseño de sitios web de comercio electrónico",
        description:
          "Tiendas en línea con productos fáciles de descubrir, procesos de pago fiables y diseño adaptable que ayuda a convertir visitantes en clientes.",
        cardDescription:
          "Tiendas claras y adaptables donde encontrar y comprar productos es sencillo.",
        metaDescription:
          "Diseño de comercio electrónico para pymes y marcas en línea: tiendas adaptables, productos claros y una experiencia de compra fluida.",
        image: "/images/service-ecommerce.png",
        audience:
          "Este servicio es para comercios, fabricantes y marcas en crecimiento que necesitan una tienda profesional o quieren mejorar una experiencia de compra existente.",
        deliverables: [
          "Estrategia de tienda y recorrido del cliente",
          "Páginas adaptables de productos y colecciones",
          "Integración de pago y proceso de compra",
          "Analítica, fundamentos de SEO y apoyo al lanzamiento",
        ],
        outcome:
          "El resultado es una tienda fácil de gestionar y recorrer, diseñada en torno a lo esencial: encontrar productos y completar compras.",
      },
      {
        slug: "booking-website-design",
        title: "Diseño de sitios de reservas y citas",
        metaTitle: "Sitios web de reservas y citas",
        description:
          "Flujos rápidos y adaptados al móvil que hacen fáciles de entender la disponibilidad, los servicios, los horarios y la confirmación.",
        cardDescription:
          "Reservas y citas sencillas desde cualquier dispositivo.",
        metaDescription:
          "Diseño de sitios de reservas para hoteles, clínicas, salones y empresas de servicios, con calendario, pago y confirmaciones claras.",
        image: "/images/service-booking.png",
        audience:
          "Este servicio es para hoteles, clínicas, salones, consultores y empresas de servicios que quieren simplificar reservas o citas.",
        deliverables: [
          "Estrategia del recorrido de reserva",
          "Disponibilidad, servicios y precios adaptados al móvil",
          "Integración de calendario, pago y confirmaciones",
          "Analítica, SEO técnico y apoyo al lanzamiento",
        ],
        outcome:
          "Los clientes pueden elegir un servicio, encontrar un horario y confirmar con menos obstáculos, mientras el equipo reduce tareas manuales.",
      },
      {
        slug: "small-business-web-design",
        title: "Diseño web para pequeñas empresas",
        metaTitle: "Diseño web para pequeñas y medianas empresas",
        description:
          "Sitios profesionales y páginas de destino enfocadas que explican tu valor, generan confianza y facilitan el contacto de posibles clientes.",
        cardDescription:
          "Sitios profesionales que generan confianza y consultas cualificadas.",
        metaDescription:
          "Diseño web para pequeñas y medianas empresas: un sitio rápido y adaptable que comunica tus servicios, genera confianza y atrae consultas cualificadas.",
        image: "/images/service-advertising.png",
        audience:
          "Este servicio es ideal para consultores, contratistas, servicios profesionales, negocios locales y empresas nuevas que necesitan un sitio creíble orientado a captar clientes.",
        deliverables: [
          "Estrategia de páginas y estructura orientada a la conversión",
          "Diseño de interfaz personalizado y adaptable",
          "Formularios de contacto y llamadas a la acción",
          "Fundamentos técnicos de SEO y analítica",
        ],
        outcome:
          "Recibes un sitio claro y profesional que responde preguntas, apoya tu proceso de ventas y ofrece espacio para crecer.",
      },
      {
        slug: "mobile-app-design",
        title: "Diseño de aplicaciones móviles",
        metaTitle: "Diseño de aplicaciones móviles para iOS y Android",
        description:
          "Diseño práctico e intuitivo de productos móviles para iOS y Android, desde los primeros flujos y prototipos hasta sistemas de interfaz pulidos.",
        cardDescription:
          "Experiencias intuitivas, desde los primeros flujos hasta interfaces pulidas.",
        metaDescription:
          "Diseño de aplicaciones para iOS y Android: convierte tu idea en flujos claros, prototipos interactivos y una interfaz pulida lista para desarrollar.",
        image: "/images/service-mobile.png",
        audience:
          "Este servicio es para equipos de producto y organizaciones que validan una aplicación nueva, mejoran un producto existente o preparan una interfaz clara para desarrollo.",
        deliverables: [
          "Descubrimiento del producto y flujos de usuario",
          "Esquemas y prototipos interactivos",
          "Interfaz adaptable y sistema de diseño",
          "Entrega a desarrollo y apoyo de diseño",
        ],
        outcome:
          "El diseño final ofrece una experiencia directa a los usuarios y una dirección coherente y bien documentada al equipo de desarrollo.",
      },
      {
        slug: "custom-software-development",
        title: "Desarrollo de software a medida",
        metaTitle: "Desarrollo de software y aplicaciones web a medida",
        description:
          "Paneles, portales y aplicaciones web creados según tu flujo de trabajo, sin obligar a tu empresa a adaptarse a software genérico.",
        cardDescription:
          "Paneles, portales y aplicaciones adaptados a tu forma de trabajar.",
        metaDescription:
          "Desarrollo de software y aplicaciones web a medida para paneles, portales de clientes y procesos empresariales, planificados según tus necesidades.",
        image: "/images/service-software.png",
        audience:
          "Este servicio funciona para empresas que dependen de hojas de cálculo, herramientas desconectadas o procesos manuales y necesitan un sistema digital específico.",
        deliverables: [
          "Análisis de requisitos y flujos de trabajo",
          "Arquitectura de aplicación y diseño de interfaz",
          "Desarrollo adaptable de front-end y back-end",
          "Pruebas, despliegue y mejora continua",
        ],
        outcome:
          "Obtienes software adaptado al funcionamiento de tu organización, con una interfaz clara y una base que puede evolucionar cuando cambien los requisitos.",
      },
      {
        slug: "brand-identity-design",
        title: "Diseño de marca e identidad visual",
        metaTitle: "Diseño de marca e identidad visual",
        description:
          "Identidades visuales flexibles con logotipo, sistema de color, tipografía y pautas digitales que hacen que tu empresa se vea coherente y reconocible.",
        cardDescription:
          "Identidades visuales coherentes que hacen memorable tu negocio.",
        metaDescription:
          "Diseño de marca e identidad visual para pequeñas empresas y productos digitales, con logotipo, color, tipografía y pautas prácticas.",
        image: "/images/service-brand.png",
        audience:
          "Este servicio es para empresas nuevas que crean su primera identidad y organizaciones establecidas que necesitan una dirección visual más coherente y moderna.",
        deliverables: [
          "Descubrimiento de marca y dirección visual",
          "Sistema de logotipo y variantes prácticas",
          "Color, tipografía y componentes digitales",
          "Pautas para un uso cotidiano coherente",
        ],
        outcome:
          "El resultado es una identidad reconocible que funciona en tu sitio web, perfiles sociales, presentaciones y demás puntos de contacto con clientes.",
      },
    ],
  },
  it: {
    copy: {
      overviewMetaTitle: "Servizi di web design e digitali",
      overviewMetaDescription:
        "Servizi digitali per piccole e medie imprese: e-commerce, prenotazioni, siti aziendali, app mobili, software su misura e identità visiva.",
      eyebrow: "Web · Mobile · Software · Brand",
      overviewTitle: "Servizi digitali pensati per la tua attività",
      overviewIntroduction:
        "Dalla strategia al lancio, creiamo esperienze chiare e durature per piccole e medie imprese di tutto il mondo.",
      overviewCta: "Scopri il servizio",
      home: "Home",
      services: "Servizi",
      location: "Studio da remoto · Disponibile in tutto il mondo",
      discussProject: "Parliamo del tuo progetto",
      audienceLabel: "A chi è rivolto",
      audienceTitle: "Una soluzione costruita intorno alla tua attività",
      deliverablesTitle: "Cosa può includere il tuo progetto",
      finalTitle: "Vuoi parlare del tuo progetto?",
      finalDescription:
        "Raccontaci cosa vuoi realizzare, a chi è rivolto e cosa significa per te avere successo. Lo studio risponderà con i prossimi passi concreti.",
      finalCta: "Inizia una conversazione",
      imageAltSuffix: "di Arash Web Studio",
    },
    services: [
      {
        slug: "ecommerce-web-design",
        title: "Progettazione di siti e-commerce",
        metaTitle: "Progettazione di siti e-commerce",
        description:
          "Negozi online con prodotti facili da trovare, pagamenti affidabili e design responsive che aiuta a trasformare i visitatori in clienti.",
        cardDescription:
          "Negozi chiari e responsive dove trovare e acquistare è semplice.",
        metaDescription:
          "Web design e-commerce per piccole e medie imprese e marchi online: negozi responsive, prodotti chiari e un’esperienza d’acquisto fluida.",
        image: "/images/service-ecommerce.png",
        audience:
          "Il servizio è rivolto a rivenditori, produttori e marchi in crescita che necessitano di un negozio online professionale o vogliono migliorare quello esistente.",
        deliverables: [
          "Strategia del negozio e percorso del cliente",
          "Pagine responsive per prodotti e collezioni",
          "Integrazione di checkout e pagamenti",
          "Analisi, basi SEO e supporto al lancio",
        ],
        outcome:
          "Il risultato è un negozio facile da gestire e navigare, progettato per le azioni che contano: trovare prodotti e completare gli acquisti.",
      },
      {
        slug: "booking-website-design",
        title: "Web design per prenotazioni e appuntamenti",
        metaTitle: "Siti per prenotazioni e appuntamenti",
        description:
          "Percorsi veloci e ottimizzati per mobile che rendono chiari disponibilità, servizi, orari e conferma.",
        cardDescription:
          "Prenotazioni e appuntamenti semplici su ogni dispositivo.",
        metaDescription:
          "Siti di prenotazione per hotel, cliniche, saloni e imprese di servizi, con calendario, pagamenti e conferme chiare.",
        image: "/images/service-booking.png",
        audience:
          "Il servizio è pensato per hotel, cliniche, saloni, consulenti e imprese di servizi che vogliono semplificare prenotazioni o appuntamenti.",
        deliverables: [
          "Strategia del percorso di prenotazione",
          "Disponibilità, servizi e prezzi responsive",
          "Integrazione di calendario, pagamenti e conferme",
          "Analisi, SEO tecnica e supporto al lancio",
        ],
        outcome:
          "I clienti possono scegliere un servizio, trovare un orario e confermare con meno ostacoli, mentre il team riduce le attività manuali.",
      },
      {
        slug: "small-business-web-design",
        title: "Web design per piccole imprese",
        metaTitle: "Web design per piccole e medie imprese",
        description:
          "Siti professionali e landing page mirate che spiegano il tuo valore, aumentano la credibilità e facilitano il contatto dei potenziali clienti.",
        cardDescription:
          "Siti professionali che creano fiducia e richieste qualificate.",
        metaDescription:
          "Web design per piccole e medie imprese: un sito veloce e responsive che comunica i servizi, crea fiducia e genera richieste qualificate.",
        image: "/images/service-advertising.png",
        audience:
          "Il servizio è adatto a consulenti, imprese artigiane, professionisti, attività locali e nuove aziende che desiderano un sito credibile orientato all’acquisizione di clienti.",
        deliverables: [
          "Strategia delle pagine e struttura orientata alla conversione",
          "Design dell’interfaccia personalizzato e responsive",
          "Moduli di contatto e inviti all’azione",
          "Basi tecniche SEO e analisi",
        ],
        outcome:
          "Ricevi un sito chiaro e professionale che risponde alle domande dei clienti, sostiene le vendite e lascia spazio alla crescita.",
      },
      {
        slug: "mobile-app-design",
        title: "Progettazione di applicazioni mobili",
        metaTitle: "Progettazione di app per iOS e Android",
        description:
          "Design pratico e intuitivo di prodotti mobili per iOS e Android, dai primi flussi e prototipi fino a sistemi di interfaccia completi.",
        cardDescription:
          "Esperienze intuitive, dai primi flussi alle interfacce complete.",
        metaDescription:
          "Progettazione di app iOS e Android: trasforma l’idea in flussi chiari, prototipi interattivi e un’interfaccia completa pronta per lo sviluppo.",
        image: "/images/service-mobile.png",
        audience:
          "Il servizio è rivolto a team di prodotto e organizzazioni che convalidano una nuova app, migliorano un prodotto esistente o preparano un’interfaccia chiara per lo sviluppo.",
        deliverables: [
          "Analisi del prodotto e flussi utente",
          "Wireframe e prototipi interattivi",
          "Interfaccia responsive e design system",
          "Consegna agli sviluppatori e supporto al design",
        ],
        outcome:
          "Il design finale offre agli utenti un’esperienza semplice e agli sviluppatori una direzione coerente e ben documentata per la realizzazione.",
      },
      {
        slug: "custom-software-development",
        title: "Sviluppo software su misura",
        metaTitle: "Sviluppo di software e applicazioni web su misura",
        description:
          "Dashboard, portali e applicazioni web costruiti intorno al tuo flusso di lavoro, senza costringere l’azienda ad adattarsi a software generico.",
        cardDescription:
          "Dashboard, portali e applicazioni modellati sul tuo flusso di lavoro.",
        metaDescription:
          "Sviluppo di software e applicazioni web su misura per dashboard, portali clienti e processi aziendali, progettati secondo le tue esigenze.",
        image: "/images/service-software.png",
        audience:
          "Il servizio è adatto alle aziende che dipendono da fogli di calcolo, strumenti scollegati o processi manuali e hanno bisogno di un sistema digitale mirato.",
        deliverables: [
          "Analisi dei requisiti e dei flussi di lavoro",
          "Architettura dell’applicazione e design dell’interfaccia",
          "Sviluppo responsive front-end e back-end",
          "Test, distribuzione e miglioramento continuo",
        ],
        outcome:
          "Ottieni un software modellato sul funzionamento della tua organizzazione, con un’interfaccia chiara e una base che può evolvere con i requisiti.",
      },
      {
        slug: "brand-identity-design",
        title: "Design del brand e dell’identità visiva",
        metaTitle: "Design del brand e dell’identità visiva",
        description:
          "Identità visive flessibili con logo, colori, tipografia e linee guida digitali per rendere l’attività coerente e riconoscibile.",
        cardDescription:
          "Identità visive coerenti che rendono memorabile la tua attività.",
        metaDescription:
          "Design del brand e dell’identità visiva per piccole imprese e prodotti digitali, con logo, colori, tipografia e linee guida pratiche.",
        image: "/images/service-brand.png",
        audience:
          "Il servizio è rivolto a nuove aziende che creano la prima identità e a organizzazioni affermate che desiderano una direzione visiva più coerente e moderna.",
        deliverables: [
          "Analisi del brand e direzione visiva",
          "Sistema del logo e varianti pratiche",
          "Colori, tipografia e componenti digitali",
          "Linee guida per un uso quotidiano coerente",
        ],
        outcome:
          "Il risultato è un’identità riconoscibile che funziona sul sito, sui profili social, nelle presentazioni e negli altri punti di contatto con i clienti.",
      },
    ],
  },
};

export function getLocalizedServices(locale: TranslatedLocale) {
  return serviceLocalizations[locale].services;
}

export function getLocalizedService(
  locale: TranslatedLocale,
  slug: string,
) {
  return getLocalizedServices(locale).find((service) => service.slug === slug);
}
