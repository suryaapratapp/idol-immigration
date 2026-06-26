import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, Sparkles } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { resourceBySlug, resources } from "@/data/resources";
import { absoluteUrl, createMetadata, faqSchema } from "@/lib/seo";
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
  const blogFaqs = resource.faqs ?? defaultBlogFaqs(resource.title);

  return (
    <>
      <JsonLd
        data={[
          {
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
          },
          faqSchema(blogFaqs)
        ]}
      />
      <PageHero
        eyebrow={resource.category}
        title={resource.title}
        copy={resource.description}
      />

      <article className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
          <div className="overflow-hidden rounded-[8px] border border-stone-200 bg-white shadow-sm">
            <div className="relative aspect-[16/8] bg-ivory">
              <Image
                src={resource.image.src}
                alt={resource.image.alt}
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-cover"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex flex-wrap gap-2">
                  {resource.badges.map((badge) => (
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm" key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                {resource.readTime}
              </p>
              <div className="mt-5 rounded-[8px] border border-gold/25 bg-ivory p-5">
                <div className="flex gap-3">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <p className="text-base leading-8 text-slate-700">{resource.quickSummary}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 rounded-[8px] border border-stone-200 bg-white p-5">
                <h2 className="text-xl font-semibold text-ink">Quick takeaways</h2>
                {resource.keyTakeaways.map((item) => (
                  <p className="flex gap-3 text-sm leading-7 text-slate-600" key={item}>
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>

            <div className="mt-8 grid gap-10">
              {resource.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-ink">{section.heading}</h2>
                  <div className="mt-4 grid gap-4 text-base leading-8 text-slate-600">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <div className="mt-5 grid gap-3 rounded-[8px] border border-stone-200 bg-ivory p-5">
                      {section.bullets.map((bullet) => (
                        <p className="flex gap-3 text-sm leading-7 text-slate-600" key={bullet}>
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                          <span>{bullet}</span>
                        </p>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
            <div className="mt-10 rounded-[8px] border border-stone-200 bg-ivory p-5">
              <h2 className="text-xl font-semibold text-ink">FAQs</h2>
              <div className="mt-5">
                <FAQAccordion faqs={blogFaqs} />
              </div>
            </div>
            </div>
          </div>
          <aside className="grid h-fit gap-5">
            <div className="rounded-[8px] border border-stone-200 bg-ivory p-6 text-center shadow-sm">
              <Image
                src="/images/logo-idol.png"
                alt="Idol Immigration logo"
                width={96}
                height={96}
                className="mx-auto h-24 w-24 object-contain"
              />
              <h2 className="mt-4 text-xl font-semibold text-ink">Need simple guidance?</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Share your profile, country and timeline. Idol Immigration can help you understand the next sensible step.
              </p>
            </div>
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

function defaultBlogFaqs(title: string) {
  return [
    {
      question: `Is ${title} enough to apply on my own?`,
      answer:
        "Use the guide as a planning starting point. Visa rules and document expectations can change, so check current official sources and get a profile-specific review before submitting."
    },
    {
      question: "Can Idol Immigration review my documents?",
      answer:
        "Yes. Idol can review your profile, purpose, funds, documents, SOP or interview readiness and point out common gaps before you apply."
    }
  ];
}
