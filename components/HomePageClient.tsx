"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import HeroSlider from "@/components/HeroSlider";

const SITE_URL = "https://xtremeconcretecutting.com";
const GBP_URL = "https://share.google/w4xRGpqyikqr5mvJ9";
const PHONE_DISPLAY = "(252) 582-6094";
const PHONE_HREF = "tel:+12525826094";
const EMAIL = "info@xtremeconcretecutting.com";

const services = [
  {
    title: "Core Drilling",
    desc: "Clean, accurate holes for plumbing, electrical, HVAC, and structural work.",
    img: "/images/core-drilling.jpeg",
    alt: "Core drilling service for plumbing, electrical, and HVAC concrete openings",
    href: "/services#core-drilling",
  },
  {
    title: "Concrete Slab Cutting",
    desc: "Precise slab cutting for floors, roads, driveways, trenching, and commercial slabs.",
    img: "/images/slab-cutting.jpeg",
    alt: "Concrete slab cutting service with professional saw equipment",
    href: "/services#slab-cutting",
  },
  {
    title: "Concrete Wall Cutting",
    desc: "Controlled wall cutting for doors, windows, utility openings, and concrete modifications.",
    img: "/images/safety.jpg",
    alt: "Concrete wall cutting team preparing for controlled cutting work",
    href: "/services#wall-cutting",
  },
  {
    title: "Reinforced Wall Cutting",
    desc: "Specialized cutting for reinforced structural concrete where precision and control matter.",
    img: "/images/reinforced-wall-cutting.png",
    alt: "Reinforced concrete wall cutting equipment for structural cutting work",
    href: "/services#reinforced-wall-cutting",
  },
  {
    title: "Building Demolition",
    desc: "Safe demolition and concrete removal for renovation, rebuild, and site preparation projects.",
    img: "/images/demolition.jpg",
    alt: "Building demolition and concrete removal project in Eastern North Carolina",
    href: "/services#building-demolition",
  },
];

const faqs = [
  {
    q: "What concrete cutting services do you offer in Goldsboro, NC?",
    a: "We provide core drilling, concrete slab cutting, concrete wall cutting, reinforced wall cutting, and demolition services in Goldsboro and across Eastern North Carolina.",
  },
  {
    q: "Do you provide demolition services for residential and commercial projects?",
    a: "Yes. We work on residential, commercial, and contractor projects depending on project scope, access, and scheduling needs.",
  },
  {
    q: "How quickly can I schedule concrete cutting work?",
    a: "Scheduling depends on the project scope, location, and current availability. Contact us with your project details and we will review timing as quickly as possible.",
  },
  {
    q: "Do you serve areas outside of Goldsboro?",
    a: "Yes. We serve Eastern North Carolina, including Goldsboro, Wayne County, Wilson, Smithfield, Selma, Kinston, and surrounding areas.",
  },
];

const trustPoints = [
  "Licensed and insured",
  "Fast quotes and responsive scheduling",
  "Serving Goldsboro and Eastern NC",
];

const reviewTrustCards = [
  {
    title: "Fast response times",
    desc: "Quick communication and responsive scheduling help keep projects moving.",
  },
  {
    title: "Professional communication",
    desc: "Clear updates, reliable coordination, and a straightforward process from start to finish.",
  },
  {
    title: "Clean, controlled work",
    desc: "Safety-focused execution with attention to precision, cleanup, and job-site control.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
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
  areaServed: [
    "Goldsboro NC",
    "Wayne County NC",
    "Wilson NC",
    "Kinston NC",
    "Smithfield NC",
    "Selma NC",
  ],
  sameAs: [GBP_URL],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What concrete cutting services do you offer in Goldsboro, NC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide core drilling, concrete slab cutting, concrete wall cutting, reinforced wall cutting, and demolition services in Goldsboro and across Eastern North Carolina.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide demolition services for residential and commercial projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work on residential, commercial, and contractor projects depending on project scope, access, and scheduling needs.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I schedule concrete cutting work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scheduling depends on the project scope, location, and current availability. Contact us with your project details and we will review timing as quickly as possible.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve areas outside of Goldsboro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve Eastern North Carolina, including Goldsboro, Wayne County, Wilson, Smithfield, Selma, Kinston, and surrounding areas.",
      },
    },
  ],
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function trackEvent(eventName: string, eventLabel: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: "Lead",
      event_label: eventLabel,
    });
  }
}

