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
        image: "/images/service-booking.svg",
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
        image: "/images/service-booking.svg",
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
  de: {
    copy: {
      overviewMetaTitle: "Webdesign- und Digitalleistungen",
      overviewMetaDescription:
        "Digitale Leistungen für kleine und mittlere Unternehmen: Onlineshops, Buchungen, Unternehmenswebsites, mobile Apps, individuelle Software und Markenidentität.",
      eyebrow: "Web · Mobile · Software · Marke",
      overviewTitle: "Digitale Leistungen passend zu Ihrem Unternehmen",
      overviewIntroduction:
        "Von der Strategie bis zum Start entwickeln wir klare, beständige digitale Erlebnisse für kleine und mittlere Unternehmen weltweit.",
      overviewCta: "Leistung ansehen",
      home: "Startseite",
      services: "Leistungen",
      location: "Remote-Studio · Weltweit verfügbar",
      discussProject: "Projekt besprechen",
      audienceLabel: "Für wen es geeignet ist",
      audienceTitle: "Eine Lösung für Ihr Unternehmen",
      deliverablesTitle: "Mögliche Bestandteile Ihres Projekts",
      finalTitle: "Möchten Sie über Ihr Projekt sprechen?",
      finalDescription:
        "Beschreiben Sie, was Sie entwickeln, für wen es gedacht ist und was Erfolg für Sie bedeutet. Das Studio antwortet mit konkreten nächsten Schritten.",
      finalCta: "Gespräch beginnen",
      imageAltSuffix: "von Arash Web Studio",
    },
    services: [
      {
        slug: "ecommerce-web-design",
        title: "Webdesign für Onlineshops",
        metaTitle: "Webdesign für Onlineshops",
        description:
          "Onlineshops mit übersichtlicher Produktsuche, vertrauenswürdigem Bezahlvorgang und responsivem Design, das Besucher zu Kunden macht.",
        cardDescription:
          "Übersichtliche, responsive Shops, in denen Produkte leicht zu finden und zu kaufen sind.",
        metaDescription:
          "E-Commerce-Webdesign für kleine und mittlere Unternehmen und Online-Marken: responsive Shops mit klaren Produkten und reibungslosem Einkauf.",
        image: "/images/service-ecommerce.png",
        audience:
          "Diese Leistung richtet sich an Einzelhändler, Hersteller und wachsende Marken, die einen professionellen Onlineshop benötigen oder ihr bestehendes Einkaufserlebnis verbessern möchten.",
        deliverables: [
          "Shop-Strategie und Customer Journey",
          "Responsive Produkt- und Kategorieseiten",
          "Integration von Kasse und Zahlung",
          "Analysen, SEO-Grundlagen und Unterstützung beim Start",
        ],
        outcome:
          "Das Ergebnis ist ein leicht zu verwaltender und zu navigierender Shop, ausgerichtet auf das Wesentliche: Produkte finden und Käufe abschließen.",
      },
      {
        slug: "booking-website-design",
        title: "Webdesign für Buchungen und Termine",
        metaTitle: "Websites für Buchungen und Terminplanung",
        description:
          "Schnelle, mobilfreundliche Abläufe, in denen Verfügbarkeit, Leistungen, Zeiten und Bestätigung leicht verständlich sind.",
        cardDescription:
          "Einfache Buchungen und Termine auf jedem Gerät.",
        metaDescription:
          "Buchungswebsites für Hotels, Praxen, Salons und Dienstleister mit klaren Kalendern, Zahlungen und Bestätigungen.",
        image: "/images/service-booking.svg",
        audience:
          "Diese Leistung ist für Hotels, Praxen, Salons, Berater und Dienstleister gedacht, die Buchungen oder Termine vereinfachen möchten.",
        deliverables: [
          "Strategie für den Buchungsablauf",
          "Responsive Verfügbarkeit, Leistungen und Preise",
          "Integration von Kalender, Zahlung und Bestätigung",
          "Analysen, technische SEO und Unterstützung beim Start",
        ],
        outcome:
          "Kunden können eine Leistung wählen, einen Termin finden und mit weniger Hürden bestätigen, während Ihr Team manuelle Arbeit reduziert.",
      },
      {
        slug: "small-business-web-design",
        title: "Webdesign für kleine Unternehmen",
        metaTitle: "Webdesign für kleine und mittlere Unternehmen",
        description:
          "Professionelle Unternehmenswebsites und fokussierte Landingpages, die Ihren Wert erklären, Vertrauen schaffen und Interessenten die Kontaktaufnahme erleichtern.",
        cardDescription:
          "Professionelle Websites, die Vertrauen schaffen und qualifizierte Anfragen gewinnen.",
        metaDescription:
          "Webdesign für kleine und mittlere Unternehmen: eine schnelle, responsive Website, die Leistungen erklärt, Vertrauen stärkt und qualifizierte Anfragen erzeugt.",
        image: "/images/service-advertising.png",
        audience:
          "Diese Leistung eignet sich für Berater, Handwerksbetriebe, professionelle Dienstleister, lokale Unternehmen und Start-ups, die eine glaubwürdige Website zur Kundengewinnung benötigen.",
        deliverables: [
          "Seitenstrategie und konversionsorientierte Struktur",
          "Individuelles responsives Interface-Design",
          "Kontaktformulare und Handlungsaufforderungen",
          "Technische SEO-Grundlagen und Analysen",
        ],
        outcome:
          "Sie erhalten eine klare, professionelle Website, die Kundenfragen beantwortet, Ihren Vertrieb unterstützt und Ihrem Unternehmen Raum zum Wachsen gibt.",
      },
      {
        slug: "mobile-app-design",
        title: "Design mobiler Anwendungen",
        metaTitle: "App-Design für iOS und Android",
        description:
          "Praktisches, intuitives Produktdesign für iOS und Android – von ersten Nutzerabläufen und Prototypen bis zu ausgereiften Interface-Systemen.",
        cardDescription:
          "Intuitive App-Erlebnisse von ersten Abläufen bis zum ausgereiften Interface.",
        metaDescription:
          "App-Design für iOS und Android: klare Nutzerabläufe, interaktive Prototypen und ein ausgereiftes, entwicklungsbereites Interface.",
        image: "/images/service-mobile.png",
        audience:
          "Diese Leistung richtet sich an Produktteams und Organisationen, die eine neue App prüfen, ein bestehendes Produkt verbessern oder ein klares Interface für die Entwicklung vorbereiten.",
        deliverables: [
          "Produktanalyse und Nutzerabläufe",
          "Wireframes und interaktive Prototypen",
          "Responsives Interface und Designsystem",
          "Übergabe an Entwickler und Designbegleitung",
        ],
        outcome:
          "Das fertige Design bietet Nutzern ein unkompliziertes Erlebnis und Entwicklern eine konsistente, gut dokumentierte Grundlage für die Umsetzung.",
      },
      {
        slug: "custom-software-development",
        title: "Individuelle Softwareentwicklung",
        metaTitle: "Individuelle Software- und Webanwendungsentwicklung",
        description:
          "Dashboards, Portale und Webanwendungen, die gezielt für Ihre Abläufe entwickelt werden, statt Ihr Unternehmen in Standardsoftware zu zwängen.",
        cardDescription:
          "Dashboards, Portale und Anwendungen passend zu Ihren Abläufen.",
        metaDescription:
          "Individuelle Software- und Webanwendungsentwicklung für Dashboards, Kundenportale und Geschäftsprozesse – geplant und gebaut nach Ihrem Bedarf.",
        image: "/images/service-software.png",
        audience:
          "Diese Leistung eignet sich für Unternehmen, die mit Tabellen, voneinander getrennten Werkzeugen oder manuellen Prozessen arbeiten und ein gezieltes digitales System benötigen.",
        deliverables: [
          "Anforderungs- und Prozessanalyse",
          "Anwendungsarchitektur und Interface-Design",
          "Responsive Front-End- und Back-End-Entwicklung",
          "Tests, Bereitstellung und laufende Verbesserung",
        ],
        outcome:
          "Sie erhalten Software, die zu Ihrer Organisation passt – mit einer klaren Oberfläche und einer Grundlage, die sich mit neuen Anforderungen weiterentwickelt.",
      },
      {
        slug: "brand-identity-design",
        title: "Marken- und visuelles Identitätsdesign",
        metaTitle: "Marken- und visuelles Identitätsdesign",
        description:
          "Flexible visuelle Identitäten mit Logo, Farbsystem, Typografie und digitalen Richtlinien für einen konsistenten, wiedererkennbaren Auftritt.",
        cardDescription:
          "Konsistente visuelle Identitäten, die Ihr Unternehmen unverwechselbar machen.",
        metaDescription:
          "Marken- und Identitätsdesign für kleine Unternehmen und digitale Produkte mit Logoausrichtung, Farben, Typografie und praktischen Markenrichtlinien.",
        image: "/images/service-brand.png",
        audience:
          "Diese Leistung ist für neue Unternehmen gedacht, die ihre erste Identität schaffen, sowie für etablierte Organisationen, die eine modernere und konsistentere visuelle Richtung brauchen.",
        deliverables: [
          "Markenanalyse und visuelle Richtung",
          "Logosystem und praktische Varianten",
          "Farben, Typografie und digitale Komponenten",
          "Richtlinien für eine konsistente tägliche Nutzung",
        ],
        outcome:
          "Das Ergebnis ist eine wiedererkennbare Identität für Ihre Website, soziale Profile, Präsentationen und weitere Kontaktpunkte mit Kunden.",
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
        image: "/images/service-booking.svg",
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
  pt: {
    copy: {
      overviewMetaTitle: "Serviços de web design e digitais",
      overviewMetaDescription:
        "Serviços digitais para pequenas e médias empresas: comércio eletrónico, reservas, sites empresariais, aplicações móveis, software personalizado e identidade visual.",
      eyebrow: "Web · Mobile · Software · Marca",
      overviewTitle: "Serviços digitais adaptados ao seu negócio",
      overviewIntroduction:
        "Da estratégia ao lançamento, criamos experiências claras e duradouras para pequenas e médias empresas de todo o mundo.",
      overviewCta: "Ver serviço",
      home: "Início",
      services: "Serviços",
      location: "Estúdio remoto · Disponível em todo o mundo",
      discussProject: "Fale-nos do seu projeto",
      audienceLabel: "A quem se destina",
      audienceTitle: "Uma solução adaptada ao seu negócio",
      deliverablesTitle: "O que o seu projeto pode incluir",
      finalTitle: "Pronto para falar sobre o seu projeto?",
      finalDescription:
        "Conte-nos o que está a criar, a quem se destina e o que significa ter sucesso. O estúdio responderá com próximos passos práticos.",
      finalCta: "Iniciar uma conversa",
      imageAltSuffix: "pela Arash Web Studio",
    },
    services: [
      {
        slug: "ecommerce-web-design",
        title: "Design de sites de comércio eletrónico",
        metaTitle: "Design de sites de comércio eletrónico",
        description:
          "Lojas online com produtos fáceis de descobrir, pagamentos fiáveis e design responsivo que ajuda a transformar visitantes em clientes.",
        cardDescription:
          "Lojas claras e responsivas onde é fácil encontrar e comprar produtos.",
        metaDescription:
          "Web design para comércio eletrónico de pequenas e médias empresas e marcas online: lojas responsivas, produtos claros e uma compra fluida.",
        image: "/images/service-ecommerce.png",
        audience:
          "Este serviço destina-se a retalhistas, fabricantes e marcas em crescimento que precisam de uma loja profissional ou querem melhorar uma experiência de compra existente.",
        deliverables: [
          "Estratégia da loja e percurso do cliente",
          "Páginas responsivas de produtos e coleções",
          "Integração de checkout e pagamentos",
          "Análise, fundamentos de SEO e apoio ao lançamento",
        ],
        outcome:
          "O resultado é uma loja fácil de gerir e navegar, concebida em torno do essencial: encontrar produtos e concluir compras.",
      },
      {
        slug: "booking-website-design",
        title: "Web design para reservas e marcações",
        metaTitle: "Sites de reservas e marcações",
        description:
          "Percursos rápidos e adaptados a dispositivos móveis que tornam claros a disponibilidade, os serviços, os horários e a confirmação.",
        cardDescription:
          "Reservas e marcações simples em qualquer dispositivo.",
        metaDescription:
          "Sites de reservas para hotéis, clínicas, salões e empresas de serviços, com calendário, pagamentos e confirmações claras.",
        image: "/images/service-booking.svg",
        audience:
          "Este serviço destina-se a hotéis, clínicas, salões, consultores e empresas de serviços que querem simplificar reservas ou marcações.",
        deliverables: [
          "Estratégia do percurso de reserva",
          "Disponibilidade, serviços e preços responsivos",
          "Integração de calendário, pagamentos e confirmações",
          "Análise, SEO técnico e apoio ao lançamento",
        ],
        outcome:
          "Os clientes podem escolher um serviço, encontrar um horário e confirmar com menos obstáculos, enquanto a equipa reduz tarefas manuais.",
      },
      {
        slug: "small-business-web-design",
        title: "Web design para pequenas empresas",
        metaTitle: "Web design para pequenas e médias empresas",
        description:
          "Sites profissionais e páginas de destino focadas que explicam o seu valor, criam credibilidade e facilitam o contacto de potenciais clientes.",
        cardDescription:
          "Sites profissionais que criam confiança e geram pedidos qualificados.",
        metaDescription:
          "Web design para pequenas e médias empresas: um site rápido e responsivo que comunica serviços, cria confiança e gera pedidos qualificados.",
        image: "/images/service-advertising.png",
        audience:
          "Este serviço adequa-se a consultores, empreiteiros, serviços profissionais, negócios locais e novas empresas que precisam de um site credível focado na captação de clientes.",
        deliverables: [
          "Estratégia de páginas e estrutura orientada para conversão",
          "Design de interface personalizado e responsivo",
          "Formulários de contacto e chamadas para ação",
          "Fundamentos técnicos de SEO e análise",
        ],
        outcome:
          "Recebe um site claro e profissional que responde às perguntas dos clientes, apoia as vendas e dá espaço ao crescimento do negócio.",
      },
      {
        slug: "mobile-app-design",
        title: "Design de aplicações móveis",
        metaTitle: "Design de aplicações móveis para iOS e Android",
        description:
          "Design prático e intuitivo de produtos móveis para iOS e Android, desde os primeiros fluxos e protótipos até sistemas de interface aperfeiçoados.",
        cardDescription:
          "Experiências intuitivas, dos primeiros fluxos às interfaces aperfeiçoadas.",
        metaDescription:
          "Design de aplicações iOS e Android: transforme a sua ideia em fluxos claros, protótipos interativos e uma interface pronta para desenvolvimento.",
        image: "/images/service-mobile.png",
        audience:
          "Este serviço destina-se a equipas de produto e organizações que validam uma nova aplicação, melhoram um produto existente ou preparam uma interface clara para desenvolvimento.",
        deliverables: [
          "Descoberta do produto e fluxos de utilizador",
          "Wireframes e protótipos interativos",
          "Interface responsiva e sistema de design",
          "Entrega aos programadores e apoio de design",
        ],
        outcome:
          "O design final oferece uma experiência simples aos utilizadores e uma direção consistente e bem documentada aos programadores.",
      },
      {
        slug: "custom-software-development",
        title: "Desenvolvimento de software personalizado",
        metaTitle: "Desenvolvimento de software e aplicações web personalizadas",
        description:
          "Painéis, portais e aplicações web criados em torno do seu fluxo de trabalho, sem obrigar o negócio a adaptar-se a software genérico.",
        cardDescription:
          "Painéis, portais e aplicações adaptados ao seu fluxo de trabalho.",
        metaDescription:
          "Desenvolvimento de software e aplicações web personalizadas para painéis, portais de clientes e processos empresariais, segundo as suas necessidades.",
        image: "/images/service-software.png",
        audience:
          "Este serviço adequa-se a empresas que dependem de folhas de cálculo, ferramentas desligadas ou processos manuais e precisam de um sistema digital específico.",
        deliverables: [
          "Análise de requisitos e fluxos de trabalho",
          "Arquitetura da aplicação e design da interface",
          "Desenvolvimento responsivo de front-end e back-end",
          "Testes, implementação e melhoria contínua",
        ],
        outcome:
          "Obtém software adaptado ao funcionamento da sua organização, com uma interface clara e uma base que pode evoluir com os requisitos.",
      },
      {
        slug: "brand-identity-design",
        title: "Design de marca e identidade visual",
        metaTitle: "Design de marca e identidade visual",
        description:
          "Identidades visuais flexíveis com logótipo, sistema de cores, tipografia e orientações digitais que tornam o negócio consistente e reconhecível.",
        cardDescription:
          "Identidades visuais consistentes que tornam o seu negócio memorável.",
        metaDescription:
          "Design de marca e identidade visual para pequenas empresas e produtos digitais, incluindo logótipo, cores, tipografia e orientações práticas.",
        image: "/images/service-brand.png",
        audience:
          "Este serviço destina-se a novas empresas que criam a primeira identidade e a organizações estabelecidas que precisam de uma direção visual mais consistente e moderna.",
        deliverables: [
          "Descoberta da marca e direção visual",
          "Sistema de logótipo e variações práticas",
          "Cores, tipografia e componentes digitais",
          "Orientações para utilização diária consistente",
        ],
        outcome:
          "O resultado é uma identidade reconhecível que funciona no site, nas redes sociais, em apresentações e noutros pontos de contacto com clientes.",
      },
    ],
  },
  zh: {
    copy: {
      overviewMetaTitle: "网站设计与数字服务",
      overviewMetaDescription:
        "面向中小型企业的数字服务：电子商务、预订系统、企业网站、移动应用、定制软件及品牌视觉识别设计。",
      eyebrow: "网站 · 移动端 · 软件 · 品牌",
      overviewTitle: "贴合您业务需求的数字服务",
      overviewIntroduction:
        "从策略到上线，我们为全球中小型企业打造清晰、可靠且经得起时间考验的数字体验。",
      overviewCta: "查看服务",
      home: "首页",
      services: "服务",
      location: "远程工作室 · 服务覆盖全球",
      discussProject: "洽谈您的项目",
      audienceLabel: "适用对象",
      audienceTitle: "围绕您的业务打造解决方案",
      deliverablesTitle: "项目可包含的内容",
      finalTitle: "准备好聊聊您的项目了吗？",
      finalDescription:
        "请告诉我们您希望打造什么、面向哪些用户，以及您对成功的定义。工作室将提供切实可行的后续建议。",
      finalCta: "开始沟通",
      imageAltSuffix: "由 Arash Web Studio 设计",
    },
    services: [
      {
        slug: "ecommerce-web-design",
        title: "电子商务网站设计",
        metaTitle: "电子商务网站设计",
        description:
          "打造商品易于查找、结账体验值得信赖且适配各种设备的在线商店，帮助访客转化为顾客。",
        cardDescription: "清晰、响应式的商店，让商品更容易被找到和购买。",
        metaDescription:
          "面向中小型企业和线上品牌的电子商务网站设计，打造响应式商店、清晰的商品展示和流畅的购买体验。",
        image: "/images/service-ecommerce.png",
        audience:
          "本服务适合需要专业在线商店，或希望改善现有购物体验的零售商、制造商和成长型品牌。",
        deliverables: [
          "商店策略与顾客旅程规划",
          "响应式商品及分类页面",
          "结账与支付集成",
          "数据分析、SEO 基础与上线支持",
        ],
        outcome:
          "您将获得一个易于管理和浏览的商店，并围绕最重要的行为进行设计：找到商品并完成购买。",
      },
      {
        slug: "booking-website-design",
        title: "预订与预约网站设计",
        metaTitle: "预订与预约网站",
        description:
          "快速且适合移动设备的流程，让可用时间、服务、价格和确认步骤清晰易懂。",
        cardDescription: "在任何设备上都能轻松完成预订与预约。",
        metaDescription:
          "面向酒店、诊所、美容院和服务企业的预订网站设计，提供清晰的日历、支付和确认体验。",
        image: "/images/service-booking.svg",
        audience:
          "本服务适合希望简化预订或预约流程的酒店、诊所、美容院、顾问及其他服务企业。",
        deliverables: [
          "预订流程策略",
          "响应式可用时间、服务与价格展示",
          "日历、支付与确认功能集成",
          "数据分析、技术 SEO 与上线支持",
        ],
        outcome:
          "客户可以更顺畅地选择服务、找到时间并完成确认，团队也能减少手动处理工作。",
      },
      {
        slug: "small-business-web-design",
        title: "小型企业网站设计",
        metaTitle: "中小型企业网站设计",
        description:
          "专业的企业网站和目标明确的落地页，清楚传达您的价值、建立可信度，并让潜在客户轻松联系您。",
        cardDescription: "建立信任并带来高质量咨询的专业网站。",
        metaDescription:
          "中小型企业网站设计：打造快速、响应式的网站，清楚介绍服务、赢得信任并带来高质量咨询。",
        image: "/images/service-advertising.png",
        audience:
          "本服务适合需要通过可信网站获取潜在客户的顾问、承包商、专业服务机构、本地商家和初创企业。",
        deliverables: [
          "页面策略与转化导向的结构",
          "定制响应式界面设计",
          "联系表单与行动号召",
          "技术 SEO 基础与数据分析",
        ],
        outcome:
          "您将获得一个清晰、专业的网站，它能解答客户疑问、支持销售流程，并为企业成长留出空间。",
      },
      {
        slug: "mobile-app-design",
        title: "移动应用设计",
        metaTitle: "iOS 与 Android 移动应用设计",
        description:
          "为 iOS 和 Android 打造实用、直观的移动产品体验，涵盖早期用户流程、原型和精细的界面系统。",
        cardDescription: "从早期流程到精细界面的直观应用体验。",
        metaDescription:
          "iOS 与 Android 移动应用设计：将构想转化为清晰的用户流程、交互原型和可供开发的精细界面。",
        image: "/images/service-mobile.png",
        audience:
          "本服务适合正在验证新应用、改进现有产品，或为开发团队准备清晰界面的产品团队和组织。",
        deliverables: [
          "产品探索与用户流程",
          "线框图与交互原型",
          "响应式界面与设计系统",
          "开发交付与设计支持",
        ],
        outcome:
          "最终设计为用户提供直观顺畅的体验，也为开发人员提供一致、清晰且文档完备的实施方向。",
      },
      {
        slug: "custom-software-development",
        title: "定制软件开发",
        metaTitle: "定制软件与 Web 应用开发",
        description:
          "根据您的工作流程打造仪表板、门户和 Web 应用，无需让企业迁就通用软件的限制。",
        cardDescription: "围绕您的工作流程打造仪表板、门户和应用。",
        metaDescription:
          "为仪表板、客户门户和业务流程提供定制软件及 Web 应用开发，根据您的实际需求规划和构建。",
        image: "/images/service-software.png",
        audience:
          "本服务适合依赖电子表格、彼此割裂的工具或人工流程，并需要专用数字系统的企业。",
        deliverables: [
          "需求与工作流程分析",
          "应用架构与界面设计",
          "响应式前端与后端开发",
          "测试、部署与持续改进",
        ],
        outcome:
          "您将获得贴合组织运作方式的软件，拥有清晰的界面和能够随需求变化而持续演进的基础。",
      },
      {
        slug: "brand-identity-design",
        title: "品牌与视觉识别设计",
        metaTitle: "品牌与视觉识别设计",
        description:
          "通过清晰的标志、色彩系统、字体和数字规范打造灵活的视觉识别，让企业形象保持一致且易于辨识。",
        cardDescription: "一致的视觉识别，让您的企业令人难忘。",
        metaDescription:
          "面向小型企业和数字产品的品牌与视觉识别设计，包括标志方向、色彩、字体及实用品牌规范。",
        image: "/images/service-brand.png",
        audience:
          "本服务适合正在建立首套品牌识别的新企业，以及需要更一致、更现代视觉方向的成熟组织。",
        deliverables: [
          "品牌探索与视觉方向",
          "标志系统与实用变体",
          "色彩、字体与数字组件",
          "日常一致应用的品牌规范",
        ],
        outcome:
          "最终成果是一套易于辨识的品牌形象，可一致应用于网站、社交媒体、演示文稿及其他客户接触点。",
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
