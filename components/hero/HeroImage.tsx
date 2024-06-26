"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

export default function HeroImage() {
  gsap.registerPlugin(useGSAP)

  useGSAP(()=>{

    gsap.fromTo(".hero-image", {y:40}, {y:0, opacity: 1, delay: 1.5, duration: 1})
  })

  return (
   <div className='hero-image opacity-0 relative lg:w-[70vw] md:w-[80vw] w-[90vw] mx-auto md:h-[80vh] h-[60vw] mt-16'>
     <Image src="/hero-image.png" fill alt="Hero Image" />  
   </div>
  )
}
