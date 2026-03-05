import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://xtremeconcretecutting.com"),
  title: "Xtreme Concrete Cutting & Demolition | Goldsboro NC",
  description:
    "Concrete cutting, core drilling, slab cutting, and demolition services in Goldsboro, NC and surrounding areas. Fast scheduling and precision work.",
  keywords: [
    "concrete cutting Goldsboro NC",
    "core drilling Goldsboro NC",
    "concrete demolition Goldsboro NC",
    "slab cutting North Carolina",
    "wall cutting NC",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-[#0d0d0d]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}