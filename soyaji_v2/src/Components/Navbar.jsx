import React, { useState, useEffect } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import logo from "../assets/images/logo_menusec.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`navbar top-0 left-0 right-0 z-50 px-2 sm:px-6 py-2 sm:py-4 fixed transition-all duration-300`}
    >
      {/* Main Navbar Container with Rounded Design */}
      <div
        className={`w-full sm:w-5/6 backdrop-blur-xs rounded-full sm:rounded-full border px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between mx-auto transition-all duration-300 ${
          isScrolled
            ? "bg-gray-800/40 border-gray-200 shadow-md"
            : "bg-gray-800/20 border-gray-300/30"
        }`}
      >
        {/* Left Section - Logo and Navigation */}
        <div className="flex items-center gap-4 sm:gap-14">
          {/* SOYAJI Logo with Leaf Icon */}
          <div className="flex items-center gap-2">
            <img src={logo} className="w-20 sm:w-26" />
          </div>

          {/* Desktop Navigation Links - Hidden on Mobile */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Home Button with Dropdown */}
            <div className="dropdown">
              <div className="btn bg-success text-green-900 border-0 rounded-full px-4 py-2 shadow-none">
                Home
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </div>
              <ul className="dropdown-content menu p-2 bg-base-100 rounded-box w-52 z-50 text-sm">
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

        {/* Center Section - Search Bar - Hidden on Mobile */}
        <div className="hidden md:flex flex-1 max-w-xs mx-2">
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

        {/* Right Section - User Icons and CTA */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Mobile Search Icon - Visible only on Mobile */}
          <div className="md:hidden">
            <MagnifyingGlassIcon className="w-6 h-6 text-white" />
          </div>

          {/* Cart Icon with Badge */}
          <div className="relative">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 border-2 cursor-pointer rounded-full flex items-center justify-center bg-transparent transition-all duration-300 ${
                isScrolled
                  ? "border-gray-300 hover:border-success"
                  : "border-white"
              }`}
            >
              <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
            </div>
            <span
              className={`absolute top-0 -right-1 sm:top-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 number text-xs rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                isScrolled ? "bg-green-600 text-white" : "bg-white text-black"
              }`}
            >
              5
            </span>
          </div>

          {/* Heart Icon with Badge - Hidden on Small Mobile */}
          <div className="hidden sm:block relative">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 border-2 cursor-pointer rounded-full flex items-center justify-center bg-transparent transition-all duration-300 ${
                isScrolled
                  ? "border-gray-300 hover:border-success"
                  : "border-white"
              }`}
            >
              <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
            </div>
            <span
              className={`absolute top-0 -right-1 sm:top-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 number text-xs rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                isScrolled ? "bg-green-600 text-white" : "bg-white text-black"
              }`}
            >
              8
            </span>
          </div>

          {/* Get In Touch Button - Hidden on Small Mobile */}
          <button className="hidden lg:flex gap-1 btn bg-success border-0 rounded-full px-6 py-3 font-semibold shadow-none text-green-900 ">
            Get In Touch
            <ArrowUpRightIcon className="w-4 h-4 ml-2" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-8 h-8 flex items-center justify-center text-white"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-black/50">
          <div className="bg-gray-800/95 backdrop-blur-md mt-2 mx-2 rounded-2xl border border-gray-600/30 p-6">
            {/* Mobile Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find Products"
                  className="input w-full placeholder-gray-400 rounded-full pl-4 pr-12 py-3 bg-gray-700/50 text-white border-gray-600 focus:outline-none focus:border-success"
                />
                <MagnifyingGlassIcon className="absolute right-1 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full p-2 text-gray-400 bg-gray-600/50" />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-4 mb-6">
              <div className="dropdown dropdown-end w-full">
                <div className="btn bg-success text-green-900 border-0 rounded-full w-full justify-between">
                  Home
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
                <ul className="dropdown-content menu p-2 bg-gray-700 rounded-box w-full mt-2">
                  <li>
                    <a className="text-white hover:bg-gray-600">Home</a>
                  </li>
                  <li>
                    <a className="text-white hover:bg-gray-600">Dashboard</a>
                  </li>
                </ul>
              </div>

              <a className="block text-white hover:text-success transition-colors text-lg py-2">
                Shop
              </a>
              <a className="block text-white hover:text-success transition-colors text-lg py-2">
                About
              </a>
              <a className="block text-white hover:text-success transition-colors text-lg py-2">
                Contact
              </a>
              <a className="block text-white hover:text-success transition-colors text-lg py-2">
                Franchise
              </a>
            </div>

            {/* Mobile CTA Button */}
            <button className="btn bg-success border-0 rounded-full w-full py-3 font-semibold shadow-none text-green-900">
              Get In Touch
              <ArrowUpRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
