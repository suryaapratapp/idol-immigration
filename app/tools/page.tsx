import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, CalendarClock, ChartNoAxesCombined, Scale, SearchCheck } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { momentumTools } from "@/data/tools";
import { absoluteUrl, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Free Immigration Planning Tools",
  description: "Use Idol Immigration's free deadline, occupation, country comparison, CRS and Express Entry tools to turn international plans into practical next steps.",
  path: "/tools",
  keywords: ["immigration tools", "study abroad planner", "Express Entry tracker", "compare countries"]
});

const icons = [CalendarClock, SearchCheck, Scale, Calculator, ChartNoAxesCombined];

export default function ToolsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Idol Immigration Momentum Tools",
    description: "Free personalised planning tools for international study, work and migration decisions.",
    url: absoluteUrl("/tools"),
    hasPart: momentumTools.map((tool) => ({
      "@type": "WebApplication",
      name: tool.title,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      url: absoluteUrl(`/tools/${tool.slug}`),
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="MOMENTUM TOOLS"
        title="Turn international ambition into a decision you can act on."
        copy="Five focused tools translate dates, occupation signals, country trade-offs and Express Entry points into a personalised starting point. Results are instant, private and free."
      />
      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="CHOOSE YOUR NEXT MOVE"
            title="One useful answer at a time"
            copy="Start with the decision creating the most friction. Every result can be saved as a branded PDF or reviewed with an Idol Immigration consultant on WhatsApp."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {momentumTools.map((tool, index) => {
              const Icon = icons[index];
              return (
                <article
                  className="group flex min-h-72 flex-col rounded-[8px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(7,29,51,0.08)] transition hover:-translate-y-1 hover:border-gold sm:p-8"
                  key={tool.slug}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="grid h-12 w-12 place-items-center rounded-[6px] bg-ink text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                    {tool.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold text-ink">{tool.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{tool.description}</p>
                  <Link
                    className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-ink transition group-hover:text-gold"
                    href={`/tools/${tool.slug}`}
                  >
                    {tool.action}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
