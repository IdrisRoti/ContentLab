"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxVideo } from "react-icons/rx";

export default function CTAs() {
  gsap.registerPlugin(useGSAP)

  useGSAP(
    ()=>{

      const tl = gsap.timeline({defaults: {ease: "power2.inOut"}});

      tl.fromTo(".cta", {scale: 1.2}, {scale: 1, opacity: 1, duration: 1, delay: 1})

    })
  
  return (
    <div className='cta opacity-0 w-full flex items-center justify-center mt-3 font-semibold text-sm'>
        <button className='bg-white mr-2 rounded-full h-[2.5rem] w-[9rem] text-black flex items-center justify-center group'><h3>Join Waitlist</h3><span className="ml-2 -rotate-45 group-hover:rotate-0 transition-all"><FaArrowRightLong /></span></button>
        <button className='rounded-full h-[2.5rem] w-[9rem] border border-gray-300/20 flex items-center justify-center hover:border-gray-300/60 transition-all'><span className="mr-2"><RxVideo /></span><h3>Watch Demo</h3></button>
    </div>
  )
}
