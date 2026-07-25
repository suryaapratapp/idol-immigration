import type { Metadata } from "next";
import { site } from "@/data/site";
import type { FAQ } from "@/data/faqs";
import type { Service } from "@/data/services";

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
  const pageTitle = title.includes(site.shortName)
    ? { absolute: title }
    : title;

  return {
    metadataBase: new URL(site.url),
    title: pageTitle,
    description,
    keywords,
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
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "x-default": url
      }
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.shortName,
      type: "website",
      locale: "en_IN",
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
    image: absoluteUrl("/images/global-journey-hero.png"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/logo-idol.png")
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "LG-006, DLF Grand Mall, Mehrauli Road, near Sikanderpur, Sector 28, DLF Phase 1",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN"
    },
    description: site.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.whatsappNumber,
      email: site.email
    },
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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.shortName,
    alternateName: site.name,
    url: site.url,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${site.url}/#organization`
    }
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.pageIntro,
    serviceType: service.shortTitle,
    provider: {
      "@id": `${site.url}/#organization`,
      "@type": "ProfessionalService",
      name: site.name
    },
    areaServed: ["Gurugram", "Delhi NCR", "Haryana", "India"],
    url: absoluteUrl(`/services/${service.slug}`)
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
