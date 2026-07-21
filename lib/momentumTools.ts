import { site } from "@/data/site";

export type MomentumTool =
  | "intake-deadline-planner"
  | "occupation-in-demand"
  | "compare-countries"
  | "crs-score-calculator"
  | "express-entry-tracker";

export type ToolLeadPayload = {
  tool: MomentumTool;
  inputs: Record<string, unknown>;
  result: Record<string, unknown>;
  email?: string;
  whatsappClicked?: boolean;
};

export function buildWhatsAppUrl(summary: string) {
  return `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(summary)}`;
}

export function formatDataDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00Z`));
}

export async function createToolLead(payload: ToolLeadPayload) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const body = (await response.json().catch(() => ({}))) as {
    id?: string;
    error?: string;
  };
  if (!response.ok) throw new Error(body.error || "We could not save this lead right now.");
  return body.id;
}

export async function markToolLeadWhatsAppClicked(id: string) {
  const response = await fetch("/api/leads", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, whatsappClicked: true })
  });
  if (!response.ok) throw new Error("Could not update the lead.");
}
