export function ScoreBadge({ label, score }: { label: string; score: number }) {
  return (
    <span className="inline-flex min-w-24 flex-col items-end rounded-[6px] bg-ink px-3 py-2 text-white shadow-sm">
      <span className="text-xl font-extrabold leading-none">{score}%</span>
      <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/65">
        {label}
      </span>
    </span>
  );
}
