import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[75vh] max-w-3xl flex-col items-center justify-center px-6 py-32 text-center">
      <p className="accent text-sm font-semibold uppercase tracking-[0.2em]">
        404 · Page not found
      </p>
      <h1 className="mt-5 font-display text-4xl font-bold sm:text-6xl">
        This page does not exist.
      </h1>
      <p className="mt-6 max-w-xl leading-relaxed text-inktxt/60 dark:text-creamtxt/60">
        The address may have changed, or the page may have been removed. Return
        home to explore our web design and development services.
      </p>
      <Link
        href="/"
        className="mt-9 rounded-full bg-teal px-8 py-4 font-semibold text-white transition-colors hover:bg-tealdeep"
      >
        Return Home
      </Link>
    </section>
  );
}
