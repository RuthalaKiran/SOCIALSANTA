import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="w-full h-[85vh] flex items-center justify-center md:gap-10 md:px-10 lg:px-16">
      <div className=" lg:pl-20 py-6 w-full md:h-[90%] lg:h-full justify-end   first flex flex-col gap-3">
        <div className="flex flex-col">
          <p className="text-[#412675] font-bold text-5xl">Welcome to</p>
          <p className="text-[#412675] font-bold text-5xl">Social Santa.</p>
        </div>
        <div>
          <p className="text-[#412675] text-lg">
            an agency that is required for your social
          </p>
          <p className="text-[#412675] text-lg">presence.</p>
        </div>
        <div className="flex items-center gap-5">
          <Link to={"/make-a-wish"}>
            <button className="bg-[#412675] font-bold lg:text-md md:px-[12px] md:py-[12px] lg:px-[13px] lg:py-[10px] xl:px-7 xl:py-3 text-white">
              Make a wish
            </button>
          </Link>
          <Link to={"/about"}>
            <button className=" border-[2.5px] font-bold lg:text-md md:px-[12px] md:py-[9px] lg:px-5 lg:py-2 xl:px-7 xl:py-[10px] text-[#412675] border-[#412675]">
              Santa, Who?
            </button>
          </Link>
        </div>
      </div>
      <div className="second   hidden md:flex  items-end justify-center  w-full md:h-[90%] lg:h-full">
        <img
          src={assets.introsanta}
          className=" lg:w-[570px] relative top-1"
          alt=""
        />
      </div>
      <div className="second md:hidden flex  items-end justify-center bg-green-300 w-full md:h-[90%] lg:h-full">
        <img
          src={assets.introsanta}
          className=" md:max-w-[350px] lg:w-[570px]"
          alt=""
        />
      </div>
    </section>
  );
};

export default Intro;
