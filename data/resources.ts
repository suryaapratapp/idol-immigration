export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  keywords: string[];
  image: {
    src: string;
    alt: string;
  };
  badges: string[];
  quickSummary: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    body: string[];
    bullets?: string[];
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
};

export const resources: Resource[] = [
  {
    slug: "uk-student-visa-guide-indian-students",
    title: "UK Student Visa Guide for Indian Students",
    description:
      "A simple guide for Indian students planning the UK: course choice, funds, CAS, documents, interview confidence and arrival planning.",
    category: "Study Abroad",
    readTime: "10 min read",
    keywords: ["UK student visa consultant India", "study abroad consultant India"],
    image: {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=90",
      alt: "Students studying together at a university table"
    },
    badges: ["🇬🇧 UK", "🎓 Student Visa", "📄 CAS", "🏠 Arrival Planning"],
    quickSummary:
      "The UK student route becomes easier to understand when you divide it into five parts: course fit, university offer, funds, visa documents and first-month preparation.",
    keyTakeaways: [
      "Choose a course that connects with your past study and future career.",
      "Keep funds simple, traceable and consistent with the application.",
      "Prepare for life after landing, not only the visa form."
    ],
    sections: [
      {
        heading: "Start with the right course",
        body: [
          "A strong UK student plan starts before the visa form. Your course should make sense with your previous education, work experience and career goal.",
          "For example, if you studied business, a management, finance, marketing or analytics course is easier to explain than a random course selected only because the fee is low."
        ],
        bullets: [
          "Check course modules, not only the university name.",
          "Ask how the course helps your career in India or abroad.",
          "Avoid choosing only because a friend is going there.",
          "Parents should ask for total cost, not only tuition fee."
        ]
      },
      {
        heading: "Understand CAS and visa documents",
        body: [
          "The CAS is the confirmation from the UK education provider that supports your student visa application. But CAS alone is not enough. Your full file should look clear and consistent.",
          "Your passport, academic documents, English evidence, funds, TB test where required, consent documents for minors and any previous visa history should all tell the same story."
        ],
        bullets: [
          "Keep names, dates and spellings exactly consistent.",
          "Do not hide previous refusals or travel history.",
          "Keep bank statements and sponsor details easy to explain.",
          "Save digital copies of every important document."
        ]
      },
      {
        heading: "Prepare for the first month in the UK",
        body: [
          "Many students focus only on visa approval and then feel lost after landing. Plan your SIM, travel from airport, temporary stay, bank account, groceries and emergency contacts before departure.",
          "Also prepare a basic UK-style CV and practice simple interview answers if you plan to look for permitted part-time work."
        ],
        bullets: [
          "Book safe temporary accommodation before you fly.",
          "Keep emergency money separate from tuition or rent money.",
          "Understand your permitted work conditions.",
          "Speak to seniors, but verify important advice before acting."
        ]
      }
    ]
  },
  {
    slug: "canada-study-visa-checklist",
    title: "Canada Study Visa Checklist",
    description:
      "A practical checklist for Indian students preparing Canada study plans, documents, SOP logic, funds and backup options.",
    category: "Study Abroad",
    readTime: "9 min read",
    keywords: ["Canada study visa consultant", "study abroad consultant India"],
    image: {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90",
      alt: "Mountain lake landscape for destination planning"
    },
    badges: ["🇨🇦 Canada", "🎓 Study Permit", "💰 Funds", "📝 SOP"],
    quickSummary:
      "For Canada, the file should clearly explain why this program, why this college or university, how you will pay, and what your realistic future plan is.",
    keyTakeaways: [
      "Your program should match your academic and career direction.",
      "Funds should be genuine, traceable and easy to understand.",
      "A copied SOP can weaken even a good profile."
    ],
    sections: [
      {
        heading: "Make your study plan believable",
        body: [
          "Canada study planning is not just admission plus visa form. The officer should understand why this program is a logical next step for you.",
          "If your course looks unrelated, too low for your profile, or selected only for migration hopes, your file can become harder to explain."
        ],
        bullets: [
          "Connect previous study, work and future goal.",
          "Explain any education gaps in simple language.",
          "Avoid generic lines like 'Canada is a beautiful country'.",
          "Show that you understand the course and career value."
        ]
      },
      {
        heading: "Prepare funds carefully",
        body: [
          "Funds should not look sudden or confusing. The source of money, sponsor income, bank balance and education cost should fit together.",
          "Indian families often use savings, education loans, family support or a mix. The key is to present it clearly and honestly."
        ],
        bullets: [
          "Keep bank records clean and explain large deposits.",
          "Match sponsor documents with family relationship evidence.",
          "Include tuition, living cost and emergency buffer planning.",
          "Do not depend fully on part-time work for survival."
        ]
      },
      {
        heading: "Build a backup plan",
        body: [
          "Rules and program settings can change. A good consultant helps you understand Plan A and Plan B before deadlines create pressure.",
          "Backup planning may include a different intake, course, country, budget range or stronger English preparation."
        ],
        bullets: [
          "Compare Canada with UK, Australia or New Zealand if needed.",
          "Check whether your budget is realistic.",
          "Do not rush a weak file only because intake is near.",
          "Review refusal risks before submission."
        ]
      }
    ]
  },
  {
    slug: "visitor-visa-documents-for-indians",
    title: "Tourist / Visitor Visa Documents for Indians",
    description:
      "An easy document guide for Indians planning tourism, family visits, events or short stays abroad.",
    category: "Tourist Visa",
    readTime: "8 min read",
    keywords: ["visitor visa consultant India", "tourist visa consultant India"],
    image: {
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80",
      alt: "Traveller standing in an airport terminal"
    },
    badges: ["✈️ Travel", "👨‍👩‍👧 Family Visit", "💳 Funds", "🏠 India Ties"],
    quickSummary:
      "A tourist or visitor visa file should answer four simple questions: where are you going, why are you going, who is paying and why will you return?",
    keyTakeaways: [
      "Keep the trip purpose simple and believable.",
      "Funds should match your travel plan.",
      "Show clear reasons to return to India."
    ],
    sections: [
      {
        heading: "Explain the purpose of travel",
        body: [
          "A visitor visa is not just a ticket and hotel booking. Your file should make the visit easy to understand.",
          "If you are visiting family, include invitation details. If you are going for tourism, include a realistic itinerary. If you are attending an event, include event proof."
        ],
        bullets: [
          "Mention travel dates clearly.",
          "Avoid overcomplicated or fake itineraries.",
          "Include invitation letters where relevant.",
          "Keep hotel, flight and activity details consistent."
        ]
      },
      {
        heading: "Show funds and sponsorship clearly",
        body: [
          "Your bank balance should make sense for the trip length, destination and family situation. If someone is sponsoring you, explain the relationship and sponsor's financial ability.",
          "A simple, consistent file is usually better than a large file full of unrelated documents."
        ],
        bullets: [
          "Include bank statements, income proof and tax documents where useful.",
          "Explain sponsor relationship with supporting documents.",
          "Do not show borrowed funds without a clear source.",
          "Keep the trip affordable compared with your profile."
        ]
      },
      {
        heading: "Show ties to India",
        body: [
          "Visitor applications often need to show that your stay is temporary. India ties can include job, business, family responsibilities, property, education, financial commitments or social reasons.",
          "The goal is not to add every document you own. The goal is to show a clear reason to return."
        ],
        bullets: [
          "Employment letter or business proof can help.",
          "Family responsibility documents may support the file.",
          "Property or financial commitments can be useful when genuine.",
          "Avoid contradictory dates or unclear leave plans."
        ]
      }
    ]
  },
  {
    slug: "how-to-write-a-strong-sop",
    title: "How to Write a Strong SOP",
    description:
      "A simple SOP guide for students and visa applicants who want a clear, personal and consistent statement.",
    category: "Visa Tips",
    readTime: "9 min read",
    keywords: ["SOP review visa", "study abroad consultant India"],
    image: {
      src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
      alt: "Person writing notes in a notebook"
    },
    badges: ["📝 SOP", "🎯 Course Fit", "✅ Clarity", "🚫 No Templates"],
    quickSummary:
      "A strong SOP should sound like you. It should explain your background, decision, course choice, country choice, funds and future plan in a calm, honest way.",
    keyTakeaways: [
      "Do not copy internet templates.",
      "Keep the story logical and easy to read.",
      "Every claim should match your documents."
    ],
    sections: [
      {
        heading: "Start with your real story",
        body: [
          "Your SOP should not feel like a dramatic essay. It should feel like a clear explanation from a serious applicant.",
          "Start with your education or work background, then explain why you are choosing this course or route now."
        ],
        bullets: [
          "Use simple English, not heavy vocabulary.",
          "Avoid emotional exaggeration.",
          "Mention real achievements and real goals.",
          "Do not write things you cannot explain in an interview."
        ]
      },
      {
        heading: "Explain the course and country",
        body: [
          "A good SOP answers why this course, why this university, why this country and why this timing.",
          "If the course changes your field, explain the reason. If there is a gap, explain what you did during that time."
        ],
        bullets: [
          "Mention course modules that connect with your goal.",
          "Explain how the qualification helps your career.",
          "Keep country reasons practical, not generic.",
          "Avoid saying only that the country has PR options."
        ]
      },
      {
        heading: "Match SOP with documents",
        body: [
          "Your SOP should match your admission documents, work records, funds, family details and previous travel history.",
          "If the written story says one thing and documents show another, the file becomes confusing."
        ],
        bullets: [
          "Check dates carefully.",
          "Do not hide refusals or gaps.",
          "Keep financial explanation simple.",
          "Ask for a review before submitting if you are unsure."
        ]
      }
    ]
  },
  {
    slug: "what-to-do-after-visa-refusal",
    title: "What to Do After Visa Refusal",
    description:
      "A calm guide for applicants who received a refusal and need to decide whether to reapply, wait or choose another route.",
    category: "Visa Tips",
    readTime: "8 min read",
    keywords: ["visa refusal help India"],
    image: {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      alt: "Laptop and documents on a desk"
    },
    badges: ["⚠️ Refusal", "🔍 Review", "📄 Documents", "🧭 Plan B"],
    quickSummary:
      "A refusal is stressful, but the next step should be careful. Do not submit the same file again without understanding what went wrong.",
    keyTakeaways: [
      "Read the refusal reason slowly.",
      "Compare the reason with your previous documents.",
      "Reapply only after fixing the weak points."
    ],
    sections: [
      {
        heading: "Do not panic-submit again",
        body: [
          "Many applicants reapply quickly because they feel anxious. This can repeat the same mistake.",
          "First, collect the refusal letter, submitted forms, SOP, bank documents, invitation letters, academic records and any communication used in the previous file."
        ],
        bullets: [
          "Do not change the story randomly.",
          "Do not add fake documents.",
          "Do not ignore the exact refusal concern.",
          "Do not rely only on online comments from strangers."
        ]
      },
      {
        heading: "Find the weak point",
        body: [
          "A refusal can happen because of purpose, funds, ties, course mismatch, missing documents, poor explanation or inconsistent records.",
          "A good review checks both the officer's concern and the quality of your submitted evidence."
        ],
        bullets: [
          "Check whether your funds matched your plan.",
          "Check whether the SOP was too generic.",
          "Check whether documents supported your claims.",
          "Check whether another route is stronger."
        ]
      },
      {
        heading: "Decide the next route",
        body: [
          "Sometimes reapplication is sensible. Sometimes waiting, improving documents, changing course, changing country or choosing another route is smarter.",
          "The right answer depends on your profile, refusal reason, timeline and budget."
        ],
        bullets: [
          "Make a correction list before reapplying.",
          "Prepare stronger evidence, not just more evidence.",
          "Keep a backup route ready.",
          "Take advice before spending more money."
        ]
      }
    ]
  },
  {
    slug: "cost-of-studying-abroad-for-indian-students",
    title: "Cost of Studying Abroad for Indian Students",
    description:
      "A parent-friendly cost guide covering tuition, rent, food, visa fees, flights, setup cost, emergency buffer and part-time work expectations.",
    category: "Study Abroad",
    readTime: "10 min read",
    keywords: ["study abroad consultant India"],
    image: {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
      alt: "Calculator and financial documents on a desk"
    },
    badges: ["💰 Budget", "🏠 Rent", "✈️ Flights", "🧾 Fees"],
    quickSummary:
      "Do not plan only tuition. A safe study abroad budget includes tuition, rent, food, transport, insurance, visa costs, flights, deposits and emergency money.",
    keyTakeaways: [
      "Total cost matters more than headline tuition fee.",
      "Part-time work should not be your only financial plan.",
      "Parents should keep an emergency buffer."
    ],
    sections: [
      {
        heading: "Calculate the full first-year cost",
        body: [
          "Many families ask only one question: what is the tuition fee? But the real cost of studying abroad includes many smaller expenses.",
          "A student may need rent deposit, bedding, winter clothes, local travel pass, SIM, groceries, insurance, application costs and emergency money."
        ],
        bullets: [
          "Tuition fee and deposit",
          "Visa fee, insurance and health charges where applicable",
          "Flight tickets and airport transfer",
          "Rent, food, transport and phone plan"
        ]
      },
      {
        heading: "Do not overdepend on part-time jobs",
        body: [
          "Part-time work can help with living expenses where permitted, but it may not start immediately. Students need time to settle, prepare CVs and understand local expectations.",
          "If the budget depends on getting a job in week one, the plan is risky."
        ],
        bullets: [
          "Keep money ready for at least the first few months.",
          "Understand permitted work hours and conditions.",
          "Prepare a local-style CV before departure.",
          "Treat part-time income as support, not the main foundation."
        ]
      },
      {
        heading: "Discuss money openly at home",
        body: [
          "Parents and students should discuss who will pay, when fees are due, how rent will be managed and what happens in an emergency.",
          "Clear money planning reduces stress after arrival and helps the student focus on study."
        ],
        bullets: [
          "Write a monthly budget before departure.",
          "Keep proof of funds organized.",
          "Track currency exchange changes.",
          "Avoid last-minute loans without understanding repayment."
        ]
      }
    ]
  },
  {
    slug: "first-30-days-abroad-checklist",
    title: "First 30 Days Abroad Checklist",
    description:
      "A simple life-abroad checklist for SIM, bank account, transport, accommodation, groceries, CV, emergency contacts and confidence.",
    category: "Life Abroad",
    readTime: "9 min read",
    keywords: ["overseas settlement support"],
    image: {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
      alt: "Comfortable room with suitcase and home setup"
    },
    badges: ["🏠 New Home", "📱 SIM", "🏦 Bank", "🧭 Routine"],
    quickSummary:
      "The first month abroad feels easier when you handle basics in the right order: safety, phone, money, accommodation, documents, routine and support system.",
    keyTakeaways: [
      "Do not try to solve everything on day one.",
      "Keep documents and emergency contacts accessible.",
      "Build routine slowly and stay connected with family."
    ],
    sections: [
      {
        heading: "First 72 hours",
        body: [
          "Your first job is to become safe and reachable. Reach accommodation, inform family, get internet access and keep important documents safe.",
          "Do not pay unknown people quickly for rooms, jobs or services. Slow down and verify."
        ],
        bullets: [
          "Send your location to family.",
          "Buy or activate a SIM card.",
          "Keep passport and BRP/permit documents safe where applicable.",
          "Understand nearest grocery store, bus stop and emergency number."
        ]
      },
      {
        heading: "First two weeks",
        body: [
          "Once you are safe, start local setup. Open a bank account if eligible, understand rent rules, set up transport, register with university or employer systems and prepare your CV.",
          "This stage is about stability, not perfection."
        ],
        bullets: [
          "Make a weekly food and transport budget.",
          "Learn local address and postcode format.",
          "Save important contacts in your phone.",
          "Start building a local routine."
        ]
      },
      {
        heading: "First month mindset",
        body: [
          "Feeling homesick or confused is normal. Many newcomers feel pressure because social media makes moving abroad look easy.",
          "Speak to trusted people, ask questions and take one practical step each day."
        ],
        bullets: [
          "Do not compare your first month with someone else's third year.",
          "Stay in touch with family but build local independence.",
          "Avoid scams promising instant jobs or rooms.",
          "Ask for help early if you feel stuck."
        ]
      }
    ]
  },
  {
    slug: "part-time-jobs-international-students",
    title: "How to Find Part-Time Jobs as an International Student",
    description:
      "A practical guide to CV readiness, communication, job search habits, interview confidence and realistic expectations.",
    category: "Work Visa",
    readTime: "9 min read",
    keywords: ["part-time job guidance abroad"],
    image: {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
      alt: "Young professionals working together at a table"
    },
    badges: ["💼 Jobs", "📄 CV", "🗣️ Interview", "⏰ Routine"],
    quickSummary:
      "Part-time jobs usually come from preparation, confidence and consistency. A better CV, better communication and realistic routine can improve your chances.",
    keyTakeaways: [
      "Prepare before you land.",
      "Apply consistently, not randomly.",
      "Understand your permitted work conditions."
    ],
    sections: [
      {
        heading: "Prepare your CV before departure",
        body: [
          "Do not wait until you urgently need money. Prepare a simple one-page CV before you travel.",
          "Include education, skills, previous work, volunteering, languages, availability and any customer-service experience."
        ],
        bullets: [
          "Keep CV clean and easy to scan.",
          "Use a professional email address.",
          "Mention availability honestly.",
          "Prepare different versions for retail, hospitality or campus jobs."
        ]
      },
      {
        heading: "Build confidence for interviews",
        body: [
          "Many students know English but feel nervous speaking to employers. Practice simple answers before you apply.",
          "Employers often want reliability, punctuality, communication and willingness to learn."
        ],
        bullets: [
          "Practice introducing yourself in 30 seconds.",
          "Prepare answers for availability and experience.",
          "Be polite, clear and on time.",
          "Do not memorize robotic answers."
        ]
      },
      {
        heading: "Search with a routine",
        body: [
          "Job search becomes easier when you treat it like a weekly task. Apply online, visit nearby stores where appropriate, ask university career teams and speak to seniors carefully.",
          "Remember that some jobs take time. Budgeting should not assume instant income."
        ],
        bullets: [
          "Track where you applied.",
          "Follow up politely.",
          "Avoid paying anyone for a job offer.",
          "Protect your study schedule."
        ]
      }
    ]
  },
  {
    slug: "how-to-choose-the-right-country",
    title: "How to Choose the Right Country",
    description:
      "A decision guide to compare countries by course, cost, career plan, family comfort, language, work options and long-term goals.",
    category: "Visa Tips",
    readTime: "11 min read",
    keywords: ["immigration consultant for Indians", "study abroad consultant India"],
    image: {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
      alt: "Person looking at a scenic travel destination"
    },
    badges: ["🌍 Compare", "🎓 Study", "💼 Work", "🏡 Future"],
    quickSummary:
      "The best country is not the most popular country. It is the country that fits your profile, budget, comfort, documents and long-term goal.",
    keyTakeaways: [
      "Do not choose only by trend.",
      "Compare total cost and route fit.",
      "Keep a backup country if Plan A is weak."
    ],
    sections: [
      {
        heading: "Start with your goal",
        body: [
          "A student, tourist, skilled worker and PR applicant should not compare countries in the same way. Your goal decides what matters most.",
          "If your goal is education, course quality and cost matter. If your goal is PR, occupation, points, language and work history may matter more."
        ],
        bullets: [
          "Study abroad: course, university, cost and career outcome.",
          "PR: age, education, work, English and occupation fit.",
          "Tourism: purpose, funds and return ties.",
          "Family route: relationship, sponsor and financial evidence."
        ]
      },
      {
        heading: "Compare cost and lifestyle",
        body: [
          "A country can look attractive online but may not suit your budget or comfort. Rent, transport, food, climate, distance from India and support network matter.",
          "Families should discuss emotional comfort, not only visa chances."
        ],
        bullets: [
          "Check tuition and living cost together.",
          "Understand climate and city size.",
          "Ask about accommodation availability.",
          "Compare work rights and local job market carefully."
        ]
      },
      {
        heading: "Choose a practical Plan A and Plan B",
        body: [
          "A mature plan does not depend on only one country. If your first option is weak, compare alternatives early.",
          "A consultant should help you understand why one country is stronger for your profile and what to improve if you still want another country."
        ],
        bullets: [
          "Rank countries by fit, not emotion.",
          "Check document strength for each route.",
          "Keep deadlines and intake dates in mind.",
          "Avoid paying fees before understanding risk."
        ]
      }
    ]
  },
  {
    slug: "parents-guide-sending-children-abroad",
    title: "Parent's Guide to Sending Children Abroad",
    description:
      "A simple guide for Indian parents covering safety, cost, course value, accommodation, part-time work, documents and emotional preparation.",
    category: "Study Abroad",
    readTime: "10 min read",
    keywords: ["study abroad consultant India"],
    image: {
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=80",
      alt: "Family sitting together at home"
    },
    badges: ["👨‍👩‍👧 Parents", "🎓 Study", "💰 Budget", "🛡️ Safety"],
    quickSummary:
      "Parents should understand the full plan before paying fees: course value, total cost, accommodation, safety, documents, part-time work reality and first-month support.",
    keyTakeaways: [
      "Ask practical questions before paying deposits.",
      "Prepare the student for life skills, not only documents.",
      "Keep communication calm and regular after departure."
    ],
    sections: [
      {
        heading: "Ask the right questions before admission",
        body: [
          "A good course should support the student's career. Parents should ask why this course, why this country and what the realistic outcome is.",
          "Do not select a university only because the brochure looks attractive or the fee seems lower."
        ],
        bullets: [
          "What is the total first-year cost?",
          "Where will the student live in the first month?",
          "How does this course help future career?",
          "What documents and funds are needed?"
        ]
      },
      {
        heading: "Prepare the student for daily life",
        body: [
          "Students need confidence with cooking basics, budgeting, public transport, communication, time management and emergency handling.",
          "These skills reduce panic and help them settle faster."
        ],
        bullets: [
          "Teach basic monthly budgeting.",
          "Prepare digital copies of documents.",
          "Discuss scams and safe accommodation.",
          "Practice simple professional communication."
        ]
      },
      {
        heading: "Support without pressure",
        body: [
          "The first few weeks abroad can feel lonely. Students may not share every problem because they do not want parents to worry.",
          "Keep communication regular, calm and practical. Encourage them to ask for help early."
        ],
        bullets: [
          "Set weekly call times.",
          "Keep emergency contacts ready.",
          "Do not compare them with other students.",
          "Celebrate small progress."
        ]
      }
    ]
  },
  ...seoTopicPlaceholders()
];

