import type { Metadata } from "next";
import { CrsScoreCalculator } from "@/components/tools/CrsScoreCalculator";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { crsConfig } from "@/lib/crsCalculator";
import { absoluteUrl, createMetadata, faqSchema } from "@/lib/seo";

const description = "Calculate an indicative Canada Express Entry CRS score with a transparent breakdown of core, spouse, transferability and additional points.";
const faqs = [
  { question: "Is this the official IRCC CRS calculator?", answer: "No. This is an independent planning calculator using the published IRCC scoring grid. Always verify your result with IRCC before making a decision." },
  { question: "Do job offers still add CRS points?", answer: "No. IRCC removed CRS points for job offers on March 25, 2025, although a valid offer may still matter for eligibility in some programmes." },
  { question: "Does a CRS score confirm an Express Entry invitation?", answer: "No. You must first qualify for an Express Entry programme, and invitation cutoffs vary by round, category and pool conditions." }
];

export const metadata: Metadata = createMetadata({
  title: "Canada CRS Score Calculator",
  description,
  path: "/tools/crs-score-calculator",
  keywords: ["CRS score calculator", "Canada Express Entry points", "calculate CRS score India", "Express Entry calculator"]
});

export default function CrsScoreCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Idol Immigration CRS Score Calculator",
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: absoluteUrl("/tools/crs-score-calculator"),
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    dateModified: crsConfig.lastUpdated
  };

  return (
    <>
      <JsonLd data={[schema, faqSchema(faqs)]} />
      <PageHero eyebrow="MOMENTUM TOOL 04" title="Calculate your CRS, then find the points you can still influence." copy="Build an indicative Express Entry score from the current IRCC grid and see core, spouse, transferability and additional points separately." />
      <section className="bg-ivory py-14 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><CrsScoreCalculator /></div></section>
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="READ THE SCORE WELL" title="CRS is a ranking score, not a complete eligibility check" copy="Use the result to identify profile levers, then confirm programme eligibility, language equivalencies, ECA validity and supporting evidence before relying on it." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">{faqs.map((faq) => <article className="rounded-[8px] border border-slate-200 bg-ivory p-5" key={faq.question}><h2 className="text-base font-extrabold text-ink">{faq.question}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p></article>)}</div>
        </div>
      </section>
    </>
  );
}
