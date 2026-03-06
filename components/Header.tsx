"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Request a Quote" },
];

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="border-b border-black/10 bg-white">

      {/* TOP BAR */}
      <div className="bg-[#c1121f] text-white">
        <div className="mx-auto max-w-6xl px-4 py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Goldsboro, NC</span>
            <span className="opacity-80">•</span>
            <span>Serving Eastern NC</span>
            <span className="opacity-80">•</span>

            <a href="tel:+12525826094" className="hover:underline">
              (252) 582-6094
            </a>

            <span className="opacity-80">•</span>

            <a
              href="mailto:xtreme.concretecutting.demo@gmail.com"
              className="hover:underline break-all sm:break-normal"
            >
              xtreme.concretecutting.demo@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="mx-auto max-w-6xl px-4 py-5">

        <div className="flex items-center justify-between">

          {/* LOGO + NAME */}
          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/logo-transparent.png"
              alt="Xtreme Concrete Cutting & Demolition"
              width={70}
              height={70}
              priority
            />

            <div className="leading-tight">
              <p className="text-lg font-extrabold tracking-tight">
                XTREME <span className="text-[#c1121f]">CONCRETE</span>
              </p>

              <p className="text-xs font-semibold text-black/60 tracking-wide">
                CUTTING & DEMOLITION LLC
              </p>
            </div>

          </Link>

          {/* DESKTOP BUTTONS */}
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="tel:+12525826094"
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Call
            </a>

            <Link
              href="/contact"
              className="rounded-xl bg-[#c1121f] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Request a Quote
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="sm:hidden rounded-lg border border-black/15 p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>

        </div>

        {/* DESKTOP NAV */}
        <nav className="mt-4 hidden gap-6 text-sm font-semibold sm:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-black/70 hover:text-black">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE NAV */}
        {open && (
          <div className="mt-4 sm:hidden border rounded-xl p-4 shadow-sm">
            <div className="flex flex-col gap-3">

              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-semibold text-black/80"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href="tel:+12525826094"
                  className="rounded-xl bg-black px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  Call
                </a>

                <Link
                  href="/contact"
                  className="rounded-xl bg-[#c1121f] px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  Quote
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>

    </header>
  );
}