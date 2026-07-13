"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-40 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="accent text-sm font-semibold uppercase tracking-[0.2em]"
          >
            Web · Mobile · Software
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.21, 0.65, 0.35, 1] }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            We design your website,{" "}
            <span className="accent">your way.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-inktxt/60 dark:text-creamtxt/60"
          >
            Montreal web design and development for businesses in Quebec,
            across Canada and worldwide. We create e-commerce stores,
            restaurant and café websites, landing pages, mobile apps and
            custom software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="rounded-full bg-teal px-7 py-3.5 font-semibold text-white transition-colors hover:bg-tealdeep"
            >
              Start Your Project
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-inktxt/15 px-7 py-3.5 font-semibold transition-colors hover:bg-inktxt/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              About Arash
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.21, 0.65, 0.35, 1] }}
        >
          <Image
            src="/images/hero-devices.png"
            alt="Responsive website design displayed on a phone and laptop"
            width={1024}
            height={768}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="rounded-3xl shadow-xl shadow-inktxt/10 dark:shadow-black/40"
          />
        </motion.div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="accent text-sm font-semibold uppercase tracking-[0.2em]">
            How it works
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
            From idea to launch
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-4">
          {[
            { n: "01", t: "Discover", d: "We listen to your vision, your business and your goals." },
            { n: "02", t: "Design", d: "Clean concepts crafted around your brand and audience." },
            { n: "03", t: "Build", d: "Careful development for web, mobile and software." },
            { n: "04", t: "Launch", d: "We ship, optimize and support your product worldwide." },
          ].map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <span className="accent font-display text-sm font-bold">
                {step.n}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
                {step.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="px-6 pb-28">
        <Reveal className="surface mx-auto max-w-4xl rounded-3xl px-8 py-16 text-center">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Ready to build something great?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-inktxt/60 dark:text-creamtxt/60">
            Tell us about your business and we&apos;ll design a website, app or
            platform that makes it shine.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-teal px-8 py-4 font-semibold text-white transition-colors hover:bg-tealdeep"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
