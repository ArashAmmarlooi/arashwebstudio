import type { Locale } from "@/lib/i18n";

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
  locale: Locale;
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

export const blogLabels: Record<Locale, BlogLabels> = {
  en: { eyebrow: "Website growth guides", indexTitle: "Web design, content and SEO insights", indexDescription: "Practical guidance for small and medium-sized businesses planning a website, improving content and building sustainable search visibility anywhere in the world.", readArticle: "Read article", published: "Published", updated: "Updated", by: "By", checklist: "Checklist", backToBlog: "Back to the blog", relatedTitle: "Need help putting this into practice?", relatedDescription: "Explore the related service and discuss a website shaped around your business.", relatedCta: "View related service", contactStudio: "Contact the studio" },
  fr: { eyebrow: "Guides de croissance Web", indexTitle: "Conseils en conception Web, contenu et SEO", indexDescription: "Des conseils pratiques pour les petites et moyennes entreprises qui préparent un site, améliorent leur contenu et développent leur visibilité dans les moteurs de recherche.", readArticle: "Lire l’article", published: "Publié le", updated: "Mis à jour le", by: "Par", checklist: "Liste de vérification", backToBlog: "Retour au blogue", relatedTitle: "Besoin d’aide pour passer à l’action?", relatedDescription: "Découvrez le service associé et discutons d’un site adapté à votre entreprise.", relatedCta: "Voir le service associé", contactStudio: "Contacter le studio" },
  es: { eyebrow: "Guías de crecimiento web", indexTitle: "Diseño web, contenido y SEO", indexDescription: "Consejos prácticos para pequeñas y medianas empresas que planean un sitio, mejoran su contenido y desarrollan una visibilidad sostenible en buscadores.", readArticle: "Leer artículo", published: "Publicado", updated: "Actualizado", by: "Por", checklist: "Lista de control", backToBlog: "Volver al blog", relatedTitle: "¿Necesitas ayuda para aplicarlo?", relatedDescription: "Conoce el servicio relacionado y hablemos de un sitio adaptado a tu negocio.", relatedCta: "Ver servicio relacionado", contactStudio: "Contactar con el estudio" },
  it: { eyebrow: "Guide per la crescita del sito", indexTitle: "Web design, contenuti e SEO", indexDescription: "Indicazioni pratiche per piccole e medie imprese che progettano un sito, migliorano i contenuti e costruiscono visibilità sostenibile nei motori di ricerca.", readArticle: "Leggi l’articolo", published: "Pubblicato", updated: "Aggiornato", by: "Di", checklist: "Lista di controllo", backToBlog: "Torna al blog", relatedTitle: "Serve aiuto per metterlo in pratica?", relatedDescription: "Scopri il servizio collegato e parliamo di un sito adatto alla tua attività.", relatedCta: "Vedi il servizio collegato", contactStudio: "Contatta lo studio" },
};

const dates = {
  publishedAt: "2026-07-13",
  updatedAt: "2026-07-13",
  author: "Arash Web Studio",
};

