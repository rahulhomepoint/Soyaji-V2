import React from "react";
import leafIcon from "../assets/images/Icons/logosymble.png";
import soybeanIcon from "../assets/images/soya_3.png";
import womanImg from "../assets/images/img_4.jpg";
import iceCreamImg from "../assets/images/img_1.jpg";

import juteImg from "../assets/images/bg_jute_2.jpg";
import sugarFreeIcon from "../assets/images/Icons/suger_free.png";
import glutenFreeIcon from "../assets/images/Icons/gluten_free.png";
import lactoseFreeIcon from "../assets/images/Icons/lactose_free_2.png";
import freshIcon from "../assets/images/Icons/logosymble_2.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export const AboutCompany = () => {
  return (
    <section
      className="relative w-full  overflow-hidden py-12 px-4 md:px-0 "
      style={{ backgroundImage: `url(${juteImg})` }}
    >
      {/* Top left soybean icon */}
      <img
        src={soybeanIcon}
        alt="Soybean"
        className="absolute left-10 top-2 w-28 z-10 hidden md:block"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-20">
        {/* Left images */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center md:items-start mx-auto md:w-1/2">
          {/* Woman drinking milk */}
          <div className="rounded-full overflow-hidden shadow-lg w-68 h-100 flex-shrink-0 bg-white">
            <img
              src={womanImg}
              alt="Woman drinking soya milk"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Soya products (ice cream, tofu, leaves) */}
          <div className="rounded-full overflow-hidden shadow-lg w-68 h-100 flex-shrink-0 bg-white">
            <img
              src={iceCreamImg}
              alt="Soyaji Ice Cream"
              className="object-cover  w-full h-full"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 mt-12 md:mt-0 md:ml-12">
          {/* About Company badge */}
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-xl bg-success/40 text-green-900 text-sm font-semibold gap-2">
            <img src={leafIcon} alt="Leaf Icon" className="w-6 h-6" />
            About Company
          </div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#432826] mb-6 leading-tight">
            We Are Committed to <br />
            Providing High Quality <br />
            Soya Products
          </h2>
          {/* Description */}
          <p className="text-gray-600 text-sm mb-6 max-w-xl">
            We, the Soyaji team think that if we can study above situation and
            make available a high quality fresh Paneer in today's market we can
            win food lovers heart and at the same time can succeed in our
            business goals.
          </p>
          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8 text-base font-semibold text-[#7a5c3e] *:text-sm">
            <div className="flex items-center gap-2">
              <img
                src={freshIcon}
                alt="Premium Raw Materials"
                className="w-6 h-6"
              />
              Premium Raw Materials
            </div>
            <div className="flex items-center gap-2">
              <img src={freshIcon} alt="Customer Trust" className="w-6 h-6" />
              Customer Trust
            </div>
            <div className="flex items-center gap-2">
              <img
                src={freshIcon}
                alt="Wide Product Range"
                className="w-6 h-6"
              />
              Wide Product Range
            </div>
            <div className="flex items-center gap-2">
              <img
                src={freshIcon}
                alt="Innovation-Driven"
                className="w-6 h-6"
              />
              Innovation-Driven
            </div>
          </div>
          {/* Know More button */}
          <div className="flex items-center gap-10">
            <button className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white  rounded-full btn shadow-none transition-all duration-200">
              Know More
              <ArrowUpRightIcon className="w-4 h-4 text-success" />
            </button>
            {/* Icons row */}
            <div className="flex items-center gap-8 ">
              <div className="flex flex-col items-center">
                <img
                  src={sugarFreeIcon}
                  alt="Sugar Free"
                  className="w-14 h-14 mb-1"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={glutenFreeIcon}
                  alt="Gluten Free"
                  className="w-14 h-14 mb-1"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={lactoseFreeIcon}
                  alt="Lactose Free"
                  className="w-14 h-14 mb-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right soybean and leaves */}
     
    </section>
  );
};
