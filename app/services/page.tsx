import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://xtremeconcretecutting.com";
const PHONE_DISPLAY = "(252) 582-6094";
const PHONE_HREF = "tel:+12525826094";

const services = [
  {
    id: "core-drilling",
    title: "Core Drilling",
    desc: "Clean, accurate holes for plumbing, electrical, HVAC, and structural work.",
    detail:
      "Core drilling is used when a project needs precise round openings for utilities, mechanical systems, or structural access. We review the scope, location, and access conditions so the work can be planned for accuracy and controlled execution.",
    bullets: [
      "Professional coring for concrete access openings",
      "Accurate drilling for plumbing, electrical, and HVAC systems",
      "Controlled execution with clean, dependable results",
    ],
  },
  {
    id: "slab-cutting",
    title: "Concrete Slab Cutting",
    desc: "Precise slab cutting for floors, roads, driveways, trenching, and commercial slabs.",
    detail:
      "Concrete slab cutting is a practical solution for removals, trench work, access modifications, and project changes that need clean cut lines and dependable coordination. We support residential, commercial, and contractor projects throughout Eastern North Carolina.",
    bullets: [
      "Controlled slab cuts for removal and access",
      "Suitable for residential, commercial, and contractor projects",
      "Reliable scheduling and safety-focused job-site practices",
    ],
  },
  {
    id: "wall-cutting",
    title: "Concrete Wall Cutting",
    desc: "Controlled wall cutting for doors, windows, utility openings, and concrete modifications.",
    detail:
      "Wall cutting is commonly used for new openings, utility access, structural adjustments, and renovation work that demands precision. We approach each project with careful planning and a focus on clean, controlled results.",
    bullets: [
      "Clean openings for doors, windows, and utility access",
      "Accurate cutting for renovation and structural modifications",
      "Dependable work for residential and commercial projects",
    ],
  },
  {
    id: "reinforced-wall-cutting",
    title: "Reinforced Wall Cutting",
    desc: "Specialized cutting for reinforced structural concrete where precision and control matter.",
    detail:
      "Reinforced wall cutting is often required on more demanding structural concrete projects where job-site conditions, access, and planning matter. We use professional equipment and a controlled process to support safe, precise execution.",
    bullets: [
      "Specialized service for reinforced concrete structures",
      "Precision-focused work in demanding conditions",
      "Professional equipment for controlled, accurate cutting",
    ],
  },
  {
    id: "building-demolition",
    title: "Building Demolition",
    desc: "Safe demolition and concrete removal for renovation, rebuild, and site preparation projects.",
    detail:
      "Demolition support is often needed for renovation, rebuild, removal, and site preparation work that calls for practical coordination and dependable scheduling. We review access, scope, and project goals before confirming the plan.",
    bullets: [
      "Demolition support for residential and commercial work",
      "Controlled removal planning based on scope and access",
      "Dependable project support for rebuild and site preparation",
    ],
  },
];

