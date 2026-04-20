import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

const SITE_URL = "https://xtremeconcretecutting.com";

export const metadata: Metadata = {
  title:
    "Concrete Cutting & Demolition in Goldsboro, NC | Xtreme Concrete Cutting",
  description:
    "Concrete cutting, core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition services in Goldsboro, Wayne County, Wilson, Kinston, Smithfield, Selma, and Eastern North Carolina.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title:
      "Concrete Cutting & Demolition in Goldsboro, NC | Xtreme Concrete Cutting",
    description:
      "Concrete cutting, core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition services in Goldsboro and Eastern North Carolina.",
    url: SITE_URL,
    siteName: "Xtreme Concrete Cutting & Demolition",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Concrete Cutting & Demolition in Goldsboro, NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Concrete Cutting & Demolition in Goldsboro, NC | Xtreme Concrete Cutting",
    description:
      "Concrete cutting, core drilling, slab cutting, wall cutting, reinforced wall cutting, and demolition services in Goldsboro and Eastern North Carolina.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}