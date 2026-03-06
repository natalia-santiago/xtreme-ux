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

const workPhotos = [
  {
    src: "/images/core-drilling-action.jpeg",
    alt: "Concrete core drilling in action",
  },
  {
    src: "/images/demolition.jpg",
    alt: "Concrete demolition project",
  },
  {
    src: "/images/slab-cutting.jpeg",
    alt: "Concrete slab cutting work",
  },
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We’re based in Goldsboro, NC and serve Eastern North Carolina for concrete cutting and demolition work.",
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
    q: "Do you have reviews yet?",
    a: "We’re building our online portfolio as we complete more projects — references are available upon request.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* TRUST BAR */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-4 text-sm font-medium text-black/75 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-8">
          <p>Fast scheduling</p>
          <p>Clean, precise cutting</p>
          <p>Safety-first work</p>
          <p>Serving Eastern North Carolina</p>
        </div>
      </section>

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

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex rounded-md bg-[#c1121f] px-5 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Learn more about us
              </Link>
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
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <Image
                src="/images/core-drilling-rig.png"
                alt="Professional core drilling machine"
                width={1200}
                height={900}
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <Image
                src="/images/core-drilling-action.jpeg"
                alt="Concrete core drilling in action"
                width={1200}
                height={900}
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
              Professional equipment
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
              The right equipment for clean, precise results
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-black/75">
              We use professional-grade equipment to deliver accurate core
              drilling and concrete cutting work with efficiency, safety, and
              attention to detail.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-black/75">
              The right tools help us complete each project with cleaner cuts,
              better control, and dependable results for residential,
              commercial, and industrial jobs.
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

      {/* OUR WORK */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
              Our work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
              Real project photos
            </h2>

            <p className="mt-4 text-base leading-7 text-black/70">
              A look at the type of concrete cutting and demolition work we
              handle with safety, precision, and dependable service.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workPhotos.map((photo) => (
              <div
                key={photo.src}
                className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition duration-300 hover:shadow-lg"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            ))}
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