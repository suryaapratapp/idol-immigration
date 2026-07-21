export type AdvisorGoal = "study" | "work" | "pr" | "explore";

export type AdvisorProfile = {
  goal: AdvisorGoal;
  age: string;
  education: string;
  experience: string;
  english: string;
  budget: string;
  preferredCountry: string;
  currentRole: string;
  cvText: string;
};

export type PathwayRoute = {
  country: string;
  flag: string;
  slug: string;
  route: string;
  fit: number;
  summary: string;
  reasons: string[];
  nextMove: string;
};

export type RoleMatch = {
  title: string;
  fit: number;
  why: string;
  skills: string[];
  bestMarkets: string[];
  priorityAction: string;
};

export type EuropeBudgetOption = {
  country: string;
  code: string;
  fit: number;
  budgetFit: string;
  why: string;
  action: string;
  officialUrl: string;
};

export type PreDepartureArea = {
  title: string;
  timing: string;
  items: string[];
};

export type AdvisorAnalysis = {
  reportId: string;
  readiness: number;
  cvScore: number;
  wordCount: number;
  roleFamily: string;
  headline: string;
  routes: PathwayRoute[];
  roleMatches: RoleMatch[];
  profileSignals: { label: string; value: string; detail: string }[];
  detectedSkills: string[];
  europeOptions: EuropeBudgetOption[];
  preDeparture: PreDepartureArea[];
  strengths: string[];
  gaps: string[];
  actionPlan: { period: string; title: string; actions: string[] }[];
};

export const advisorOptions = {
  goals: [
    { value: "study", label: "Study abroad" },
    { value: "work", label: "Find work abroad" },
    { value: "pr", label: "PR / skilled migration" },
    { value: "explore", label: "Compare my best options" }
  ],
  ages: ["18 - 24", "25 - 29", "30 - 34", "35 - 39", "40+"],
  education: [
    "Higher secondary",
    "Diploma",
    "Bachelor's degree",
    "Master's degree",
    "Doctorate"
  ],
  experience: ["0 - 1 year", "2 - 4 years", "5 - 8 years", "9+ years"],
  english: ["Not tested", "Basic", "Working proficiency", "Strong", "Advanced / test ready"],
  budgets: ["Under INR 10 lakh", "INR 10 - 20 lakh", "INR 20 - 35 lakh", "INR 35 lakh+"],
  countries: [
    "Open to best fit",
    "United Kingdom",
    "Canada",
    "Australia",
    "USA",
    "New Zealand",
    "Europe / Germany",
    "UAE"
  ]
};

type RoleFamily = {
  label: string;
  keywords: string[];
  roles: string[];
  skills: string[];
  hotCountries: string[];
};

