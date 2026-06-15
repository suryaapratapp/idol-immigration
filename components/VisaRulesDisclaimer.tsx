import { AlertTriangle } from "lucide-react";

export function VisaRulesDisclaimer() {
  return (
    <aside className="rounded-[8px] border border-gold/30 bg-gold/10 p-5 text-sm leading-7 text-slate-700">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
        <p>
          <strong className="text-ink">Visa rules disclaimer:</strong> Idol
          Immigration provides consultation and application support. Immigration
          rules, eligibility and outcomes depend on official government criteria
          and individual circumstances. We do not guarantee visa approval.
        </p>
      </div>
    </aside>
  );
}
