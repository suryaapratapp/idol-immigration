import { Quote, Star } from "lucide-react";
import type { GoogleReview } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: GoogleReview;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[8px] border border-stone-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-cyan to-ocean opacity-80" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {testimonial.source}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-ink">{testimonial.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{testimonial.date}</p>
          <p className="mt-3 flex gap-1 text-gold" aria-label={`${testimonial.rating} star Google review`}>
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <Star className="h-4 w-4 fill-current" key={index} aria-hidden="true" />
            ))}
          </p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-stone-200 bg-ivory text-gold">
          <Quote className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-600">&ldquo;{testimonial.reviewText}&rdquo;</p>
      <a
        className="mt-auto pt-5 text-sm font-semibold text-ocean transition hover:text-ink"
        href={testimonial.reviewUrl}
        target="_blank"
        rel="noreferrer"
      >
        View on Google
      </a>
    </article>
  );
}
