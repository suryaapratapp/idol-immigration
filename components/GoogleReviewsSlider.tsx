import { TestimonialCard } from "@/components/TestimonialCard";
import type { GoogleReview } from "@/data/testimonials";

type GoogleReviewsSliderProps = {
  reviews: GoogleReview[];
};

export function GoogleReviewsSlider({ reviews }: GoogleReviewsSliderProps) {
  const sliderReviews = [...reviews, ...reviews];

  return (
    <div className="overflow-hidden py-2" aria-label="Google reviews carousel">
      <div className="review-marquee flex w-max gap-5">
        {sliderReviews.map((testimonial, index) => (
          <div className="w-[300px] shrink-0 sm:w-[360px]" key={`${testimonial.name}-${index}`}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}
