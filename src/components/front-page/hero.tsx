"use client";

import { MorphingText } from "@/components/ui/morphing-text";
import Image from "next/image";
import CurvedLoop from "../CurvedLoop";

const HERO_IMAGE_PATH = "/nayan-kasturi/transparent-hero-image.png";

export default function Hero() {
  const SKILLS = [
    "Web Developer",
    "App Developer",
    "Backend Developer",
    "Bio-informatician",
    "Tech Enthusiast",
  ];

  return (
    <section className="h-dvh w-dvw bg-gradient-to-t from-blue-400 via-blue-400/70 to-white/50 flex flex-col justify-end items-center relative overflow-hidden">
      <div className="absolute top-[25%] left-1/2 w-full -translate-x-1/2 md:top-8 md:left-8 md:translate-x-0 z-20 max-w-[90%]">
        <div className="relative inline-block md:mt-32">
          <div className="absolute" />
          <h2 className="relative text-xs sm:text-sm md:text-base font-semibold text-black px-4 py-2">
            <MorphingText texts={SKILLS} className="text-4xl lg:text-7xl" />
          </h2>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-4/5 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[18vw] sm:text-[15vw] lg:text-[15vw] opacity-80 font-extrabold text-white/30 tracking-widest leading-none">
          RAANNA
        </span>
      </div>
      <div className="relative h-full w-full flex flex-col items-center justify-end p-4">
        <div className="relative w-full h-full flex items-end justify-center">
          <Image
            src={HERO_IMAGE_PATH}
            alt="Nayan Kasturi Hero Image"
            fill
            className="object-contain object-bottom z-10"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
        <div className="relative z-20 text-center mt-[-50px] md:mt-[-100px] lg:mt-[-150px] mb-6 md:mb-12">
          <h1 className="relative text-5xl lg:text-9xl tracking-tighter font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-white via-white/70 to-white/20 z-30">
            NAYAN <br className="md:hidden" /> KASTURI
          </h1>

          {/* Curved Text Below */}
          <div className="absolute" />
          <CurvedLoop
            marqueeText="• JACK OF ALL TRADES, MASTER OF NONE, BUT OFTENTIMES BETTER THAN MASTER OF ONE! •"
            speed={3}
            curveAmount={0}
            interactive={true}
            className="font-semibold text-black select-none"
          />
        </div>
      </div>
    </section>
  );
}
