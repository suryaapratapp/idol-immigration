import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileBottomCTA } from "@/components/MobileBottomCTA";
import { professionalServiceSchema } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Visa, Study Abroad & Settlement Guidance`,
    template: `%s | ${site.shortName}`
  },
  description: site.description,
  alternates: {
    canonical: site.url
  },
  openGraph: {
    title: `${site.shortName} | Visa, Study Abroad & Settlement Guidance`,
    description: site.description,
    url: site.url,
    siteName: site.shortName,
    images: ["/images/global-journey-hero.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/global-journey-hero.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <JsonLd data={professionalServiceSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <EnquiryPopup />
        <FloatingWhatsAppButton />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
