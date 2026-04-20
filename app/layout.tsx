import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const SITE_URL = "https://xtremeconcretecutting.com";
const BUSINESS_NAME = "Xtreme Concrete Cutting & Demolition LLC";
const BUSINESS_PHONE = "+1-252-582-6094";
const BUSINESS_EMAIL = "info@xtremeconcretecutting.com";
const GBP_URL = "https://share.google/w4xRGpqyikqr5mvJ9";
const GA_ID = "G-QBT6H2SE8R";

const SITE_DESCRIPTION =
  "Concrete cutting, core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition services in Goldsboro, Wayne County, Wilson, Kinston, Smithfield, Selma, and Eastern North Carolina.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Concrete Cutting & Demolition in Eastern North Carolina | Xtreme Concrete Cutting",
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  applicationName: BUSINESS_NAME,
  category: "construction",
  alternates: {
    canonical: SITE_URL,
  },
  keywords: [
    "concrete cutting Goldsboro NC",
    "core drilling Goldsboro NC",
    "concrete demolition Goldsboro NC",
    "slab cutting Goldsboro NC",
    "wall cutting Goldsboro NC",
    "reinforced wall cutting NC",
    "concrete cutting Eastern North Carolina",
    "concrete cutting Wayne County NC",
    "concrete cutting Wilson NC",
    "concrete cutting Kinston NC",
    "concrete cutting Smithfield NC",
    "concrete cutting Selma NC",
    "demolition contractor Goldsboro NC",
    "core drilling Eastern NC",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "Concrete Cutting & Demolition in Eastern North Carolina | Xtreme Concrete Cutting",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Xtreme Concrete Cutting & Demolition in Eastern North Carolina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Concrete Cutting & Demolition in Eastern North Carolina | Xtreme Concrete Cutting",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": [
      "LocalBusiness",
      "HomeAndConstructionBusiness",
      "ProfessionalService",
    ],
    "@id": `${SITE_URL}#localbusiness`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/favicon.ico`,
    sameAs: [GBP_URL],
    areaServed: [
      { "@type": "City", name: "Goldsboro, NC" },
      { "@type": "AdministrativeArea", name: "Wayne County, NC" },
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
        email: BUSINESS_EMAIL,
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
          itemOffered: {
            "@type": "Service",
            name: "Core Drilling",
            areaServed: "Eastern North Carolina",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Concrete Slab Cutting",
            areaServed: "Eastern North Carolina",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Concrete Wall Cutting",
            areaServed: "Eastern North Carolina",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reinforced Wall Cutting",
            areaServed: "Eastern North Carolina",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Building Demolition",
            areaServed: "Eastern North Carolina",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: BUSINESS_NAME,
    url: SITE_URL,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    email: BUSINESS_EMAIL,
    telephone: BUSINESS_PHONE,
    logo: `${SITE_URL}/favicon.ico`,
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

        <Script
          id="ld-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(localBusinessSchema)}
        </Script>

        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(websiteSchema)}
        </Script>

        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(organizationSchema)}
        </Script>

        <Header />
        <main className="pb-24 sm:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}