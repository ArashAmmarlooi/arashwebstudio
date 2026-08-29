"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import {
  getPricingCopy,
  pricingAlaCarteGroups,
  pricingMonthlyPlans,
  pricingPackages,
} from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

function CheckIcon() {
  return (
    <span aria-hidden className="mt-0.5 text-tealdeep dark:text-sage">
      ✓
    </span>
  );
}

export default function PricingPage() {
  const t = getPricingCopy();
  const contactPath = "/contact";

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-40 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="accent text-sm font-semibold uppercase tracking-[0.2em]"
        >
          {t.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.21, 0.65, 0.35, 1] }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl"
        >
          {t.title} <span className="accent">{t.titleAccent}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-inktxt/60 dark:text-creamtxt/60"
        >
          {t.intro}
        </motion.p>
      </section>

      <section id="packages" className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.packagesTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-inktxt/60 dark:text-creamtxt/60">{t.packagesSubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPackages.map((pkg, index) => {
            const copy = t.packages[pkg.id];
            const featured = pkg.featured;

            return (
              <Reveal key={pkg.id} delay={index * 0.08}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 ${
                    featured
                      ? "bg-tealdeep text-white shadow-xl shadow-tealdeep/20 dark:bg-nightcard dark:shadow-black/30"
                      : "surface"
                  }`}
                >
                  {copy.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sage px-4 py-1 text-xs font-bold uppercase tracking-widest text-tealdeep">
                      {copy.badge}
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold">{copy.name}</h3>
                  <p className={`mt-2 text-sm ${featured ? "text-white/70" : "text-inktxt/60 dark:text-creamtxt/60"}`}>
                    {copy.subtitle}
                  </p>
                  <div className="mt-6 font-display text-5xl font-bold">
                    {pkg.price}
                    <span className={`ml-2 text-base font-medium ${featured ? "text-white/60" : "text-inktxt/50 dark:text-creamtxt/50"}`}>
                      {t.currency}
                    </span>
                  </div>
                  <p className={`mt-2 text-xs ${featured ? "text-white/60" : "text-inktxt/50 dark:text-creamtxt/50"}`}>
                    {copy.priceNote}
                  </p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {copy.features.map((feature) => (
                      <li key={feature} className={`flex gap-3 text-sm ${featured ? "text-white/90" : "text-inktxt/70 dark:text-creamtxt/70"}`}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={contactPath}
                    className={`mt-8 block rounded-full py-3.5 text-center text-sm font-semibold transition-colors ${
                      featured
                        ? "bg-sage text-tealdeep hover:bg-white"
                        : "border border-inktxt/15 hover:bg-inktxt/5 dark:border-white/15 dark:hover:bg-white/5"
                    }`}
                  >
                    {copy.cta}
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="services" className="border-y border-inktxt/10 bg-card/50 py-24 dark:border-white/10 dark:bg-nightcard/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.alaCarteTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-inktxt/60 dark:text-creamtxt/60">{t.alaCarteSubtitle}</p>
            </div>
          </Reveal>

          <div className="surface mt-14 overflow-hidden rounded-3xl">
            <div className="grid md:grid-cols-3">
              {pricingAlaCarteGroups.map((group, groupIndex) => {
                const groupCopy = t.alaCarteGroups[group.id];
                return (
                  <Reveal key={group.id} delay={groupIndex * 0.06}>
                    <div className="h-full border-b border-inktxt/10 p-8 md:border-b-0 md:border-r last:md:border-r-0 dark:border-white/10">
                      <h3 className="accent text-xs font-bold uppercase tracking-[0.15em]">{groupCopy.title}</h3>
                      <div className="mt-6 space-y-0">
                        {group.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-baseline justify-between gap-4 border-b border-inktxt/10 py-3 text-sm last:border-b-0 dark:border-white/10"
                          >
                            <span className="text-inktxt/80 dark:text-creamtxt/80">{groupCopy.items[item.id]}</span>
                            <span className="shrink-0 font-semibold">
                              {item.price}
                              {"priceNote" in item && item.priceNote && (
                                <small className="ml-1 font-medium text-inktxt/50 dark:text-creamtxt/50">
                                  {item.priceNote}
                                </small>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="monthly" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="rounded-3xl bg-tealdeep px-6 py-12 text-white dark:bg-nightcard sm:px-10">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.monthlyTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">{t.monthlySubtitle}</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {pricingMonthlyPlans.map((plan, index) => {
                const copy = t.monthlyPlans[plan.id];
                return (
                  <Reveal key={plan.id} delay={index * 0.06}>
                    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                      <h3 className="font-display text-lg font-bold">{copy.name}</h3>
                      <div className="mt-3 font-display text-3xl font-bold text-sage">
                        {plan.price}
                        <span className="ml-1 text-sm font-medium text-white/60">/ month</span>
                      </div>
                      <p className="mt-3 text-sm text-white/70">{copy.subtitle}</p>
                      <ul className="mt-5 space-y-2">
                        {copy.features.map((feature) => (
                          <li key={feature} className="flex gap-2 text-sm text-white/85">
                            <CheckIcon />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">{t.faqTitle}</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.05}>
              <div className="surface h-full rounded-3xl p-6">
                <h3 className="font-display text-lg font-bold">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-inktxt/60 dark:text-creamtxt/60">{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-inktxt/40 dark:text-creamtxt/40">{t.footerNote}</p>
      </section>

      <section id="contact" className="px-6 pb-28">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl bg-tealdeep px-8 py-14 text-center text-white dark:bg-nightcard">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">{t.ctaText}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-block min-w-[180px] rounded-full bg-sage px-8 py-3.5 font-semibold text-tealdeep transition-colors hover:bg-white"
              >
                {t.emailCta}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-block min-w-[180px] rounded-full border border-white/30 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-tealdeep"
              >
                {t.callCta}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
