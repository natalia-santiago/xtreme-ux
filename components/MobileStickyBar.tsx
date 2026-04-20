import Link from "next/link";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.37 1.78.72 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.24a2 2 0 0 1 2.11-.45c.83.35 1.71.6 2.61.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur sm:hidden">
      <div className="mx-auto max-w-6xl px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2.5">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:+12525826094"
            aria-label="Call Xtreme Concrete Cutting at (252) 582-6094"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-black/12 bg-white px-4 py-3 text-center text-sm font-semibold text-black shadow-sm transition active:scale-[0.98] active:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            <PhoneIcon />
            Call Now
          </a>

          <Link
            href="/contact"
            aria-label="Request a quote"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#c1121f] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition active:scale-[0.98] active:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
          >
            <QuoteIcon />
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}