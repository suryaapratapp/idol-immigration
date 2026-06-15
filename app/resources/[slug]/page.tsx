import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfficialSourceNotice } from "@/components/OfficialSourceNotice";
import { PageHero } from "@/components/PageHero";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { VisaRulesDisclaimer } from "@/components/VisaRulesDisclaimer";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { resourceBySlug, resources } from "@/data/resources";
import { createMetadata } from "@/lib/seo";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourceBySlug(slug);

  if (!resource) {
    return {};
  }

  return createMetadata({
    title: resource.title,
    description: resource.description,
    path: `/resources/${resource.slug}`,
    keywords: resource.keywords
  });
}

export default async function ResourceDetailPage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = resourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const related = resources.filter((item) => item.slug !== resource.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={resource.category}
        title={resource.title}
        copy={resource.description}
      />

      <article className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
          <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ocean">
              {resource.readTime}
            </p>
            <div className="mt-8 grid gap-10">
              {resource.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-ink">{section.heading}</h2>
                  <div className="mt-4 grid gap-4 text-base leading-8 text-slate-600">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
          <aside className="grid h-fit gap-5">
            <OfficialSourceNotice text="Visa rules change frequently. Verify with official government sources before publishing final route-specific requirements." />
            <VisaRulesDisclaimer />
            <WhatsAppCTA
              title="Need a profile review?"
              copy="A guide can help, but your profile decides the route. Send your details on WhatsApp."
              message={`Hi Idol Immigration, I read ${resource.title} and want profile guidance.`}
            />
          </aside>
        </div>
      </article>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Keep reading" title="Related Guides" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <ResourceCard resource={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
