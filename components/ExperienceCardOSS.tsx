"use client";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCardOSS({}: Props) {
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
        src="images/oss.png"
        alt="OpenSubsystems s.r.o."
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-[#f7ab0a]/70">
          Fullstack developer
        </h4>
        <p className="font-bold text-xl mt-1 text-slate-300">
          OpenSubsystems s.r.o. (Slovakia)
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
            src="images/logo-mysql.png"
            alt="MySQL"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="images/logo-postgresql.png"
            alt="Postgre SQL"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="images/logo-oracle.png"
            alt="ORACLE"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="images/logo-db2.png"
            alt="IBM DB2"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="images/logo-mssql.png"
            alt="MS SQL Server"
          />
        </div>
        {/** https://1000logos.net/allpng/*/}

        <p className="uppercase py-3 text-gray-400">
          06/2003 - 10/2006 ... 3+ years
        </p>
        <ul className="list-disc space-y-2 ml-5 text-md">
          <li>Green field open-source project.</li>
          <li>
            DB design and implementation, supporting most known relational
            databases
          </li>
          <li>OpenCore implementation - application core</li>
          <li>
            OpenPatterns implementation - repository of common application
            functionality patterns
          </li>
          <li>OpenSecurity implementation - Security module</li>
          <li>
            OpenSearch implementation - module for filtering and searching for
            data
          </li>
          <li>Inventory management implementation - module for shopping</li>
        </ul>
      </div>
      <div className=" w-[500px] md:w-[600px] xl:w-[900px] relative top-[-95%] bg-[#f7ab0a]/10 left-0 h-2 -skew-y-12" />
    </article>
  );
}

export default ExperienceCardOSS;
