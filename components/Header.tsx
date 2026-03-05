import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#0d0d0d] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Xtreme Concrete Cutting & Demolition"
            width={150}
            height={150}
            priority
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden gap-8 text-sm font-semibold md:flex">
          <Link href="/services" className="hover:text-[#c1121f]">
            Services
          </Link>

          <Link href="/projects" className="hover:text-[#c1121f]">
            Projects
          </Link>

          <Link href="/reviews" className="hover:text-[#c1121f]">
            Reviews
          </Link>

          <Link href="/about" className="hover:text-[#c1121f]">
            About
          </Link>

          <Link href="/contact" className="hover:text-[#c1121f]">
            Contact
          </Link>
        </nav>

        {/* CALL BUTTON */}
        <a
          href="tel:+19194292619"
          className="rounded-md bg-[#c1121f] px-5 py-2 text-sm font-semibold hover:bg-[#8f0e16]"
        >
          Call Now
        </a>

      </div>
    </header>
  );
}