import type { Metadata } from "next";
import { BriefcaseBusiness, Building2, CreditCard, MapPinned, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Overseas Settlement Support",
  description:
    "Prepare for accommodation, part-time job readiness, first 30 days abroad, budgeting and local life with Idol Immigration.",
  path: "/settlement-support",
  keywords: [
    "overseas settlement support",
    "study abroad with accommodation support",
    "part-time job guidance abroad"
  ]
});

const support = [
  {
    title: "Accommodation search guidance",
    copy: "Temporary stay planning, room search basics, safety checks and what to ask before paying.",
    icon: Building2
  },
  {
    title: "First 30 days checklist",
    copy: "SIM, bank account, local transport, emergency contacts, university or employer onboarding and local basics.",
    icon: MapPinned
  },
  {
    title: "Part-time job readiness",
    copy: "CV tips, interview confidence, legal-work awareness and realistic expectations before you arrive.",
    icon: BriefcaseBusiness
  },
  {
    title: "Budgeting and setup cost",
    copy: "Plan deposits, groceries, travel, utilities, initial setup and emergency buffer more carefully.",
    icon: CreditCard
  },
  {
    title: "Confidence and communication",
    copy: "Build English confidence, local etiquette awareness and workplace communication basics.",
    icon: Phone
  },
  {
    title: "Safety-first thinking",
    copy: "Understand basic checks, document backups, trusted contacts and practical ways to avoid rushed decisions.",
    icon: ShieldCheck
  }
];

export default function SettlementSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Settlement support"
        title="Your First Weeks Abroad Should Not Feel Like Guesswork"
        copy="Your first few weeks abroad can feel confusing. Idol helps you prepare before you land, from accommodation search guidance and part-time job readiness to CV tips, interview confidence, budgeting and local life basics."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Beyond the visa"
            title="Preparation That Helps You Actually Settle"
            copy="A visa can open the door. Practical preparation helps you walk through it with more confidence."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {support.map((item) => {
              const Icon = item.icon;
              return (
                <article className="rounded-[8px] border border-slate-200 bg-mist/35 p-6" key={item.title}>
                  <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-ink text-cyan">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-10">
            <WhatsAppCTA
              title="Prepare before you land"
              copy="Tell us your destination, arrival month and biggest worry. We will help you prepare a practical first-month plan."
              message="Hi Idol Immigration, I want settlement support before moving abroad."
            />
          </div>
        </div>
      </section>
    </>
  );
}
