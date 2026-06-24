import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for using Idol Immigration services and website.",
  path: "/terms-conditions"
});

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Policy"
        title="Terms & Conditions"
        copy="Basic terms for using the website and starting a consultation."
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-base leading-8 text-slate-600 sm:px-6 lg:px-8">
          <p>
            Website content is provided for general planning and service
            information. A paid service, if any, should be understood through the
            agreed scope, fee, timeline and document requirements shared by Idol
            Immigration.
          </p>
          <p className="mt-4">
            Clients are responsible for providing accurate information and
            genuine documents. Any third-party fee, government fee or institution
            decision is outside Idol Immigration&apos;s direct control.
          </p>
        </div>
      </section>
    </>
  );
}
