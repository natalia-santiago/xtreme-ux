import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0d0d0d] text-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-14">
          <p className="text-xs tracking-widest text-white/70">PROJECTS</p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Project portfolio
            <span className="text-[#c1121f]"> coming soon</span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm text-white/70">
            We’re currently building our online portfolio. As we complete projects, we’ll post
            before/after photos, scope details, timelines, and materials used.
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
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-12">
          {/* Portfolio coming soon */}
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Portfolio coming soon</h2>
            <p className="mt-2 max-w-3xl text-sm text-black/70">
              As jobs are completed, we’ll add before/after photos, a brief scope summary, and
              service type. Until then, you can review our services and process below.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Concrete Cutting", "Slab + wall openings, trench cuts, and clean edges."],
                ["Core Drilling", "Utility penetrations for plumbing, HVAC, and electrical."],
                ["Demolition", "Controlled removal and tidy cleanup."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl bg-black/[0.03] p-5">
                  <div className="font-semibold">{title}</div>
                  <p className="mt-2 text-sm text-black/70">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-md border border-black/15 bg-white px-6 py-3 text-sm font-semibold hover:bg-black/[0.02]"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="rounded-md bg-[#c1121f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8f0e16]"
              >
                Request a Quote
              </Link>
            </div>
          </section>

          {/* Process */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold">Our process</h2>
            <p className="mt-2 text-sm text-black/70">
              A straightforward approach — clear communication and clean results.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["1) Quick call & details", "We confirm scope, measurements, access, and timeline."],
                ["2) Written estimate", "Clear pricing and what’s included."],
                ["3) Scheduling", "We coordinate a start date and set expectations."],
                ["4) Perform the work", "Controlled cutting methods and jobsite awareness."],
                ["5) Cleanup", "We keep the area tidy and remove debris as needed."],
                ["6) Follow-up", "We answer questions and confirm you’re satisfied."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <div className="h-1 w-10 rounded bg-[#c1121f]" />
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-black/70">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 rounded-2xl bg-black/[0.03] p-6">
            <h2 className="text-xl font-semibold">Ready to get a quote?</h2>
            <p className="mt-2 text-sm text-black/70">
              Tell us what you need and we’ll get back to you quickly.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
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
          </section>
        </div>
      </section>

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