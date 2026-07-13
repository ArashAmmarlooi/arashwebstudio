import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-inktxt/10 dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">
            <span className="accent">Arash</span> Web Studio
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
            We design your website, your way. Websites, e-commerce, mobile apps
            and software for any kind of business — anywhere in the world.
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
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-inktxt/40 dark:text-creamtxt/40">
            Get in touch
          </p>
          <ul className="space-y-2 text-sm text-inktxt/70 dark:text-creamtxt/70">
            <li>
              <a href="tel:+14383676701" className="hover:text-tealdeep dark:hover:text-sage">
                +1 (438) 367-6701
              </a>
            </li>
            <li>
              <a href="mailto:arashammarlooi@hotmail.com" className="hover:text-tealdeep dark:hover:text-sage">
                arashammarlooi@hotmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-inktxt/5 py-6 text-center text-xs text-inktxt/40 dark:border-white/5 dark:text-creamtxt/40">
        © {new Date().getFullYear()} Arash Web Studio. 13+ years of global design experience.
      </div>
    </footer>
  );
}
