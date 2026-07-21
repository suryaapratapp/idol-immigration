import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  FileScan,
  LockKeyhole,
  MapPinned,
  Sparkles
} from "lucide-react";

const capabilityRows = [
  {
    icon: FileScan,
    title: "CV intelligence",
    copy: "Reads PDF, DOCX and text CVs to identify career signals and evidence gaps."
  },
  {
    icon: BriefcaseBusiness,
    title: "International role matching",
    copy: "Suggests primary and adjacent roles worth testing in overseas job markets."
  },
  {
    icon: MapPinned,
    title: "Country route ranking",
    copy: "Compares your goal, profile, English readiness and budget across destinations."
  }
];

const previewRoutes = [
  { country: "Australia", route: "Skilled pathway", fit: 88 },
  { country: "Canada", route: "Express Entry / PNP", fit: 82 },
  { country: "Germany", route: "Opportunity Card", fit: 76 }
];

export function AIAdvisorSpotlight() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
      <div className="absolute inset-0 premium-grid opacity-20" />
      <div className="absolute inset-0 route-lines opacity-25" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff8a91]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            New AI Pathway Advisor
          </p>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-extrabold sm:text-5xl">
            Turn one CV into a clearer global career plan.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
            Upload your CV, answer a few practical questions and receive an instant shortlist of roles, countries, route gaps and next steps to discuss with an expert.
          </p>

          <div className="mt-8 grid gap-4">
            {capabilityRows.map(({ icon: Icon, title, copy }) => (
              <div className="flex gap-4" key={title}>
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-white/15 bg-white/[0.06] text-[#ff8a91]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/60">{copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white hover:text-ink" href="/ai-pathway-advisor">
              Analyse my profile
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/55">
              <LockKeyhole className="h-4 w-4 text-[#ff8a91]" aria-hidden="true" />
              Private, instant and no sign-up
            </span>
          </div>
        </div>

        <div className="relative border border-white/15 bg-[#0e2b45] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center bg-gold text-white">
                <FileScan className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">Live profile model</p>
                <p className="mt-1 text-sm font-bold text-white">Technology & Data</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1.5 text-xs font-bold text-emerald-300">
              <span className="h-1.5 w-1.5 bg-emerald-300" />
              Analysis ready
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-[0.72fr_1.28fr]">
            <div className="border border-white/10 bg-white/[0.05] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">Readiness</p>
              <p className="mt-3 text-4xl font-extrabold">84<span className="text-base text-white/35">/100</span></p>
              <div className="mt-4 h-1.5 bg-white/10"><span className="block h-full w-[84%] bg-gold" /></div>
              <div className="mt-5 grid gap-2 text-xs text-white/60">
                {[
                  "4 years experience",
                  "Bachelor's degree",
                  "Strong CV evidence"
                ].map((item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <Check className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              {previewRoutes.map((route, index) => (
                <div className="border border-white/10 bg-white/[0.05] p-4" key={route.country}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-[#ff8a91]">#{index + 1} MATCH</p>
                      <p className="mt-1 text-sm font-extrabold text-white">{route.country}</p>
                      <p className="mt-1 text-xs text-white/50">{route.route}</p>
                    </div>
                    <span className="text-xl font-extrabold text-white">{route.fit}<span className="text-xs text-white/35">%</span></span>
                  </div>
                  <div className="mt-3 h-1 bg-white/10"><span className="block h-full bg-gold" style={{ width: `${route.fit}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
