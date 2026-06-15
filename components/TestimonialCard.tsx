import { Quote } from "lucide-react";

type TestimonialCardProps = {
  testimonial: {
    name: string;
    profession: string;
    destination: string;
    result: string;
    category: string;
    quote: string;
  };
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ocean">
            {testimonial.category}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-ink">{testimonial.name}</h3>
          <p className="mt-1 text-sm text-slate-500">
            {testimonial.profession} • {testimonial.destination}
          </p>
        </div>
        <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-600">{testimonial.quote}</p>
      <p className="mt-auto pt-5 text-sm font-semibold text-ocean">
        Result: {testimonial.result}
      </p>
    </article>
  );
}
