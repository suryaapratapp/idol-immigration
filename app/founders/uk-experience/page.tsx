import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  HeartHandshake,
  MessageCircle,
  Sparkles
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/Buttons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import {
  ukArrivalTimeline,
  ukExperienceHighlights,
  ukExperienceSections,
  type UkExperienceLink
} from "@/data/ukExperience";
import { site, whatsappLink } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Founders' UK Experience Guide",
  description:
    "Founder-led UK arrival and settlement guide for Indian students and families, with accommodation, banking, groceries, transport, utilities, work, discounts and scam-safety links.",
  path: "/founders/uk-experience",
  keywords: [
    "overseas settlement support",
    "study abroad with accommodation support",
    "part-time job guidance abroad",
    "UK student visa consultant India"
  ]
});

const toId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const pageSchema = [
  breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Founders", href: "/founders" },
    { name: "UK Experience Guide", href: "/founders/uk-experience" }
  ]),
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Founders' UK Experience Guide",
    description:
      "A practical UK arrival and settlement guide from Idol Immigration's founder-led perspective.",
    dateModified: "2026-06-20",
    mainEntityOfPage: absoluteUrl("/founders/uk-experience"),
    author: [
      {
        "@type": "Person",
        name: "Jagdeep Sharma",
        sameAs: site.founders.jagdeep
      },
      {
        "@type": "Person",
        name: "Pooja Bhardwaj",
        sameAs: site.founders.pooja
      }
    ],
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    }
  }
];

