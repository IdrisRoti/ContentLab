import { benefits } from "@/data";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className="contain">
      <h2 className="header_text">
        Say <span className="cyan_textbg">goodbye</span> to writer’s block
      </h2>
      <div className="grid md:grid-cols-3 grid-rows-subgrid gap-12 mt-16 px-6 md:px-0">

        {benefits.map((benefit)=>{
            const {id, title, description, img} = benefit;

            return (
                <article key={id}>
                    <div className="mb-14 overlay opacity-70 hover:opacity-100 transition-all duration-500 w-full h-[200px] relative overflow-hidden border border-gray-300/20 border-b-0 rounded-tl-xl rounded-tr-xl">
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
