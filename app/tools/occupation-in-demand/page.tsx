import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { OccupationDemandMatcher } from "@/components/tools/OccupationDemandMatcher";
import occupationsData from "@/data/occupations.json";
import { absoluteUrl, createMetadata, faqSchema } from "@/lib/seo";
import type { OccupationsData } from "@/lib/occupationMatcher";

const description = "Match your job title to indicative skilled occupation signals and visa routes in Canada, Australia, the United Kingdom and Germany.";
const faqs = [
  {
    question: "Does an in-demand match guarantee a visa?",
    answer: "No. An occupation signal is only one factor. Points, sponsorship, salary, licensing, English ability, qualifications and current programme rules still determine whether a route is realistic."
  },
  {
    question: "Why do job duties matter more than the title?",
    answer: "Government classifications compare the work you actually perform with an occupation description. Two people using the same title can map to different codes."
  },
  {
    question: "What replaced the UK Shortage Occupation List?",
    answer: "The Immigration Salary List replaced the old Shortage Occupation List. It is narrower than general Skilled Worker eligibility and should be checked separately."
  }
];

export const metadata: Metadata = createMetadata({
  title: "Occupation-in-Demand Matcher",
  description,
  path: "/tools/occupation-in-demand",
  keywords: ["occupation in demand", "Canada NOC matcher", "Australia skilled occupation list", "UK Immigration Salary List"]
});

export default function OccupationInDemandPage() {
  const data = occupationsData as OccupationsData;
  const webApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Idol Immigration Occupation-in-Demand Matcher",
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: absoluteUrl("/tools/occupation-in-demand"),
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }
  };

  return (
    <>
      <JsonLd data={[webApplication, faqSchema(faqs)]} />
      <PageHero
        eyebrow="MOMENTUM TOOL 02"
        title="See where your occupation creates route momentum."
        copy="Enter the title you use professionally. The matcher maps common variations to country classifications, current demand signals and the skilled routes worth examining next."
      />
      <section className="bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <OccupationDemandMatcher data={data} />
        </div>
      </section>
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="READ THE SIGNAL CORRECTLY"
            title="Demand opens a conversation; evidence unlocks a route"
            copy="A promising list match still needs the right code, duties, experience, qualification assessment and sometimes professional registration. Use this result to focus a detailed eligibility review."
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
