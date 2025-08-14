import React from "react";
import {
  PlayIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import leaf from "../assets/images/Icons/logosymble.png";
import img1 from "../assets/images/img_1.jpg";
import soyaSeed from "../assets/images/soya_4.png";

export const AboutProduct = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="text-center mb-16 relative">
          {/* Soybeans and leaves decoration */}
          <img
            src={soyaSeed}
            alt=""
            className=" absolute md:w-70 w-60 md:top-auto md:right-auto -top-[220px] -right-10 
          "
          />

          {/* About Products Button */}
          <button className="flex mx-auto bg-green-900/40  border-none rounded-xl px-2 py-1 text-white mb-6 text-sm">
            <img src={leaf} alt="Fresh Icon" className="w-6 h-6 mr-1" />
            About Products
          </button>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl font-semibold text-yellow-950 mb-6">
            Experience The Soyaji Products
          </h1>

          {/* Descriptive Text */}
          <p className="text-xs text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the pure taste and nutritional value of our organic
            produce, grown without harmful chemicals. Support Good sustainable
            farming practices and a healthier planet while enjoying delicious,
            Healthyest and crispy organic food.
          </p>
        </div>

        {/* Three Product Feature Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {/* Section 1: Purity at Every Step */}
          <div className="card bg-gray-200  rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src={img1}
                alt="Soyaji Products Collection"
                className="w-full h-44 object-cover p-2 rounded-2xl"
              />
              {/* <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <PlayIcon className="w-6 h-6 text-white" />
                </div>
              </div> */}
            </div>
            <div className=" px-6 pb-6">
              <h3 className="card-title text-xl font-bold text-green-900 mb-1">
                Purity at Every Step
              </h3>
              <p className="text-green-800 text-xs">
                Products are made from non-GMO, High-grade soybeans, sourced
                from trusted farms.
              </p>
            </div>
          </div>

          {/* Section 2: Modern Manufacturing */}
          <div className="card bg-gray-200  rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src="/src/assets/images/img_2.jpg"
                alt="Modern Manufacturing Facility"
                className="w-full h-44 object-cover p-2 rounded-2xl"
              />
              {/* <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <PlayIcon className="w-6 h-6 text-white" />
                </div>
              </div> */}
            </div>
            <div className=" px-6 pb-6">
              <h3 className="card-title text-xl font-bold text-green-900 mb-1">
                Modern Manufacturing
              </h3>
              <p className="text-green-800 text-xs">
                Our equipment ensures hygienic processing, freshness, and
                consistency in every batch.
              </p>
            </div>
          </div>

          {/* Section 3: Taste That Wins Hearts */}
          <div className="card bg-gray-200  rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src="/src/assets/images/img_3.jpg"
                alt="Happy Family with Soyaji Products"
                className="w-full h-44 object-cover p-2 rounded-2xl"
              />
              {/* <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <PlayIcon className="w-6 h-6 text-white" />
                </div>
              </div> */}
            </div>
            <div className=" px-6 pb-6">
              <h3 className="card-title text-xl font-bold text-green-900 mb-1">
                Taste That Wins Hearts
              </h3>
              <p className="text-green-800 text-xs ">
                Smooth soy milk to creamy tofu all flavors are crafted to
                delight every palate.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: More Services Button */}
        <div className="text-center">
          <button className="btn btn-lg btn-primary bg-green-800 text-white hover:bg-green-900 border-none rounded-full px-4 text-sm shadow-none tracking-wide">
            More Services
            <ArrowUpRightIcon className="w-3 h-3 ml-2 text-success" />
          </button>
        </div>
      </div>
    </section>
  );
};
