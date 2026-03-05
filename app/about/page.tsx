export default function About() {
    return (
      <>
        {/* HERO */}
        <section className="bg-[#0d0d0d] text-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-sm tracking-widest text-white/70">ABOUT</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
              Built for clean cuts, safe work,
              <span className="text-[#c1121f]"> and fast scheduling</span>
            </h1>
            <p className="mt-4 max-w-3xl text-white/70">
              Xtreme Concrete Cutting & Demolition LLC is based in Goldsboro, NC.
              We provide concrete cutting, core drilling, and demolition services for
              residential and commercial projects across Eastern North Carolina.
            </p>
  
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="rounded-md bg-[#c1121f] px-6 py-3 text-center font-semibold hover:bg-[#8f0e16]"
              >
                Request a Quote
              </a>
              <a
                href="tel:+19194292619"
                className="rounded-md border border-white/25 px-6 py-3 text-center font-semibold hover:border-[#c1121f] hover:text-[#c1121f]"
              >
                Call (919) 429-2619
              </a>
            </div>
          </div>
        </section>
  
        {/* CONTENT */}
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="rounded-2xl border border-black/10 p-6 shadow-sm">
              <h2 className="text-2xl font-bold">What we do</h2>
              <p className="mt-3 text-sm text-black/70">
                We specialize in precision concrete cutting and demolition work that
                supports remodels, new builds, commercial fit-outs, and utility installs.
              </p>
  
              <ul className="mt-5 space-y-2 text-sm text-black/80">
                <li>• Core drilling for plumbing, electrical, HVAC, and structural penetrations</li>
                <li>• Slab cutting and flat sawing for floors, roads, and driveways</li>
                <li>• Wall cutting for door, window, and utility openings</li>
                <li>• Reinforced concrete cutting when structural steel is present</li>
                <li>• Demolition and concrete removal for renovations and rebuilds</li>
              </ul>
            </div>
  
            <div className="rounded-2xl bg-black/5 p-6">
              <h2 className="text-2xl font-bold">Why customers hire us</h2>
  
              <div className="mt-5 grid gap-4">
                <div className="rounded-xl border border-black/10 bg-white p-4">
                  <p className="font-semibold">Safety-first</p>
                  <p className="mt-1 text-sm text-black/70">
                    Controlled cutting methods, clean work areas, and jobsite awareness.
                  </p>
                </div>
  
                <div className="rounded-xl border border-black/10 bg-white p-4">
                  <p className="font-semibold">Clean, accurate cuts</p>
                  <p className="mt-1 text-sm text-black/70">
                    Precision openings with attention to layout, depth, and finish.
                  </p>
                </div>
  
                <div className="rounded-xl border border-black/10 bg-white p-4">
                  <p className="font-semibold">Fast scheduling</p>
                  <p className="mt-1 text-sm text-black/70">
                    Quick response times and clear communication from quote to completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* SERVICE AREA */}
          <div className="mt-10 rounded-2xl border border-black/10 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Service area</h3>
            <p className="mt-2 text-sm text-black/70">
              Based in Goldsboro, NC — serving surrounding areas across Eastern North Carolina.
              If you’re unsure, request a quote and tell us your job location.
            </p>
  
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/services"
                className="inline-block rounded-md border border-black/20 px-6 py-3 font-semibold hover:border-[#c1121f] hover:text-[#c1121f]"
              >
                View Services
              </a>
              <a
                href="/contact"
                className="inline-block rounded-md bg-[#c1121f] px-6 py-3 font-semibold text-white hover:bg-[#8f0e16]"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }