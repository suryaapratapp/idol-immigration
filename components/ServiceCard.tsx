import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/data/services";
import { whatsappLink } from "@/data/site";

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
};

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan/50 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-cyan to-ocean opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan/[0.08] via-transparent to-gold/10 opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
            {service.eyebrow}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-ink">{service.title}</h3>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-mist text-ocean transition group-hover:border-gold/60 group-hover:bg-ink group-hover:text-cyan">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{service.summary}</p>
      {!compact ? (
        <div className="mt-5 grid gap-2 text-sm text-slate-600">
          {service.helpsWith.slice(0, 3).map((item) => (
            <p className="flex gap-2" key={item}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{item}</span>
            </p>
          ))}
        </div>
      ) : null}
      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <Link
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-ocean"
          href={`/services/${service.slug}`}
        >
          Learn more
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-ink transition hover:border-gold"
          href={whatsappLink(service.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
        >
          {service.cta}
        </a>
      </div>
    </article>
  );
}
