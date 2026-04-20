import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
        404 Error
      </p>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
        This page could not be found
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-black/70 sm:text-base">
        The page you are looking for may have been moved or no longer exists.
        If you are looking for concrete cutting or demolition services, we are
        here to help.
      </p>

      {/* ACTION BUTTONS */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/contact"
          className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#c1121f] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
        >
          Request a Quote
        </Link>

        <a
          href="tel:+12525826094"
          className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/[0.03]"
        >
          Call (252) 582-6094
        </a>
      </div>

      {/* HELPFUL LINKS */}
      <div className="mt-10 border-t border-black/10 pt-6">
        <p className="text-sm font-semibold text-black">
          Or continue browsing
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-black/70">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/services" className="hover:text-black">
            Services
          </Link>
          <Link href="/service-areas" className="hover:text-black">
            Service Areas
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}