const roleFamilies: RoleFamily[] = [
  {
    label: "Technology & Data",
    keywords: [
      "software", "developer", "engineer", "javascript", "python", "java", "react", "cloud",
      "data", "analyst", "sql", "cyber", "devops", "machine learning", "product manager"
    ],
    roles: ["Software Engineer", "Data Analyst", "Cloud & DevOps Specialist", "Product Analyst", "Cybersecurity Analyst"],
    skills: ["Cloud certification", "SQL / analytics portfolio", "System design evidence", "Product metrics", "Security fundamentals"],
    hotCountries: ["Canada", "Australia", "United Kingdom", "Europe / Germany"]
  },
  {
    label: "Healthcare & Life Sciences",
    keywords: [
      "nurse", "nursing", "doctor", "medical", "pharma", "pharmacy", "clinical", "healthcare",
      "physiotherapist", "laboratory", "biotech", "dentist"
    ],
    roles: ["Healthcare Professional", "Clinical Operations Coordinator", "Life Sciences Specialist", "Healthcare Data Coordinator", "Quality & Compliance Associate"],
    skills: ["Professional registration research", "Clinical English", "Credential assessment", "Healthcare systems", "Quality compliance"],
    hotCountries: ["United Kingdom", "Australia", "New Zealand", "Europe / Germany"]
  },
  {
    label: "Engineering & Skilled Trades",
    keywords: [
      "mechanical", "civil", "electrical", "electronics", "construction", "architect", "autocad",
      "manufacturing", "quality", "welder", "technician", "plumber", "electrician"
    ],
    roles: ["Project Engineer", "Engineering Technologist", "Quality & Operations Specialist", "Maintenance Engineer", "Construction Project Coordinator"],
    skills: ["CAD / technical portfolio", "Safety certification", "Skills assessment evidence", "Project controls", "Technical standards"],
    hotCountries: ["Australia", "Canada", "New Zealand", "Europe / Germany"]
  },
  {
    label: "Finance, Business & Operations",
    keywords: [
      "finance", "accounting", "accountant", "audit", "banking", "business", "operations",
      "sales", "supply chain", "logistics", "hr", "human resources", "consultant", "management"
    ],
    roles: ["Business Analyst", "Finance & Reporting Analyst", "Operations Coordinator", "Supply Chain Analyst", "Customer Success Manager"],
    skills: ["Advanced Excel / BI", "International reporting standards", "Stakeholder outcomes", "Process improvement", "Commercial communication"],
    hotCountries: ["United Kingdom", "Canada", "UAE", "Australia"]
  },
  {
    label: "Marketing, Design & Communications",
    keywords: [
      "marketing", "seo", "content", "designer", "design", "social media", "brand", "creative",
      "communications", "copywriter", "advertising", "ui", "ux"
    ],
    roles: ["Growth Marketing Specialist", "Digital Content Strategist", "Product Designer", "CRM & Lifecycle Specialist", "UX Researcher"],
    skills: ["Results-led portfolio", "Analytics tooling", "Market-specific case studies", "CRM automation", "User research evidence"],
    hotCountries: ["United Kingdom", "UAE", "Canada", "Europe / Germany"]
  },
  {
    label: "Education & Student Profile",
    keywords: [
      "student", "teacher", "teaching", "lecturer", "professor", "school", "university", "tutor",
      "research", "academic", "graduate"
    ],
    roles: ["Education Coordinator", "Research Assistant", "Student Services Adviser", "Learning Designer", "Academic Programme Administrator"],
    skills: ["Academic writing", "Research portfolio", "Local safeguarding requirements", "Learning technology", "Programme operations"],
    hotCountries: ["United Kingdom", "Canada", "Australia", "New Zealand"]
  }
];

const generalFamily: RoleFamily = {
  label: "General Professional & Operations",
  keywords: [],
  roles: ["Operations Coordinator", "Customer Success Associate", "Business Support Specialist", "Project Administrator", "Service Delivery Coordinator"],
  skills: ["Results-led CV", "Digital productivity tools", "Customer or stakeholder evidence", "Project tracking", "Service operations"],
  hotCountries: ["United Kingdom", "Canada", "Australia", "UAE"]
};

type CountryRule = {
  country: string;
  flag: string;
  slug: string;
  base: Record<AdvisorGoal, number>;
  routes: Record<AdvisorGoal, string>;
  summary: string;
  nextMove: string;
};

