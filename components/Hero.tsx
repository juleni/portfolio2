"use client";

import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import introImg from "./assets/pic-intro.png";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Julian Legeny",
      "I'm a Fullstack Programmer",
      "I'm Tech Enthusiast",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={introImg}
        className="relative object-cover"
        alt="Julian Legeny"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software engineer
        </h2>
        <h1 className="text-4xl lg:text-6xl px-10 text-[#f7ab0a]/50">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experiences">
            <button className="heroButton">Experiences</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
