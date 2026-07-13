"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-inktxt/10 bg-paper/90 py-3 backdrop-blur-md dark:border-white/10 dark:bg-night/90"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Arash Web Studio home"
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="accent">Arash</span> Web Studio
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "accent"
                  : "text-inktxt/60 hover:text-inktxt dark:text-creamtxt/60 dark:hover:text-creamtxt"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-tealdeep"
          >
            Start a Project
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5"
          >
            <span className={`h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="surface mx-4 mt-3 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                pathname === l.href
                  ? "bg-teal/10 accent"
                  : "text-inktxt/70 dark:text-creamtxt/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
