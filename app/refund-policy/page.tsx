import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Refund Policy",
  description: "Refund policy for Idol Immigration consultation and application support services.",
  path: "/refund-policy"
});

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policy"
        title="Refund Policy"
        copy="A simple policy page for consultation and application support payments."
      />
      <PolicySection
        items={[
          "Consultation, profile review and documentation services involve professional time and may be non-refundable once work has started.",
          "If a service has not started, clients can contact Idol Immigration with payment details and the service agreement for review.",
          "Government fees, third-party fees, university fees, courier charges and payment gateway charges are governed by the relevant provider's rules."
        ]}
      />
    </>
  );
}

function PolicySection({ items }: { items: string[] }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-base leading-8 text-slate-600 sm:px-6 lg:px-8">
        {items.map((item) => (
          <p className="mb-4" key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}