export default function HomePageClient() {
  return (
    <>
      <Script
        id="ld-local-business-home"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessSchema)}
      </Script>

      <Script
        id="ld-home-faq"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="mx-auto max-w-[1400px] px-4 pt-4 md:px-6 md:pt-6">
        <HeroSlider />
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-8 md:px-6 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-center text-sm font-semibold text-black shadow-sm"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
              About us
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
              Concrete cutting and demolition in Goldsboro, NC
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-black/75">
              Xtreme Concrete Cutting &amp; Demolition provides dependable
              concrete cutting, core drilling, slab cutting, wall cutting, and
              demolition services with a focus on accuracy, safety, and fast
              turnaround.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-black/72">
              We serve residential, commercial, and contractor projects across{" "}
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

            <ul className="mt-5 space-y-3 text-base leading-7 text-black/75">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c1121f]" />
                <span>Clean, precise work with professional equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c1121f]" />
                <span>Reliable scheduling and clear communication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c1121f]" />
                <span>Residential, commercial, and contractor projects</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-[#c1121f] px-5 py-3 font-semibold text-white transition hover:bg-[#a30f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
              >
                Request a Quote
              </Link>

              <a
                href={PHONE_HREF}
                onClick={() =>
                  trackEvent("phone_call_click", "Homepage About Phone")
                }
                className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-black/15 px-5 py-3 font-semibold text-black transition hover:border-black/30 hover:bg-black/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <Image
              src="/images/demolition.jpg"
              alt="Concrete demolition and debris removal project in Goldsboro NC"
              width={1200}
              height={900}
              className="h-[320px] w-full object-cover md:h-[420px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
                Services
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
                Our most requested concrete cutting and demolition services
              </h2>

              <p className="mt-4 max-w-[680px] text-base leading-8 text-black/70">
                Fast scheduling, clean cuts, and safety-focused work for
                residential, commercial, and contractor projects.
              </p>
            </div>

            <div>
              <Link
                href="/services"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-black/15 bg-white px-5 py-3 text-base font-semibold text-black transition hover:border-black/30 hover:bg-black/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                View all services
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const isLastOddCard =
                services.length % 2 !== 0 && index === services.length - 1;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`group overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2 ${
                    isLastOddCard
                      ? "md:col-span-2 xl:col-span-1 xl:col-start-2"
                      : ""
                  }`}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex h-full flex-col p-6 md:p-7">
                    <div className="mb-5 h-2 w-14 rounded-full bg-[#c1121f]" />

                    <h3 className="text-2xl font-bold tracking-tight text-black">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-[0.98rem] leading-8 text-black/72">
                      {service.desc}
                    </p>

                    <p className="mt-auto pt-5 text-sm font-semibold text-[#c1121f]">
                      View service
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <Image
              src="/images/core-drilling-rig.png"
              alt="Professional core drilling machine for concrete cutting work"
              width={1200}
              height={900}
              className="w-full object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col gap-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
                Professional equipment
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
                Professional equipment for clean, precise cuts
              </h2>

              <p className="mt-4 max-w-[680px] text-base leading-8 text-black/75">
                We use professional-grade equipment to deliver accurate core
                drilling and concrete cutting work with efficiency, safety, and
                attention to detail.
              </p>

              <ul className="mt-5 space-y-3 text-base leading-7 text-black/75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c1121f]" />
                  <span>Greater precision for openings, cuts, and removals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c1121f]" />
                  <span>Better control for cleaner finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c1121f]" />
                  <span>
                    Efficient execution for residential and commercial jobs
                  </span>
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-black/10 bg-[#f7f7f7] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
                  Why it matters
                </p>

                <p className="mt-3 text-base leading-8 text-black/70">
                  Professional equipment helps us deliver cleaner cuts, better
                  accuracy, and dependable results across every project.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-[#c1121f] px-5 py-3 font-semibold text-white transition hover:bg-[#a30f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
                >
                  Request a Quote
                </Link>

                <a
                  href={PHONE_HREF}
                  onClick={() =>
                    trackEvent("phone_call_click", "Homepage Equipment Phone")
                  }
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-black/15 px-5 py-3 font-semibold text-black transition hover:border-black/30 hover:bg-black/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <Image
                src="/images/core-drilling-action.jpeg"
                alt="Concrete core drilling in action on a job site"
                width={1200}
                height={900}
                className="w-full object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
                Trusted local service
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
                Trusted by local contractors and property owners
              </h2>

              <p className="mt-4 max-w-2xl text-[1.04rem] leading-8 text-black/72">
                View our Google Business Profile for business details, contact
                information, and another trusted way to verify our local
                presence.
              </p>

              <p className="mt-4 text-sm font-semibold leading-6 text-black/70">
                Licensed and insured service focused on communication,
                scheduling, and clean execution.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {reviewTrustCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
                  >
                    <h3 className="text-base font-bold text-black">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-black/68">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-[#c1121f] px-5 py-3 font-semibold text-white transition hover:bg-[#a30f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
                >
                  Request a Quote
                </Link>

                <a
                  href={GBP_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    trackEvent(
                      "google_reviews_click",
                      "Homepage GBP Section Button"
                    )
                  }
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-black/15 px-5 py-3 font-semibold text-black transition hover:border-black/30 hover:bg-black/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  View Google Business Profile
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-black">Service areas</h3>

              <p className="mt-4 text-base leading-8 text-black/70">
                Based in Goldsboro, NC and serving Eastern North Carolina,
                including{" "}
                <Link
                  href="/service-areas/wayne-county-nc"
                  className="font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  Wayne County
                </Link>
                ,{" "}
                <Link
                  href="/service-areas/wilson-nc"
                  className="font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  Wilson
                </Link>
                ,{" "}
                <Link
                  href="/service-areas/kinston-nc"
                  className="font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  Kinston
                </Link>
                ,{" "}
                <Link
                  href="/service-areas/smithfield-nc"
                  className="font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  Smithfield
                </Link>
                ,{" "}
                <Link
                  href="/service-areas/selma-nc"
                  className="font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  Selma
                </Link>
                , and nearby communities.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-black/75">
                <Link
                  href="/service-areas/goldsboro-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-3 py-2.5 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Goldsboro
                </Link>
                <Link
                  href="/service-areas/wayne-county-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-3 py-2.5 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Wayne County
                </Link>
                <Link
                  href="/service-areas/wilson-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-3 py-2.5 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Wilson
                </Link>
                <Link
                  href="/service-areas/kinston-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-3 py-2.5 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Kinston
                </Link>
                <Link
                  href="/service-areas/smithfield-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-3 py-2.5 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Smithfield
                </Link>
                <Link
                  href="/service-areas/selma-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-3 py-2.5 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Selma
                </Link>
              </div>

              <p className="mt-6 text-sm leading-6 text-black/65">
                Email:{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-semibold text-black hover:text-[#c1121f]"
                >
                  {EMAIL}
                </a>
              </p>

              <div className="mt-5">
                <Link
                  href="/service-areas"
                  className="text-sm font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  Explore all service areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
            Concrete cutting services in Eastern NC
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
            Support for residential, commercial, and contractor projects
          </h2>

          <p className="mt-4 max-w-[760px] text-base leading-8 text-black/72">
            We provide concrete cutting and demolition services across Eastern
            North Carolina. From core drilling for plumbing or electrical access
            to slab cutting, wall cutting, and demolition support, our team
            focuses on clean execution, communication, and dependable
            scheduling.
          </p>

          <p className="mt-4 max-w-[760px] text-base leading-8 text-black/72">
            Clients in{" "}
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
            , and surrounding areas rely on us for work planned around access,
            timing, and job-site needs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
        <div className="max-w-[760px]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
            Why choose us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
            Service built around clear scheduling and controlled work
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:shadow-md">
            <h3 className="text-2xl font-bold text-black">
              Fast response and scheduling
            </h3>
            <p className="mt-4 text-base leading-8 text-black/70">
              Quick communication and responsive scheduling help keep your
              project moving without delays.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:shadow-md">
            <h3 className="text-2xl font-bold text-black">
              Precise, clean cutting work
            </h3>
            <p className="mt-4 text-base leading-8 text-black/70">
              Professional equipment and controlled execution deliver accurate
              cuts and cleaner finishes.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:shadow-md">
            <h3 className="text-2xl font-bold text-black">
              Safety-focused job-site practices
            </h3>
            <p className="mt-4 text-base leading-8 text-black/70">
              We prioritize safe, controlled work areas and dependable
              coordination on every project.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
              Frequently asked questions
            </h2>

            <p className="mt-4 max-w-[760px] text-base leading-8 text-black/70">
              Common questions about concrete cutting, demolition services,
              scheduling, and service areas.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-black/10">
            {faqs.map((item, index) => (
              <details
                key={item.q}
                open={index === 0}
                className={`group bg-[#f7f7f7] px-7 py-7 ${
                  index !== faqs.length - 1 ? "border-b border-black/10" : ""
                }`}
              >
                <summary className="cursor-pointer list-none pr-8 text-xl font-bold tracking-tight text-black transition hover:text-[#c1121f]">
                  {item.q}
                </summary>

                <p className="mt-4 max-w-[900px] text-base leading-8 text-black/70">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-4 bg-[#c1121f] text-white">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Get a fast, free quote today
            </h2>

            <p className="mt-5 text-xl leading-9 text-white/90">
              Call or request a quote online and we’ll help you take the next
              step for your project.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-black px-7 py-4 text-lg font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c1121f]"
              >
                Request a Quote
              </Link>

              <a
                href={PHONE_HREF}
                onClick={() =>
                  trackEvent("phone_call_click", "Homepage CTA Phone")
                }
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-7 py-4 text-lg font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c1121f]"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}