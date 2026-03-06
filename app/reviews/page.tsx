// app/reviews/page.tsx
import Link from "next/link";
import Testimonials from "@/components/Testimonials";

export default function ReviewsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0d0d0d] text-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-14">
          <p className="text-xs tracking-widest text-white/70">REVIEWS</p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Trusted work.
            <span className="text-[#c1121f]"> Clear communication.</span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm text-white/70">
            We’re building our online reviews as we complete more projects. In the meantime,
            references are available upon request.
          </p>

          {/* Free estimate badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85">
            <span className="inline-block h-2 w-2 rounded-full bg-[#c1121f]" />
            FREE ESTIMATES • FAST RESPONSE
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-[#c1121f] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#8f0e16]"
            >
              Request a Quote
            </Link>

            <a
              href="tel:+12525826094"
              className="rounded-md border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white hover:border-[#c1121f] hover:text-[#c1121f]"
            >
              Call (252) 582-6094
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-12">
          {/* Testimonials (keep component) */}
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Testimonials</h2>
                <p className="mt-2 text-sm text-black/70">
                  As we grow, verified reviews and before/after photos will be added here.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-md bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8f0e16]"
                >
                  Request References
                </Link>
                <Link
                  href="/services"
                  className="rounded-md border border-black/15 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/[0.02]"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <Testimonials />
            </div>
          </section>

          {/* What matters to us */}
          <section className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">What matters to us</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["Safety", "Controlled work, jobsite awareness, and tidy work areas."],
                ["Quality", "Clean, accurate cuts and solid communication."],
                ["Reliability", "Clear estimates and scheduling updates."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl bg-black/[0.03] p-5">
                  <div className="font-semibold">{title}</div>
                  <p className="mt-2 text-sm text-black/70">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="mt-10 rounded-2xl bg-black/[0.03] p-6">
            <h3 className="text-xl font-semibold">Need an estimate?</h3>
            <p className="mt-2 text-sm text-black/70">
              Tell us your city/job address and what you need — we’ll respond quickly.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-[#c1121f] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#8f0e16]"
              >
                Request a Quote
              </Link>

              <a
                href="tel:+12525826094"
                className="rounded-md border border-black/15 bg-white px-6 py-3 text-center text-sm font-semibold hover:bg-black/[0.02]"
              >
                Call (252) 582-6094
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Red CTA strip */}
      <section className="bg-[#c1121f] text-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold">Talk to an expert today!</h3>
            <p className="mt-2 text-white/85">Call us for quick scheduling and a clear estimate.</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold hover:bg-[#0d0d0d]"
            >
              Contact Us
            </Link>

            <a
              href="tel:+12525826094"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold"
            >
              Or call: (252) 582-6094
            </a>
          </div>
        </div>
      </section>
    </>
  );
}