export const metadata: Metadata = {
  title:
    "Concrete Cutting Services in Goldsboro, NC | Core Drilling, Slab Cutting & Demolition",
  description:
    "Explore core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition services in Goldsboro and Eastern North Carolina for residential, commercial, and contractor projects.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title:
      "Concrete Cutting Services in Goldsboro, NC | Core Drilling, Slab Cutting & Demolition",
    description:
      "Explore core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition services in Goldsboro and Eastern North Carolina for residential, commercial, and contractor projects.",
    url: `${SITE_URL}/services`,
    siteName: "Xtreme Concrete Cutting & Demolition",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Concrete cutting services in Goldsboro NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Concrete Cutting Services in Goldsboro, NC | Core Drilling, Slab Cutting & Demolition",
    description:
      "Explore core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition services in Goldsboro and Eastern North Carolina for residential, commercial, and contractor projects.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${SITE_URL}/services#${service.id}`,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Xtreme Concrete Cutting & Demolition",
    url: SITE_URL,
    telephone: "+1-252-582-6094",
    areaServed: [
      "Goldsboro, NC",
      "Wayne County, NC",
      "Wilson, NC",
      "Smithfield, NC",
      "Selma, NC",
      "Kinston, NC",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Concrete Cutting Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc,
          url: `${SITE_URL}/services#${service.id}`,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What concrete cutting services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer core drilling, slab cutting, wall cutting, reinforced wall cutting, and building demolition services in Goldsboro and Eastern North Carolina.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work on residential and commercial jobs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We work on residential, commercial, and contractor projects depending on scope, access, and scheduling.",
        },
      },
      {
        "@type": "Question",
        name: "How do I request a quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request a quote by contacting us with your project details, location, and timeline. We will review the scope and confirm availability.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#0d0d0d] text-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <nav
            aria-label="Breadcrumb"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">Services</li>
            </ol>
          </nav>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            Services
          </p>

          <div className="mt-5 max-w-[980px]">
            <h1 className="text-4xl font-extrabold leading-[0.96] tracking-tight sm:text-5xl lg:text-6xl">
              Concrete Cutting Services in{" "}
              <span className="text-[#c1121f]">Goldsboro, NC</span>
            </h1>

            <p className="mt-5 max-w-[760px] text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              We provide core drilling, slab cutting, wall cutting, reinforced
              wall cutting, and demolition services for residential,
              commercial, and contractor projects across Goldsboro and Eastern
              North Carolina.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Residential and commercial work
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Service for homeowners, businesses, and contractor-led jobs.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Clean, controlled execution
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Precision-focused work with dependable scheduling and clear
                communication.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Eastern North Carolina coverage
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Serving Goldsboro and nearby service areas across the region.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-[#c1121f] px-6 text-sm font-semibold text-white transition hover:bg-[#a30f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
            >
              Request a Quote
            </Link>

            <a
              href={PHONE_HREF}
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:py-20 lg:px-8">
          <div className="max-w-[820px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
              What we do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
              Concrete cutting and demolition services built around precision
            </h2>

            <p className="mt-4 max-w-[680px] text-base leading-8 text-black/72">
              Our services are designed for projects that need clean cuts,
              dependable scheduling, safety-focused job-site practices, and
              clear communication from start to finish.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {services.map((service) => (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-3xl border border-black/10 bg-white p-8 shadow-sm sm:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                      {service.title}
                    </h2>

                    <p className="mt-4 max-w-[720px] text-base leading-8 text-black/72">
                      {service.desc}
                    </p>

                    <p className="mt-4 max-w-[720px] text-base leading-8 text-black/72">
                      {service.detail}
                    </p>

                    <p className="mt-4 max-w-[720px] text-base leading-8 text-black/72">
                      Available for projects in{" "}
                      <Link
                        href="/service-areas/goldsboro-nc"
                        className="font-semibold text-[#c1121f] underline decoration-transparent underline-offset-4 transition hover:decoration-[#c1121f]"
                      >
                        Goldsboro
                      </Link>
                      ,{" "}
                      <Link
                        href="/service-areas/wilson-nc"
                        className="font-semibold text-[#c1121f] underline decoration-transparent underline-offset-4 transition hover:decoration-[#c1121f]"
                      >
                        Wilson
                      </Link>
                      ,{" "}
                      <Link
                        href="/service-areas/smithfield-nc"
                        className="font-semibold text-[#c1121f] underline decoration-transparent underline-offset-4 transition hover:decoration-[#c1121f]"
                      >
                        Smithfield
                      </Link>
                      ,{" "}
                      <Link
                        href="/service-areas/selma-nc"
                        className="font-semibold text-[#c1121f] underline decoration-transparent underline-offset-4 transition hover:decoration-[#c1121f]"
                      >
                        Selma
                      </Link>
                      ,{" "}
                      <Link
                        href="/service-areas/kinston-nc"
                        className="font-semibold text-[#c1121f] underline decoration-transparent underline-offset-4 transition hover:decoration-[#c1121f]"
                      >
                        Kinston
                      </Link>
                      , and nearby Eastern North Carolina areas.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-6 sm:p-7">
                    <h3 className="text-base font-bold text-[#111111]">
                      What this service includes
                    </h3>

                    <ul className="mt-4 space-y-3 text-sm leading-6 text-black/72">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-[0.45rem] h-2 w-2 rounded-full bg-[#c1121f]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-col gap-3">
                      <Link
                        href="/contact"
                        className="text-sm font-semibold text-[#c1121f] transition hover:opacity-80"
                      >
                        Request a quote for this service →
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:py-20 lg:px-8">
          <div className="rounded-3xl border border-black/10 bg-[#f7f7f7] p-8 shadow-[0_6px_30px_rgba(0,0,0,0.04)]">
            <div className="max-w-[760px]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
                Request a quote
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                Need concrete cutting or demolition services?
              </h2>

              <p className="mt-4 max-w-[680px] text-base leading-8 text-black/70">
                Tell us about your project location, scope, access, and timing.
                We will review the details and confirm availability for the
                work.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-[#c1121f] px-6 text-sm font-semibold text-white transition hover:bg-[#a30f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
              >
                Request a Quote
              </Link>

              <a
                href={PHONE_HREF}
                className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-black/15 bg-white px-6 text-sm font-semibold text-[#111111] transition hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:py-20 lg:px-8">
          <div className="max-w-[760px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
              Why choose us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
              Service built around clear scheduling and controlled work
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-black/10 bg-[#f7f7f7] p-8 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-[#111111]">
                Fast response and scheduling
              </h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                Quick communication and responsive scheduling help keep your
                project moving.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f7f7f7] p-8 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-[#111111]">
                Precise, clean cutting work
              </h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                Professional equipment and careful execution support cleaner
                finishes and more controlled results.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f7f7f7] p-8 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-[#111111]">
                Safety-focused job-site practices
              </h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                We prioritize controlled work areas, dependable coordination,
                and practical support for residential and commercial jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:py-20 lg:px-8">
          <div className="max-w-[760px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
              Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-7">
              <h3 className="text-lg font-semibold text-[#111111]">
                What concrete cutting services do you offer?
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                We offer core drilling, slab cutting, wall cutting, reinforced
                wall cutting, and building demolition services in Goldsboro and
                Eastern North Carolina.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-7">
              <h3 className="text-lg font-semibold text-[#111111]">
                Do you work on residential and commercial jobs?
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                Yes. We work on residential, commercial, and contractor
                projects depending on scope, access, and scheduling.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-7">
              <h3 className="text-lg font-semibold text-[#111111]">
                How do I request a quote?
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                Contact us with your project details, location, and timeline.
                We will review the scope and confirm availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#c1121f] text-white">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-6 py-12 sm:py-14 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-[720px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Need concrete cutting or demolition services?
            </h2>

            <p className="mt-3 text-base leading-8 text-white/85">
              Contact us for clear scheduling, dependable service, and a
              straightforward estimate for your project.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-black px-6 text-sm font-semibold text-white transition hover:bg-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c1121f]"
            >
              Request a Quote
            </Link>

            <a
              href={PHONE_HREF}
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-white opacity-90 transition hover:bg-white/10 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c1121f]"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}