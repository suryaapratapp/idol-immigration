import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ResourceCard } from "@/components/ResourceCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { resources } from "@/data/resources";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Immigration & Study Abroad Blogs",
  description:
    "Readable blogs for Indian applicants on study abroad, PR, work visa, tourist visa, MBBS abroad, life abroad and visa tips.",
  path: "/blogs",
  keywords: [
    "study abroad blogs India",
    "PR updates India",
    "tourist visa tips",
    "MBBS abroad guide"
  ]
});

const categories = [
  "Study Abroad",
  "PR Updates",
  "Work Visa",
  "Tourist Visa",
  "MBBS Abroad",
  "Life Abroad",
  "Visa Tips"
];

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Practical Immigration and Study Abroad Blogs"
        copy="Clear guides for Indian students, parents, skilled professionals and families planning study, work, PR, travel, MBBS abroad or dependent visa routes."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span className="rounded-full border border-stone-200 bg-ivory px-4 py-2 text-sm font-semibold text-slate-600" key={category}>
                {category}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Link
              className="group flex h-full flex-col rounded-[8px] border border-gold/30 bg-ivory p-6 shadow-sm transition hover:-translate-y-1 hover:border-ocean hover:bg-white hover:shadow-xl"
              href="/founders/uk-experience"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Life Abroad
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-ink">
                    Founder&apos;s UK Arrival & Life Guide
                  </h3>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-gold">
                  <Home className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A simple, newcomer-friendly guide to accommodation, bank account,
                SIM, transport, groceries, part-time job readiness, scams, money
                habits and emotional preparation in the UK.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ocean transition group-hover:text-ink">
                Read UK guide
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
            {resources.map((resource) => (
              <ResourceCard resource={resource} key={resource.slug} />
            ))}
          </div>

          <div className="mt-10">
            <WhatsAppCTA
              title="Want guidance instead of guessing?"
              copy="Send your profile and target country on WhatsApp. Idol can help you decide which route or service fits your situation."
              message="Hi Idol Immigration, I read your blogs and want guidance for my situation."
            />
          </div>
        </div>
      </section>
    </>
  );
}
