import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-cyan text-midnight shadow-glow hover:-translate-y-0.5 hover:bg-white",
  secondary:
    "border border-white/20 bg-white/10 text-white backdrop-blur hover:border-cyan/70 hover:bg-white/20",
  ghost:
    "border border-slate-200 bg-white text-ink hover:-translate-y-0.5 hover:border-cyan/60 hover:shadow-lg",
  dark: "bg-ink text-white hover:-translate-y-0.5 hover:bg-ocean"
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false
}: ButtonProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2",
    variants[variant],
    className
  ].join(" ");

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
