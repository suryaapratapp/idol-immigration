import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FounderCard } from "@/components/FounderCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { founders } from "@/data/founders";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Founders Jagdeep and Pooja",
  description:
    "Meet Jagdeep and Pooja, the founder-led team behind Idol Immigration's practical India-to-world migration guidance.",
  path: "/founders",
  keywords: ["immigration consultant for Indians", "overseas settlement support"]
});

export default function FoundersPage() {
  return (
    <>
      <PageHero
        eyebrow="Founders"
        title="People Who Have Lived Abroad, Not Just Filed Forms"
        copy="Jagdeep and Pooja bring an India + UK perspective to visa, study abroad and settlement guidance, with a practical understanding of what applicants and families worry about."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {founders.map((founder) => (
              <FounderCard founder={founder} key={founder.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Founder-led difference"
            title="The Real Journey Is Practical, Emotional and Administrative"
            copy="Preparing documents is one part. Moving countries also means understanding accommodation, local systems, part-time work, budgeting, confidence, culture and family expectations."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Preparing documents with consistency and purpose.",
              "Applying with realistic timelines and risk awareness.",
              "Moving with a plan for accommodation and local basics.",
              "Building confidence for interviews, work readiness and settling."
            ].map((item) => (
              <article className="rounded-[8px] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600" key={item}>
                {item}
              </article>
            ))}
          </div>
          <Link
            className="mt-8 flex items-center justify-between gap-4 rounded-[8px] border border-gold/30 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-ocean hover:shadow-xl"
            href="/founders/uk-experience"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-ocean">
                New UK experience guide
              </span>
              <span className="mt-2 block text-xl font-semibold text-ink">
                Read Jagdeep and Pooja&apos;s practical UK arrival guide
              </span>
              <span className="mt-2 block text-sm leading-7 text-slate-600">
                Rooms, banking, SIM, groceries, transport, utilities, jobs,
                discounts, car buying, scams and emotional preparation.
              </span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-ocean" aria-hidden="true" />
          </Link>
          <div className="mt-10">
            <WhatsAppCTA
              title="Ask for founder-led guidance"
              copy="Tell us your situation and target country. We will help you understand the route, risks and preparation."
              message="Hi Idol Immigration, I want founder-led guidance for my overseas plan."
            />
          </div>
        </div>
      </section>
    </>
  );
}
