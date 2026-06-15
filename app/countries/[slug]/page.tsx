import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { OfficialSourceNotice } from "@/components/OfficialSourceNotice";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { VisaRulesDisclaimer } from "@/components/VisaRulesDisclaimer";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { countries, countryBySlug } from "@/data/countries";
import { breadcrumbSchema, createMetadata, faqSchema } from "@/lib/seo";

type CountryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = countryBySlug(slug);

  if (!country) {
    return {};
  }

  return createMetadata({
    title: `${country.name} Visa & Study Guidance`,
    description: country.overview,
    path: `/countries/${country.slug}`,
    keywords: [
      `${country.name} visa consultant India`,
      "immigration consultant for Indians",
      "study abroad consultant India"
    ]
  });
}

export default async function CountryDetailPage({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = countryBySlug(slug);

  if (!country) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          faqSchema(country.faqs),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Countries", href: "/countries" },
            { name: country.name, href: `/countries/${country.slug}` }
          ])
        ]}
      />
      <PageHero
        eyebrow={`${country.region} destination`}
        title={`${country.name} Guidance for Indian Applicants`}
        copy={country.overview}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Country fit"
              title={`Is ${country.name} Right for Your Plan?`}
              copy="Idol compares the destination against your profile, family comfort, documents, budget and long-term goal."
            />
            <div className="mt-8 grid gap-5">
              <div className="rounded-[8px] border border-slate-200 bg-mist/35 p-5">
                <div className="flex items-center gap-3 text-sm font-semibold text-ink">
                  <CalendarDays className="h-5 w-5 text-ocean" aria-hidden="true" />
                  Last updated: {country.lastUpdated}
                </div>
              </div>
              <OfficialSourceNotice text={country.officialSourcePlaceholder} />
              <VisaRulesDisclaimer />
            </div>
          </div>
          <div className="grid gap-5">
            <CountryInfo title="Best for" items={[country.bestFor]} />
            <CountryInfo title="Popular routes" items={country.popularRoutes} />
            <CountryInfo title="Common applicant profile" items={[country.commonProfile]} />
            <CountryInfo title="What Indians usually worry about" items={country.worries} />
            <CountryInfo title="How Idol helps" items={[country.howIdolHelps]} />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title={`${country.name} Questions`}
            copy="These answers are for planning. Specific country requirements should always be verified with official sources."
            align="center"
          />
          <div className="mt-10">
            <FAQAccordion faqs={country.faqs} />
          </div>
          <div className="mt-10">
            <WhatsAppCTA
              title={`Ask about ${country.name}`}
              copy="Send your profile, goal and concern. Idol can help you understand whether this country should be Plan A or compared with alternatives."
              message={`Hi Idol Immigration, I want guidance for ${country.name}.`}
            />
          </div>
        </div>
      </section>
    </>
  );
}

type CountryInfoProps = {
  title: string;
  items: string[];
};

function CountryInfo({ title, items }: CountryInfoProps) {
  return (
    <article className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <ul className="mt-4 grid gap-3">
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
