import { serviceFaqs, type FAQ } from "./faqs";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  whoFor: string[];
  helpsWith: string[];
  commonMistakes: string[];
  cta: string;
  whatsappMessage: string;
  keywords: string[];
  pageIntro: string;
  outcome: string;
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "study-abroad",
    title: "Study Abroad Counselling",
    shortTitle: "Study Abroad",
    eyebrow: "Students & parents",
    summary:
      "Choose a country, course and university with a practical view of cost, career direction, visa readiness and life after landing.",
    whoFor: [
      "Indian students planning undergraduate, postgraduate or pathway programs",
      "Parents who want clarity before paying deposits or fees",
      "Applicants comparing the UK, Canada, Australia, USA, New Zealand and Europe"
    ],
    helpsWith: [
      "Country, course and university shortlisting",
      "Profile review, budget planning and document readiness",
      "SOP, GTE or statement review where relevant",
      "Pre-departure, accommodation and part-time job preparation"
    ],
    commonMistakes: [
      "Choosing a course only because a friend selected it",
      "Ignoring total cost, emergency buffer and local living realities",
      "Weak SOP logic or poor connection between education and career plan"
    ],
    cta: "Plan my study route",
    whatsappMessage: "Hi Idol Immigration, I want study abroad guidance.",
    keywords: ["study abroad consultant India", "UK student visa consultant India"],
    pageIntro:
      "Study abroad planning is not just admission paperwork. Idol helps students and families understand the right academic direction, financial comfort, visa readiness and real-life preparation before making a major international decision.",
    outcome:
      "A clearer shortlist, stronger application logic and a practical plan for your first few weeks abroad.",
    faqs: serviceFaqs["study-abroad"]
  },
  {
    slug: "visitor-visa",
    title: "Visitor / Tourist Visa Guidance",
    shortTitle: "Visitor Visa",
    eyebrow: "Tourism, family visits & short stays",
    summary:
      "Prepare a clear visitor visa application with stronger purpose, funds, itinerary, invitation and home-country tie evidence.",
    whoFor: [
      "Families visiting children or relatives abroad",
      "Tourists planning short-term travel",
      "Applicants who need help explaining purpose, funds and return intent"
    ],
    helpsWith: [
      "Purpose of visit and itinerary clarity",
      "Funds, sponsorship and invitation document review",
      "Travel history and home-country tie presentation",
      "Refusal risk review before submission"
    ],
    commonMistakes: [
      "Submitting generic itineraries without personal context",
      "Funds that do not match the proposed travel plan",
      "Weak explanation of why the applicant will return to India"
    ],
    cta: "Review my visitor visa",
    whatsappMessage: "Hi Idol Immigration, I want visitor visa guidance.",
    keywords: ["visitor visa consultant India"],
    pageIntro:
      "A visitor visa application should make the trip easy to understand. Idol helps applicants present purpose, funds, travel dates and family context in a consistent, well-documented way.",
    outcome:
      "A cleaner document plan and a stronger understanding of avoidable refusal risks before you apply.",
    faqs: serviceFaqs["visitor-visa"]
  },
  {
    slug: "pr-skilled-migration",
    title: "Permanent Residency / Skilled Migration",
    shortTitle: "PR & Skilled Migration",
    eyebrow: "Long-term settlement routes",
    summary:
      "Explore PR and skilled migration options with honest eligibility, risk, cost, timeline and backup pathway planning.",
    whoFor: [
      "Skilled professionals comparing PR pathways",
      "Couples or families planning long-term settlement abroad",
      "Applicants who need a realistic pathway assessment before investing time and money"
    ],
    helpsWith: [
      "Profile assessment across education, age, work history and English readiness",
      "Country and route comparison",
      "Document planning for employment and education records",
      "Backup options if the preferred pathway is currently weak"
    ],
    commonMistakes: [
      "Assuming points or occupation fit without proper review",
      "Ignoring proof quality for employment history",
      "Focusing on one country without comparing realistic alternatives"
    ],
    cta: "Check my PR options",
    whatsappMessage: "Hi Idol Immigration, I want PR or skilled migration guidance.",
    keywords: ["PR visa consultant India", "immigration consultant for Indians"],
    pageIntro:
      "PR planning needs more than enthusiasm. Idol helps skilled applicants understand eligibility signals, documentation gaps, cost comfort, timelines and country fit before choosing a route.",
    outcome:
      "A realistic route map that shows where your profile is strong, where it is weak and what to improve next.",
    faqs: serviceFaqs["pr-skilled-migration"]
  },
  {
    slug: "work-business-visa",
    title: "Work, Business, Investor & Start-Up Visa Guidance",
    shortTitle: "Work & Business Visa",
    eyebrow: "Professionals & entrepreneurs",
    summary:
      "Plan work, business, investor or start-up routes with clear documentation, business intent and official-source verification.",
    whoFor: [
      "Professionals exploring overseas work routes",
      "Business owners and entrepreneurs considering expansion or investment",
      "Applicants comparing start-up, investor or business visitor pathways"
    ],
    helpsWith: [
      "Route suitability and risk discussion",
      "Business profile and funds documentation planning",
      "Purpose, intent and travel history review",
      "Official-source checklist preparation before filing"
    ],
    commonMistakes: [
      "Treating business visas like simple tourist applications",
      "Weak evidence of business background or funds source",
      "Relying on outdated program names or old online advice"
    ],
    cta: "Discuss business route",
    whatsappMessage: "Hi Idol Immigration, I want work or business visa guidance.",
    keywords: ["business visa consultant India", "start-up visa guidance"],
    pageIntro:
      "Work and business routes require careful intent, evidence and route selection. Idol helps applicants understand what their profile can support before preparing documents.",
    outcome:
      "A practical route conversation, document plan and clear reminder to confirm live rules through official sources.",
    faqs: serviceFaqs["work-business-visa"]
  },
  {
    slug: "spouse-family-visa",
    title: "Spouse / Family Visa Support",
    shortTitle: "Spouse & Family Visa",
    eyebrow: "Couples & families",
    summary:
      "Prepare spouse, family and spouse open work permit applications with stronger relationship, funds and consistency review.",
    whoFor: [
      "Couples planning to live, study or work abroad together",
      "Families preparing dependent or family-related applications",
      "Applicants who need support organizing relationship and financial evidence"
    ],
    helpsWith: [
      "Relationship chronology and supporting evidence review",
      "Funds, sponsorship and dependency document planning",
      "Consistency check across forms, statements and records",
      "Common refusal risk identification"
    ],
    commonMistakes: [
      "Incomplete relationship evidence or unclear timelines",
      "Inconsistent answers across documents",
      "Weak financial or sponsorship explanation"
    ],
    cta: "Prepare family application",
    whatsappMessage: "Hi Idol Immigration, I want spouse or family visa guidance.",
    keywords: ["spouse visa consultant", "spouse open work permit guidance"],
    pageIntro:
      "Family applications are personal and document-heavy. Idol helps couples and families organize evidence clearly so the story, documents and purpose stay consistent.",
    outcome:
      "A calmer, better organized application plan with stronger evidence and fewer avoidable gaps.",
    faqs: serviceFaqs["spouse-family-visa"]
  },
  {
    slug: "visa-refusal-review",
    title: "Visa Refusal Review",
    shortTitle: "Refusal Review",
    eyebrow: "Second-look strategy",
    summary:
      "Review refusal reasons, documents and previous application logic before deciding whether to reapply or choose another route.",
    whoFor: [
      "Applicants with a student, visitor, work or family visa refusal",
      "People unsure whether to reapply immediately",
      "Applicants who need an honest second opinion"
    ],
    helpsWith: [
      "Refusal letter and prior application review",
      "Weak SOP, funds, purpose or document gap identification",
      "Reapplication readiness planning",
      "Backup route discussion when Plan A is weak"
    ],
    commonMistakes: [
      "Reapplying with the same documents and same explanation",
      "Ignoring the actual concern raised by the officer",
      "Adding documents without improving the application logic"
    ],
    cta: "Review my refusal",
    whatsappMessage: "Hi Idol Immigration, I had a visa refusal and need review help.",
    keywords: ["visa refusal help India"],
    pageIntro:
      "A refusal is stressful, but the next step should be careful. Idol reviews what happened, where the application looked weak and whether a stronger reapplication or alternate pathway makes sense.",
    outcome:
      "A clear refusal review, practical improvement list and honest next-step recommendation.",
    faqs: serviceFaqs["visa-refusal-review"]
  },
  {
    slug: "student-visa",
    title: "Student Visa Application Support",
    shortTitle: "Student Visa",
    eyebrow: "Application preparation",
    summary:
      "Build a consistent student visa file around academic fit, funds, purpose, documents and country-specific official requirements.",
    whoFor: ["Students with admission offers", "Parents preparing financial documents"],
    helpsWith: ["Forms and document planning", "Funds and SOP review", "Application sequencing"],
    commonMistakes: ["Course mismatch", "Funds mismatch", "Generic study statements"],
    cta: "Start student visa prep",
    whatsappMessage: "Hi Idol Immigration, I want student visa application support.",
    keywords: ["student visa consultant India"],
    pageIntro:
      "Student visa support turns a study plan into a coherent application file, with attention to academic logic, finances and document consistency.",
    outcome: "A more organized application with fewer preventable gaps.",
    faqs: serviceFaqs["study-abroad"]
  },
  {
    slug: "ielts-pte-interview-preparation",
    title: "IELTS / PTE / Interview Preparation",
    shortTitle: "IELTS & Interview Prep",
    eyebrow: "Confidence building",
    summary:
      "Prepare for English tests and visa interviews with practical coaching, confidence and route-specific clarity.",
    whoFor: ["Students", "Skilled professionals", "Applicants preparing interviews"],
    helpsWith: ["English confidence", "Interview practice", "Purpose clarity"],
    commonMistakes: ["Memorized answers", "Unclear plans", "Weak communication confidence"],
    cta: "Improve my readiness",
    whatsappMessage: "Hi Idol Immigration, I want IELTS, PTE or interview preparation.",
    keywords: ["IELTS training for visa applicants"],
    pageIntro:
      "Communication confidence matters. Idol helps applicants prepare clearer answers and stronger English readiness for study, migration and interview situations.",
    outcome: "Better preparation, clearer answers and less panic before the next step.",
    faqs: serviceFaqs["study-abroad"]
  },
  {
    slug: "settlement-support",
    title: "Post-Landing / Settlement Support",
    shortTitle: "Settlement Support",
    eyebrow: "After approval",
    summary:
      "Prepare for accommodation, local basics, part-time job readiness, budgeting and confidence before your first weeks abroad.",
    whoFor: ["Students", "Newcomer families", "First-time international travellers"],
    helpsWith: ["Accommodation guidance", "First 30 days planning", "CV and part-time job readiness"],
    commonMistakes: ["Landing without local plan", "Underestimating setup costs", "Late accommodation search"],
    cta: "Prepare before landing",
    whatsappMessage: "Hi Idol Immigration, I want settlement support before moving abroad.",
    keywords: ["overseas settlement support", "study abroad with accommodation support"],
    pageIntro:
      "Your first weeks abroad can feel confusing. Idol helps you prepare for the practical realities before you land.",
    outcome: "A calmer first month with clearer local-life preparation.",
    faqs: serviceFaqs["study-abroad"]
  }
];

