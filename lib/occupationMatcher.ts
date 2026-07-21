export type DemandStatus = "in-demand" | "eligible" | "not-listed";

export type CountryOccupationResult = {
  status: DemandStatus;
  classification: string;
  list: string;
  routes: string[];
  note: string;
};

export type Occupation = {
  id: string;
  title: string;
  sector: string;
  synonyms: string[];
  countries: Record<string, CountryOccupationResult>;
};

export type OccupationsData = {
  version: string;
  lastUpdated: string;
  sources: Record<string, string>;
  occupations: Occupation[];
};

export type OccupationMatch = {
  occupation: Occupation;
  confidence: number;
  topCountries: string[];
  experienceNote: string;
};

function normalise(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function bigrams(value: string) {
  const compact = normalise(value).replace(/\s/g, "");
  return Array.from({ length: Math.max(0, compact.length - 1) }, (_, index) => compact.slice(index, index + 2));
}

function similarity(left: string, right: string) {
  const a = normalise(left);
  const b = normalise(right);
  if (!a || !b) return 0;
  if (a === b) return 1;
  if (a.includes(b) || b.includes(a)) return 0.9 * (Math.min(a.length, b.length) / Math.max(a.length, b.length)) + 0.1;

  const aTokens = new Set(a.split(" "));
  const bTokens = new Set(b.split(" "));
  const tokenMatches = [...aTokens].filter((token) => bTokens.has(token)).length;
  const tokenScore = tokenMatches / Math.max(aTokens.size, bTokens.size);
  const aBigrams = bigrams(a);
  const bBigrams = bigrams(b);
  const remaining = [...bBigrams];
  let overlap = 0;
  aBigrams.forEach((pair) => {
    const index = remaining.indexOf(pair);
    if (index >= 0) {
      overlap += 1;
      remaining.splice(index, 1);
    }
  });
  const dice = aBigrams.length + bBigrams.length ? (2 * overlap) / (aBigrams.length + bBigrams.length) : 0;
  return tokenScore * 0.65 + dice * 0.35;
}

export function matchOccupation(
  data: OccupationsData,
  query: string,
  yearsExperience?: number
): OccupationMatch | null {
  const ranked = data.occupations
    .map((occupation) => ({
      occupation,
      score: Math.max(...[occupation.title, ...occupation.synonyms].map((candidate) => similarity(query, candidate)))
    }))
    .sort((a, b) => b.score - a.score);
  const best = ranked[0];
  if (!best || best.score < 0.25) return null;

  const statusWeight: Record<DemandStatus, number> = { "in-demand": 3, eligible: 2, "not-listed": 0 };
  const topCountries = Object.entries(best.occupation.countries)
    .sort(([, left], [, right]) => statusWeight[right.status] - statusWeight[left.status])
    .filter(([, result]) => result.status !== "not-listed")
    .slice(0, 3)
    .map(([country]) => country);
  const experienceNote = yearsExperience == null
    ? "Add experience for a sharper route discussion."
    : yearsExperience < 1
      ? "Several skilled routes and Canada category selection need at least one year of qualifying experience."
      : yearsExperience < 3
        ? "Your experience clears a common one-year threshold, but stronger evidence can improve competitiveness."
        : "Your experience range can support skilled-route assessment, subject to duties, points and licensing.";

  return {
    occupation: best.occupation,
    confidence: Math.round(best.score * 100),
    topCountries,
    experienceNote
  };
}
