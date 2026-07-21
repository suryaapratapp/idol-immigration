import config from "@/data/crs-score-config.json";

export type EducationId = keyof typeof config.education;
export type LanguageScores = {
  speaking: number;
  listening: number;
  reading: number;
  writing: number;
};

export type CrsProfile = {
  maritalStatus: "single" | "spouse-accompanying" | "spouse-not-accompanying";
  age: number;
  education: EducationId;
  primaryLanguage: "english" | "french";
  firstLanguage: LanguageScores;
  secondLanguage: LanguageScores;
  canadianExperience: number;
  foreignExperience: number;
  certificateOfQualification: boolean;
  provincialNomination: boolean;
  canadianEducation: "none" | "short" | "long";
  siblingInCanada: boolean;
  spouseEducation: EducationId;
  spouseLanguage: LanguageScores;
  spouseCanadianExperience: number;
};

export type CrsResult = {
  total: number;
  core: number;
  spouse: number;
  transferability: number;
  additional: number;
  breakdown: {
    age: number;
    education: number;
    firstLanguage: number;
    secondLanguage: number;
    canadianExperience: number;
    educationTransfer: number;
    foreignWorkTransfer: number;
    tradeCertificate: number;
    french: number;
    canadianEducation: number;
    sibling: number;
    nomination: number;
  };
  priorities: string[];
};

const scoreValues = (scores: LanguageScores) => Object.values(scores);
const allAtLeast = (scores: LanguageScores, level: number) => scoreValues(scores).every((value) => value >= level);
const allAtMost = (scores: LanguageScores, level: number) => scoreValues(scores).every((value) => value <= level);

function tableScore(table: Record<string, number>, value: number) {
  return table[String(value)] ?? 0;
}

export function calculateCrs(profile: CrsProfile): CrsResult {
  const withSpouse = profile.maritalStatus === "spouse-accompanying";
  const relationshipKey = withSpouse ? "withSpouse" : "withoutSpouse";
  const age = profile.age < 18 || profile.age > 44
    ? 0
    : tableScore(config.age[relationshipKey], profile.age);
  const educationRow = config.education[profile.education];
  const education = educationRow[relationshipKey];
  const firstLanguage = scoreValues(profile.firstLanguage).reduce(
    (total, level) => total + tableScore(config.firstLanguage[relationshipKey], level),
    0
  );
  const secondLanguage = Math.min(
    scoreValues(profile.secondLanguage).reduce(
      (total, level) => total + tableScore(config.secondLanguage, level),
      0
    ),
    withSpouse ? 22 : 24
  );
  const canadianExperience = tableScore(
    config.canadianExperience[relationshipKey],
    Math.min(profile.canadianExperience, 5)
  );
  const core = age + education + firstLanguage + secondLanguage + canadianExperience;

  const spouse = withSpouse
    ? config.education[profile.spouseEducation].spouse +
      Math.min(
        20,
        scoreValues(profile.spouseLanguage).reduce(
          (total, level) => total + tableScore(config.spouseLanguage, level),
          0
        )
      ) +
      tableScore(config.canadianExperience.spouse, Math.min(profile.spouseCanadianExperience, 5))
    : 0;

  const clb7 = allAtLeast(profile.firstLanguage, 7);
  const clb9 = allAtLeast(profile.firstLanguage, 9);
  const educationLanguage = educationRow.transferTier === 0 || !clb7
    ? 0
    : educationRow.transferTier === 1
      ? (clb9 ? 25 : 13)
      : (clb9 ? 50 : 25);
  const educationCanada = educationRow.transferTier === 0 || profile.canadianExperience === 0
    ? 0
    : educationRow.transferTier === 1
      ? (profile.canadianExperience >= 2 ? 25 : 13)
      : (profile.canadianExperience >= 2 ? 50 : 25);
  const educationTransfer = Math.min(50, educationLanguage + educationCanada);

  const foreignLanguage = profile.foreignExperience === 0 || !clb7
    ? 0
    : profile.foreignExperience >= 3
      ? (clb9 ? 50 : 25)
      : (clb9 ? 25 : 13);
  const foreignCanada = profile.foreignExperience === 0 || profile.canadianExperience === 0
    ? 0
    : profile.foreignExperience >= 3
      ? (profile.canadianExperience >= 2 ? 50 : 25)
      : (profile.canadianExperience >= 2 ? 25 : 13);
  const foreignWorkTransfer = Math.min(50, foreignLanguage + foreignCanada);
  const tradeCertificate = !profile.certificateOfQualification || !allAtLeast(profile.firstLanguage, 5)
    ? 0
    : allAtLeast(profile.firstLanguage, 7) ? 50 : 25;
  const transferability = Math.min(100, educationTransfer + foreignWorkTransfer + tradeCertificate);

  const english = profile.primaryLanguage === "english" ? profile.firstLanguage : profile.secondLanguage;
  const frenchScores = profile.primaryLanguage === "french" ? profile.firstLanguage : profile.secondLanguage;
  const french = allAtLeast(frenchScores, 7)
    ? allAtLeast(english, 5)
      ? config.additional.frenchStrongEnglish
      : allAtMost(english, 4)
        ? config.additional.frenchBasic
        : 0
    : 0;
  const canadianEducation = profile.canadianEducation === "long"
    ? config.additional.canadianEducationLong
    : profile.canadianEducation === "short"
      ? config.additional.canadianEducationShort
      : 0;
  const sibling = profile.siblingInCanada ? config.additional.sibling : 0;
  const nomination = profile.provincialNomination ? config.additional.provincialNomination : 0;
  const additional = Math.min(config.additional.maximum, french + canadianEducation + sibling + nomination);
  const total = Math.min(config.maxScore, core + spouse + transferability + additional);

  const priorities: string[] = [];
  if (!clb9) priorities.push("Target CLB 9 in every first-language ability to unlock stronger core and transferability points.");
  if (!profile.provincialNomination) priorities.push("Check province-specific nomination streams aligned with your NOC; a nomination can add 600 CRS points.");
  if (profile.canadianExperience === 0) priorities.push("Assess lawful routes to Canadian skilled experience, which can improve both core and transferability scores.");
  if (!allAtLeast(frenchScores, 7)) priorities.push("French at NCLC 7 in all four abilities can add up to 50 additional points.");
  if (profile.education !== "masters" && profile.education !== "doctorate" && profile.education !== "twoOrMore") priorities.push("Verify whether another credential or a higher ECA-recognised qualification could increase education points.");
  if (priorities.length === 0) priorities.push("Your entered factors already reach the CRS ceiling; verify every claim and document in the official IRCC system.");

  return {
    total,
    core,
    spouse,
    transferability,
    additional,
    breakdown: {
      age,
      education,
      firstLanguage,
      secondLanguage,
      canadianExperience,
      educationTransfer,
      foreignWorkTransfer,
      tradeCertificate,
      french,
      canadianEducation,
      sibling,
      nomination
    },
    priorities: priorities.slice(0, 4)
  };
}

export const crsConfig = config;
