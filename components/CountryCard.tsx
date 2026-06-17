import Link from "next/link";
import { ArrowRight, Globe2, MessageCircle } from "lucide-react";
import type { Country } from "@/data/countries";
import { whatsappLink } from "@/data/site";

type CountryCardProps = {
  country: Country;
};

export function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-white/20 bg-white/10 p-6 text-white backdrop-blur transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white/20">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-cyan to-white opacity-70" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {country.region}
          </p>
          <h3 className="mt-3 text-2xl font-semibold">{country.name}</h3>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10">
          <Globe2 className="h-5 w-5 text-gold" aria-hidden="true" />
        </span>
      </div>
      <dl className="mt-5 grid gap-4 text-sm leading-7">
        <div>
          <dt className="font-semibold text-white">Best for</dt>
          <dd className="mt-1 text-white/70">{country.bestFor}</dd>
        </div>
        <div>
          <dt className="font-semibold text-white">Popular routes</dt>
          <dd className="mt-1 text-white/70">{country.popularRoutes.join(", ")}</dd>
        </div>
        <div>
          <dt className="font-semibold text-white">What Indians usually worry about</dt>
          <dd className="mt-1 text-white/70">{country.worries.join(", ")}</dd>
        </div>
        <div>
          <dt className="font-semibold text-white">How Idol helps</dt>
          <dd className="mt-1 text-white/70">{country.howIdolHelps}</dd>
        </div>
      </dl>
      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <Link
          className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white"
          href={`/countries/${country.slug}`}
        >
          Compare route
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-gold"
          href={whatsappLink(`Hi Idol Immigration, I want guidance for ${country.name}.`)}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Ask about this country
        </a>
      </div>
    </article>
  );
}
