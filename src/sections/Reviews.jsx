import React from "react";
import ReviewCard from "../components/ReviewCard";
import Slider from "../components/Slider";

// dummy reviews
const reviews = [
  {
    id: 1,
    profile_photo: "/images/reviewer.avif",
    name: "Robin S",
    location: "San Anselmo",
    text: "The quality of their work is incredible. They did everything I wanted in my kitchen. I highly recommend them and the value of their work.",
  },
  {
    id: 2,
    profile_photo: "/images/reviewer.avif",
    name: "Lisa",
    location: "Newport Beach",
    text: "The subfloor of my shower landing in my SF home had rotted out.",
  },
  {
    id: 3,
    profile_photo: "/images/reviewer.avif",
    name: "Tracey T",
    location: "San Rafael",
    text: "WRG construction came to our house after a major flood for restoration services. William Rodas (contractor) and his crew made me feel at ease that they could tackle any situation…",
  },
  {
    id: 4,
    profile_photo: "/images/reviewer.avif",
    name: "John T",
    location: "San Rafael",
    text: "WRG construction came to our house after a major flood for restoration services. William Rodas (contractor) and his crew made me feel at ease that they could tackle any situation…",
  },
];

const Reviews = () => {
  return (
    <div className="py-10 md:py-20 px-5">
      <h2 className="text-3xl md:text-5xl font-bold text-center">Reviews</h2>

      <p className="max-w-xl my-5 md:my-10 mx-auto md:text-2xl text-[#888888] font-semibold text-center">
        “The quality of their work is incredible. They did all the things I
        wanted in my kitchen.”
      </p>

      {/* Reviews */}
      <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center items-center gap-5">
        {reviews.length <= 3 ? (
          reviews.map((review, idx) => (
            <ReviewCard
              key={review.id}
              profile_url={review.profile_photo}
              name={review.name}
              location={review.location}
              text={review.text}
            />
          ))
        ) : (
          <Slider reviews={reviews} />
        )}
      </div>
    </div>
  );
};

export default Reviews;
