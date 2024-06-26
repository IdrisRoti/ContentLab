import { reviews } from "@/data";
import Image from "next/image";
import React from "react";

export default function Reviews() {
  return (
    <section className="contain px-6 lg:px-0 relative">
      <h2 className="header_text mb-12">What people are saying</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 grid-cols-1">
        {reviews.map((review) => {
          const { id, content, name, role, img } = review;
          return (
            <article key={id} className=" bg-gray-900/30 hover:bg-gray-900/50 text-left p-6 rounded-2xl border border-gray-300/10 shadow-inner transition-all duration-500 ">
              <p className="text-gray-300">
                {content}
              </p>
              <div className="mt-3 flex items-center">
                <Image
                  src={img}
                  alt={name}
                  width={50}
                  height={50}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h3>{name}</h3>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
