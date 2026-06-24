export type FAQ = {
  question: string;
  answer: string;
};

export const generalFaqs: FAQ[] = [
  {
    question: "Does Idol Immigration guarantee visa approval?",
    answer:
      "No. Visa outcomes depend on official government criteria and individual circumstances. Idol Immigration provides consultation, planning and application support, but never guarantees approval."
  },
  {
    question: "Can I start with WhatsApp before booking a full consultation?",
    answer:
      "Yes. Most applicants begin by sharing their goal, background, target country and current documents on WhatsApp. The team can then suggest the next sensible step."
  },
  {
    question: "Do you help after the visa is approved?",
    answer:
      "Yes. Idol Immigration can guide applicants on pre-departure planning, accommodation search basics, CV readiness, part-time job preparation, budgeting and settling into a new country."
  },
  {
    question: "Do visa rules on this website replace official government advice?",
    answer:
      "No. Country-specific rules change frequently. Applicants should verify final requirements using official government sources before submitting any application."
  }
];

export const serviceFaqs: Record<string, FAQ[]> = {
  "study-abroad": [
    {
      question: "Can Idol help me choose a course and country?",
      answer:
        "Yes. The counselling process compares your academic record, budget, career plan, language readiness and family priorities before shortlisting practical study options."
    },
    {
      question: "Do you support accommodation and part-time job preparation?",
      answer:
        "Yes. Idol can help you prepare for accommodation search, CV basics, interview confidence and realistic part-time job expectations before you travel."
    }
  ],
  "visitor-visa": [
    {
      question: "What usually weakens a tourist or visitor visa application?",
      answer:
        "Common risk signals include unclear purpose of visit, weak home-country ties, funds mismatch, incomplete invitation details, inconsistent travel history or poor supporting documents."
    },
    {
      question: "Can you review documents before submission?",
      answer:
        "Yes. Idol reviews the overall purpose, funds, itinerary, invitation or sponsorship details and supporting evidence so weak areas can be addressed before filing."
    }
  ],
  "pr-skilled-migration": [
    {
      question: "Can you tell me if PR is realistic?",
      answer:
        "Idol can review your age, education, work history, English ability, occupation fit and country preferences to identify realistic skilled migration or backup pathways."
    },
    {
      question: "Do you handle multiple countries?",
      answer:
        "Yes. Guidance can compare PR and skilled migration options across countries such as Canada, Australia, the UK, New Zealand and other destinations where suitable."
    }
  ],
  "work-business-visa": [
    {
      question: "Do you help entrepreneurs and business applicants?",
      answer:
        "Yes. Idol can help applicants understand business, investor, start-up and work-related pathways, while reminding clients to verify current requirements with official sources."
    },
    {
      question: "Can you assess my business profile?",
      answer:
        "Yes. The review can cover business background, funds, intent, documentation readiness, travel history and route suitability."
    }
  ],
  "spouse-family-visa": [
    {
      question: "Can you help with spouse open work permit planning?",
      answer:
        "Yes. Idol helps families understand eligibility, relationship evidence, financial documents and common risk areas for spouse and family-related applications."
    },
    {
      question: "Do you help couples prepare their evidence?",
      answer:
        "Yes. The team can review relationship chronology, supporting records, financial evidence and consistency across forms and statements."
      }
  ],
  "dependent-visa": [
    {
      question: "Who can apply for a dependent visa?",
      answer:
        "Dependent eligibility depends on the main applicant's visa category and the destination country's current rules. It often includes a spouse, partner or children, with relationship, funds and accommodation evidence."
    },
    {
      question: "Can Idol help organize family documents?",
      answer:
        "Yes. Idol can review relationship proof, dependency records, financial evidence, sponsor documents and consistency across the family application."
    }
  ],
  "visa-refusal-review": [
    {
      question: "Can you help after a previous refusal?",
      answer:
        "Yes. Idol can review refusal notes, previous forms, documents and stated reasons to identify whether a stronger reapplication or a different route may be sensible."
    },
    {
      question: "Should I immediately reapply after refusal?",
      answer:
        "Not always. A reapplication should usually address the actual refusal concerns first. Filing quickly without fixing weak points can repeat the same result."
    }
  ]
};

export const countryFaqs: Record<string, FAQ[]> = {
  uk: [
    {
      question: "Is the UK suitable for Indian students?",
      answer:
        "The UK can be a strong option for students who value shorter courses, global exposure and English-speaking education. Final suitability depends on course fit, funds, career goals and current visa rules."
    },
    {
      question: "Do you help with life after landing in the UK?",
      answer:
        "Yes. Idol can help students prepare for accommodation, local transport, bank account basics, CV readiness, part-time job expectations and settling confidence."
    }
  ],
  canada: [
    {
      question: "Can Idol help with Canada study visa planning?",
      answer:
        "Yes. Idol can help with course selection, document review, funds planning, SOP review and application readiness while directing applicants to verify current IRCC requirements."
    },
    {
      question: "Do you discuss PR pathways for Canada?",
      answer:
        "Yes. Idol can discuss broad PR and skilled migration planning, but applicants should verify current program criteria through official Canadian government sources."
    }
  ],
  australia: [
    {
      question: "Do you help with Australia PR and study options?",
      answer:
        "Yes. Idol can review study, visitor, skilled migration and family-related goals for Australia, with official-source verification before any filing decision."
    },
    {
      question: "Can you assess my occupation profile?",
      answer:
        "Yes. Idol can review your education, work history, English readiness and occupation direction for route planning."
    }
  ],
  usa: [
    {
      question: "Can you help with US visitor and study applications?",
      answer:
        "Yes. Idol can help applicants prepare clear purpose, funds, academic fit and interview readiness for US-related plans."
    },
    {
      question: "Do you provide interview preparation?",
      answer:
        "Yes. Interview preparation can cover clarity, confidence, purpose of travel, course logic and consistency with documents."
    }
  ],
  "new-zealand": [
    {
      question: "Is New Zealand good for study and settlement planning?",
      answer:
        "New Zealand may suit applicants looking for a quieter, education-focused destination. Suitability depends on course fit, funds, career goals and current official rules."
    },
    {
      question: "Do you compare New Zealand with Australia and Canada?",
      answer:
        "Yes. Idol can compare destination fit, cost comfort, academic profile and longer-term goals before recommending next steps."
    }
  ],
  europe: [
    {
      question: "Can Idol guide me for Europe?",
      answer:
        "Yes. Idol can help compare European study, visit and work-related options at a planning level, then verify final requirements using official country sources."
    },
    {
      question: "Do European routes need language planning?",
      answer:
        "Often, yes. Depending on country and route, applicants may need English or local-language preparation. Idol can help you understand this early."
    }
  ]
};