const countryRules: CountryRule[] = [
  {
    country: "United Kingdom",
    flag: "GB",
    slug: "uk",
    base: { study: 76, work: 69, pr: 61, explore: 69 },
    routes: {
      study: "Course-to-career study plan",
      work: "Skilled Worker pathway",
      pr: "Skilled Worker to settlement plan",
      explore: "Study or Skilled Worker comparison"
    },
    summary: "Strong for English-speaking study, specialist careers and employer-sponsored work.",
    nextMove: "Map suitable courses or licensed-sponsor roles, then check funds and English readiness."
  },
  {
    country: "Canada",
    flag: "CA",
    slug: "canada",
    base: { study: 70, work: 68, pr: 76, explore: 71 },
    routes: {
      study: "Career-aligned study pathway",
      work: "Employer, PNP and Express Entry review",
      pr: "Express Entry and PNP profile build",
      explore: "Study, PNP and skilled route comparison"
    },
    summary: "Best considered through a careful study, provincial and skilled-profile comparison.",
    nextMove: "Estimate language and credential-assessment readiness before choosing a province or program."
  },
  {
    country: "Australia",
    flag: "AU",
    slug: "australia",
    base: { study: 71, work: 72, pr: 77, explore: 72 },
    routes: {
      study: "Study and graduate-career plan",
      work: "Skills assessment and sponsored work review",
      pr: "Subclass 189 / 190 / 491 comparison",
      explore: "Study and points-tested pathway comparison"
    },
    summary: "A strong fit for qualified applicants with English readiness and assessable skills.",
    nextMove: "Confirm occupation fit, skills-assessment evidence and realistic English targets."
  },
  {
    country: "Europe / Germany",
    flag: "EU",
    slug: "europe",
    base: { study: 73, work: 76, pr: 65, explore: 71 },
    routes: {
      study: "European study and employability plan",
      work: "Germany Opportunity Card / EU Blue Card review",
      pr: "Skilled work to long-term residence plan",
      explore: "Study, Opportunity Card and Blue Card comparison"
    },
    summary: "Compelling for technical careers, value-conscious study and structured job-search routes.",
    nextMove: "Check qualification recognition, target-role demand and whether local-language skills are needed."
  },
  {
    country: "New Zealand",
    flag: "NZ",
    slug: "new-zealand",
    base: { study: 68, work: 70, pr: 69, explore: 67 },
    routes: {
      study: "Study and post-study work plan",
      work: "Accredited employer and Green List review",
      pr: "Skilled residence pathway review",
      explore: "Study, work and skilled residence comparison"
    },
    summary: "Useful for applicants seeking a smaller market with clear study and skilled-work planning.",
    nextMove: "Compare your occupation with employer and Green List signals, then check qualification fit."
  },
  {
    country: "USA",
    flag: "US",
    slug: "usa",
    base: { study: 75, work: 63, pr: 55, explore: 64 },
    routes: {
      study: "F-1 study and career-outcome plan",
      work: "Employer-led specialist work exploration",
      pr: "Long-term employer or family route exploration",
      explore: "Study and employer-led pathway comparison"
    },
    summary: "Strong for specialist education and high-growth careers, with employer-led work constraints.",
    nextMove: "Shortlist outcome-led programs or employers and prepare a clear funding and interview story."
  },
  {
    country: "UAE",
    flag: "AE",
    slug: "uae",
    base: { study: 61, work: 75, pr: 48, explore: 64 },
    routes: {
      study: "Study and regional career plan",
      work: "Employer-led UAE career route",
      pr: "Long-term residence option review",
      explore: "Work, business and residence comparison"
    },
    summary: "A practical employer-led option for business, finance, sales, hospitality and technology roles.",
    nextMove: "Localise the CV for UAE hiring and build a focused employer outreach list."
  }
];

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, Math.round(value)));
}

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

function findRoleFamily(profile: AdvisorProfile) {
  const searchable = `${profile.currentRole} ${profile.cvText}`.toLowerCase();
  let best = generalFamily;
  let bestScore = 0;

  for (const family of roleFamilies) {
    const score = family.keywords.reduce(
      (total, keyword) => total + (searchable.includes(keyword) ? 1 : 0),
      0
    );
    if (score > bestScore) {
      best = family;
      bestScore = score;
    }
  }

  return best;
}

function experiencePoints(experience: string) {
  if (experience.startsWith("9+")) return 8;
  if (experience.startsWith("5")) return 7;
  if (experience.startsWith("2")) return 4;
  return 0;
}

function englishPoints(english: string) {
  if (english.startsWith("Advanced")) return 8;
  if (english === "Strong") return 6;
  if (english.startsWith("Working")) return 3;
  if (english === "Basic") return -3;
  return -1;
}

function educationPoints(education: string) {
  if (education === "Doctorate") return 8;
  if (education.startsWith("Master")) return 7;
  if (education.startsWith("Bachelor")) return 5;
  if (education === "Diploma") return 2;
  return 0;
}

