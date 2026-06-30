import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { allServiceCards } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "All Visa & Immigration Services in Gurugram | Idol Immigration",
  description:
    "Study abroad, Canada PR, Australia PR, work visa, tourist visa, MBBS abroad, visa refusal review and settlement support - all under one roof in Gurugram.",
  path: "/services",
  keywords: [
    "study abroad consultant India",
    "tourist visa consultant India",
    "PR visa consultant India",
    "spouse visa consultant",
    "visa refusal help India"
  ]
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Visa, Study Abroad and Settlement Support Under One Clear Roadmap"
        copy="Idol Immigration supports Indian applicants before, during and after the application, from profile review and documents to first-month preparation abroad."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we help with"
            title="Choose the Support That Matches Your Goal"
            copy="Every card includes who it is for, what Idol helps with and common mistakes to avoid."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {allServiceCards.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
          <div className="mt-10">
            <WhatsAppCTA
              title="Not sure which service fits?"
              copy="Message us with your target country, profile and concern. We will point you to the right starting point."
              message="Hi Idol Immigration, I am not sure which service I need. Please guide me."
            />
          </div>
        </div>
      </section>
    </>
  );
}
