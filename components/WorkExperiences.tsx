"use client";
import { motion } from "framer-motion";
import ExperienceCardACC from "./ExperienceCardACC";
import ExperienceCardApi from "./ExperienceCardApi";
import ExperienceCardBIT from "./ExperienceCardBIT";
import ExperienceCardJul from "./ExperienceCardJul";
import ExperienceCardLT from "./ExperienceCardLT";
import ExperienceCardOSS from "./ExperienceCardOSS";
type Props = {};

function WorkExperiences({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col md:flex-row relative h-screen text-left max-w-full 
      px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      {" "}
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiences
      </h3>
      <div
        className="absolute top-10 w-full flex space-x-5 overflow-x-scroll p-10 pt-20 snap-x snap-mandatory scrollbar
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/60"
      >
        <ExperienceCardACC />
        <ExperienceCardApi />
        <ExperienceCardJul />
        <ExperienceCardOSS />
        <ExperienceCardLT />
        <ExperienceCardBIT />
      </div>
    </motion.div>
  );
}

export default WorkExperiences;