function budgetPoints(goal: AdvisorGoal, budget: string) {
  if (goal !== "study") return 0;
  if (budget.startsWith("INR 35")) return 7;
  if (budget.startsWith("INR 20")) return 5;
  if (budget.startsWith("INR 10")) return 1;
  return -5;
}

function countryBudgetAdjustment(profile: AdvisorProfile, country: string) {
  if (profile.goal !== "study" && profile.goal !== "explore") return 0;

  if (profile.budget.startsWith("Under")) {
    return {
      "Europe / Germany": 10,
      Canada: -4,
      Australia: -7,
      "United Kingdom": -8,
      USA: -10,
      "New Zealand": -6,
      UAE: -2
    }[country] ?? 0;
  }

  if (profile.budget.startsWith("INR 10")) {
    return {
      "Europe / Germany": 7,
      Canada: 0,
      Australia: -3,
      "United Kingdom": -4,
      USA: -6,
      "New Zealand": -3,
      UAE: 0
    }[country] ?? 0;
  }

  return 0;
}

function agePoints(goal: AdvisorGoal, age: string) {
  if (goal === "study") {
    if (age === "18 - 24") return 5;
    if (age === "25 - 29") return 3;
    return 0;
  }
  if (age === "25 - 29" || age === "30 - 34") return 5;
  if (age === "35 - 39") return 2;
  if (age === "40+") return -3;
  return 2;
}

function routeReasons(profile: AdvisorProfile, family: RoleFamily, rule: CountryRule) {
  const reasons = [
    `${family.label} profiles have a plausible connection to this destination.`,
    `${profile.education} with ${profile.experience.toLowerCase()} gives the route engine useful evidence to compare.`
  ];

  if (profile.english === "Strong" || profile.english.startsWith("Advanced")) {
    reasons.push("Your stated English readiness supports study, interview and skilled-route preparation.");
  } else {
    reasons.push("A stronger language score could materially improve study or skilled-route options.");
  }

  if (profile.preferredCountry === rule.country) {
    reasons[0] = "This matches your preferred destination and your broader profile signals.";
  }

  if (profile.budget.startsWith("Under") || profile.budget.startsWith("INR 10")) {
    reasons.push(
      rule.country === "Europe / Germany"
        ? "Your budget makes cost-aware public-university and scholarship research especially relevant."
        : "Model tuition, living costs and proof-of-funds carefully before treating this route as affordable."
    );
  }

  return reasons.slice(0, 4);
}

function buildRoutes(profile: AdvisorProfile, family: RoleFamily) {
  return countryRules
    .map((rule) => {
      let fit = rule.base[profile.goal];
      fit += experiencePoints(profile.experience);
      fit += englishPoints(profile.english);
      fit += educationPoints(profile.education);
      fit += budgetPoints(profile.goal, profile.budget);
      fit += countryBudgetAdjustment(profile, rule.country);
      fit += agePoints(profile.goal, profile.age);

      if (family.hotCountries.includes(rule.country)) fit += 5;
      if (profile.preferredCountry === rule.country) fit += 7;
      if (profile.preferredCountry !== "Open to best fit" && profile.preferredCountry !== rule.country) fit -= 2;
      if (profile.goal === "pr" && rule.country === "UAE") fit -= 8;
      if (profile.goal === "work" && profile.experience.startsWith("0")) fit -= 7;

      return {
        country: rule.country,
        flag: rule.flag,
        slug: rule.slug,
        route: rule.routes[profile.goal],
        fit: clamp(fit, 46, 94),
        summary: rule.summary,
        reasons: routeReasons(profile, family, rule),
        nextMove: rule.nextMove
      };
    })
    .sort((first, second) => second.fit - first.fit)
    .slice(0, 5);
}