export const featuredServices = services.slice(0, 6);

export const allServiceCards = [
  ...services,
  {
    slug: "sop-statement-review",
    title: "SOP / GTE / Statement Review",
    shortTitle: "Statement Review",
    eyebrow: "Document clarity",
    summary:
      "Make your statement clearer, more personal and more consistent with your academic, travel or migration plan.",
    whoFor: ["Students", "Refusal applicants"],
    helpsWith: ["Story logic", "Course fit", "Risk signal review"],
    commonMistakes: ["Generic writing", "Copied templates", "Unclear future plan"],
    cta: "Review my statement",
    whatsappMessage: "Hi Idol Immigration, I want SOP or statement review.",
    keywords: ["SOP review for visa"],
    pageIntro: "A strong statement should explain the decision clearly, not sound copied.",
    outcome: "Cleaner logic and stronger consistency.",
    faqs: serviceFaqs["study-abroad"]
  },
  {
    slug: "accommodation-guidance",
    title: "Accommodation Guidance",
    shortTitle: "Accommodation",
    eyebrow: "Before landing",
    summary:
      "Understand temporary stays, room search basics, safety checks and what to ask before paying.",
    whoFor: ["Students", "First-time movers"],
    helpsWith: ["Search planning", "Safety checks", "Budgeting"],
    commonMistakes: ["Paying without verification", "Ignoring commute", "No temporary plan"],
    cta: "Plan my stay",
    whatsappMessage: "Hi Idol Immigration, I want accommodation guidance.",
    keywords: ["study abroad with accommodation support"],
    pageIntro: "Accommodation planning reduces stress in the first few weeks abroad.",
    outcome: "A safer, more realistic housing search plan.",
    faqs: serviceFaqs["study-abroad"]
  },
  {
    slug: "part-time-job-guidance",
    title: "Part-Time Job Guidance",
    shortTitle: "Part-Time Jobs",
    eyebrow: "Work readiness",
    summary:
      "Prepare your CV, interview confidence, skills and expectations for legal part-time work search abroad.",
    whoFor: ["International students", "Newcomers building confidence"],
    helpsWith: ["CV tips", "Interview practice", "Skills planning"],
    commonMistakes: ["Expecting instant jobs", "Weak CV", "Poor local communication"],
    cta: "Build my job readiness",
    whatsappMessage: "Hi Idol Immigration, I want part-time job guidance abroad.",
    keywords: ["part-time job guidance abroad"],
    pageIntro: "Part-time readiness starts before you travel, not after panic begins.",
    outcome: "A more realistic and confident job-search start.",
    faqs: serviceFaqs["study-abroad"]
  },
  {
    slug: "skill-development-before-moving",
    title: "Skill Development Before Moving Abroad",
    shortTitle: "Skill Development",
    eyebrow: "Confidence before departure",
    summary:
      "Build English confidence, digital skills, LinkedIn basics, budgeting and workplace communication before moving.",
    whoFor: ["Students", "Skilled professionals", "First-time movers"],
    helpsWith: ["English confidence", "LinkedIn and CV", "Budgeting and workplace basics"],
    commonMistakes: ["Only preparing documents", "Ignoring confidence", "No local-life skills"],
    cta: "Build my moving skills",
    whatsappMessage: "Hi Idol Immigration, I want skill development guidance before moving abroad.",
    keywords: ["overseas settlement support"],
    pageIntro: "A visa can open the door, but practical skills help you settle better.",
    outcome: "More confidence for local life, study and work abroad.",
    faqs: serviceFaqs["study-abroad"]
  }
];

export const serviceBySlug = (slug: string) =>
  allServiceCards.find((service) => service.slug === slug);
