"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function HeroHead() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      tl.fromTo(".header-text", {scale:0.7}, { opacity: 1, scale: 1, duration: 1 });
      tl.fromTo(".sub-head", {y:20}, { opacity: 1, y: 0, duration: 1 }, "-=0.6");
    },
    { scope: container }
  );  

  return (
    <div ref={container} className="text-center text-gray-300 px-6 md:px-0">
      <h1 className="header-text opacity-0 sm:text-[2.5rem] md:text-[4rem] text-[2rem] font-[300] max-w-7xl mx-auto">
        <div className="md:-mb-4">
          Write better, <span className="px-2 cyan_textbg">faster</span> with
          AI.
        </div>
        <div>
          AI-powered copywriting that{" "}
          <span className="rose_textbg px-2 -py-4">converts</span>
        </div>
      </h1>
      <p className="sub-head opacity-0 py-3 text-gray-300">
        Generate engaging copy in seconds, say goodbye to writer’s block
      </p>
    </div>
  );
}
