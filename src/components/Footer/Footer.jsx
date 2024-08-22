import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-5 sm:mt-10 sm:py-10 sm:px-[100px] flex flex-col sm:flex-row gap-10 items-center justify-between bg-[#412675]">
      <div className="left text-white flex items-start flex-col">
        <p>socialsanta2@gmail.com</p>
        <p>+91 9137559755</p>
      </div>
      <div className="right flex gap-5 text-[25px] text-gray-300">
       <a href="https://www.instagram.com/agencysocialsanta/" target="_blank">  <FaInstagram className="cursor-pointer hover:scale-110 hover:text-gray-100 duration-200" /></a>
      <a href="https://www.linkedin.com/company/social-santa-syc/posts/?feedView=all" target="_blank">  <FaLinkedinIn className="cursor-pointer hover:scale-110 hover:text-gray-100 duration-200" /></a>
      <a href="https://www.pinterest.com/agencysocialsanta/" target="_blank">  <FaPinterest className="cursor-pointer hover:scale-110 hover:text-gray-100 duration-200" /></a>
       <a href=""> <AiOutlineYoutube className="cursor-pointer hover:scale-110 hover:text-gray-100 duration-200" /></a>
       <a href=""> <FaFacebook className="cursor-pointer hover:scale-110 hover:text-gray-100 duration-200" /></a>
      </div>
    </footer>
  );
};

export default Footer;