export const resourceBySlug = (slug: string) =>
  resources.find((resource) => resource.slug === slug);

function seoTopicPlaceholders(): Resource[] {
  const topics: {
    slug: string;
    title: string;
    description: string;
    category: string;
    keywords: string[];
    badges: string[];
  }[] = [
    {
      slug: "canada-pr-from-india-complete-guide",
      title: "Canada PR from India: Complete Guide",
      description: "A planning guide for Canada PR from India covering Express Entry, PNP, CRS score, documents, timelines and refusal-risk basics.",
      category: "PR Updates",
      keywords: ["Canada PR from India", "Canada Express Entry", "Canada PNP", "CRS score calculator"],
      badges: ["Canada PR", "Express Entry", "PNP"]
    },
    {
      slug: "how-canada-express-entry-works",
      title: "How Canada Express Entry Works",
      description: "Understand Canada Express Entry, profile creation, CRS ranking, draws, invitations, documents and practical readiness for Indian applicants.",
      category: "PR Updates",
      keywords: ["Canada Express Entry", "CRS score calculator", "Canada PR consultant in Gurugram"],
      badges: ["Express Entry", "CRS", "ITA"]
    },
    {
      slug: "canada-67-points-grid-explained",
      title: "Canada 67 Points Grid Explained",
      description: "A simple explanation of the Canada 67 points grid, factors, planning use and why CRS ranking still matters after eligibility.",
      category: "PR Updates",
      keywords: ["Canada 67 points grid", "Canada 67 points calculator", "Canada PR from India"],
      badges: ["67 Points", "FSW", "Eligibility"]
    },
    {
      slug: "how-to-improve-crs-score",
      title: "How to Improve CRS Score",
      description: "Practical ways to review language scores, education, experience, spouse factors, PNP options and documents for a stronger CRS profile.",
      category: "PR Updates",
      keywords: ["CRS score calculator", "Canada Express Entry", "Canada PNP"],
      badges: ["CRS", "IELTS", "PNP"]
    },
    {
      slug: "canada-pnp-guide-indian-applicants",
      title: "Canada PNP Guide for Indian Applicants",
      description: "A Canada PNP guide covering provincial fit, occupation demand, documents, nomination basics and how PNP can support Canada PR planning.",
      category: "PR Updates",
      keywords: ["Canada PNP", "Canada PR from India", "Canada PR consultant in Gurugram"],
      badges: ["PNP", "Province", "Nomination"]
    },
    {
      slug: "australia-65-points-calculator-explained",
      title: "Australia 65 Points Calculator Explained",
      description: "Understand the Australia 65 points grid, points-tested skilled migration factors, invitation reality and document planning for Indian applicants.",
      category: "PR Updates",
      keywords: ["Australia 65 points calculator", "Australia 65 points grid", "Australia PR from India"],
      badges: ["65 Points", "Australia PR", "SkillSelect"]
    },
    {
      slug: "difference-australia-189-190-491-visas",
      title: "Difference Between Australia 189, 190 and 491 Visas",
      description: "Compare Australia Subclass 189 visa, Subclass 190 visa and Subclass 491 visa by nomination, location, points and profile fit.",
      category: "PR Updates",
      keywords: ["Australia Subclass 189 visa", "Australia Subclass 190 visa", "Australia Subclass 491 visa"],
      badges: ["189", "190", "491"]
    },
    {
      slug: "usa-b1-b2-visa-documents-checklist",
      title: "USA B1/B2 Visa Documents Checklist",
      description: "A document checklist for USA B1/B2 visitor visa applicants covering purpose, funds, invitation, employment, travel history and interview readiness.",
      category: "Tourist Visa",
      keywords: ["USA B1/B2 visa consultant", "USA tourist visa", "USA visitor visa"],
      badges: ["USA", "B1/B2", "Interview"]
    },
    {
      slug: "schengen-tourist-visa-from-india",
      title: "Schengen Tourist Visa from India",
      description: "A Schengen tourist visa from India guide covering itinerary, hotel, travel insurance, funds, employment proof and return-intent documents.",
      category: "Tourist Visa",
      keywords: ["Schengen tourist visa from India", "tourist visa consultant", "visitor visa consultant"],
      badges: ["Schengen", "Tourist Visa", "Documents"]
    },
    {
      slug: "germany-opportunity-card-explained",
      title: "Germany Opportunity Card Explained",
      description: "Understand Germany Opportunity Card planning, points-style factors, qualification review, funds, language expectations and document readiness.",
      category: "Work Visa",
      keywords: ["Germany Opportunity Card", "Germany work visa", "Germany job seeker visa"],
      badges: ["Germany", "Opportunity Card", "Work"]
    },
    {
      slug: "germany-job-seeker-visa-guide",
      title: "Germany Job Seeker Visa Guide",
      description: "A practical Germany job seeker visa guide for Indian professionals reviewing qualifications, funds, experience, language and job-search readiness.",
      category: "Work Visa",
      keywords: ["Germany job seeker visa", "Germany work visa", "EU Blue Card"],
      badges: ["Germany", "Job Seeker", "EU Blue Card"]
    },
    {
      slug: "study-visa-sop-writing-tips",
      title: "Study Visa SOP Writing Tips",
      description: "SOP writing for study visa applicants, with tips on course fit, funds, future plan, personal voice, refusals and document consistency.",
      category: "Visa Tips",
      keywords: ["SOP writing for study visa", "study visa consultant", "study abroad consultant"],
      badges: ["SOP", "Study Visa", "Documents"]
    },
    {
      slug: "common-reasons-study-visa-refusal",
      title: "Common Reasons for Study Visa Refusal",
      description: "Common study visa refusal reasons including course mismatch, weak SOP, unclear funds, poor ties, gaps and inconsistent documents.",
      category: "Visa Tips",
      keywords: ["visa refusal review consultant", "financial documents for study visa", "SOP writing for study visa"],
      badges: ["Refusal", "Study Visa", "Review"]
    },
    {
      slug: "mbbs-abroad-for-indian-students",
      title: "MBBS Abroad for Indian Students",
      description: "A parent-friendly MBBS abroad guide covering Russia, Georgia, Kazakhstan, Uzbekistan, eligibility, budget, documents and visa support.",
      category: "MBBS Abroad",
      keywords: ["MBBS abroad for Indian students", "MBBS in Russia", "MBBS in Georgia", "MBBS in Kazakhstan", "MBBS in Uzbekistan"],
      badges: ["MBBS", "Medical", "Students"]
    },
    {
      slug: "best-countries-indian-students-study-abroad",
      title: "Best Countries for Indian Students to Study Abroad",
      description: "Compare Canada, UK, Australia, USA, New Zealand and Europe by course fit, cost, documents, work options and post-landing support.",
      category: "Study Abroad",
      keywords: ["study abroad consultant", "study abroad consultant in Gurugram", "pre-departure support"],
      badges: ["Study Abroad", "Country Comparison", "Students"]
    },
    {
      slug: "tourist-visa-documents-checklist",
      title: "Tourist Visa Documents Checklist",
      description: "A tourist visa document checklist for Indian travellers covering funds, itinerary, invitation, employment, family ties and travel history.",
      category: "Tourist Visa",
      keywords: ["tourist visa consultant", "visitor visa consultant", "tourist visa consultant in Gurugram"],
      badges: ["Tourist Visa", "Checklist", "Travel"]
    },
    {
      slug: "dependent-visa-guide-spouse-family",
      title: "Dependent Visa Guide for Spouse and Family",
      description: "A dependent visa guide for spouse and family applicants covering relationship evidence, funds, sponsor records and common risk areas.",
      category: "Visa Tips",
      keywords: ["dependent visa consultant in Gurugram", "dependent visa for spouse", "family visa consultant"],
      badges: ["Dependent Visa", "Spouse", "Family"]
    }
  ];

  const guideImages = [
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
      alt: "Canada PR planning documents on a laptop"
    },
    {
      src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85",
      alt: "Professional desk setup for Express Entry profile planning"
    },
    {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85",
      alt: "Calculator and papers for points grid assessment"
    },
    {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
      alt: "Applicant reviewing documents to improve CRS score"
    },
    {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85",
      alt: "Professional profile review for provincial nomination planning"
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85",
      alt: "Australia skilled migration planning conversation"
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85",
      alt: "Applicants comparing skilled visa options"
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=85",
      alt: "USA B1 B2 visitor visa interview preparation"
    },
    {
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=85",
      alt: "Traveller preparing Schengen tourist visa documents"
    },
    {
      src: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1400&q=85",
      alt: "Germany Opportunity Card and Europe work planning"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85",
      alt: "Indian professionals discussing Germany job seeker visa"
    },
    {
      src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85",
      alt: "Student writing SOP for study visa"
    },
    {
      src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1400&q=85",
      alt: "Study visa refusal review notes and documents"
    },
    {
      src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=85",
      alt: "Medical student planning MBBS abroad"
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
      alt: "Students comparing best countries to study abroad"
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
      alt: "Tourist visa travel checklist with passport and destination planning"
    },
    {
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=85",
      alt: "Family reviewing dependent visa documents together"
    }
  ];

  return topics.map((topic, index): Resource => ({
    slug: topic.slug,
    title: topic.title,
    description: topic.description,
    category: topic.category,
    readTime: "12 min read",
    keywords: topic.keywords,
    image: guideImages[index],
    badges: topic.badges,
    quickSummary:
      `${topic.title} gives Indian applicants a practical, document-focused way to understand the route before they apply or spend money on the wrong pathway.`,
    keyTakeaways: [
      `Start by checking whether your profile actually fits ${topic.keywords[0]}.`,
      "Document quality, funds, purpose and consistency often matter as much as basic eligibility.",
      "A profile/CV review can help you identify weak areas before submission or reapplication."
    ],
    sections: buildGuideSections(topic),
    faqs: buildGuideFaqs(topic)
  }));
}

