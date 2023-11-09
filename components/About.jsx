import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./shared/SectionTitle";

export default function About() {
  return (
    <div className="mx-auto my-12 md:my-24 md:max-w-7xl">
      <div className="flex flex-col items-center gap-16 px-4 py-10 md:gap-32 md:flex-row md:px-0">
        <div className="relative h-full md:w-1/2">
          <Image
            src="/about.png"
            alt=""
            width={500}
            height={500}
            className=""
          />
          <div className="absolute z-50 flex items-center gap-2 px-6 py-2 text-white bg-red-500 border-2 border-white -bottom-1 left-5 md:px-10 md:py-4 ring-1 ring-gray-100 md:bottom-20 md:left-0">
            <PlayCircleIcon className="w-7 h-7 md:w-10 md:h-10" />
            <h2 className="text-2xl md:text-3xl whitespace-nowrap">
              Watch Now
            </h2>
          </div>
        </div>
        <div className="w-full space-y-2 md:space-y-4 md:w-1/2">
          <SectionTitle rightDash={true}>About</SectionTitle>
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-4xl font-bold">
              Why Select Us for <br className="hidden md:block" /> Your
              Vacation?
            </h1>
            <p className="w-full font-medium text-gray-500 md:w-3/4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              exercitationem in repellat cupiditate quibusdam, consequatur quod.
              Minima unde cumque sit, vero expedita sint quas rem quae facere
              est dicta laudantium consequuntur architecto vitae ad temporibus
              aut? Inventore beatae earum culpa, <br /> <br /> officia dolorum
              veniam repellat facere laudantium, vitae, odio quas eum hic
              perferendis eos sapiente praesentium quaerat voluptatum. Veniam,
              facere totam. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Culpa, placeat fugit. Velit beatae iure sequi fugit eligendi
              explicabo officiis fuga alias id asperiores adipisci soluta,
              praesentium, dolor, officia aliquid. Excepturi.
              <br /> <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              tenetur maiores iure, fugiat doloremque officiis cupiditate maxime
              magnam numquam vitae dolorum neque asperiores animi voluptates
              veritatis atque magni, facilis hic. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. A magnam magni, voluptates deserunt
              tempore ipsam veritatis odio cumque. Pariatur optio nulla
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
