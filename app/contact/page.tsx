import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { site, whatsappLink } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Idol Immigration",
  description:
    "Contact Idol Immigration for visa, study abroad, PR, tourist visa, refusal review and settlement guidance.",
  path: "/contact",
  keywords: ["immigration consultant for Indians", "study abroad consultant India", "tourist visa consultant India"]
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Idol Immigration"
        copy="Tell us your goal, background, target country and concern. Send the form, email us or speak with the team on WhatsApp."
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
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-gold hover:text-gold"
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
              eyebrow="Contact details"
              title="Talk to the Idol Immigration Team"
              copy="No need to know the perfect visa name. Share your profile, goal and timeline, and we will help you understand the right starting point."
            />
            <div className="mt-8 grid gap-4">
              <div className="rounded-[8px] border border-slate-200 bg-mist/35 p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                  WhatsApp
                </p>
                <a className="mt-1 block text-lg font-semibold text-ocean" href={whatsappLink()} target="_blank" rel="noreferrer">
                  {site.whatsappNumber}
                </a>
              </div>
              <div className="rounded-[8px] border border-slate-200 bg-mist/35 p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                  Email
                </p>
                <a className="mt-1 block text-lg font-semibold text-ocean" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              <div className="rounded-[8px] border border-slate-200 bg-mist/35 p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  Phone
                </p>
                <a className="mt-1 block text-lg font-semibold text-ocean" href={`tel:${site.whatsappDigits}`}>
                  {site.phoneDisplay}
                </a>
              </div>
              <div className="rounded-[8px] border border-slate-200 bg-mist/35 p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                  Office
                </p>
                <address className="mt-2 text-sm not-italic leading-6 text-slate-600">{site.address}</address>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
