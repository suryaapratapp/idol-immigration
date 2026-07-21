import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ExpressEntryTracker } from "@/components/tools/ExpressEntryTracker";
import { getDraws } from "@/lib/expressEntry";
import { absoluteUrl, createMetadata, faqSchema } from "@/lib/seo";

const description = "Track recent official Canada Express Entry invitation rounds, filter by draw type and compare your CRS score with recent cutoffs.";
const faqs = [
  { question: "Does meeting a past CRS cutoff mean I would receive an invitation?", answer: "No. You must also have been eligible for that programme or category, have an active profile and satisfy the round's tie-breaking and other instructions." },
  { question: "Why are PNP cutoffs much higher?", answer: "A provincial nomination adds substantial CRS points. PNP-only cutoffs should not be compared directly with CEC or category-based rounds." },
  { question: "Can past cutoffs predict the next draw?", answer: "No. Round type, pool composition and invitation volume change. History is useful context, not a forecast." }
];

export const metadata: Metadata = createMetadata({
  title: "Express Entry Draw Tracker",
  description,
  path: "/tools/express-entry-tracker",
  keywords: ["Express Entry draw", "latest CRS cutoff", "Canada CRS tracker", "Express Entry invitations"]
});

export default async function ExpressEntryTrackerPage() {
  const data = await getDraws();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Idol Immigration Express Entry Draw Tracker",
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: absoluteUrl("/tools/express-entry-tracker"),
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    dateModified: data.lastUpdated
  };

  return (
    <>
      <JsonLd data={[schema, faqSchema(faqs)]} />
      <PageHero eyebrow="MOMENTUM TOOL 05" title="Read the latest Express Entry cutoffs in context." copy="Filter recent official IRCC rounds, see how cutoffs have moved and test your CRS against comparable invitation history without confusing PNP, CEC and category-based draws." />
      <section className="bg-ivory py-14 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><ExpressEntryTracker data={data} /></div></section>
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="USE THE DATA WELL" title="A cutoff is a snapshot, not a promise" copy="The valuable question is not only whether your score crossed one past line, but which programme or category you can enter and which profile improvements are still under your control." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">{faqs.map((faq) => <article className="rounded-[8px] border border-slate-200 bg-ivory p-5" key={faq.question}><h2 className="text-base font-extrabold text-ink">{faq.question}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p></article>)}</div>
        </div>
      </section>
    </>
  );
}
