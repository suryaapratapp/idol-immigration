import { stats } from "@/data/site";

export function StatsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map((stat) => (
            <div
              className="rounded-[8px] border border-slate-200 bg-mist/40 p-5 text-center"
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
