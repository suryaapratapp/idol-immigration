import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CountryComparisonTool } from "@/components/tools/CountryComparisonTool";
import countryProfilesData from "@/data/country-profiles.json";
import type { CountryProfilesData } from "@/lib/countryComparison";
import { absoluteUrl, createMetadata, faqSchema } from "@/lib/seo";

const description = "Compare two study, work or immigration destinations against your own budget, English readiness, experience, family size and career field.";
const faqs = [
  { question: "Is the highest score always the country I should choose?", answer: "No. The score is a structured shortlist signal. A final decision should validate course or occupation fit, live eligibility, funds, family priorities and risk." },
  { question: "Why do the weights change by purpose?", answer: "A student usually cares more about cost and post-study work, while a PR applicant needs settlement feasibility to carry more weight. The model reflects that difference." },
  { question: "Are the cost ranges guaranteed?", answer: "No. They are broad INR planning bands. Tuition, exchange rates, city, family size and proof-of-funds rules can change the actual budget substantially." }
];

export const metadata: Metadata = createMetadata({
  title: "Compare Countries for Study, Work or PR",
  description,
  path: "/tools/compare-countries",
  keywords: ["compare countries immigration", "Canada vs Australia", "best country to study abroad", "country match immigration"]
});

export default function CompareCountriesPage() {
  const data = countryProfilesData as CountryProfilesData;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Idol Immigration Head-to-Head Country Comparison",
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: absoluteUrl("/tools/compare-countries"),
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }
  };

  return (
    <>
      <JsonLd data={[schema, faqSchema(faqs)]} />
      <PageHero eyebrow="MOMENTUM TOOL 03" title="Compare countries through your profile, not someone else's ranking." copy="Put two destinations under the same lens. Your purpose, budget, English readiness, experience, family plan and career field shape every score and the final recommendation." />
      <section className="bg-ivory py-14 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><CountryComparisonTool data={data} /></div></section>
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="DECISION QUALITY" title="A good comparison makes its trade-offs visible" copy="The result shows why one country wins each dimension, so you can disagree intelligently, adjust the profile and see what changes the recommendation." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">{faqs.map((faq) => <article className="rounded-[8px] border border-slate-200 bg-ivory p-5" key={faq.question}><h2 className="text-base font-extrabold text-ink">{faq.question}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p></article>)}</div>
        </div>
      </section>
    </>
  );
}
