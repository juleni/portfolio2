"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

enum Level {
  LOW = "basics",
  MID = "middle",
  HIGH = "high",
}

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row  mx-auto
                 max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute uppercase top-36 tracking-[3px] text-gray-500 text-sm">
        Hover over an icon for knowledge level
      </h3>
      <div className="grid grid-cols-4 gap-5 mt-[90px]">
        <Skill logoUrl="images/logo-html5.svg" techLevel={Level.HIGH} />
        <Skill logoUrl="images/logo-css3.svg" techLevel={Level.MID} />
        <Skill logoUrl="images/logo-js.png" techLevel={Level.HIGH} />
        <Skill logoUrl="images/logo-ts.png" techLevel={Level.MID} />
        <Skill
          logoUrl="images/logo-nodejs.svg"
          techLevel={Level.MID}
          style="p-3 bg-slate-100"
        />
        <Skill
          logoUrl="images/logo-react.svg"
          techLevel={Level.HIGH}
          style="p-1 bg-slate-100"
        />
        <Skill
          logoUrl="images/logo-nextjs.svg"
          techLevel={Level.MID}
          style=""
        />
        <Skill
          logoUrl="images/logo-nestjs.svg"
          techLevel={Level.MID}
          style="p-2 bg-white"
        />
        <Skill logoUrl="images/logo-java.png" techLevel={Level.MID} />
        <Skill
          logoUrl="images/logo-spring.png"
          techLevel={Level.LOW}
          style="p-1 bg-gray-200"
        />
        <Skill logoUrl="images/logo-csharp.svg" techLevel={Level.LOW} />
        <Skill logoUrl="images/logo-python.svg" techLevel={Level.LOW} />
        <Skill logoUrl="images/logo-azure.svg" techLevel={Level.LOW} />
        <Skill logoUrl="images/logo-sql.png" techLevel={Level.HIGH} />
        <Skill logoUrl="images/logo-pohoda.png" techLevel={Level.MID} />
        <Skill logoUrl="images/logo-wexbo.png" techLevel={Level.HIGH} />
      </div>
    </motion.div>
  );
}

export default Skills;
