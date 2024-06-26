import Benefits from "@/components/benefits/Benefits";
import EarlyAccess from "@/components/earlyAccess/EarlyAccess";
import FAQs from "@/components/faq/FAQs";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricing/Pricing";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
  return ( 
    <div>
      <Hero />
      <Benefits />
      <Reviews />
      <Pricing />
      <FAQs />
      <EarlyAccess />
      <div className="w-20 md:w-40 h-[60vw] -rotate-45 bg-slate-600/30 rounded-full absolute top-[20rem] md:top-0 left-[6rem] blur-[40px] md:blur-[50px] " />
    </div>
  );
}
