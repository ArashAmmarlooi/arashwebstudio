"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-inktxt/15 bg-card px-5 py-4 outline-none transition-colors placeholder:text-inktxt/35 focus:border-teal dark:border-white/15 dark:bg-nightcard dark:placeholder:text-creamtxt/35";

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="accent text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.21, 0.65, 0.35, 1] }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl"
        >
          Let&apos;s make something <span className="accent">great.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 max-w-2xl text-lg text-inktxt/60 dark:text-creamtxt/60"
        >
          Tell Arash Web Studio about your goals, audience, required pages or
          features, timeline and available content. You&apos;ll usually receive
          a reply within 24 hours.
        </motion.p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="surface flex h-full flex-col justify-between rounded-3xl p-8">
              <div>
                <h2 className="font-display text-2xl font-bold">
                  Direct contact
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
                  Call, text or email the studio to discuss your website, store,
                  booking experience, app or custom platform.
                </p>

                <div className="mt-8 space-y-6">
                  <a href={`tel:${siteConfig.phone}`} className="group block">
                    <span className="block text-xs uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">
                      Phone
                    </span>
                    <span className="font-semibold transition-colors group-hover:text-tealdeep dark:group-hover:text-sage">
                      {siteConfig.phoneDisplay}
                    </span>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group block"
                  >
                    <span className="block text-xs uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">
                      Email
                    </span>
                    <span className="font-semibold transition-colors group-hover:text-tealdeep dark:group-hover:text-sage">
                      {siteConfig.email}
                    </span>
                  </a>

                  <div>
                    <span className="block text-xs uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">
                      Service area
                    </span>
                    <span className="font-semibold">
                      Available to businesses worldwide
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-xs leading-relaxed text-inktxt/40 dark:text-creamtxt/40">
                10+ years of experience · projects delivered in 5 countries.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="surface rounded-3xl p-8">
              <h2 className="font-display text-2xl font-bold">
                Start your project
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  aria-label="Your name"
                  autoComplete="name"
                  placeholder="Your name *"
                  className={inputClass}
                />
                <input
                  name="email"
                  type="email"
                  required
                  aria-label="Your email"
                  autoComplete="email"
                  placeholder="Your email *"
                  className={inputClass}
                />
                <input
                  name="phone"
                  type="tel"
                  aria-label="Your phone number"
                  autoComplete="tel"
                  placeholder="Phone (optional)"
                  className={inputClass}
                />
                <select
                  name="projectType"
                  aria-label="Project type"
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Project type
                  </option>
                  {[
                    "Business Website",
                    "E-commerce Store",
                    "Booking / Appointment Website",
                    "Advertising / Campaign Landing Page",
                    "Mobile Application",
                    "Custom Software",
                    "Something Else",
                  ].map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                name="message"
                required
                aria-label="Project details"
                rows={5}
                placeholder="Tell us about your project *"
                className={`${inputClass} mt-5 resize-none`}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 w-full rounded-full bg-teal py-4 font-display text-lg font-bold text-white transition-colors hover:bg-tealdeep disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="mt-5 rounded-2xl border border-teal/30 bg-teal/10 px-5 py-4 text-sm text-tealdeep dark:text-sage"
                >
                  Message sent! We&apos;ll get back to you within 24 hours.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="mt-5 rounded-2xl border border-clay/40 bg-clay/10 px-5 py-4 text-sm text-clay"
                >
                  {errorMsg} — you can also email us directly at{" "}
                  <a href={`mailto:${siteConfig.email}`} className="underline">
                    {siteConfig.email}
                  </a>
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
