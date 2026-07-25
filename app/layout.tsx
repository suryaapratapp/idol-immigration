import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { MobileBottomCTA } from "@/components/MobileBottomCTA";
import { professionalServiceSchema, websiteSchema } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.shortName,
  title: {
    default: `${site.shortName} | Visa, Study Abroad & Settlement Guidance`,
    template: `%s | ${site.shortName}`
  },
  description: site.description,
  category: "Immigration and study abroad consultancy",
  referrer: "strict-origin-when-cross-origin",
  icons: {
    icon: [
      {
        url: "/images/logo-idol.png",
        type: "image/png"
      }
    ],
    shortcut: "/images/logo-idol.png",
    apple: "/images/logo-idol.png"
  },
  alternates: {
    canonical: site.url,
    languages: {
      "en-IN": site.url,
      "x-default": site.url
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: `${site.shortName} | Visa, Study Abroad & Settlement Guidance`,
    description: site.description,
    url: site.url,
    siteName: site.shortName,
    images: ["/images/global-journey-hero.png"],
    type: "website",
    locale: "en_IN"
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
        <GoogleAnalytics />
        <JsonLd data={[professionalServiceSchema(), websiteSchema()]} />
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
