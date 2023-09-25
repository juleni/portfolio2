"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
type Props = {};

type ProjectType = {
  id: number;
  img: string;
  url: string;
  name: string;
  desc: string;
};

const projects = [
  {
    id: 1,
    img: "/image/projects/ai-image-generator.jpg",
    url: "https://ai-image-generator-brown.vercel.app/",
    name: "AI Image Generator",
    desc: "AI Image generator uses OpenAI API of trained neural network DALL-E to create images from text captions.",
  },
  {
    id: 2,
    img: "/image/projects/trello-clone.jpg",
    url: "https://trello-clone-juleni.vercel.app/",
    name: "GPT Trello Clone",
    desc: "Chat GPT Trello Clone allows to create, move, delete, search tasks and summarising them.",
  },
  {
    id: 3,
    img: "/image/projects/sorting-hat.jpg",
    url: "https://ai-sorting-hat.vercel.app/",
    name: "AI Sorting Hat",
    desc: "The sorting hat determines based on your answer to which of the four school Houses you belong most to. These four Houses are Gryffindor, Hufflepuff, Ravenclaw, and Slytherin.",
  },
];
function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-row text-left max-w-full 
                 justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
               scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/60"
      >
        <ProjectCard {...projects[0]} />
        <ProjectCard {...projects[1]} />
        <ProjectCard {...projects[2]} />
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12 z-1000" />
    </motion.div>
  );
}

export default Projects;
