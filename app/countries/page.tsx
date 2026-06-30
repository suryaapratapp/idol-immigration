import type { Metadata } from "next";
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