export default function UkExperiencePage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <PageHero
        eyebrow="Founders' UK experience"
        title="Coming To The UK Is Brave. Settling Well Needs A Plan."
        copy="Jagdeep and Pooja have lived the UK journey personally. This guide brings together the practical things newcomers often discover too late: rooms, banking, SIM, groceries, transport, jobs, utilities, discounts, car buying, safety and emotional confidence."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            href={whatsappLink(
              "Hi Idol Immigration, I want help preparing for my UK arrival and settlement."
            )}
            external
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Ask for UK arrival guidance
          </Button>
          <Button href="#uk-practical-guide" variant="secondary">
            Explore the checklist
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="A note from lived experience"
              title="The First Few Weeks Can Feel Heavy. That Is Normal."
              copy="Many students and professionals arrive with a suitcase, a dream and a brave face. Then the small things begin: finding a room, understanding heating, opening a bank account, missing home, applying for jobs and learning how the local system works."
            />
            <p className="mt-6 text-base leading-8 text-slate-600">
              This is why Idol Immigration does not stop at visa filing. When
              you move countries, the form is only one chapter. The real story
              begins when you land, unlock a new room, look around and realize
              you have to build a life from zero.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Jagdeep and Pooja built this page for that moment. Not to scare
              you, and not to make the UK sound impossible. The opposite: to
              remind you that the journey becomes lighter when someone has
              already explained the basics with honesty.
            </p>
          </div>
          <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-ivory shadow-sm">
            <div className="relative aspect-[16/10] bg-ink">
              <Image
                src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1400&q=85"
                alt="UK arrival and life guide for Indian students and newcomers"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <p className="absolute bottom-5 left-5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                UK arrival guide
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-ink text-gold">
                  <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ocean">
                    Founder-led reminder
                  </p>
                  <h2 className="text-2xl font-semibold text-ink">
                    You Are Not Supposed To Know Everything On Day One
                  </h2>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {ukExperienceHighlights.map((item) => (
                  <div className="flex gap-3 rounded-[8px] bg-white p-4 text-sm leading-7 text-slate-600" key={item}>
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-ocean" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Arrival roadmap"
            title="What To Handle Before The UK Starts Feeling Like Home"
            copy="This is the practical order we recommend: stabilize your basics first, then build confidence, routine and opportunity."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {ukArrivalTimeline.map((group, index) => (
              <article
                className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm"
                key={group.title}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-gold">
                  {index + 1}
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-ink">{group.title}</h2>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-600">
                  {group.items.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" id="uk-practical-guide">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ocean">
                UK guide menu
              </p>
              <nav className="mt-4 grid gap-1" aria-label="UK experience guide sections">
                {ukExperienceSections.map((section) => (
                  <a
                    className="rounded-[8px] px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-mist hover:text-ink"
                    href={`#${toId(section.title)}`}
                    key={section.title}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div>
            <SectionHeader
              eyebrow="Practical UK directory"
              title="The Links, Checks And Habits Newcomers Usually Need"
              copy="Use this directory as a practical starting point for UK life. Check each provider's latest terms, pricing, eligibility and availability before signing up."
            />

            <div className="mt-10 grid gap-8">
              {ukExperienceSections.map((section) => (
                <article
                  className="scroll-mt-28 rounded-[8px] border border-slate-200 bg-ivory p-6 shadow-sm sm:p-8"
                  id={toId(section.title)}
                  key={section.title}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ocean">
                        UK settlement
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                        {section.title}
                      </h2>
                      <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                        {section.intro}
                      </p>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[8px] bg-ink text-gold">
                      <Sparkles className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mt-6 rounded-[8px] border border-slate-200 bg-white p-5">
                    <h3 className="text-base font-semibold text-ink">
                      What to remember
                    </h3>
                    <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
                      {section.guidance.map((item) => (
                        <li className="flex gap-3" key={item}>
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {section.links.map((link) => (
                      <UkLinkCard link={link} key={`${section.title}-${link.name}`} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-midnight py-16 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Transparent guidance"
              title="Helpful Links, Clear Choices"
              copy="Where a referral relationship exists, it is labelled on the relevant card. The purpose of this guide is to help newcomers compare calmly and make informed decisions."
              dark
            />
          </div>
          <div className="grid gap-4">
            {[
              "Use provider websites to confirm the latest terms before signing up.",
              "Compare price, contract length, cancellation rules, coverage and eligibility.",
              "Treat offers and student discounts as helpful savings, not reasons to overspend.",
              "Never present discounts, approvals, jobs, rooms or bank accounts as guaranteed."
            ].map((item) => (
              <div className="rounded-[8px] border border-white/10 bg-white/10 p-4 text-sm leading-7 text-white/75" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[8px] border border-slate-200 bg-ivory p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ocean">
                  Final founder advice
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-ink">
                  Build A Life, Not Just A File
                </h2>
              </div>
              <div className="space-y-4 text-base leading-8 text-slate-600">
                <p>
                  The UK can feel cold, fast and unfamiliar at first. But with
                  the right preparation, the same place can slowly become where
                  you learn independence, earn confidence, make friends, build
                  skills and support your family with pride.
                </p>
                <p>
                  Start with basics. Keep your documents safe. Spend carefully.
                  Ask questions. Protect yourself from scams. Learn the local
                  system. Stay connected with home, but give yourself permission
                  to grow in a new country.
                </p>
                <p className="font-semibold text-ink">
                  Confused where to start? Message us on WhatsApp and share your
                  UK arrival month, city and biggest worry.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <WhatsAppCTA
              title="Plan your UK arrival with someone who understands the journey"
              copy="Send your arrival city, accommodation status, course or work plan and current doubts. Idol can help you prepare a practical first-month checklist."
              message="Hi Idol Immigration, I want a UK arrival and settlement checklist."
              secondaryHref="/settlement-support"
              secondaryLabel="View settlement support"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function UkLinkCard({ link }: { link: UkExperienceLink }) {
  return (
    <a
      className="group flex h-full flex-col rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan/60 hover:shadow-xl"
      href={link.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-start gap-4">
        <BrandLogo name={link.name} url={link.url} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ocean">
                  {link.type ?? "resource"}
                </p>
                {link.recommended ? (
                  <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                    Top recommended
                  </span>
                ) : null}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-ink">{link.name}</h3>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-ocean" aria-hidden="true" />
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">{link.description}</p>
          {link.referralNote ? (
            <p className="mt-4 rounded-[8px] bg-gold/10 px-3 py-2 text-xs font-semibold leading-6 text-ink">
              {link.referralNote}
            </p>
          ) : null}
        </div>
      </div>
    </a>
  );
}
