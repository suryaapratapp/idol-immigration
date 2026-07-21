export type ToolEventName =
  | "tool_start"
  | "tool_complete"
  | "whatsapp_click"
  | "pdf_download";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackToolEvent(
  event: ToolEventName,
  tool: string,
  details: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === "undefined") return;

  const payload = { tool_name: tool, ...details };
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  } else {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...payload });
  }
}
