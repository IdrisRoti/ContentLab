import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({ subsets: [], weight:["600"] });

export default function Logo() {
  return (
    <div className={rajdhani.className}><span className="uppercase">Content Lab</span></div>
  )
}
