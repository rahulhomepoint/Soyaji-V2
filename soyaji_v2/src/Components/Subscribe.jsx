import React from "react";
import fssai from "../assets/fssai.png";
import ISO from "../assets/ISO.png";
import Jaivik_Bharat from "../assets/Jaivik_Bharat.png";
import HACCP from "../assets/HACCP.jpeg";
import GMP from "../assets/GMP.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import subBG from "../assets/images/newsletter_bg.png";
import Newslater_box from "../assets/images/Newslater_box.png";

export const Subscribe = () => {
  return (
    <div className="w-full relative">
      {/* Top Section - Certification Logos */}
      <img
        src={Newslater_box}
        alt=""
        className="w-70 absolute left-65 top-25 z-10"
      />
      <div className="bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* FSSAI Logo */}
            <div className="flex flex- items-center text-center">
              <div className=" flex items-center justify-center">
                <img src={fssai} alt="" className="w-full" />
              </div>
              <p className="text-[9px] ml-2 text-start font-semibold text-green-800 leading-tight">
                FOOD SAFETY & STANDARDS AUTHORITY OF INDIA CERTIFIED
              </p>
            </div>

            {/* ISO Logo */}
            <div className="flex flex- items-center text-center">
              <div className=" flex items-center justify-center">
                <img src={ISO} alt="" className="w-40" />
              </div>
              <p className="text-[9px] ml-2 text-start font-semibold text-green-800 leading-tight">
                INTERNATIONAL ORGANIZATION FOR STANDERDIZATION
              </p>
            </div>

            {/* Jaibik Bharat Logo */}
            <div className="flex flex- items-center text-center">
              <div className=" flex items-center justify-center">
                <img src={Jaivik_Bharat} alt="" className="w-10" />
              </div>
              <p className="text-[9px] w-2/4 ml-2 text-start font-semibold text-green-800 leading-tight">
                JAIVIK BHARAT 100% ORGANIC CERTIFIED
              </p>
            </div>

            {/* HACCP Logo */}
            <div className="flex flex- items-center text-center">
              <div className=" flex items-center justify-center">
                <img src={HACCP} alt="" className="w-15" />
              </div>
              <p className="text-[9px] ml-2 w-2/4 text-start font-semibold uppercase text-green-800 leading-tight">
                Hazard Analysis and Critical Control Points
              </p>
            </div>

            {/* GMP Logo */}
            <div className="flex flex- items-center text-center">
              <div className=" flex items-center justify-center">
                <img src={GMP} alt="" className="w-15" />
              </div>
              <p className="text-[9px] ml-2 text-start font-semibold uppercase text-green-800 leading-tight">
                Good Manufacturing Practice
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Product Box and Subscription Form */}
      <div
        className=" py-16 relative overflow-hidden bg-contain"
        style={{ backgroundImage: `url(${subBG})` }}
      >
        {/* Background Pattern */}

        <div className="max-w-8xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="cols-span-1"></div>
            {/* Subscription Form */}
            <div className="text-white flex items-center gap-8 col-span-2 w-3/4">
              <div className="ml-5">
                {" "}
                <h2 className="text-xl font-semibold tracking-widest mb-2">
                  Subscribe to our emails
                </h2>
                <p className="text-xs mb-6  pr-12 opacity-90">
                  Get 10% off your first purchase and be the first to know about
                  new product launches, exclusive deals, and the latest updates!
                </p>
              </div>

              <div className="flex flex-col gap-3 mb-4 relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  className="flex-1 px-4 py-2 rounded-full bg-white/20 border border-white text-amber-800 w-76 placeholder-amber-800 placeholder:text-sm focus:outline-none  "
                />
                <button className="btn btn-sm btn-white shadow-none font-semibold absolute top-1 right-1 rounded-full text-green-800 transition-colors">
                  Subscribe{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <p className="text-xs opacity-75">
                  You can unsubscribe at any time, but you certainly won't want
                  to anymore!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
