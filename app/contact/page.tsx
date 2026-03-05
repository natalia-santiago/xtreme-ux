// app/contact/page.tsx
import Link from "next/link";

export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold">Request a Quote</h1>
        <p className="mt-2 text-black/70">
          Tell us what you need and we’ll get back to you. For fast help, call{" "}
          <a className="font-semibold text-[#c1121f]" href="tel:+19194292619">
            (919) 429-2619
          </a>
          .
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {/* FORM */}
        <div className="lg:col-span-2 rounded-2xl border border-black/10 p-6 shadow-sm">
          {/* Netlify-friendly form (works after deploy) */}
          <form
            name="quote"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/contact/success"
          >
            <input type="hidden" name="form-name" value="quote" />

            {/* Honeypot */}
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                Name <span className="text-[#c1121f]">*</span>
                <input
                  className="mt-1 w-full rounded-xl border border-black/20 px-3 py-2"
                  name="name"
                  required
                />
              </label>

              <label className="text-sm">
                Phone <span className="text-[#c1121f]">*</span>
                <input
                  className="mt-1 w-full rounded-xl border border-black/20 px-3 py-2"
                  name="phone"
                  required
                  inputMode="tel"
                />
              </label>

              <label className="text-sm md:col-span-2">
                Email
                <input
                  className="mt-1 w-full rounded-xl border border-black/20 px-3 py-2"
                  type="email"
                  name="email"
                />
              </label>

              <label className="text-sm md:col-span-2">
                Project Address / City
                <input
                  className="mt-1 w-full rounded-xl border border-black/20 px-3 py-2"
                  name="location"
                />
              </label>

              <label className="text-sm md:col-span-2">
                Service Needed
                <select
                  className="mt-1 w-full rounded-xl border border-black/20 px-3 py-2"
                  name="service"
                  defaultValue="Core Drilling"
                >
                  <option>Core Drilling</option>
                  <option>Concrete Slab Cutting</option>
                  <option>Concrete Wall Cutting</option>
                  <option>Reinforced Wall Cutting</option>
                  <option>Building Demolition</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="text-sm md:col-span-2">
                Details
                <textarea
                  className="mt-1 w-full rounded-xl border border-black/20 px-3 py-2"
                  name="message"
                  rows={6}
                  placeholder="What do you need done? Include approximate dimensions, thickness, access notes, and timeline if you can."
                />
              </label>
            </div>

            <button
              className="mt-6 w-full rounded-xl bg-[#c1121f] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              type="submit"
            >
              Send Request
            </button>

            <p className="mt-3 text-xs text-black/60">
              By submitting, you agree we may contact you by phone/text/email about your request.
            </p>
          </form>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          {/* Contact Card */}
          <div className="rounded-2xl border border-black/10 p-6 shadow-sm">
            <p className="font-semibold">Xtreme Concrete Cutting & Demolition LLC</p>
            <p className="mt-2 text-sm text-black/70">Goldsboro, NC</p>

            <div className="mt-4 space-y-2 text-sm text-black/70">
              <p>
                <span className="font-semibold text-black/80">Main:</span>{" "}
                <a className="hover:text-[#c1121f]" href="tel:+19194292619">
                  (919) 429-2619
                </a>
              </p>
              <p>
                <span className="font-semibold text-black/80">Office:</span>{" "}
                <a className="hover:text-[#c1121f]" href="tel:+19197444460">
                  (919) 744-4460
                </a>
              </p>
              <p>
                <span className="font-semibold text-black/80">Email:</span>{" "}
                <a
                  className="hover:text-[#c1121f] break-words"
                  href="mailto:xtreme.concretecutting.demo@gmail.com"
                >
                  xtreme.concretecutting.demo@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+19194292619"
                className="rounded-xl bg-[#c1121f] px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-95"
              >
                Call Now
              </a>
              <Link
                href="/services"
                className="rounded-xl border border-black/10 bg-white px-5 py-3 text-center text-sm font-semibold hover:bg-black/[0.02]"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Faster Quote Checklist */}
          <div className="rounded-2xl bg-black/[0.03] p-6">
            <p className="font-semibold">For a faster quote, include:</p>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>• Job address / city</li>
              <li>• Photos (if available)</li>
              <li>• Approx. dimensions & thickness</li>
              <li>• Any rebar / reinforced notes</li>
              <li>• Desired start date</li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="rounded-2xl border border-black/10 p-6 shadow-sm">
            <p className="font-semibold">Service area</p>
            <p className="mt-2 text-sm text-black/70">
              Based in Goldsboro — serving surrounding areas across Eastern North Carolina.
            </p>
            <p className="mt-3 text-sm text-black/70">
              Goldsboro • Wayne County • Wilson • Smithfield • Selma • Kinston • Surrounding areas
            </p>
          </div>
        </aside>
      </div>

      {/* MAP */}
      <section className="mt-10 rounded-2xl border border-black/10 p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h2 className="text-xl font-bold">Find us in Goldsboro</h2>
            <p className="mt-1 text-sm text-black/70">
              Serving Eastern North Carolina. Call if you’re outside the area and we’ll confirm.
            </p>
          </div>
          <a
            href="tel:+19194292619"
            className="w-fit rounded-xl bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Call (919) 429-2619
          </a>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-black/10">
          {/* NOTE: This is a generic Goldsboro map (no address needed). */}
          <iframe
            title="Goldsboro, NC Map"
            src="https://www.google.com/maps?q=Goldsboro%2C%20NC&z=11&output=embed"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}