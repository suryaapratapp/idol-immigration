import type { Metadata } from "next";
import { Bot, FileSearch, LockKeyhole, Route } from "lucide-react";
import { AIPathwayAdvisor } from "@/components/AIPathwayAdvisor";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI Pathway Advisor",
  description:
    "Upload your CV to compare international roles, study and skilled migration routes, profile gaps and a practical 90-day action plan.",
  path: "/ai-pathway-advisor",
  keywords: [
    "AI immigration pathway advisor",
    "CV analysis for overseas jobs",
    "best country for my profile",
    "study abroad profile evaluation",
    "international career route planner"
  ]
});

const trustSignals = [
  { icon: FileSearch, label: "PDF and DOCX CV analysis" },
  { icon: Route, label: "Country and career matching" },
  { icon: LockKeyhole, label: "No account or CV storage" }
];

export default function AIPathwayAdvisorPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-12 text-white sm:py-16">
        <div className="absolute inset-0 premium-grid opacity-20" />
        <div className="absolute inset-0 route-lines opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff8a91]">
            <Bot className="h-4 w-4" aria-hidden="true" />
            Idol Intelligence Lab
          </p>
          <div className="mt-6 grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-balance text-4xl font-extrabold sm:text-6xl">
                Your CV can reveal more than one route abroad.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
                Compare careers, destinations and next steps in one private report. Then bring the strongest route to a real consultant for verification.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
              {trustSignals.map(({ icon: Icon, label }) => (
                <div className="flex min-h-11 items-center gap-3 border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white/75" key={label}>
                  <Icon className="h-4 w-4 shrink-0 text-[#ff8a91]" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AIPathwayAdvisor />
    </>
  );
}
