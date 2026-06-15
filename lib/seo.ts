import type { Metadata } from "next";
import { site } from "@/data/site";
import type { FAQ } from "@/data/faqs";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(site.shortName)
    ? title
    : `${title} | ${site.shortName}`;

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.shortName,
      type: "website",
      images: [
        {
          url: "/images/global-journey-hero.png",
          width: 1792,
          height: 1024,
          alt: "Premium global migration visual for Idol Immigration"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/global-journey-hero.png"]
    }
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.whatsappNumber,
    description: site.description,
    areaServed: [
      "India",
      "United Kingdom",
      "Canada",
      "Australia",
      "United States",
      "New Zealand",
      "Europe",
      "Hong Kong"
    ],
    serviceType: [
      "Study abroad counselling",
      "Visitor visa guidance",
      "Permanent residency consultation",
      "Skilled migration guidance",
      "Spouse and family visa support",
      "Visa refusal review",
      "Overseas settlement support"
    ],
    founder: [
      {
        "@type": "Person",
        name: "Jagdeep Sharma",
        sameAs: site.founders.jagdeep
      },
      {
        "@type": "Person",
        name: "Pooja Bhardwaj",
        sameAs: site.founders.pooja
      }
    ],
    sameAs: [site.founders.jagdeep, site.founders.pooja]
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href)
    }))
  };
}
