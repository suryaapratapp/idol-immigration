import { countryFaqs, type FAQ } from "./faqs";

export type Country = {
  slug: string;
  name: string;
  region: string;
  bestFor: string;
  popularRoutes: string[];
  commonProfile: string;
  worries: string[];
  howIdolHelps: string;
  overview: string;
  lastUpdated: string;
  officialSourcePlaceholder: string;
  faqs: FAQ[];
};

export const countries: Country[] = [
  {
    slug: "uk",
    name: "United Kingdom",
    region: "Europe",
    bestFor: "Students seeking globally recognized education, shorter academic timelines and English-speaking exposure.",
    popularRoutes: ["Study abroad", "Visitor visa", "Skilled work planning", "Family routes"],
    commonProfile:
      "Indian students, parents visiting children, skilled professionals and families comparing education plus settlement readiness.",
    worries: ["Course value", "Accommodation", "Part-time work readiness", "Living cost", "Confidence after arrival"],
    howIdolHelps:
      "Idol combines India-side documentation clarity with founder-led UK life experience, helping applicants prepare beyond the visa file.",
    overview:
      "The UK is often attractive for Indian applicants who want strong academic options, international exposure and a practical English-speaking environment. Idol keeps guidance focused on route fit, funds, documents and realistic settlement preparation.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify current UK requirements on GOV.UK before publishing final rule-specific copy.",
    faqs: countryFaqs.uk
  },
  {
    slug: "canada",
    name: "Canada",
    region: "North America",
    bestFor: "Students and skilled professionals who want structured study, family and long-term migration planning.",
    popularRoutes: ["Study permit planning", "Visitor visa", "PR pathway discussion", "Family support"],
    commonProfile:
      "Students with career-focused programs, families visiting relatives and skilled applicants exploring long-term options.",
    worries: ["Funds evidence", "SOP strength", "Course mismatch", "Changing rules", "PR expectations"],
    howIdolHelps:
      "Idol reviews academic logic, funds, documentation and backup plans while keeping official-source verification central.",
    overview:
      "Canada remains a major consideration for Indian students and families, but planning must be careful because rules and program settings change. Idol focuses on clarity, documents and realistic alternatives.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify current Canada requirements on official Government of Canada / IRCC sources before publishing.",
    faqs: countryFaqs.canada
  },
  {
    slug: "australia",
    name: "Australia",
    region: "Oceania",
    bestFor: "Skilled professionals, students and families comparing education, work and long-term settlement possibilities.",
    popularRoutes: ["Study abroad", "Visitor visa", "General skilled migration planning", "Family routes"],
    commonProfile:
      "Applicants with strong academics, trade or professional backgrounds, English readiness and interest in long-term options.",
    worries: ["Occupation fit", "English scores", "Evidence quality", "Cost", "Timeline uncertainty"],
    howIdolHelps:
      "Idol helps applicants review profile strength, documents, English readiness and country fit before choosing a route.",
    overview:
      "Australia can be attractive for study and skilled migration planning, but applicants need careful assessment of profile, documentation and official criteria before committing.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify current Australia requirements on the Department of Home Affairs website before publishing.",
    faqs: countryFaqs.australia
  },
  {
    slug: "usa",
    name: "USA",
    region: "North America",
    bestFor: "Students, visitors and professionals who need strong interview clarity and purpose-driven documentation.",
    popularRoutes: ["Student visa planning", "Visitor visa", "Interview preparation", "Business travel"],
    commonProfile:
      "Students targeting specialized programs, families visiting relatives and applicants needing interview confidence.",
    worries: ["Interview confidence", "Purpose clarity", "Funds", "Ties to India", "Course logic"],
    howIdolHelps:
      "Idol helps applicants prepare consistent documents and clearer interview answers without scripted or artificial responses.",
    overview:
      "USA applications often depend on clear purpose, credible funds and confident communication. Idol supports applicants with practical preparation and document consistency.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify current USA requirements on official U.S. government sources before publishing.",
    faqs: countryFaqs.usa
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    region: "Oceania",
    bestFor: "Students and families seeking a calmer destination with education, lifestyle and settlement planning.",
    popularRoutes: ["Study abroad", "Visitor visa", "Work-route planning", "Family support"],
    commonProfile:
      "Students comparing New Zealand with Australia, Canada and the UK, plus families prioritizing lifestyle and safety.",
    worries: ["Course value", "Distance from India", "Job readiness", "Cost", "Long-term pathway clarity"],
    howIdolHelps:
      "Idol compares route fit and helps applicants prepare documents, budget and local-life expectations before moving.",
    overview:
      "New Zealand can suit applicants looking for focused education and a quieter lifestyle, provided the course, funds and future plan are realistic.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify current New Zealand requirements on Immigration New Zealand sources before publishing.",
    faqs: countryFaqs["new-zealand"]
  },
  {
    slug: "europe",
    name: "Europe",
    region: "Europe",
    bestFor: "Students, visitors and professionals comparing Germany, Ireland and other European routes.",
    popularRoutes: ["Study abroad", "Visitor visa", "Job seeker planning", "Business travel"],
    commonProfile:
      "Applicants open to country comparison, language planning and route-specific cost/timeline review.",
    worries: ["Language requirements", "Country selection", "Job market readiness", "Documentation", "Changing policies"],
    howIdolHelps:
      "Idol helps applicants compare options and prepare route-specific questions before verifying official country requirements.",
    overview:
      "Europe is not one single visa market. Idol keeps planning country-specific, practical and careful about official-source verification.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify requirements on the relevant official European country source before publishing.",
    faqs: countryFaqs.europe
  },
  {
    slug: "hong-kong",
    name: "Hong Kong",
    region: "Asia",
    bestFor: "Business, visitor and regional mobility planning for applicants with clear purpose and documentation.",
    popularRoutes: ["Visitor visa", "Business travel", "Work-route discussion"],
    commonProfile:
      "Business travellers, visitors and professionals comparing Asia-Pacific options.",
    worries: ["Purpose clarity", "Invitation documents", "Business evidence", "Travel history"],
    howIdolHelps:
      "Idol helps applicants organize purpose, invitations, travel plans and supporting evidence with official-source checks.",
    overview:
      "Hong Kong can be relevant for visitors and business applicants who need clear evidence and travel purpose.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify current Hong Kong immigration requirements on official government sources before publishing.",
    faqs: countryFaqs.europe
  },
  {
    slug: "uae-other-destinations",
    name: "UAE / Other Destinations",
    region: "Middle East + global",
    bestFor: "Applicants exploring regional work, visitor, business or stepping-stone international plans.",
    popularRoutes: ["Visitor visa", "Business travel", "Work guidance", "Family visits"],
    commonProfile:
      "Applicants who want practical international exposure, family visits or route comparison beyond traditional study destinations.",
    worries: ["Route selection", "Cost", "Sponsor details", "Documentation", "Long-term fit"],
    howIdolHelps:
      "Idol helps clarify purpose, documents and whether the destination supports the applicant's bigger plan.",
    overview:
      "Some applicants need comparison beyond the obvious destinations. Idol helps keep the decision practical, documented and aligned with the applicant's long-term goal.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify requirements on the relevant official destination source before publishing.",
    faqs: countryFaqs.europe
  }
];

export const countryBySlug = (slug: string) =>
  countries.find((country) => country.slug === slug);
