import React, { useState, useEffect } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/solid";

import logo from "../assets/images/logo_menusec.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition >= viewportHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar top-0 left-0 right-0 z-50 px-6 py-4 fixed transition-all duration-300`}
    >
      {/* Main Navbar Container with Rounded Design */}
      <div
        className={`w-5/6 backdrop-blur-xs rounded-full border px-4 py-3 flex items-center justify-between mx-auto transition-all duration-300 ${
          isScrolled
            ? "bg-gray-800/40 border-gray-200 shadow-md"
            : "bg-gray-800/20 border-gray-300/30"
        }`}
      >
        {/* Left Section - Logo and Navigation */}
        <div className="flex items-center gap-14">
          {/* SOYAJI Logo with Leaf Icon */}
          <div className="flex items-center gap-2">
            <img src={logo} className=" w-26 " />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {/* Home Button with Dropdown */}
            <div className="dropdown">
              <div className="btn bg-success text-green-900  border-0 rounded-full px-4 py-2 shadow-none">
                Home
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </div>
              <ul className="dropdown-content menu p-2  bg-base-100 rounded-box w-52 z-50 text-sm">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Dashboard</a>
                </li>
              </ul>
            </div>

            {/* Other Navigation Links */}
            <a className="text-white hover:text-success transition-colors text-sm">
              Shop
            </a>
            <a className="text-white hover:text-success transition-colors text-sm">
              About
            </a>
            <a className="text-white hover:text-success transition-colors text-sm">
              Contact
            </a>
            <a className="text-white hover:text-success transition-colors text-sm">
              Franchise
            </a>
          </div>
        </div>

        {/* Right Section - User Icons and CTA */}
        <div className="flex items-center gap-6">
          {/* Center Section - Search Bar */}
          <div className="flex-1 max-w-xs mx-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Find Products"
                className={`input w-full placeholder-gray-500 rounded-full pl-4 pr-12 py-3 border-1 focus:outline-none transition-all duration-300 ${
                  isScrolled
                    ? "bg-gray-100 text-gray-800 border-gray-300 focus:border-green-500"
                    : "bg-white/10 text-white placeholder-white border-white"
                }`}
              />
              <MagnifyingGlassIcon
                className={`absolute right-1 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full p-2 transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-500 bg-gray-200"
                    : "text-gray-500 bg-amber-50"
                }`}
              />
            </div>
          </div>
          {/* Cart Icon with Badge */}
          <div className="relative">
            <div
              className={`w-10 h-10 border-2 cursor-pointer rounded-full flex items-center justify-center bg-transparent transition-all duration-300 ${
                isScrolled
                  ? "border-gray-300 hover:border-success"
                  : "border-white"
              }`}
            >
              <ShoppingCartIcon className="w-5 h-5 text-success" />
            </div>
            <span
              className={`absolute top-1 -right-2 w-4 h-4 number text-xs rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                isScrolled ? "bg-green-600 text-white" : "bg-white text-black"
              }`}
            >
              5
            </span>
          </div>

          {/* Heart Icon with Badge */}
          <div className="relative">
            <div
              className={`w-10 h-10 border-2 cursor-pointer rounded-full flex items-center justify-center bg-transparent transition-all duration-300 ${
                isScrolled
                  ? "border-gray-300 hover:border-success"
                  : "border-white"
              }`}
            >
              <HeartIcon className="w-5 h-5 text-success" />
            </div>
            <span
              className={`absolute top-1 -right-2 w-4 h-4 number text-xs rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                isScrolled ? "bg-green-600 text-white" : "bg-white text-black"
              }`}
            >
              8
            </span>
          </div>

          {/* Get In Touch Button */}
          <button className="btn bg-success border-0 rounded-full px-6 py-3 font-semibold shadow-none text-green-900">
            Get In Touch
            <ArrowUpRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