function cvSignals(cvText: string) {
  const text = cvText.toLowerCase();
  const wordCount = cvText.trim() ? cvText.trim().split(/\s+/).length : 0;
  const hasNumbers = /\b\d+(?:[.,]\d+)?%?\b/.test(text);
  const hasCoreSections = ["experience", "education", "skills"].filter((section) => text.includes(section)).length;
  const hasImpactLanguage = includesAny(text, [
    "achieved", "increased", "reduced", "delivered", "improved", "managed", "led", "built", "launched"
  ]);
  const hasContactSignal = text.includes("linkedin") || /\S+@\S+\.\S+/.test(text);

  let score = 34;
  if (wordCount >= 250) score += 18;
  if (wordCount >= 500) score += 10;
  if (wordCount > 1000) score -= 4;
  score += hasCoreSections * 7;
  if (hasNumbers) score += 9;
  if (hasImpactLanguage) score += 8;
  if (hasContactSignal) score += 4;

  return {
    wordCount,
    score: clamp(score, 30, 96),
    hasNumbers,
    hasCoreSections,
    hasImpactLanguage
  };
}

function buildRoleMatches(profile: AdvisorProfile, family: RoleFamily, routes: PathwayRoute[]) {
  const baseFit = 72 + experiencePoints(profile.experience) + educationPoints(profile.education);
  const strongestMarkets = routes.slice(0, 3).map((route) => route.country);

  return family.roles.map((title, index) => ({
    title,
    fit: clamp(baseFit - index * 6, 58, 91),
    why:
      index === 0
        ? `Closest match to the ${family.label.toLowerCase()} signals found in your profile.`
        : `An adjacent role that can widen your international search without discarding your experience.`,
    skills: family.skills.slice(index, index + 2).length === 2
      ? family.skills.slice(index, index + 2)
      : [family.skills[index] ?? family.skills[0], family.skills[0]],
    bestMarkets: strongestMarkets.slice(0, index < 2 ? 3 : 2),
    priorityAction:
      index === 0
        ? `Build a market-specific CV version and collect three strong achievement examples for ${title} interviews.`
        : `Compare 20 live ${title} vacancies to identify recurring skills, qualifications and local terminology.`
  }));
}

const skillDictionary = [
  ["JavaScript", ["javascript", "typescript", "react", "node.js", "nodejs"]],
  ["Python", ["python", "django", "flask"]],
  ["Data & SQL", ["sql", "power bi", "tableau", "analytics", "data analysis"]],
  ["Cloud", ["aws", "azure", "gcp", "cloud"]],
  ["Project delivery", ["project management", "agile", "scrum", "delivery"]],
  ["Finance & reporting", ["accounting", "finance", "audit", "reporting"]],
  ["Operations", ["operations", "process improvement", "supply chain", "logistics"]],
  ["Stakeholder management", ["stakeholder", "client management", "cross-functional"]],
  ["Marketing & growth", ["marketing", "seo", "campaign", "content", "growth"]],
  ["Design & research", ["figma", "ui", "ux", "design", "research"]],
  ["Healthcare", ["clinical", "patient", "nursing", "healthcare", "pharma"]],
  ["Engineering tools", ["autocad", "solidworks", "revit", "cad", "manufacturing"]]
] as const;

function detectSkills(profile: AdvisorProfile, family: RoleFamily) {
  const text = `${profile.currentRole} ${profile.cvText}`.toLowerCase();
  const detected = skillDictionary
    .filter(([, keywords]) => keywords.some((keyword) => text.includes(keyword)))
    .map(([label]) => label);

  return [...detected, ...family.skills]
    .filter((skill, index, skills) => skills.indexOf(skill) === index)
    .slice(0, 8);
}

function buildProfileSignals(profile: AdvisorProfile, family: RoleFamily, cv: ReturnType<typeof cvSignals>) {
  const experienceSignal = experiencePoints(profile.experience) >= 7
    ? "Experienced specialist"
    : profile.experience.startsWith("0")
      ? "Early-career profile"
      : "Developing professional";
  const languageSignal = profile.english === "Strong" || profile.english.startsWith("Advanced")
    ? "Ready to evidence"
    : "Needs a measurable benchmark";
  const budgetSignal = profile.budget.startsWith("Under") || profile.budget.startsWith("INR 10")
    ? "Cost-sensitive route needed"
    : "Broader destination range";

  return [
    {
      label: "Career pattern",
      value: family.label,
      detail: `${experienceSignal}; target roles should preserve your strongest transferable evidence.`
    },
    {
      label: "Language readiness",
      value: languageSignal,
      detail: "A recognised score may be needed for admission, registration or skilled-route competitiveness."
    },
    {
      label: "Budget strategy",
      value: budgetSignal,
      detail: `${profile.budget} should be tested against tuition, living costs, proof of funds and an emergency reserve.`
    },
    {
      label: "CV evidence",
      value: `${cv.score}/100 signal strength`,
      detail: `${cv.wordCount} words were reviewed for structure, measurable impact and career evidence.`
    }
  ];
}

