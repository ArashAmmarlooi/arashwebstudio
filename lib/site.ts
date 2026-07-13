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
  creator: "Arash Ammarlooi",
  description:
    "Montreal web designer creating websites, e-commerce stores, mobile apps and custom software for businesses in Quebec, across Canada and worldwide.",
  email: "arashammarlooi@hotmail.com",
  phone: "+14383676701",
  phoneDisplay: "+1 (438) 367-6701",
  city: "Montreal",
  region: "Quebec",
  regionCode: "QC",
  locale: "en_CA",
  country: "Canada",
  url: siteUrl,
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
