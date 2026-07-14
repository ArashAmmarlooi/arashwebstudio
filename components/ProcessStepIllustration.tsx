"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = ["discover", "design", "build", "launch"] as const;
export type ProcessStepKey = (typeof steps)[number];

function DiscoverArt() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-full w-full">
      <rect width="320" height="240" rx="20" fill="#1c2823" />
      <circle cx="250" cy="50" r="40" fill="#4f837b" fillOpacity="0.2" />
      <circle cx="140" cy="105" r="52" stroke="#4f837b" strokeWidth="10" />
      <circle cx="140" cy="105" r="34" fill="#284a45" />
      <circle cx="128" cy="93" r="12" fill="#9bc4b9" fillOpacity="0.5" />
      <rect x="172" y="138" width="58" height="14" rx="7" transform="rotate(45 172 138)" fill="#f4f1e8" />
      <path d="M70 80c14-20 36-20 50 0" stroke="#9bc4b9" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.55" />
      <path d="M58 62c22-28 54-28 76 0" stroke="#4f837b" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.4" />
      <circle cx="210" cy="75" r="6" fill="#9bc4b9" />
      <circle cx="230" cy="100" r="4" fill="#4f837b" />
    </svg>
  );
}

function DesignArt() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-full w-full">
      <rect width="320" height="240" rx="20" fill="#1c2823" />
      <circle cx="55" cy="55" r="35" fill="#4f837b" fillOpacity="0.18" />
      <rect x="75" y="45" width="170" height="130" rx="14" fill="#284a45" />
      <rect x="92" y="62" width="136" height="90" rx="8" fill="#f4f1e8" />
      <rect x="105" y="78" width="55" height="8" rx="4" fill="#4f837b" />
      <rect x="105" y="96" width="95" height="6" rx="3" fill="#9bc4b9" fillOpacity="0.65" />
      <rect x="105" y="112" width="80" height="6" rx="3" fill="#9bc4b9" fillOpacity="0.45" />
      <rect x="105" y="132" width="45" height="14" rx="7" fill="#4f837b" />
      <circle cx="110" cy="200" r="14" fill="#4f837b" />
      <circle cx="140" cy="200" r="14" fill="#9bc4b9" />
      <circle cx="170" cy="200" r="14" fill="#f4f1e8" />
      <circle cx="200" cy="200" r="14" fill="#284a45" stroke="#9bc4b9" strokeWidth="2" />
      <path d="M235 130l28 48-14-4 4-14Z" fill="#4f837b" />
    </svg>
  );
}

function BuildArt() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-full w-full">
      <rect width="320" height="240" rx="20" fill="#1c2823" />
      <circle cx="270" cy="45" r="38" fill="#4f837b" fillOpacity="0.2" />
      <rect x="60" y="40" width="200" height="150" rx="14" fill="#284a45" />
      <circle cx="82" cy="62" r="5" fill="#9bc4b9" />
      <circle cx="100" cy="62" r="5" fill="#4f837b" />
      <circle cx="118" cy="62" r="5" fill="#f4f1e8" fillOpacity="0.7" />
      <rect x="75" y="82" width="22" height="8" rx="4" fill="#4f837b" />
      <rect x="102" y="82" width="60" height="8" rx="4" fill="#9bc4b9" fillOpacity="0.55" />
      <rect x="88" y="100" width="28" height="8" rx="4" fill="#f4f1e8" fillOpacity="0.55" />
      <rect x="120" y="100" width="80" height="8" rx="4" fill="#9bc4b9" fillOpacity="0.4" />
      <rect x="88" y="118" width="45" height="8" rx="4" fill="#4f837b" fillOpacity="0.8" />
      <rect x="138" y="118" width="65" height="8" rx="4" fill="#9bc4b9" fillOpacity="0.35" />
      <rect x="95" y="136" width="35" height="8" rx="4" fill="#f4f1e8" fillOpacity="0.45" />
      <path d="M35 95l-14 25 14 25" stroke="#4f837b" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M285 95l14 25-14 25" stroke="#9bc4b9" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="120" y="200" width="24" height="18" rx="4" fill="#4f837b" />
      <rect x="148" y="200" width="24" height="18" rx="4" fill="#9bc4b9" />
      <rect x="134" y="178" width="24" height="18" rx="4" fill="#f4f1e8" fillOpacity="0.85" />
    </svg>
  );
}

function LaunchArt() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-full w-full">
      <rect width="320" height="240" rx="20" fill="#1c2823" />
      <circle cx="50" cy="50" r="32" fill="#4f837b" fillOpacity="0.18" />
      <circle cx="125" cy="120" r="55" fill="#284a45" />
      <ellipse cx="125" cy="120" rx="24" ry="55" stroke="#4f837b" strokeWidth="5" />
      <ellipse cx="125" cy="120" rx="55" ry="20" stroke="#9bc4b9" strokeWidth="4" strokeOpacity="0.7" />
      <circle cx="125" cy="120" r="55" stroke="#4f837b" strokeWidth="6" />
      <circle cx="95" cy="100" r="5" fill="#f4f1e8" />
      <circle cx="155" cy="115" r="5" fill="#f4f1e8" />
      <circle cx="130" cy="150" r="5" fill="#f4f1e8" />
      <g transform="translate(190 60) rotate(28)">
        <path d="M20 10c0 0 28 18 28 55 0 0-10 9-28 9S-8 65-8 65C-8 28 20 10 20 10Z" fill="#4f837b" />
        <circle cx="20" cy="48" r="9" fill="#f4f1e8" />
        <circle cx="20" cy="48" r="5" fill="#9bc4b9" />
        <path d="M-3 58l-14 18 24-6Z" fill="#9bc4b9" />
        <path d="M43 58l14 18-24-6Z" fill="#9bc4b9" />
        <path d="M11 74l9 21 9-21Z" fill="#f4f1e8" fillOpacity="0.85" />
      </g>
      <circle cx="210" cy="140" r="4" fill="#9bc4b9" />
      <circle cx="230" cy="170" r="3" fill="#4f837b" />
    </svg>
  );
}

const artByStep: Record<ProcessStepKey, () => JSX.Element> = {
  discover: DiscoverArt,
  design: DesignArt,
  build: BuildArt,
  launch: LaunchArt,
};

export function ProcessStepIllustration({ step, index }: { step: ProcessStepKey; index: number }) {
  const Art = artByStep[step];
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.21, 0.65, 0.35, 1] }}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
      className="group mb-5 overflow-hidden rounded-2xl border border-inktxt/5 shadow-lg shadow-inktxt/10 transition-shadow duration-500 hover:shadow-xl hover:shadow-teal/20 dark:border-white/10 dark:shadow-black/30 dark:hover:shadow-teal/10"
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
        className="aspect-[4/3] w-full"
      >
        <Art />
      </motion.div>
    </motion.div>
  );
}

export const processStepKeys = steps;
