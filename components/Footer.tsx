import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">
            XTREME <span className="text-[#c1121f]">CONCRETE</span>
          </p>

          <p className="mt-2 text-sm text-white/70">
            Concrete Cutting &amp; Demolition
          </p>

          <p className="mt-1 text-sm text-white/70">
            Goldsboro, NC • Serving Eastern North Carolina
          </p>

          <div className="mt-6">
            <h3 className="text-base font-semibold">Contact</h3>
            <p className="mt-3 text-sm text-white/75">
              <a href="tel:+12525826094" className="hover:text-white">
                (252) 582-6094
              </a>
            </p>
            <p className="mt-2 text-sm text-white/75">
              <a
                href="mailto:xtreme.concretecutting.demo@gmail.com"
                className="break-all hover:text-white"
              >
                xtreme.concretecutting.demo@gmail.com
              </a>
            </p>
            <p className="mt-4 text-sm text-white/65">
              ★★★★★ References available upon request
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/service-areas" className="hover:text-white">
                Service Areas
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>Core Drilling</li>
            <li>Concrete Slab Cutting</li>
            <li>Concrete Wall Cutting</li>
            <li>Reinforced Wall Cutting</li>
            <li>Building Demolition</li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold">Hours</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>Monday - Friday: 7:00 AM - 6:00 PM</li>
            <li>Saturday: By appointment</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} Xtreme Concrete Cutting &amp; Demolition. All rights reserved.</p>
          <p>Website by Natalia Santiago</p>
        </div>
      </div>
    </footer>
  );
}