const europeBudgetOptions = [
  {
    country: "Germany",
    code: "DE",
    baseFit: 84,
    budgetFit: "Strong value route",
    why: "Public-university research, a broad technical job market and structured post-study planning can make Germany a useful cost-aware option.",
    action: "Compare public institutions, semester charges, proof-of-funds needs, qualification recognition and German-language expectations.",
    officialUrl: "https://www.daad.de/en/studying-in-germany/living-in-germany/finances/",
    families: ["Technology & Data", "Engineering & Skilled Trades", "Healthcare & Life Sciences"]
  },
  {
    country: "Poland",
    code: "PL",
    baseFit: 79,
    budgetFit: "Lower-cost baseline",
    why: "Poland can offer a lower living-cost baseline than many Western European destinations, with English-taught study options to compare carefully.",
    action: "Check tuition by institution, city-level living costs, course recognition and the employment value of the selected qualification.",
    officialUrl: "https://study.gov.pl/tuition-fees",
    families: ["Technology & Data", "Engineering & Skilled Trades", "Finance, Business & Operations"]
  },
  {
    country: "Italy",
    code: "IT",
    baseFit: 78,
    budgetFit: "Aid-led public study",
    why: "Public-university fees and regional or university benefits can make Italy worth researching for applicants who build an early funding strategy.",
    action: "Compare public courses, regional benefits, university scholarships, accommodation and document legalisation timelines.",
    officialUrl: "https://www.universitaly.it/borse-studio",
    families: ["Marketing, Design & Communications", "Education & Student Profile", "Healthcare & Life Sciences"]
  },
  {
    country: "Hungary",
    code: "HU",
    baseFit: 76,
    budgetFit: "Scholarship-led route",
    why: "Hungary is most compelling as a scholarship-led option, especially when the program, award conditions and long-term career value align.",
    action: "Review Stipendium Hungaricum eligibility and deadlines, then keep a self-funded backup with realistic living-cost estimates.",
    officialUrl: "https://stipendiumhungaricum.hu/",
    families: ["Healthcare & Life Sciences", "Education & Student Profile", "Engineering & Skilled Trades"]
  },
  {
    country: "France",
    code: "FR",
    baseFit: 77,
    budgetFit: "Subsidised public route",
    why: "France can be cost-aware through selected public institutions and scholarships, provided language, city and course choices are planned together.",
    action: "Use Campus France to compare public tuition, scholarship options, city costs and French-language expectations for study and work.",
    officialUrl: "https://www.campusfrance.org/en/tuition-fees-France",
    families: ["Marketing, Design & Communications", "Education & Student Profile", "Finance, Business & Operations"]
  }
] as const;

function buildEuropeOptions(profile: AdvisorProfile, family: RoleFamily): EuropeBudgetOption[] {
  const isLowBudget = profile.budget.startsWith("Under");
  const isCostAware = isLowBudget || profile.budget.startsWith("INR 10");

  return europeBudgetOptions
    .map((option) => {
      let fit = option.baseFit;
      if ((option.families as readonly string[]).includes(family.label)) fit += 5;
      if (isCostAware) fit += 4;
      if (isLowBudget && ["Italy", "Hungary"].includes(option.country)) fit += 3;
      if (profile.goal === "work" && ["Germany", "Poland"].includes(option.country)) fit += 3;
      if (profile.goal === "study" && ["Italy", "Hungary", "France"].includes(option.country)) fit += 2;

      return {
        country: option.country,
        code: option.code,
        fit: clamp(fit, 64, 93),
        budgetFit: option.budgetFit,
        why: option.why,
        action: option.action,
        officialUrl: option.officialUrl
      };
    })
    .sort((first, second) => second.fit - first.fit);
}

