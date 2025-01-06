import React from "react";
import { motion } from "framer-motion";
import heroImage from "/images/hero_img.jpg";
import usePageScroll from "../helpers/usePageScroll";

const Hero = () => {
  const isScrolled = usePageScroll();

  return (
    <div className="relative bg-gradient-to-b from-[#536779] to-[#b1c0cc] px-5 md:px-8 pt-32 pb-20 overflow-hidden">
      {/* Title */}
      <div>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.8, 1] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-8 md:mt-0 font-bold text-white text-center leading-[1.2]">
            TRANSFORMING HOUSES, <br />
            CREATING HOMES.
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl font-thin text-center my-6 md:my-12 text-white">
            Proudly serving Marin and surrounding areas since 2011.
          </p>
        </motion.div>
      </div>

      {/* Hero Image */}
      <div
        className={`w-11/12 mx-auto rounded-3xl overflow-hidden`}
        style={{
          transform: isScrolled ? "scale(2)" : "scale(1)",
          opacity: isScrolled ? 0 : 1,
          visibility: isScrolled ? "hidden" : "visible",
          transition: "1s",
        }}
      >
        <img className="w-full h-full" src={heroImage} alt="kitchen image" />
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className="bg-darkBlue hover:bg-dark px-7 py-3 rounded-md text-base md:text-xl uppercase font-semibold text-white duration-300">
          BOOK A FREE CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default Hero;
