// app/contact/success/page.tsx
import Link from "next/link";

export default function ContactSuccess() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20">
      <div className="rounded-2xl border border-black/10 p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Request received</h1>
        <p className="mt-2 text-black/70">
          Thanks — we’ll review your details and reach out as soon as possible.
          If you need fast help, call{" "}
          <a className="font-semibold text-[#c1121f]" href="tel:+19194292619">
            (919) 429-2619
          </a>
          .
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/[0.02]"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="rounded-xl bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}