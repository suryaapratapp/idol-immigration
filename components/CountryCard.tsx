import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Country } from "@/data/countries";
import { whatsappLink } from "@/data/site";

type CountryCardProps = {
  country: Country;
};

export function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
      <div
        aria-label={country.image.alt}
        className="relative min-h-36 bg-cover bg-center"
        role="img"
        style={{ backgroundImage: `url(${country.image.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {country.region}
            </p>
            <h3 className="mt-2 flex items-center gap-2 text-2xl font-semibold text-white">
              <span aria-hidden="true">{country.flag}</span>
              {country.name}
            </h3>
          </div>
        </div>
      </div>
      <div className="grid gap-4 p-5">
        <p className="text-sm leading-7 text-slate-600">{country.bestFor}</p>
        <div className="flex flex-wrap gap-2">
          {country.visasAvailable.slice(0, 4).map((route) => (
            <span className="rounded-full border border-stone-200 bg-ivory px-3 py-1 text-xs font-semibold text-slate-600" key={route}>
              {route}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-3 px-5 pb-5">
        <Link
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-gold hover:text-ink"
          href={`/countries/${country.slug}`}
        >
          View details
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-ink transition hover:border-gold"
          href={whatsappLink(`Hi Idol Immigration, I want guidance for ${country.name}.`)}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Enquire
        </a>
      </div>
    </article>
  );
}
