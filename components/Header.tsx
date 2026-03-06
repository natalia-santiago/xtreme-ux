"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Request a Quote" },
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="border-b border-black/10 bg-white">
      {/* Top info strip */}
      <div className="bg-[#c1121f] text-white">
        <div className="mx-auto max-w-6xl px-4 py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Goldsboro, NC</span>
            <span className="opacity-80">•</span>
            <span>Serving Eastern NC</span>
            <span className="opacity-80">•</span>
            <a className="underline-offset-2 hover:underline" href="tel:+19194292619">
              (919) 429-2619
            </a>
            <span className="opacity-80">•</span>
            <a
              className="underline-offset-2 hover:underline"
              href="mailto:xtreme.concretecutting.demo@gmail.com"
            >
              xtreme.concretecutting.demo@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main header row */}
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between gap-3 min-w-0">
          {/* Logo / Brand */}
          <Link href="/" className="min-w-0">
            <div className="text-lg font-extrabold leading-tight tracking-tight">
              <span className="block">XTREME</span>
              <span className="block text-[#c1121f]">CONCRETE</span>
              <span className="block text-xs font-semibold tracking-[0.2em] text-black/70">
                CUTTING & DEMOLITION LLC
              </span>
            </div>
          </Link>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="tel:+19194292619"
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

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-xl border border-black/15 p-2 sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="mt-4 hidden gap-6 text-sm font-semibold sm:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-black/70 hover:text-black">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu panel */}
        {open && (
          <div className="sm:hidden">
            <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-3">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 font-semibold text-black/80 hover:bg-black/5"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}

                <div className="mt-2 grid grid-cols-2 gap-2">
                  <a
                    href="tel:+19194292619"
                    className="rounded-xl bg-black px-4 py-2 text-center text-sm font-semibold text-white hover:opacity-90"
                    onClick={() => setOpen(false)}
                  >
                    Call
                  </a>
                  <Link
                    href="/contact"
                    className="rounded-xl bg-[#c1121f] px-4 py-2 text-center text-sm font-semibold text-white hover:opacity-90"
                    onClick={() => setOpen(false)}
                  >
                    Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}