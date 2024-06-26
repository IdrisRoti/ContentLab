"use client";

import { faqs } from "@/data";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function FAQs() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section className="contain px-6 md:px-0">
      <h2 className="header_text">Frequently asked questions</h2>
      <div className="max-w-2xl mx-auto text-left mt-6">
        {faqs.map((faq, i) => {
          const { id, title, description } = faq;

          return (
            <article
              onClick={() => setIndex((prev) => (prev === i ? null : i))}
              key={id}
              className="bg-gray-900/30 hover:bg-gray-400/10 border border-gray-300/10 rounded-2xl mb-5 transition-all duration-500"
            >
              <div className="p-3 md:p-5 font-bold cursor-pointer flex items-center justify-between text-sm md:text-base">
                <h3>{title}</h3>
                <FaPlus className={`${
                  i === index && "rotate-45" 
                } w-5 h-5`} />
              </div>
              <p
                className={`${
                  i === index ? "block" : "hidden"
                } p-3 md:p-5 pt-1 text-gray-300/60`}
              >
                {description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
