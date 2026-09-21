const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "https://www.arashwebstudio.com";

export const siteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

export const siteConfig = {
  name: "Arash Web Studio",
  shortName: "Arash Web Studio",
  creator: "Arash Web Studio",
  description:
    "Responsive web design, SEO, e-commerce, booking experiences, mobile apps and custom software for small and medium-sized businesses worldwide.",
  /** Public mailto / schema (use a mailbox you read, or forward hello@ here). */
  email: "arashammarlooi@hotmail.com",
  /** Inbox for contact form delivery and RESEND_REPLY_TO default. */
  inboxEmail: "arashammarlooi@hotmail.com",
  phone: "+14383676701",
  phoneDisplay: "+1 (438) 367-6701",
  locale: "en_US",
  areaServed: "Worldwide",
  url: siteUrl,
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
