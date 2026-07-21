import Link from "next/link";
import { ArrowRight, Binary, Calculator, CalendarClock, ChartNoAxesCombined, Scale, SearchCheck } from "lucide-react";
import { momentumTools } from "@/data/tools";

const icons = [CalendarClock, SearchCheck, Scale, Calculator, ChartNoAxesCombined];

export function MomentumToolsSpotlight() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
      <div className="absolute inset-0 premium-grid opacity-25" />
      <div className="absolute inset-0 route-lines opacity-30" />
      <div className="absolute inset-0 scan-lines opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff8a91]">
              <Binary className="h-4 w-4" aria-hidden="true" />
              Momentum Tools
            </p>
            <h2 className="mt-6 text-balance text-3xl font-extrabold sm:text-5xl">
              Put sharper numbers behind your next move.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Model deadlines, compare destinations, check occupation demand, calculate CRS and read recent Express Entry cutoffs before speaking with an expert.
            </p>
          </div>
          <Link
            className="inline-flex min-h-12 w-fit items-center justify-center gap-2 bg-gold px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white hover:text-ink"
            href="/tools"
          >
            Open all tools
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-5">
          {momentumTools.map((tool, index) => {
            const Icon = icons[index];
            return (
              <Link
                className="group min-h-56 border-b border-r border-white/15 bg-white/[0.045] p-5 transition hover:bg-white/[0.09]"
                href={`/tools/${tool.slug}`}
                key={tool.slug}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center bg-gold text-white">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-extrabold text-white/35">0{index + 1}</span>
                </div>
                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff8a91]">{tool.eyebrow}</p>
                <h3 className="mt-2 text-lg font-extrabold leading-6 text-white">{tool.title}</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-white/60 transition group-hover:text-white">
                  Launch tool
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
