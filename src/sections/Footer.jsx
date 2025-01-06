import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import footer_logo from "../assets/logo_footer.svg";

const Footer = () => {
  return (
    <div className="bg-dark py-12 px-5 md:px-10 flex flex-col md:flex-row gap-5 justify-between items-center">
      {/* Social media icons */}
      <div className="flex items-center gap-6 text-3xl font-bold text-lightGray">
        <a href="#">
          <LuFacebook />
        </a>
        <a href="#">
          <IoLogoInstagram />
        </a>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img className="w-16" src={footer_logo} alt="WRG CONSTRUCTION" />
        <p className="text-[#e6e6e6] font-bold text-sm">WRG CONSTRUCTION</p>
      </div>

      {/* Designed by */}
      <p className="text-[#e6e6e6] text-[0.7rem]">
        Designed by{" "}
        <a
          href="https://paavanpatel.com/"
          className="text-blue-400 hover:underline"
        >
          paavanpatel.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
