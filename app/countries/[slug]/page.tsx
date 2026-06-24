import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle2, FileText, GraduationCap, Plane, ShieldCheck, UserCheck } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
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
        title={`${country.flag} ${country.name} Guidance for Indian Applicants`}
        copy={country.overview}
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
          <span className="text-2xl" aria-hidden="true">{country.flag}</span>
          {country.image.caption}
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <CountryVisual country={country} />
            <SectionHeader
              eyebrow="Country fit"
              title={`Is ${country.name} Right for Your Plan?`}
              copy="Idol compares the destination against your profile, family comfort, documents, budget and long-term goal."
            />
            <div className="mt-8 grid gap-5">
              <div className="rounded-[8px] border border-stone-200 bg-ivory p-5">
                <div className="flex items-center gap-3 text-sm font-semibold text-ink">
                  <CalendarDays className="h-5 w-5 text-gold" aria-hidden="true" />
                  Last updated: {country.lastUpdated}
                </div>
              </div>
              <p className="rounded-[8px] border border-stone-200 bg-white p-5 text-sm leading-7 text-slate-600">
                Eligibility criteria can change. Treat this as a planning snapshot and confirm the latest requirements before applying.
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            <CountryInfo icon={Plane} title="Types of visas available" items={country.visasAvailable} />
            <CountryInfo icon={ShieldCheck} title="PR eligibility overview" items={[country.prEligibility]} />
            <CountryInfo icon={UserCheck} title="Work visa eligibility overview" items={[country.workVisaEligibility]} />
            <CountryInfo icon={GraduationCap} title="Student visa eligibility overview" items={[country.studentVisaEligibility]} />
            <CountryInfo icon={GraduationCap} title="MBBS eligibility overview" items={[country.mbbsEligibility]} />
            <CountryInfo icon={FileText} title="Basic document requirements" items={country.documentsOverview} />
            <CountryInfo icon={CheckCircle2} title="Approximate process overview" items={country.processOverview} />
            <CountryInfo icon={ShieldCheck} title={`Why choose ${country.name}`} items={country.whyChoose} />
          </div>
        </div>
      </section>

      {country.pointsGrid ? (
        <section className="bg-ivory py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Points eligibility"
              title={country.pointsGrid.title}
              copy={country.pointsGrid.minimum}
              align="center"
            />
            <div className="mt-10 overflow-hidden rounded-[8px] border border-stone-200 bg-white shadow-sm">
              <div className="grid bg-ink px-5 py-3 text-sm font-semibold text-white sm:grid-cols-[0.9fr_0.45fr_1.2fr]">
                <p>Factor</p>
                <p>Maximum</p>
                <p>What it means</p>
              </div>
              {country.pointsGrid.rows.map((row) => (
                <div className="grid gap-2 border-t border-stone-200 px-5 py-4 text-sm text-slate-600 sm:grid-cols-[0.9fr_0.45fr_1.2fr]" key={row.factor}>
                  <p className="font-semibold text-ink">{row.factor}</p>
                  <p>{row.maximum}</p>
                  <p>{row.whatItMeans}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-500">
              {country.pointsGrid.note}
            </p>
          </div>
        </section>
      ) : null}

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title={`${country.name} Questions`}
            copy="These answers keep the first conversation simple and profile-focused."
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

function CountryVisual({ country }: { country: NonNullable<ReturnType<typeof countryBySlug>> }) {
  return (
    <div className="mb-8 overflow-hidden rounded-[8px] border border-stone-200 bg-ink shadow-xl">
      <div
        aria-label={country.image.alt}
        className="relative min-h-72 bg-cover bg-center"
        role="img"
        style={{ backgroundImage: `url(${country.image.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/15 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Destination snapshot
            </p>
            <p className="mt-2 max-w-md text-sm leading-7 text-white/80">
              {country.image.caption}
            </p>
          </div>
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/20 bg-white/15 text-3xl shadow-lg backdrop-blur">
            <span aria-hidden="true">{country.flag}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

type CountryInfoProps = {
  title: string;
  items: string[];
  icon: typeof CheckCircle2;
};

function CountryInfo({ title, items, icon: Icon }: CountryInfoProps) {
  return (
    <article className="rounded-[8px] border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ivory text-gold">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-xl font-semibold text-ink">{title}</h2>
      </div>
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
