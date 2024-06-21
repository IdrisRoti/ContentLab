import { benefits } from "@/data";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className="max-w-7xl mx-auto mt-24 md:mt-40 text-center">
      <h2 className="text-3xl md:text-5xl text-center">
        Say <span className="cyan_textbg">goodbye</span> to writer’s block
      </h2>
      <div className="grid md:grid-cols-3 grid-rows-subgrid gap-12 mt-16 px-4 md:px-0">

        {benefits.map((benefit)=>{
            const {id, title, description, img} = benefit;

            return (
                <article key={id}>
                    <div className="mb-14 overlay opacity-70 w-full h-[200px] relative overflow-hidden border border-gray-300/20 border-b-0 rounded-tl-xl rounded-tr-xl">
                      <Image className="object-cover" src={img || "/benefit2.jpg"} fill alt={title} />
                    </div>
                    <div className="grid row-span-2 grid-rows-subgrid">
                      <h2 className="text-2xl md:text-3xl">{title}</h2>
                      <p className="mt-6 max-w-[80%] mx-auto text-gray-300">
                        {description}
                      </p>
                    </div>
                  </article>
            )
        })}
      </div>

    </section>
  );
}
