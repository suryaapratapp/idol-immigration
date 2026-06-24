import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Refund Policy",
  description:
    "Refund policy for Idol Immigration consultation, document review, application filing and package services.",
  path: "/refund-policy"
});

const sections = [
  {
    title: "1. Introduction",
    body: [
      "This Refund Policy governs financial transactions between Idol Immigration and its clients for immigration consultancy services, including visa assistance, study abroad guidance, work permit support, PR consultation, tourist visa facilitation, dependent visa support and related services.",
      "This policy is governed by Indian law and is prepared with reference to the Consumer Protection Act, 2019, the Information Technology Act, 2000 and applicable payment/refund processing practices."
    ]
  },
  {
    title: "2. Nature of Immigration Consultancy Services",
    body: [
      "Immigration, visa, admission and PR decisions are made only by embassies, high commissions, immigration authorities, universities or other relevant bodies.",
      "Idol Immigration provides professional consultancy, strategy, document preparation, review and application support. We do not guarantee visa approvals, admissions, PR outcomes or processing timelines.",
      "Fees paid to Idol Immigration are for professional services rendered, not for a guaranteed result."
    ]
  },
  {
    title: "3. Service Fee Categories",
    body: [
      "Consultation fees are charged for initial consultations, strategy sessions and profile assessments. These are non-refundable once the consultation has taken place.",
      "Document preparation and review fees cover SOPs, cover letters, CV formatting, supporting documents and application forms. These are non-refundable once work has started.",
      "Application filing fees cover professional support for preparing, submitting and managing applications. These are non-refundable once the application has been submitted to the relevant authority.",
      "Government, embassy, biometric, courier, translation or other third-party fees are governed by the relevant provider or authority and are not refundable by Idol Immigration.",
      "For bundled packages, any eligible refund is calculated based on undelivered services, minus administrative or processing costs already incurred."
    ]
  },
  {
    title: "4. When Refunds May Be Considered",
    body: [
      "Duplicate payment: if a client is charged twice for the same service due to a technical or processing error, the duplicate charge may be refunded in full after verification.",
      "Service not commenced: if a client cancels in writing within 48 hours of payment and no work has started, a refund of up to 80% of the professional service fee may be considered. A 20% administrative charge may be retained.",
      "Idol Immigration unable to deliver: if we are unable to deliver agreed services due to circumstances within our control, a proportionate refund for undelivered services may be processed.",
      "Overpayment: verified overpayments may be refunded in full."
    ]
  },
  {
    title: "5. When Refunds Are Not Available",
    body: [
      "Refunds are not issued for visa refusal, rejection or cancellation by an authority or embassy.",
      "Refunds are not issued for change of mind after services have commenced, failure to provide required documents on time, incorrect information provided by the client, refusal due to personal immigration history, criminal record, health grounds or other factors outside our control.",
      "Government or embassy fee components are not refundable by Idol Immigration, regardless of outcome.",
      "Refunds are not issued for completed consultations, strategy sessions, document review work, or requests made after 30 days from the relevant transaction."
    ]
  },
  {
    title: "6. Refund Process",
    body: [
      "To request a refund, send a written request by email with your full name, invoice or receipt number, date of payment, amount paid, reason for refund request and supporting documents where applicable.",
      "We may take up to 7 business days to review and respond to the request. Approved refunds are usually processed within 10 to 15 business days to the original payment method.",
      "International refunds may take longer depending on the bank, card network or payment gateway. Currency conversion differences, international transaction fees and bank charges are not refundable by Idol Immigration."
    ]
  },
  {
    title: "7. Payment Methods and Routing",
    body: [
      "Idol Immigration may accept payments through UPI, NEFT, RTGS, IMPS, debit cards, credit cards, net banking and international wire transfers.",
      "Where approved, refunds are normally routed to the original payment source. If that is not possible, a verified bank transfer may be used after receiving required account details."
    ]
  },
  {
    title: "8. Chargebacks and Disputes",
    body: [
      "Clients are encouraged to contact Idol Immigration directly before raising a chargeback or payment dispute.",
      "If a chargeback is initiated without prior communication, we reserve the right to submit relevant service records, agreements, invoices and communication history to the payment processor or bank."
    ]
  },
  {
    title: "9. Consumer Rights and Updates",
    body: [
      "This policy does not limit rights available under applicable Indian consumer protection law.",
      "Idol Immigration may update this Refund Policy from time to time. Updated versions will be published on the website with a revised effective date."
    ]
  },
  {
    title: "10. Contact",
    body: [
      `For refund requests, payment disputes or questions, contact Idol Immigration at ${site.email}.`
    ]
  }
];

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policy"
        title="Refund Policy"
        copy="Understanding refund eligibility, timelines and payment handling. Effective June 24, 2026."
      />
      <PolicyArticle
        intro="Last updated: June 24, 2026. This page is based on Idol Immigration's Refund Policy document and refreshed for website use in 2026."
        sections={sections}
      />
    </>
  );
}

function PolicyArticle({
  intro,
  sections
}: {
  intro: string;
  sections: { title: string; body: string[] }[];
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="rounded-[8px] border border-gold/25 bg-ivory p-5 text-sm leading-7 text-slate-700">
          {intro}
        </p>
        <div className="mt-10 grid gap-8">
          {sections.map((section) => (
            <section className="rounded-[8px] border border-stone-200 bg-white p-6 shadow-sm" key={section.title}>
              <h2 className="text-2xl font-semibold text-ink">{section.title}</h2>
              <div className="mt-4 grid gap-4 text-base leading-8 text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}
