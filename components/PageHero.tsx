import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, copy, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-br from-white via-ivory to-mist py-16 text-ink sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(224,122,95,0.13),transparent_32%,rgba(36,104,95,0.08))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex rounded-full border border-gold/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold shadow-sm">
          {eyebrow}
        </p>
        <h1 className="text-balance mt-5 max-w-4xl text-4xl font-semibold tracking-normal sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          {copy}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
