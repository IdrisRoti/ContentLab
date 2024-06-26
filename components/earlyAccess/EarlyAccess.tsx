import React from "react";

export default function EarlyAccess() {
  return (
    <section className="max-w-7xl mx-auto text-center mb-6 relative py-12 md:pt-20 px-3 md:px-0">
        <div className="flex items-center justify-center">
        <div className="hidden md:block w-16 h-2 bg-gradient-to-r from-rose-400 to-rose-600 -rotate-45 mr-3" />
        <h2 className="text-[4rem] md:text-[6rem] font-bold">Early Access</h2>
        </div>
      
      <p className="text-gray-400 font-semibold pb-4 max-w-xs mx-auto md:max-w-none">
        Welcome to{" "}
        <span className="text-white">the future of copywritting</span>. Get
        early access.
      </p>
      <form className="gradient-border md:border border-gray-300/20 md:w-auto max-w-2xl mx-auto rounded-full p-2 gap-3 md:gap-2 flex flex-col md:flex-row items-center justify-between font-semibold ">
        <div className="input flex ">
          <label htmlFor="name" className="mr-2">Name</label>
          <input id="name" type="text" />
        </div>
        <div className="input flex">
          <label htmlFor="email" className="mr-2">Email</label>
          <input id="email" type="email" />
        </div>
        <button type="button" className="border border-gray-300/20 rounded-full px-3 py-1.5 bg-gray-300/20 hover:bg-white hover:text-black text-gray-300 w-full   transition-all duration-500">Join Now</button>
      </form>
      <div className="absolute top-[40%] left-[30%] md:left-[40%] -z-10 h-1/2 aspect-square rounded-full bg-rose-600/20 blur-[60px]"/>
    </section>
  )
}
