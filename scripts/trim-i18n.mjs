import fs from "fs";

const pricingPath = "lib/pricing.ts";
let pricing = fs.readFileSync(pricingPath, "utf8");
const frPricing = pricing.indexOf("  fr: {");
pricing =
  pricing
    .slice(0, frPricing)
    .replace('import type { Locale } from "@/lib/i18n";\n\n', "")
    .replace(
      "const pricingCopy: Record<Locale, PricingCopy> = {\n  en: {",
      "const pricingCopy: PricingCopy = {",
    )
    .trimEnd()
    .replace(/,\s*$/, "") +
  "\n};\n\nexport function getPricingCopy(): PricingCopy {\n  return pricingCopy;\n}\n";
fs.writeFileSync(pricingPath, pricing);

const pagePath = "lib/page-translations.ts";
let pages = fs.readFileSync(pagePath, "utf8");
const frPages = pages.indexOf("  fr: {");
pages =
  pages
    .slice(0, frPages)
    .replace('import type { Locale } from "@/lib/i18n";\n\n', "")
    .replace(
      "export const pageTranslations: Record<Locale, PageTranslations> = {\n  en: {",
      "export const pageContent: PageTranslations = {",
    )
    .trimEnd()
    .replace(/,\s*$/, "") +
  "\n};\n\nexport function getPageTranslations(): PageTranslations {\n  return pageContent;\n}\n";
fs.writeFileSync(pagePath, pages);

console.log("trimmed pricing and page-translations");

const blogPath = "lib/blog.ts";
let blog = fs.readFileSync(blogPath, "utf8");
if (!blog.startsWith("type Locale")) {
  blog = 'type Locale = "en" | "fr" | "es" | "de" | "it" | "pt" | "zh";\n\n' + blog;
}
const labelsStart = blog.indexOf("export const blogLabels");
const labelsEnd = blog.indexOf("};", labelsStart) + 2;
const labelsBlock = blog.slice(labelsStart, labelsEnd);
const enOnly = labelsBlock
  .replace("export const blogLabels: Record<Locale, BlogLabels> = {", "const blogLabelsByLocale: Record<Locale, BlogLabels> = {")
  .match(/en: \{[\s\S]*?\},/)?.[0]
  ?.replace(/^en: \{/, "")
  ?.replace(/\},$/, "") ?? "";
blog =
  blog.slice(0, labelsStart) +
  `export const blogLabels: BlogLabels = {\n  ${enOnly}\n};\n` +
  blog.slice(labelsEnd);
fs.writeFileSync(blogPath, blog);
console.log("trimmed blog labels");
