export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  keywords: string[];
  sections: { heading: string; body: string[] }[];
};

export const resources: Resource[] = [
  {
    slug: "uk-student-visa-guide-indian-students",
    title: "UK Student Visa Guide for Indian Students",
    description:
      "A practical planning guide for Indian students comparing the UK for study, documents, funds and first-month readiness.",
    category: "Study Abroad",
    readTime: "7 min read",
    keywords: ["UK student visa consultant India", "study abroad consultant India"],
    sections: [
      {
        heading: "Start with course fit",
        body: [
          "The strongest study plans begin with a course that makes sense for your academic background, career direction and budget.",
          "Avoid choosing only by city or friend recommendations. Parents should ask how the course supports the student's next step."
        ]
      },
      {
        heading: "Prepare for life after arrival",
        body: [
          "Plan accommodation, local travel, bank account basics, SIM card, budgeting and part-time job readiness before departure.",
          "Visa rules change frequently. Verify with official government sources before publishing."
        ]
      }
    ]
  },
  {
    slug: "canada-study-visa-checklist",
    title: "Canada Study Visa Checklist",
    description:
      "A document-readiness checklist for Indian students preparing Canada study plans without relying on outdated assumptions.",
    category: "Checklist",
    readTime: "6 min read",
    keywords: ["Canada study visa consultant", "study abroad consultant India"],
    sections: [
      {
        heading: "Document readiness",
        body: [
          "Review passport, academic records, funds, admission documents, statement logic and family sponsorship details before filing.",
          "Every document should support a clear study purpose and financial story."
        ]
      },
      {
        heading: "Common weak signals",
        body: [
          "Weak SOP, funds mismatch, unclear course progression and inconsistent information can create avoidable risk.",
          "Visa rules change frequently. Verify with official government sources before publishing."
        ]
      }
    ]
  },
  {
    slug: "visitor-visa-documents-for-indians",
    title: "Visitor Visa Documents for Indians",
    description:
      "How to think about purpose, funds, itinerary, invitation and ties to India for visitor visa planning.",
    category: "Visitor Visa",
    readTime: "5 min read",
    keywords: ["visitor visa consultant India"],
    sections: [
      {
        heading: "Show a believable visit",
        body: [
          "Your documents should explain where you are going, why you are going, who is paying and why you will return.",
          "A simple, consistent application is usually stronger than a large but confusing file."
        ]
      },
      {
        heading: "Review before filing",
        body: [
          "Check invitation details, bank evidence, employment or family ties, travel history and itinerary consistency.",
          "Visa rules change frequently. Verify with official government sources before publishing."
        ]
      }
    ]
  },
  {
    slug: "how-to-write-a-strong-sop",
    title: "How to Write a Strong SOP",
    description:
      "A clear SOP should explain your decision, not sound like a copied template.",
    category: "Statement Review",
    readTime: "6 min read",
    keywords: ["SOP review visa", "study abroad consultant India"],
    sections: [
      {
        heading: "Make the logic personal",
        body: [
          "Explain why this course, why this country, why now and how it connects to your background.",
          "Simple, specific writing is better than dramatic language."
        ]
      },
      {
        heading: "Avoid template mistakes",
        body: [
          "Do not copy generic internet lines. Officers and reviewers can usually identify vague or mismatched statements.",
          "Visa rules change frequently. Verify with official government sources before publishing."
        ]
      }
    ]
  },
  {
    slug: "what-to-do-after-visa-refusal",
    title: "What to Do After Visa Refusal",
    description:
      "A calm next-step guide for applicants who received a refusal and need to decide whether to reapply.",
    category: "Refusal Help",
    readTime: "5 min read",
    keywords: ["visa refusal help India"],
    sections: [
      {
        heading: "Do not rush the same file",
        body: [
          "A refusal should be studied before reapplication. The next file needs to address the actual concern, not simply add more papers.",
          "Review the letter, previous forms, funds, purpose and document consistency."
        ]
      },
      {
        heading: "Build a stronger Plan B",
        body: [
          "Sometimes the right answer is a better reapplication. Sometimes it is a different country, course, timing or route.",
          "Visa rules change frequently. Verify with official government sources before publishing."
        ]
      }
    ]
  },
  {
    slug: "cost-of-studying-abroad-for-indian-students",
    title: "Cost of Studying Abroad for Indian Students",
    description:
      "Plan tuition, living costs, visa fees, initial setup and emergency buffer before committing to a destination.",
    category: "Cost Planning",
    readTime: "7 min read",
    keywords: ["study abroad consultant India"],
    sections: [
      {
        heading: "Think total cost, not only tuition",
        body: [
          "Students should estimate tuition, accommodation, food, transport, visa-related costs, insurance, flights, deposits and initial setup.",
          "Parents should also keep an emergency buffer for the first few months."
        ]
      },
      {
        heading: "Part-time work is not a full plan",
        body: [
          "Part-time work can support some costs where permitted, but it should not replace realistic financial planning.",
          "Visa rules change frequently. Verify with official government sources before publishing."
        ]
      }
    ]
  },
  {
    slug: "first-30-days-abroad-checklist",
    title: "First 30 Days Abroad Checklist",
    description:
      "SIM, bank account, local transport, accommodation, CV, emergency contacts and confidence basics for newcomers.",
    category: "Settlement",
    readTime: "6 min read",
    keywords: ["overseas settlement support"],
    sections: [
      {
        heading: "Set up local life",
        body: [
          "Prioritize SIM card, bank account, local travel, accommodation checks, emergency contacts and university or employer onboarding.",
          "Keep scanned documents and important contacts accessible."
        ]
      },
      {
        heading: "Start work readiness early",
        body: [
          "Prepare a local-style CV, basic interview answers, LinkedIn profile and realistic expectations for part-time job search.",
          "Visa rules change frequently. Verify with official government sources before publishing."
        ]
      }
    ]
  },
  {
    slug: "part-time-jobs-international-students",
    title: "How to Find Part-Time Jobs as an International Student",
    description:
      "Build CV readiness, communication confidence and realistic expectations before you move abroad.",
    category: "Job Readiness",
    readTime: "6 min read",
    keywords: ["part-time job guidance abroad"],
    sections: [
      {
        heading: "Prepare before landing",
        body: [
          "A simple CV, confidence in basic English conversation and willingness to learn local workplace norms can make the search less stressful.",
          "Students should understand permitted work conditions from official sources."
        ]
      },
      {
        heading: "Avoid unrealistic expectations",
        body: [
          "Part-time jobs may take time. Budgeting should not assume immediate employment from week one.",
          "Visa rules change frequently. Verify with official government sources before publishing."
        ]
      }
    ]
  },
  {
    slug: "how-to-choose-the-right-country",
    title: "How to Choose the Right Country",
    description:
      "Compare country fit by course, cost, career plan, family comfort, language, settlement and risk.",
    category: "Country Comparison",
    readTime: "8 min read",
    keywords: ["immigration consultant for Indians", "study abroad consultant India"],
    sections: [
      {
        heading: "Compare your real priorities",
        body: [
          "The right country depends on academic direction, budget, long-term goals, comfort with climate and culture, family expectations and route strength.",
          "A country that is perfect for one applicant may be wrong for another."
        ]
      },
      {
        heading: "Keep a backup pathway",
        body: [
          "If Plan A is weak, compare alternatives early instead of waiting until deadlines or refusals create pressure.",
          "Visa rules change frequently. Verify with official government sources before publishing."
        ]
      }
    ]
  },
  {
    slug: "parents-guide-sending-children-abroad",
    title: "Parent's Guide to Sending Children Abroad",
    description:
      "Questions parents should ask before paying fees, choosing a course or sending a child overseas.",
    category: "Parents",
    readTime: "7 min read",
    keywords: ["study abroad consultant India"],
    sections: [
      {
        heading: "Ask the practical questions",
        body: [
          "Parents should ask about total cost, accommodation, safety, course value, part-time work reality, emergency contacts and first-month planning.",
          "Good planning protects both the student and the family budget."
        ]
      },
      {
        heading: "Support confidence, not only paperwork",
        body: [
          "Students need confidence, communication skills and life skills alongside documents and admission letters.",
          "Visa rules change frequently. Verify with official government sources before publishing."
        ]
      }
    ]
  }
];

export const resourceBySlug = (slug: string) =>
  resources.find((resource) => resource.slug === slug);
