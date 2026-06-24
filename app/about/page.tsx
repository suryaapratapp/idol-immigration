import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FounderCard } from "@/components/FounderCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustBar } from "@/components/TrustBar";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { founders } from "@/data/founders";
import { site, trustStrip } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Idol Immigration",
  description:
    "Learn how Idol Immigration guides Indian applicants with founder-led, lived-abroad visa, study and settlement guidance.",
  path: "/about",
  keywords: ["immigration consultant for Indians", "overseas settlement support"]
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Idol Immigration"
        title="Built for Indians Who Want Smarter International Decisions"
        copy="Idol Immigration & Overseas Consultants helps Indian students, families, professionals, couples and entrepreneurs plan international moves with clarity, documentation discipline and practical settlement preparation."
      >
        <TrustBar items={trustStrip} />
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Our position"
              title="Not Just Visa Filing. Real Guidance From People Who Have Lived the Journey."
              copy="The old consultancy model often stops at forms. Idol is designed to help applicants understand the full journey: route choice, documents, risk, cost, confidence and the first weeks abroad."
            />
          </div>
          <div className="grid gap-5 text-sm leading-7 text-slate-600">
            <p>
              At Idol Immigration & Overseas Consultants, guidance begins with
              eligibility and pathway clarity. The team reviews applicant goals,
              documentation, budget, timing and likely risk areas before suggesting
              a route.
            </p>
            <p>
              Services include study abroad counselling, student visa support,
              tourist or visitor visa guidance, permanent residency and skilled
              migration planning, dependent visa support, spouse and family visa
              support, business and start-up route guidance, IELTS or interview
              preparation, visa refusal review and post-arrival support.
            </p>
            <p>
              The promise is simple: no blind guarantees, no cheap agent-style
              pressure, and no pretending that every route is right for every
              applicant.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Founder story"
            title="Jagdeep and Pooja Understand the Move Beyond the Application"
            copy="After living abroad themselves, they saw the gap most applicants face: people receive visa advice, but not enough real-life preparation."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {founders.map((founder) => (
              <FounderCard founder={founder} key={founder.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Assessment of eligibility", "Review profile, goals and practical route fit before major commitments."],
              ["Preparation of documents", "Plan education, employment, funds, relationship, invitation and statement evidence."],
              ["Post-arrival services", "Prepare for accommodation, job search basics, local life and settling confidence."]
            ].map(([title, copy]) => (
              <article className="rounded-[8px] border border-slate-200 bg-mist/35 p-6" key={title}>
                <h2 className="text-xl font-semibold text-ink">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <WhatsAppCTA
              title="Get a clear first review"
              copy="Share your goal and profile on WhatsApp. We will help you understand what to check first."
              message="Hi Idol Immigration, I want an initial profile review."
              secondaryHref="/founders"
              secondaryLabel="Founder story"
            />
          </div>
          <div className="mt-8 text-center">
            <Link className="inline-flex items-center gap-2 text-sm font-semibold text-ocean" href="/contact">
              Contact {site.shortName}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
