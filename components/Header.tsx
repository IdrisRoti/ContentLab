import { Rajdhani } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaOpenid } from "react-icons/fa";
import Link from "next/link";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <div className="bg-transparent fixed top-0 left-0 right-0 z-[999]">
      <nav className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center px-4 md:py-8 py-4">
          <Link href="/" className={rajdhani.className}>
          <div className="items-center hidden md:flex">
          <FaOpenid className="w-8 h-8 mr-2" />
          <span className="uppercase cursor-pointer">Content Lab</span>
          </div>
            <span className="sr-only">Content Lab logo</span>
            <FaOpenid className="w-8 h-8 md:hidden" />
          </Link>

          <div className="p-1.5 flex items-center justify-center border border-gray-300/10 rounded-full text-sm font-semibold bg-gradient-to-r from-gray-600/15 to-gray-600/30 cursor-pointer">
            <button className=" border border-gray-300/20 rounded-full md:mr-1.5 px-4 py-2 bg-gray-600/30 text-gray-400 transition-all duration-500  hover:bg-gray-600/10 hover:border-gray-300/50 hover:text-white">
              Log in
            </button>

            <div className="px-4 py-2 bg-white text-black rounded-full md:flex items-center justify-center group hidden">
              <span>Join Waitlist</span>
              <span className="ml-2 -rotate-45 group-hover:rotate-0 transition-all duration-500"><FaArrowRightLong /></span>
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  );
}
