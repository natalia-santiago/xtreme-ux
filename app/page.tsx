// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

const services = [
  {
    title: "Core Drilling",
    desc: "Precision drilling for plumbing, electrical, HVAC, and structural penetrations.",
    img: "/images/core-drilling.jpeg",
  },
  {
    title: "Concrete Slab Cutting",
    desc: "Flat sawing for floors, roads, driveways, and commercial slabs.",
    img: "/images/hero.jpg",
  },
  {
    title: "Concrete Wall Cutting",
    desc: "Clean openings for doors, windows, and utilities in concrete walls.",
    img: "/images/safety.jpg",
  },
  {
    title: "Reinforced Wall Cutting",
    desc: "Specialized cutting for heavily reinforced structural concrete.",
    img: "/images/reinforced-wall-cutting.png",
  },
  {
    title: "Building Demolition",
    desc: "Safe demolition and concrete removal for renovation and rebuild projects.",
    img: "/images/demolition.jpg",
  },
];

export default function Home() {
  const textMessage = encodeURIComponent(
    "Hi, I'm interested in a quote for concrete cutting / demolition."
  );

  return (
    <>
      {/* HERO SLIDER + TRUST STRIP + ICON STRIP */}
      <section className="relative w-full overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-6 pt-12">
          <HeroSlider />

          {/* Trust strip */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-black/70">
              <span className="text-[#c1121f]">★★★★★</span>
              <span>References available upon request</span>
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-black/70">
              <span className="text-black/60">📍</span>
              <span>Local to Goldsboro • Serving Eastern NC</span>
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-black/70">
              <span className="text-black/60">🦺</span>
              <span>Safety-first • Clean work areas</span>
            </span>
          </div>
        </div>

        {/* Icon/category strip */}
        <div className="relative mt-10 w-full bg-white">
          <div className="mx-auto grid w-full max-w-[1400px] gap-3 px-6 py-6 lg:grid-cols-3">
            {[
              {
                title: "CORE DRILLING",
                sub: "Penetrations & utilities",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 7l10 10" />
                    <path d="M9 5l10 10" />
                    <path d="M5 9l10 10" />
                    <path d="M3 21l6-6" />
                  </svg>
                ),
              },
              {
                title: "CUTTING & DEMO",
                sub: "Slab + wall cutting",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="7" />
                    <path d="M12 5v2" />
                    <path d="M12 17v2" />
                    <path d="M5 12h2" />
                    <path d="M17 12h2" />
                  </svg>
                ),
              },
              {
                title: "SITE SUPPORT",
                sub: "Clean removal & prep",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 18h18" />
                    <path d="M6 18l2-10h8l2 10" />
                    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xl border border-black/10 bg-white p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black/70">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-black/70">{item.title}</p>
                  <p className="text-xs text-black/60">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="w-full bg-black/[0.03]">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-6 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold">Who we are</h2>

            <p className="mt-3 text-sm text-black/70">
              Xtreme Concrete Cutting &amp; Demolition LLC is based in Goldsboro, NC and serves
              surrounding areas across Eastern North Carolina. We focus on safe methods, clean
              results, and clear communication from quote to completion.
            </p>

            <p className="mt-3 text-sm text-black/70">
              We’re a new company building our online portfolio — references are available upon
              request.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-md bg-[#c1121f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8f0e16]"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-black/15 bg-white px-6 py-3 text-sm font-semibold hover:bg-black/[0.02]"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <div className="relative h-56 w-full lg:h-72">
              <Image
                src="/images/safety.jpg"
                alt="Safety-first jobsite"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold">Safety-first work</p>
              <p className="mt-1 text-sm text-black/70">
                Controlled cutting, tidy work areas, and jobsite awareness — every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <h2 className="text-2xl font-bold">Services we offer</h2>
            <p className="mt-2 text-sm text-black/70">
              Fast scheduling, clean cuts, and safety-first work practices.
            </p>
          </div>

          <Link
            href="/services"
            className="rounded-md border border-black/15 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/[0.02]"
          >
            View all services
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="tel:+12525826094"
            className="rounded-md bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8f0e16]"
          >
            Call (252) 582-6094
          </a>

          <a
            href={`sms:+12525826094?body=${textMessage}`}
            className="rounded-md border border-black/15 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/[0.02]"
          >
            Text for a Quote
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
            >
              <div className="relative h-40 w-full">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="p-6">
                <div className="h-1 w-10 rounded bg-[#c1121f]" />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-black/70">{s.desc}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-md bg-[#c1121f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#8f0e16]"
                  >
                    Get a Quote
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-md border border-black/15 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/[0.02]"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-14">
          <h2 className="text-2xl font-bold">Our location</h2>
          <p className="mt-2 text-sm text-black/70">
            Based in Goldsboro, NC — serving surrounding areas across Eastern North Carolina.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <iframe
              title="Xtreme Concrete Cutting & Demolition - Goldsboro NC"
              src="https://maps.google.com/maps?q=Goldsboro%20NC&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="h-[380px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-black/[0.03]">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-14">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-2 text-sm text-black/70">
            Quick answers to common questions about cutting, drilling, and demolition.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              {
                q: "How fast can you schedule a job?",
                a: "Scheduling depends on scope and location, but we aim for fast response and clear timelines after we review your details.",
              },
              {
                q: "What information helps you provide an accurate quote?",
                a: "Job address/city, photos, approximate dimensions and thickness, and your desired start date.",
              },
              {
                q: "Do you work outside of Goldsboro?",
                a: "Yes — we serve Goldsboro/Wayne County and surrounding areas across Eastern North Carolina.",
              },
              {
                q: "Can you cut reinforced concrete?",
                a: "Yes — we offer reinforced concrete cutting and can advise on the safest approach based on the material and access.",
              },
              {
                q: "Do you keep the job site clean?",
                a: "We prioritize safety and keep the work area as clean and controlled as possible throughout the job.",
              },
              {
                q: "Do you have reviews yet?",
                a: "We’re building our online portfolio as we complete more projects — references are available upon request.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold">{item.q}</p>
                <p className="mt-2 text-sm text-black/70">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-[#c1121f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8f0e16]"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+12525826094"
              className="rounded-md border border-black/15 bg-white px-6 py-3 text-sm font-semibold hover:bg-black/[0.02]"
            >
              Call (252) 582-6094
            </a>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="w-full bg-[#c1121f] text-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-6 px-6 py-10 lg:flex-row lg:items-center">
          <div>
            <h3 className="text-2xl font-bold">Talk to an expert today!</h3>
            <p className="mt-2 text-white/85">Call or text us for quick scheduling and a clear estimate.</p>
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