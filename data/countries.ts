import { countryFaqs, type FAQ } from "./faqs";

export type Country = {
  slug: string;
  name: string;
  flag: string;
  region: string;
  image: {
    src: string;
    alt: string;
    caption: string;
  };
  bestFor: string;
  popularRoutes: string[];
  commonProfile: string;
  worries: string[];
  howIdolHelps: string;
  visasAvailable: string[];
  prEligibility: string;
  workVisaEligibility: string;
  studentVisaEligibility: string;
  mbbsEligibility: string;
  documentsOverview: string[];
  processOverview: string[];
  whyChoose: string[];
  pointsGrid?: {
    title: string;
    minimum: string;
    note: string;
    rows: { factor: string; maximum: string; whatItMeans: string }[];
  };
  overview: string;
  lastUpdated: string;
  officialSourcePlaceholder: string;
  faqs: FAQ[];
};

export const countries: Country[] = [
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    image: {
      src: "/images/countries/uk.svg",
      alt: "Warm illustrated view of London landmarks and the Thames",
      caption: "UK planning with real arrival and settlement context."
    },
    bestFor: "Students seeking globally recognized education, shorter academic timelines and English-speaking exposure.",
    popularRoutes: ["Study abroad", "Visitor visa", "Skilled work planning", "Family routes"],
    commonProfile:
      "Indian students, parents visiting children, skilled professionals and families comparing education plus settlement readiness.",
    worries: ["Course value", "Accommodation", "Part-time work readiness", "Living cost", "Confidence after arrival"],
    howIdolHelps:
      "Idol combines India-side documentation clarity with founder-led UK life experience, helping applicants prepare beyond the visa file.",
    visasAvailable: ["Student visa", "Tourist / visitor visa", "Skilled worker planning", "Dependent and family routes"],
    prEligibility:
      "Long-term settlement normally depends on the route used, lawful residence, work history, sponsorship and current UK criteria.",
    workVisaEligibility:
      "Usually needs an eligible job offer, licensed sponsor, salary fit, English ability and route-specific documents.",
    studentVisaEligibility:
      "Generally requires a genuine course offer, funds, academic fit, English readiness and compliant documentation.",
    mbbsEligibility:
      "Medicine routes are highly competitive and university-specific; students should check academic, English and admission test requirements carefully.",
    documentsOverview: ["Passport and identity documents", "CAS/admission or sponsorship evidence", "Funds, academic and employment records", "SOP, travel history and family documents where relevant"],
    processOverview: ["Profile and route review", "Course, sponsor or visit-purpose planning", "Document preparation", "Application and interview/readiness support"],
    whyChoose: ["Shorter course options for many students", "Large Indian student community", "Strong global education reputation", "Founder-led UK arrival guidance"],
    overview:
      "The UK is often attractive for Indian applicants who want strong academic options, international exposure and a practical English-speaking environment. Idol keeps guidance focused on route fit, funds, documents and realistic settlement preparation.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify current UK requirements on GOV.UK before publishing final rule-specific copy.",
    faqs: countryFaqs.uk
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    image: {
      src: "/images/countries/canada.svg",
      alt: "Warm illustrated Canadian skyline with mountains and pine trees",
      caption: "Canada comparison for study, family and long-term planning."
    },
    bestFor: "Students and skilled professionals who want structured study, family and long-term migration planning.",
    popularRoutes: ["Study permit planning", "Visitor visa", "PR pathway discussion", "Family support"],
    commonProfile:
      "Students with career-focused programs, families visiting relatives and skilled applicants exploring long-term options.",
    worries: ["Funds evidence", "SOP strength", "Course mismatch", "Changing rules", "PR expectations"],
    howIdolHelps:
      "Idol reviews academic logic, funds, documentation and backup plans while keeping official-source verification central.",
    visasAvailable: ["Study permit planning", "Tourist / visitor visa", "PR pathway consultation", "Work permit planning", "Dependent routes"],
    prEligibility:
      "Canada PR planning commonly reviews age, education, skilled work, language scores, adaptability, provincial fit and live program criteria.",
    workVisaEligibility:
      "Work options usually depend on employer support, occupation fit, LMIA or exemption routes, experience and current rules.",
    studentVisaEligibility:
      "Study planning reviews admission, course logic, funds, academic history, language readiness and genuine temporary-resident intent.",
    mbbsEligibility:
      "Canada is usually not a simple direct MBBS destination for Indian students; medical education has strict degree, testing and residency pathways.",
    documentsOverview: ["Passport and identity documents", "Academic records and admission documents", "Proof of funds and family income", "Employment, language, SOP and relationship documents where relevant"],
    processOverview: ["Eligibility and budget review", "Program or pathway shortlist", "Document and SOP planning", "Submission readiness and backup options"],
    whyChoose: ["Structured education options", "Strong Indian community", "Multiple long-term planning pathways", "Good fit for careful profile comparison"],
    pointsGrid: {
      title: "Canada 67 Points Grid",
      minimum: "67 / 100 is the traditional Federal Skilled Worker selection threshold.",
      note: "This grid is for broad planning only. Express Entry ranking, draws and program settings can change.",
      rows: [
        { factor: "Language ability", maximum: "28", whatItMeans: "English/French test scores can strongly affect eligibility." },
        { factor: "Education", maximum: "25", whatItMeans: "Higher assessed education can improve the score." },
        { factor: "Work experience", maximum: "15", whatItMeans: "Skilled, documented experience is reviewed." },
        { factor: "Age", maximum: "12", whatItMeans: "The highest points usually apply to younger skilled applicants." },
        { factor: "Arranged employment", maximum: "10", whatItMeans: "Valid qualifying employment can support the profile." },
        { factor: "Adaptability", maximum: "10", whatItMeans: "Spouse language, Canadian study/work or relatives may help." }
      ]
    },
    overview:
      "Canada remains a major consideration for Indian students and families, but planning must be careful because rules and program settings change. Idol focuses on clarity, documents and realistic alternatives.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify current Canada requirements on official Government of Canada / IRCC sources before publishing.",
    faqs: countryFaqs.canada
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    image: {
      src: "/images/countries/australia.svg",
      alt: "Warm illustrated Sydney harbour and Opera House inspired scene",
      caption: "Australia planning with profile, English and pathway clarity."
    },
    bestFor: "Skilled professionals, students and families comparing education, work and long-term settlement possibilities.",
    popularRoutes: ["Study abroad", "Visitor visa", "General skilled migration planning", "Family routes"],
    commonProfile:
      "Applicants with strong academics, trade or professional backgrounds, English readiness and interest in long-term options.",
    worries: ["Occupation fit", "English scores", "Evidence quality", "Cost", "Timeline uncertainty"],
    howIdolHelps:
      "Idol helps applicants review profile strength, documents, English readiness and country fit before choosing a route.",
    visasAvailable: ["Student visa", "Tourist / visitor visa", "Skilled migration planning", "Work visa planning", "Dependent and family routes"],
    prEligibility:
      "Skilled migration planning usually reviews age, English, occupation, skills assessment, work history, education and nomination options.",
    workVisaEligibility:
      "Work routes often depend on employer sponsorship, occupation list fit, skills evidence, English and health/character requirements.",
    studentVisaEligibility:
      "Student planning reviews genuine student intent, academic progression, funds, English and course-provider requirements.",
    mbbsEligibility:
      "Medicine pathways are university-specific and competitive, with academic, English and admission-test requirements to verify.",
    documentsOverview: ["Passport and identity documents", "Academic, employment and English-test records", "Skills assessment or nomination documents where relevant", "Funds, SOP/GTE and family documents"],
    processOverview: ["Profile and occupation review", "Points and English readiness check", "Documents and route planning", "Application sequencing"],
    whyChoose: ["Recognized education system", "Skilled migration options for suitable profiles", "High quality of life", "Clear points-led planning framework"],
    pointsGrid: {
      title: "Australia 65 Points Grid",
      minimum: "65 points is the usual minimum for points-tested skilled visa consideration.",
      note: "Invitation scores can be higher than the minimum and vary by occupation, state and round.",
      rows: [
        { factor: "Age", maximum: "30", whatItMeans: "Applicants in prime working-age bands usually score higher." },
        { factor: "English language", maximum: "20", whatItMeans: "Higher English scores can improve competitiveness." },
        { factor: "Skilled employment", maximum: "20", whatItMeans: "Relevant overseas/Australian experience may add points." },
        { factor: "Education", maximum: "20", whatItMeans: "Recognized qualifications and Australian study may help." },
        { factor: "Specialist, regional or partner factors", maximum: "Variable", whatItMeans: "Extra factors depend on the applicant's profile." },
        { factor: "Nomination or sponsorship", maximum: "Variable", whatItMeans: "State, regional or family options may change the pathway." }
      ]
    },
    overview:
      "Australia can be attractive for study and skilled migration planning, but applicants need careful assessment of profile, documentation and official criteria before committing.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify current Australia requirements on the Department of Home Affairs website before publishing.",
    faqs: countryFaqs.australia
  },
  {
    slug: "usa",
    name: "USA",
    flag: "🇺🇸",
    region: "North America",
    image: {
      src: "/images/countries/usa.svg",
      alt: "Warm illustrated New York skyline and Statue of Liberty inspired scene",
      caption: "USA planning focused on purpose, documents and confidence."
    },
    bestFor: "Students, visitors and professionals who need strong interview clarity and purpose-driven documentation.",
    popularRoutes: ["Student visa planning", "Visitor visa", "Interview preparation", "Business travel"],
    commonProfile:
      "Students targeting specialized programs, families visiting relatives and applicants needing interview confidence.",
    worries: ["Interview confidence", "Purpose clarity", "Funds", "Ties to India", "Course logic"],
    howIdolHelps:
      "Idol helps applicants prepare consistent documents and clearer interview answers without scripted or artificial responses.",
    visasAvailable: ["Student visa", "Tourist / visitor visa", "Business visitor planning", "Interview preparation", "Dependent routes where applicable"],
    prEligibility:
      "US long-term immigration is route-specific and may involve employer, family, investment or exceptional-ability pathways.",
    workVisaEligibility:
      "Work routes generally depend on employer sponsorship, occupation category, qualifications and route-specific caps or rules.",
    studentVisaEligibility:
      "Student planning focuses on admission, SEVIS/I-20 readiness, funds, academic intent and interview clarity.",
    mbbsEligibility:
      "Medical pathways usually involve pre-med/MD routes or postgraduate exams and licensing, not a simple direct MBBS route.",
    documentsOverview: ["Passport and appointment documents", "Admission, I-20 or invitation details", "Funds, income and sponsor documents", "Academic, employment and India-tie evidence"],
    processOverview: ["Purpose and profile review", "Document and DS/application readiness", "Interview preparation", "Travel or study plan finalization"],
    whyChoose: ["World-leading universities", "Strong specialist programs", "Large Indian diaspora", "Useful for students needing interview preparation"],
    overview:
      "USA applications often depend on clear purpose, credible funds and confident communication. Idol supports applicants with practical preparation and document consistency.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify current USA requirements on official U.S. government sources before publishing.",
    faqs: countryFaqs.usa
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    region: "Oceania",
    image: {
      src: "/images/countries/new-zealand.svg",
      alt: "Warm illustrated New Zealand lake, mountains and calm landscape",
      caption: "New Zealand planning with lifestyle and route-fit awareness."
    },
    bestFor: "Students and families seeking a calmer destination with education, lifestyle and settlement planning.",
    popularRoutes: ["Study abroad", "Visitor visa", "Work-route planning", "Family support"],
    commonProfile:
      "Students comparing New Zealand with Australia, Canada and the UK, plus families prioritizing lifestyle and safety.",
    worries: ["Course value", "Distance from India", "Job readiness", "Cost", "Long-term pathway clarity"],
    howIdolHelps:
      "Idol compares route fit and helps applicants prepare documents, budget and local-life expectations before moving.",
    visasAvailable: ["Student visa", "Tourist / visitor visa", "Work route planning", "Dependent and family support"],
    prEligibility:
      "Long-term planning depends on skilled employment, qualifications, age, English, occupation and current residence rules.",
    workVisaEligibility:
      "Work options commonly require eligible employment, skills fit, employer details and current immigration settings.",
    studentVisaEligibility:
      "Student planning reviews course fit, funds, English, genuine intent and provider requirements.",
    mbbsEligibility:
      "Medicine pathways are limited and highly specific; academic, English and entry requirements must be checked directly with universities.",
    documentsOverview: ["Passport and identity documents", "Admission, employment or invitation documents", "Funds and income records", "Academic, work and family documents where relevant"],
    processOverview: ["Destination fit review", "Course or work-route planning", "Document preparation", "Arrival readiness"],
    whyChoose: ["Calmer lifestyle appeal", "Good education options", "Smaller communities", "Useful comparison with Australia and Canada"],
    overview:
      "New Zealand can suit applicants looking for focused education and a quieter lifestyle, provided the course, funds and future plan are realistic.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify current New Zealand requirements on Immigration New Zealand sources before publishing.",
    faqs: countryFaqs["new-zealand"]
  },
  {
    slug: "europe",
    name: "Europe",
    flag: "🇪🇺",
    region: "Europe",
    image: {
      src: "/images/countries/europe.svg",
      alt: "Warm illustrated European street, arches and evening city scene",
      caption: "Europe needs country-specific comparison, not generic advice."
    },
    bestFor: "Students, visitors and professionals comparing Germany, Ireland and other European routes.",
    popularRoutes: ["Study abroad", "Visitor visa", "Job seeker planning", "Business travel"],
    commonProfile:
      "Applicants open to country comparison, language planning and route-specific cost/timeline review.",
    worries: ["Language requirements", "Country selection", "Job market readiness", "Documentation", "Changing policies"],
    howIdolHelps:
      "Idol helps applicants compare options and prepare route-specific questions before verifying official country requirements.",
    visasAvailable: ["Study visa", "Tourist / Schengen visitor planning", "Job seeker or work route planning", "Business visitor routes", "Dependent routes"],
    prEligibility:
      "Permanent residence depends heavily on the specific country, residence period, work status, language and integration criteria.",
    workVisaEligibility:
      "Work planning usually reviews occupation demand, employer offer, qualification recognition and language expectations.",
    studentVisaEligibility:
      "Student planning reviews admission, funds, language, accommodation and country-specific checklist requirements.",
    mbbsEligibility:
      "Some European countries offer medical programs, but language, recognition, licensing and NMC-related planning should be reviewed carefully.",
    documentsOverview: ["Passport and travel insurance where needed", "Admission, job, invitation or accommodation documents", "Funds and sponsor evidence", "Academic, language and employment records"],
    processOverview: ["Choose the exact country first", "Check language and recognition requirements", "Prepare documents", "Plan visa and arrival steps"],
    whyChoose: ["Wide range of study costs", "Country-specific work options", "Strong technical programs in some countries", "Good for applicants open to comparison"],
    overview:
      "Europe is not one single visa market. Idol keeps planning country-specific, practical and careful about official-source verification.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify requirements on the relevant official European country source before publishing.",
    faqs: countryFaqs.europe
  },
  {
    slug: "uae-other-destinations",
    name: "UAE / Other Destinations",
    flag: "🇦🇪",
    region: "Middle East + global",
    image: {
      src: "/images/countries/uae-other.svg",
      alt: "Warm illustrated UAE skyline, desert light and global mobility scene",
      caption: "Regional and other destinations compared by purpose and fit."
    },
    bestFor: "Applicants exploring regional work, visitor, business or stepping-stone international plans.",
    popularRoutes: ["Visitor visa", "Business travel", "Work guidance", "Family visits"],
    commonProfile:
      "Applicants who want practical international exposure, family visits or route comparison beyond traditional study destinations.",
    worries: ["Route selection", "Cost", "Sponsor details", "Documentation", "Long-term fit"],
    howIdolHelps:
      "Idol helps clarify purpose, documents and whether the destination supports the applicant's bigger plan.",
    visasAvailable: ["Tourist / visitor visa", "Work guidance", "Business travel", "Family visit routes", "Other destination planning"],
    prEligibility:
      "Long-term residence or permanent pathways vary significantly by destination and should be checked country by country.",
    workVisaEligibility:
      "Work routes usually depend on employer sponsorship, offer details, occupation, salary and local labour rules.",
    studentVisaEligibility:
      "Student routes depend on the destination, institution, funds and recognition of the course.",
    mbbsEligibility:
      "MBBS abroad options vary by country, university recognition, language, fees and licensing pathway after graduation.",
    documentsOverview: ["Passport and photos", "Offer, invitation, sponsor or admission documents", "Funds and income proof", "Travel, accommodation and relationship records where relevant"],
    processOverview: ["Clarify the destination and purpose", "Check sponsor or institution details", "Prepare document set", "Review travel and arrival plan"],
    whyChoose: ["Useful for regional work and travel", "Often faster visitor planning", "Family and business visit options", "Good stepping-stone comparison for some applicants"],
    overview:
      "Some applicants need comparison beyond the obvious destinations. Idol helps keep the decision practical, documented and aligned with the applicant's long-term goal.",
    lastUpdated: "June 15, 2026",
    officialSourcePlaceholder: "Verify requirements on the relevant official destination source before publishing.",
    faqs: countryFaqs.europe
  }
];

export const countryBySlug = (slug: string) =>
  countries.find((country) => country.slug === slug);
