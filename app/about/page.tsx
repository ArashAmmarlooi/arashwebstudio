"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref} className="accent font-display text-5xl font-bold sm:text-6xl">
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { target: 13, suffix: "+", label: "Years of experience" },
  { target: 58, suffix: "", label: "Projects delivered" },
  { target: 14, suffix: "", label: "Countries reached" },
  { target: 100, suffix: "%", label: "Passion for design" },
];

const values = [
  {
    title: "Flexible Collaboration",
    desc: "Arash leads every project and brings in trusted independent designers or developers when a project needs additional expertise.",
  },
  {
    title: "Craft Over Everything",
    desc: "Thirteen years of refining our craft means every pixel, every animation and every interaction is intentional.",
  },
  {
    title: "Business-First Thinking",
    desc: "Beautiful is not enough. Every project is designed to grow your business — more customers, more sales, more impact.",
  },
  {
    title: "True Partnership",
    desc: "From the first sketch to long after launch, we work side by side with you. Your goals become our goals.",
  },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="accent text-sm font-semibold uppercase tracking-[0.2em]"
        >
          About us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.21, 0.65, 0.35, 1] }}
          className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl"
        >
          Independent studio. <span className="accent">Personal service.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-inktxt/60 dark:text-creamtxt/60"
        >
          Arash Ammarlooi founded and leads this independent Montreal web
          studio. Since 2013, the studio has designed and built digital
          experiences for clients in Canada and across the world.
        </motion.p>
      </section>

      {/* STATS */}
      <section className="border-y border-inktxt/10 bg-card/50 py-16 dark:border-white/10 dark:bg-nightcard/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Counter target={s.target} suffix={s.suffix} />
              <p className="mt-3 text-xs uppercase tracking-widest text-inktxt/50 dark:text-creamtxt/50">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Led by Arash, built around <span className="accent">your goals</span>
            </h2>
            <div className="mt-7 space-y-5 leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
              <p>
                Arash Ammarlooi is the founder and lead designer behind Arash
                Web Studio in Montreal, Quebec. Every client works directly
                with him from the first conversation through launch. For
                projects that need additional expertise, he collaborates with
                trusted independent designers and developers.
              </p>
              <p>
                Working across countries and cultures taught us something
                valuable: great design is universal, but great service is
                personal. No matter where you are or what your business is, we
                design around <em>you</em> — your customers, your market, your
                vision.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Image
              src="/images/about-globe.png"
              alt="Globe representing clients served in Montreal, Canada and worldwide"
              width={640}
              height={640}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="mx-auto w-full max-w-md rounded-3xl"
            />
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-inktxt/10 bg-card/50 py-24 dark:border-white/10 dark:bg-nightcard/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="accent text-sm font-semibold uppercase tracking-[0.2em]">
              What drives us
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              Our values
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="surface h-full rounded-3xl p-8">
                  <h3 className="font-display text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Want personal service backed by{" "}
            <span className="accent">real experience?</span>
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-teal px-8 py-4 font-semibold text-white transition-colors hover:bg-tealdeep"
            >
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
