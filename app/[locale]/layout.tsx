import { notFound } from "next/navigation";
import { isTranslatedLocale, translatedLocales } from "@/lib/i18n";

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isTranslatedLocale(params.locale)) notFound();
  return children;
}
