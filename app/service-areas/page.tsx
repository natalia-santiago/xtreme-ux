import Link from "next/link";

const areas = [
  "Goldsboro",
  "Wayne County",
  "Wilson",
  "Smithfield",
  "Selma",
  "Kinston",
  "Surrounding areas across Eastern NC",
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0d0d0d] text-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-14">
          <p className="text-xs tracking-widest text-white/70">SERVICE AREAS</p>

          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Serving Goldsboro
            <span className="text-[#c1121f]"> and Eastern North Carolina</span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm text-white/70">
            Based in Goldsboro, NC — we travel to surrounding areas across Eastern NC. If you’re not
            sure whether we cover your location, request a quote and include your job city/address.
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

      {/* AREAS LIST */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-12">
          <h2 className="text-2xl font-bold">Areas we serve</h2>
          <p className="mt-2 max-w-3xl text-sm text-black/70">
            The list below includes common areas we serve — we may still be able to travel beyond
            these. Contact us with your location and job details.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-xl border border-black/10 bg-black/[0.02] p-5 text-sm font-semibold"
              >
                {area}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Not sure if we cover your area?</h3>
            <p className="mt-2 text-sm text-black/70">
              Send a quote request with your job address/city and we’ll confirm availability.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-[#c1121f] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#8f0e16]"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-black/15 bg-white px-6 py-3 text-center text-sm font-semibold hover:bg-black/[0.02]"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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