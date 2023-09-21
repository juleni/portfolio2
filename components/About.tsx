"use client";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col md:flex-row relative h-screen text-center md:text-left 
                 max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About Me
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="pic-about.jpg"
        className="-mb-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg 
                   md:w-64 md:h-95 xl:w-[480px] xl:h-[640px]"
      ></motion.img>
      <div className="space-y-5 px-0 md:px-10 mt-5">
        {/**
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          about me
        </h4>
  */}
        <div
          className="h-[350px] md:h-[600px] xl:h-full overflow-y-auto scrollbar
                      scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/60"
        >
          <p className="text-base">
            Ever since I was a child, during my studies at primary school (90s
            of the last century) I was enchanted by computers - in that time
            8-bit Didactics Alpha, where I gained my first experience with
            programming in the Basic programming language. Later, while studying
            at the Secondary Grammar School, I bought my first computer PP-06.3
            (PC XT), on which I learned to work in MS-DOS by my own efforts and
            started creating my first programs in Turbo Basic and Pascal.
            <br />
            I continued my IT direction during my studies at the University of
            Žilina. At that time, I programmed in Delphi, C++, but I was
            fascinated by JAVA, which began to grow and develop at that time, as
            well as working with relational databases and SQL. In the fourth
            year, I started programming web together with a group of four other
            guys. We used JAVA, JSP, Pearl, MySQL, JavaScript, HTML, CSS
            technologies.
            <br />
            After graduating from university, I worked as a full-time programmer
            for the next five years, until I got married and then I stayed at
            home and took care of the children, 10 years dealing with real
            estate activities and next 5 years working as web administrator and
            manager in the largest beekeeping store in Slovakia. I still missed
            programming during this long period, but due to time and family
            reasons, I could no longer fully devote myself to it.
            <br />
            From the end of 2019, I started to think about returning to
            programming, since I no longer saw any knowledge shift in my work at
            the time.
            <br />
            In the evenings and my free time, I started studying the JAVA and
            JavaScript languages again, especially the changes that took place
            during that time. I was very interested in the Java Spring, as well
            as Node.js and React framework.
            <br />
            From May 2021, I started working as a full-stack developer in an
            international IT corporation, where I participated in various
            projects. I programmed in JavaScript, Typescript, React, a bit of C#
            and Azure. I learned agile development as well.
            <br />
            I created a few of my personal projects in React to try and learn
            new things.
            <br />I still really enjoy programming despite my 15-year hiatus,
            and I would like to continue to do so in the future.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
