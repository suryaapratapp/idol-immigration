import { ShieldCheck } from "lucide-react";

type TrustBarProps = {
  items: string[];
  dark?: boolean;
};

export function TrustBar({ items, dark = true }: TrustBarProps) {
  return (
    <div
      className={[
        "flex flex-wrap items-center gap-3 rounded-full border px-4 py-3 text-sm",
        dark
          ? "border-white/10 bg-white/10 text-white/80 backdrop-blur"
          : "border-slate-200 bg-white text-slate-700 shadow-sm"
      ].join(" ")}
    >
      <ShieldCheck className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
      {items.map((item, index) => (
        <span className="inline-flex items-center gap-3" key={item}>
          <span>{item}</span>
          {index < items.length - 1 ? (
            <span className={dark ? "text-white/30" : "text-slate-300"}>•</span>
          ) : null}
        </span>
      ))}
    </div>
  );
}
