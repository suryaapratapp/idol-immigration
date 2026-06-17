export const site = {
  name: "Idol Immigration & Overseas Consultants",
  shortName: "Idol Immigration",
  domain: "idolimmigration.com",
  url: "https://idolimmigration.com",
  email: "info@idolimmigration.com",
  whatsappNumber: "+918527427723",
  whatsappDigits: "918527427723",
  whatsappText:
    "Hi Idol Immigration, I want guidance for my visa or study abroad plan.",
  tagline: "Not just visa filing. Real guidance from people who have lived the journey.",
  description:
    "Founder-led visa, study abroad, immigration and overseas settlement guidance for Indian students, families and professionals.",
  founders: {
    jagdeep: "https://www.linkedin.com/in/migrationmentor/",
    pooja: "https://www.linkedin.com/in/pooja-bhardwaj-ma/"
  }
};

export const whatsappLink = (message = site.whatsappText) =>
  `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`;

export const serviceNavLinks = [
  { label: "Study Abroad", href: "/services/study-abroad" },
  { label: "Visit Visa", href: "/services/visitor-visa" },
  { label: "PR & Skilled Migration", href: "/services/pr-skilled-migration" },
  { label: "Work & Business Visa", href: "/services/work-business-visa" }
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Countries", href: "/countries" },
  { label: "Settlement Support", href: "/settlement-support" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" }
];

export const stats = [
  { value: "10+", label: "Years of Trust" },
  { value: "5k+", label: "Happy Clients & Students" },
  { value: "580+", label: "University Network" },
  { value: "10k+", label: "Visa & Immigration Cases" },
  { value: "India + UK", label: "Perspective" },
  { value: "Multi-Country", label: "Guidance" }
];

export const trustStrip = [
  "10+ years experience",
  "5k+ clients/students",
  "580+ university network",
  "India + UK perspective"
];
