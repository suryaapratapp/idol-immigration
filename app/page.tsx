import type { Metadata } from "next";
import { ArrowRight, Brain, FileCheck2, HomeIcon, Landmark, Map, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CountryCard } from "@/components/CountryCard";
import { EligibilityQuestionCards } from "@/components/EligibilityQuestionCards";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FounderCard } from "@/components/FounderCard";
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
import { founders } from "@/data/founders";
import { resources } from "@/data/resources";
import { allServiceCards } from "@/data/services";
import { site, whatsappLink } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { createMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Immigration Consultant for Indians",
  description:
    "Premium founder-led study abroad, visitor visa, PR, skilled migration and overseas settlement guidance for Indian students, families and professionals.",
  path: "/",
  keywords: [
    "immigration consultant for Indians",
    "study abroad consultant India",
    "visitor visa consultant India",
    "PR visa consultant India",
    "overseas settlement support"
  ]
});

const differentiators = [
  {
    title: "Lived-Abroad Guidance",
    copy: "Founders understand the real move, not only forms and checklists.",
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

      <section className="bg-white py-16 sm:py-24" id="visa-options">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  <article className="h-full rounded-[8px] border border-slate-200 bg-mist/35 p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-ink text-cyan">
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <div>
              <SectionHeader
                eyebrow="Founder-led guidance"
                title="Guided by People Who Understand the Journey Personally"
                copy="Because Jagdeep and Pooja have lived the journey themselves, Idol Immigration looks beyond forms and checklists."
              />
              <p className="mt-6 text-base leading-8 text-slate-600">
                After living abroad themselves for more than three years, Jagdeep
                and Pooja saw the gap most applicants face: people get visa advice,
                but not enough real-life preparation. Idol Immigration bridges that
                gap with pathway planning, application support and practical
                settlement guidance.
              </p>
              <Link
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ocean"
                href="/founders"
              >
                Meet the founders
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {founders.map((founder, index) => (
              <Reveal delay={index * 0.08} key={founder.name}>
                <FounderCard founder={founder} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
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

      <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-24">
        <div className="absolute inset-0 glass-grid opacity-50" />
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Compare your options"
            title="Countries Are Not Checkboxes. Each Route Has a Different Reality."
            copy="We compare destinations by applicant profile, cost comfort, route logic, documentation and settlement preparation."
            align="center"
            dark
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {countries.map((country, index) => (
              <Reveal delay={index * 0.04} key={country.slug}>
                <CountryCard country={country} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <WhatsAppCTA
              dark
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

      <section className="bg-ivory py-16 sm:py-24">
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
            title="Client Stories, Written Without Exaggeration"
            copy="Every case depends on individual facts and official criteria. These stories reflect guidance categories from Idol's historical work."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Resources"
              title="SEO-Ready Guides for Smarter Decisions"
              copy="Each guide is structured for future CMS expansion and includes official-source reminders before publishing."
            />
            <Link
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-ink transition hover:border-cyan"
              href="/resources"
            >
              View all resources
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

      <section className="bg-midnight py-16 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              Start with a WhatsApp Consultation
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Tell us your goal, target country, current city and concern. We
              usually begin with WhatsApp so you can share your situation easily.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-midnight transition hover:bg-white"
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
          </div>
          <div className="rounded-[8px] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <Landmark className="h-9 w-9 text-gold" aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-semibold">Not just visa filing.</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Real guidance from people who have lived the journey: preparing
              documents, applying, moving, finding accommodation, building
              confidence, understanding part-time work and settling properly.
            </p>
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
