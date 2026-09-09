import type { Locale } from "@/lib/i18n";

export const blogSlugs = [
  "what-ai-automation-does",
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
  "what-ai-automation-does": {
    src: "/images/blog-ai-automation.png",
    alt: "AI voice automation and calendar booking dashboard on laptop and smartphone",
  },
  "planning-a-business-website": {
    src: "/images/blog-planning.png",
    alt: "Website planning shown on laptop and mobile screens",
  },
  "better-website-content-guide": {
    src: "/images/blog-content.png",
    alt: "Website content planning on laptop and phone",
  },
  "seo-guide-small-medium-business": {
    src: "/images/blog-seo.png",
    alt: "SEO analytics dashboard on laptop and smartphone",
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
  "what-ai-automation-does": {} as Record<Locale, BlogArticle>,
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

const aiAutomationDrafts: Record<Locale, LocalizedDraft> = {
  en: {
    title: "What AI automation does for modern businesses: 24/7 call answering and calendar booking",
    description: "Discover how AI voice agents and automation handle customer phone calls, book calendar appointments, and streamline business operations without manual work.",
    excerpt: "How intelligent voice agents answer calls, schedule appointments, and eliminate manual front-desk friction around the clock.",
    intro: [
      "Every missed phone call is a missed customer. For service businesses—from clinics and dental practices to law firms, consultants, and contractors—answering the phone and coordinating schedules can consume hours of manual labor every single day.",
      "AI automation transforms this routine front-desk workflow. Instead of putting callers on hold or letting them go to voicemail, an intelligent AI voice agent answers immediately, answers common business questions, and books appointments straight into your digital calendar 24/7.",
    ],
    sections: [
      {
        heading: "24/7 Automated phone answering with natural conversation",
        paragraphs: [
          "Modern AI voice agents converse naturally with human-like tone, active listening, and instant understanding. When a customer dials your business phone number, the AI agent answers on the first ring, introduces your business politely, and addresses the caller's specific needs.",
          "The agent can answer frequently asked questions about pricing, hours, location, parking, preparation steps, and service details, ensuring every customer gets prompt, accurate information at any hour of the day or night.",
        ],
        checklist: [
          "Ensure all incoming customer calls are answered instantly, even after hours.",
          "Provide clear, accurate answers to common service inquiries.",
          "Eliminate voicemail backlogs and phone tag.",
        ],
      },
      {
        heading: "Real-time calendar booking and scheduling",
        paragraphs: [
          "Instead of taking notes and manually matching schedules, the AI agent connects directly to your digital calendar. It checks live availability in real time, offers open appointment slots to the caller, and confirms the chosen time directly.",
          "The booking is instantly created on your calendar with caller details, service type, and relevant notes. Automated SMS and email confirmations are sent immediately to both the client and your team, with options for the customer to reschedule or cancel autonomously.",
        ],
        checklist: [
          "Connect your live appointment schedule directly to the voice agent.",
          "Enable automated rescheduling and cancellation handling.",
          "Send instant confirmation messages to reduce no-shows.",
        ],
      },
      {
        heading: "Automated lead capture and CRM synchronization",
        paragraphs: [
          "Every conversation is logged with precision. The AI captures the caller's name, phone number, email, and reason for calling, storing the summary and conversation transcript directly into your CRM or sending a clean notification to your inbox.",
          "If a caller has an urgent or complex request that requires human attention, the AI can seamlessly qualify the inquiry, gather background context, and route the high-priority details to the right person on your team.",
        ],
        checklist: [
          "Capture caller name, contact details, and inquiry reason automatically.",
          "Sync appointment notes directly with your team's workflow.",
          "Receive real-time alerts when high-priority inquiries arrive.",
        ],
      },
      {
        heading: "Eliminating manual overhead and scaling your business",
        paragraphs: [
          "Front-desk staff and business owners often spend 20% to 40% of their working day managing repetitive phone calls and coordinating calendar slots. Automating this routine layer allows your team to focus entirely on delivering exceptional service to in-person clients.",
          "Because AI agents can handle multiple calls simultaneously, your business never experiences busy signals or long hold times during peak hours, enabling you to scale customer acquisition effortlessly without increasing payroll.",
        ],
        checklist: [
          "Free your staff from repetitive phone interruptions.",
          "Deliver consistent, polite service on every single call.",
          "Scale your booking capacity without increasing administrative overhead.",
        ],
      },
    ],
  },
  fr: {
    title: "Ce que l'automatisation IA apporte aux entreprises : accueil téléphonique 24/7 et prise de rendez-vous",
    description: "Découvrez comment les agents vocaux IA et l'automatisation gèrent les appels clients, réservent des créneaux dans votre agenda et simplifient la gestion quotidienne.",
    excerpt: "Comment les agents vocaux intelligents répondent aux appels, planifient vos rendez-vous et suppriment les tâches administratives manuelles 24/7.",
    intro: [
      "Chaque appel manqué est une opportunité perdue. Pour les cliniques, cabinets professionnels, consultants et entreprises de services, la gestion des appels et des rendez-vous représente souvent des heures de travail répétitif chaque jour.",
      "L'automatisation IA révolutionne cet accueil. Au lieu de laisser les clients sur boîte vocale ou en attente, un agent vocal IA intelligent répond instantanément, répond aux questions fréquentes et réserve directement les rendez-vous dans votre agenda, 24 heures sur 24.",
    ],
    sections: [
      {
        heading: "Accueil téléphonique 24/7 et conversations naturelles",
        paragraphs: [
          "Les agents vocaux IA actuels s'expriment avec une voix fluide, naturelle et chaleureuse. Dès qu'un client appelle, l'agent décroche dès la première sonnerie, présente votre entreprise et répond précisément à sa demande.",
          "L'agent renseigne les appelants sur les tarifs, les horaires, l'emplacement et les modalités de vos services, assurant une disponibilité constante sans interruption.",
        ],
        checklist: [
          "Répondre instantanément à chaque appel, de jour comme de nuit.",
          "Fournir des réponses claires et précises aux questions courantes.",
          "Éliminer les messages vocaux en attente et les rappels manuels.",
        ],
      },
      {
        heading: "Prise de rendez-vous et synchronisation d'agenda en temps réel",
        paragraphs: [
          "L'agent IA se connecte directement à votre agenda numérique. Il vérifie les créneaux disponibles en temps réel, propose des options à l'appelant et valide le rendez-vous immédiatement.",
          "La réservation est ajoutée automatiquement avec toutes les informations nécessaires. Un SMS et un courriel de confirmation sont envoyés sans délai au client, avec possibilité de modifier ou d'annuler en toute autonomie.",
        ],
        checklist: [
          "Relier votre calendrier de rendez-vous directement à l'agent vocal.",
          "Permettre les modifications et annulations automatiques.",
          "Envoyer des confirmations instantanées pour réduire les absences.",
        ],
      },
      {
        heading: "Capture de prospects et intégration directe au CRM",
        paragraphs: [
          "Chaque échange est consigné avec clarté. L'agent note le nom, les coordonnées et le motif de l'appel, puis synchronise la fiche avec votre CRM ou votre boîte courriel.",
          "Pour les demandes urgentes ou complexes, l'agent qualifie la demande, recueille le contexte et transmet les informations prioritaires à la bonne personne au sein de votre équipe.",
        ],
        checklist: [
          "Enregistrer automatiquement les coordonnées et le besoin du client.",
          "Synchroniser les notes d'appel avec vos outils de travail.",
          "Recevoir des alertes immédiates pour les demandes prioritaires.",
        ],
      },
      {
        heading: "Réduction des coûts administratifs et croissance durable",
        paragraphs: [
          "Le personnel et les dirigeants consacrent souvent une part importante de leur journée à décrocher le téléphone et fixer des horaires. L'automatisation libère vos équipes pour qu'elles se concentrent sur leurs clients et leur cœur de métier.",
          "Capable de gérer plusieurs appels simultanément sans attente, l'agent vocal IA permet à votre entreprise d'augmenter son volume d'activité sans embauche administrative supplémentaire.",
        ],
        checklist: [
          "Libérer vos équipes des interruptions téléphoniques répétitives.",
          "Offrir une qualité de service constante et courtoise à chaque appel.",
          "Augmenter votre capacité de prise de rendez-vous sans coût supplémentaire.",
        ],
      },
    ],
  },
  es: {
    title: "Qué hace la automatización con IA por las empresas: atención telefónica 24/7 y agenda de citas",
    description: "Descubre cómo los agentes de voz con IA atienden llamadas de clientes, agendan citas en tu calendario y optimizan la gestión de tu negocio sin trabajo manual.",
    excerpt: "Cómo los agentes inteligentes de voz contestan llamadas, reservan citas y eliminan las tareas administrativas repetitivas a cualquier hora.",
    intro: [
      "Cada llamada perdida es un cliente potencial que se va. Para clínicas, despachos, consultores y empresas de servicios, contestar llamadas y coordinar citas consume horas valiosas todos los días.",
      "La automatización con IA transforma por completo esta tarea. En lugar de dejar a los clientes en espera o en el buzón de voz, un agente de voz inteligente responde al instante, resuelve dudas y agenda citas directamente en tu calendario 24/7.",
    ],
    sections: [
      {
        heading: "Atención telefónica 24/7 con conversación natural",
        paragraphs: [
          "Los agentes de voz con IA modernos se comunican de forma fluida y natural. Cuando un cliente llama, el agente responde al primer tono, presenta tu empresa cordialmente y atiende su necesidad concreta.",
          "Puede responder preguntas frecuentes sobre precios, horarios, ubicación y servicios, asegurando que cada cliente reciba información clara e inmediata a cualquier hora.",
        ],
        checklist: [
          "Atender cada llamada de inmediato, incluso fuera de horario comercial.",
          "Brindar respuestas claras y precisas sobre tus servicios.",
          "Eliminar mensajes de voz acumulados y llamadas pendientes.",
        ],
      },
      {
        heading: "Reserva de citas en tiempo real y sincronización de calendario",
        paragraphs: [
          "El agente de voz se conecta directamente con tu calendario digital. Consulta la disponibilidad en tiempo real, propone horarios libres al cliente y confirma la cita al instante.",
          "El evento se añade automáticamente a tu agenda con los datos del cliente y el motivo. Además, se envían confirmaciones automáticas por SMS y correo electrónico, permitiendo reprogramar o cancelar fácilmente.",
        ],
        checklist: [
          "Conectar tu calendario directamente con el agente de voz.",
          "Permitir reprogramaciones y cancelaciones automáticas.",
          "Enviar confirmaciones inmediatas para evitar ausencias.",
        ],
      },
      {
        heading: "Captura de prospectos y sincronización con tu CRM",
        paragraphs: [
          "Cada llamada queda registrada con precisión. El agente guarda el nombre, teléfono, correo y motivo de la consulta, sincronizando los datos en tu CRM o enviando un resumen a tu correo.",
          "Si una llamada requiere atención humana especializada, el agente cualifica al cliente, recopila los detalles clave y transfiere la información al miembro indicado de tu equipo.",
        ],
        checklist: [
          "Registrar nombre, contacto y necesidades de forma automática.",
          "Sincronizar las notas de la llamada con las herramientas de tu equipo.",
          "Recibir alertas inmediatas para consultas de alta prioridad.",
        ],
      },
      {
        heading: "Ahorro de tiempo administrativo y escalabilidad para tu negocio",
        paragraphs: [
          "El personal de recepción y los profesionales suelen dedicar entre un 20% y un 40% de su jornada a responder llamadas repetitivas. Automatizar este proceso permite que el equipo se enfoque en atender a los clientes en persona.",
          "Dado que el agente de IA puede atender múltiples llamadas al mismo tiempo sin saturarse, tu negocio nunca comunica ocupado ni hace esperar a los clientes en horas punta.",
        ],
        checklist: [
          "Liberar a tu personal de interrupciones telefónicas constantes.",
          "Ofrecer un trato amable y profesional en cada llamada.",
          "Aumentar el volumen de reservas sin incrementar los gastos de personal.",
        ],
      },
    ],
  },
  it: {
    title: "Cosa fa l'automazione IA per le aziende: risposta alle chiamate 24/7 e prenotazione appuntamenti",
    description: "Scopri come gli agenti vocali con IA gestiscono le telefonate dei clienti, prenotano appuntamenti in agenda e ottimizzano le attività aziendali senza lavoro manuale.",
    excerpt: "Come gli assistenti vocali intelligenti rispondono alle chiamate, fissano appuntamenti ed eliminano le attività amministrative ripetitive a ogni ora.",
    intro: [
      "Ogni telefonata senza risposta è un cliente perso. Per studi medici, cliniche, consulenti, professionisti e attività di servizi, rispondere al telefono e coordinare le date richiede ore preziose ogni giorno.",
      "L'automazione IA trasforma completamente la gestione delle chiamate. Invece di far attendere i clienti o lasciarli alla segreteria telefonica, un agente vocale intelligente risponde subito, chiarisce i dubbi e inserisce gli appuntamenti direttamente nel calendario 24 ore su 24.",
    ],
    sections: [
      {
        heading: "Centralino e risposta 24/7 con voce naturale",
        paragraphs: [
          "Gli agenti vocali IA attuali comunicano con voce naturale, ascolto attivo e tono cortese. Quando un cliente telefona, l'assistente risponde al primo squillo, presenta la tua attività e si occupa della sua richiesta.",
          "L'agente risponde a domande frequenti su tariffe, orari di apertura, sede e servizi, garantendo informazioni puntuali e affidabili a qualsiasi ora.",
        ],
        checklist: [
          "Rispondere subito a ogni telefonata, anche fuori orario lavorativo.",
          "Fornire risposte chiare e corrette sui servizi offerti.",
          "Azzerare i messaggi in segreteria e le chiamate di richiamo.",
        ],
      },
      {
        heading: "Prenotazione in tempo reale e sincronizzazione con il calendario",
        paragraphs: [
          "L'agente IA è collegato in tempo reale al tuo calendario digitale. Controlla le disponibilità effettive, propone gli slot liberi al cliente e conferma la prenotazione sul momento.",
          "L'appuntamento viene registrato istantaneamente con tutti i dati necessari. Viene inviata una conferma via SMS ed e-mail sia al cliente che al tuo team, con la possibilità di riprogrammare o cancellare in autonomia.",
        ],
        checklist: [
          "Collegare la tua agenda direttamente all'agente vocale.",
          "Gestire riprogrammazioni e cancellazioni automatiche.",
          "Inviare conferme immediate per azzerare le assenze.",
        ],
      },
      {
        heading: "Acquisizione contatti e integrazione con il CRM",
        paragraphs: [
          "Ogni conversazione viene trascritta e memorizzata. L'agente registra nome, recapiti telefonici, e-mail e motivo della richiesta, trasferendo la scheda al tuo CRM o alla casella di posta.",
          "Per le richieste complesse o urgenti, l'agente raccoglie il quadro informativo e inoltra i dettagli prioritari alla persona giusta del tuo team.",
        ],
        checklist: [
          "Registrare i dati di contatto e le esigenze in modo automatico.",
          "Sincronizzare le note delle chiamate con gli strumenti aziendali.",
          "Ricevere notifiche istantanee per le richieste ad alta priorità.",
        ],
      },
      {
        heading: "Meno lavoro manuale e massima capacità di crescita",
        paragraphs: [
          "Il personale di segreteria e i professionisti impiegano spesso dal 20% al 40% del loro tempo a rispondere a telefonate ripetitive e a fissare appuntamenti. L'automazione libera tempo da dedicare al lavoro ad alto valore.",
          "Poiché l'agente IA può gestire più chiamate contemporaneamente senza tempi di attesa, la tua attività non risulta mai occupata nei momenti di punta, consentendoti di crescere senza costi di personale aggiuntivi.",
        ],
        checklist: [
          "Liberare il team dalle continue interruzioni telefoniche.",
          "Garantire uno standard di cortesia e accuratezza su ogni chiamata.",
          "Aumentare il numero di appuntamenti senza incrementare i costi amministrativi.",
        ],
      },
    ],
  },
};

for (const locale of Object.keys(contentDrafts) as Locale[]) {
  articles["what-ai-automation-does"][locale] = {
    slug: "what-ai-automation-does", locale, ...dates,
    ...aiAutomationDrafts[locale], relatedServiceSlug: "ai-automation-agents",
  };
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
