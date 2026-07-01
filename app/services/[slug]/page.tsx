import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  CarFront,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  MessageCircle,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BrandLogo } from "@/components/BrandLogo";
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

      <section className="relative overflow-hidden bg-mist py-16 sm:py-24">
        <div className="absolute inset-0 premium-grid opacity-45" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative">
            <SectionHeader
              eyebrow="Service overview"
              title="What This Support Is Designed to Clarify"
              copy={service.outcome}
            />
            <div className="mt-8 grid gap-4">
              {[
                ["Profile clarity", "We start with your goal, budget, timeline, documents and risk signals."],
                ["Practical roadmap", "You leave with next steps, backup options and a clearer preparation sequence."],
                ["Ongoing support", "For extra settlement, work-readiness or document help, reach out to us anytime."]
              ].map(([title, copy]) => (
                <div className="rounded-[8px] border border-white bg-white/85 p-5 shadow-sm" key={title}>
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-[8px] border border-gold/25 bg-white/85 p-5 text-sm leading-7 text-slate-600">
              Eligibility criteria can change by country and visa category. Idol keeps the consultation easy to update by reviewing your latest profile, documents and intended route before advising next steps.
            </p>
          </div>
          <div className="relative grid gap-5">
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

      <ServiceSpecificContent slug={service.slug} />

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
    <article className="rounded-[8px] border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mist text-ocean">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-xl font-semibold text-ink">{title}</h2>
      </div>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-7 text-slate-600" key={item}>
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-ocean" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ServiceSpecificContent({ slug }: { slug: string }) {
  if (slug === "skill-development-before-moving") {
    return <SkillDevelopmentDetails />;
  }

  if (slug === "part-time-job-guidance") {
    return <PartTimeJobDetails />;
  }

  return (
    <section className="bg-midnight py-16 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[
          ["Before you apply", "We help you understand what to prepare now so later decisions feel less rushed."],
          ["During preparation", "You get practical guidance on documents, communication, timing and consistency."],
          ["After the next step", "For settlement, skills, CV, housing or local-life support, reach out to us."]
        ].map(([title, copy]) => (
          <article className="rounded-[8px] border border-white/10 bg-white/[0.08] p-6 shadow-glow" key={title}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{title}</p>
            <p className="mt-4 text-sm leading-7 text-white/75">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const drivingRules = [
  {
    title: "Check your right to drive",
    copy:
      "Before driving abroad, understand whether your Indian licence is accepted, whether you need an International Driving Permit, when a provisional licence is needed and what local insurance rules apply."
  },
  {
    title: "Create a driving licence plan",
    copy:
      "We help you plan practical steps such as address proof, provisional licence application, theory preparation, supervised practice, test booking and safe first-car decisions."
  },
  {
    title: "Learn road signs early",
    copy:
      "Traffic signs, road markings, speed limits and priority rules can feel different at first. Studying them before arrival reduces stress and helps you avoid expensive mistakes."
  }
];

function SkillDevelopmentDetails() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Driving rules"
          title="Create a Driving Licence Plan Before You Move"
          copy="Driving can be useful for work, accommodation, family life and local confidence, but every country has its own licence, insurance and road-safety rules."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {drivingRules.map((item) => (
            <article className="rounded-[8px] border border-stone-200 bg-mist/60 p-6 shadow-sm" key={item.title}>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-ocean">
                <CarFront className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 rounded-[8px] border border-gold/30 bg-ivory p-6 shadow-sm lg:grid-cols-[1fr_0.7fr] lg:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
              Official learning resource
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">
              Know Your Traffic Signs
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We have added the Department for Transport PDF, <span className="font-semibold text-ink">Know Your Traffic Signs</span>, published by GOV.UK / DFT. It is a helpful reference for road signs, signals, markings and driving awareness before you start learning or driving abroad.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              To know more about driving rules, licence steps, local setup, skill building, CV support and everything else you may need after moving abroad, please reach out to us. We can guide you through the practical details one step at a time.
            </p>
          </div>
          <div className="flex flex-col justify-between rounded-[8px] border border-stone-200 bg-white p-5">
            <div>
              <FileText className="h-8 w-8 text-ocean" aria-hidden="true" />
              <p className="mt-4 text-lg font-semibold text-ink">Download or open the PDF</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                2023 edition, 172 pages, supplied as a learner reference for traffic-sign awareness.
              </p>
            </div>
            <a
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ocean"
              href="/resources/know-your-traffic-signs-dft.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Open Know Your Traffic Signs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const jobPlatforms = [
  {
    name: "Indeed",
    url: "https://uk.indeed.com/",
    description: "Broad part-time, retail, customer service, hospitality and warehouse listings."
  },
  {
    name: "Reed",
    url: "https://www.reed.co.uk/jobs/part-time-jobs",
    description: "UK job board with part-time, admin, reception and customer-support roles."
  },
  {
    name: "Totaljobs",
    url: "https://www.totaljobs.com/jobs/part-time",
    description: "Part-time roles across retail, logistics, sales and service sectors."
  },
  {
    name: "CV-Library",
    url: "https://www.cv-library.co.uk/part-time-jobs",
    description: "Large job board useful for CV upload and local part-time searches."
  },
  {
    name: "StudentJob UK",
    url: "https://www.studentjob.co.uk/",
    description: "Student-focused part-time and graduate job listings."
  },
  {
    name: "LinkedIn Jobs",
    url: "https://www.linkedin.com/jobs/",
    description: "Useful for building a profile, networking and finding student-friendly openings."
  },
  {
    name: "The Caterer",
    url: "https://www.thecaterer.com/jobs",
    description: "Hospitality, kitchen, cafe and catering roles."
  }
];

const partTimeJobs = [
  ["Customer Service Representative", "Builds patience, clear communication, empathy and problem-solving under pressure."],
  ["Retail Associate", "Improves confidence, teamwork, product knowledge and everyday customer conversation."],
  ["Store Operations Associate", "Develops reliability, organisation, stock awareness and attention to detail."],
  ["Receptionist", "Builds professional presence, phone confidence, scheduling discipline and calm communication."],
  ["Kitchen Porter", "Strengthens stamina, discipline, teamwork and respect for fast-paced workplaces."],
  ["Delivery Driver / Porter", "Develops punctuality, route awareness, accountability and practical independence."],
  ["Sales Assistant", "Improves listening, persuasion, confidence and the ability to explain value simply."],
  ["Barista / Cafe Assistant", "Builds multitasking, friendliness, speed, memory and service confidence."],
  ["Warehouse Assistant", "Develops accuracy, safety awareness, time management and physical work discipline."],
  ["Tutor / Academic Support Assistant", "Builds leadership, explanation skills, patience and subject confidence."]
];

function PartTimeJobDetails() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Part-time job readiness"
          title="Prepare for the Roles Students and Newcomers Actually Search For"
          copy="We help you build the skills, CV and confidence needed for the type of part-time job you are interested in, while keeping expectations realistic and lawful."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {jobPlatforms.map((platform) => (
            <a
              className="group flex h-full gap-4 rounded-[8px] border border-stone-200 bg-mist/50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-ocean hover:bg-white hover:shadow-xl"
              href={platform.url}
              key={platform.name}
              target="_blank"
              rel="noreferrer"
            >
              <BrandLogo name={platform.name} url={platform.url} />
              <span>
                <span className="flex items-center gap-2 text-lg font-semibold text-ink">
                  {platform.name}
                  <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-ocean" aria-hidden="true" />
                </span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">{platform.description}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[8px] border border-gold/30 bg-ivory p-6 shadow-sm lg:p-8">
            <BriefcaseBusiness className="h-9 w-9 text-ocean" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-semibold text-ink">
              CV, skills and job-type preparation
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We will help you identify the type of part-time role you want, build the skills required for that role, prepare a simple local-style CV and practise answers that show reliability, confidence and willingness to learn.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We also help you pursue volunteer work within the first month where suitable opportunities are available. This can often be remote for around 1 day per week, helps you use your knowledge for a good cause, can be counted as work experience and may give you a reference for future full-time job applications.
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {partTimeJobs.map(([job, benefit]) => (
              <article className="rounded-[8px] border border-stone-200 bg-white p-5 shadow-sm" key={job}>
                <h3 className="text-base font-semibold text-ink">{job}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[8px] border border-stone-200 bg-midnight p-6 text-white shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
            More support
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
            To know more about job search, volunteer work, CV building, interview preparation, local rules and anything else you need support with, please reach out to us. We can help you plan the next practical step.
          </p>
          <a
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            href={whatsappLink("Hi Idol Immigration, I want part-time job and volunteer work guidance.")}
            target="_blank"
            rel="noreferrer"
          >
            Ask for job-readiness support
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
