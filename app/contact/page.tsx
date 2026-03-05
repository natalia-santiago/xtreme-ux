import Link from "next/link";

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">Request a Quote</h1>

      <p className="mt-2 text-black/70">
        Tell us what you need and we’ll get back to you. For fast help, call{" "}
        <a className="font-semibold text-[#c1121f]" href="tel:+19194292619">
          (919) 429-2619
        </a>.
      </p>

      <p className="mt-2 text-sm text-black/60">
        Typical response time:{" "}
        <span className="font-semibold">same day or within 24 hours</span>.
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 p-6 shadow-sm">
        <form
          name="quote"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* Netlify required hidden field */}
          <input type="hidden" name="form-name" value="quote" />

          {/* Honeypot */}
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-4">
            <div>
              <label className="text-sm font-semibold">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-black/15 px-3 py-2 text-sm"
                placeholder="Your name"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold">Phone</label>
                <input
                  name="phone"
                  required
                  className="mt-1 w-full rounded-lg border border-black/15 px-3 py-2 text-sm"
                  placeholder="(919) 555-1234"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-black/15 px-3 py-2 text-sm"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Job Address / City</label>
              <input
                name="location"
                className="mt-1 w-full rounded-lg border border-black/15 px-3 py-2 text-sm"
                placeholder="Goldsboro, NC (or job address)"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold">
                  Approx. Dimensions
                </label>
                <input
                  name="dimensions"
                  className="mt-1 w-full rounded-lg border border-black/15 px-3 py-2 text-sm"
                  placeholder='e.g., 10" x 6" opening'
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Thickness (if known)
                </label>
                <input
                  name="thickness"
                  className="mt-1 w-full rounded-lg border border-black/15 px-3 py-2 text-sm"
                  placeholder="e.g., 6 inches"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">What do you need?</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-lg border border-black/15 px-3 py-2 text-sm"
                placeholder="Tell us the service needed, timeline, and any notes."
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-xl bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Submit Request
            </button>

            <p className="text-xs text-black/60">
              Need help fast? Call{" "}
              <a
                className="font-semibold text-[#c1121f]"
                href="tel:+19194292619"
              >
                (919) 429-2619
              </a>{" "}
              for quickest scheduling.
            </p>
          </div>
        </form>
      </div>

      <div className="mt-6 text-sm text-black/60">
        Looking for services?{" "}
        <Link href="/services" className="font-semibold text-[#c1121f]">
          View Services
        </Link>
      </div>
    </section>
  );
}