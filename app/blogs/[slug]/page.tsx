import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { resourceBySlug, resources } from "@/data/resources";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { site } from "@/data/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourceBySlug(slug);

  if (!resource) {
    return {};
  }

  return createMetadata({
    title: resource.title,
    description: resource.description,
    path: `/blogs/${resource.slug}`,
    keywords: resource.keywords
  });
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const resource = resourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const related = resources.filter((item) => item.slug !== resource.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: resource.title,
          description: resource.description,
          mainEntityOfPage: absoluteUrl(`/blogs/${resource.slug}`),
          author: {
            "@type": "Organization",
            name: site.name
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url
          }
        }}
      />
      <PageHero
        eyebrow={resource.category}
        title={resource.title}
        copy={resource.description}
      />

      <article className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
          <div className="rounded-[8px] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
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
          <aside className="h-fit">
            <WhatsAppCTA
              title="Need a profile review?"
              copy="A blog can help, but your documents and profile decide the route. Send your details on WhatsApp."
              message={`Hi Idol Immigration, I read ${resource.title} and want profile guidance.`}
            />
          </aside>
        </div>
      </article>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Keep reading" title="Related Blogs" align="center" />
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
