import drawData from "@/data/express-entry-draws.json";

export type DrawType = "general" | "cec" | "pnp" | "category";

export type ExpressEntryDraw = {
  round: number;
  date: string;
  category: string;
  type: DrawType;
  invitationsIssued: number;
  crsCutoff: number;
};

export type ExpressEntryDrawData = {
  version: string;
  lastUpdated: string;
  officialSource: string;
  officialDataFeed: string;
  draws: ExpressEntryDraw[];
};

// Keep components data-source agnostic: a cron-backed implementation can replace this import later.
export async function getDraws(): Promise<ExpressEntryDrawData> {
  return drawData as ExpressEntryDrawData;
}

export function formatDrawDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00Z`));
}
