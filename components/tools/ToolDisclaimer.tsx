import { CircleAlert } from "lucide-react";

export function ToolDisclaimer() {
  return (
    <p className="flex gap-2 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
      <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
      Outputs are indicative planning guidance, not legal advice or an eligibility decision.
      Criteria and outcomes depend on current official government rules and individual evidence.
    </p>
  );
}
