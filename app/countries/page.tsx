import type { Metadata } from "next";
import Image from "next/image";
import { CountryCard } from "@/components/CountryCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { countries } from "@/data/countries";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Study, PR & Work Visa by Country | Idol Immigration Gurugram",
  description:
    "Compare UK, Canada, Australia, USA, New Zealand, Europe and UAE options for Indian applicants. Study, PR, work and visitor visa guidance from Idol Immigration, Gurugram.",
  path: "/countries",
  keywords: [
    "immigration consultant for Indians",
    "countries to migrate from India",
    "UK student visa consultant India",
    "Canada study visa consultant",
    "PR visa consultant India"
  ]
});

export default function CountriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Countries"
        title="Compare Your Options Before You Commit"
        copy="Every destination has different costs, timelines, documentation expectations and settlement realities. Idol helps Indian applicants compare options with practical clarity."
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="overflow-hidden rounded-[8px] border border-stone-200 bg-ink shadow-sm">
            <div className="relative h-full min-h-[320px] sm:min-h-[420px]">
              <Image
                src="/images/site/canada-skyline-arrival.jpg"
                alt="Applicant viewing the Toronto skyline while planning a move to Canada"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Destination clarity
                </p>
                <h2 className="mt-2 max-w-xl text-3xl font-semibold text-white">
                  Compare the place, not just the visa category
                </h2>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex flex-col justify-center rounded-[8px] border border-stone-200 bg-white p-6 shadow-sm">
              <SectionHeader
                eyebrow="Country fit"
                title="Look at Cost, Lifestyle, Work Options and Family Comfort Together"
                copy="A strong country choice is practical as well as emotional. Idol helps applicants compare destination realities before choosing Plan A."
              />
            </div>
            <div className="overflow-hidden rounded-[8px] border border-stone-200 bg-ink shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/site/graduates-skyline-celebration.jpg"
                  alt="Graduates celebrating near an international city skyline"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Study outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 text-ink sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Destination comparison"
            title="Choose by Fit, Not Hype"
            copy="Country advice should be matched to your academics, work background, funds, family comfort and long-term plan."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {countries.map((country) => (
              <CountryCard country={country} key={country.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <WhatsAppCTA
            title="Need help comparing countries?"
            copy="Send your academic profile, work history, budget and target timeline. Idol can help you compare the route more sensibly."
            message="Hi Idol Immigration, I want country comparison guidance."
          />
        </div>
      </section>
    </>
  );
}
