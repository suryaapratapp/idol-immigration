import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  MapPinned,
  MessageCircle,
  PlaneTakeoff,
  Radar,
  ShieldCheck
} from "lucide-react";
import { whatsappLink } from "@/data/site";
import { InteractiveRouteMap } from "./InteractiveRouteMap";
import { SectionHeader } from "./SectionHeader";

const planningSignals = [
  "Profile strength",
  "Budget comfort",
  "Document readiness",
  "Settlement plan"
];

const planningLanes = [
  {
    icon: FileSearch,
    label: "Review",
    text: "Academics, work history, funds and previous travel are checked together."
  },
  {
    icon: MapPinned,
    label: "Route",
    text: "Countries are compared by fit, not hype or one-size advice."
  },
  {
    icon: ShieldCheck,
    label: "Risk",
    text: "Weak SOP, funds gaps and unclear purpose are identified early."
  },
  {
    icon: PlaneTakeoff,
    label: "Arrival",
    text: "Accommodation, banking, CV and first-month confidence are planned."
  }
];

export function GlobalCommandCenter() {
  return (
    <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-24">
      <div className="absolute inset-0 premium-grid opacity-45" />
      <div className="absolute inset-0 route-lines opacity-65" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/80 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="self-center">
          <SectionHeader
            eyebrow="Global route intelligence"
            title="An International Plan Should Feel Clear Before It Feels Exciting."
            copy="Idol helps you turn a big overseas dream into a practical route map: country comparison, document strength, cost reality and settlement preparation in one calm conversation."
            dark
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {planningSignals.map((signal) => (
              <div
                className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white/80 backdrop-blur"
                key={signal}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                {signal}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-midnight shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
              href={whatsappLink("Hi Idol Immigration, I want a route plan for moving abroad.")}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Build my route plan
            </a>
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:bg-white/10"
              href="/countries"
            >
              Compare countries
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[8px] border border-cyan/10 bg-white/[0.03] blur-sm" />
          <div className="relative overflow-hidden rounded-[8px] border border-white/15 bg-white/[0.075] p-4 shadow-glow backdrop-blur-2xl sm:p-5">
            <div className="absolute inset-0 aurora-panel opacity-90" />
            <div className="absolute inset-0 scan-lines opacity-25" />

            <div className="relative grid gap-4 xl:grid-cols-[0.86fr_1.14fr]">
              <div className="grid gap-4">
                <div className="rounded-[8px] border border-white/10 bg-midnight/65 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                        India profile
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold">Route scanner</h3>
                    </div>
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan">
                      <Radar className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {planningLanes.map((lane) => {
                      const Icon = lane.icon;

                      return (
                        <div className="flex gap-3 rounded-[8px] border border-white/10 bg-white/[0.06] p-3" key={lane.label}>
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px] bg-cyan/10 text-cyan">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-white">{lane.label}</p>
                            <p className="mt-1 text-xs leading-5 text-white/60">{lane.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-[8px] border border-gold/20 bg-gold/10 p-5">
                  <p className="text-sm font-semibold text-gold">Premium planning promise</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    Clear advice, realistic route comparison and no approval guarantees.
                  </p>
                </div>
              </div>

              <InteractiveRouteMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
