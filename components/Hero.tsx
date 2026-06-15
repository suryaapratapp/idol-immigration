import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { featuredServices } from "@/data/services";
import { trustStrip, whatsappLink } from "@/data/site";
import { TrustBar } from "./TrustBar";

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
          className="object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/25" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan backdrop-blur">
            Global migration mentor for Indians
          </p>
          <h1 className="text-4xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">
            Move Abroad With Clarity, Not Confusion.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            From choosing the right country to preparing your application and
            settling after arrival, Idol Immigration guides Indian students,
            families and professionals with practical, founder-led overseas
            experience.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-midnight shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Start on WhatsApp
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan"
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

        <div className="grid gap-4 sm:grid-cols-2 lg:pt-24">
          {featuredServices.map((service, index) => (
            <a
              className="group rounded-[8px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan/60 hover:bg-white/20"
              href={`/services/${service.slug}`}
              key={service.slug}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                0{index + 1}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-white">{service.shortTitle}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/60">
                {service.summary}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
