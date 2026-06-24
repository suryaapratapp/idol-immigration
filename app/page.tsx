import type { Metadata } from "next";
import { ArrowRight, Brain, FileCheck2, HomeIcon, Map, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CountryCard } from "@/components/CountryCard";
import { EligibilityQuestionCards } from "@/components/EligibilityQuestionCards";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ResourceCard } from "@/components/ResourceCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { generalFaqs } from "@/data/faqs";
import { countries } from "@/data/countries";
import { resources } from "@/data/resources";
import { allServiceCards } from "@/data/services";
import { googleReviews } from "@/data/testimonials";
import { createMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Immigration Consultant for Indians",
  description:
    "Premium study abroad, tourist visa, PR, work visa, MBBS abroad, dependent visa and overseas settlement guidance for Indian applicants.",
  path: "/",
  keywords: [
    "immigration consultant for Indians",
    "study abroad consultant India",
    "tourist visa consultant India",
    "PR visa consultant India",
    "overseas settlement support"
  ]
});

const differentiators = [
  {
    title: "Lived-Abroad Guidance",
    copy: "Practical guidance that considers the real move, not only forms and checklists.",
    icon: Map
  },
  {
    title: "India-to-World Clarity",
    copy: "Advice designed for Indian students, parents, couples and professionals.",
    icon: Brain
  },
  {
    title: "Honest Pathway Planning",
    copy: "Understand eligibility, risks, cost, timeline and alternatives before deciding.",
    icon: ShieldCheck
  },
  {
    title: "Document Strength Review",
    copy: "Identify weak areas before application, not after a refusal.",
    icon: FileCheck2
  },
  {
    title: "Beyond Visa Support",
    copy: "Accommodation, part-time job readiness, skills and settling guidance.",
    icon: HomeIcon
  },
  {
    title: "Transparent Communication",
    copy: "WhatsApp-first support with clear next steps and practical language.",
    icon: MessageCircle
  }
];

const practicalBlocks = [
  "Real cost planning: tuition, living costs, visa fees, emergency buffer and initial setup cost.",
  "Timeline reality: when to start, when to apply and what usually causes delay.",
  "Refusal risk signals: weak SOP, funds mismatch, unclear purpose or poor documentation.",
  "Parent clarity guide: what parents should ask before paying fees.",
  "First 30 days abroad checklist: SIM, bank account, travel, accommodation and emergency contacts.",
  "Part-time job preparation: CV, interview confidence, skills and realistic expectations.",
  "Accommodation support: temporary stay, room search guidance and safety checks.",
  "Skills to build before moving: English confidence, digital skills, LinkedIn and budgeting.",
  "Document readiness score: passport, funds, records, SOP, invitation, sponsorship and ties.",
  "Backup pathway planning: what to do if Plan A is weak."
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <Hero />

      <section className="relative overflow-hidden bg-white py-16 sm:py-24" id="visa-options">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/35 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(123,211,244,0.10),transparent_30%,rgba(201,164,93,0.08))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Why Idol is different"
              title="Visa Guidance Is Only Half the Journey. We Help With the Other Half Too."
              copy="Most applicants need more than a document checklist. They need route clarity, confidence, cost planning, life-after-landing preparation and an honest view of risk."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal delay={index * 0.04} key={item.title}>
                  <article className="relative h-full overflow-hidden rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan/50 hover:shadow-xl">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-cyan to-ocean opacity-80" />
                    <span className="grid h-12 w-12 place-items-center rounded-[8px] border border-cyan/20 bg-ink text-cyan shadow-glow">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 text-xl font-semibold text-ink">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Visa pathway finder"
            title="Tell us your goal"
            copy="Confused where to start? Pick the closest goal and send us a WhatsApp message with your profile."
            align="center"
          />
          <div className="mt-12">
            <EligibilityQuestionCards />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 text-ink sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Compare your options"
            title="Countries Are Not Checkboxes. Each Route Has a Different Reality."
            copy="We compare destinations by applicant profile, cost comfort, route logic, documentation and settlement preparation."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {countries.map((country, index) => (
              <Reveal delay={index * 0.04} key={country.slug}>
                <CountryCard country={country} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <WhatsAppCTA
              title="Need country comparison before you pay fees?"
              copy="Send your profile, budget range and goal. We will help you compare options more sensibly."
              message="Hi Idol Immigration, I want help comparing countries for my profile."
              secondaryHref="/countries"
              secondaryLabel="View countries"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="What people actually want to know"
              title="Real Guidance for the Questions Families Discuss at Home"
              copy="These are the practical questions that often decide whether an international plan feels calm or chaotic."
            />
            <div className="mt-8">
              <ComparisonTable />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {practicalBlocks.map((item, index) => (
              <Reveal delay={index * 0.03} key={item}>
                <article className="rounded-[8px] border border-slate-200 bg-mist/35 p-5">
                  <div className="flex gap-3">
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/20 text-xs font-semibold text-ink">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Support for Every Stage of the Journey"
            copy="From study abroad counselling and visa filing to refusal review, accommodation guidance and part-time job readiness."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {allServiceCards.map((service, index) => (
              <Reveal delay={index * 0.03} key={service.slug}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="No Confusion. No Blind Promises. Just a Clear Roadmap."
            copy="From where you are today to where you want to be, the process stays practical, documented and honest."
            align="center"
          />
          <div className="mt-12">
            <ProcessTimeline />
          </div>
          <div className="mt-10">
            <WhatsAppCTA
              title="Send your profile for review"
              copy="Share your background, documents and target country. We will help you understand the most sensible next step."
              message="Hi Idol Immigration, I want to send my profile for review."
            />
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Success stories"
            title="Real Google Reviews From Named Clients"
            copy="Short, verified Google review excerpts are shown with reviewer names, star ratings and source labels."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {googleReviews.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Blogs"
              title="Clear Guides for Smarter Decisions"
              copy="Readable blog guides for students, parents, professionals and families planning their next move."
            />
            <Link
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-ink transition hover:border-cyan"
              href="/blogs"
            >
              View all blogs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.slice(0, 6).map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Clear Answers Before You Start"
            align="center"
          />
          <div className="mt-10">
            <FAQAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
