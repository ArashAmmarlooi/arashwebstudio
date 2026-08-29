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

export const pageContent: PageTranslations = {
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
};

export function getPageTranslations(): PageTranslations {
  return pageContent;
}
