import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

const icons = [
  {
    icon: <FaReact />,
    color: "#61DAFB",
    radius: 235,
    duration: 12,
    size: "text-3xl",
  },
  {
    icon: <FaNodeJs />,
    color: "#68A063",
    radius: 205,
    duration: 16,
    size: "text-3xl",
  },
  {
    icon: <SiMongodb />,
    color: "#4DB33D",
    radius: 175,
    duration: 20,
    size: "text-2xl",
  },
  {
    icon: <SiJavascript />,
    color: "#F7DF1E",
    radius: 145,
    duration: 24,
    size: "text-2xl",
  },
];

const OrbitingIcons = () => {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: item.duration,
          }}
        >
          <motion.div
            style={{
              transform: `translateY(-${item.radius}px)`,
            }}
            whileHover={{
              scale: 1.25,
            }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,.35)]"
          >
            <span
              style={{
                color: item.color,
              }}
              className={item.size}
            >
              {item.icon}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default OrbitingIcons;