function buildPreDeparture(profile: AdvisorProfile, family: RoleFamily, topRoute: PathwayRoute): PreDepartureArea[] {
  const destination = topRoute.country;
  const careerAction = profile.goal === "study"
    ? `Create a course-to-career map for ${family.label.toLowerCase()} roles, including internships and graduate outcomes.`
    : `Localise your CV and LinkedIn profile for ${destination} terminology, employers and interview expectations.`;

  return [
    {
      title: "Documents and legal checks",
      timing: "Start 8 - 12 weeks before travel",
      items: [
        "Check passport validity, name consistency and blank-page requirements before filing applications.",
        "Collect qualification, transcript, employment and civil-status originals plus certified copies where required.",
        `Verify the current visa, work-right and arrival-registration rules for ${destination} through official sources.`,
        "Keep encrypted cloud copies and a separate emergency document pack."
      ]
    },
    {
      title: "Money and protection",
      timing: "Start 6 - 8 weeks before travel",
      items: [
        "Build a total-cost plan covering fees, proof of funds, deposits, travel and the first three months of living costs.",
        "Keep an emergency reserve separate from tuition, relocation or job-search funds.",
        "Arrange compliant health or travel insurance and understand exclusions before departure.",
        "Plan international banking, card access, currency conversion and payment limits."
      ]
    },
    {
      title: "Career readiness",
      timing: "Start 4 - 8 weeks before travel",
      items: [
        careerAction,
        `Track 25 relevant ${family.label.toLowerCase()} employers or institutions in ${destination}.`,
        "Confirm whether qualification recognition, licensing, registration or a local certification is needed.",
        "Prepare five concise achievement stories for interviews and networking conversations."
      ]
    },
    {
      title: "Arrival setup",
      timing: "Complete 2 - 4 weeks before travel",
      items: [
        "Use verified temporary accommodation and never transfer a large deposit without identity and contract checks.",
        "Plan airport transport, first-week appointments, local SIM access and essential banking steps.",
        "Keep addresses, bookings, emergency contacts and key appointments available offline.",
        "Understand local transport, registration and tenancy rules before signing a long-term agreement."
      ]
    },
    {
      title: "Health and family",
      timing: "Complete 2 - 4 weeks before travel",
      items: [
        "Carry prescriptions, vaccination records and enough permitted medication for the transition period.",
        "Complete priority dental, optical and general health checks before travel.",
        "For dependants, confirm schooling, childcare, insurance and consent-document requirements.",
        "Share your itinerary and emergency plan with trusted family members."
      ]
    }
  ];
}

function buildStrengths(profile: AdvisorProfile, family: RoleFamily, cv: ReturnType<typeof cvSignals>) {
  const strengths = [
    `Your profile maps most strongly to ${family.label.toLowerCase()} opportunities.`
  ];

  if (experiencePoints(profile.experience) >= 7) {
    strengths.push("Your experience band supports senior or specialist pathway conversations.");
  } else if (!profile.experience.startsWith("0")) {
    strengths.push("You have enough experience to build a focused international role narrative.");
  }
  if (educationPoints(profile.education) >= 5) {
    strengths.push("Your higher-education signal supports multiple study and skilled-route comparisons.");
  }
  if (cv.hasNumbers && cv.hasImpactLanguage) {
    strengths.push("Your CV already uses measurable, outcome-led evidence that international recruiters value.");
  }
  if (profile.english === "Strong" || profile.english.startsWith("Advanced")) {
    strengths.push("Your stated English level is a positive readiness signal.");
  }

  return strengths.slice(0, 4);
}

