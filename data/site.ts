export const site = {
  name: "Idol Immigration & Overseas Consultants",
  shortName: "Idol Immigration",
  domain: "idolimmigration.com",
  url: "https://idolimmigration.com",
  email: "info@idolimmigration.com",
  whatsappNumber: "+918527427723",
  whatsappDigits: "918527427723",
  phoneDisplay: "085274 27723",
  address:
    "LG-006, DLF Grand Mall, Mehrauli Road, near Sikanderpur, Sector 28, DLF Phase 1, Gurugram, Haryana 122002",
  googleReviewsUrl:
    "https://www.google.com/search?q=Idol+Immigration+Reviews",
  whatsappText:
    "Hi Idol Immigration, I want guidance for my visa or study abroad plan.",
  tagline: "Premium visa and study abroad guidance for Indian applicants.",
  description:
    "Premium immigration, study abroad, PR, work visa, tourist visa, MBBS abroad and dependent visa guidance for Indian students, families and professionals.",
  founders: {
    jagdeep: "https://www.linkedin.com/in/migrationmentor/",
    pooja: "https://www.linkedin.com/in/pooja-bhardwaj-ma/"
  },
  socials: {
    instagram: "https://www.instagram.com/idolimmigrationofficial",
    linkedin: "https://www.linkedin.com/company/idol-immigration/",
    facebook: "https://www.facebook.com/IMStudyabroad",
    youtube: "https://www.youtube.com/@idolimmigration"
  }
};

export const whatsappLink = (message = site.whatsappText) =>
  `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`;

export const serviceNavLinks = [
  { label: "Study Abroad", href: "/services/study-abroad" },
  { label: "Tourist / Visitor Visa", href: "/services/visitor-visa" },
  { label: "PR & Skilled Migration", href: "/services/pr-skilled-migration" },
  { label: "Work Visa", href: "/services/work-business-visa" },
  { label: "Dependent Visa", href: "/services/dependent-visa" }
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Countries", href: "/countries" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blogs", href: "/blogs" }
];

export const footerQuickLinks = [
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "FAQs", href: "/faqs" }
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
