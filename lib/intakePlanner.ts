export type PlannerPurpose = "study" | "work" | "pr";
export type EnglishStatus = "not-taken" | "booked" | "done";

export type IntakePlannerConfig = {
  version: string;
  lastUpdated: string;
  intakes: { id: string; label: string; date: string }[];
  countries: string[];
  purposes: { id: PlannerPurpose; label: string }[];
  englishStatuses: { id: EnglishStatus; label: string }[];
  milestones: {
    id: string;
    labels: Record<PlannerPurpose, string>;
    weeksBefore: Record<PlannerPurpose, number>;
  }[];
  countryAdjustments: Record<string, Record<string, number>>;
  officialSources: { country: string; url: string }[];
};

export type IntakePlannerInputs = {
  intakeId: string;
  country: string;
  purpose: PlannerPurpose;
  englishStatus: EnglishStatus;
};

export type PlannerMilestone = {
  id: string;
  label: string;
  targetDate: string;
  daysAway: number;
  urgency: "complete" | "on-track" | "act-soon" | "overdue";
};

export type IntakePlan = {
  intakeLabel: string;
  intakeDate: string;
  country: string;
  purpose: PlannerPurpose;
  milestones: PlannerMilestone[];
  headline: string;
  summary: string;
  urgentCount: number;
};

const day = 24 * 60 * 60 * 1000;

function toIsoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function formatPlannerDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00Z`));
}

export function buildIntakePlan(
  config: IntakePlannerConfig,
  inputs: IntakePlannerInputs,
  now = new Date()
): IntakePlan {
  const intake = config.intakes.find((item) => item.id === inputs.intakeId) ?? config.intakes[0];
  const intakeDate = new Date(`${intake.date}T00:00:00Z`);
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const adjustments = config.countryAdjustments[inputs.country] ?? {};

  const milestones = config.milestones.map((milestone) => {
    const weeksBefore = milestone.weeksBefore[inputs.purpose] + (adjustments[milestone.id] ?? 0);
    const target = new Date(intakeDate.getTime() - weeksBefore * 7 * day);
    const daysAway = Math.ceil((target.getTime() - today.getTime()) / day);
    const isEnglishComplete = milestone.id === "english-test" && inputs.englishStatus === "done";
    const urgency = isEnglishComplete
      ? "complete"
      : daysAway < 0
        ? "overdue"
        : daysAway <= 28
          ? "act-soon"
          : "on-track";

    let label = milestone.labels[inputs.purpose];
    if (milestone.id === "english-test" && inputs.englishStatus === "booked") {
      label = "Sit your booked English test and secure results";
    }
    if (isEnglishComplete) label = "English test completed";

    return {
      id: milestone.id,
      label,
      targetDate: toIsoDate(target),
      daysAway,
      urgency
    } satisfies PlannerMilestone;
  });

  const firstIncomplete = milestones.find((milestone) => milestone.urgency !== "complete");
  const urgentCount = milestones.filter(
    (milestone) => milestone.urgency === "overdue" || milestone.urgency === "act-soon"
  ).length;
  const headline = !firstIncomplete
    ? "Your core preparation milestones are complete."
    : firstIncomplete.daysAway < 0
      ? "Your first hard deadline has passed. Act now."
      : `You have ${Math.max(1, Math.ceil(firstIncomplete.daysAway / 7))} weeks before your first hard deadline.`;
  const summary = urgentCount
    ? `${urgentCount} milestone${urgentCount === 1 ? " needs" : "s need"} immediate attention for the ${intake.label} ${inputs.country} plan.`
    : `Your ${intake.label} ${inputs.country} plan is currently on track, with clear dates for every major step.`;

  return {
    intakeLabel: intake.label,
    intakeDate: intake.date,
    country: inputs.country,
    purpose: inputs.purpose,
    milestones,
    headline,
    summary,
    urgentCount
  };
}
