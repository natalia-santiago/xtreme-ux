import type { Metadata } from "next";
import Link from "next/link";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_URL,
  serviceAreas,
  servicesList,
} from "./data";

const pageUrl = `${SITE_URL}/service-areas`;

export const metadata: Metadata = {
  title: "Service Areas | Goldsboro & Eastern North Carolina Concrete Cutting",
  description:
    "Xtreme Concrete Cutting & Demolition serves Goldsboro, Wayne County, Wilson, Smithfield, Selma, Kinston, and surrounding Eastern North Carolina areas with concrete cutting and demolition services.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Service Areas | Goldsboro & Eastern North Carolina Concrete Cutting",
    description:
      "Serving Goldsboro and surrounding Eastern North Carolina areas with concrete cutting, wall cutting, slab cutting, core drilling, and demolition services.",
    url: pageUrl,
    siteName: "Xtreme Concrete Cutting & Demolition",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Service areas for concrete cutting and demolition in Eastern North Carolina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Service Areas | Goldsboro & Eastern North Carolina Concrete Cutting",
    description:
      "Concrete cutting and demolition services in Goldsboro, Wayne County, Wilson, Smithfield, Selma, Kinston, and surrounding Eastern NC areas.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function ServiceAreasPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Concrete Cutting and Demolition Service Areas",
    url: pageUrl,
    serviceType: servicesList,
    provider: {
      "@type": "LocalBusiness",
      name: "Xtreme Concrete Cutting & Demolition LLC",
      url: SITE_URL,
      telephone: "+1-252-582-6094",
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Goldsboro",
        addressRegion: "NC",
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "City", name: "Goldsboro, NC" },
      { "@type": "AdministrativeArea", name: "Wayne County, NC" },
      { "@type": "City", name: "Wilson, NC" },
      { "@type": "City", name: "Smithfield, NC" },
      { "@type": "City", name: "Selma, NC" },
      { "@type": "City", name: "Kinston, NC" },
      { "@type": "AdministrativeArea", name: "Eastern North Carolina" },
    ],
    description:
      "Concrete cutting and demolition services across Goldsboro and Eastern North Carolina, including core drilling, slab cutting, wall cutting, reinforced wall cutting, and building demolition.",
  };

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
        name: "Service Areas",
        item: pageUrl,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: serviceAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: area.name,
      url: `${SITE_URL}/service-areas/${area.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What areas do you serve for concrete cutting and demolition?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We commonly serve Goldsboro, Wayne County, Wilson, Smithfield, Selma, Kinston, and surrounding areas across Eastern North Carolina.",
        },
      },
      {
        "@type": "Question",
        name: "Can you travel outside the listed service areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We may still be able to travel outside our primary service areas depending on the job scope, schedule, and distance. Contact us with your location and project details.",
        },
      },
      {
        "@type": "Question",
        name: "How do I confirm whether my location is covered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Send a quote request with your city, address, or job-site details. We will review the location and confirm availability.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
              <li className="text-white">Service Areas</li>
            </ol>
          </nav>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            Service Areas
          </p>

          <div className="mt-5 max-w-[920px]">
            <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Serving Goldsboro and{" "}
              <span className="text-[#c1121f]">Eastern North Carolina</span>
            </h1>

            <p className="mt-5 max-w-[720px] text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              Based in Goldsboro, NC, we travel throughout Eastern North
              Carolina for concrete cutting and demolition work. If you are not
              sure whether your city or job site is within our service area,
              send us your location and project details and we will confirm
              availability.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Serving Eastern NC
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Coverage for residential, commercial, and contractor projects.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Clear scheduling support
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Send your location and scope so we can review the project
                accurately.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Fast quote review
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                We confirm service availability based on distance, access, and
                timing.
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
          <div className="max-w-[760px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
              Coverage
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
              Areas we serve
            </h2>

            <p className="mt-4 max-w-[680px] text-base leading-8 text-black/70">
              These are some of the most common locations we serve. If your
              project is outside these areas, we may still be able to help
              depending on distance and scope.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                aria-label={`View ${area.shortName} service area page`}
                className="group rounded-2xl border border-black/10 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:-translate-y-[1px] hover:border-[#c1121f]/30 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-[#111111]">
                    {area.shortName}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c1121f] transition group-hover:translate-x-[2px]">
                    View area →
                  </span>
                </div>
              </Link>
            ))}

            <div className="rounded-2xl border border-dashed border-[#c1121f]/30 bg-white p-5 sm:col-span-2 lg:col-span-3">
              <p className="text-base font-semibold text-[#111111]">
                Surrounding areas across Eastern NC
              </p>
              <p className="mt-3 text-sm leading-6 text-black/65">
                We regularly travel beyond our primary service cities. Send us
                your location and project details to confirm availability.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-black/10 bg-white p-8 shadow-[0_6px_30px_rgba(0,0,0,0.06)]">
            <div className="max-w-[760px]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
                Request a quote
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                Not sure if we cover your area?
              </h3>

              <p className="mt-4 text-base leading-8 text-black/70">
                Request a quote and include your city, address, or job-site
                details. We will review the location and let you know if we can
                take on the project.
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
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
                Local concrete cutting
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
                Concrete cutting and demolition across Eastern NC
              </h2>

              <p className="mt-4 max-w-[720px] text-base leading-8 text-black/70">
                Xtreme Concrete Cutting &amp; Demolition provides concrete
                cutting and demolition services for residential, commercial, and
                contractor projects across Eastern North Carolina. Whether you
                need core drilling, slab cutting, wall cutting, reinforced wall
                cutting, or building demolition, our team is ready to review
                your project location and scheduling needs.
              </p>

              <p className="mt-4 max-w-[720px] text-base leading-8 text-black/70">
                We commonly work in{" "}
                <Link
                  href="/service-areas/goldsboro-nc"
                  className="font-semibold text-[#c1121f] underline decoration-transparent underline-offset-4 transition hover:decoration-[#c1121f]"
                >
                  Goldsboro
                </Link>
                ,{" "}
                <Link
                  href="/service-areas/wayne-county-nc"
                  className="font-semibold text-[#c1121f] underline decoration-transparent underline-offset-4 transition hover:decoration-[#c1121f]"
                >
                  Wayne County
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
                and{" "}
                <Link
                  href="/service-areas/kinston-nc"
                  className="font-semibold text-[#c1121f] underline decoration-transparent underline-offset-4 transition hover:decoration-[#c1121f]"
                >
                  Kinston
                </Link>
                .
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f7f7f7] p-8">
              <h3 className="text-xl font-bold tracking-tight text-[#111111]">
                Common services in our coverage area
              </h3>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-black/70">
                <li>
                  <Link
                    href="/services#core-drilling"
                    className="transition hover:text-[#c1121f]"
                  >
                    Core drilling for plumbing, electrical, and HVAC access
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#slab-cutting"
                    className="transition hover:text-[#c1121f]"
                  >
                    Concrete slab cutting for floors, driveways, and trenching
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#wall-cutting"
                    className="transition hover:text-[#c1121f]"
                  >
                    Concrete wall cutting for door and window openings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#reinforced-wall-cutting"
                    className="transition hover:text-[#c1121f]"
                  >
                    Reinforced wall cutting for structural concrete work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#building-demolition"
                    className="transition hover:text-[#c1121f]"
                  >
                    Building demolition for residential and commercial projects
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <Link
                  href="/services"
                  className="text-sm font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  View all services →
                </Link>
              </div>
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
              Service area FAQs
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-7">
              <h3 className="text-lg font-semibold text-[#111111]">
                What areas do you serve?
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                We commonly serve Goldsboro, Wayne County, Wilson, Smithfield,
                Selma, Kinston, and surrounding areas across Eastern North
                Carolina.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-7">
              <h3 className="text-lg font-semibold text-[#111111]">
                Can you travel outside the listed areas?
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                Yes. We may still be able to travel beyond our primary service
                area depending on the distance, schedule, and scope of the job.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-7">
              <h3 className="text-lg font-semibold text-[#111111]">
                How do I confirm if my location is covered?
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                Send us your city, address, or job-site details through our
                contact page. We will review the location and confirm whether we
                can take on the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
                Explore locations
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
                Browse individual area pages
              </h2>

              <p className="mt-4 max-w-[680px] text-base leading-8 text-black/70">
                Visit an area page for more details about concrete cutting and
                demolition services in each location we commonly serve.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-black/15 bg-white px-6 text-sm font-semibold text-[#111111] transition hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                key={`${area.slug}-footer`}
                href={`/service-areas/${area.slug}`}
                className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-6 transition hover:border-[#c1121f]/30 hover:bg-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
              >
                <p className="text-base font-semibold text-[#111111]">
                  {area.name}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/65">
                  {area.relatedParagraph}
                </p>
                <p className="mt-4 text-sm font-semibold text-[#c1121f]">
                  View area page →
                </p>
              </Link>
            ))}
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
              Talk to an expert today
            </h2>

            <p className="mt-3 text-base leading-8 text-white/85">
              Need concrete cutting or demolition work in Goldsboro or
              surrounding Eastern North Carolina areas? Contact us for clear
              scheduling and a straightforward estimate.
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