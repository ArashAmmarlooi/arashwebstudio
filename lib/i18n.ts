export const locales = ["en", "fr", "es", "it"] as const;
export const translatedLocales = ["fr", "es", "it"] as const;

export type Locale = (typeof locales)[number];
export type TranslatedLocale = (typeof translatedLocales)[number];

export const defaultLocale: Locale = "en";

export const localeInfo: Record<
  Locale,
  { label: string; htmlLang: string; openGraph: string }
> = {
  en: { label: "English", htmlLang: "en-CA", openGraph: "en_CA" },
  fr: { label: "Français", htmlLang: "fr-CA", openGraph: "fr_CA" },
  es: { label: "Español", htmlLang: "es", openGraph: "es_ES" },
  it: { label: "Italiano", htmlLang: "it", openGraph: "it_IT" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isTranslatedLocale(value: string): value is TranslatedLocale {
  return translatedLocales.includes(value as TranslatedLocale);
}

export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return isLocale(segment) && segment !== defaultLocale ? segment : defaultLocale;
}

export function stripLocale(pathname: string) {
  const locale = localeFromPathname(pathname);
  if (locale === defaultLocale) return pathname || "/";
  const stripped = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), "");
  return stripped || "/";
}

export function localizedPath(locale: Locale, path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function languageAlternates(path = "/") {
  return {
    en: localizedPath("en", path),
    fr: localizedPath("fr", path),
    es: localizedPath("es", path),
    it: localizedPath("it", path),
    "x-default": localizedPath("en", path),
  };
}
