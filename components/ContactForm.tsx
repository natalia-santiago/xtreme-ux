"use client";

import Link from "next/link";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function trackEvent(eventName: string, eventLabel: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: "Lead",
      event_label: eventLabel,
    });
  }
}

export default function ContactForm() {
  return (
    <form
      name="quote"
      method="POST"
      action="/thank-you.html"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-6"
      onSubmit={() => trackEvent("quote_form_submit", "Quote Request Form")}
    >
      <input type="hidden" name="form-name" value="quote" />

      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human:{" "}
          <input name="bot-field" />
        </label>
      </p>

      <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm leading-6 text-black/65">
        Include your job-site location, service needed, dimensions, thickness,
        and project timeline so we can review the work more accurately.
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-black">
            Name <span className="text-[#c1121f]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-black outline-none transition placeholder:text-black/35 focus:border-[#c1121f] focus:ring-2 focus:ring-[#c1121f]/15"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-black">
            Phone <span className="text-[#c1121f]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-black outline-none transition placeholder:text-black/35 focus:border-[#c1121f] focus:ring-2 focus:ring-[#c1121f]/15"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-black">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Optional"
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-black outline-none transition placeholder:text-black/35 focus:border-[#c1121f] focus:ring-2 focus:ring-[#c1121f]/15"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-black"
          >
            Location / Job Site
          </label>
          <input
            id="location"
            name="location"
            type="text"
            autoComplete="street-address"
            placeholder="City or address"
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-black outline-none transition placeholder:text-black/35 focus:border-[#c1121f] focus:ring-2 focus:ring-[#c1121f]/15"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-black">
          Service needed
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-[#c1121f] focus:ring-2 focus:ring-[#c1121f]/15"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Core Drilling">Core Drilling</option>
          <option value="Concrete Slab Cutting">Concrete Slab Cutting</option>
          <option value="Concrete Wall Cutting">Concrete Wall Cutting</option>
          <option value="Reinforced Wall Cutting">Reinforced Wall Cutting</option>
          <option value="Building Demolition">Building Demolition</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="dimensions"
            className="mb-2 block text-sm font-medium text-black"
          >
            Dimensions
          </label>
          <input
            id="dimensions"
            name="dimensions"
            type="text"
            placeholder='e.g. 4" x 6"'
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-black outline-none transition placeholder:text-black/35 focus:border-[#c1121f] focus:ring-2 focus:ring-[#c1121f]/15"
          />
        </div>

        <div>
          <label
            htmlFor="thickness"
            className="mb-2 block text-sm font-medium text-black"
          >
            Thickness
          </label>
          <input
            id="thickness"
            name="thickness"
            type="text"
            placeholder='e.g. 6"'
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-black outline-none transition placeholder:text-black/35 focus:border-[#c1121f] focus:ring-2 focus:ring-[#c1121f]/15"
          />
        </div>
      </div>

      <div>
        <label htmlFor="details" className="mb-2 block text-sm font-medium text-black">
          Project details <span className="text-[#c1121f]">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={6}
          required
          placeholder="Tell us about the job, access, timeline, and anything else we should know."
          className="w-full rounded-xl border border-black/10 px-4 py-3 text-black outline-none transition placeholder:text-black/35 focus:border-[#c1121f] focus:ring-2 focus:ring-[#c1121f]/15"
        />
      </div>

      <p className="text-sm leading-6 text-black/55">
        Fields marked with <span className="font-semibold text-[#c1121f]">*</span> are required.
      </p>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-[48px] justify-center rounded-md bg-[#c1121f] px-6 py-3 font-semibold text-white transition hover:bg-[#a30f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1121f] focus-visible:ring-offset-2"
        >
          Send Quote Request
        </button>

        <Link
          href="/"
          className="text-base text-black/60 underline-offset-4 transition hover:text-black hover:underline"
        >
          Back to home
        </Link>
      </div>
    </form>
  );
}