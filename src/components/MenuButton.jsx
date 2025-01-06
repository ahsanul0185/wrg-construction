import React from "react";
import { MotionConfig, motion } from "framer-motion";

export const MenuButton = ({ isMenuOpen, setIsMenuOpen, isScrolled }) => {
  return (
    <div className="grid md:hidden place-content-center">
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          onClick={() => setIsMenuOpen((pv) => !pv)}
          className={`relative h-20 w-20 scale-90 rounded-full bg-white/0 transition-colors  z-[999] ${
            isMenuOpen || isScrolled ? "hover:bg-dar/20" : "hover:bg-whit/20"
          }`}
        >
          <motion.span
            variants={VARIANTS.top}
            className={`absolute h-1 w-9 ${
              isMenuOpen || isScrolled ? "bg-dark" : "bg-white"
            }`}
            style={{ y: "-50%", left: "50%", x: "-50%", top: "42%" }}
          />
          <motion.span
            variants={VARIANTS.bottom}
            className={`absolute h-1 w-9 ${
              isMenuOpen || isScrolled ? "bg-dark" : "bg-white"
            }`}
            style={{
              x: "-50%",
              y: "50%",
              bottom: "42%",
              left: "-50%",
            }}
          />
        </motion.button>
      </MotionConfig>
    </div>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["42%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "42%"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
      bottom: ["42%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "42%"],
      left: "50%",
    },
  },
};
