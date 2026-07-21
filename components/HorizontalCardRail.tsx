"use client";

import { Children, type ReactNode, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HorizontalCardRail({
  children,
  label,
  itemClassName = "min-w-[84%] sm:min-w-[310px] lg:min-w-[320px]"
}: {
  children: ReactNode;
  label: string;
  itemClassName?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * Math.max(rail.clientWidth * 0.78, 280),
      behavior: "smooth"
    });
  }

  return (
    <div>
      <div className="mb-4 flex justify-end gap-2">
        <button
          aria-label={`Scroll ${label} left`}
          className="grid h-11 w-11 place-items-center rounded-[6px] border border-slate-300 bg-white text-ink transition hover:border-gold hover:bg-gold hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          onClick={() => move(-1)}
          title={`Previous ${label}`}
          type="button"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          aria-label={`Scroll ${label} right`}
          className="grid h-11 w-11 place-items-center rounded-[6px] border border-slate-300 bg-white text-ink transition hover:border-gold hover:bg-gold hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          onClick={() => move(1)}
          title={`Next ${label}`}
          type="button"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div
        aria-label={label}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={railRef}
        role="region"
        tabIndex={0}
      >
        {Children.map(children, (child, index) => (
          <div className={`snap-start ${itemClassName}`} key={index}>{child}</div>
        ))}
      </div>
    </div>
  );
}
