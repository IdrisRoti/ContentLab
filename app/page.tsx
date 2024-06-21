import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return ( 
    <div>
      <Hero />
      <Benefits />
      <div className="w-20 md:w-40 h-[60vw] -rotate-45 bg-slate-600/30 rounded-full absolute top-[20rem] md:top-0 left-[6rem] blur-[40px] md:blur-[50px] " />
    </div>
  );
}
