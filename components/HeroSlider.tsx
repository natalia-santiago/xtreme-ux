"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  subtitle: string;
};

function ArrowLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function HeroSlider() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/hero/slide-1.png",
        alt: "Concrete cutting and demolition work on a job site in Goldsboro North Carolina",
        eyebrow: "Concrete Cutting & Demolition • Goldsboro, NC",
        subtitle:
          "Fast, clean, and precise concrete cutting and demolition for residential, commercial, and contractor projects across Eastern North Carolina.",
      },
      {
        src: "/hero/slide-2.png",
        alt: "Worker performing concrete slab cutting and wall cutting with professional saw equipment",
        eyebrow: "Core Drilling • Slab Cutting • Wall Cutting",
        subtitle:
          "Professional equipment, controlled work areas, and accurate cutting for slabs, walls, openings, and structural concrete modifications.",
      },
      {
        src: "/hero/slide-3.png",
        alt: "Concrete saw cutting through a slab for demolition and project support",
        eyebrow: "Licensed & Insured • Serving Eastern NC",
        subtitle:
          "From cut lines to demolition, we work efficiently, prioritize safety, and help keep your project moving with controlled, dependable execution.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = slides.length;
  const activeSlide = slides[index];

  useEffect(() => {
    if (paused || total <= 1) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 6500);

    return () => window.clearInterval(id);
  }, [paused, total]);

  const goTo = (i: number) => setIndex(i);
  const prev = () => setIndex((current) => (current - 1 + total) % total);
  const next = () => setIndex((current) => (current + 1) % total);

  return (
    <section
      className="relative overflow-hidden rounded-[28px] border border-black/10 shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Homepage hero"
    >
      <div className="relative h-[560px] sm:h-[580px] lg:h-[640px]">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/56 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-transparent to-transparent" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 sm:pt-0">
            <div className="max-w-[860px]">
              <p className="inline-flex rounded-full border border-white/20 bg-white/18 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:text-xs">
                {activeSlide.eyebrow}
              </p>

              <h1 className="mt-4 max-w-[15ch] text-[1.85rem] font-extrabold leading-[1.02] tracking-tight text-white sm:max-w-[16ch] sm:text-5xl lg:max-w-[17ch] lg:text-[3.55rem]">
                Concrete Cutting & Demolition in Goldsboro, NC
              </h1>

              <p className="mt-4 max-w-[36ch] text-[0.98rem] leading-7 text-white/95 sm:mt-5 sm:max-w-[62ch] sm:text-[1.08rem] sm:leading-8">
                {activeSlide.subtitle}
              </p>

              <Link
                href="/services"
                className="mt-3 inline-block text-sm font-semibold text-white/90 underline underline-offset-4 transition hover:text-white sm:hidden"
              >
                View services →
              </Link>

              <div className="mt-5 flex flex-wrap gap-2.5 text-sm font-semibold text-white/92 sm:mt-6 sm:gap-3">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                  Same-day or 24-hour response
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                  Serving Eastern North Carolina
                </span>
                <span className="hidden rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-sm sm:inline-flex">
                  Residential, commercial, and contractor work
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a30f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Request a Quote
                </Link>

                <a
                  href="tel:+12525826094"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Call (252) 582-6094
                </a>

                <Link
                  href="/services"
                  className="hidden min-h-[48px] items-center justify-center rounded-xl border border-white/20 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:inline-flex"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-5 flex items-center gap-2 sm:mt-6">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                      i === index
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/45 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {total > 1 ? (
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-between px-3 sm:flex">
            <button
              type="button"
              onClick={prev}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white transition hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Previous slide"
            >
              <ArrowLeftIcon />
            </button>

            <button
              type="button"
              onClick={next}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white transition hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Next slide"
            >
              <ArrowRightIcon />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}