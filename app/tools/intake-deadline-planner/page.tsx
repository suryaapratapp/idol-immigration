import type { Metadata } from "next";
import { IntakeDeadlinePlanner } from "@/components/tools/IntakeDeadlinePlanner";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import intakePlannerData from "@/data/intake-planner.json";
import { absoluteUrl, createMetadata, faqSchema } from "@/lib/seo";
import type { IntakePlannerConfig } from "@/lib/intakePlanner";

const description = "Build a personalised reverse timeline for a study, work or permanent residence intake, including English tests, funds, documents, visa and travel milestones.";

export const metadata: Metadata = createMetadata({
  title: "Intake Deadline Planner",
  description,
  path: "/tools/intake-deadline-planner",
  keywords: ["study intake deadline planner", "visa timeline", "September 2026 intake", "study abroad checklist"]
});

const faqs = [
  {
    question: "Are these final university or visa deadlines?",
    answer: "No. They are conservative planning targets designed to preserve time for results, document corrections and processing. Always verify final dates with the institution and official immigration authority."
  },
  {
    question: "What if a target date is already past?",
    answer: "Treat it as a prompt to review feasibility immediately. A consultant may be able to resequence tasks, identify a later deadline or recommend a safer intake."
  },
  {
    question: "Can I use the plan for work or permanent residence?",
    answer: "Yes. Purpose-specific milestone labels and lead times are applied for study, work and permanent residence planning."
  }
];

export default function IntakeDeadlinePlannerPage() {
  const config = intakePlannerData as IntakePlannerConfig;
  const webApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Idol Immigration Intake Deadline Planner",
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: absoluteUrl("/tools/intake-deadline-planner"),
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }
  };

  return (
    <>
      <JsonLd data={[webApplication, faqSchema(faqs)]} />
      <PageHero
        eyebrow="MOMENTUM TOOL 01"
        title="Know what must happen before your intake date."
        copy="Set the destination and intake once. The planner works backwards through English testing, applications, funds, documents, visa submission and arrival so the next deadline becomes visible."
      />
      <section className="bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <IntakeDeadlinePlanner config={config} />
        </div>
      </section>
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="HOW TO USE IT"
            title="A planning target is more useful than a final deadline"
            copy="Final submission dates leave no room for a late test score, delayed bank letter or document correction. This tool intentionally pulls work forward, then marks pressure points that need a human feasibility check."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {faqs.map((faq) => (
              <article className="rounded-[8px] border border-slate-200 bg-ivory p-5" key={faq.question}>
                <h2 className="text-base font-extrabold text-ink">{faq.question}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
