import React from "react";
import aboutImg1 from "../assets/images/img_1.jpg";
import aboutImg2 from "../assets/images/HARBAL_TOFU_copy.png";
import organicIcon from "../assets/images/icons/white_logo.png";
// import glutenFreeIcon from "../../asset/ICONS/gluten free.png";
// import sugarFreeIcon from "../../asset/ICONS/sugerfre.png";
// import lactoseFreeIcon from "../../asset/ICONS/lactose free.png";
import { IoMdCheckboxOutline } from "react-icons/io";
// import RIGHT_LEAF from "../../asset/WEBSITE_ASSETS/leaf-01.png";
import styleleaf from "../assets/images/green_leaves.png";
import leaf from "../assets/images/Icons/logosymble.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export const PatnerWithus = () => {
  return (
    <div className="relative md:overflow-hidden">
      <section className="flex flex-wrap items-center justify-center bg-white py-12 md:w-full">
        <div className="flex max-w-7xl flex-wrap items-center gap-6 px-6 md:w-full md:justify-center md:gap-18">
          {/* Left Side: Images and About Us */}
          <div className="flex w-2/4 flex-col items-center">
            <div className="relative flex w-full flex-row items-center gap-6">
              <img
                src={aboutImg1}
                alt="Mother and daughter drinking plant-based milk"
                className="h-70 rounded-xl object-cover bg-right shadow-lg md:h-96 md:w-90"
              />
              <div className="bg-yellow-900/70 absolute top-52 left-30 flex h-20 w-20 items-center justify-center rounded-xl shadow-lg md:top-60 md:left-78 md:h-42 md:w-42">
                <img
                  src={organicIcon}
                  alt="Organic Icon"
                  className="h-20 w-20"
                />
              </div>
              <div className="ml-4 flex w-56 flex-col items-center">
                <img
                  src={aboutImg2}
                  alt="Mother and child with plant-based milk"
                  className="mt-5 h-54 w-74 rounded-xl object-cover shadow-md md:h-64 md:w-[200px]"
                />
              </div>
              <img
                src={styleleaf}
                className=" w-70 absolute transform scale-x-[-1] -rotate-10 -bottom-12 -left-36"
              />
            </div>
            <div className="hidden md:mr-14 md:inline-block">
              <p className="purple_text mt-6 items-start text-start text-xs md:w-3/5">
                Trusted Brand: Strong reputation for quality, purity, and taste
                in soy products. Growing Industry: Plant-based food market is
                expanding at an unprecedented rate.
              </p>
            </div>
          </div>
          <div className="md:mr-14 md:hidden">
            <p className="purple_text mt-4 items-start text-start text-xs md:w-2/4">
              Trusted Brand: Strong reputation for quality, purity, and taste in
              soy products. Growing Industry: Plant-based food market is
              expanding at an unprecedented rate.
            </p>
          </div>
          {/* Right Side: Text and Features */}
          <div className="mt-4 flex flex-col gap-4 md:mt-0 md:w-2/6 relative ">
            <div className="inline-flex items-center bg-gray-200 gap-3 rounded-lg px-2  w-fit">
              <span className="w-7 h-7 ">
                <img src={leaf} className="" />
              </span>
              <span className="text-sm font-semibold text-green-800  pr-2">
                Why Partner With Us
              </span>
            </div>
            <h2 className="BREAKSONG purple_text mb-2 text-2xl leading-tight md:text-4xl text_bold text-yellow-950">
              Soyaji Franchise <br />
              <span className="">Benefits</span>
            </h2>
            <p className="purple_text mb-4 text-xs w-6/7">
              Choosing a franchise with us means stepping into a proven business
              model with strong customer demand and a trusted brand image.
              Here's what makes our franchise opportunity stand out:
            </p>
            <ul className="mb-4 flex flex-col gap-6 w-4/5">
              <li className="purple_text flex items-start gap-2">
                <span className="text-xl">
                  <IoMdCheckboxOutline className="text-green-800" />
                </span>
                <span className="text-sm ">
                  <span className="font-extrabold text-green-800">
                    Complete Training & Guidance:
                  </span>{" "}
                  <br />
                  From operations to customer handling.
                </span>
              </li>
              <li className="purple_text flex items-start gap-2">
                <span className="text-xl">
                  <IoMdCheckboxOutline className="text-green-800" />
                </span>
                <span className="text-sm ">
                  <span className="font-extrabold text-green-800">
                    Low Investment, High Returns:
                  </span>
                  <br />
                  Affordable entry with excellent profit margins.
                </span>
              </li>
              <li className="purple_text flex items-start gap-2">
                <span className="text-xl">
                  <IoMdCheckboxOutline className="text-green-800" />
                </span>
                <span className="text-sm ">
                  <span className="font-extrabold text-green-800">
                    Exclusive Area Rights:
                  </span>
                  <br />
                  Operate as the sole distributor in your territory.
                </span>
              </li>
            </ul>
            <img
              src={styleleaf}
              className=" w-60 absolute rotate-20 -bottom-2 left-70"
            />
            {/* Bottom Icons */}
            {/* <div className="flex flex-row gap-8">
              <div className="flex flex-col items-center">
                <img
                  src={sugarFreeIcon}
                  alt="Sugar Free"
                  className="mb-1 h-12 w-12"
                />
                <span className="purple_text text-xs font-bold">
                  SUGAR FREE
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={glutenFreeIcon}
                  alt="Gluten Free"
                  className="mb-1 h-12 w-12"
                />
                <span className="purple_text text-xs font-bold">
                  GLUTEN FREE
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={lactoseFreeIcon}
                  alt="Lactose Free"
                  className="mb-1 h-12 w-12"
                />
                <span className="purple_text text-xs font-bold">
                  LACTOSE FREE
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div className="text-center">
        <button className="z-10 mb-4 w-40 rounded-full bg-green-800 btn shadow-none py-2  text-white transition-colors duration-200 hover:bg-green-900 ">
          Know More <ArrowUpRightIcon className="w-4 h-3 ml-2 text-success" />
        </button>
      </div>
      {/* <img
        src={RIGHT_LEAF}
        alt="right_leaf"
        className="absolute -right-50 -bottom-18 w-80 -rotate-32"
      /> */}
    </div>
  );
};