const articles: Record<BlogSlug, Record<Locale, BlogArticle>> = {
  "planning-a-business-website": {
    en: {
      slug: "planning-a-business-website", locale: "en", ...dates,
      title: "How to plan a website and contact the right web designer",
      description: "Learn how to define your website goals, prepare useful content, compare web designers and plan a responsive, SEO-ready business website.",
      excerpt: "A practical guide to website goals, content, features, budgets and the questions to ask a web designer.",
      intro: [
        "A useful website starts with clear goals. Before you contact a designer, define your audience, the actions you want visitors to take, the pages you need and the content you already have.",
        "Whether you need a business site, booking experience, e-commerce store or campaign landing page, a thoughtful brief helps you compare proposals fairly and launch something useful, accessible and ready for search.",
      ],
      sections: [
        { heading: "Define what the website must achieve", paragraphs: ["State the business outcome first: more qualified inquiries, online bookings, product sales, stronger credibility or clearer service information. A clinic may need appointment scheduling, a hotel may need reservations, a salon may need service pages and a contact path, while other businesses may need quote requests or product discovery."], checklist: ["Write one sentence describing your audience and main goal.", "List the three most important visitor actions.", "Note any languages, integrations or approval steps required."] },
        { heading: "List the pages and features you need", paragraphs: ["A focused brochure site is different from a site with online payments, appointment scheduling, member accounts or a searchable catalogue. Each feature adds interface states, testing, accessibility work and ongoing maintenance. Separate launch essentials from features that can follow later."], checklist: ["List each page and its primary purpose.", "Mark which features are required at launch.", "Document booking tools, payment systems and third-party services."] },
        { heading: "Prepare content and examples before you reach out", paragraphs: ["Designers work faster when you can share existing text, photos, logo files, brand guidelines and websites you admire. If content is missing, say who will write, translate and approve it. Strong website content should explain services clearly and support SEO from the start."], checklist: ["Gather text, photos, logos and brand references.", "Collect examples of layouts or sites you like.", "Identify who owns copywriting and approvals."] },
        { heading: "How to contact a web designer and compare proposals", paragraphs: ["Reach out with your goals, required pages, examples, timeline, budget range and available content. Ask what is included in strategy, responsive design, SEO foundations, revisions, launch support and training. Compare proposals by deliverables and exclusions, not price alone."], checklist: ["Share audience, goals, pages and deadline.", "Ask how communication and revisions will work.", "Confirm ownership of domain, accounts and source files."] },
        { heading: "Plan for SEO, responsive design and long-term ownership", paragraphs: ["Performance, accessibility, analytics, privacy-aware forms, redirects and technical SEO are part of a dependable launch. Hosting, domain renewal, software updates and support are recurring responsibilities. A lower initial quote can cost more if these items are excluded or the site is difficult to update."], checklist: ["Confirm mobile-first responsive design is included.", "Ask what technical SEO and analytics setup includes.", "Clarify post-launch support, backups and update process."] },
      ],
      relatedServiceSlug: "small-business-web-design",
    },
    fr: {
      slug: "planning-a-business-website", locale: "fr", ...dates,
      title: "Comment planifier un site et contacter le bon designer Web",
      description: "Définissez vos objectifs, préparez le contenu utile, comparez les designers Web et planifiez un site d’entreprise adaptatif et optimisé pour la recherche.",
      excerpt: "Voyez comment la portée, le contenu, le design, les intégrations et la gestion future influencent le budget.",
      intro: ["Une estimation utile commence par la portée du projet, et non par un prix générique. Deux entreprises qui demandent un site de cinq pages peuvent avoir des besoins très différents en stratégie, contenu, réservation, langues et approbations.", "Pour comparer des propositions équitablement, il faut savoir ce qui est inclus, ce que vous devez fournir, les responsabilités après le lancement et les hypothèses qui pourraient modifier le coût."],
      sections: [
        { heading: "La portée et la complexité déterminent l’effort", paragraphs: ["Un site vitrine ciblé n’exige pas le même travail qu’un site avec paiement, prise de rendez-vous, comptes clients ou catalogue filtrable. Chaque fonction ajoute des états d’interface, des essais, de l’accessibilité et de l’entretien. Un site multilingue demande aussi une vraie stratégie de traduction et de référencement."], checklist: ["Dressez la liste des pages et de l’action principale de chacune.", "Séparez les éléments essentiels au lancement des ajouts futurs.", "Précisez les intégrations, les langues et les responsables des approbations."] },
        { heading: "Le contenu et le design modifient l’estimation", paragraphs: ["Une identité visuelle sur mesure, des photos originales et une rédaction professionnelle prennent plus de temps que l’utilisation de contenus déjà approuvés. Demandez si la stratégie, la révision des textes, la recherche d’images, l’adaptation mobile et les cycles de corrections sont compris."], checklist: ["Inventoriez textes, photos, logos et normes graphiques disponibles.", "Attribuez la rédaction, la traduction et l’approbation de chaque page.", "Faites préciser le nombre de concepts et de cycles de révision."] },
        { heading: "La qualité et la propriété comptent à long terme", paragraphs: ["Performance, accessibilité, analytique, formulaires respectueux de la vie privée, redirections et SEO technique font partie d’un lancement solide. Hébergement, domaine, mises à jour et soutien restent des responsabilités récurrentes."], checklist: ["Confirmez qui possède le domaine, les comptes et les fichiers sources.", "Vérifiez les essais, la formation, les sauvegardes et le soutien inclus.", "Comparez les livrables et exclusions, pas seulement le total."] },
        { heading: "Préparez un bon dossier de départ", paragraphs: ["Présentez votre clientèle, l’objectif d’affaires, les pages requises, les références appréciées, le contenu disponible, l’échéancier et vos contraintes budgétaires. Une estimation donnée sans découverte devrait toujours être considérée comme préliminaire."] },
      ], relatedServiceSlug: "small-business-web-design",
    },
    es: {
      slug: "planning-a-business-website", locale: "es", ...dates,
      title: "Cómo planificar un sitio y contactar al diseñador web adecuado",
      description: "Define objetivos, prepara contenido útil, compara diseñadores y planifica un sitio empresarial adaptable y preparado para SEO.",
      excerpt: "Alcance, contenido, diseño, integraciones y mantenimiento explicados para preparar un presupuesto realista.",
      intro: ["Una estimación útil empieza por el alcance, no por una cifra genérica. Dos negocios pueden pedir cinco páginas y necesitar niveles muy distintos de estrategia, textos, reservas, idiomas y revisiones.", "Compara propuestas sobre la misma base: qué incluye cada una, qué debes aportar, qué ocurrirá después del lanzamiento y qué supuestos pueden cambiar el presupuesto."],
      sections: [
        { heading: "El alcance y la complejidad definen el trabajo", paragraphs: ["Una web informativa no equivale a un sitio con pagos, citas, cuentas de usuario o catálogo filtrable. Cada función requiere estados de interfaz, pruebas, accesibilidad y mantenimiento. Publicar en varios idiomas también exige traducción, navegación y metadatos localizados."], checklist: ["Enumera páginas y la acción principal de cada una.", "Separa lo imprescindible para lanzar de una segunda fase.", "Documenta integraciones, idiomas y responsables de aprobación."] },
        { heading: "El contenido y el diseño afectan la estimación", paragraphs: ["Un sistema visual a medida, fotografía original y redacción profesional requieren más tiempo que usar materiales finales. Pregunta si se incluyen estrategia, edición, imágenes, diseño adaptable y rondas de cambios."], checklist: ["Reúne textos, fotos, logotipos y normas de marca.", "Asigna quién escribe, traduce y aprueba cada página.", "Aclara cuántas propuestas y revisiones incluye el trabajo."] },
        { heading: "Calidad y propiedad después del lanzamiento", paragraphs: ["Rendimiento, accesibilidad, analítica, formularios respetuosos con la privacidad, redirecciones y SEO técnico forman parte de un lanzamiento fiable. Hosting, dominio, actualizaciones y soporte continúan después."], checklist: ["Confirma la propiedad del dominio, cuentas y archivos fuente.", "Pregunta por pruebas, formación, copias y soporte.", "Compara entregables y exclusiones, no solo el total."] },
        { heading: "Prepara un informe claro", paragraphs: ["Explica público, objetivo, páginas, referencias, contenido disponible, plazo y límites presupuestarios. Un proveedor responsable explicará alternativas y fases; cualquier cifra sin descubrimiento previo debe considerarse provisional."] },
      ], relatedServiceSlug: "small-business-web-design",
    },
      it: {
      slug: "planning-a-business-website", locale: "it", ...dates,
      title: "Come pianificare un sito e contattare il web designer giusto",
      description: "Definisci obiettivi, prepara contenuti utili, confronta i professionisti e pianifica un sito aziendale responsive e pronto per la SEO.",
      excerpt: "Ambito, contenuti, design, integrazioni e gestione futura spiegati in modo pratico.",
      intro: ["Una stima utile parte dall’ambito, non da un prezzo standard. Due imprese possono chiedere cinque pagine ma richiedere quantità molto diverse di strategia, testi, prenotazioni, lingue e revisioni.", "Confronta le proposte sulla stessa base: attività incluse, materiali da fornire, responsabilità dopo il lancio e ipotesi che possono modificare la stima."],
      sections: [
        { heading: "Ambito e complessità definiscono il lavoro", paragraphs: ["Un sito informativo è diverso da uno con pagamenti, appuntamenti, account o catalogo filtrabile. Ogni funzione aggiunge stati dell’interfaccia, test, accessibilità e manutenzione. Il multilingua richiede inoltre traduzioni, navigazione e metadati localizzati."], checklist: ["Elenca pagine e azione principale di ciascuna.", "Separa gli elementi essenziali dalle fasi successive.", "Indica integrazioni, lingue e responsabili delle approvazioni."] },
        { heading: "Contenuti e design cambiano la stima", paragraphs: ["Un’identità su misura, fotografie originali e testi professionali richiedono più tempo rispetto a materiali definitivi già disponibili. Verifica strategia, revisione, immagini, design responsive e cicli di modifiche inclusi."], checklist: ["Raccogli testi, foto, logo e linee guida esistenti.", "Assegna scrittura, traduzione e approvazione.", "Chiarisci numero di proposte e revisioni."] },
        { heading: "Qualità e proprietà nel tempo", paragraphs: ["Prestazioni, accessibilità, analytics, moduli attenti alla privacy, reindirizzamenti e SEO tecnico fanno parte di un lancio affidabile. Hosting, dominio, aggiornamenti e assistenza continuano nel tempo."], checklist: ["Conferma proprietà di dominio, account e file sorgente.", "Chiedi quali test, formazione, backup e supporto sono inclusi.", "Confronta consegne ed esclusioni, non solo il totale."] },
        { heading: "Prepara un brief chiaro", paragraphs: ["Descrivi pubblico, obiettivo, pagine, esempi, materiali disponibili, tempi e vincoli di budget. Un fornitore serio illustrerà compromessi e possibili fasi; una cifra senza analisi preliminare resta indicativa."] },
      ], relatedServiceSlug: "small-business-web-design",
    },
      },
  "better-website-content-guide": {} as Record<Locale, BlogArticle>,
  "seo-guide-small-medium-business": {} as Record<Locale, BlogArticle>,
};

