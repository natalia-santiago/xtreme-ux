// components/Testimonials.tsx
import Link from "next/link";

type Props = {
  compact?: boolean; // use compact=true on homepage
};

export default function Testimonials({ compact = false }: Props) {
  return (
    <section className={compact ? "mx-auto max-w-6xl px-4 pb-14" : "mx-auto max-w-6xl px-4 py-14"}>
      <div className="rounded-2xl border border-black/10 p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold">Reviews</h2>
            <p className="mt-2 text-sm text-black/70">
              We’re a new company and currently building our online review presence.
              References are available on request.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Request a Quote
            </Link>
            <Link
              href="/reviews"
              className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/[0.02]"
            >
              View Reviews
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "References available",
              body:
                "If you’d like to speak with recent customers, we can share references for similar work.",
            },
            {
              title: "What you can expect",
              body:
                "Clear communication, safe work practices, clean results, and fast scheduling when possible.",
            },
            {
              title: "Future reviews",
              body:
                "As we complete more jobs, we’ll post verified reviews and before/after photos here.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-black/[0.03] p-5"
            >
              <div className="font-semibold">{card.title}</div>
              <p className="mt-2 text-sm text-black/70">{card.body}</p>
            </div>
          ))}
        </div>

        {!compact && (
          <div className="mt-8 rounded-2xl bg-black/[0.03] p-5">
            <p className="text-sm font-semibold">Have we worked together?</p>
            <p className="mt-1 text-sm text-black/70">
              We’d appreciate your feedback. Ask us for the best place to leave a review.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}