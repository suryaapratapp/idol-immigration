import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, FileText, MessageCircle, ShieldCheck, UserCheck } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { allServiceCards, serviceBySlug } from "@/data/services";
import { whatsappLink } from "@/data/site";
import { breadcrumbSchema, createMetadata, faqSchema, serviceSchema } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allServiceCards.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) {
    return {};
  }

  const metaBySlug: Record<string, { title: string; description: string }> = {
    "study-abroad": {
      title: "Study Abroad Consultant in Gurugram | UK, Canada, Australia, USA",
      description:
        "Study abroad consultant in Gurugram for Canada study visa, UK study visa, Australia student visa, USA student visa, admissions, SOP writing and pre-departure support."
    },
    "visitor-visa": {
      title: "Tourist / Visitor Visa Consultant in Gurugram | Canada, UK, USA, Schengen",
      description:
        "Tourist visa consultant in Gurugram for Canada visitor visa from India, UK visitor visa, USA B1/B2 visa, Australia tourist visa and Schengen tourist visa from India."
    },
    "dependent-visa": {
      title: "Dependent Visa Consultant in Gurugram | Spouse & Family Visa Support",
      description:
        "Dependent visa consultant in Gurugram for spouse, children and family visa support, including spouse open work permit Canada and relationship document review."
    },
    "mbbs-abroad": {
      title: "MBBS Abroad Consultant in Gurugram | Russia, Georgia, Kazakhstan, Uzbekistan",
      description:
        "MBBS abroad consultant in Gurugram for Indian students comparing MBBS in Russia, Georgia, Kazakhstan, Uzbekistan, admission support, documents and visa guidance."
    },
    "visa-refusal-review": {
      title: "Visa Refusal Review Consultant | Reapplication & Document Review",
      description:
        "Visa refusal review consultant for study, tourist, visitor, work and family visa refusals, with SOP, funds, purpose and documentation risk review."
    },
    "pr-skilled-migration": {
      title: "Canada PR & Australia PR Consultant in Gurugram | Skilled Migration",
      description:
        "PR consultant in Gurugram for Canada PR from India, Canada Express Entry, Canada PNP, Australia PR from India, 189, 190 and 491 skilled migration planning."
    },
    "work-business-visa": {
      title: "Work Visa Consultant in Gurugram | Canada, UK, Germany & EU Blue Card",
      description:
        "Work visa consultant in Gurugram for Canada work permit, UK Skilled Worker Visa, Germany work visa, Germany Opportunity Card, Germany job seeker visa and EU Blue Card planning."
    }
  };
  const meta = metaBySlug[service.slug] ?? {
    title: service.title,
    description: service.pageIntro
  };

  return createMetadata({
    title: meta.title,
    description: meta.description,
    path: `/services/${service.slug}`,
    keywords: service.keywords
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = allServiceCards
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          faqSchema(service.faqs),
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.title, href: `/services/${service.slug}` }
          ])
        ]}
      />
      <PageHero eyebrow={service.eyebrow} title={service.title} copy={service.pageIntro}>
        <a
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-ink"
          href={whatsappLink(service.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Speak to an Expert
        </a>
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Service overview"
              title="What This Support Is Designed to Clarify"
              copy={service.outcome}
            />
            <p className="mt-8 rounded-[8px] border border-stone-200 bg-ivory p-5 text-sm leading-7 text-slate-600">
              Eligibility criteria can change by country and visa category. Idol keeps the consultation easy to update by reviewing your latest profile, documents and intended route before advising next steps.
            </p>
          </div>
          <div className="grid gap-5">
            <InfoBlock icon={ShieldCheck} title="What the service is" items={[service.summary]} />
            <InfoBlock icon={UserCheck} title="Who it is for" items={service.whoFor} />
            <InfoBlock
              icon={CheckCircle2}
              title="Basic eligibility overview"
              items={service.eligibilityOverview ?? defaultEligibility(service.shortTitle)}
            />
            <InfoBlock
              icon={FileText}
              title="Required documents overview"
              items={service.documentsOverview ?? defaultDocuments}
            />
            <InfoBlock
              icon={ShieldCheck}
              title="Why choose Idol Immigration"
              items={service.whyChoose ?? service.helpsWith}
            />
            <InfoBlock icon={CheckCircle2} title="Common mistakes to avoid" items={service.commonMistakes} />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title={`Questions About ${service.shortTitle}`}
            copy="Answers are intentionally practical and compliant. Final eligibility must be verified against official criteria."
            align="center"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQAccordion faqs={service.faqs} />
          </div>
          <div className="mt-10">
            <WhatsAppCTA
              title="Send your profile for review"
              copy="Share your background, target country and concern. Idol can help you understand the next step."
              message={service.whatsappMessage}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Related services"
            title="You May Also Need"
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <ServiceCard service={item} compact key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

type InfoBlockProps = {
  title: string;
  items: string[];
  icon: typeof CheckCircle2;
};

const defaultDocuments = [
  "Passport, photographs and identity documents",
  "Academic, employment, financial or relationship records as relevant",
  "Purpose statement, invitation, offer letter or sponsorship evidence where applicable"
];

function defaultEligibility(service: string) {
  return [
    `A genuine purpose for ${service.toLowerCase()} support`,
    "A profile, budget and document set that can be reviewed against the destination's current criteria",
    "Clear intent, consistent records and readiness to address weak areas before submission"
  ];
}

function InfoBlock({ title, items, icon: Icon }: InfoBlockProps) {
  return (
    <article className="rounded-[8px] border border-stone-200 bg-ivory/70 p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-gold">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-xl font-semibold text-ink">{title}</h2>
      </div>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-7 text-slate-600" key={item}>
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
