// app/contact/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const name = String(formData.get("name") ?? "");
      const phone = String(formData.get("phone") ?? "");
      const email = String(formData.get("email") ?? "");
      const location = String(formData.get("location") ?? "");
      const dimensions = String(formData.get("dimensions") ?? "");
      const thickness = String(formData.get("thickness") ?? "");
      const message = String(formData.get("message") ?? "");

      const smsMessage = `Hi, I'm requesting a quote from the website.

Name: ${name}
Phone: ${phone}
Email: ${email}
Location / Job Site: ${location}
Dimensions: ${dimensions}
Thickness: ${thickness}

What do you need?
${message}`;

      const encodedMessage = encodeURIComponent(smsMessage);

      window.location.href = `sms:+12525826094?body=${encodedMessage}`;
      setStatus("idle");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 pb-28 sm:pb-14">
      <h1 className="text-3xl font-bold">Request a Quote</h1>

      <p className="mt-2 text-black/70">
        Tell us what you need and we’ll open a text message to our team. For fastest help, call or
        text{" "}
        <a className="font-semibold text-[#c1121f]" href="tel:+12525826094">
          (252) 582-6094
        </a>
        .
      </p>

      <p className="mt-2 text-sm text-black/60">
        Typical response time: <span className="font-semibold">same day or within 24 hours</span>.
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-black/80">Name</label>
              <input
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                name="name"
                required
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black/80">Phone</label>
              <input
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                type="tel"
                name="phone"
                required
                autoComplete="tel"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black/80">Email</label>
            <input
              className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Optional"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-black/80">Location / Job Site</label>
              <input
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                name="location"
                placeholder="City / address (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black/80">Dimensions</label>
              <input
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                name="dimensions"
                placeholder='e.g., 4" x 6"'
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-black/80">Thickness</label>
              <input
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                name="thickness"
                placeholder='e.g., 6"'
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black/80">What do you need?</label>
            <textarea
              className="mt-1 min-h-[140px] w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
              name="message"
              required
              placeholder="Tell us about the job…"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong opening your message. Please try again or call (252) 582-6094.
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-xl bg-[#c1121f] px-5 py-2.5 font-semibold text-white shadow-sm hover:opacity-95 disabled:opacity-60"
            >
              {status === "submitting" ? "Opening..." : "Text Request"}
            </button>

            <a
              href="tel:+12525826094"
              className="rounded-xl border border-black/15 bg-white px-5 py-2.5 font-semibold hover:bg-black/[0.02]"
            >
              Call Now
            </a>

            <Link className="text-sm text-black/60 hover:underline" href="/">
              Back to home
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}