import React from "react";

import preservativesIcon from "../assets/images/Icons/preservatives.png";
import highProteinIcon from "../assets/images/Icons/high_protein.png";
import heartHealthyIcon from "../assets/images/Icons/healthy_heart.png";
import lactoseFreeIcon from "../assets/images/Icons/Lactose_free.png";
import fiberHighIcon from "../assets/images/Icons/Fiber_high.png";

export const Benefits = () => {
  const benefits = [
    {
      title: "No Preservatives",
      description:
        "Products that do not contain any synthetic or preservatives.",
      icon: preservativesIcon,
      variant: "tan",
    },
    {
      title: "High in Protein",
      description:
        "Complete plant-based protein, rich in essential amino acids.",
      icon: highProteinIcon,
      variant: "green",
    },
    {
      title: "Heart-Healthy",
      description: "Soy can help reduce cholesterol, improve heart health.",
      icon: heartHealthyIcon,
      variant: "tan",
    },
    {
      title: "Lactose Free",
      description: "Perfect for those who are lactose intolerant.",
      icon: lactoseFreeIcon,
      variant: "green",
    },
    {
      title: "Rich In Fiber",
      description:
        "Supports digestion, strengthens bones, and overall wellness.",
      icon: fiberHighIcon,
      variant: "tan",
    },
  ];

  return (
    <section className="py-6 md:py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center tracking-[0.15em] font-extrabold text-yellow-950 mb-8 md:mb-12">
          SOYA BASED LACTOSE FREE PRODUCTS FOR EVERYONE AT ANY AGE
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 *:size-48 *:w-56 *:mx-auto w-6/6 mx-auto">
          {benefits.map((item) => {
            const isGreen = item.variant === "green";
            const cardBase =
              "rounded-3xl p-6 flex flex-col items-center text-center shadow-md";
            const bgClass = isGreen ? "bg-green-800" : "bg-[#cfa785]";
            const titleClass = isGreen ? "text-success" : "text-yellow-950";
            const descClass = isGreen ? "text-white/90" : "text-white";

            return (
              <div key={item.title} className={`${cardBase} ${bgClass}`}>
                <div className="w-16 h-16 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h4
                  className={`font-semibold text-sm md:text-base mb-1 ${titleClass}`}
                >
                  {item.title}
                </h4>
                <p className={`text-[10px] leading-snug ${descClass}`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
