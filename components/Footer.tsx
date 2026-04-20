"use client";

import Link from "next/link";

const GBP_URL = "https://share.google/w4xRGpqyikqr5mvJ9";
const PHONE_DISPLAY = "(252) 582-6094";
const PHONE_HREF = "tel:+12525826094";
const EMAIL = "info@xtremeconcretecutting.com";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function trackEvent(eventName: string, eventLabel: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: "Lead",
      event_label: eventLabel,
    });
  }
}

const services = [
  { href: "/services#core-drilling", label: "Core Drilling" },
  { href: "/services#slab-cutting", label: "Concrete Slab Cutting" },
  { href: "/services#wall-cutting", label: "Concrete Wall Cutting" },
  {
    href: "/services#reinforced-wall-cutting",
    label: "Reinforced Wall Cutting",
  },
  { href: "/services#building-demolition", label: "Building Demolition" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-14 md:py-16">
        <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-[1.3fr_0.8fr_0.9fr_0.9fr]">
          <div className="max-w-[440px]">
            <p className="text-xl font-extrabold tracking-tight">
              XTREME <span className="text-[#c1121f]">CONCRETE</span>
            </p>

            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
              Cutting &amp; Demolition
            </p>

            <p className="mt-5 text-sm leading-7 text-white/72">
              Reliable concrete cutting and demolition services for residential,
              commercial, and contractor projects across Goldsboro and Eastern
              North Carolina.
            </p>

            <p className="mt-3 text-sm text-white/72">
              Goldsboro, NC • Serving Eastern NC
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#c1121f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a30f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
                onClick={() =>
                  trackEvent("request_quote_click", "Footer Request Quote")
                }
              >
                Request a Quote
              </Link>

              <a
                href={PHONE_HREF}
                className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
                onClick={() => trackEvent("phone_call_click", "Footer Phone")}
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-9">
              <h3 className="text-base font-semibold">Contact</h3>

              <div className="mt-3 space-y-2 text-sm text-white/75">
                <p>
                  <a
                    href={PHONE_HREF}
                    className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
                    onClick={() =>
                      trackEvent("phone_call_click", "Footer Contact Phone")
                    }
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>

                <p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
                  >
                    {EMAIL}
                  </a>
                </p>
              </div>

              <div className="mt-5">
                <a
                  href={GBP_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    trackEvent("google_reviews_click", "Footer Google Reviews")
                  }
                  className="inline-flex min-h-[44px] items-center rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
                >
                  View Google Business Profile
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas"
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">Services</h3>

            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">Hours</h3>

            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>Monday to Friday: 7:00 AM to 6:00 PM</li>
              <li>Saturday: By appointment</li>
              <li>Sunday: Closed</li>
            </ul>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-6 text-white/70">
              Licensed &amp; insured • Fast response times • Serving Eastern NC
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Xtreme Concrete Cutting &amp; Demolition. All rights
            reserved.
          </p>
          <p>Website by Natalia Santiago</p>
        </div>
      </div>
    </footer>
  );
}