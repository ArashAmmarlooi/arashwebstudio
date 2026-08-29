"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { getPageTranslations } from "@/lib/page-translations";

export default function Footer() {
  const t = getPageTranslations();

  return (
    <footer className="border-t border-inktxt/10 dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">
            <span className="accent">Arash</span> Web Studio
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
            {t.footer.description}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">
            {t.footer.pages}
          </p>
          <ul className="space-y-2 text-sm text-inktxt/70 dark:text-creamtxt/70">
            <li><Link href="/" className="hover:accent hover:text-tealdeep dark:hover:text-sage">{t.nav.home}</Link></li>
            <li><Link href="/about" className="hover:text-tealdeep dark:hover:text-sage">{t.nav.about}</Link></li>
            <li><Link href="/services" className="hover:text-tealdeep dark:hover:text-sage">{t.nav.services}</Link></li>
            <li><Link href="/pricing" className="hover:text-tealdeep dark:hover:text-sage">{t.nav.pricing}</Link></li>
            <li><Link href="/blog" className="hover:text-tealdeep dark:hover:text-sage">{t.nav.blog}</Link></li>
            <li><Link href="/contact" className="hover:text-tealdeep dark:hover:text-sage">{t.nav.contact}</Link></li>
          </ul>
          <p className="mb-4 mt-7 text-xs font-semibold uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">
            {t.footer.services}
          </p>
          <ul className="space-y-2 text-sm text-inktxt/70 dark:text-creamtxt/70">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-tealdeep dark:hover:text-sage"
                >
                  {t.footer.serviceTitles[service.slug] ?? service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">
            {t.footer.getInTouch}
          </p>
          <address className="not-italic">
            <ul className="space-y-2 text-sm text-inktxt/70 dark:text-creamtxt/70">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-tealdeep dark:hover:text-sage">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-tealdeep dark:hover:text-sage">
                  {siteConfig.email}
                </a>
              </li>
              <li>{t.footer.location}</li>
              <li>{t.footer.serviceArea}</li>
            </ul>
          </address>
        </div>
      </div>
      <div className="border-t border-inktxt/5 py-6 text-center text-xs text-inktxt/40 dark:border-white/5 dark:text-creamtxt/40">
        © {new Date().getFullYear()} Arash Web Studio. {t.footer.copyright}
      </div>
    </footer>
  );
}
