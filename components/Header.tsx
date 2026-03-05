import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-black/10">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-2">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Xtreme Concrete Cutting & Demolition"
            width={120}
            height={120}
            priority
            className="object-contain"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden gap-8 text-sm font-semibold text-black md:flex">
          <Link href="/services" className="hover:text-[#c1121f] transition">
            Services
          </Link>
          <Link href="/projects" className="hover:text-[#c1121f] transition">
            Projects
          </Link>
          <Link href="/reviews" className="hover:text-[#c1121f] transition">
            Reviews
          </Link>
          <Link href="/about" className="hover:text-[#c1121f] transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#c1121f] transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <a
          href="tel:+19194292619"
          className="rounded-md bg-[#c1121f] px-5 py-1.5 text-sm font-semibold text-white hover:bg-[#8f0e16] transition"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}