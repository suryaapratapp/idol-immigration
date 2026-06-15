import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { site, whatsappLink } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Idol Immigration",
  description:
    "Start a WhatsApp consultation with Idol Immigration for visa, study abroad, PR, visitor visa, refusal review and settlement guidance.",
  path: "/contact",
  keywords: ["immigration consultant for Indians", "study abroad consultant India", "visitor visa consultant India"]
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start With a WhatsApp Consultation"
        copy="Tell us your goal, background, target country and concern. We usually begin with WhatsApp so you can share your situation easily."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-midnight transition hover:bg-white"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan"
            href={`mailto:${site.email}`}
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {site.email}
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="WhatsApp-first"
              title="Share Your Situation in Simple Words"
              copy="No need to know the perfect visa name. Send your profile, goal and timeline. We will help you understand the right starting point."
            />
            <div className="mt-8 grid gap-4">
              <div className="rounded-[8px] border border-slate-200 bg-mist/35 p-5">
                <p className="text-sm font-semibold text-ink">WhatsApp</p>
                <a className="mt-1 block text-lg font-semibold text-ocean" href={whatsappLink()} target="_blank" rel="noreferrer">
                  {site.whatsappNumber}
                </a>
              </div>
              <div className="rounded-[8px] border border-slate-200 bg-mist/35 p-5">
                <p className="text-sm font-semibold text-ink">Email</p>
                <a className="mt-1 block text-lg font-semibold text-ocean" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
