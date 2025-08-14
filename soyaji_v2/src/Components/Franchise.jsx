import React from "react";
import Franchiese_bg from "../assets/images/Franchiese_bg.png";

export const Franchise = () => {
  return (
    <section className="w-full py-8 bg-gray-50">
      <div className="w-full mx-auto ">
        <div
          className="flex flex-col lg:flex-row  overflow-hidden bg-cover bg-no-repeat  min-h-[450px] "
          style={{ backgroundImage: `url(${Franchiese_bg})` }}
        >
          {/* Left Side - Content */}
          <div className="flex-1 px-8 lg:px-12 relative flex flex-col justify-center ml-40">
            <div className="z-10 relative">
              {/* Subtitle */}
              <h2 className="text-success text-base lg:text-base  mb-4 tracking-wider">
                Be a Part of India's Growing Plant-Based Revolution
              </h2>

              {/* Main Title */}
              <h1 className="text-white text-3xl lg:text-5xl text_bold font-bold mb-6 leading-tight">
                Franchise Opportunities
              </h1>

              {/* Description */}
              <p className="text-white text-base lg:text-xs leading-relaxed mb-8 max-w-xl opacity-95">
                We are on a mission to make healthy, high-quality soy products
                accessible to every household. With the demand for plant-based,
                high-protein food growing rapidly, this is the perfect time to
                partner with Soyaji and start your own profitable soy products
                business.
              </p>

              {/* CTA Button */}
              <div className="flex items-center gap-4">
                <button className="btn btn-success text-green-800 shadow-none  rounded-full text-base lg:text-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg ">
                  Know More
                  <svg
                    className="w-4 lg:w-5 h-4 lg:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17l10-10M17 7H7M17 7v10"
                    />
                  </svg>
                </button>

                {/* Franchise Details */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-white">
                  <div className="flex flex-col gap-0.1">
                    <span className="text-lg opacity-80 font-medium text-success">
                      Outlet space:
                    </span>
                    <span className="text-lg  number">150-300 sq. ft.</span>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-white bg-opacity-30"></div>
                  <div className="flex flex-col gap-0.1">
                    <span className="text-lg opacity-80 font-medium text-success">
                      Investment:
                    </span>
                    <span className="text-lg number">₹2L to ₹3 Lakhs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
