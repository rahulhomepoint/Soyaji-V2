import React from "react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

import logoSymbol from "../assets/images/Icons/logosymble_2.png";
import bannerImage from "../assets/images/banner_1.jpg";
import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <div
      className="relative flex items-center md:min-h-[100vh] bg-center pl-4 md:pl-70 pr-8 pt-44 pb-16 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <Navbar />
      {/* Left Accent Line */}
      <div className="absolute left-18 top-1/4 h-2/3  flex-col items-center justify-center gap-3 hidden md:flex">
        {/* <div className="w-1 bg-success h-full rounded-full"></div> */}
        <div className="w-1 h-10 bg-success rounded-2xl"></div>
        <div className="w-1 h-10 bg-white rounded-2xl"></div>
        <div className="w-1 h-10 bg-white rounded-2xl"></div>
      </div>

      {/* Hero Content */}
      <div className="z-10 max-w-2xl text-left">
        {/* Badge */}
        <div className="inline-flex items-center px-2 py-1 mb-6 rounded-xl bg-white/20 text-white  text-sm tracking-widest gap-2">
          <span className=" w-5 h-5 rounded-full flex items-center justify-center ">
            <img src={logoSymbol} alt="" className="w-7 h-6" />
          </span>
          <span className="number">100%</span>{" "}
          <span className="font-semibold">Healthy & Affordable</span>
        </div>
        {/* Heading */}
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4 tracking-wide leading-tight text-success drop-shadow-lg">
          Discover The Joy Of <br /> Organic Living
        </h1>
        {/* Subheading */}
        <p className="text-xs md:text-sm text-white/90 mb-8 max-w-lg mt-4 md:mt-10">
          Discover the pure taste and nutritional value of our organic produce,
          grown without harmful chemicals. Support sustainable farming practices
          and a healthier planet while enjoying delicious, healthy and crispy
          organic food.
        </p>
        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="flex items-center gap-2 btn  shadow-none  btn-success font-bold rounded-full transition-all duration-200">
            Buy Now <ArrowUpRightIcon className="w-3 h-3 " />
          </button>
          <button className="flex items-center gap-2 btn  btn-outline border-1 shadow-none text-white  border-white rounded-full  font-bold transition-all duration-200 bg-transparent">
            Contact Us <ArrowUpRightIcon className="w-3 h-3 text-yellow-400" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-12  md:flex flex-col gap-4 z-20 hidden ">
        <button className="w-12 h-12 rounded-full border border-white/60 bg-white/10 flex items-center justify-center hover:bg-success text-success hover:text-gray-900 transition-all duration-200">
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 rounded-full border border-white/60 bg-white/10 flex items-center justify-center hover:bg-success text-success hover:text-gray-900 transition-all duration-200">
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
