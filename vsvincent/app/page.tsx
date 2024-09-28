import React from "react";
import Particles from "./components/particles";
import { LampContainer, LampDemo } from "./components/lamp";
import HeroNav from "./components/hero-nav";
import BreakLine from "./components/break-line";

const navigation = [
  { name: "Experience", href: "/experience" },
  //{ name: "Projects", href: "/projects" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
  { name: "CV", href: "/resume.pdf" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <Particles
        className="absolute inset-0 z-10 animate-fade-in pointer-events-none"
        quantity={100}
      />
     
      <LampContainer>
      <h1 className="z-1 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        vsvincent
      </h1>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I love designing and building software that helps sustain society and move it forward.
        </h2>
      </div>
      <BreakLine />
      <HeroNav navigation={navigation} />
      <BreakLine fadeLeft={true}/>
      </LampContainer>
    </div>
  );

}
