import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AIAdvisorSpotlight } from "@/components/AIAdvisorSpotlight";
import { CountryCard } from "@/components/CountryCard";
import { GoogleReviewsSlider } from "@/components/GoogleReviewsSlider";
import { Hero } from "@/components/Hero";
import { HorizontalCardRail } from "@/components/HorizontalCardRail";
import { JsonLd } from "@/components/JsonLd";
import { MomentumToolsSpotlight } from "@/components/MomentumToolsSpotlight";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { generalFaqs } from "@/data/faqs";
import { countries } from "@/data/countries";
import { allServiceCards } from "@/data/services";
import { googleReviews } from "@/data/testimonials";
import { createMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "#1 Best Immigration & Study Abroad Consultant in India",
  description:
    "Trusted immigration consultant in Gurugram for Canada PR, Australia PR, UK study visa, work visa and tourist visa. Honest eligibility review. Enquire on WhatsApp.",
  path: "/",
  keywords: [
    "best immigration consultant in Gurugram",
    "immigration consultant in Gurugram",
    "visa consultant in Gurugram",
    "immigration consultant in Delhi NCR",
    "study abroad consultant in Gurugram",
    "Canada PR consultant in Gurugram",
    "Australia PR consultant in Gurugram",
    "tourist visa consultant in Gurugram",
    "dependent visa consultant in Gurugram",
    "MBBS abroad consultant in Gurugram"
  ]
});

metadata.title = {
  absolute: "#1 Best Immigration & Study Abroad Consultant in India"
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <Hero />

      <AIAdvisorSpotlight />

      <section className="bg-white py-16 sm:py-24" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Core services"
              title="Choose the Support You Need"
              copy="The most requested routes are here. Explore all services if your case needs something more specific."
            />
            <Link
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-ink transition hover:border-cyan"
              href="/services"
            >
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8">
            <HorizontalCardRail label="core services">
              {allServiceCards.map((service) => (
                <ServiceCard service={service} compact key={service.slug} />
              ))}
            </HorizontalCardRail>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Countries"
              title="Compare the Main Destinations"
              copy="UK, Canada, Australia, USA, New Zealand, Europe and UAE options for Indian applicants."
            />
            <Link
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-cyan"
              href="/countries"
            >
              View all countries
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8">
            <HorizontalCardRail label="countries" itemClassName="min-w-[78%] sm:min-w-[270px] lg:min-w-[285px]">
              {countries.map((country) => (
                <CountryCard country={country} compact key={country.slug} />
              ))}
            </HorizontalCardRail>
          </div>
        </div>
      </section>

      <MomentumToolsSpotlight />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Reviews"
            title="Trusted by Students, Families and Professionals"
            copy="A few recent Google review excerpts from named clients."
            align="center"
          />
          <div className="mt-12">
            <GoogleReviewsSlider reviews={googleReviews} />
          </div>
          <div className="mt-10">
            <WhatsAppCTA
              title="Need a clear first review?"
              copy="Send your profile, target country and main concern. We will help you understand the sensible next step."
              message="Hi Idol Immigration, I want a profile review."
            />
          </div>
        </div>
      </section>
    </>
  );
}
