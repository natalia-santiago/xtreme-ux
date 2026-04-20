import Link from "next/link";

type Props = {
  compact?: boolean;
};

const trustCards = [
  {
    title: "References Available",
    body:
      "If you want added peace of mind, we can provide references for recent projects and similar work.",
  },
  {
    title: "What You Can Expect",
    body:
      "Clear communication, safe work practices, clean results, and reliable scheduling from start to finish.",
  },
  {
    title: "Built on Professionalism",
    body:
      "We focus on showing up on time, doing the job right, and making the process straightforward for every client.",
  },
];

export default function Testimonials({ compact = false }: Props) {
  return (
    <section
      className={
        compact
          ? "mx-auto max-w-7xl px-4 pb-14"
          : "mx-auto max-w-7xl px-4 py-14"
      }
    >
      <div className="rounded-[24px] border border-black/10 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c1121f]">
              Trust
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-black sm:text-3xl">
              References available and a commitment to doing the job right
            </h2>

            <p className="mt-3 text-sm leading-7 text-black/70 sm:text-base">
              We are building our online review presence and can provide
              references upon request. Our focus is simple: professional
              service, clear communication, and clean, reliable work.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              Request a Quote
            </Link>

            <Link
              href="/reviews"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-black/[0.02]"
            >
              View Reviews
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-black/8 bg-black/[0.02] p-5"
            >
              <h3 className="text-base font-semibold text-black">
                {card.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-black/70">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {!compact && (
          <div className="mt-8 rounded-2xl border border-black/8 bg-black/[0.02] p-5">
            <p className="text-sm font-semibold text-black">
              Have we worked together?
            </p>

            <p className="mt-1 text-sm leading-7 text-black/70">
              We appreciate client feedback. If you would like to leave a
              review, contact us and we will point you to the best place to
              share it.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}