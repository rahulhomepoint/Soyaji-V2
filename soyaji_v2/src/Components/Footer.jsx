import React from "react";
import visa from "../assets/visa-logo.png";
import UPI from "../assets/upi.webp";
import phonepay from "../assets/phonepay.png";
import masterCard from "../assets/mastercard.png";
import Gpay from "../assets/google-pay.png";
import amazon_pay from "../assets/amazon_pay.png";
import net from "../assets/net-banking.jpg";
import footerbg from "../assets/images/footer_bg.png";
import logo from "../assets/images/Logo_menusec.png";

export const Footer = () => {
  return (
    <footer
      className=" text-amber-900 py-10 object-contain"
      style={{ backgroundImage: `url(${footerbg})` }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Us, Help & FAQ Column */}
          <div className="space-y-2">
            <h3 className=" font-bold text-[#674C3F]  ">
              About Us, Help & FAQ
            </h3>
            <hr className="w-40 p-0 text-white" />
            <ul className="space-y-3 *:text-[#674C3F]">
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                About Us
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Frequently Asked Questions
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Shipping Information
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Your Favourites
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Create Account
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Privacy Policy
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Cancellation Rights
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Top Categories Column */}
          <div className="space-y-2">
            <h3 className=" font-bold text-[#674C3F]  tracking-wide">
              Top Categories
            </h3>
            <hr className="w-28 p-0 text-white" />
            <ul className="space-y-3 *:text-[#674C3F]">
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Value Deals
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Soya Paneer (Tofu)
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Yougurt Flavourd
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Soya Milk (Plain)
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Soya Namkeen
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Soya Curd
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Chesse Flavoured
              </li>
              <li className="flex items-center text-xs cursor-pointer hover:text-[#674C3F] transition-colors">
                <span className="text-[#674C3F] font-bold mr-2">{">"}</span>
                Masala Tofu
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-2">
            <h3 className=" font-bold text-[#674C3F]  tracking-wide">
              Support
            </h3>
            <hr className="w-32 p-0 text-white" />
            <div className="space-y-4 text-xs">
              <div className="space-y-2">
                <strong className="block text-[#674C3F]">Mobile:</strong>
                <p className="text-[#674C3F]">Mo-Fr 9:00am - 5:00pm</p>
                <p className="text-[#674C3F] font-bold">(+91) 8240 90 2600</p>
              </div>
              <div className="space-y-2">
                <strong className="block text-[#674C3F]">E-Mail:</strong>
                <p className="text-[#674C3F]">info@soyaji.in</p>
              </div>
              <p className="text-xs text-[#674C3F] italic leading-relaxed">
                Our Mobile number supports only Bengali, Hindi, English. For
                other assistance, please send us an email.
              </p>
            </div>
          </div>

          {/* Payment Methods Column */}
          <div className="space-y-2">
            <h3 className=" font-bold text-[#674C3F]  tracking-wide">
              We accept
            </h3>
            <hr className="w-32 p-0 text-white" />
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-md shadow-xs">
                  <img src={visa} alt="" className="w-10 h-6 object-cover" />
                </div>
                <div className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-md shadow-xs">
                  <img src={UPI} alt="" className="w-10 h-6 object-cover" />
                </div>
                <div className=" text-white bg-gray-100 border border-gray-300 px-3 py-1 rounded-md  shadow-xs">
                  <img
                    src={phonepay}
                    alt=""
                    className="w-10 px-2 h-6 object-cover"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-md shadow-xs">
                  <img
                    src={masterCard}
                    alt=""
                    className="w-10 h-6 object-cover"
                  />
                </div>
                <div className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-md shadow-xs">
                  <img src={Gpay} alt="" className="w-10 h-6 object-cover" />
                </div>
                <div className="bg-gray-100 border border-gray-300  rounded-md shadow-xs">
                  <img
                    src={amazon_pay}
                    alt=""
                    className="w-16 h-8 object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className=" text-white bg-gray-100 rounded-md border border-gray-300 px-0.3 py-1 ">
                  <img src={net} alt="" className=" h-6  object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="space-y-2">
            <h3 className=" font-bold text-[#674C3F] under tracking-wide">
              Follow us
            </h3>
            <hr className="w-32 p-0 text-white" />
            <div className=" w-2/4 grid grid-cols-3 gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-800  flex items-center justify-center text-white font-bold  cursor-pointer hover:scale-110 transition-transform">
                f
              </div>
              <div className="w-8 h-8 bg-orange-700  flex items-center justify-center text-white font-bold  cursor-pointer hover:scale-110 transition-transform">
                G
              </div>

              <div className="w-8 h-8 bg-blue-700  flex items-center justify-center text-white font-bold  cursor-pointer hover:scale-110 transition-transform">
                in
              </div>
            </div>
            <div className="text-sm  text-[#674C3F] ">SOYAJI</div>
            <ul className="space-y-2 text-xs">
              <li className="text-[#674C3F] cursor-pointer hover:text-[#674C3F] transition-colors">
                Facebook
              </li>
              <li className="text-[#674C3F] cursor-pointer hover:text-[#674C3F] transition-colors">
                X (formerly Twitter)
              </li>
              <li className="text-[#674C3F] cursor-pointer hover:text-[#674C3F] transition-colors">
                YouTube
              </li>
              <li className="text-[#674C3F] cursor-pointer hover:text-[#674C3F] transition-colors">
                Instagram
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Logo and Copyright */}
        <div className="border-t-2 border-[#674C3F]/20 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="" />
          </div>
        </div>
        <div className="text-[#674C3F] text-xs italic text-center">
          copyright @2025 by saraj ray
        </div>
      </div>
    </footer>
  );
};
