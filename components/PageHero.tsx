import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, copy, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-24">
      <div className="absolute inset-0 glass-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal sm:text-6xl">
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
