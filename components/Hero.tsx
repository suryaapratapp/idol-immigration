import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  MapPinned,
  MessageCircle,
  Radar,
  ShieldCheck
} from "lucide-react";
import { featuredServices } from "@/data/services";
import { trustStrip, whatsappLink } from "@/data/site";
import { InteractiveRouteMap } from "./InteractiveRouteMap";
import { TrustBar } from "./TrustBar";

const routeChecks = ["Profile reviewed", "Country compared", "Documents mapped"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/global-journey-hero.png"
          alt="Global migration routes from India visualized across a premium digital globe"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/92 to-midnight/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/10 via-transparent to-midnight/85" />
        <div className="absolute inset-0 premium-grid opacity-35" />
        <div className="absolute inset-0 route-lines opacity-60" />
        <div className="absolute inset-0 scan-lines opacity-20" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-midnight/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold shadow-gold backdrop-blur">
            <Radar className="h-3.5 w-3.5" aria-hidden="true" />
            Global migration mentor for Indians
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">
            Move Abroad With Clarity, Not Confusion.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            From choosing the right country to preparing your application and
            settling after arrival, Idol Immigration guides Indian students,
            families and professionals with practical India-to-world planning,
            document clarity and settlement readiness.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold transition hover:-translate-y-0.5 hover:bg-white"
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Start on WhatsApp
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-gold"
              href="#visa-options"
            >
              Explore Visa Options
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8">
            <TrustBar items={trustStrip} />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[8px] border border-cyan/10 bg-white/[0.03] blur-sm" />
          <div className="relative overflow-hidden rounded-[8px] border border-white/15 bg-white/[0.08] p-4 shadow-glow backdrop-blur-2xl sm:p-5">
            <div className="absolute inset-0 aurora-panel opacity-80" />
            <div className="absolute inset-0 premium-grid opacity-35" />
            <div className="relative">
              <div className="flex flex-col gap-4 rounded-[8px] border border-white/10 bg-midnight/70 p-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
                    India to world route desk
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold">Plan study, visit, work or settlement</h2>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-white/65">
                    A premium planning view for country fit, document readiness and first-month arrival confidence.
                  </p>
                </div>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan">
                  <Globe2 className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>

              <div className="mt-4">
                <InteractiveRouteMap variant="hero" />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {routeChecks.map((check) => (
                  <div
                    className="rounded-[8px] border border-white/10 bg-white/[0.08] p-3 text-sm font-semibold text-white/80"
                    key={check}
                  >
                    <CheckCircle2 className="mb-2 h-4 w-4 text-cyan" aria-hidden="true" />
                    {check}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {featuredServices.map((service, index) => (
                  <a
                    className="group rounded-[8px] border border-white/15 bg-midnight/60 p-4 text-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-gold hover:bg-white/[0.12]"
                    href={`/services/${service.slug}`}
                    key={service.slug}
                  >
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      0{index + 1}
                    </span>
                    <h2 className="mt-3 text-base font-semibold text-white">{service.shortTitle}</h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/60">
                      {service.summary}
                    </p>
                  </a>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-[8px] border border-cyan/20 bg-cyan/10 p-4 text-sm leading-6 text-white/70">
                <MapPinned className="h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
                Not just visa filing. Real guidance from people who understand moving countries.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
