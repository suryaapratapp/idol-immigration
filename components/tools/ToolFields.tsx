import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";

const inputClass =
  "h-12 w-full rounded-[6px] border-slate-300 bg-white px-4 text-sm font-medium text-ink placeholder:text-slate-400 focus:border-gold focus:ring-gold";

export function ToolSelect({
  label,
  hint,
  children,
  className = "",
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  hint?: string;
}) {
  return (
    <label className={["grid gap-2", className].join(" ")}>
      <span className="text-sm font-bold text-ink">{label}</span>
      <select className={inputClass} {...props}>
        {children}
      </select>
      {hint ? <span className="text-xs leading-5 text-slate-500">{hint}</span> : null}
    </label>
  );
}

export function ToolInput({
  label,
  hint,
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
}) {
  return (
    <label className={["grid gap-2", className].join(" ")}>
      <span className="text-sm font-bold text-ink">{label}</span>
      <input className={inputClass} {...props} />
      {hint ? <span className="text-xs leading-5 text-slate-500">{hint}</span> : null}
    </label>
  );
}
