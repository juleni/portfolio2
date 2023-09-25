"use client";
import { motion } from "framer-motion";
const config = require("../next.config");
type Props = {};

function ExperienceCardJul({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px]
                 xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-60 cursor-pointer 
                 transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-2xl xl:w-[200px] xl:h-[200px] object-center object-scale-down"
        src={config.basePath + "/slovakhouses.png"}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-[#f7ab0a]/70">
          Real Estate Agent
        </h4>
        <p className="font-bold text-xl mt-1 text-slate-300">
          Own business (Slovakia)
        </p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src={config.basePath + "/logo-html.png"}
            alt="HTML"
          />
          <img
            className="h-10 w-10 rounded-full"
            src={config.basePath + "/logo-css.png"}
            alt="CSS"
          />
          <img
            className="h-10 w-10 rounded-full"
            src={config.basePath + "/logo-js.png"}
            alt="JavaScript"
          />
        </div>
        {/** https://1000logos.net/allpng/*/}

        <p className="uppercase py-3 text-gray-400">
          10/2006 - 10/2016 ... 10 years
        </p>
        <ul className="list-disc space-y-2 ml-5 text-md">
          <li>Operation and implementation of own real estate website</li>
          <li>Brokerage and sale of real estate</li>
          <li>Dealing with formalities and other services</li>
          <li>Arranging the reconstruction of real estate</li>
        </ul>
      </div>
      <div className=" w-[500px] md:w-[600px] xl:w-[900px] relative top-[-80%] bg-[#f7ab0a]/10 left-0 h-2 -skew-y-12" />
    </article>
  );
}

export default ExperienceCardJul;
