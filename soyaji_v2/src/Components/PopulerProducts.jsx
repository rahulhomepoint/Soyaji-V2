import React, { useState } from "react";

import bgJute from "../assets/images/bg_jute.jpg";
// import seedsImg from "../assets/images/Soya.png";
import tofuImg from "../assets/images/tofu_2_andicons.png";
import leaf from "../assets/images/Icons/logosymble.png";

// import highProtein from "../assets/images/Icons/high_protein.png";
// import dairyFree from "../assets/images/Icons/Dairy_free.png";
// import fresh100 from "../assets/images/Icons/100_fresh.png";
// import arrow2 from "../assets/images/Icons/arrow_2.png";
// import arrow3 from "../assets/images/Icons/arrow_3.png";
import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export const PopulerProducts = () => {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const increment = () => setQuantity((q) => q + 1);

  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgJute})` }}
    >
      {/* Left seeds image */}
      {/* <img
        src={seedsImg}
        alt="Soybeans"
        className="pointer-events-none select-none absolute left-0 bottom-0 w-120 translate-y-10"
      /> */}

      {/* Feature icons with arrows */}
      {/* <div className="absolute left-72 top-28 flex items-center gap-20">
        <div className="flex flex-col items-center gap-2">
          <img
            src={highProtein}
            alt="High protein"
            className="w-18 h-18 object-contain"
          />
        </div>
        <img
          src={arrow2}
          alt="arrow"
          className="w-16 h-16 -rotate-12 opacity-80"
        />
        <div className="flex flex-col items-center gap-2">
          <img
            src={fresh100}
            alt="100% fresh"
            className="w-18 h-18 object-contain"
          />
        </div>
        <img src={arrow3} alt="arrow" className="w-16 h-16 opacity-80" />
        <div className="flex flex-col items-center gap-2">
          <img
            src={dairyFree}
            alt="Dairy free"
            className="w-18 h-18 object-contain"
          />
        </div>
      </div> */}

      {/* Product imagery */}
      <div className="w-3/6 ">
        <img
          src={tofuImg}
          alt="Soya tofu"
          className="pointer-events-none select-none ml-10 w-6/6 drop-shadow-xl mt-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10  mr-10 max-w-3xl">
        <div className="inline-flex items-center gap-3 bg-white/80 rounded-xl px-2 py-1 mb-4">
          <span className="w-7 h-7 ">
            <img src={leaf} className="" />
          </span>
          <span className="text-sm font-semibold text-yellow-950 tracking-wide pr-2">
            Most Popular Product
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text_bold text-yellow-950 leading-tight">
          SOYA MILK PANEER
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-wide text_bold text-yellow-950/80 mt-2">
          SOYA TOFU
        </h3>

        <p className="text-xs text-white max-w-lg mt-6">
          Our Soya Tofu is the perfect blend of nutrition, taste, and
          versatility, making it the top choice among our customers. Whether
          you’re a health-conscious foodie, a chef, or a home cook, our Soya
          Tofu brings flavor and wellness to every plate.
        </p>

        <div className="flex items-end gap-6 mt-10">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl number_bold text-yellow-950">
              ₹380.00
            </span>
            <span className="text-3xl number text-yellow-900/60 line-through">
              ₹410.00
            </span>
          </div>
          <div className="text-3xl text-yellow-900 number">Unit - 400 g</div>
        </div>

        {/* Quantity and cart */}
        <div className="flex items-center gap-4 mt-8">
          <div className="flex items-center gap-2">
            <button
              onClick={decrement}
              className="w-12 h-12 rounded-full bg-white shadow border border-yellow-900/20 flex items-center justify-center"
            >
              <MinusIcon className="w-5 h-5 text-yellow-900" />
            </button>
            <div className="w-20 h-12 rounded-full bg-white shadow border border-yellow-900/20 flex items-center justify-center text-2xl number text-yellow-950">
              {quantity}
            </div>
            <button
              onClick={increment}
              className="w-12 h-12 rounded-full bg-white shadow border border-yellow-900/20 flex items-center justify-center"
            >
              <PlusIcon className="w-5 h-5 text-yellow-900" />
            </button>
          </div>

          <button className="btn bg-green-800 rounded-full px-6 py-1 text-white border-none font-bold flex items-center gap-2">
            Go to cart <ShoppingCartIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
