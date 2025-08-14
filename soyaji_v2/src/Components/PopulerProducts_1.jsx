/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import leaf from "../assets/images/Icons/logosymble.png";
import soyaRight from "../assets/images/soya.png";

// Local product images
import tofu from "../assets/images/tofu_2.png";
import tofuHerbal from "../assets/images/tofu_1.png";
import chakli from "../assets/images/soya_stics.png";
import badamMilk from "../assets/images/Milk_package_2.png";
import cheese from "../assets/images/cheese.png";
import iceCream from "../assets/images/ice_cream_1.png";
import curd from "../assets/images/plain_curd.png";
import soya from "../assets/images/soya_3.png";
import Discount from "../assets/images/Discount_card.png";
import Discount2 from "../assets/images/Discount_card_2.png";

const Rating = ({ count = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-yellow-400 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const SmallProductCard = ({ image, name, price, mrp, rating = 5 }) => (
  <div className="flex items-center gap-4 bg-white rounded-2xl border border-gray-300 px-4 py-3 hover:shadow-md transition group hover:border-green-800 hover:border-1">
    <div className="w-20 h-20 flex items-center justify-center border-r-1 border-gray-300">
      <img src={image} alt={name} className="w-20 h-20 object-cover  pr-4 " />
      {/* <hr className="divider divider-horizontal w-full  bg-gray-300" /> */}
    </div>
    <div className="flex-1 min-w-0 ">
      <h4 className="text-sm font-semibold text-gray-800 truncate">{name}</h4>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-green-900 font-semibold number">₹{price}</span>
        {mrp && (
          <span className="text-red-500 line-through text-sm number">
            ₹{mrp}
          </span>
        )}
      </div>
      <div className="mt-1">
        <Rating count={rating} />
      </div>
    </div>
    <button className="shrink-0 w-9 h-9 rounded-full bg-green-800  text-white flex items-center justify-center group-hover:bg-success">
      <ShoppingCartIcon className="w-4 h-4 group-hover:text-green-800" />
    </button>
  </div>
);

export const PopulerProducts_1 = () => {
  const productsTop = [
    { image: tofu, name: "Soya Tofu", price: "38.00", mrp: "46.00" },
    { image: chakli, name: "Soya Chakli", price: "38.00", mrp: "46.00" },
    {
      image: soya,
      name: "Natural Yogurt",
      price: "38.00",
      mrp: "46.00",
    },
    { image: tofuHerbal, name: "Herbal Tofu", price: "38.00", mrp: "46.00" },
  ];

  const productsBottom = [
    { image: badamMilk, name: "Soya Badam Milk", price: "38.00", mrp: "46.00" },
    { image: cheese, name: "Plain Milk Cheese", price: "38.00", mrp: "46.00" },
    {
      image: iceCream,
      name: "Strawberry Ice Cream",
      price: "38.00",
      mrp: "46.00",
    },
    { image: curd, name: "Plain Curd", price: "38.00", mrp: "46.00" },
  ];

  return (
    <section className="relative py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10 xl:px-24 2xl:px-60 ">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-10 mt-20">
          <div className="badge badge-ghost bg-gray-200 badge-lg py-2 px-3 text-green-800 font-semibold inline-flex items-center gap-2">
            <img src={leaf} alt="leaf" className="w-6 h-6" />
            <span>Popular Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-yellow-950 font-extrabold text-center">
            Most Popular Products
          </h2>
        </div>

        {/* Grid content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left promos */}
          <div className="flex flex-col gap-6">
            {/* Promo 1 */}
            <div
              className={`relative overflow-hidden rounded-2xl bg-cover text-green-900 p-6 min-h-[220px]`}
              style={{ backgroundImage: `url(${Discount})` }}
            >
              <h3 className="text-2xl font-extrabold text_bold text-green-900/90">
                Soy-mazing
                <br />
                Festive Offer
              </h3>
              <p className="text-xs mt-3 w-2/3 opacity-90">
                This festive season, celebrate health & happiness with the
                goodness of soy!
              </p>
              <button className="mt-4 btn btn-sm text-white bg-green-900 rounded-full border-none font-bold px-4">
                Buy Now
              </button>
              {/* <div className="absolute -right-4 -bottom-4 w-40 opacity-90">
                <img src={tofu} alt="tofu" className="w-full" />
              </div> */}
              {/* <div className="absolute right-6 top-6 bg-white text-emerald-900 rounded-full w-18 h-18 flex flex-col items-center justify-center border border-emerald-900/20">
                <span className="text-xs">upto</span>
                <span className="text-2xl number_bold">40%</span>
              </div> */}
            </div>

            {/* Promo 2 */}
            <div
              className="relative overflow-hidden rounded-2xl bg-contain text-emerald-900 p-6 min-h-[220px] "
              style={{ backgroundImage: `url(${Discount2})` }}
            >
              <h3 className="text-2xl font-extrabold text-yellow-900 text_bold">
                Taste & Health
                <br />
                Combo Offer
              </h3>
              <p className="text-xs mt-3 w-2/3 text-yellow-700">
                This festive season, celebrate health & happiness with the
                goodness of soy!
              </p>
              <button className="mt-4 btn btn-sm bg-emerald-800 text-white rounded-full border-none font-bold px-4">
                Buy Now
              </button>
              {/* <div className="absolute -right-6 -bottom-8 w-48 opacity-90">
                <img src={iceCream} alt="combo" className="w-full" />
              </div> */}
            </div>
          </div>

          {/* Right products grid (2 rows x 2 cols per row on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
              {productsTop.map((p, idx) => (
                <SmallProductCard
                  key={`top-${idx}`}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                  mrp={p.mrp}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
              {productsBottom.map((p, idx) => (
                <SmallProductCard
                  key={`bot-${idx}`}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                  mrp={p.mrp}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right decorative soybeans */}
      <img
        src={soyaRight}
        alt="soy"
        className="hidden xl:block absolute left-0 -top-56 w-lg pointer-events-none select-none"
      />
    </section>
  );
};
