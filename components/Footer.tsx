import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  // Optional: show this only when you have a real Google Business Profile link.
  // Set in Netlify env vars when ready:
  // NEXT_PUBLIC_GOOGLE_BUSINESS_URL = https://g.page/r/....
  const GOOGLE_BUSINESS_URL = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL?.trim();

  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">
            XTREME <span className="text-[#c1121f]">CONCRETE</span>
          </p>

          <p className="mt-2 text-sm text-white/70">Concrete Cutting &amp; Demolition</p>

          <p className="mt-1 text-sm text-white/70">
            Goldsboro, NC • Serving Eastern North Carolina
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-[#c1121f] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#8f0e16]"
            >
              Request a Quote
            </Link>

            <a
              href="tel:+12525826094"
              className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90 transition hover:bg-white/10"
            >
              Call Now
            </a>
          </div>

          {/* Only show once Google Business Profile is claimed */}
          {GOOGLE_BUSINESS_URL ? (
            <p className="mt-4 text-xs text-white/60">
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:underline"
              >
                Find us on Google
              </a>
            </p>
          ) : null}
        </div>

        <div className="text-sm">
          <p className="font-semibold">Contact</p>

          <div className="mt-2 space-y-1 text-white/70">
            <a href="tel:+12525826094" className="block hover:text-white hover:underline">
              (252) 582-6094
            </a>

            <a href="tel:+12525826094" className="block hover:text-white hover:underline">
              (252) 582-6094
            </a>

            <a
              href="mailto:xtreme.concretecutting.demo@gmail.com"
              className="block break-all sm:break-words hover:text-white hover:underline"
            >
              xtreme.concretecutting.demo@gmail.com
            </a>
          </div>

          <p className="mt-4 text-xs text-white/60">★★★★★ References available upon request</p>
        </div>

        <div className="text-sm">
          <p className="font-semibold">Quick Links</p>

          <ul className="mt-2 space-y-2 text-white/70">
            <li>
              <Link href="/services" className="hover:text-white hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/service-areas" className="hover:text-white hover:underline">
                Service Areas
              </Link>
            </li>

            {/* These pages may not exist yet. Route to contact to avoid 404s for now. */}
            <li>
              <Link href="/contact" className="hover:text-white hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white hover:underline">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white hover:underline">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-semibold">Services</p>

          <ul className="mt-2 space-y-2 text-white/70">
            <li>
              <Link href="/services#core-drilling" className="hover:text-white hover:underline">
                Core Drilling
              </Link>
            </li>
            <li>
              <Link href="/services#slab-cutting" className="hover:text-white hover:underline">
                Concrete Slab Cutting
              </Link>
            </li>
            <li>
              <Link href="/services#wall-cutting" className="hover:text-white hover:underline">
                Concrete Wall Cutting
              </Link>
            </li>
            <li>
              <Link href="/services#reinforced-wall-cutting" className="hover:text-white hover:underline">
                Reinforced Wall Cutting
              </Link>
            </li>
            <li>
              <Link href="/services#demolition" className="hover:text-white hover:underline">
                Building Demolition
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {year} Xtreme Concrete Cutting &amp; Demolition LLC
      </div>
    </footer>
  );
}