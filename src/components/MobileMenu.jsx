import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ isMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-white duration-300 ${
        isMenuOpen ? "h-screen md:h-0 md:overflow-clip" : "h-0 overflow-clip"
      }`}
    >
      <AnimatePresence>
        {/* Menu Item List */}
        {isMenuOpen && (
          <motion.ul
            className="flex flex-col justify-center h-full text-xl uppercase items-center gap-8 font-medium duration-200 text-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <a href="#">Gallery</a>
            </motion.li>
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <a href="#">Services</a>
            </motion.li>
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <div className="flex items-center gap-1 duration-200 text-dark">
                <IoCallOutline className="text-xl" />
                <span className="font-medium">415-555-4321</span>
              </div>
            </motion.li>
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <button className="uppercase bg-darkBlue hover:bg-dark duration-300 px-3 py-2.5 rounded-md text-white font-bold">
                Contact Us
              </button>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
