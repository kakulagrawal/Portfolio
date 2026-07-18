import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
  HiOutlineCpuChip,
} from "react-icons/hi2";

const stats = [
  {
    icon: HiOutlineRocketLaunch,
    value: "3+",
    label: "Projects",
  },
  {
    icon: HiOutlineCodeBracket,
    value: "600+",
    label: "DSA Problems",
  },
  {
    icon: HiOutlineCpuChip,
    value: "MERN",
    label: "Primary Stack",
  },
];

function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-lg">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.75 + index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.04,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />

            {/* Icon */}

            <div className="mb-5 inline-flex rounded-xl bg-cyan-400/10 p-3">
              <Icon className="text-2xl text-cyan-300" />
            </div>

            {/* Value */}

            <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-white">
              {stat.value}
            </h3>

            {/* Label */}

            <p className="mt-2 text-sm text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default HeroStats;