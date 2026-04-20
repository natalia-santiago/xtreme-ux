import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_URL,
  getServiceAreaBySlug,
  serviceAreas,
  servicesList,
} from "../data";

type PageProps = {
  params: Promise<{
    location: string;
  }>;
};

export function generateStaticParams() {
  return serviceAreas.map((area) => ({
    location: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { location } = await params;
  const area = getServiceAreaBySlug(location);

  if (!area) {
    return {
      title: "Service Area Not Found",
    };
  }

  const pageUrl = `${SITE_URL}/service-areas/${area.slug}`;

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: pageUrl,
      siteName: "Xtreme Concrete Cutting & Demolition",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Concrete cutting and demolition services in ${area.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { location } = await params;
  const area = getServiceAreaBySlug(location);

  if (!area) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/service-areas/${area.slug}`;
  const relatedAreas = serviceAreas.filter(
    (serviceArea) => serviceArea.slug !== area.slug
  );

  const areaServedSchemaType =
    area.slug === "wayne-county-nc" ? "AdministrativeArea" : "City";

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
        item: `${SITE_URL}/service-areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.name,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Concrete Cutting and Demolition in ${area.name}`,
    serviceType: servicesList,
    provider: {
      "@type": "LocalBusiness",
      name: "Xtreme Concrete Cutting & Demolition LLC",
      url: SITE_URL,
      telephone: "+1-252-582-6094",
      email: EMAIL,
    },
    areaServed: {
      "@type": areaServedSchemaType,
      name: area.name,
    },
    url: pageUrl,
    description: area.metaDescription,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Xtreme Concrete Cutting & Demolition LLC",
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: "+1-252-582-6094",
    email: EMAIL,
    areaServed: {
      "@type": areaServedSchemaType,
      name: area.name,
    },
    makesOffer: servicesList.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: area.faqQuestionOne,
        acceptedAnswer: {
          "@type": "Answer",
          text: area.faqAnswerOne,
        },
      },
      {
        "@type": "Question",
        name: area.faqQuestionTwo,
        acceptedAnswer: {
          "@type": "Answer",
          text: area.faqAnswerTwo,
        },
      },
      {
        "@type": "Question",
        name: area.faqQuestionThree,
        acceptedAnswer: {
          "@type": "Answer",
          text: area.faqAnswerThree,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
              <li>
                <Link
                  href="/service-areas"
                  className="transition hover:text-white"
                >
                  Service Areas
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">{area.name}</li>
            </ol>
          </nav>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            Service Area
          </p>

          <div className="mt-5 max-w-[980px]">
            <h1 className="text-4xl font-extrabold leading-[0.96] tracking-tight sm:text-5xl lg:text-6xl">
              Concrete Cutting and Demolition in{" "}
              <span className="text-[#c1121f]">{area.name}</span>
            </h1>

            <p className="mt-5 max-w-[760px] text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              {area.intro}
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Serving Eastern NC
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Local service for residential, commercial, and contractor work.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Clean, controlled work
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Dependable scheduling and professional execution on site.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Fast quote support
              </p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Contact us to review your location, scope, access, and timing.
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
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
                Local concrete cutting services
              </p>

              <h2 className="mt-3 max-w-[18ch] text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
                Professional service in {area.shortName}
              </h2>

              <p className="mt-5 max-w-[720px] text-base leading-8 text-black/72">
                {area.seoParagraph}
              </p>

              <p className="mt-4 max-w-[720px] text-base leading-8 text-black/72">
                We work with residential, commercial, and contractor clients who
                need clean cuts, dependable scheduling, and controlled
                demolition work in {area.name} and nearby Eastern North Carolina
                areas.
              </p>

              <p className="mt-4 max-w-[720px] text-base leading-8 text-black/72">
                We also provide concrete cutting and demolition services in{" "}
                {relatedAreas.slice(0, 3).map((relatedArea, index) => (
                  <span key={relatedArea.slug}>
                    <Link
                      href={`/service-areas/${relatedArea.slug}`}
                      className="font-semibold text-[#c1121f] underline decoration-transparent underline-offset-4 transition hover:decoration-[#c1121f]"
                    >
                      {relatedArea.name}
                    </Link>
                    {index < 1
                      ? ", "
                      : index === 1
                        ? ", and "
                        : ""}
                  </span>
                ))}
                .
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-[#111111]">
                Services available in {area.shortName}
              </h3>

              <p className="mt-4 text-sm leading-6 text-black/72">
                {area.serviceListIntro}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-black/72">
                <li>Core drilling for plumbing, electrical, and HVAC access</li>
                <li>Concrete slab cutting for floors, driveways, and trenching</li>
                <li>Concrete wall cutting for door and window openings</li>
                <li>Reinforced wall cutting for structural concrete work</li>
                <li>Building demolition for residential and commercial projects</li>
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/services#core-drilling"
                  className="text-sm font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  Explore core drilling →
                </Link>
                <Link
                  href="/services#slab-cutting"
                  className="text-sm font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  Explore slab cutting →
                </Link>
                <Link
                  href="/services#building-demolition"
                  className="text-sm font-semibold text-[#c1121f] transition hover:opacity-80"
                >
                  Explore demolition →
                </Link>
              </div>
            </div>
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
                Need concrete cutting or demolition in {area.shortName}?
              </h2>

              <p className="mt-4 text-base leading-8 text-black/70">
                Tell us about your project location, access, scope, and timing.
                We will review the details and confirm availability for your job
                in {area.name}.
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
              Local support for jobs in {area.shortName}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-black/10 bg-[#f7f7f7] p-8 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-[#111111]">
                {area.localSupportTitle}
              </h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                {area.localSupportParagraph}
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f7f7f7] p-8 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-[#111111]">
                {area.executionTitle}
              </h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                {area.executionParagraph}
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f7f7f7] p-8 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-[#111111]">
                {area.projectTypesTitle}
              </h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                {area.projectTypesParagraph}
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
              FAQs for {area.shortName}
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-7">
              <h3 className="text-lg font-semibold text-[#111111]">
                {area.faqQuestionOne}
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                {area.faqAnswerOne}
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-7">
              <h3 className="text-lg font-semibold text-[#111111]">
                {area.faqQuestionTwo}
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                {area.faqAnswerTwo}
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-7">
              <h3 className="text-lg font-semibold text-[#111111]">
                {area.faqQuestionThree}
              </h3>
              <p className="mt-3 text-base leading-8 text-black/70">
                {area.faqAnswerThree}
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
                Nearby pages
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
                Explore other service areas
              </h2>

              <p className="mt-4 text-base leading-8 text-black/70">
                Browse other Eastern North Carolina area pages to learn more
                about locations we commonly serve.
              </p>
            </div>

            <Link
              href="/service-areas"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-black/15 bg-white px-6 text-sm font-semibold text-[#111111] transition hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              View All Service Areas
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedAreas.map((relatedArea) => (
              <Link
                key={relatedArea.slug}
                href={`/service-areas/${relatedArea.slug}`}
                className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-6 transition hover:border-[#c1121f]/30 hover:bg-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
              >
                <p className="text-base font-semibold text-[#111111]">
                  {relatedArea.name}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/65">
                  {relatedArea.relatedParagraph}
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
              Need concrete cutting or demolition services in {area.name}?
              Contact us for clear scheduling and a straightforward estimate.
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