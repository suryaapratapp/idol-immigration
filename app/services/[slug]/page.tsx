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
      title: "Study Abroad Consultant in Gurugram | UK, Canada, Australia | Idol Immigration",
      description:
        "Plan your study abroad with a trusted consultant in Gurugram. UK, Canada, Australia, USA & Europe. Course shortlisting, SOP review and visa readiness support."
    },
    "visitor-visa": {
      title: "Tourist & Visitor Visa Consultant in Gurugram | Idol Immigration",
      description:
        "Get expert tourist and visitor visa guidance in Gurugram for UK, Canada, USA, Europe and more. Itinerary, funds and document review. No false promises."
    },
    "pr-skilled-migration": {
      title: "Canada PR & Australia PR Consultant in Gurugram | Idol Immigration",
      description:
        "Honest PR and skilled migration guidance in Gurugram. Canada Express Entry, PNP, Australia 189/190/491. Eligibility check, document planning and backup routes."
    },
    "work-business-visa": {
      title: "Work Visa & Business Visa Consultant in Gurugram | Idol Immigration",
      description:
        "Work visa, business visa, investor and start-up route guidance in Gurugram. UK Skilled Worker, Canada, Australia, Germany. Route review and document planning."
    },
    "dependent-visa": {
      title: "Dependent Visa Help in Gurugram | Spouse & Family Visa | Idol Immigration",
      description:
        "Dependent visa guidance in Gurugram for spouses, children and eligible family members. Relationship evidence, funds review and consistency checks for UK, Canada, Australia."
    },
    "mbbs-abroad": {
      title: "MBBS Abroad Consultant in Gurugram for Indian Students | Idol Immigration",
      description:
        "Compare MBBS abroad options - Russia, Philippines, Georgia, Kazakhstan and more. Country, university, eligibility and visa guidance from a Gurugram consultant."
    },
    "visa-refusal-review": {
      title: "Visa Refusal Review & Reapplication Help in Gurugram | Idol Immigration",
      description:
        "Had a visa refusal? Get an honest second look in Gurugram. Refusal letter analysis, document gap review and reapplication readiness for UK, Canada, Australia and more."
    },
    "student-visa": {
      title: "Student Visa Application Support in Gurugram | Idol Immigration",
      description:
        "Build a strong student visa file with guidance from Gurugram. Forms, SOP review, funds planning and country-specific document support for UK, Canada, Australia and USA."
    },
    "spouse-family-visa": {
      title: "Spouse & Family Visa Consultant in Gurugram | Idol Immigration",
      description:
        "Spouse visa and family visa guidance in Gurugram. Relationship evidence, funds and consistency review for UK, Canada, Australia and dependent open work permits."
    },
    "ielts-pte-interview-preparation": {
      title: "IELTS & PTE Prep in Gurugram | Visa Interview Coaching | Idol Immigration",
      description:
        "Prepare for IELTS, PTE and visa interviews with practical coaching in Gurugram / Delhi NCR. English confidence, interview practice and purpose clarity for students and visa applicants."
    },
    "settlement-support": {
      title: "Post-Landing & Settlement Support for Indians Moving Abroad | Idol Immigration",
      description:
        "Get ready for your first weeks abroad. Accommodation planning, bank account, SIM, CV, part-time job readiness and first 30-day checklist - from your Gurugram consultant."
    },
    "sop-statement-review": {
      title: "SOP & GTE Statement Review for Indian Visa Applicants | Idol Immigration",
      description:
        "Make your SOP, GTE or personal statement stronger. Story logic, course fit and risk signal review by an experienced immigration consultant in Gurugram."
    },
    "accommodation-guidance": {
      title: "Accommodation Guidance Before Moving Abroad | Idol Immigration",
      description:
        "Find safe, affordable accommodation before arriving abroad. Temporary stays, room search basics, safety checks and budgeting guidance from Idol Immigration, Gurugram."
    },
    "part-time-job-guidance": {
      title: "Part-Time Job Guidance Abroad for Indian Students | Idol Immigration",
      description:
        "Prepare for legal part-time work abroad. CV tips, interview confidence, skills planning and realistic expectations - guidance from Idol Immigration in Gurugram."
    },
    "skill-development-before-moving": {
      title: "Skills to Build Before Moving Abroad | Pre-Departure Help | Idol Immigration",
      description:
        "Build English confidence, LinkedIn, digital skills and budgeting basics before moving abroad. Pre-departure skill guidance from Idol Immigration, Gurugram."
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
