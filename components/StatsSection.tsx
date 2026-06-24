import { stats } from "@/data/site";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 text-ink sm:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Trust signals
          </p>
          <h2 className="text-balance mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Experience, Network and Perspective for Serious Overseas Decisions
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map((stat) => (
            <div
              className="rounded-[8px] border border-stone-200 bg-ivory p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-gold/45 hover:bg-white"
              key={stat.label}
            >
              <p className="text-3xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs leading-6 text-slate-500">
          Figures are based on Idol Immigration&apos;s historical service records and
          should be verified before final publishing.
        </p>
      </div>
    </section>
  );
}
