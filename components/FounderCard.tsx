import { Linkedin } from "lucide-react";

type FounderCardProps = {
  founder: {
    name: string;
    role: string;
    focus: string;
    linkedIn: string;
    initials: string;
    copy: string;
    detail: string;
  };
};

export function FounderCard({ founder }: FounderCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-cyan/10" />
      <div className="relative flex items-start gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[8px] bg-gradient-to-br from-ink to-ocean text-lg font-semibold text-cyan shadow-glow">
          {founder.initials}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-ink">{founder.name}</h3>
          <p className="mt-1 text-sm font-semibold text-ocean">{founder.role}</p>
          <p className="mt-1 text-sm text-slate-500">{founder.focus}</p>
        </div>
      </div>
      <p className="mt-6 text-sm leading-7 text-slate-600">{founder.copy}</p>
      <p className="mt-4 text-sm leading-7 text-slate-600">{founder.detail}</p>
      <a
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#0A66C2] transition hover:border-[#0A66C2] hover:bg-[#0A66C2]/10"
        href={founder.linkedIn}
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin className="h-4 w-4" aria-hidden="true" />
        LinkedIn
      </a>
    </article>
  );
}
