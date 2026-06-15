import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/components/TestimonialCard";
import { VisaRulesDisclaimer } from "@/components/VisaRulesDisclaimer";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { testimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Success Stories",
  description:
    "Read conservative client story cards from Idol Immigration's historical Canada PR, study visa, Australia PR and PNP guidance work.",
  path: "/success-stories",
  keywords: ["immigration consultant for Indians", "Canada study visa consultant", "PR visa consultant India"]
});

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success stories"
        title="Real Guidance, Shared Without Overpromising"
        copy="Every applicant's outcome depends on individual facts and official criteria. These stories reflect the type of guidance Idol Immigration has historically provided."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Testimonials"
            title="Applicants Remember Clarity More Than Big Claims"
            copy="The goal is not dramatic language. It is confidence, organization and a better understanding of the route."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
            <VisaRulesDisclaimer />
            <WhatsAppCTA
              title="Want your profile reviewed?"
              copy="Share your background and goal. Idol can help you understand your real options."
              message="Hi Idol Immigration, I saw your success stories and want my profile reviewed."
            />
          </div>
        </div>
      </section>
    </>
  );
}
