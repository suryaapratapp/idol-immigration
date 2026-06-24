import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Idol Immigration clients, website visitors and enquiry users, updated for 2026.",
  path: "/privacy-policy"
});

const sections = [
  {
    title: "1. Introduction and Scope",
    body: [
      "Idol Immigration is committed to protecting the privacy and personal information of people who use our services, visit our website, or contact us through phone, WhatsApp, email, social media or in person.",
      "This policy explains how we collect, use, store, share and protect personal data in connection with immigration consultancy, study abroad, visa, PR, work visa, tourist visa, MBBS abroad, dependent visa and related advisory services.",
      "This policy is prepared with reference to the Information Technology Act, 2000, the SPDI Rules, 2011, the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025 as available for 2026 compliance planning."
    ]
  },
  {
    title: "2. Information We Collect",
    body: [
      "We may collect personal identification information such as name, date of birth, gender, nationality, marital status, passport details, identity documents, immigration history, address, phone number and email address.",
      "We may collect financial and application information such as bank statements, proof of funds, payment records, academic documents, employment history, offer letters, CVs, SOPs, refusal history, recommendation letters and other supporting documents needed for your case.",
      "We may also collect communication data such as emails, WhatsApp messages, consultation notes and case records, plus website and technical data such as IP address, browser type, device details, pages visited and analytics information."
    ]
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "We use your information to assess your profile, provide consultation, prepare and review applications, communicate case updates, process invoices and payments, respond to enquiries and improve our client experience.",
      "We may use your contact details for service-related updates. Marketing messages are sent only where permitted and can be opted out of.",
      "We do not use your personal data for automated decision-making that produces legal or similarly significant effects."
    ]
  },
  {
    title: "4. Legal Basis and Consent",
    body: [
      "We process personal data where it is required to provide our services, comply with law, support legitimate business operations, prevent fraud, improve services or where you have given consent.",
      "You may withdraw consent for optional marketing or non-essential cookies. Withdrawal of consent may affect our ability to provide some services if the information is needed for your case."
    ]
  },
  {
    title: "5. Data Sharing and Third Parties",
    body: [
      "Idol Immigration does not sell, rent or trade your personal information.",
      "We may share information with embassies, high commissions, immigration authorities, universities, employers, document translation providers, courier partners, biometric centres, payment processors, banks, analytics tools and legal or regulatory authorities where required for your service or by law.",
      "Third parties are expected to handle information securely and only for the purpose for which it is shared."
    ]
  },
  {
    title: "6. International Transfers",
    body: [
      "Immigration and study abroad services often require data to be submitted to authorities, institutions or service providers outside India, including countries such as the UK, Canada, USA, Australia, Schengen countries and the UAE.",
      "Such transfers are made for the purpose of processing your enquiry, admission, visa, immigration or related service request."
    ]
  },
  {
    title: "7. Retention",
    body: [
      "Active client records may be retained during the engagement and for up to 5 years after completion, unless a longer period is required by law or needed for legitimate dispute, audit or compliance purposes.",
      "Financial and payment records may be retained for up to 7 years. Non-converting enquiry records may usually be retained for up to 12 months. Website analytics may be retained according to analytics tool settings.",
      "After the relevant retention period, data may be securely deleted, anonymised or archived where legally required."
    ]
  },
  {
    title: "8. Cookies and Website Tracking",
    body: [
      "Our website may use essential cookies, analytics cookies and marketing cookies. Essential cookies help the website work. Analytics cookies help us understand website performance. Marketing cookies may support relevant advertising where enabled.",
      "You can manage cookies through browser settings or any cookie controls provided on the website."
    ]
  },
  {
    title: "9. Your Rights",
    body: [
      "Subject to applicable law, you may request access, correction, deletion, restriction, portability, objection to certain processing and withdrawal of consent.",
      "To make a privacy request, contact us using the details below. We aim to acknowledge privacy requests within 72 hours and respond within 30 days where reasonably possible."
    ]
  },
  {
    title: "10. Security",
    body: [
      "We use reasonable technical and organisational measures such as access controls, secure document handling, SSL/TLS transmission where applicable and internal confidentiality practices.",
      "No transmission or storage method is 100% secure. Clients should avoid sending unnecessary sensitive information until it is requested for a relevant service."
    ]
  },
  {
    title: "11. Children and Dependents",
    body: [
      "Our services are not directed at children under 18. Where a minor's data is needed for a dependent, student or family visa matter, it should be provided by the responsible adult client."
    ]
  },
  {
    title: "12. Contact and Grievance Redressal",
    body: [
      `For privacy-related queries, data requests or complaints, contact Idol Immigration at ${site.email}.`,
      "For privacy/grievance matters, you may also write to: privacy@idolimmigration.com."
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policy"
        title="Privacy Policy"
        copy="How Idol Immigration collects, uses and protects personal information. Effective June 24, 2026."
      />
      <PolicyArticle
        intro="Last updated: June 24, 2026. This website version is based on Idol Immigration's privacy policy document and refreshed for 2026 compliance context."
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
