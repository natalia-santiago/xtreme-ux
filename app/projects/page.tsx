// app/projects/page.tsx
import Link from "next/link";

const categories = [
  "Core Drilling",
  "Slab Cutting",
  "Wall Openings",
  "Reinforced Concrete",
  "Demolition & Removal",
  "Commercial Support",
];

const process = [
  ["1) Quick call", "We confirm scope, location, timeline, and any access constraints."],
  ["2) Site details", "We review measurements, thickness, and whether reinforcement may be present."],
  ["3) Written estimate", "Clear scope, pricing, and what’s included (plus cleanup expectations)."],
  ["4) Controlled cutting / demo", "Safe, accurate work with attention to layout and finish."],
  ["5) Cleanup", "We keep the area tidy and handle debris removal when included in the scope."],
  ["6) Final walkthrough", "We confirm the result meets your needs and answer any questions."],
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-black/70">
          We’re a new company and currently building our project portfolio. As we complete jobs,
          we’ll post before/after photos, scope details, and timelines. For now, here’s what you can
          expect when you work with us.
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
          <Link
            href="/services"
            className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/[0.02]"
          >
            View Services
          </Link>
        </div>
      </header>

      {/* Coming soon */}
      <section className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Portfolio Coming Soon</h2>
        <p className="mt-2 text-black/70">
          Once we have completed projects ready to share, you’ll see photos, scope details, and
          timelines here.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((label) => (
            <div
              key={label}
              className="rounded-2xl border border-black/10 bg-black/[0.03] p-5"
            >
              <div className="text-sm font-semibold">{label}</div>
              <div className="mt-2 text-sm text-black/60">Photos coming soon.</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">What to Expect</h2>
        <p className="mt-2 text-black/70">
          A clear plan, safe work, and clean results — with straightforward communication.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {process.map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-black/10 p-6 shadow-sm">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-black/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Faster quote */}
      <section className="mt-12 rounded-2xl bg-black/[0.03] p-6">
        <h2 className="text-xl font-semibold">For a faster quote</h2>
        <p className="mt-2 text-black/70">
          If you can, include these details when you contact us:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-black/70">
          <li>• Job address / city</li>
          <li>• Photos of the area (if available)</li>
          <li>• Approx. dimensions and concrete thickness</li>
          <li>• Whether reinforcement/rebar is expected</li>
          <li>• Desired start date</li>
        </ul>

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
      </section>
    </main>
  );
}