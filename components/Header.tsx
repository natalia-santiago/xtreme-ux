"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="bg-[#c1121f] text-white">
        <div className="mx-auto max-w-[1400px] px-4 py-2 text-[11px] font-medium sm:text-sm md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start">
            <span>Goldsboro, NC</span>
            <span className="opacity-75">•</span>
            <span>Serving Eastern NC</span>
            <span className="opacity-75">•</span>

            <a
              href="tel:+12525826094"
              className="transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c1121f]"
              aria-label="Call Xtreme Concrete Cutting"
            >
              (252) 582-6094
            </a>

            <span className="hidden sm:inline opacity-75">•</span>

            <a
              href="mailto:info@xtremeconcretecutting.com"
              className="break-all transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c1121f] sm:break-normal"
              aria-label="Email Xtreme Concrete Cutting"
            >
              info@xtremeconcretecutting.com
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="flex min-h-[82px] items-center justify-between gap-4 py-3.5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Xtreme Concrete Cutting homepage"
          >
            <Image
              src="/logo-transparent.png"
              alt="Xtreme Concrete Cutting & Demolition company logo"
              width={64}
              height={64}
              priority
              className="h-13 w-13 shrink-0 sm:h-15 sm:w-15"
            />

            <div className="min-w-0 leading-tight">
              <p className="truncate text-base font-extrabold tracking-tight text-black sm:text-lg">
                XTREME <span className="text-[#c1121f]">CONCRETE</span>
              </p>

              <p className="truncate text-[11px] font-semibold tracking-[0.14em] text-black/60 sm:text-xs">
                CUTTING &amp; DEMOLITION LLC
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <nav
              className="flex items-center gap-6 text-sm font-semibold"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative pb-1 transition-colors ${
                      active ? "text-black" : "text-black/70 hover:text-black"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#c1121f] transition-all ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="tel:+12525826094"
                className="rounded-xl border border-black/10 bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                aria-label="Call now"
              >
                Call Now
              </a>

              <Link
                href="/contact"
                className="rounded-xl bg-[#c1121f] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
                aria-label="Request a quote"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <button
            type="button"
            className="rounded-xl border border-black/15 p-2.5 text-black transition hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className="hidden border-t border-black/8 md:block lg:hidden">
          <div className="flex items-center justify-between gap-5 py-3">
            <nav
              className="flex items-center gap-5 text-sm font-semibold"
              aria-label="Tablet navigation"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative pb-1 transition-colors ${
                      active ? "text-black" : "text-black/70 hover:text-black"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#c1121f] transition-all ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="tel:+12525826094"
                className="rounded-xl border border-black/10 bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Call Now
              </a>

              <Link
                href="/contact"
                className="rounded-xl bg-[#c1121f] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-black/10 bg-white lg:hidden"
        >
          <div className="mx-auto max-w-[1400px] px-4 py-4 md:px-6">
            <nav
              className="flex flex-col gap-1.5"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      active
                        ? "bg-[#c1121f]/10 text-[#c1121f]"
                        : "text-black/80 hover:bg-black/[0.03] hover:text-black"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href="tel:+12525826094"
                className="rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Call Now
              </a>

              <Link
                href="/contact"
                className="rounded-xl bg-[#c1121f] px-4 py-3 text-center text-sm font-semibold text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}