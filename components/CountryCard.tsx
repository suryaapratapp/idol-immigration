import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Country } from "@/data/countries";
import { whatsappLink } from "@/data/site";

type CountryCardProps = {
  country: Country;
};

export function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-white/20 bg-white/10 text-white backdrop-blur transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white/20">
      <div
        aria-label={country.image.alt}
        className="relative min-h-48 bg-cover bg-center"
        role="img"
        style={{ backgroundImage: `url(${country.image.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {country.region}
            </p>
            <h3 className="mt-2 flex items-center gap-3 text-2xl font-semibold">
              <span className="text-3xl" aria-hidden="true">{country.flag}</span>
              {country.name}
            </h3>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/25 bg-white/15 text-2xl shadow-lg backdrop-blur">
            <span aria-hidden="true">{country.flag}</span>
          </span>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-gold via-cyan to-white opacity-70" />
      <dl className="grid gap-4 p-6 text-sm leading-7">
        <div>
          <dt className="sr-only">Destination note</dt>
          <dd className="rounded-[8px] border border-white/10 bg-white/10 p-4 text-white/75">
            {country.image.caption}
          </dd>
        </div>
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
      <div className="mt-auto flex flex-wrap gap-3 px-6 pb-6">
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
