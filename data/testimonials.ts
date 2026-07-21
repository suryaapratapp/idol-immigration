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
    name: "Shivani Tomar",
    rating: 5,
    date: "3 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "IDOL Immigration helped with my parents' Australia tourist visa. Ms. Sakshi was always there to guide us."
  },
  {
    name: "Pooja Bhardwaj",
    rating: 5,
    date: "2 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "Exceptional support and guidance during my UK study permit application process for the September intake."
  },
  {
    name: "Kushagra Jayal",
    rating: 5,
    date: "2 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "Their professionalism and dedication were palpable while they guided us through the Canadian process."
  },
  {
    name: "Ayushi Sharma",
    rating: 5,
    date: "2 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "Choosing Idol Immigration for my UK study visa process was one of the best decisions of my life."
  },
  {
    name: "Naitik Sonkiya",
    rating: 5,
    date: "Edited 2 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "Experienced and knowledgeable team. I highly recommend Idol Immigration for immigration services."
  },
  {
    name: "manu dhillon",
    rating: 5,
    date: "Edited 2 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "Outstanding support in obtaining my brother's USA study visa permit with professionalism and genuine care."
  },
  {
    name: "abhishek rajput",
    rating: 5,
    date: "3 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "Very professional towards their work. The team was helpful at every stage of my UK study visa process."
  },
  {
    name: "Abhishek Bhoj",
    rating: 5,
    date: "3 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "Professional team with guidance at every stage for my Canada tourist visa after an earlier refusal."
  },
  {
    name: "madhvi vats",
    rating: 5,
    date: "3 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "The team is dedicated and easy to approach. I recommend Idol Immigration for study visa guidance."
  },
  {
    name: "Aryan Grover",
    rating: 5,
    date: "2 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "Jagdeep sir was available for every question and made my Canada student journey seamless."
  },
  {
    name: "tarun abbey",
    rating: 5,
    date: "3 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "The process team helped arrange documentation for my Canada tourist visa when I had no travel history."
  },
  {
    name: "Anirudh Sharma",
    rating: 5,
    date: "4 years ago",
    source: "Google Review",
    reviewUrl: "https://www.google.com/search?q=Idol+Immigration+Reviews",
    reviewText:
      "I got my UK study visa with Idol Immigration and highly recommend their team."
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
    title: "Canadian Study Visa Success Story",
    youtubeUrl: "https://youtube.com/shorts/va-NV2UXOsQ?si=FAFkSdPJW20yUbRe",
    clientName: "Shambhavi Gupta",
    destinationCountry: "Canada",
    serviceType: "Study Visa",
    caption: "Shambhavi Gupta shares her Canadian Study Visa experience with Idol Immigration.",
    thumbnailImage: "/images/countries/canada-photo.jpg"
  }
];

export const testimonials = googleReviews;
