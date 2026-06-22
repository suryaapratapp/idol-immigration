import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Resource } from "@/data/resources";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan/60 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ocean via-cyan to-gold opacity-75" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ocean">
            {resource.category}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-ink">{resource.title}</h3>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-mist text-ocean transition group-hover:border-gold/60 group-hover:bg-ink group-hover:text-cyan">
          <BookOpen className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{resource.description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {resource.readTime}
      </p>
      <Link
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ocean transition group-hover:text-ink"
        href={`/resources/${resource.slug}`}
      >
        Read guide
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
