import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { OfficialSourceNotice } from "@/components/OfficialSourceNotice";
import { PageHero } from "@/components/PageHero";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { resources } from "@/data/resources";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Study Abroad & Visa Resources",
  description:
    "SEO-ready guides for Indian applicants on student visas, visitor visas, SOPs, refusal review, cost planning and settlement.",
  path: "/resources",
  keywords: [
    "study abroad consultant India",
    "visitor visa consultant India",
    "visa refusal help India",
    "overseas settlement support"
  ]
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practical Guides for Students, Parents and Future Migrants"
        copy="Clear, editable guide pages designed for future CMS expansion. Rule-specific content should be verified with official government sources before publishing."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Guide hub"
            title="What Applicants Search Before They Decide"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Link
              className="group flex h-full flex-col rounded-[8px] border border-gold/30 bg-ivory p-6 shadow-sm transition hover:-translate-y-1 hover:border-ocean hover:shadow-xl"
              href="/founders/uk-experience"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ocean">
                    UK Settlement
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-ink">
                    Founders&apos; UK Arrival & Life Guide
                  </h3>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                  <Home className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Accommodation, bank accounts, SIM, groceries, taxis, jobs,
                utilities, car buying, discounts, scam safety and emotional
                preparation for newcomers to the UK.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ocean transition group-hover:text-ink">
                Read UK guide
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
            {resources.map((resource) => (
              <ResourceCard resource={resource} key={resource.slug} />
            ))}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
            <OfficialSourceNotice text="Visa rules change frequently. Verify with official government sources before publishing route-specific checklist or eligibility content." />
            <WhatsAppCTA
              title="Want guidance instead of guessing?"
              copy="Send your profile and target country on WhatsApp. Idol can help you decide what guide or service fits your situation."
              message="Hi Idol Immigration, I read your resources and want guidance for my situation."
            />
          </div>
        </div>
      </section>
    </>
  );
}
