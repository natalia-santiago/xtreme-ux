import Link from "next/link";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-3 backdrop-blur sm:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
        <a
          href="tel:+12525826094"
          className="rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          Call Now
        </a>

        <Link
          href="/contact"
          className="rounded-xl bg-[#c1121f] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}