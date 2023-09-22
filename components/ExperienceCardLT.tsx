"use client";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCardLT({}: Props) {
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
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-center object-scale-down"
        src="images/livetrade.png"
        alt="LiveTrade s.r.o."
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-[#f7ab0a]/70">
          Backend developer
        </h4>
        <p className="font-bold text-xl mt-1 text-slate-300">
          LiveTrade s.r.o. (Czech Republic)
        </p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="images/logo-html.png"
            alt="HTML"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="images/logo-css.png"
            alt="CSS"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="images/logo-js.png"
            alt="JavaScript"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="images/logo-java.png"
            alt="JAVA 2"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="images/logo-postgresql.png"
            alt="Postgre SQL"
          />
        </div>
        {/** https://1000logos.net/allpng/*/}

        <p className="uppercase py-3 text-gray-400">
          03/2002 - 02/2003 ... 1 year
        </p>
        <ul className="list-disc space-y-2 ml-5 text-md">
          <li>Green field project</li>
          <li>
            Auction system for public procurement of state administration.
          </li>
          <li>DB design and implementation on PostgreSQL database</li>
          <li>Business logic implementation - java, pl/sql</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCardLT;
