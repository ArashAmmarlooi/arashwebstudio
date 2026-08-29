import type { Metadata } from "next";
import { headers } from "next/headers";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  isLocale,
  languageAlternates,
  localeInfo,
  locales,
  translatedLocales,
} from "@/lib/i18n";
import { absoluteUrl, siteConfig } from "@/lib/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Web Design & Development Studio | Arash Web Studio",
    template: "%s | Arash Web Studio",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.creator, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  category: "Web design",
  keywords: [
    "web design studio",
    "small business website design",
    "e-commerce website design",
    "booking website design",
    "landing page design",
    "mobile app design",
    "custom web development",
  ],
  alternates: {
    canonical: "/",
    languages: languageAlternates("/"),
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "Web Design & Development Studio | Arash Web Studio",
    description: siteConfig.description,
    alternateLocale: translatedLocales.map((locale) => localeInfo[locale].openGraph),
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — web design and development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Studio | Arash Web Studio",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${absoluteUrl("/")}#website`,
      url: absoluteUrl("/"),
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: locales.map((locale) => localeInfo[locale].htmlLang),
      publisher: { "@id": `${absoluteUrl("/")}#business` },
    },
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${absoluteUrl("/")}#business`,
      name: siteConfig.name,
      url: absoluteUrl("/"),
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: [{ "@type": "Place", name: "Worldwide" }],
      knowsAbout: [
        "Web design",
        "Web development",
        "E-commerce",
        "Mobile application design",
        "Custom software",
      ],
    },
  ],
};

const themeInit = `
try {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestedLocale = headers().get("x-site-locale") ?? "en";
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";
  const skipLabels = {
    en: "Skip to content",
    fr: "Aller au contenu",
    es: "Ir al contenido",
    de: "Zum Inhalt springen",
    it: "Vai al contenuto",
    pt: "Ir para o conteúdo",
    zh: "跳至主要内容",
  };

  return (
    <html
      lang={localeInfo[locale].htmlLang}
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <JsonLd data={structuredData} />
      </head>
      <body>
        <a
          href="#main-content"
          className="skip-link"
        >
          {skipLabels[locale]}
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
