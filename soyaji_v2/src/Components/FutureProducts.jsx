import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import soya_2 from "../assets/images/soya_2.png";
import leaf from "../assets/images/Icons/logosymble.png";
import { ProductCard } from "./ProductCard";
import jute from "../assets/images/jute.png";

export const FutureProducts = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      productImage: "/src/assets/images/Milk_package.png",
      productName: "Plain Soya Milk",
      currentPrice: "38.00",
      originalPrice: "46.00",
      rating: 5,
      onSale: true,
    },
    {
      id: 2,
      productImage: "/src/assets/images/soya_3.png",
      productName: "Chocolate Soya Milk",
      currentPrice: "42.00",
      originalPrice: "50.00",
      rating: 5,
      onSale: true,
    },
    {
      id: 3,
      productImage: "/src/assets/images/soya_4.png",
      productName: "Vanilla Soya Milk",
      currentPrice: "40.00",
      originalPrice: "48.00",
      rating: 4,
      onSale: false,
    },
    {
      id: 4,
      productImage: "/src/assets/images/plain_curd.png",
      productName: "Plain Soya Curd",
      currentPrice: "35.00",
      originalPrice: "42.00",
      rating: 5,
      onSale: true,
    },
    {
      id: 5,
      productImage: "/src/assets/images/Milk_package.png",
      productName: "Plain Soya Milk",
      currentPrice: "38.00",
      originalPrice: "46.00",
      rating: 5,
      onSale: true,
    },
    {
      id: 6,
      productImage: "/src/assets/images/soya_3.png",
      productName: "Chocolate Soya Milk",
      currentPrice: "42.00",
      originalPrice: "50.00",
      rating: 5,
      onSale: true,
    },
    {
      id: 7,
      productImage: "/src/assets/images/soya_4.png",
      productName: "Vanilla Soya Milk",
      currentPrice: "40.00",
      originalPrice: "48.00",
      rating: 4,
      onSale: false,
    },
    {
      id: 8,
      productImage: "/src/assets/images/plain_curd.png",
      productName: "Plain Soya Curd",
      currentPrice: "35.00",
      originalPrice: "42.00",
      rating: 5,
      onSale: true,
    },
  ];

  return (
    <div className="relative">
      {/* Background soybean image - responsive positioning */}
      <img
        src={soya_2}
        alt="Soybean"
        className="absolute -right-4 sm:-right-6 md:-right-10 -top-20 sm:-top-40 md:-top-66 w-32 sm:w-40 md:w-90 z-10 opacity-60 md:opacity-100"
      />

      <section className="py-8 sm:py-12 md:py-16 bg-gray-50 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-60">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 mt-20">
            <div className="flex flex-col items-start gap-4 mb-4 md:mb-0">
              <div className="badge badge-ghost bg-gray-200 badge-lg py-2  text-green-800 font-semibold">
                <span className="text-lg ">
                  {" "}
                  <img src={leaf} className="w-7 h-7" />
                </span>
                <span className="ml-2 text-sm sm:text-base">
                  Buy Organic Products
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-950 font-bold leading-tight">
                Featured Products
              </h2>
            </div>
            <button className="btn btn-outline text-green-800 border-green-800 rounded-full gap-2 hover:text-white hover:bg-green-800">
              View More Products
              <ArrowUpRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Decorative jute image - responsive positioning */}
          <img
            src={jute}
            className="absolute top-16 sm:top-20 md:top-70 left-0 w-24 sm:w-32 md:w-46 opacity-60 md:opacity-100"
            alt="Jute decoration"
          />

          {/* Products Grid - responsive columns and spacing */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={`${product.id}-${index}`}
                productImage={product.productImage}
                productName={product.productName}
                currentPrice={product.currentPrice}
                originalPrice={product.originalPrice}
                rating={product.rating}
                onSale={product.onSale}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
