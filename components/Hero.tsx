import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle, Star } from "lucide-react";
import { featuredServices } from "@/data/services";
import { stats, whatsappLink } from "@/data/site";
import { TrustBar } from "./TrustBar";

const routeChecks = [
  "Study Abroad",
  "Tourist / Visitor Visa",
  "PR & Skilled Migration",
  "Work Visa",
  "Dependent Visa",
  "MBBS Abroad"
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-ivory to-mist text-ink">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,164,93,0.14),transparent_34%,rgba(22,61,99,0.07))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold shadow-sm">
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            Premium immigration consultant for Indians
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">
            Move Abroad With Clarity, Confidence and Class.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Idol Immigration helps Indian students, families and professionals
            plan study abroad, PR, work visa, tourist visa, MBBS abroad and
            dependent visa journeys with clear eligibility review, document
            planning and practical guidance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(15,23,42,0.18)] transition hover:bg-gold hover:text-ink"
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Enquire Now
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm transition hover:border-gold"
              href="#services"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8">
            <TrustBar dark={false} items={stats.slice(0, 4).map((item) => `${item.value} ${item.label}`)} />
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[8px] border border-stone-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/global-journey-hero.png"
                alt="Premium global migration planning visual for Indian applicants"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Guidance desk
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Profile-first visa planning
                </h2>
                <p className="mt-2 max-w-md text-sm leading-7 text-white/75">
                  We compare route fit, documents, budget, timelines and risk
                  before you make major commitments.
                </p>
              </div>
            </div>
            <div className="grid gap-3 p-5 sm:grid-cols-2">
              {routeChecks.map((check) => (
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-700" key={check}>
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {check}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {featuredServices.slice(0, 4).map((service) => (
              <a
                className="rounded-[8px] border border-stone-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
                href={`/services/${service.slug}`}
                key={service.slug}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {service.eyebrow}
                </p>
                <h2 className="mt-2 text-base font-semibold text-ink">{service.shortTitle}</h2>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
