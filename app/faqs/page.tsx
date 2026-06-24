import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { generalFaqs } from "@/data/faqs";
import { createMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "FAQs",
  description: "Frequently asked questions about Idol Immigration services.",
  path: "/faqs"
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        copy="Clear answers before you start a consultation."
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={generalFaqs} />
        </div>
      </section>
    </>
  );
}
