import Link from "next/link";

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0d0d0d] text-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-14">
          <p className="text-xs tracking-widest text-white/70">ABOUT</p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Built for clean cuts,
            <span className="text-[#c1121f]"> safe work, and fast scheduling</span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm text-white/70">
            Xtreme Concrete Cutting &amp; Demolition LLC provides professional concrete cutting,
            drilling, and demolition services throughout Eastern North Carolina. We focus on safe
            methods, clean results, and clear communication from quote to completion.
          </p>

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

      {/* MAIN CONTENT */}
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-12 md:grid-cols-2">
          {/* WHAT WE DO */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">What we do</h2>
            <p className="mt-3 text-sm text-black/70">
              We specialize in precision concrete cutting and demolition work that supports remodels,
              utility installs, commercial fit-outs, and structural openings.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-black/70">
              <li>• Core drilling for plumbing, electrical, HVAC, and structural penetrations</li>
              <li>• Slab cutting and flat sawing for floors, roads, and commercial slabs</li>
              <li>• Wall cutting for doors, windows, and access openings</li>
              <li>• Reinforced concrete cutting when structural steel is present</li>
              <li>• Controlled demolition and concrete removal</li>
            </ul>

            <div className="mt-6">
              <Link
                href="/services"
                className="inline-block rounded-md border border-black/15 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/[0.02]"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* WHY HIRE US */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Why customers hire us</h2>
            <p className="mt-3 text-sm text-black/70">
              Contractors and homeowners choose us for fast response, clean work, and safety-first
              practices.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-black/70">
              <li>• Safety-first jobsite practices</li>
              <li>• Clean, accurate cuts and tidy work areas</li>
              <li>• Fast scheduling and clear expectations</li>
              <li>• Professional communication from quote to completion</li>
              <li>• Respect for your property and jobsite</li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8f0e16]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA (ANCHOR TARGET) */}
      <section id="service-area" className="bg-black/[0.03]">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-12">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Service area</h2>
            <p className="mt-3 max-w-3xl text-sm text-black/70">
              Based in Goldsboro, NC — serving surrounding areas across Eastern North Carolina. If
              you’re not sure whether we cover your location, send a request and include your city
              and job address.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Goldsboro",
                "Wayne County",
                "Wilson",
                "Smithfield",
                "Selma",
                "Kinston",
                "Surrounding areas across Eastern NC",
              ].map((area) => (
                <div
                  key={area}
                  className="rounded-xl border border-black/10 bg-black/[0.02] p-4 text-sm font-semibold"
                >
                  {area}
                </div>
              ))}
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
                className="rounded-md border border-black/15 bg-white px-6 py-3 text-center text-sm font-semibold hover:bg-black/[0.02]"
              >
                Call (252) 582-6094
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-12">
          <h2 className="text-2xl font-bold">What to expect</h2>
          <p className="mt-2 text-sm text-black/70">
            A simple, straightforward process — and clean results.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["Step 1", "Call or message", "Tell us the scope, city, and timeline."],
              ["Step 2", "Confirm details", "We verify access, measurements, and constraints."],
              ["Step 3", "Get an estimate", "Clear scope and pricing."],
              ["Step 4", "Work & cleanup", "We complete the job and keep the site clean."],
            ].map(([step, title, desc]) => (
              <div key={title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold tracking-widest text-[#c1121f]">{step}</p>
                <p className="mt-2 font-semibold">{title}</p>
                <p className="mt-2 text-sm text-black/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-[#c1121f] text-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold">Talk to an expert today!</h3>
            <p className="mt-2 text-white/85">
              Call us for quick scheduling and a clear estimate.
            </p>
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