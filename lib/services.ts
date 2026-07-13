import type { VisualVariant } from "@/components/StudioVisual";

export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  variant: VisualVariant;
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
    metaDescription:
      "E-commerce website design for Canadian businesses and online brands. Build a responsive store with clear products and a smooth buying experience.",
    variant: "ecommerce",
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
    slug: "restaurant-website-design",
    title: "Restaurant & Café Website Design",
    metaTitle: "Restaurant and Café Website Design",
    description:
      "Fast, mobile-friendly restaurant websites that make menus, hours, reservations, directions and online ordering easy to find.",
    metaDescription:
      "Restaurant and café website design with mobile menus, reservations, local search fundamentals and a clear path for customers to visit or order.",
    variant: "restaurant",
    audience:
      "This service is designed for restaurants, cafés, bakeries, caterers and hospitality businesses that depend on local discovery and mobile visitors.",
    deliverables: [
      "Mobile-friendly menu presentation",
      "Hours, location and contact information",
      "Reservation or ordering integration",
      "Local SEO structure and launch support",
    ],
    outcome:
      "Your customers get the information they need quickly, while your business gets a polished online presence built to support bookings, orders and visits.",
  },
  {
    slug: "small-business-web-design",
    title: "Small Business Web Design",
    metaTitle: "Small Business Web Design in Canada",
    description:
      "Professional business websites and focused landing pages that explain your value, build credibility and make it easy for prospects to contact you.",
    metaDescription:
      "Small business web design in Canada. Get a fast, responsive website that communicates your services, earns trust and generates qualified inquiries.",
    variant: "advertising",
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
    metaDescription:
      "Mobile app design for iOS and Android. Turn your idea into clear user flows, interactive prototypes and a polished, development-ready interface.",
    variant: "mobile",
    audience:
      "This service is for founders and organizations validating a new app, improving an existing product or preparing a clear interface for development.",
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
    metaDescription:
      "Custom software and web application development for dashboards, client portals and business workflows. Plan and build software around your needs.",
    variant: "software",
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
    metaDescription:
      "Brand and visual identity design for small businesses and digital products, including logo direction, colour, typography and practical brand guidelines.",
    variant: "brand",
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