function buildGaps(profile: AdvisorProfile, cv: ReturnType<typeof cvSignals>) {
  const gaps: string[] = [];

  if (cv.wordCount < 250) gaps.push("Add more CV detail so achievements, tools and career progression can be assessed properly.");
  if (cv.hasCoreSections < 3) gaps.push("Use clear Experience, Education and Skills sections for recruiter and ATS readability.");
  if (!cv.hasNumbers) gaps.push("Quantify outcomes such as revenue, time saved, team size, volume or performance improvement.");
  if (!cv.hasImpactLanguage) gaps.push("Rewrite duties as achievements using action-led language and evidence.");
  if (profile.english === "Not tested" || profile.english === "Basic") {
    gaps.push("Plan an English test or language-readiness benchmark before relying on study or skilled-route scores.");
  }
  if ((profile.goal === "work" || profile.goal === "pr") && profile.experience.startsWith("0")) {
    gaps.push("Build 12 to 24 months of relevant evidence or compare a study-to-career pathway first.");
  }
  if (profile.goal === "study" && profile.budget.startsWith("Under")) {
    gaps.push("Create a funding plan and compare lower-cost destinations, scholarships and realistic living costs.");
  }

  gaps.push("Confirm live eligibility, occupation lists and visa rules with official sources before applying.");
  return gaps.slice(0, 5);
}

function buildActionPlan(profile: AdvisorProfile, family: RoleFamily, topRoute: PathwayRoute) {
  const routePreparation = profile.goal === "study"
    ? "Shortlist courses by career outcome, entry criteria and total cost, not ranking alone."
    : "Build a 25-employer target list and tailor the CV to the language used in live vacancies.";

  return [
    {
      period: "Days 1 - 30",
      title: "Make the profile decision-ready",
      actions: [
        "Convert the CV into a two-page, results-led international version.",
        `Collect education and employment evidence relevant to ${family.label.toLowerCase()}.`,
        "Set an English test or skills-assessment target where the route requires it."
      ]
    },
    {
      period: "Days 31 - 60",
      title: `Validate the ${topRoute.country} route`,
      actions: [
        routePreparation,
        topRoute.nextMove,
        "Compare the top route with one backup destination before spending on applications."
      ]
    },
    {
      period: "Days 61 - 90",
      title: "Move from research to action",
      actions: [
        "Complete route-specific documents and a funding or job-search plan.",
        "Book a consultant review to challenge assumptions and identify refusal risks.",
        "Apply in focused batches and track decisions, evidence gaps and follow-ups."
      ]
    }
  ];
}

export function analyzePathway(profile: AdvisorProfile): AdvisorAnalysis {
  const family = findRoleFamily(profile);
  const cv = cvSignals(profile.cvText);
  const routes = buildRoutes(profile, family);
  const completeness = [
    profile.goal,
    profile.age,
    profile.education,
    profile.experience,
    profile.english,
    profile.budget,
    profile.currentRole,
    profile.cvText
  ].filter(Boolean).length;
  const readiness = clamp(
    32 + completeness * 4 + cv.score * 0.28 + englishPoints(profile.english),
    42,
    93
  );
  const reportId = `IDOL-${new Date().getFullYear()}-${String(
    Math.abs(`${profile.currentRole}-${profile.goal}-${cv.wordCount}`.split("").reduce(
      (total, character) => (total * 31 + character.charCodeAt(0)) % 100000,
      7
    ))
  ).padStart(5, "0")}`;

  return {
    reportId,
    readiness,
    cvScore: cv.score,
    wordCount: cv.wordCount,
    roleFamily: family.label,
    headline: `${routes[0].country} currently appears among the strongest indicative fits for your ${
      profile.goal === "explore" ? "international" : profile.goal
    } goal.`,
    routes,
    roleMatches: buildRoleMatches(profile, family, routes),
    profileSignals: buildProfileSignals(profile, family, cv),
    detectedSkills: detectSkills(profile, family),
    europeOptions: buildEuropeOptions(profile, family),
    preDeparture: buildPreDeparture(profile, family, routes[0]),
    strengths: buildStrengths(profile, family, cv),
    gaps: buildGaps(profile, cv),
    actionPlan: buildActionPlan(profile, family, routes[0])
  };
}
