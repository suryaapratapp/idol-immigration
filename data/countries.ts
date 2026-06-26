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
  routeHighlights?: {
    title: string;
    copy: string;
    links?: { label: string; href: string }[];
  }[];
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
    popularRoutes: ["UK student visa for Indian students", "UK visitor visa", "UK Skilled Worker Visa", "UK dependent visa"],
    commonProfile:
      "Indian students, parents visiting children, skilled professionals and families comparing education plus settlement readiness.",
    worries: ["Course value", "Accommodation", "Part-time work readiness", "Living cost", "Confidence after arrival"],
    howIdolHelps:
      "Idol combines India-side documentation clarity with founder-led UK life experience, helping applicants who need a UK visa consultant in Gurugram or UK study visa consultant support beyond the visa file.",
    visasAvailable: ["UK Student Visa", "UK visitor visa", "UK Skilled Worker Visa", "UK dependent visa", "Study and work options"],
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
    routeHighlights: [
      {
        title: "UK Student Visa for Indian Students",
        copy:
          "Guidance for course selection, CAS readiness, funds, SOP logic, accommodation and UK study visa consultant support for Indian students."
      },
      {
        title: "UK Skilled Worker Visa",
        copy:
          "Profile and document planning for applicants reviewing job offer, sponsor, salary, English and route-specific requirements."
      },
      {
        title: "UK Visitor and Dependent Visa",
        copy:
          "Support for UK visitor visa, UK dependent visa, family visit purpose, relationship evidence, funds and India-tie documents."
      }
    ],
    overview:
      "The UK is often attractive for Indian applicants who want strong academic options, international exposure and a practical English-speaking environment. Idol keeps guidance focused on UK student visa for Indian students, UK Skilled Worker Visa, UK visitor visa, UK dependent visa, route fit, funds, documents and realistic settlement preparation.",
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
    popularRoutes: ["Canada PR from India", "Canada Express Entry", "Canada PNP", "Canada study visa", "Canada visitor visa from India"],
    commonProfile:
      "Students with career-focused programs, families visiting relatives and skilled applicants exploring long-term options.",
    worries: ["Funds evidence", "SOP strength", "Course mismatch", "Changing rules", "PR expectations"],
    howIdolHelps:
      "Idol reviews Canada PR from India, Canada Express Entry, Canada PNP, study visa, visitor visa, funds, documentation and backup plans while keeping official-source verification central.",
    visasAvailable: ["Canada PR", "Canada Express Entry", "Canada PNP", "Canada study visa", "Canada visitor visa from India", "Canada work permit", "Spouse open work permit Canada", "Canada super visa", "Family sponsorship Canada"],
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
    routeHighlights: [
      {
        title: "Canada PR, Express Entry and PNP",
        copy:
          "Planning support for Canada PR from India, Canada Express Entry, Canada PNP, CRS score calculator review and Canada 67 points calculator basics."
      },
      {
        title: "Canada Study Visa and Visitor Visa",
        copy:
          "Guidance for Canada study visa, Canada visitor visa from India, SOP, funds, invitation, itinerary and home-country tie documents."
      },
      {
        title: "Canada Work Permit, SOWP and Super Visa",
        copy:
          "Support for Canada work permit planning, spouse open work permit Canada, Canada super visa and family sponsorship Canada document readiness."
      }
    ],
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
      "Canada remains a major consideration for Indian students and families looking at Canada PR from India, Canada Express Entry, Canada PNP, Canada study visa, Canada visitor visa from India, spouse open work permit Canada and Canada super visa. Idol focuses on clarity, documents and realistic alternatives.",
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
    popularRoutes: ["Australia PR from India", "Australia Subclass 189 visa", "Australia Subclass 190 visa", "Australia Subclass 491 visa", "Australia student visa"],
    commonProfile:
      "Applicants with strong academics, trade or professional backgrounds, English readiness and interest in long-term options.",
    worries: ["Occupation fit", "English scores", "Evidence quality", "Cost", "Timeline uncertainty"],
    howIdolHelps:
      "Idol helps applicants review Australia PR from India, Australia skilled migration, SkillSelect, skills assessment, state nomination, student visa and tourist visa options before choosing a route.",
    visasAvailable: ["Australia PR", "Skilled Independent Visa Subclass 189", "Skilled Nominated Visa Subclass 190", "Skilled Work Regional Visa Subclass 491", "Australia student visa", "Australia tourist visa", "Australia spouse visa", "Skills assessment"],
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
    routeHighlights: [
      {
        title: "Australia PR and Skilled Migration",
        copy:
          "Profile review for Australia PR from India, Australia skilled migration, Australia 65 points calculator, SkillSelect and occupation-fit planning."
      },
      {
        title: "Subclass 189, 190 and 491 Visas",
        copy:
          "Guidance on the difference between Australia Subclass 189 visa, Australia Subclass 190 visa and Australia Subclass 491 visa, including nomination and regional factors."
      },
      {
        title: "Australia Student, Tourist and Spouse Visa",
        copy:
          "Support for Australia student visa, GTE review for Australia student visa, Australia tourist visa and Australia spouse visa document planning."
      },
      {
        title: "Skills Assessment and State Nomination",
        copy:
          "Early review of occupation, assessing authority direction, skills assessment records, English readiness and state nomination possibilities."
      }
    ],
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
      "Australia can be attractive for Australia PR from India, Australia skilled migration, Australia student visa, Australia tourist visa and Australia spouse visa planning, but applicants need careful assessment of profile, documentation and official criteria before committing.",
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
    popularRoutes: ["USA student visa", "F1 visa for Indian students", "USA B1/B2 visa consultant", "USA tourist visa", "USA visitor visa"],
    commonProfile:
      "Students targeting specialized programs, families visiting relatives and applicants needing interview confidence.",
    worries: ["Interview confidence", "Purpose clarity", "Funds", "Ties to India", "Course logic"],
    howIdolHelps:
      "Idol helps applicants prepare consistent documents and clearer interview answers without scripted or artificial responses.",
    visasAvailable: ["F1 Student Visa", "B1/B2 Visitor Visa", "USA tourist visa", "USA visitor visa", "Interview preparation", "Documentation guidance"],
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
    routeHighlights: [
      {
        title: "F1 Visa for Indian Students",
        copy:
          "USA student visa planning for admission, I-20/SEVIS readiness, funds, academic intent and interview preparation for visa."
      },
      {
        title: "USA B1/B2 Visitor Visa",
        copy:
          "USA B1/B2 visa consultant support for tourism, family visits, business visits, purpose clarity, documentation guidance and India-tie evidence."
      },
      {
        title: "USA Interview Preparation",
        copy:
          "Practice focused on clear, natural answers that match documents, travel purpose, study plan, funds and previous history."
      }
    ],
    overview:
      "USA applications often depend on clear purpose, credible funds and confident communication. Idol supports USA student visa, F1 visa for Indian students, USA B1/B2 visitor visa, USA tourist visa and USA visitor visa applicants with practical preparation and document consistency.",
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
    popularRoutes: ["Germany Opportunity Card", "Germany job seeker visa", "Germany work visa", "EU Blue Card", "Schengen tourist visa from India"],
    commonProfile:
      "Applicants open to country comparison, language planning and route-specific cost/timeline review.",
    worries: ["Language requirements", "Country selection", "Job market readiness", "Documentation", "Changing policies"],
    howIdolHelps:
      "Idol helps applicants compare options and prepare route-specific questions before verifying official country requirements.",
    visasAvailable: ["Germany Opportunity Card", "Germany job seeker visa", "Germany work visa", "Germany student visa", "EU Blue Card", "Schengen tourist visa from India", "Europe study visa", "Europe work visa"],
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
    routeHighlights: [
      {
        title: "Germany Opportunity Card and Job Seeker Visa",
        copy:
          "Planning support for Germany Opportunity Card, Germany job seeker visa, qualification review, funds, language expectations and document sequencing."
      },
      {
        title: "Germany Work Visa and EU Blue Card",
        copy:
          "Guidance for Germany work visa and EU Blue Card applicants reviewing employment, salary, qualifications and recognition requirements."
      },
      {
        title: "Germany Student Visa and Europe Study Visa",
        copy:
          "Study route support for Germany student visa, Europe study visa, funds, admission, accommodation and country-specific checklist planning."
      },
      {
        title: "Schengen Tourist Visa from India",
        copy:
          "Tourist / visitor visa document support for itinerary, hotel, insurance, funds, employment or business proof and return intent."
      }
    ],
    overview:
      "Europe is not one single visa market. Idol keeps planning country-specific for Germany Opportunity Card, Germany job seeker visa, Germany work visa, Germany student visa, EU Blue Card, Schengen tourist visa from India, Europe study visa and Europe work visa applicants.",
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
