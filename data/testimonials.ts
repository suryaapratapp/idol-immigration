export type GoogleReview = {
  name: string;
  rating: 5;
  reviewText: string;
  date: string;
  source: "Google Review";
  reviewUrl: string;
};

export const googleReviews: GoogleReview[] = [
  {
    name: "abhishek rajput",
    rating: 5,
    date: "3 years ago",
    source: "Google Review",
    reviewUrl:
      "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s114686158394808361415!2s0x390d199347d59fd5:0x1532079894e52495",
    reviewText: "Idol Immigration is very professional towards their work."
  },
  {
    name: "Pooja Bhardwaj",
    rating: 5,
    date: "4 years ago",
    source: "Google Review",
    reviewUrl:
      "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s111895123517445488637!2s0x390d199347d59fd5:0x1532079894e52495",
    reviewText: "It has been a fabulous experience to connect with Idol Immigration."
  },
  {
    name: "Sachin thakur",
    rating: 5,
    date: "4 years ago",
    source: "Google Review",
    reviewUrl:
      "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s101382230756120307221!2s0x390d199347d59fd5:0x1532079894e52495",
    reviewText: "Very responsible and experienced people"
  }
];

export type VideoTestimonial = {
  title: string;
  youtubeUrl: string;
  clientName: string;
  destinationCountry: string;
  serviceType: string;
  caption: string;
  thumbnailImage: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    title: "Client Thank-You Video",
    youtubeUrl: "",
    clientName: "Client name to be added",
    destinationCountry: "United Kingdom",
    serviceType: "Study Visa",
    caption: "Add the client's YouTube thank-you video link here.",
    thumbnailImage: "/images/countries/uk.svg"
  },
  {
    title: "Family Visa Success Video",
    youtubeUrl: "",
    clientName: "Client name to be added",
    destinationCountry: "Canada",
    serviceType: "Dependent Visa",
    caption: "Replace this placeholder with a real client YouTube URL.",
    thumbnailImage: "/images/countries/canada.svg"
  },
  {
    title: "PR Journey Video",
    youtubeUrl: "",
    clientName: "Client name to be added",
    destinationCountry: "Australia",
    serviceType: "PR / Skilled Migration",
    caption: "This card is ready for an embedded YouTube testimonial.",
    thumbnailImage: "/images/countries/australia.svg"
  }
];

export const testimonials = googleReviews;
