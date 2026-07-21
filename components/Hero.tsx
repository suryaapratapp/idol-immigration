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
    <section className="relative overflow-hidden bg-white text-ink">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(227,27,35,0.09),transparent_30%,rgba(7,29,51,0.08))]" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gold" />

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-gold bg-ivory px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-gold shadow-sm">
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            Immigration Consultants based in Delhi-NCR
          </p>
          <h1 className="text-balance text-4xl font-extrabold tracking-normal sm:text-6xl lg:text-7xl">
            #1 Best Immigration & Study Abroad Consultant in India
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Idol Immigration helps students, professionals, families and travellers with study visas, PR pathways, work visas, tourist / visitor visas, dependent visas, MBBS abroad guidance, SOP support and visa refusal reviews.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(227,27,35,0.20)] transition hover:bg-ink"
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Enquire Now
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-slate-300 bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-sm transition hover:border-gold hover:text-gold"
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
          <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_28px_80px_rgba(7,29,51,0.12)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/global-journey-hero.png"
                alt="Immigration consultant in Gurugram guiding Indian applicants for study visa, PR, work visa and tourist visa"
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
                <h2 className="mt-2 text-2xl font-extrabold text-white">
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
                className="border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_55px_rgba(7,29,51,0.08)]"
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
