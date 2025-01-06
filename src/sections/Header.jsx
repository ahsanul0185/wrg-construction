import React, { useState } from "react";
import logo from "../assets/logo.svg";
import logo_dark from "../assets/logo_dark.svg";
import { IoCallOutline } from "react-icons/io5";
import usePageScroll from "../helpers/usePageScroll";
import { MenuButton } from "../components/MenuButton";
import MobileMenu from "../components/MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = usePageScroll();

  return (
    <div
      className={`fixed w-full top-0 left-0 flex justify-between items-center  border-b z-50  duration-300 ${
        isScrolled
          ? "bg-white px-3 md:px-6 md:py-4 border-b-gray-300"
          : "bg-transparent px-5 md:px-8 md:py-6 border-b-transparent"
      }`}
    >
      {/* Left side */}
      <div className="flex items-center gap-5">
        <img
          className="w-14"
          src={isScrolled || isMenuOpen ? logo_dark : logo}
          alt="WRG Construction"
        />

        <ul
          className={`hidden md:flex text-[1.1rem] uppercase items-center gap-5 font-medium duration-200 ${
            isScrolled ? "text-dark" : "text-white"
          }`}
        >
          <li className="group">
            <a href="#">Gallery</a>
            <span
              className={`w-0 group-hover:w-full duration-300 h-0.5 ${
                isMenuOpen || isScrolled ? "bg-dark" : "bg-white"
              } block`}
            ></span>
          </li>
          <li className="group">
            <a href="#">Services</a>
            <span
              className={`w-0 group-hover:w-full duration-300 h-0.5 ${
                isMenuOpen || isScrolled ? "bg-dark" : "bg-white"
              } block`}
            ></span>
          </li>
        </ul>
      </div>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-8">
        <div
          className={`flex items-center gap-1 duration-200 ${
            isScrolled ? "text-dark" : "text-white"
          }`}
        >
          <IoCallOutline className="text-xl" />
          <span className="font-medium">415-555-4321</span>
        </div>

        <button className="uppercase bg-darkBlue hover:bg-dark duration-300 px-3 py-2.5 rounded-md text-white font-bold">
          Contact Us
        </button>
      </div>

      {/* Hamburger Button */}
      <MenuButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
      />

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Header;
