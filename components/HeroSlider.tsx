"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function HeroSlider() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/hero/slide-1.png",
        alt: "Excavator performing demolition on a job site",
        eyebrow: "Xtreme Concrete Cutting & Demolition",
        title: "Demolition done safely, cleanly, and on schedule.",
        subtitle:
          "Selective demo, removal, and site prep with clear communication and professional execution.",
        primaryCta: { label: "Request a Quote", href: "/contact" },
        secondaryCta: { label: "Call (252) 582-6094", href: "tel:+12525826094" },
      },
      {
        src: "/hero/slide-2.png",
        alt: "Worker using a handheld concrete saw for cutting",
        eyebrow: "Concrete Cutting",
        title: "Precise concrete cutting for clean results.",
        subtitle:
          "Saw cutting for slabs, driveways, walkways, and openings — accurate lines, controlled work area.",
        primaryCta: { label: "Get Pricing", href: "/contact" },
        secondaryCta: { label: "View Services", href: "/services" },
      },
      {
        src: "/hero/slide-3.png",
        alt: "Wet concrete saw cutting through a slab",
        eyebrow: "Fast • Reliable • Professional",
        title: "From demo to cut lines — we handle the tough work.",
        subtitle:
          "We work efficiently, prioritize safety, and leave your site as clean as possible when the job is done.",
        primaryCta: { label: "Request a Quote", href: "/contact" },
        secondaryCta: { label: "Reviews", href: "/reviews" },
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = slides.length;

  useEffect(() => {
    if (paused || total <= 1) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);

    return () => window.clearInterval(id);
  }, [paused, total]);

  const goTo = (i: number) => setIndex(i);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-black/10 shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Homepage hero"
    >
      <div className="relative h-[520px] sm:h-[580px]">
        {/* Crossfade images */}
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i === index ? "false" : "true"}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="max-w-2xl">
              {slides[index].eyebrow ? (
                <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/20">
                  {slides[index].eyebrow}
                </p>
              ) : null}

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                {slides[index].title}
              </h1>

              <p className="mt-4 text-base text-white/90 sm:text-lg">
                {slides[index].subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={slides[index].primaryCta.href}
                  className="rounded-xl bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  {slides[index].primaryCta.label}
                </Link>

                {slides[index].secondaryCta ? (
                  <a
                    href={slides[index].secondaryCta.href}
                    className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
                  >
                    {slides[index].secondaryCta.label}
                  </a>
                ) : null}
              </div>

              {/* Dots */}
              <div className="mt-7 flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/45 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index ? "true" : "false"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Prev/Next */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
          <button
            onClick={prev}
            className="pointer-events-auto rounded-full bg-black/35 p-3 text-white ring-1 ring-white/15 hover:bg-black/45"
            aria-label="Previous slide"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            onClick={next}
            className="pointer-events-auto rounded-full bg-black/35 p-3 text-white ring-1 ring-white/15 hover:bg-black/45"
            aria-label="Next slide"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}