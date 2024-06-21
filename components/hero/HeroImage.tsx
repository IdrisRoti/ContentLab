import Image from 'next/image'
// import HeroImage from ""

export default function HeroImage() {
  return (
   <div className='relative lg:w-[70vw] md:w-[80vw] w-[90vw] mx-auto md:h-[80vh] h-[60vw] mt-16'>
     <Image src="/hero-image.png" fill alt="Hero Image" />  
   </div>
  )
}
