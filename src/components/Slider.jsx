import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ReviewCard from "./ReviewCard";

const Slider = ({ reviews }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full xl:w-[75%] mx-auto">
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        mousewheel={true}
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        onSlideChange={(slides) => setActiveIndex(slides.realIndex)}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          740: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        style={{ padding: 20, paddingLeft: 10 }}
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <ReviewCard
              key={review.id}
              profile_url={review.profile_photo}
              name={review.name}
              location={review.location}
              text={review.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation dots */}
      <div className="flex justify-center items-center py-8">
        <div className="flex gap-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              className={`size-2.5 rounded-full ${
                idx === activeIndex
                  ? "bg-gray-700 border border-slate-700"
                  : "border border-slate-400"
              }`}
              onClick={() => {
                setActiveIndex(idx);
                swiperRef.current.swiper.slideToLoop(idx);
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
