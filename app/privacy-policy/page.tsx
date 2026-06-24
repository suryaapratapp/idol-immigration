import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Idol Immigration website enquiries and consultation communication.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policy"
        title="Privacy Policy"
        copy="How enquiry and consultation information is handled."
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-base leading-8 text-slate-600 sm:px-6 lg:px-8">
          <p>
            Idol Immigration may collect enquiry details such as name, phone,
            email, target country, interested service and message so the team can
            respond to consultation requests.
          </p>
          <p className="mt-4">
            Documents or personal details shared during consultation are used to
            assess the requested service and communicate next steps. Clients
            should avoid sharing unnecessary sensitive information until it is
            requested for the relevant service.
          </p>
        </div>
      </section>
    </>
  );
}
