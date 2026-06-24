import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Resource } from "@/data/resources";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-ivory">
        <Image
          src={resource.image.src}
          alt={resource.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/5 to-transparent" />
        <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-white/60 bg-white/95 shadow-lg">
          <Image
            src="/images/logo-idol.png"
            alt="Idol Immigration logo"
            width={44}
            height={44}
            className="h-full w-full object-contain p-1"
          />
        </span>
        <p className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {resource.category}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-ink">{resource.title}</h3>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-stone-200 bg-ivory text-gold transition group-hover:border-gold/60 group-hover:bg-ink">
            <BookOpen className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">{resource.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {resource.badges.slice(0, 3).map((badge) => (
            <span className="rounded-full border border-stone-200 bg-ivory px-3 py-1 text-xs font-semibold text-slate-600" key={badge}>
              {badge}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {resource.readTime}
        </p>
        <Link
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ocean transition group-hover:text-ink"
          href={`/blogs/${resource.slug}`}
        >
          Read detailed guide
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
