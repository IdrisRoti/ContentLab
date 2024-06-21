import React from "react";
import HeroHead from "./HeroHead";
import CTAs from "./CTAs";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto m:pt-[10rem] pt-[8rem]">
      <HeroHead />
      <CTAs />
      <HeroImage />
    </section>
  );
}
