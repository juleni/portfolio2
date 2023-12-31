"use client";

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header
      className="sticky top-0 p-5 ml-8 flex items-start justify-between 
                 max-w-7xl mx-auto z-20 xl:items-center"
    >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          target="_blank"
          url="https://github.com/juleni"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://sk.linkedin.com/in/julian-legeny-45259b208"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://instagram.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          href="https://juleni.github.io/blog/"
          url="https://blog.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          href="#contact"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          <a href="#contact">Get In Touch</a>
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
