export type ComparisonPurpose = "study" | "work" | "pr";
export type ComparisonDimension = "cost" | "settlement" | "jobs" | "ease" | "postStudy";

export type CountryProfile = {
  id: string;
  name: string;
  flag: string;
  officialSource: string;
  cost: { label: string; budgetScores: Record<string, number>; note: string };
  settlement: { label: string; scores: Record<ComparisonPurpose, number>; note: string };
  jobs: Record<string, number>;
  jobNote: string;
  easeBase: number;
  purposeFit: Record<ComparisonPurpose, number>;
  familyFit: number;
  postStudy: { score: number; label: string; note: string };
};

export type CountryProfilesData = {
  version: string;
  lastUpdated: string;
  budgetBands: { id: string; label: string }[];
  fields: string[];
  weights: Record<ComparisonPurpose, Record<ComparisonDimension, number>>;
  profiles: CountryProfile[];
};

export type ComparisonInputs = {
  countryA: string;
  countryB: string;
  purpose: ComparisonPurpose;
  budget: string;
  english: "starting" | "preparing" | "test-ready" | "strong";
  experience: number;
  familySize: number;
  field: string;
};

export type DimensionScore = {
  id: ComparisonDimension;
  label: string;
  score: number;
  headline: string;
  reason: string;
};

export type CountryScore = {
  country: CountryProfile;
  total: number;
  dimensions: DimensionScore[];
};

export type CountryComparison = {
  left: CountryScore;
  right: CountryScore;
  winner: CountryScore;
  runnerUp: CountryScore;
  verdict: string;
};

const englishDelta = { starting: -12, preparing: -5, "test-ready": 2, strong: 7 };
const dimensionLabels: Record<ComparisonDimension, string> = {
  cost: "Total cost fit",
  settlement: "PR / settlement",
  jobs: "Job market",
  ease: "Profile likelihood",
  postStudy: "Post-study rights"
};

function clamp(value: number) {
  return Math.max(25, Math.min(96, Math.round(value)));
}

function scoreCountry(
  profile: CountryProfile,
  inputs: ComparisonInputs,
  weights: Record<ComparisonDimension, number>
): CountryScore {
  const experienceDelta = inputs.experience < 1 ? -12 : inputs.experience < 3 ? -4 : inputs.experience < 6 ? 4 : 7;
  const familyDelta = inputs.familySize >= 4 ? profile.familyFit - 5 : inputs.familySize >= 2 ? profile.familyFit : 1;
  const ease = clamp(
    profile.easeBase * 0.55 +
    profile.purposeFit[inputs.purpose] * 0.45 +
    englishDelta[inputs.english] +
    experienceDelta +
    familyDelta
  );
  const values: Record<ComparisonDimension, Omit<DimensionScore, "id" | "label">> = {
    cost: {
      score: profile.cost.budgetScores[inputs.budget] ?? 50,
      headline: profile.cost.label,
      reason: profile.cost.note
    },
    settlement: {
      score: profile.settlement.scores[inputs.purpose],
      headline: profile.settlement.label,
      reason: profile.settlement.note
    },
    jobs: {
      score: profile.jobs[inputs.field] ?? 65,
      headline: `${inputs.field} opportunity signal`,
      reason: profile.jobNote
    },
    ease: {
      score: ease,
      headline: `${inputs.purpose.toUpperCase()} fit for your current inputs`,
      reason: `English readiness, ${inputs.experience} years of experience and family size ${inputs.familySize} shape this score.`
    },
    postStudy: {
      score: profile.postStudy.score,
      headline: profile.postStudy.label,
      reason: profile.postStudy.note
    }
  };
  const dimensions = (Object.keys(values) as ComparisonDimension[]).map((id) => ({
    id,
    label: dimensionLabels[id],
    ...values[id]
  }));
  const total = Math.round(
    dimensions.reduce((sum, dimension) => sum + dimension.score * (weights[dimension.id] / 100), 0)
  );
  return { country: profile, total, dimensions };
}

export function compareCountries(
  data: CountryProfilesData,
  inputs: ComparisonInputs
): CountryComparison {
  const leftProfile = data.profiles.find((profile) => profile.id === inputs.countryA) ?? data.profiles[0];
  const rightProfile = data.profiles.find((profile) => profile.id === inputs.countryB) ?? data.profiles[1];
  const weights = data.weights[inputs.purpose];
  const left = scoreCountry(leftProfile, inputs, weights);
  const right = scoreCountry(rightProfile, inputs, weights);
  const winner = left.total >= right.total ? left : right;
  const runnerUp = winner === left ? right : left;
  const strongestDimension = winner.dimensions
    .map((dimension) => ({
      ...dimension,
      margin: dimension.score - (runnerUp.dimensions.find((item) => item.id === dimension.id)?.score ?? 0)
    }))
    .sort((a, b) => b.margin - a.margin)[0];

  return {
    left,
    right,
    winner,
    runnerUp,
    verdict: `${winner.country.name} is the stronger current fit by ${winner.total - runnerUp.total} points, led by ${strongestDimension.label.toLowerCase()}.`
  };
}
