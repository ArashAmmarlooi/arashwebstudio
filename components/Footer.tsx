import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-inktxt/10 dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">
            <span className="accent">Arash</span> Web Studio
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
            Founded and led by Arash Ammarlooi in Montreal. Independent web
            design, e-commerce, apps and custom software for businesses in
            Canada and worldwide.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">
            Pages
          </p>
          <ul className="space-y-2 text-sm text-inktxt/70 dark:text-creamtxt/70">
            <li><Link href="/" className="hover:accent hover:text-tealdeep dark:hover:text-sage">Home</Link></li>
            <li><Link href="/about" className="hover:text-tealdeep dark:hover:text-sage">About</Link></li>
            <li><Link href="/contact" className="hover:text-tealdeep dark:hover:text-sage">Contact</Link></li>
          </ul>
          <p className="mb-4 mt-7 text-xs font-semibold uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">
            Services
          </p>
          <ul className="space-y-2 text-sm text-inktxt/70 dark:text-creamtxt/70">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-tealdeep dark:hover:text-sage"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">
            Get in touch
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
              <li>Montreal, Quebec</li>
              <li>Serving Canada and clients worldwide</li>
            </ul>
          </address>
        </div>
      </div>
      <div className="border-t border-inktxt/5 py-6 text-center text-xs text-inktxt/40 dark:border-white/5 dark:text-creamtxt/40">
        © {new Date().getFullYear()} Arash Web Studio. Founded and led by Arash Ammarlooi.
      </div>
    </footer>
  );
}
