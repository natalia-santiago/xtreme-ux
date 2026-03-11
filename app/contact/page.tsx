"use client";

import Link from "next/link";

const GBP_URL = "https://share.google/w4xRGpqyikqr5mvJ9";

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

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="text-3xl font-bold">Request a Quote</h1>

          <p className="mt-2 max-w-2xl text-black/70">
            Let us know what services you&apos;re looking for, and our team will
            get back to you quickly. For immediate attention, call or text{" "}
            <a
              className="font-semibold text-[#c1121f]"
              href="tel:+12525826094"
              onClick={() => trackEvent("phone_call_click", "Contact Page Phone")}
            >
              (252) 582-6094
            </a>
            .
          </p>

          <p className="mt-2 text-sm text-black/60">
            Typical response time:{" "}
            <span className="font-semibold">same day or within 24 hours</span>.
          </p>

          <div className="mt-8 rounded-2xl border border-black/10 p-6 shadow-sm">
            <form
              name="quote"
              method="POST"
              action="/thank-you.html"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-5"
              onSubmit={() => trackEvent("quote_form_submit", "Quote Request Form")}
            >
              <input type="hidden" name="form-name" value="quote" />

              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Optional"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-medium"
                >
                  Location / Job Site
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City / address (optional)"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
                />
              </div>

              <div>
                <label
                  htmlFor="dimensions"
                  className="mb-2 block text-sm font-medium"
                >
                  Dimensions
                </label>
                <input
                  id="dimensions"
                  name="dimensions"
                  type="text"
                  placeholder='e.g., 4" x 6"'
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
                />
              </div>

              <div>
                <label
                  htmlFor="thickness"
                  className="mb-2 block text-sm font-medium"
                >
                  Thickness
                </label>
                <input
                  id="thickness"
                  name="thickness"
                  type="text"
                  placeholder='e.g., 6"'
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
                />
              </div>

              <div>
                <label htmlFor="details" className="mb-2 block text-sm font-medium">
                  What do you need?
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={6}
                  placeholder="Tell us about the job..."
                  required
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-[#c1121f] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Send
                </button>

                <Link
                  href="/"
                  className="text-base text-black/60 underline-offset-4 hover:text-black hover:underline"
                >
                  Back to home
                </Link>
              </div>
            </form>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-black/10 bg-[#f7f7f7] p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
              Google Business
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-black">
              Find us on Google
            </h2>

            <p className="mt-4 text-base leading-7 text-black/70">
              Xtreme Concrete Cutting &amp; Demolition is a service-area business
              based in Goldsboro, NC. View our Google Business Profile for
              reviews, business details, and updates.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={GBP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("google_reviews_click", "Contact Page GBP Button")
                }
                className="inline-flex justify-center rounded-md bg-[#c1121f] px-5 py-3 font-semibold text-white transition hover:opacity-90"
              >
                View Google Business Profile
              </a>

              <a
                href={GBP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("google_reviews_click", "Contact Page Reviews Button")
                }
                className="inline-flex justify-center rounded-md border border-black/15 bg-white px-5 py-3 font-semibold text-black transition hover:border-black/30 hover:bg-black/[0.02]"
              >
                Read Reviews
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <iframe
              title="Xtreme Concrete Cutting service area map"
              src="https://www.google.com/maps?q=Goldsboro,NC&output=embed"
              width="100%"
              height="340"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-black">Service area</h3>

            <p className="mt-3 text-base leading-7 text-black/70">
              Based in Goldsboro and serving projects across Eastern North
              Carolina, including Raleigh, Wilson, Kinston, Smithfield, Selma,
              and nearby areas.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-black/75">
              <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Goldsboro</div>
              <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Raleigh</div>
              <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Wilson</div>
              <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Kinston</div>
              <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Smithfield</div>
              <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Selma</div>
            </div>

            <div className="mt-6 space-y-2 text-sm text-black/70">
              <p>
                Phone:{" "}
                <a
                  className="font-semibold hover:text-black"
                  href="tel:+12525826094"
                  onClick={() => trackEvent("phone_call_click", "Contact Sidebar Phone")}
                >
                  (252) 582-6094
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  className="font-semibold hover:text-black"
                  href="mailto:info@xtremeconcretecutting.com"
                >
                  info@xtremeconcretecutting.com
                </a>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}