function buildGuideSections(topic: {
  title: string;
  description: string;
  category: string;
  keywords: string[];
}) {
  const mainKeyword = topic.keywords[0];
  const secondaryKeyword = topic.keywords[1] ?? topic.keywords[0];
  const routeLabel = topic.title.replace(/:.*$/, "");

  return [
    {
      heading: `Who ${routeLabel} is for`,
      body: [
        `${topic.description} This guide is written for Indian applicants who want a clear first understanding of ${mainKeyword} before they commit fees, book travel, choose a course or prepare a reapplication.`,
        `The right route depends on your purpose, background, funds, family situation, travel history and documents. For some applicants, ${secondaryKeyword} may be the best direction; for others, a different country, intake, visa category or timing may be more sensible.`,
        "Use this guide to prepare better questions for your consultation. A good decision should be based on profile fit, document strength and current official criteria, not pressure or online shortcuts."
      ],
      bullets: [
        "Students should compare course logic, funds, SOP and post-study plans.",
        "Professionals should review CV, work history, qualifications, English readiness and occupation fit.",
        "Families should check relationship evidence, sponsorship, funds and timeline comfort.",
        "Travellers should keep purpose, itinerary, funds and return ties simple and consistent."
      ]
    },
    {
      heading: "Eligibility signals and document planning",
      body: [
        `For ${mainKeyword}, eligibility is only the starting point. A file can still look weak if the documents do not clearly support the story, if funds are difficult to explain, or if the purpose does not match the applicant's previous history.`,
        "Most strong applications have a simple structure: a believable purpose, consistent identity and background records, funds that match the plan, supporting documents that answer obvious questions, and a clear explanation where there are gaps or previous refusals.",
        "Before you apply, make a document map. Put each claim beside the document that proves it. If a claim has no document, or a document creates a new question, fix that before submission."
      ],
      bullets: [
        "Passport, identity and civil-status documents",
        "Academic, employment, business or professional records",
        "Funds, income, loan, sponsorship or tax documents where relevant",
        "SOP, GTE, invitation, itinerary, CV, relationship proof or refusal history as needed"
      ]
    },
    {
      heading: "Common mistakes applicants should avoid",
      body: [
        `Applicants often weaken ${routeLabel} planning by copying generic templates, rushing near deadlines, hiding previous refusals, showing sudden funds without context, or choosing a route only because it sounds popular.`,
        "Another common mistake is adding more documents without improving the logic. A large file is not automatically a strong file. The officer or decision-maker should be able to understand why you are applying, why now, who is paying, and why the route fits your background.",
        "If your profile has a gap, course change, low funds, weak travel history, unclear job role or earlier refusal, the file should address that directly and calmly."
      ],
      bullets: [
        "Do not use copied SOPs or generic purpose statements.",
        "Do not ignore previous refusals, gaps or inconsistent dates.",
        "Do not choose a route without checking funds, timeline and document readiness.",
        "Do not rely on verbal promises; keep guidance tied to written requirements and evidence."
      ]
    },
    {
      heading: "How Idol Immigration helps",
      body: [
        `Idol Immigration supports applicants with profile assessment, CV or document review, route comparison, SOP or statement guidance, interview preparation where relevant and practical application planning for ${mainKeyword}.`,
        "The consultation is designed to identify what is strong, what is weak and what should be improved before applying. This helps students, families, professionals and travellers avoid avoidable mistakes and make calmer decisions.",
        "Idol Immigration is based in Gurugram and supports applicants across Delhi NCR, Haryana and India with transparent visa guidance, documentation support, study abroad counselling, PR pathway guidance and refusal-risk review."
      ],
      bullets: [
        "Profile/CV review and route suitability discussion",
        "Document checklist, consistency check and weak-area review",
        "SOP, GTE, invitation, travel-purpose or refusal explanation support",
        "Clear CTA to contact Idol Immigration for personalised visa guidance"
      ]
    }
  ];
}

function buildGuideFaqs(topic: {
  title: string;
  keywords: string[];
}) {
  const mainKeyword = topic.keywords[0];

  return [
    {
      question: `Who should read ${topic.title}?`,
      answer:
        `Indian applicants comparing ${mainKeyword} should read this guide before applying, reapplying or paying major fees. It is useful for students, families, skilled professionals and travellers who want route clarity.`
    },
    {
      question: "Can Idol Immigration review my profile or CV for this route?",
      answer:
        "Yes. Idol can review your profile, CV, documents, funds, purpose, SOP or previous refusal concerns and suggest practical next steps based on your situation."
    },
    {
      question: "Does a strong profile guarantee approval?",
      answer:
        "No. A strong profile and clean documents can improve preparation, but visa and immigration outcomes depend on official criteria, evidence and individual circumstances."
    },
    {
      question: "What should I prepare before contacting Idol Immigration?",
      answer:
        "Prepare your passport details, education and work history, target country, budget, timeline, previous visa history and any offer letter, invitation, CV, SOP or refusal letter you already have."
    }
  ];
}
