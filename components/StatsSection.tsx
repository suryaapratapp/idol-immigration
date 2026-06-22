import { stats } from "@/data/site";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-20">
      <div className="absolute inset-0 premium-grid opacity-35" />
      <div className="absolute inset-0 route-lines opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            Trust signals
          </p>
          <h2 className="text-balance mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Experience, Network and Perspective for Serious Overseas Decisions
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map((stat) => (
            <div
              className="rounded-[8px] border border-white/10 bg-white/[0.08] p-5 text-center shadow-glow backdrop-blur transition hover:-translate-y-1 hover:border-gold/45"
              key={stat.label}
            >
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/65">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs leading-6 text-white/50">
          Figures are based on Idol Immigration&apos;s historical service records and
          should be verified before final publishing.
        </p>
      </div>
    </section>
  );
}
