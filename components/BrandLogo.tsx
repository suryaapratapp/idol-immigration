"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type BrandLogoProps = {
  name: string;
  url: string;
};

function initials(name: string) {
  return name
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function faviconUrl(url: string) {
  try {
    const target = new URL(url);
    const domain =
      target.hostname === "share.octopus.energy"
        ? "octopus.energy"
        : target.hostname;
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;
  } catch {
    return null;
  }
}

export function BrandLogo({ name, url }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);
  const logoUrl = useMemo(() => faviconUrl(url), [url]);
  const fallback = initials(name);

  return (
    <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-[8px] border border-slate-200 bg-white text-sm font-bold text-ocean shadow-sm">
      <span aria-hidden={Boolean(logoUrl && !failed)}>{fallback}</span>
      {logoUrl && !failed ? (
        <Image
          alt={`${name} logo`}
          className="absolute inset-0 h-full w-full bg-white p-2 object-contain"
          height={48}
          loading="lazy"
          onError={() => setFailed(true)}
          referrerPolicy="no-referrer"
          sizes="48px"
          src={logoUrl}
          width={48}
        />
      ) : null}
    </span>
  );
}
