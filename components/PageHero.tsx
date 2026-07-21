import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, copy, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-16 text-ink sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(227,27,35,0.08),transparent_32%,rgba(7,29,51,0.07))]" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gold" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex border-l-4 border-gold bg-ivory px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-gold shadow-sm">
          {eyebrow}
        </p>
        <h1 className="text-balance mt-5 max-w-4xl text-4xl font-extrabold tracking-normal sm:text-6xl">
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
