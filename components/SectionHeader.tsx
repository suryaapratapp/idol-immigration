type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  dark = false
}: SectionHeaderProps) {
  return (
    <div
      className={[
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "",
        align === "left" ? "mx-0" : ""
      ].join(" ")}
    >
      {eyebrow ? (
        <p
          className={[
            "mb-3 text-xs font-semibold uppercase tracking-[0.24em]",
            dark ? "text-cyan" : "text-ocean"
          ].join(" ")}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={[
          "text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-ink"
        ].join(" ")}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={[
            "mt-5 text-base leading-8 sm:text-lg",
            dark ? "text-white/70" : "text-slate-600"
          ].join(" ")}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
