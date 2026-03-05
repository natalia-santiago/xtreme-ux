// app/reviews/page.tsx
import Link from "next/link";
import Testimonials from "@/components/Testimonials";

export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold">Reviews</h1>
        <p className="mt-2 text-black/70">
          We’re building our online reviews as we complete more projects. In the meantime,
          references are available upon request.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+19194292619"
            className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/[0.02]"
          >
            Call (919) 429-2619
          </a>
        </div>
      </header>

      <div className="mt-10">
        <Testimonials />
      </div>

      <section className="mt-10 rounded-2xl border border-black/10 p-6 shadow-sm">
        <h2 className="text-2xl font-bold">What matters to us</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Safety", "Controlled work, jobsite awareness, and tidy work areas."],
            ["Quality", "Clean, accurate cuts and solid communication."],
            ["Reliability", "Clear estimates and scheduling updates."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-black/[0.03] p-5">
              <div className="font-semibold">{title}</div>
              <p className="mt-2 text-sm text-black/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}