"use client";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px]
                 xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-60 cursor-pointer 
                 transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center object-scale-down"
        src="apiprodukt.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Managerial position</h4>
        <p className="font-bold text-2xl mt-1">Apiprodukt s.r.o.</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.stormware.sk/image/ostatni/BtnPOHODA.png"
            alt="Pohoda Stormware"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://wexbo.com/files/images/page_logo.png"
            alt="WEXBO - e-shop"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
            alt="HTML"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="logo_css.png"
            alt="CSS"
          />
        </div>
        {/** https://1000logos.net/allpng/*/}

        <p className="uppercase py-5 text-gray-300">10/2016 - 05/2021</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
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
    </article>
  );
}

export default ExperienceCard;
