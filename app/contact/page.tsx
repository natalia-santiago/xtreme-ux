import Link from "next/link";

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">Request a Quote</h1>

      <p className="mt-2 text-black/70">
        Let us know what services you&apos;re looking for, and our team will
        get back to you quickly. For immediate attention, call or text{" "}
        <a className="font-semibold text-[#c1121f]" href="tel:+12525826094">
          (252) 582-6094
        </a>
        .
      </p>

      <p className="mt-2 text-sm text-black/60">
        Typical response time:{" "}
        <span className="font-semibold">same day or within 24 hours</span>.
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 p-6 shadow-sm">
        <form
          name="quote"
          method="POST"
          action="/thank-you.html"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value="quote" />

          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human:{" "}
              <input name="bot-field" />
            </label>
          </p>

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Optional"
              className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-sm font-medium"
            >
              Location / Job Site
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="City / address (optional)"
              className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
            />
          </div>

          <div>
            <label
              htmlFor="dimensions"
              className="mb-2 block text-sm font-medium"
            >
              Dimensions
            </label>
            <input
              id="dimensions"
              name="dimensions"
              type="text"
              placeholder='e.g., 4" x 6"'
              className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
            />
          </div>

          <div>
            <label
              htmlFor="thickness"
              className="mb-2 block text-sm font-medium"
            >
              Thickness
            </label>
            <input
              id="thickness"
              name="thickness"
              type="text"
              placeholder='e.g., 6"'
              className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
            />
          </div>

          <div>
            <label htmlFor="details" className="mb-2 block text-sm font-medium">
              What do you need?
            </label>
            <textarea
              id="details"
              name="details"
              rows={6}
              placeholder="Tell us about the job..."
              required
              className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-[#c1121f]"
            />
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-[#c1121f] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Send
            </button>

            <Link
              href="/"
              className="text-base text-black/60 underline-offset-4 hover:text-black hover:underline"
            >
              Back to home
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}