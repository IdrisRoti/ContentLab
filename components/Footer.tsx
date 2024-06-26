import Link from "next/link";
import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { Rajdhani } from "next/font/google";
import { FaOpenid } from "react-icons/fa";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <footer className="contain px-3 md:px-0 text-gray-300">
      <hr />
      <div className="flex items-center justify-between text-sm">
        <Link href="/" className={rajdhani.className}>
          <div className="flex items-center">
            <FaOpenid className="w-8 h-8 mr-2" />
            <span className="uppercase">Content Lab</span>
          </div>
        </Link>
        <div className="flex items-center">
          <Link href="https://x.com/IdrisRoti" className="mr-2">
            <RiTwitterXLine />
          </Link>{" "}
          <span>Built by Idris Roti</span>
        </div>
      </div>
      <div className="my-6 w-full h-[1px] bg-gradient-to-r from-gray-300/10 from-35% via-white to-gray-300/10 to-65%" />
    </footer>
  );
}
