import { ExternalLink } from "lucide-react";

type OfficialSourceNoticeProps = {
  text?: string;
};

export function OfficialSourceNotice({ text }: OfficialSourceNoticeProps) {
  return (
    <aside className="rounded-[8px] border border-cyan/30 bg-cyan/10 p-5 text-sm leading-7 text-slate-700">
      <div className="flex items-start gap-3">
        <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-ocean" aria-hidden="true" />
        <div>
          <p className="font-semibold text-ink">Official-source notice</p>
          <p className="mt-1">
            {text ??
              "Visa rules change frequently. Verify final requirements with official government sources before publishing or submitting an application."}
          </p>
        </div>
      </div>
    </aside>
  );
}