type LocalizedDraft = Omit<BlogArticle, "slug" | "locale" | "publishedAt" | "updatedAt" | "author" | "relatedServiceSlug">;

const contentDrafts: Record<Locale, LocalizedDraft> = {
  en: { title: "How to create better content for your business website", description: "A practical guide to clear website messaging, useful service pages, strong calls to action, accessible images and content that supports SEO.", excerpt: "Help visitors understand what you offer, who it is for and what they should do next.", intro: ["Good website content answers real customer questions in plain language. It explains the business, services, process and next step without forcing visitors to search through vague claims.", "Use this guide before a launch or content update. Ask someone unfamiliar with your business to find your main service, understand its value and contact you without guidance."], sections: [
    { heading: "Lead with the information visitors need", paragraphs: ["State what you do, who you help and the main outcome near the top of each important page. Use specific headings, short paragraphs and descriptive links. Clinics might prioritize appointment information, hotels may highlight reservations, and other service businesses may focus on quote requests or consultations."], checklist: ["Give every page one clear purpose and primary action.", "Replace generic slogans with useful customer-focused details.", "Test every page on a small screen and a slower connection."] },
    { heading: "Build useful service pages", paragraphs: ["Create a dedicated page for each meaningful service when there is enough unique information to help a visitor decide. Explain the problem, process, expected outcome and common questions. Avoid thin pages that repeat the same copy with only a keyword changed."], checklist: ["Use clear page titles, headings and internal links.", "Explain who each service is for and what it includes.", "Link related services and relevant guides naturally."] },
    { heading: "Make contact and booking paths clear", paragraphs: ["Tell visitors what happens after they submit a form, request a quote, reserve a room or book an appointment. Ask only for information needed for the next step, display privacy expectations and provide a useful alternative contact method."], checklist: ["Test every form and scheduling link from start to finish.", "Set clear response-time and process expectations.", "Track completed actions without collecting unnecessary personal data."] },
    { heading: "Use original, accessible media", paragraphs: ["Relevant images, examples and diagrams can build understanding and trust. Compress media, use descriptive alternative text when an image adds meaning and remove outdated claims. Review important pages regularly as services and customer questions change."] },
  ] },
  fr: { title: "Comment créer un meilleur contenu pour votre site d’entreprise", description: "Un guide pratique pour des messages clairs, des pages de services utiles, des appels à l’action efficaces, des images accessibles et un contenu favorable au SEO.", excerpt: "Aidez les visiteurs à comprendre votre offre, son public et la prochaine étape.", intro: ["Un bon contenu répond aux vraies questions des clients dans un langage simple. Il explique l’entreprise, ses services, son processus et la prochaine étape sans imposer de chercher parmi des formules vagues.", "Utilisez ce guide avant un lancement ou une mise à jour. Demandez à une personne qui connaît peu votre activité de trouver votre service principal et de vous contacter sans aide."], sections: [
    { heading: "Commencez par les informations essentielles", paragraphs: ["Indiquez ce que vous faites, pour qui et avec quel résultat au début de chaque page importante. Utilisez des titres précis, des paragraphes courts et des liens descriptifs."], checklist: ["Donnez à chaque page un objectif et une action principale.", "Remplacez les slogans vagues par des détails utiles.", "Testez sur petit écran et connexion plus lente."] },
    { heading: "Créez des pages de services utiles", paragraphs: ["Consacrez une page à chaque service important lorsqu’elle peut apporter une information réellement distincte. Expliquez le problème, le processus, le résultat et les questions fréquentes."], checklist: ["Utilisez des titres et liens internes clairs.", "Précisez le public et le contenu de chaque service.", "Reliez naturellement services et guides pertinents."] },
    { heading: "Clarifiez le contact et la réservation", paragraphs: ["Expliquez ce qui se passe après un formulaire, une demande de devis, une réservation ou une prise de rendez-vous. Ne demandez que les informations nécessaires."], checklist: ["Testez formulaires et liens de planification.", "Annoncez le délai et les prochaines étapes.", "Mesurez les actions sans données superflues."] },
    { heading: "Utilisez des médias accessibles", paragraphs: ["Des images et exemples pertinents renforcent la compréhension. Compressez les médias, rédigez un texte alternatif utile et révisez régulièrement les pages importantes."] },
  ] },
  es: { title: "Cómo crear mejor contenido para tu sitio empresarial", description: "Guía práctica sobre mensajes claros, páginas de servicios útiles, llamadas a la acción, imágenes accesibles y contenido que apoya el SEO.", excerpt: "Ayuda a entender qué ofreces, para quién es y cuál es el siguiente paso.", intro: ["Un buen contenido responde preguntas reales con lenguaje sencillo. Explica el negocio, los servicios, el proceso y el siguiente paso sin esconderlos entre afirmaciones vagas.", "Usa esta guía antes de lanzar o actualizar. Pide a alguien ajeno al negocio que encuentre el servicio principal y se ponga en contacto sin ayuda."], sections: [
    { heading: "Empieza por la información necesaria", paragraphs: ["Indica qué haces, a quién ayudas y el resultado principal al inicio de cada página importante. Usa títulos específicos, párrafos breves y enlaces descriptivos."], checklist: ["Da a cada página un objetivo y acción principal.", "Sustituye eslóganes vagos por detalles útiles.", "Prueba en pantalla pequeña y conexión lenta."] },
    { heading: "Crea páginas de servicios útiles", paragraphs: ["Dedica una página a cada servicio importante cuando exista información única que ayude a decidir. Explica problema, proceso, resultado y preguntas frecuentes."], checklist: ["Usa títulos y enlaces internos claros.", "Explica para quién es y qué incluye.", "Relaciona servicios y guías de forma natural."] },
    { heading: "Aclara el contacto y las reservas", paragraphs: ["Explica qué ocurre tras enviar un formulario, pedir presupuesto, reservar o concertar una cita. Solicita solo la información necesaria para avanzar."], checklist: ["Prueba formularios y enlaces de agenda.", "Aclara tiempos de respuesta y proceso.", "Mide acciones sin datos innecesarios."] },
    { heading: "Usa medios originales y accesibles", paragraphs: ["Imágenes y ejemplos relevantes aportan comprensión y confianza. Comprime archivos, añade texto alternativo útil y revisa las páginas importantes con regularidad."] },
  ] },
  it: { title: "Come creare contenuti migliori per il sito aziendale", description: "Guida pratica a messaggi chiari, pagine di servizio utili, inviti all’azione, immagini accessibili e contenuti che sostengono la SEO.", excerpt: "Aiuta i visitatori a capire cosa offri, a chi serve e quale passo compiere.", intro: ["Un buon contenuto risponde alle vere domande dei clienti con un linguaggio semplice. Spiega attività, servizi, processo e passo successivo senza costringere a cercare tra frasi vaghe.", "Usa questa guida prima del lancio o di un aggiornamento. Chiedi a chi non conosce l’attività di trovare il servizio principale e contattarti senza aiuto."], sections: [
    { heading: "Parti dalle informazioni necessarie", paragraphs: ["Indica cosa fai, chi aiuti e il risultato principale all’inizio di ogni pagina importante. Usa titoli specifici, paragrafi brevi e link descrittivi."], checklist: ["Assegna a ogni pagina uno scopo e un’azione.", "Sostituisci gli slogan vaghi con dettagli utili.", "Prova su schermo piccolo e connessione lenta."] },
    { heading: "Crea pagine di servizio utili", paragraphs: ["Dedica una pagina a ogni servizio importante quando esistono informazioni uniche che aiutano a decidere. Spiega problema, processo, risultato e domande comuni."], checklist: ["Usa titoli e link interni chiari.", "Spiega destinatari e contenuto del servizio.", "Collega servizi e guide pertinenti."] },
    { heading: "Rendi chiari contatto e prenotazione", paragraphs: ["Spiega cosa accade dopo un modulo, una richiesta di preventivo, una prenotazione o un appuntamento. Chiedi solo le informazioni necessarie."], checklist: ["Prova moduli e link di pianificazione.", "Chiarisci tempi di risposta e processo.", "Misura le azioni senza dati superflui."] },
    { heading: "Usa media originali e accessibili", paragraphs: ["Immagini ed esempi pertinenti migliorano comprensione e fiducia. Comprimi i file, scrivi testi alternativi utili e rivedi regolarmente le pagine importanti."] },
  ] },
};

