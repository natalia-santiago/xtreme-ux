// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

// Use an env var for the canonical/base URL so previews + SEO stay correct
// on Netlify during staging and after you connect the real domain.
//
// In Netlify > Site settings > Environment variables, set:
// NEXT_PUBLIC_SITE_URL = https://xtremeconcretecutting.com
//
// Until then, it will safely fall back to the current Netlify URL.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://xtremeconcretecutting.netlify.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: SITE_URL,
  },

  title: {
    default: "Xtreme Concrete Cutting & Demolition | Goldsboro, NC",
    template: "%s | Xtreme Concrete Cutting",
  },

  description:
    "Concrete cutting, core drilling, slab cutting, wall cutting, reinforced concrete cutting, and demolition services in Goldsboro, NC and Eastern North Carolina. Fast response, safety-first work, and clean accurate cuts.",

  keywords: [
    "concrete cutting Goldsboro NC",
    "core drilling Goldsboro NC",
    "concrete demolition Goldsboro NC",
    "slab cutting Goldsboro NC",
    "wall cutting Goldsboro NC",
    "reinforced concrete cutting NC",
    "concrete cutting Eastern North Carolina",
    "Wayne County concrete cutting",
    "Wilson NC concrete cutting",
    "Kinston NC concrete cutting",
    "Smithfield NC concrete cutting",
    "Selma NC concrete cutting",
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
      "Concrete cutting, core drilling, and demolition services in Goldsboro, NC and surrounding areas.",
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
      "Concrete cutting, core drilling, and demolition services in Goldsboro, NC and surrounding areas.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Avoid shipping a "demo" email into structured data by default.
  // Set NEXT_PUBLIC_BUSINESS_EMAIL in Netlify when ready (or remove email entirely).
  const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_BUSINESS_EMAIL?.trim();

  const localBusinessSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: "Xtreme Concrete Cutting & Demolition LLC",
    url: SITE_URL,
    telephone: "+1-252-582-6094",

    description:
      "Concrete cutting, core drilling, slab cutting, wall cutting, reinforced concrete cutting, and demolition services in Goldsboro, NC and Eastern North Carolina.",

    areaServed: [
      "Goldsboro, NC",
      "Wayne County, NC",
      "Wilson, NC",
      "Smithfield, NC",
      "Selma, NC",
      "Kinston, NC",
      "Eastern North Carolina",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],

    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Core Drilling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Slab Cutting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Wall Cutting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reinforced Concrete Cutting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Building Demolition" } },
    ],
  };

  if (BUSINESS_EMAIL) {
    localBusinessSchema.email = BUSINESS_EMAIL;
  }

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

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-white text-[#0d0d0d]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Header />
        <main className="pb-24 sm:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}