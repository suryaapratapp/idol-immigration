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
    roles: ["Software Engineer", "Data Analyst", "Cloud & DevOps Specialist"],
    skills: ["Cloud certification", "SQL / analytics portfolio", "System design evidence"],
    hotCountries: ["Canada", "Australia", "United Kingdom", "Europe / Germany"]
  },
  {
    label: "Healthcare & Life Sciences",
    keywords: [
      "nurse", "nursing", "doctor", "medical", "pharma", "pharmacy", "clinical", "healthcare",
      "physiotherapist", "laboratory", "biotech", "dentist"
    ],
    roles: ["Healthcare Professional", "Clinical Operations Coordinator", "Life Sciences Specialist"],
    skills: ["Professional registration research", "Clinical English", "Credential assessment"],
    hotCountries: ["United Kingdom", "Australia", "New Zealand", "Europe / Germany"]
  },
  {
    label: "Engineering & Skilled Trades",
    keywords: [
      "mechanical", "civil", "electrical", "electronics", "construction", "architect", "autocad",
      "manufacturing", "quality", "welder", "technician", "plumber", "electrician"
    ],
    roles: ["Project Engineer", "Engineering Technologist", "Quality & Operations Specialist"],
    skills: ["CAD / technical portfolio", "Safety certification", "Skills assessment evidence"],
    hotCountries: ["Australia", "Canada", "New Zealand", "Europe / Germany"]
  },
  {
    label: "Finance, Business & Operations",
    keywords: [
      "finance", "accounting", "accountant", "audit", "banking", "business", "operations",
      "sales", "supply chain", "logistics", "hr", "human resources", "consultant", "management"
    ],
    roles: ["Business Analyst", "Finance & Reporting Analyst", "Operations Coordinator"],
    skills: ["Advanced Excel / BI", "International reporting standards", "Stakeholder outcomes"],
    hotCountries: ["United Kingdom", "Canada", "UAE", "Australia"]
  },
  {
    label: "Marketing, Design & Communications",
    keywords: [
      "marketing", "seo", "content", "designer", "design", "social media", "brand", "creative",
      "communications", "copywriter", "advertising", "ui", "ux"
    ],
    roles: ["Growth Marketing Specialist", "Digital Content Strategist", "Product Designer"],
    skills: ["Results-led portfolio", "Analytics tooling", "Market-specific case studies"],
    hotCountries: ["United Kingdom", "UAE", "Canada", "Europe / Germany"]
  },
  {
    label: "Education & Student Profile",
    keywords: [
      "student", "teacher", "teaching", "lecturer", "professor", "school", "university", "tutor",
      "research", "academic", "graduate"
    ],
    roles: ["Education Coordinator", "Research Assistant", "Student Services Adviser"],
    skills: ["Academic writing", "Research portfolio", "Local safeguarding requirements"],
    hotCountries: ["United Kingdom", "Canada", "Australia", "New Zealand"]
  }
];

const generalFamily: RoleFamily = {
  label: "General Professional & Operations",
  keywords: [],
  roles: ["Operations Coordinator", "Customer Success Associate", "Business Support Specialist"],
  skills: ["Results-led CV", "Digital productivity tools", "Customer or stakeholder evidence"],
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

  return reasons.slice(0, 3);
}

function buildRoutes(profile: AdvisorProfile, family: RoleFamily) {
  return countryRules
    .map((rule) => {
      let fit = rule.base[profile.goal];
      fit += experiencePoints(profile.experience);
      fit += englishPoints(profile.english);
      fit += educationPoints(profile.education);
      fit += budgetPoints(profile.goal, profile.budget);
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
    .slice(0, 3);
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

function buildRoleMatches(profile: AdvisorProfile, family: RoleFamily) {
  const baseFit = 72 + experiencePoints(profile.experience) + educationPoints(profile.education);

  return family.roles.map((title, index) => ({
    title,
    fit: clamp(baseFit - index * 6, 58, 91),
    why:
      index === 0
        ? `Closest match to the ${family.label.toLowerCase()} signals found in your profile.`
        : `An adjacent role that can widen your international search without discarding your experience.`,
    skills: family.skills.slice(index, index + 2).length === 2
      ? family.skills.slice(index, index + 2)
      : [family.skills[index] ?? family.skills[0], family.skills[0]]
  }));
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
    roleMatches: buildRoleMatches(profile, family),
    strengths: buildStrengths(profile, family, cv),
    gaps: buildGaps(profile, cv),
    actionPlan: buildActionPlan(profile, family, routes[0])
  };
}
