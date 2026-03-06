// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-black/70">
        Sorry — we couldn’t find that page. Try going back home.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-black px-5 py-2.5 font-semibold text-white hover:opacity-90"
      >
        Back to home
      </Link>
    </section>
  );
}