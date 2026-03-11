import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

const GBP_URL = "https://share.google/w4xRGpqyikqr5mvJ9";

const services = [
  {
    title: "Core Drilling",
    desc: "Precision drilling for plumbing, electrical, HVAC, and structural penetrations.",
    img: "/images/core-drilling.jpeg",
  },
  {
    title: "Concrete Slab Cutting",
    desc: "Flat sawing for floors, roads, driveways, and commercial slabs.",
    img: "/images/slab-cutting.jpeg",
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

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We’re based in Goldsboro, NC and serve Eastern North Carolina, including Raleigh, Wilson, Kinston, Smithfield, Selma, and surrounding areas.",
  },
  {
    q: "What types of jobs do you take on?",
    a: "We handle residential, commercial, and industrial concrete cutting and demolition projects.",
  },
  {
    q: "Do you keep the job site clean?",
    a: "We prioritize safety and keep the work area as clean and controlled as possible throughout the job.",
  },
  {
    q: "Where can I find your business on Google?",
    a: "You can view our Google Business Profile for reviews, company details, and contact information directly from our website.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* ABOUT */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
              About us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
              Concrete cutting and demolition done right
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-black/75">
              Xtreme Concrete Cutting &amp; Demolition provides dependable
              concrete cutting, core drilling, slab cutting, wall cutting, and
              demolition services for projects that require accuracy, safety,
              and fast turnaround.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-black/75">
              We focus on clear communication, clean work, and reliable service
              from start to finish.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex rounded-md bg-[#c1121f] px-5 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Learn more about us
              </Link>

              <a
                href={GBP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md border border-black/15 px-5 py-3 font-semibold text-black transition hover:border-black/30 hover:bg-black/[0.02]"
              >
                View Google Reviews
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <Image
              src="/images/demolition.jpg"
              alt="Concrete demolition project"
              width={1200}
              height={900}
              className="h-[320px] w-full object-cover md:h-[420px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
              Services we offer
            </h2>

            <p className="mt-4 text-base leading-7 text-black/70">
              Fast scheduling, clean cuts, and safety-first work practices.
            </p>

            <div className="mt-6">
              <Link
                href="/services"
                className="inline-flex w-full rounded-xl border border-black/15 bg-white px-5 py-4 text-lg font-semibold text-black transition hover:border-black/30 hover:bg-black/[0.02] sm:w-auto"
              >
                View all services
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6 md:p-7">
                  <div className="mb-5 h-2 w-14 rounded-full bg-[#c1121f]" />

                  <h3 className="text-2xl font-bold tracking-tight text-black">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-black/70">
                    {service.desc}
                  </p>

                  <div className="mt-6">
                    <Link
                      href="/services"
                      className="inline-flex rounded-md border border-black/15 px-5 py-3 font-semibold text-black transition hover:border-black/30 hover:bg-black/[0.02]"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <Image
              src="/images/core-drilling-rig.png"
              alt="Professional core drilling machine"
              width={1200}
              height={900}
              className="w-full object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
                Professional equipment
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
                The right equipment for clean, precise results
              </h2>

              <p className="mt-4 text-base leading-7 text-black/75">
                We use professional-grade equipment to deliver accurate core drilling
                and concrete cutting work with efficiency, safety, and attention to
                detail.
              </p>

              <p className="mt-4 text-base leading-7 text-black/75">
                The right tools help us complete each project with cleaner cuts,
                better control, and dependable results for residential, commercial,
                and industrial jobs.
              </p>

              <div className="mt-6 rounded-2xl border border-black/10 bg-[#f7f7f7] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
                  Why it matters
                </p>

                <p className="mt-3 text-base leading-7 text-black/70">
                  Professional equipment helps us work with greater precision,
                  cleaner finishes, and better efficiency on a wide range of
                  residential and commercial projects.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <Image
                src="/images/core-drilling-action.jpeg"
                alt="Concrete core drilling in action"
                width={1200}
                height={900}
                className="w-full object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE BUSINESS / TRUST */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
                Trusted local service
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
                Find us on Google
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-black/70">
                View our Google Business Profile for business details, reviews,
                and quick contact options. We serve Goldsboro and surrounding
                areas throughout Eastern North Carolina.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={GBP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-md bg-[#c1121f] px-5 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  View Google Business Profile
                </a>

                <Link
                  href="/contact"
                  className="inline-flex rounded-md border border-black/15 px-5 py-3 font-semibold text-black transition hover:border-black/30 hover:bg-black/[0.02]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-black">Service area</h3>

              <p className="mt-4 text-base leading-7 text-black/70">
                Based in Goldsboro, NC and serving Eastern North Carolina,
                including Raleigh, Wilson, Kinston, Smithfield, Selma, and
                nearby communities.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-black/75">
                <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Goldsboro</div>
                <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Raleigh</div>
                <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Wilson</div>
                <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Kinston</div>
                <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Smithfield</div>
                <div className="rounded-2xl bg-[#f7f7f7] px-4 py-3">Selma</div>
              </div>

              <p className="mt-6 text-sm leading-6 text-black/65">
                Email:{" "}
                <a
                  href="mailto:info@xtremeconcretecutting.com"
                  className="font-semibold text-black hover:text-[#c1121f]"
                >
                  info@xtremeconcretecutting.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:shadow-md">
            <h3 className="text-2xl font-bold text-black">Fast response</h3>
            <p className="mt-3 text-base leading-7 text-black/70">
              We work to respond quickly and help keep your project moving.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:shadow-md">
            <h3 className="text-2xl font-bold text-black">Clean cuts</h3>
            <p className="mt-3 text-base leading-7 text-black/70">
              Our work is focused on precision, efficiency, and dependable
              results.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:shadow-md">
            <h3 className="text-2xl font-bold text-black">Safety-first work</h3>
            <p className="mt-3 text-base leading-7 text-black/70">
              Safety and job-site awareness are a priority on every project.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
              Frequently asked questions
            </h2>

            <p className="mt-4 text-base leading-7 text-black/70">
              Common questions about our services, scheduling, and service area.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-black/10 bg-[#f7f7f7] p-7 shadow-sm"
              >
                <h3 className="text-2xl font-bold tracking-tight text-black">
                  {item.q}
                </h3>

                <p className="mt-4 text-base leading-8 text-black/70">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c1121f] text-white">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Talk to an expert today!
            </h2>

            <p className="mt-5 text-xl leading-9 text-white/90">
              Call or text us for quick scheduling and a clear estimate.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-black px-7 py-4 text-lg font-semibold text-white transition hover:opacity-90"
              >
                Contact Us
              </Link>

              <a
                href="tel:+12525826094"
                className="inline-flex rounded-xl border border-white/40 px-7 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Or call: (252) 582-6094
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}