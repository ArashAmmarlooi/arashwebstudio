export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  cardDescription: string;
  metaDescription: string;
  image: string;
  audience: string;
  deliverables: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "ecommerce-web-design",
    title: "E-commerce Website Design",
    metaTitle: "E-commerce Website Design",
    description:
      "Online stores with clear product discovery, trustworthy checkout experiences and responsive design that helps turn visitors into customers.",
    cardDescription:
      "Clear, responsive stores that make products easy to find and buy.",
    metaDescription:
      "E-commerce website design for small and medium-sized businesses and online brands. Build a responsive store with clear products and a smooth buying experience.",
    image: "/images/service-ecommerce.png",
    audience:
      "This service is for retailers, makers and growing brands that need a professional online store or want to improve an existing shopping experience.",
    deliverables: [
      "Store strategy and customer journey",
      "Responsive product and collection pages",
      "Checkout and payment integration",
      "Analytics, search fundamentals and launch support",
    ],
    outcome:
      "The result is a store that is easy to manage, simple to navigate and designed around the actions that matter: finding products and completing purchases.",
  },
  {
    slug: "booking-website-design",
    title: "Booking & Appointment Websites",
    metaTitle: "Booking and Appointment Website Design",
    description:
      "Fast, mobile-friendly reservation and appointment websites that make services, availability, scheduling and contact details easy to find.",
    cardDescription:
      "Mobile-friendly scheduling, reservations and service information.",
    metaDescription:
      "Booking and appointment website design for service businesses, with online scheduling, clear service pages and a simple path for clients to reserve a time.",
    image: "/images/service-booking.png",
    audience:
      "This service is designed for service businesses that run on appointments and reservations — clinics booking doctor appointments, hotels taking reservations, salons, studios and similar businesses.",
    deliverables: [
      "Clear presentation of services and availability",
      "Booking or appointment scheduling integration",
      "Hours, location and contact information",
      "Search fundamentals and launch support",
    ],
    outcome:
      "Your clients get the information they need quickly and can book without friction, while your business gets a polished online presence built to support reservations and appointments.",
  },
  {
    slug: "small-business-web-design",
    title: "Small Business Web Design",
    metaTitle: "Small Business Web Design",
    description:
      "Professional business websites and focused landing pages that explain your value, build credibility and make it easy for prospects to contact you.",
    cardDescription:
      "Professional websites that build trust and generate qualified inquiries.",
    metaDescription:
      "Small business web design for companies worldwide. Get a fast, responsive website that communicates your services, earns trust and generates qualified inquiries.",
    image: "/images/service-advertising.png",
    audience:
      "This service fits consultants, contractors, professional services, local businesses and new companies that need a credible website built around lead generation.",
    deliverables: [
      "Page strategy and conversion-focused structure",
      "Responsive custom interface design",
      "Contact forms and calls to action",
      "Technical SEO foundations and analytics",
    ],
    outcome:
      "You receive a clear, professional website that answers customer questions, supports your sales process and gives your business room to grow.",
  },
  {
    slug: "mobile-app-design",
    title: "Mobile Application Design",
    metaTitle: "Mobile App Design for iOS and Android",
    description:
      "Practical, intuitive mobile product design for iOS and Android, from early user flows and prototypes to polished interface systems.",
    cardDescription:
      "Intuitive app experiences from early flows to polished interfaces.",
    metaDescription:
      "Mobile app design for iOS and Android. Turn your idea into clear user flows, interactive prototypes and a polished, development-ready interface.",
    image: "/images/service-mobile.png",
    audience:
      "This service is for product teams and organizations validating a new app, improving an existing product or preparing a clear interface for development.",
    deliverables: [
      "Product discovery and user flows",
      "Wireframes and interactive prototypes",
      "Responsive interface and design system",
      "Developer handoff and design support",
    ],
    outcome:
      "The finished design gives users a straightforward experience and gives developers a consistent, well-documented direction for implementation.",
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    metaTitle: "Custom Software and Web Application Development",
    description:
      "Purpose-built dashboards, portals and web applications designed around your workflow instead of forcing your business into generic software.",
    cardDescription:
      "Dashboards, portals and applications shaped around your workflow.",
    metaDescription:
      "Custom software and web application development for dashboards, client portals and business workflows. Plan and build software around your needs.",
    image: "/images/service-software.png",
    audience:
      "This service works for businesses that rely on spreadsheets, disconnected tools or manual processes and need a focused digital system.",
    deliverables: [
      "Requirements and workflow discovery",
      "Application architecture and interface design",
      "Responsive front-end and back-end development",
      "Testing, deployment and ongoing improvement",
    ],
    outcome:
      "You get software shaped around the way your organization operates, with a clear interface and a foundation that can evolve as requirements change.",
  },
  {
    slug: "brand-identity-design",
    title: "Brand & Visual Identity Design",
    metaTitle: "Brand and Visual Identity Design",
    description:
      "Flexible visual identities with a clear logo, colour system, typography and digital guidelines that help businesses look consistent and recognizable.",
    cardDescription:
      "Consistent visual identities designed to make your business memorable.",
    metaDescription:
      "Brand and visual identity design for small businesses and digital products, including logo direction, colour, typography and practical brand guidelines.",
    image: "/images/service-brand.png",
    audience:
      "This service is for new businesses creating their first identity and established organizations that need a more consistent, modern visual direction.",
    deliverables: [
      "Brand discovery and visual direction",
      "Logo system and practical variations",
      "Colour, typography and digital components",
      "Guidelines for consistent everyday use",
    ],
    outcome:
      "The result is a recognizable identity that works across your website, social profiles, presentations and other customer touchpoints.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
