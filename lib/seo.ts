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
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "LG-006, DLF Grand Mall, Mehrauli Road, near Sikanderpur, Sector 28, DLF Phase 1",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "42",
      bestRating: "5",
      worstRating: "1"
    },
    description: site.description,
    areaServed: [
      "India",
      "United Kingdom",
      "Canada",
      "Australia",
      "United States",
      "New Zealand",
      "Europe"
    ],
    serviceType: [
      "Study abroad counselling",
      "Tourist / visitor visa guidance",
      "Permanent residency consultation",
      "Skilled migration guidance",
      "Work visa consultation",
      "Dependent visa support",
      "MBBS abroad counselling",
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
    sameAs: [
      site.founders.jagdeep,
      site.founders.pooja,
      site.socials.instagram,
      site.socials.linkedin,
      site.socials.facebook,
      site.socials.youtube
    ]
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
