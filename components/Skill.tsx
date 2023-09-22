import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  logoUrl: string;
  techLevel: string;
  style?: string;
};

function Skill({ directionLeft, logoUrl, techLevel, style }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={logoUrl ? logoUrl : ""}
        className={`rounded-full border border-gray-700  object-contain w-24 h-24 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out  ${
          style ? style : ""
        }`}
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out 
                   group-hover: bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl font-bold text-black opacity-100">
            {techLevel ? techLevel : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
