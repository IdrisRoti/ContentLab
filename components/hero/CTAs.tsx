import { FaArrowRightLong } from "react-icons/fa6";
import { RxVideo } from "react-icons/rx";

export default function CTAs() {
  return (
    <div className='w-full flex items-center justify-center mt-3 font-semibold text-sm'>
        <button className='bg-white mr-2 rounded-full h-[2.5rem] w-[9rem] text-black flex items-center justify-center group'><h3>Join Waitlist</h3><span className="ml-2 -rotate-45 group-hover:rotate-0 transition-all"><FaArrowRightLong /></span></button>
        <button className='rounded-full h-[2.5rem] w-[9rem] border border-gray-300/20 flex items-center justify-center hover:border-gray-300/60 transition-all'><span className="mr-2"><RxVideo /></span><h3>Watch Demo</h3></button>
    </div>
  )
}
