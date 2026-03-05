import Link from "next/link";
import Testimonials from "@/components/Testimonials";

const services = [
  { title: "Core Drilling", desc: "Precision drilling for plumbing, electrical, and HVAC." },
  { title: "Concrete Slab Cutting", desc: "Flat sawing for floors, roads, driveways, and slabs." },
  { title: "Concrete Wall Cutting", desc: "Openings for doors, windows, and utilities." },
  { title: "Reinforced Wall Cutting", desc: "Specialized cutting for structural reinforced concrete." },
  { title: "Building Demolition", desc: "Safe demolition and concrete removal." },
];

const steps = [
  ["1", "Call or message", "Tell us the scope, city, and timeline."],
  ["2", "Confirm details", "We verify access, measurements, and constraints."],
  ["3", "Get an estimate", "Clear scope and pricing."],
  ["4", "Work & cleanup", "We complete the job and keep the site clean."],
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0d0d0d] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm tracking-widest text-white/70">GOLDSBORO, NC</p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
              Concrete Cutting & Demolition
              <span className="text-[#c1121f]"> Done Right</span>
            </h1>

            <p className="mt-4 text-white/70">
              Core drilling, slab cutting, wall cutting, reinforced concrete cutting,
              and demolition services across Eastern North Carolina.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-xl bg-[#c1121f] px-6 py-3 text-center text-sm font-semibold shadow-sm hover:opacity-95"
              >
                Request a Quote
              </Link>

              <a
                href="tel:+19194292619"
                className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-center text-sm font-semibold hover:border-[#c1121f] hover:text-[#c1121f]"
              >
                Call (919) 429-2619
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Fast response
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Safety-first work
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Clean, accurate cuts
              </span>
            </div>
          </div>

          {/* INFO PANEL */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="h-1 w-12 rounded bg-[#c1121f]" />

            <h2 className="mt-4 text-xl font-semibold">What we can help with</h2>

            <p className="mt-2 text-white/70">
              If you need an opening, a clean cut, or controlled demolition,
              we’ll guide you through the best approach.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Utility penetrations", "Plumbing, electrical, HVAC"],
                ["Slab openings", "Trench cuts, repair sections"],
                ["Wall openings", "Doors, windows, access points"],
                ["Controlled demolition", "Removal and site prep"],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="mt-1 text-sm text-white/70">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold">How it works</h2>
        <p className="mt-2 text-sm text-black/70">Simple, straightforward process.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map(([num, title, desc]) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-black/[0.03] p-5">
              <div className="text-sm font-bold text-[#c1121f]">Step {num}</div>
              <div className="mt-1 font-semibold">{title}</div>
              <div className="mt-2 text-sm text-black/70">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold">Services</h2>
            <p className="mt-2 text-sm text-black/70">
              Fast scheduling, clean cuts, and safety-first work practices.
            </p>
          </div>

          <Link
            href="/services"
            className="w-fit rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/[0.02]"
          >
            View all services
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 p-6 shadow-sm">
              <div className="h-1 w-10 rounded bg-[#c1121f]" />

              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>

              <p className="mt-2 text-sm text-black/70">{s.desc}</p>

              <div className="mt-5 flex gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#c1121f] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
                >
                  Get a Quote
                </Link>

                <Link
                  href="/services"
                  className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/[0.02]"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials compact />

      {/* CTA */}
      <section className="bg-[#c1121f] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold">
              Need Concrete Cutting or Demolition?
            </h3>

            <p className="mt-2 text-white/85">
              Call now or request a quote — we’ll respond quickly.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-black px-6 py-3 text-sm font-semibold hover:bg-[#0d0d0d]"
            >
              Request a Quote
            </Link>

            <a
              href="tel:+19194292619"
              className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}