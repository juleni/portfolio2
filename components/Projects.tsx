"use client";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            className="h-screen w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center 
                       justify-center p-20 md:p-44"
            key={i}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="apiprodukt.png"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Personal project {i + 1}:
                </span>{" "}
                AI Image Generator
              </h4>
              <p className="text-lg text-justify">
                AI Image generator uses OpenAI API of trained neural network
                DALL-E to create images from text captions.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;