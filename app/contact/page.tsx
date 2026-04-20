import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import ContactForm from "@/components/ContactForm";

const SITE_URL = "https://xtremeconcretecutting.com";
const PAGE_URL = `${SITE_URL}/contact`;
const GBP_URL = "https://share.google/w4xRGpqyikqr5mvJ9";
const PHONE_DISPLAY = "(252) 582-6094";
const PHONE_HREF = "tel:+12525826094";
const EMAIL = "info@xtremeconcretecutting.com";

export const metadata: Metadata = {
  title: "Contact | Request a Concrete Cutting Quote in Goldsboro, NC",
  description:
    "Request a quote for concrete cutting, core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition services in Goldsboro and Eastern North Carolina.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Contact | Request a Concrete Cutting Quote in Goldsboro, NC",
    description:
      "Contact Xtreme Concrete Cutting & Demolition for quotes, scheduling, and project details in Goldsboro and Eastern North Carolina.",
    url: PAGE_URL,
    siteName: "Xtreme Concrete Cutting & Demolition",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Xtreme Concrete Cutting & Demolition in Goldsboro NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Request a Concrete Cutting Quote in Goldsboro, NC",
    description:
      "Contact Xtreme Concrete Cutting & Demolition for quotes, scheduling, and project details in Goldsboro and Eastern North Carolina.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: PAGE_URL,
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Xtreme Concrete Cutting & Demolition",
    url: PAGE_URL,
    description:
      "Contact page for requesting quotes and project information for concrete cutting and demolition services in Goldsboro and Eastern North Carolina.",
    mainEntity: {
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
        "Goldsboro, NC",
        "Wayne County, NC",
        "Wilson, NC",
        "Smithfield, NC",
        "Selma, NC",
        "Kinston, NC",
      ],
      sameAs: [GBP_URL],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I request a quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request a quote by calling, emailing, or sending your project details through the contact form. Include the job-site location, scope, and timeline so we can review the work and confirm availability.",
        },
      },
      {
        "@type": "Question",
        name: "What details should I include with my request?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Helpful details include the service you need, project location, dimensions, thickness, site access information, and expected schedule. The more detail you provide, the easier it is to review the job accurately.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Goldsboro and surrounding Eastern North Carolina areas, including Wayne County, Wilson, Smithfield, Selma, and Kinston.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-contact-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <Script
        id="ld-contact-page"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(contactPageSchema)}
      </Script>

      <Script
        id="ld-contact-faq"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="bg-[#0d0d0d] text-white">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
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
              <li className="text-white">Contact</li>
            </ol>
          </nav>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            Contact
          </p>

          <div className="mt-5 max-w-[920px]">
            <h1 className="text-4xl font-extrabold leading-[0.96] tracking-tight sm:text-5xl lg:text-6xl">
              Request a quote for{" "}
              <span className="text-[#c1121f]">
                concrete cutting and demolition
              </span>
            </h1>

            <p className="mt-5 max-w-[760px] text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              Tell us about your project, location, and timeline. We provide
              concrete cutting, core drilling, slab cutting, wall cutting,
              reinforced wall cutting, and demolition services in Goldsboro and
              across Eastern North Carolina.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Fast quote support
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Share your project details and we will review scope, location,
                and timing.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Clear communication
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Call, email, or use the form to send the information we need to
                review your project.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Eastern NC coverage
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Serving Goldsboro, Wayne County, Wilson, Smithfield, Selma, and
                Kinston.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-[#c1121f] px-6 text-sm font-semibold text-white transition hover:bg-[#a30f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
            >
              Call {PHONE_DISPLAY}
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
                Quote request
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
                Send us your project details
              </h2>

              <p className="mt-4 max-w-[680px] text-base leading-8 text-black/72">
                Share the service you need, job-site location, dimensions,
                thickness, and anything else that helps us understand the work.
                For immediate attention, call or text{" "}
                <a
                  className="font-semibold text-[#c1121f] transition hover:opacity-80"
                  href={PHONE_HREF}
                >
                  {PHONE_DISPLAY}
                </a>
                .
              </p>

              <p className="mt-3 text-sm text-black/60">
                Typical response time:{" "}
                <span className="font-semibold">
                  same day or within 24 hours
                </span>
                .
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-7">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-black/10 bg-[#f7f7f7] p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
                Google Business
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-black">
                View our Google Business Profile
              </h2>

              <p className="mt-4 text-base leading-8 text-black/72">
                Xtreme Concrete Cutting &amp; Demolition is a service-area
                business based in Goldsboro, NC. Visit our Google Business
                Profile for business details, contact information, and another
                trusted way to confirm our local presence.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={GBP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-md bg-[#c1121f] px-5 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  View Google Business Profile
                </a>

                <a
                  href={GBP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-md border border-black/15 bg-white px-5 py-3 font-semibold text-black transition hover:border-black/30 hover:bg-black/[0.02]"
                >
                  Open on Google
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <iframe
                title="Xtreme Concrete Cutting service area map"
                src="https://www.google.com/maps?q=Goldsboro,NC&output=embed"
                width="100%"
                height="340"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-black">Service area</h3>

              <p className="mt-3 text-base leading-8 text-black/72">
                Based in Goldsboro and serving projects across Eastern North
                Carolina, including{" "}
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
                ,{" "}
                <Link
                  href="/service-areas/kinston-nc"
                  className="font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  Kinston
                </Link>
                , and nearby areas.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-black/75">
                <Link
                  href="/service-areas/goldsboro-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-4 py-3 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Goldsboro
                </Link>
                <Link
                  href="/service-areas/wayne-county-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-4 py-3 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Wayne County
                </Link>
                <Link
                  href="/service-areas/wilson-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-4 py-3 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Wilson
                </Link>
                <Link
                  href="/service-areas/kinston-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-4 py-3 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Kinston
                </Link>
                <Link
                  href="/service-areas/smithfield-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-4 py-3 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Smithfield
                </Link>
                <Link
                  href="/service-areas/selma-nc"
                  className="rounded-2xl bg-[#f7f7f7] px-4 py-3 transition hover:bg-black/[0.04] hover:text-black"
                >
                  Selma
                </Link>
              </div>

              <div className="mt-6 space-y-2 text-sm text-black/70">
                <p>
                  Phone:{" "}
                  <a
                    className="font-semibold transition hover:text-black"
                    href={PHONE_HREF}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    className="font-semibold transition hover:text-black"
                    href={`mailto:${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/service-areas"
                  className="text-sm font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  Explore service areas →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
              Concrete cutting services in Goldsboro, NC
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
              Local service for residential, commercial, and contractor projects
            </h2>

            <p className="mt-4 max-w-[760px] text-base leading-8 text-black/72">
              Xtreme Concrete Cutting &amp; Demolition provides concrete cutting
              and demolition services across Goldsboro and Eastern North
              Carolina. We help clients with core drilling, slab cutting, wall
              cutting, reinforced wall cutting, and demolition work that
              requires careful planning, clean execution, and dependable
              scheduling.
            </p>

            <p className="mt-4 max-w-[760px] text-base leading-8 text-black/72">
              Whether your project involves a utility access opening, slab
              trenching, structural wall modification, or demolition support,
              you can contact us with the job-site location, scope, and timeline
              so we can review the work and confirm availability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-[760px]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1121f]">
              Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-6 shadow-sm sm:p-7">
              <h3 className="text-lg font-semibold text-black">
                How do I request a quote?
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                You can call, email, or use the contact form to send your
                project details. Include the job-site location, scope, and
                timeline so we can review the work and confirm availability.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-6 shadow-sm sm:p-7">
              <h3 className="text-lg font-semibold text-black">
                What details should I include?
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                Helpful details include the service you need, dimensions,
                thickness, access information, and target schedule. The more
                information you provide, the easier it is for us to review the
                project accurately.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-6 shadow-sm sm:p-7">
              <h3 className="text-lg font-semibold text-black">
                What areas do you serve?
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                We serve Goldsboro and surrounding Eastern North Carolina areas,
                including Wayne County, Wilson, Smithfield, Selma, and Kinston.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#c1121f] text-white">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-4 py-12 sm:px-6 sm:py-14 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-[720px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Need fast scheduling and a clear quote?
            </h2>

            <p className="mt-3 text-base leading-8 text-white/85">
              Call, email, or send your project details through the form and we
              will review the scope, location, and scheduling needs for your
              job.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-black px-6 text-sm font-semibold text-white transition hover:bg-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c1121f]"
            >
              Call {PHONE_DISPLAY}
            </a>

            <Link
              href="/services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-white opacity-90 transition hover:bg-white/10 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c1121f]"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}