import type { Metadata } from "next";
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
