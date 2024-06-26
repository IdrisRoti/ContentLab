"use client";

import { useState } from "react";
import MonthlyPricing from "./MonthlyPricing";
import YearlyPricing from "./YearlyPricing";

export default function Pricing() {
  const [priceType, setPriceType] = useState("Monthly");

  const priceTypes = ["Monthly", "Yearly"];

  return (
    <section className="contain px-6 md:px-0">
      <h2 className="header_text">
        Choose a <span className="rose_textbg">pricing</span> plan
      </h2>
      <div className="w-full flex items-center justify-center">
        <div className="mt-12 p-1.5 flex items-center justify-center border border-gray-300/10 rounded-full bg-gray-600/10">
          {priceTypes.map((type, i) => (
            <span
              key={i}
              onClick={() => setPriceType(type)}
              className={`${
                priceType === type && "bg-white text-black"
              } px-3 py-2 rounded-full cursor-pointer text-sm font-semibold`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12 max-w-6xl mx-auto">
        {priceType === "Monthly" ? <MonthlyPricing priceType={priceType} /> : <YearlyPricing priceType={priceType}/>}
      </div>


    </section>
  );
}
