"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { localizedPath, type TranslatedLocale } from "@/lib/i18n";
import { getPageTranslations } from "@/lib/page-translations";

const processImages = [
  { src: "/images/process-discover.svg", alt: "Discover — research and listening" },
  { src: "/images/process-design.svg", alt: "Design — layouts and brand craft" },
  { src: "/images/process-build.svg", alt: "Build — development and code" },
  { src: "/images/process-launch.svg", alt: "Launch — shipping worldwide" },
] as const;

export default function LocalizedHome({ locale }: { locale: TranslatedLocale }) {
  const t = getPageTranslations(locale).home;

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-40 lg:grid-cols-2">
        <div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="accent text-sm font-semibold uppercase tracking-[0.2em]">
            {t.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8, ease: [0.21, 0.65, 0.35, 1] }} className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {t.title} <span className="accent">{t.titleAccent}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="mt-6 max-w-xl text-lg leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
            {t.intro}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-10 flex flex-wrap gap-4">
            <Link href={localizedPath(locale, "/contact")} className="rounded-full bg-teal px-7 py-3.5 font-semibold text-white transition-colors hover:bg-tealdeep">
              {t.primaryCta}
            </Link>
            <Link href={localizedPath(locale, "/about")} className="rounded-full border border-inktxt/15 px-7 py-3.5 font-semibold transition-colors hover:bg-inktxt/5 dark:border-white/15 dark:hover:bg-white/5">
              {t.secondaryCta}
            </Link>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.21, 0.65, 0.35, 1] }}>
          <Image src="/images/hero-devices.svg" alt={t.imageAlt} width={1024} height={768} sizes="(min-width: 1024px) 50vw, 100vw" priority className="rounded-3xl shadow-xl shadow-inktxt/10 dark:shadow-black/40" />
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="accent text-sm font-semibold uppercase tracking-[0.2em]">{t.processEyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">{t.processTitle}</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-4">
          {t.steps.map((step, index) => {
            const image = processImages[index];

            return (
              <Reveal key={step.title} delay={index * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.15 + index * 0.12, duration: 0.7, ease: [0.21, 0.65, 0.35, 1] }}
                    className="overflow-hidden rounded-2xl"
                  >
                    <div className="process-float" style={{ animationDelay: `${index * 0.35}s` }}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={640}
                        height={480}
                        sizes="(min-width: 768px) 25vw, 100vw"
                        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </motion.div>
                  <span className="accent mt-5 block font-display text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-inktxt/60 dark:text-creamtxt/60">{step.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-28">
        <Reveal className="surface mx-auto max-w-4xl rounded-3xl px-8 py-16 text-center">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-lg text-inktxt/60 dark:text-creamtxt/60">{t.ctaText}</p>
          <div className="mt-8">
            <Link href={localizedPath(locale, "/contact")} className="inline-block rounded-full bg-teal px-8 py-4 font-semibold text-white transition-colors hover:bg-tealdeep">
              {t.ctaButton}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
