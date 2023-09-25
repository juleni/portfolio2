"use client";
import { motion } from "framer-motion";
const config = require("../next.config");
type Props = {};

function ExperienceCardApi({}: Props) {
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center object-scale-down"
        src={config.basePath + "/apiprodukt.png"}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-[#f7ab0a]/70">
          e-Shops admin, manager
        </h4>
        <p className="font-bold text-xl mt-1 text-slate-300">
          Apiprodukt s.r.o. (Slovakia)
        </p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src={config.basePath + "/logo-pohoda.png"}
            alt="Pohoda Stormware"
          />
          <img
            className="h-10 w-10 rounded-full"
            src={config.basePath + "/logo-wexbo.png"}
            alt="WEXBO - e-shop"
          />
          <img
            className="h-10 w-10 rounded-full"
            src={config.basePath + "/logo-html5.svg"}
            alt="HTML 5"
          />
          <img
            className="h-10 w-10 rounded-full"
            src={config.basePath + "/logo-css3.svg"}
            alt="CSS 3"
          />
          <img
            className="h-10 w-10 rounded-full"
            src={config.basePath + "/logo-opencart.png"}
            alt="OpenCart"
          />
          <img
            className="h-10 w-10 rounded-full"
            src={config.basePath + "/logo-mysql.png"}
            alt="MySQL"
          />
        </div>
        {/** https://1000logos.net/allpng/*/}

        <p className="uppercase py-3 text-gray-400">
          10/2016 - 05/2021 ... 5 years
        </p>
        <ul className="list-disc space-y-2 ml-5 text-md">
          <li>e-Shops administration</li>
          <li>B2C/B2B orders processing </li>
          <li>Complaints handling</li>
          <li>Consulting</li>
          <li>
            Registration of raw materials for the production of beeswax
            foundations
          </li>
          <li>
            Organization in the unloading and storage of goods from suppliers
          </li>
          <li>Translations and creation of manuals for beekeeping equipment</li>
        </ul>
      </div>
      <div className=" w-[500px] md:w-[600px] xl:w-[900px] relative top-[-95%] bg-[#f7ab0a]/10 left-0 h-2 -skew-y-12" />
    </article>
  );
}

export default ExperienceCardApi;
