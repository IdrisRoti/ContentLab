import { Rajdhani } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <div className="bg-transparent fixed top-0 left-0 right-0 z-[999]">
      <nav className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center px-4 md:py-8 py-4">
          <div className={rajdhani.className}>
            <span className="uppercase cursor-pointer">Content Lab</span>
          </div>
{/* 
          <div className="flex items-center justify-center border border-gray-300/20 h-[3rem] py-[.25rem] w-[14.75rem] px-[.25rem] rounded-full text-sm font-semibold bg-gradient-to-r from-gray-600/15 to-gray-600/30 cursor-pointer">
            <button className=" border border-gray-300/20 rounded-full mr-[.25rem] w-[5rem] h-[2.5rem] bg-gray-600/30 text-gray-400 transition-colors hover:text-white hover:bg-gradient-to-r hover:from-rose-500 hover:to-cyan-300">
              Log in
            </button>

            <div className=" w-[9rem] h-[2.5rem] bg-white text-black rounded-full flex items-center justify-center group">
              <span>Join Waitlist</span>
              <span className="ml-2 -rotate-45 group-hover:rotate-0 transition-all"><FaArrowRightLong /></span>
            </div>
          </div> */}
          <div className="p-1.5 flex items-center justify-center border border-gray-300/10 rounded-full text-sm font-semibold bg-gradient-to-r from-gray-600/15 to-gray-600/30 cursor-pointer">
            <button className=" border border-gray-300/20 rounded-full mr-1.5 px-4 py-2 bg-gray-600/30 text-gray-400 transition-colors hover:text-white hover:bg-gradient-to-r hover:from-rose-500 hover:to-cyan-300">
              Log in
            </button>

            <div className="px-4 py-2 bg-white text-black rounded-full flex items-center justify-center group">
              <span>Join Waitlist</span>
              <span className="ml-2 -rotate-45 group-hover:rotate-0 transition-all"><FaArrowRightLong /></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
