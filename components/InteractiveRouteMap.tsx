"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, MapPinned, MessageCircle, PlaneTakeoff, Sparkles } from "lucide-react";
import { countries } from "@/data/countries";
import { whatsappLink } from "@/data/site";

type InteractiveRouteMapProps = {
  variant?: "hero" | "full";
};

export function InteractiveRouteMap({ variant = "full" }: InteractiveRouteMapProps) {
  const routeCountries = useMemo(() => countries.slice(0, 7), []);
  const [selectedSlug, setSelectedSlug] = useState(routeCountries[0]?.slug ?? "uk");
  const selected = routeCountries.find((country) => country.slug === selectedSlug) ?? routeCountries[0];

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[8px] border border-white/10 bg-midnight/70 shadow-glow",
        variant === "hero" ? "p-4" : "p-5"
      ].join(" ")}
    >
      <div className="absolute inset-0 premium-grid opacity-35" />
      <div className="absolute inset-0 route-lines opacity-55" />
      <div className="absolute inset-0 scan-lines opacity-20" />

      <div className="relative grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-48 overflow-hidden rounded-[8px] border border-white/10 bg-midnight/70 p-5">
          <div className="absolute inset-0 aurora-panel opacity-60" />
          <div className="relative flex h-full min-h-40 flex-col justify-between">
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-full border border-gold/35 bg-gold/15 px-4 py-2 text-sm font-semibold text-gold">
                India
              </div>
              <div className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan">
                {selected.flag} {selected.name}
              </div>
            </div>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-gold via-cyan to-transparent" />
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan/35 bg-midnight/85 text-cyan shadow-glow">
                <PlaneTakeoff className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan to-gold" />
            </div>

            <div className="rounded-[8px] border border-white/10 bg-midnight/75 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                Selected route
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {selected.image.caption}
              </p>
            </div>
          </div>
        </div>

        <div className="grid content-start gap-3">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {routeCountries.map((country) => {
              const active = country.slug === selected.slug;

              return (
                <button
                  className={[
                    "min-h-12 rounded-[8px] border px-3 py-2 text-left text-sm font-semibold transition",
                    active
                      ? "border-gold/60 bg-gold/[0.18] text-white shadow-gold"
                      : "border-white/10 bg-white/[0.08] text-white/75 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-white/[0.13] hover:text-white"
                  ].join(" ")}
                  key={country.slug}
                  onClick={() => setSelectedSlug(country.slug)}
                  type="button"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">{country.flag}</span>
                    <span className="truncate">{country.name}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-[8px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-cyan/10 text-cyan">
                <MapPinned className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Best for</p>
                <p className="mt-1 line-clamp-3 text-sm leading-6 text-white/65">
                  {selected.bestFor}
                </p>
              </div>
            </div>
          </div>

          {variant === "full" ? (
            <div className="rounded-[8px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-gold/10 text-gold">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">How Idol helps</p>
                  <p className="mt-1 line-clamp-4 text-sm leading-6 text-white/65">
                    {selected.howIdolHelps}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative mt-4 flex flex-col gap-3 rounded-[8px] border border-white/10 bg-midnight/80 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
            Interactive route planner
          </p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Tap a destination to compare country fit before you commit.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-gold"
            href={`/countries/${selected.slug}`}
          >
            View route
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cyan px-4 py-2 text-sm font-semibold text-midnight transition hover:bg-white"
            href={whatsappLink(`Hi Idol Immigration, I want guidance for ${selected.name}.`)}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Ask
          </a>
        </div>
      </div>
    </div>
  );
}
