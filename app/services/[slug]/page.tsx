import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { OfficialSourceNotice } from "@/components/OfficialSourceNotice";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { VisaRulesDisclaimer } from "@/components/VisaRulesDisclaimer";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { allServiceCards, serviceBySlug } from "@/data/services";
import { breadcrumbSchema, createMetadata, faqSchema } from "@/lib/seo";

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

  return createMetadata({
    title: service.title,
    description: service.pageIntro,
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
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.title, href: `/services/${service.slug}` }
          ])
        ]}
      />
      <PageHero eyebrow={service.eyebrow} title={service.title} copy={service.pageIntro}>
        <Link
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-midnight transition hover:bg-white"
          href="/contact"
        >
          Start with this service
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Service overview"
              title="What This Support Is Designed to Clarify"
              copy={service.outcome}
            />
            <div className="mt-8 grid gap-5">
              <OfficialSourceNotice />
              <VisaRulesDisclaimer />
            </div>
          </div>
          <div className="grid gap-5">
            <InfoBlock title="Who it is for" items={service.whoFor} positive />
            <InfoBlock title="What Idol helps with" items={service.helpsWith} positive />
            <InfoBlock title="Common mistakes to avoid" items={service.commonMistakes} />
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
  positive?: boolean;
};

function InfoBlock({ title, items, positive = false }: InfoBlockProps) {
  const Icon = positive ? CheckCircle2 : XCircle;
  return (
    <article className="rounded-[8px] border border-slate-200 bg-mist/35 p-6">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-7 text-slate-600" key={item}>
            <Icon
              className={["mt-1 h-5 w-5 shrink-0", positive ? "text-ocean" : "text-gold"].join(" ")}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
