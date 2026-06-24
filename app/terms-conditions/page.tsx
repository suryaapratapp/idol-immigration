import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using Idol Immigration website, consultation and application support services.",
  path: "/terms-conditions"
});

const sections = [
  {
    title: "1. Agreement to Terms",
    body: [
      "These Terms and Conditions form an agreement between you and Idol Immigration. By using our website, making an enquiry, booking a consultation, making payment or engaging our services, you confirm that you have read and accepted these terms.",
      "These terms are governed by the laws of India. Disputes are subject to the dispute resolution process described below."
    ]
  },
  {
    title: "2. About Idol Immigration",
    body: [
      "Idol Immigration provides professional immigration and visa consultancy services, including tourist visa assistance, study abroad guidance, skilled worker and employment visa support, permanent residency consultation, dependent and spouse visa facilitation, parent and grandparent visa guidance, MBBS abroad counselling and general immigration advisory services.",
      "Destinations may include the United Kingdom, Canada, Australia, United States of America, Schengen countries, the United Arab Emirates and other jurisdictions."
    ]
  },
  {
    title: "3. No Guarantee of Outcome",
    body: [
      "Idol Immigration is not a government body, embassy, high commission, immigration authority or university. All visa, PR, admission and immigration decisions are made only by the relevant authority or institution.",
      "We do not guarantee approval of any visa, permit, admission, PR application, processing timeline or immigration outcome.",
      "Our fees are for professional services such as consultation, strategy, document preparation, review and application support. These fees are earned when the relevant professional service is delivered, regardless of the final decision by an authority."
    ]
  },
  {
    title: "4. Client Obligations",
    body: [
      "You agree to provide complete, accurate and truthful information at all times. False, misleading or incomplete information can result in refusal, bans, penalties or other serious consequences.",
      "You agree to submit required documents on time, inform us of changes in your circumstances, attend appointments or biometric sessions where needed, review documents before submission, make payments as agreed and communicate respectfully with our team."
    ]
  },
  {
    title: "5. Our Obligations",
    body: [
      "Idol Immigration will provide honest, professional and transparent consultancy advice, maintain confidentiality in line with our Privacy Policy, keep clients informed of material case developments and provide services with reasonable care, skill and diligence.",
      "We will not make guarantees about immigration outcomes."
    ]
  },
  {
    title: "6. Fees and Payment",
    body: [
      "Fees are set out in the engagement letter, service agreement, invoice or payment communication shared with you. Services may not start or continue where payment is outstanding.",
      "Government fees, embassy fees, biometric fees, courier charges, translation fees, institution fees and other third-party costs are separate from Idol Immigration's professional fees and are governed by the relevant provider or authority.",
      "Late payment may result in suspension or termination of services. Idol Immigration is not responsible for adverse outcomes caused by non-payment or delayed payment."
    ]
  },
  {
    title: "7. Intellectual Property",
    body: [
      "Website content, graphics, logos, social media content, blog posts, visa guides and educational resources are the intellectual property of Idol Immigration unless otherwise stated.",
      "You may not reproduce, distribute, republish, modify or commercially exploit our content without written permission. Personal non-commercial reference use is permitted.",
      "The Idol Immigration brand name, logo and associated identity are proprietary to the company."
    ]
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Idol Immigration's liability for a specific service shall not exceed the professional fees paid by you for that specific service.",
      "We are not liable for visa refusals, delays, cancellations, losses caused by incorrect or incomplete client information, indirect damages, third-party delays, changes in law or policy, force majeure events or decisions by authorities outside our control."
    ]
  },
  {
    title: "9. Confidentiality and Privacy",
    body: [
      "We treat client information confidentially. Information may be disclosed only where needed to deliver services, where required by law or with your consent.",
      "Please refer to our Privacy Policy for details of how personal information is collected, used, shared and retained."
    ]
  },
  {
    title: "10. Testimonials and Case Studies",
    body: [
      "Idol Immigration may share anonymised or consented testimonials, reviews and case outcomes on the website or social media for marketing and educational purposes.",
      "Testimonials reflect individual experiences and do not guarantee similar outcomes for other clients."
    ]
  },
  {
    title: "11. Third-Party Links and Services",
    body: [
      "Our website may link to embassy websites, government portals, educational institutions, payment processors, Google services or other third-party websites. These links are provided for convenience.",
      "Idol Immigration does not control and is not responsible for third-party content, terms, privacy practices or decisions."
    ]
  },
  {
    title: "12. Termination",
    body: [
      "You may terminate your engagement by written notice. Fees for services already delivered are not refundable. Any refund for undelivered services is subject to our Refund Policy.",
      "Idol Immigration may terminate services where a client provides false information, fails to pay agreed fees, behaves abusively or where continuing would require unlawful or unethical conduct."
    ]
  },
  {
    title: "13. Dispute Resolution",
    body: [
      "If a dispute arises, we encourage you to contact us first for an amicable resolution. If unresolved within 30 days, the matter may be referred to arbitration under the Arbitration and Conciliation Act, 1996. The language of arbitration will be English and the seat of arbitration will be India.",
      "This does not prevent either party from seeking urgent relief from a competent court where legally available."
    ]
  },
  {
    title: "14. Updates and Contact",
    body: [
      "Idol Immigration may update these Terms from time to time. Updated terms will be published on the website. Continued use of the website or services after publication means acceptance of the updated terms.",
      `For questions about these terms, contact ${site.email}. For legal notices, you may also write to legal@idolimmigration.com.`
    ]
  }
];

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Policy"
        title="Terms & Conditions"
        copy="The agreement between you and Idol Immigration. Effective June 24, 2026."
      />
      <PolicyArticle
        intro="Last updated: June 24, 2026. This page is based on Idol Immigration's Terms & Conditions document and refreshed for website use in 2026."
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
