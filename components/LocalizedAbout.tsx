"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { localizedPath, type TranslatedLocale } from "@/lib/i18n";
import { getPageTranslations } from "@/lib/page-translations";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1600, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return <span ref={ref} className="accent font-display text-5xl font-bold sm:text-6xl">{value}{suffix}</span>;
}

export default function LocalizedAbout({ locale }: { locale: TranslatedLocale }) {
  const t = getPageTranslations(locale).about;
  const stats = [
    { target: 13, suffix: "+", label: t.statLabels[0] },
    { target: 58, suffix: "", label: t.statLabels[1] },
    { target: 14, suffix: "", label: t.statLabels[2] },
    { target: 100, suffix: "%", label: t.statLabels[3] },
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-40">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="accent text-sm font-semibold uppercase tracking-[0.2em]">{t.eyebrow}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8, ease: [0.21, 0.65, 0.35, 1] }} className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
          {t.title} <span className="accent">{t.titleAccent}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-inktxt/60 dark:text-creamtxt/60">{t.intro}</motion.p>
      </section>

      <section className="border-y border-inktxt/10 bg-card/50 py-16 dark:border-white/10 dark:bg-nightcard/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <Counter target={stat.target} suffix={stat.suffix} />
              <p className="mt-3 text-xs uppercase tracking-widest text-inktxt/50 dark:text-creamtxt/50">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{t.storyTitle} <span className="accent">{t.storyTitleAccent}</span></h2>
            <div className="mt-7 space-y-5 leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
              {t.storyParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Image src="/images/about-globe.svg" alt={t.imageAlt} width={640} height={640} sizes="(min-width: 1024px) 40vw, 100vw" className="mx-auto w-full max-w-md rounded-3xl" />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-inktxt/10 bg-card/50 py-24 dark:border-white/10 dark:bg-nightcard/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="accent text-sm font-semibold uppercase tracking-[0.2em]">{t.valuesEyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">{t.valuesTitle}</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {t.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="surface h-full rounded-3xl p-8">
                  <h3 className="font-display text-xl font-bold">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-inktxt/60 dark:text-creamtxt/60">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.ctaTitle} <span className="accent">{t.ctaAccent}</span></h2>
          <div className="mt-8">
            <Link href={localizedPath(locale, "/contact")} className="inline-block rounded-full bg-teal px-8 py-4 font-semibold text-white transition-colors hover:bg-tealdeep">{t.ctaButton}</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
