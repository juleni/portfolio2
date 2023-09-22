"use client";
import { motion } from "framer-motion";

type Props = {
  id: number;
  img: string;
  url: string;
  name: string;
  desc: string;
};

export default function ProjectCard({ id, img, url, name, desc }: Props) {
  return (
    <>
      <div>
        <div
          className="h-screen w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center 
                   justify-center p-20 md:p-44"
        >
          <a href={url} target="_blank">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={img}
              alt={name}
            />
          </a>
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl font-semibold text-center">
              <span className="underline decoration-[#f7ab0a]/50">
                Personal:
              </span>{" "}
              {name}
            </h4>
            <p className="text-lg text-justify">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
