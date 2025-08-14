import React from "react";
import {
  EyeIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export const ProductCard = ({
  productImage,
  productName,
  currentPrice,
  originalPrice,
  rating = 5,
  onSale = false,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-400 overflow-hidden hover:border-1 hover:border-green-800 hover:shadow-lg transition-all duration-200  ease-in">
      {/* Top Section - Product Image and Sale Badge */}
      <div className="relative p-1">
        {/* Sale Badge */}
        {onSale && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-gray-300 text-black px-4 rounded text-xs font-medium">
              Sale
            </span>
          </div>
        )}

        {!onSale && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-red-600 text-white px-2 rounded text-xs font-medium">
              Stack Out
            </span>
          </div>
        )}

        {/* Product Image Container */}
        <div className="relative flex items-center justify-center rounded-lg group">
          {/* Product Image */}
          <div className="relative group">
            <img
              src={productImage}
              alt={productName}
              className="w-50 h-50 object-contain p-4 transition-all duration-300"
            />

            {/* Hover Action Buttons */}
            <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-700/50 rounded-lg mt-3">
              {/* View Button */}
              <button className="bg-white rounded-lg p-2 hover:bg-green-50 transition-colors duration-200">
                <EyeIcon className="w-5 h-5 text-green-800" />
              </button>

              {/* Add to Cart Button */}
              <button className="bg-white rounded-lg p-2 hover:bg-green-50 transition-colors duration-200">
                <ShoppingCartIcon className="w-5 h-5 text-green-800" />
              </button>

              {/* Favorite Button */}
              <button className="bg-green-800 rounded-lg p-2 hover:bg-green-700 transition-colors duration-200">
                <HeartIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
        <hr className="w-40 mx-auto" />
      </div>

      {/* Bottom Section - Product Details */}
      <div className="p-4 text-center">
        {/* Rating Stars */}
        <div className="flex items-center justify-center mb-2">
          {[...Array(rating)].map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-green-800 mb-2">{productName}</h3>

        {/* Pricing */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-gray-900 text-lg font-medium number">
            ₹{currentPrice}
          </span>
          {originalPrice && originalPrice > currentPrice && (
            <span className="text-red-500 text-lg line-through number">
              ₹{originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
