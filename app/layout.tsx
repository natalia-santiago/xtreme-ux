import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import Script from "next/script";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://xtremeconcretecutting.netlify.app";

const BUSINESS_NAME = "Xtreme Concrete Cutting & Demolition LLC";
const BUSINESS_PHONE = "+1-252-582-6094";
const BUSINESS_EMAIL = "info@xtremeconcretecutting.com";
const GBP_URL = "https://share.google/w4xRGpqyikqr5mvJ9";
const GA_ID = "G-QBT6H2SE8R";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: SITE_URL,
  },

  title: {
    default: "Concrete Cutting & Demolition in Goldsboro, NC | Xtreme Concrete Cutting",
    template: "%s | Xtreme Concrete Cutting",
  },

  description:
    "Concrete cutting, core drilling, slab cutting, wall cutting, reinforced concrete cutting, and demolition services in Goldsboro, Raleigh, Wilson, Kinston, Smithfield, Selma, and Eastern North Carolina.",

  keywords: [
    "concrete cutting Goldsboro NC",
    "core drilling Goldsboro NC",
    "concrete demolition Goldsboro NC",
    "slab cutting Goldsboro NC",
    "wall cutting Goldsboro NC",
    "reinforced concrete cutting NC",
    "concrete cutting Eastern North Carolina",
    "concrete cutting Raleigh NC",
    "concrete cutting Wilson NC",
    "concrete cutting Kinston NC",
    "concrete cutting Smithfield NC",
    "concrete cutting Selma NC",
    "demolition contractor Goldsboro NC",
    "concrete contractor Eastern NC",
    "core drilling Eastern NC",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Xtreme Concrete Cutting & Demolition",
    description:
      "Concrete cutting, core drilling, slab cutting, wall cutting, reinforced concrete cutting, and demolition services across Goldsboro and Eastern North Carolina.",
    url: SITE_URL,
    siteName: "Xtreme Concrete Cutting",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xtreme Concrete Cutting & Demolition",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Xtreme Concrete Cutting & Demolition",
    description:
      "Concrete cutting, core drilling, and demolition services in Goldsboro, Raleigh, and Eastern North Carolina.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "ProfessionalService"],
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    description:
      "Concrete cutting, core drilling, slab cutting, wall cutting, reinforced concrete cutting, and demolition services in Goldsboro, Raleigh, Wilson, Kinston, Smithfield, Selma, and Eastern North Carolina.",
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/favicon.ico`,
    sameAs: [GBP_URL],
    areaServed: [
      { "@type": "City", name: "Goldsboro, NC" },
      { "@type": "City", name: "Raleigh, NC" },
      { "@type": "City", name: "Wilson, NC" },
      { "@type": "City", name: "Kinston, NC" },
      { "@type": "City", name: "Smithfield, NC" },
      { "@type": "City", name: "Selma, NC" },
      { "@type": "AdministrativeArea", name: "Eastern North Carolina" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goldsboro",
      addressRegion: "NC",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_PHONE,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Concrete Cutting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Core Drilling" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Concrete Slab Cutting" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Concrete Wall Cutting" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Reinforced Wall Cutting" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Building Demolition" },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Xtreme Concrete Cutting & Demolition",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_NAME,
    url: SITE_URL,
    email: BUSINESS_EMAIL,
    telephone: BUSINESS_PHONE,
    sameAs: [GBP_URL],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-white text-[#0d0d0d]">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <Header />
        <main className="pb-24 sm:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}