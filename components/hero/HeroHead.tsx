import React from "react";

export default function HeroHead() {
  return (
    <div className="text-center text-gray-300 px-2 md:px-0">
      <h1 className="sm:text-[2.5rem] md:text-[4rem] text-[2rem] font-[300] max-w-7xl mx-auto">
        <div className="md:-mb-4">
          Write better,{" "}
          <span className="px-2 cyan_textbg">
            faster
          </span>{" "}
          with AI.
        </div>
        <div>
          AI-powered copywriting that{" "}
          <span className="rose_textbg px-2 -py-4">
            converts
          </span>
        </div>
      </h1>
      <p className="py-3 text-gray-300">
        Generate engaging copy in seconds, say goodbye to writer’s block
      </p>
    </div>
  );
}