const seoDrafts: Record<Locale, LocalizedDraft> = {
  en: { title: "A practical SEO guide for small and medium-sized businesses", description: "A realistic SEO guide covering technical foundations, helpful content, search intent, authority and meaningful measurement.", excerpt: "Build a fast, useful and trustworthy website that search engines can understand and customers want to use.", intro: ["SEO helps the right people discover and evaluate a business through search. It is not a one-time trick, and no checklist can guarantee a ranking: relevance, quality, competition, authority and search context all influence results.", "Start with a technically sound website and genuinely useful content. Then measure qualified enquiries, sales, bookings and other business outcomes—not rankings alone."], sections: [
    { heading: "Fix website foundations", paragraphs: ["Create a clear page for each real service or location that deserves distinct information. Use descriptive titles and headings, make contact details easy to verify and ensure pages work quickly on mobile. Do not produce near-duplicate neighbourhood pages with only the place name changed."], checklist: ["Confirm indexable pages, self canonicals and working internal links.", "Place consistent business details and service-area information where helpful.", "Add relevant structured data without marking up claims users cannot see."] },
    { heading: "Match content to search intent", paragraphs: ["Research the language customers use and the questions they ask before contacting a provider. Build focused pages around real services, problems and decision points. Use descriptive titles, logical headings and internal links that help both people and search engines understand the site."], checklist: ["Assign one clear search purpose to each important page.", "Answer common questions with original, evidence-based content.", "Avoid keyword stuffing and near-duplicate pages."] },
    { heading: "Build authority and trust", paragraphs: ["Show real expertise through useful guides, transparent service information, policies, examples and accurate business details. Earn relevant mentions and links through genuine partnerships, strong work and resources worth referencing; never buy manipulative links or publish fabricated reviews."], checklist: ["Keep author, business and contact information accurate.", "Request honest customer feedback without filtering responses.", "Update or remove claims and links that are no longer current."] },
    { heading: "Measure outcomes and improve", paragraphs: ["Connect analytics and search performance tools, respecting consent and privacy requirements. Record a baseline, annotate major changes and review trends over meaningful periods. Search results fluctuate, so combine visibility data with qualified leads and revenue-related actions."], checklist: ["Track form completions, calls, bookings and direction clicks.", "Review queries and landing pages for unmet customer questions.", "Update weak content and technical issues before publishing more pages."] },
  ] },
  fr: { title: "Guide pratique du SEO pour les petites et moyennes entreprises", description: "Un guide réaliste sur les bases techniques, le contenu utile, l’intention de recherche, l’autorité et la mesure.", excerpt: "Créez un site rapide, utile et fiable que les moteurs de recherche comprennent et que les clients veulent utiliser.", intro: ["Le SEO aide les bonnes personnes à découvrir et évaluer une entreprise. Ce n’est pas une astuce ponctuelle et aucune liste ne garantit une position : pertinence, qualité, concurrence, autorité et contexte influencent les résultats.", "Commencez par un site techniquement solide et un contenu réellement utile. Mesurez ensuite demandes qualifiées, ventes, réservations et autres résultats d’affaires, pas seulement les positions."], sections: [
    { heading: "Solidifiez les bases du site", paragraphs: ["Créez une page claire pour chaque vrai service ou emplacement qui mérite une information distincte. Soignez titres, rubriques, coordonnées et vitesse mobile. Évitez les pages de quartiers presque identiques où seul le lieu change."], checklist: ["Vérifiez indexation, canoniques autonomes et liens internes.", "Affichez des renseignements cohérents sur l’entreprise et la zone desservie.", "Ajoutez des données structurées uniquement pour le contenu visible."] },
    { heading: "Alignez le contenu sur l’intention de recherche", paragraphs: ["Étudiez le langage et les questions des clients avant qu’ils contactent un prestataire. Créez des pages ciblées autour de services réels, de problèmes et de points de décision. Utilisez des titres descriptifs, des rubriques logiques et des liens internes utiles."], checklist: ["Attribuez un objectif de recherche clair à chaque page importante.", "Répondez aux questions fréquentes avec un contenu original.", "Évitez le bourrage de mots-clés et les pages presque dupliquées."] },
    { heading: "Développez l’autorité et la confiance", paragraphs: ["Montrez une expertise réelle grâce à des guides utiles, des informations transparentes, des politiques, des exemples et des coordonnées exactes. Obtenez des mentions et des liens pertinents par un travail solide et des ressources dignes d’être citées; n’achetez jamais de liens manipulatoires ni de faux avis."], checklist: ["Gardez les informations d’entreprise et de contact à jour.", "Demandez des retours honnêtes sans filtrer les réponses.", "Mettez à jour ou retirez les affirmations et liens obsolètes."] },
    { heading: "Mesurez les résultats et améliorez", paragraphs: ["Reliez outils d’analytique et de recherche en respectant consentement et vie privée. Établissez une référence, notez les changements et étudiez les tendances sur une période significative."], checklist: ["Mesurez formulaires, appels, réservations et itinéraires.", "Repérez dans les requêtes les questions encore sans réponse.", "Améliorez les pages faibles et problèmes techniques avant d’en ajouter."] },
  ] },
  es: { title: "Guía práctica de SEO para pequeñas y medianas empresas", description: "Una guía realista sobre bases técnicas, contenido útil, intención de búsqueda, autoridad y medición.", excerpt: "Crea un sitio rápido, útil y fiable que los buscadores entiendan y los clientes quieran usar.", intro: ["El SEO ayuda a las personas adecuadas a descubrir y evaluar un negocio. No es un truco único y ninguna lista garantiza posiciones: relevancia, calidad, competencia, autoridad y contexto influyen en los resultados.", "Empieza con un sitio técnicamente sólido y contenido realmente útil. Después mide consultas cualificadas, ventas, reservas y otros resultados, no solo rankings."], sections: [
    { heading: "Corrige las bases de la web", paragraphs: ["Crea una página clara para cada servicio o ubicación real que necesite información propia. Usa títulos descriptivos, datos verificables y buen rendimiento móvil. Evita páginas casi duplicadas que solo cambian el barrio."], checklist: ["Comprueba indexación, canónicas propias y enlaces internos.", "Muestra datos coherentes y zona de servicio cuando sea útil.", "Añade datos estructurados solo sobre contenido visible."] },
    { heading: "Alinea el contenido con la intención de búsqueda", paragraphs: ["Investiga el lenguaje y las preguntas de los clientes antes de contactar a un proveedor. Crea páginas enfocadas en servicios reales, problemas y puntos de decisión. Usa títulos descriptivos, encabezados lógicos y enlaces internos útiles."], checklist: ["Asigna un propósito de búsqueda claro a cada página importante.", "Responde preguntas comunes con contenido original.", "Evita el relleno de palabras clave y páginas casi duplicadas."] },
    { heading: "Construye autoridad y confianza", paragraphs: ["Muestra experiencia real con guías útiles, información transparente, políticas, ejemplos y datos de contacto exactos. Gana menciones y enlaces relevantes con trabajo sólido y recursos dignos de referencia; nunca compres enlaces manipulativos ni publiques reseñas falsas."], checklist: ["Mantén actualizada la información de la empresa y del contacto.", "Pide comentarios honestos sin filtrar respuestas.", "Actualiza o elimina afirmaciones y enlaces obsoletos."] },
    { heading: "Mide resultados y mejora", paragraphs: ["Conecta analítica y herramientas de búsqueda respetando consentimiento y privacidad. Registra una base, anota cambios y revisa tendencias durante periodos significativos."], checklist: ["Mide formularios, llamadas, reservas y solicitudes de ruta.", "Busca preguntas sin responder en consultas y páginas de entrada.", "Mejora contenido débil y errores técnicos antes de publicar más."] },
  ] },
  it: { title: "Guida pratica alla SEO per piccole e medie imprese", description: "Una guida realistica su basi tecniche, contenuti utili, intento di ricerca, autorevolezza e misurazione.", excerpt: "Crea un sito veloce, utile e affidabile che i motori di ricerca comprendano e i clienti vogliano usare.", intro: ["La SEO aiuta le persone giuste a trovare e valutare un’attività. Non è un trucco isolato e nessuna lista garantisce una posizione: pertinenza, qualità, concorrenza, autorevolezza e contesto incidono sui risultati.", "Parti da un sito tecnicamente solido e contenuti davvero utili. Misura poi richieste qualificate, vendite, prenotazioni e altri risultati, non solo le posizioni."], sections: [
    { heading: "Sistema le basi del sito", paragraphs: ["Crea una pagina chiara per ogni servizio o sede reale che richieda informazioni distinte. Usa titoli descrittivi, contatti verificabili e pagine mobili veloci. Evita pagine di quartiere quasi duplicate."], checklist: ["Controlla indicizzazione, canonical autonome e link interni.", "Mostra dati aziendali e area servita in modo coerente.", "Aggiungi dati strutturati solo per informazioni visibili."] },
    { heading: "Allinea i contenuti all’intento di ricerca", paragraphs: ["Studia il linguaggio e le domande dei clienti prima che contattino un fornitore. Crea pagine mirate su servizi reali, problemi e punti decisionali. Usa titoli descrittivi, intestazioni logiche e link interni utili."], checklist: ["Assegna uno scopo di ricerca chiaro a ogni pagina importante.", "Rispondi alle domande comuni con contenuti originali.", "Evita keyword stuffing e pagine quasi duplicate."] },
    { heading: "Costruisci autorevolezza e fiducia", paragraphs: ["Mostra competenza reale con guide utili, informazioni trasparenti, policy, esempi e dati di contatto accurati. Ottieni menzioni e link pertinenti con lavoro solido e risorse degne di citazione; non acquistare link manipolativi né pubblicare recensioni false."], checklist: ["Mantieni aggiornate le informazioni aziendali e di contatto.", "Richiedi feedback onesti senza filtrare le risposte.", "Aggiorna o rimuovi affermazioni e link non più attuali."] },
    { heading: "Misura e migliora", paragraphs: ["Collega analytics e strumenti di ricerca rispettando consenso e privacy. Registra un riferimento iniziale, annota i cambiamenti e valuta tendenze su periodi significativi."], checklist: ["Misura moduli, chiamate, prenotazioni e richieste di percorso.", "Trova domande senza risposta nelle query e pagine di ingresso.", "Migliora contenuti deboli e problemi tecnici prima di pubblicare altro."] },
  ] },
};

for (const locale of Object.keys(contentDrafts) as Locale[]) {
  articles["better-website-content-guide"][locale] = {
    slug: "better-website-content-guide", locale, ...dates,
    ...contentDrafts[locale], relatedServiceSlug: "small-business-web-design",
  };
  articles["seo-guide-small-medium-business"][locale] = {
    slug: "seo-guide-small-medium-business", locale, ...dates,
    ...seoDrafts[locale], relatedServiceSlug: "small-business-web-design",
  };
}

export function getBlogArticle(slug: string, locale: Locale): BlogArticle | undefined {
  if (!blogSlugs.includes(slug as BlogSlug)) return undefined;
  return articles[slug as BlogSlug][locale];
}

export function getBlogArticles(locale: Locale): BlogArticle[] {
  return blogSlugs.map((slug) => articles[slug][locale]);
}
