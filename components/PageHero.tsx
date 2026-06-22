import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, copy, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-midnight via-ink to-ocean py-16 text-white sm:py-24">
      <div className="absolute inset-0 premium-grid opacity-35" />
      <div className="absolute inset-0 route-lines opacity-45" />
      <div className="absolute inset-0 scan-lines opacity-15" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex rounded-full border border-gold/30 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold backdrop-blur">
          {eyebrow}
        </p>
        <h1 className="text-balance mt-5 max-w-4xl text-4xl font-semibold tracking-normal sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
          {copy}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
