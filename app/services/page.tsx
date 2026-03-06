import Link from "next/link";

const services = [
  {
    id: "core-drilling",
    title: "Core Drilling",
    desc: "Precision drilling for plumbing, electrical, HVAC, and structural penetrations.",
  },
  {
    id: "slab-cutting",
    title: "Concrete Slab Cutting",
    desc: "Flat sawing for floors, roads, driveways, and commercial slabs.",
  },
  {
    id: "wall-cutting",
    title: "Concrete Wall Cutting",
    desc: "Clean openings for doors, windows, and utilities in concrete walls.",
  },
  {
    id: "reinforced-cutting",
    title: "Reinforced Wall Cutting",
    desc: "Specialized cutting for heavily reinforced structural concrete.",
  },
  {
    id: "demolition",
    title: "Building Demolition",
    desc: "Safe demolition and concrete removal for renovation and rebuild projects.",
  },
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0d0d0d] text-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-14">
          <p className="text-xs tracking-widest text-white/70">SERVICES</p>

          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Concrete cutting and demolition
            <span className="text-[#c1121f]"> services</span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm text-white/70">
            We provide professional concrete cutting, drilling, and demolition services
            throughout Eastern North Carolina.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-12">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                id={s.id}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className="h-1 w-10 rounded bg-[#c1121f]" />

                <h2 className="mt-4 text-lg font-semibold">{s.title}</h2>

                <p className="mt-2 text-sm text-black/70">{s.desc}</p>

                <div className="mt-5 flex gap-3">
                  <Link
                    href="/contact"
                    className="rounded-md bg-[#c1121f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#8f0e16]"
                  >
                    Get a Quote
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-md border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-black/[0.02]"
                  >
                    Ask a Question
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-black/[0.03]">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-12">

          <h2 className="text-2xl font-bold">Our process</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["Step 1", "Call or request a quote"],
              ["Step 2", "We review the scope"],
              ["Step 3", "Schedule the work"],
              ["Step 4", "Complete the job safely"],
            ].map(([step, desc]) => (
              <div
                key={step}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-bold tracking-widest text-[#c1121f]">
                  {step}
                </p>

                <p className="mt-2 text-sm text-black/70">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c1121f] text-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">

          <div>
            <h3 className="text-2xl font-bold">
              Need concrete cutting or demolition?
            </h3>

            <p className="mt-2 text-white/85">
              Call now or request a quote — we’ll respond quickly.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold hover:bg-[#0d0d0d]"
            >
              Request a Quote
            </Link>

            <a
              href="tel:+12525826094"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold"
            >
              Call (252) 582-6094
            </a>
          </div>

        </div>
      </section>
    </>
  );
}