"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";
import type { TranslatedLocale } from "@/lib/i18n";
import { getPageTranslations } from "@/lib/page-translations";

type Status = "idle" | "sending" | "sent" | "error";

export default function LocalizedContact({ locale }: { locale: TranslatedLocale }) {
  const t = getPageTranslations(locale).contact;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      await response.json();
      if (!response.ok) throw new Error(t.genericError);
      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t.genericError);
    }
  }

  const inputClass = "w-full rounded-2xl border border-inktxt/15 bg-card px-5 py-4 outline-none transition-colors placeholder:text-inktxt/35 focus:border-teal dark:border-white/15 dark:bg-nightcard dark:placeholder:text-creamtxt/35";

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-40">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="accent text-sm font-semibold uppercase tracking-[0.2em]">{t.eyebrow}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8, ease: [0.21, 0.65, 0.35, 1] }} className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
          {t.title} <span className="accent">{t.titleAccent}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="mt-8 max-w-2xl text-lg text-inktxt/60 dark:text-creamtxt/60">{t.intro}</motion.p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="surface flex h-full flex-col justify-between rounded-3xl p-8">
              <div>
                <h2 className="font-display text-2xl font-bold">{t.directTitle}</h2>
                <p className="mt-3 text-sm leading-relaxed text-inktxt/60 dark:text-creamtxt/60">{t.directText}</p>
                <div className="mt-8 space-y-6">
                  <a href={`tel:${siteConfig.phone}`} className="group block">
                    <span className="block text-xs uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">{t.phone}</span>
                    <span className="font-semibold transition-colors group-hover:text-tealdeep dark:group-hover:text-sage">{siteConfig.phoneDisplay}</span>
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="group block">
                    <span className="block text-xs uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">{t.email}</span>
                    <span className="font-semibold transition-colors group-hover:text-tealdeep dark:group-hover:text-sage">{siteConfig.email}</span>
                  </a>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">{t.serviceArea}</span>
                    <span className="font-semibold">{t.serviceAreaValue}</span>
                  </div>
                </div>
              </div>
              <p className="mt-10 text-xs leading-relaxed text-inktxt/40 dark:text-creamtxt/40">{t.experience}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="surface rounded-3xl p-8">
              <h2 className="font-display text-2xl font-bold">{t.formTitle}</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <input name="name" required aria-label={t.name} autoComplete="name" placeholder={`${t.name} *`} className={inputClass} />
                <input name="email" type="email" required aria-label={t.emailPlaceholder} autoComplete="email" placeholder={`${t.emailPlaceholder} *`} className={inputClass} />
                <input name="phone" type="tel" aria-label={t.phonePlaceholder} autoComplete="tel" placeholder={t.phonePlaceholder} className={inputClass} />
                <select name="projectType" aria-label={t.projectType} className={inputClass} defaultValue="">
                  <option value="" disabled>{t.projectType}</option>
                  {t.projectOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </div>
              <textarea name="message" required aria-label={t.details} rows={5} placeholder={`${t.details} *`} className={`${inputClass} mt-5 resize-none`} />
              <button type="submit" disabled={status === "sending"} className="mt-8 w-full rounded-full bg-teal py-4 font-display text-lg font-bold text-white transition-colors hover:bg-tealdeep disabled:opacity-60">
                {status === "sending" ? t.sending : t.send}
              </button>
              {status === "sent" && <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} role="status" className="mt-5 rounded-2xl border border-teal/30 bg-teal/10 px-5 py-4 text-sm text-tealdeep dark:text-sage">{t.success}</motion.p>}
              {status === "error" && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} role="alert" className="mt-5 rounded-2xl border border-clay/40 bg-clay/10 px-5 py-4 text-sm text-clay">
                  {errorMessage} — {t.errorFallback} <a href={`mailto:${siteConfig.email}`} className="underline">{siteConfig.email}</a>
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
