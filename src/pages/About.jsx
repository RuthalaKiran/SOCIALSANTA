import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import "../PagesCss/About.css";

const About = () => {
  const services = [
    {
      id: 1,
      service: "social media marketing",
    },
    {
      id: 2,
      service: "Influencer marketing",
    },
    {
      id: 3,
      service: "websites",
    },
    {
      id: 4,
      service: "performance marketing",
    },
    {
      id: 5,
      service: "business marketing",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="grid grid-cols-3 pt-10">
        <div className="left pl-14 justify-between  flex flex-col items-center  gap-3">
          <div className="mt-10 flex flex-col gap-4 items-center">
            <p className="font-bold text-4xl text-[#412675]">Who we are?</p>
            <div className=" px-2">
              <p className="text-[#412675] ">
                At Social Santa, we add a touch of magic to your marketing!
                We’re all about influencer marketing, social media, business
                growth, performance improvement, and web development. Our team
                connects you with top influencers, creates great content, builds
                awesome websites, and provides solutions to help your business
                grow. We focus on getting the best results for every campaign.
                Join us at Social Santa and let’s make your brand stand out.
                Your success is our gift!
              </p>
            </div>
          </div>
          <div className=" mb-20 flex w-full ml-5 text-[#412675]">
            <Link className="bg-[#412675] text-white font-bold px-5 py-3">
              <button>Make a wish</button>
            </Link>
          </div>
        </div>

        <div className="h-[450px]  relative before:w-full before:shadow-[0px_10px_10px_rgba(255, 235, 245, 0.8)] before:h-[10px] before:z-10  before:bg-white before:absolute   overflow-hidden">
          <div className="middle relative flex justify-center  ">
            <div className="scroll-container h-auto flex flex-col gap-5">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="px-2 text-center flex justify-center items-center  cursor-pointer border border-[#412675] w-[150px] h-[100px] rounded-md "
                >
                  <p className="text-[#412675] ">{item.service}</p>
                </div>
              ))}
            </div>
          </div>

          <div aria-hidden="true" className="middle pt-8 flex justify-center ">
            <div className="scroll-container h-auto flex flex-col gap-5">
              {services.map((item, index) => (
                <div
                  key={index}
                  className=" px-2 text-center flex justify-center items-center cursor-pointer border border-[#412675] w-[150px] h-[100px] rounded-md "
                >
                  <p className="text-[#412675]">{item.service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-5 right flex items-center jc">
          <img src={assets.santaabout} className="w-[700px]" alt="" />
        </div>
      </section>
    </>
  );
};

export default About;
