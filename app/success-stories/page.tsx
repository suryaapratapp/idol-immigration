import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/components/TestimonialCard";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { googleReviews, videoTestimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Success Stories",
  description:
    "Read verified Google review excerpts and YouTube-ready video testimonial cards for Idol Immigration.",
  path: "/success-stories",
  keywords: ["immigration consultant for Indians", "Canada study visa consultant", "PR visa consultant India"]
});

export default function SuccessStoriesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "ProfessionalService",
            name: "Idol Immigration & Overseas Consultants"
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5"
          },
          author: {
            "@type": "Person",
            name: googleReviews[0].name
          },
          reviewBody: googleReviews[0].reviewText
        }}
      />
      <PageHero
        eyebrow="Success stories"
        title="Client Reviews and Video Testimonials"
        copy="Verified Google review excerpts and a polished video area where client thank-you videos can be embedded from YouTube."
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="overflow-hidden rounded-[8px] border border-stone-200 bg-ink shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/site/canada-passport-family.png"
                alt="Family smiling while holding Canadian passports"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Client milestones
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <SectionHeader
              eyebrow="Outcome stories"
              title="Every Review Represents a Bigger Personal Milestone"
              copy="Behind each testimonial is a decision, a document trail, a family conversation and a next chapter. Idol keeps the process grounded so applicants understand what they are preparing for."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client reviews"
            title="Real Google Reviews"
            copy="These named review excerpts were verified from Google/Maps and are displayed with star ratings and source labels."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {googleReviews.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Video testimonials"
            title="YouTube Video Stories"
            copy="Add client YouTube links to turn these cards into embedded, on-site video testimonials."
            align="center"
          />
          <div className="mt-12">
            <VideoTestimonials videos={videoTestimonials} />
          </div>
          <div className="mt-10">
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
