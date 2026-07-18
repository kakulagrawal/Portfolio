import { motion } from "framer-motion";

const colorMap = {
  cyan: {
    bar: "from-cyan-400 to-sky-500",
    glow: "shadow-[0_0_18px_rgba(34,211,238,0.45)]",
    text: "text-cyan-300",
  },
  indigo: {
    bar: "from-indigo-400 to-violet-500",
    glow: "shadow-[0_0_18px_rgba(99,102,241,0.45)]",
    text: "text-indigo-300",
  },
  emerald: {
    bar: "from-emerald-400 to-teal-500",
    glow: "shadow-[0_0_18px_rgba(16,185,129,0.45)]",
    text: "text-emerald-300",
  },
};

function SkillBar({ skill, index, color }) {
  const theme = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group"
    >
      {/* Title */}

      <div className="mb-2 flex items-center justify-between">
        <h4 className="font-medium text-white transition-colors duration-300 group-hover:text-white">
          {skill.name}
        </h4>

        <span className={`text-sm font-semibold ${theme.text}`}>
          {skill.level}%
        </span>
      </div>

      {/* Progress Track */}

      <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2 + index * 0.1,
            ease: "easeOut",
          }}
          className={`relative h-full rounded-full bg-gradient-to-r ${theme.bar} ${theme.glow}`}
        >
          {/* Moving Highlight */}

          <motion.div
            animate={{
              x: ["-100%", "250%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-full w-10 bg-white/40 blur-sm"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SkillBar;