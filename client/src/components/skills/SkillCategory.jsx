import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlineCommandLine,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import SkillBar from "./SkillBar";

const iconMap = {
  Frontend: HiOutlineCodeBracket,
  Backend: HiOutlineCommandLine,
  Tools: HiOutlineWrenchScrewdriver,
};

const colorMap = {
  cyan: {
    border: "hover:border-cyan-400/40",
    icon: "text-cyan-300",
    iconBg: "bg-cyan-400/10",
  },
  indigo: {
    border: "hover:border-indigo-400/40",
    icon: "text-indigo-300",
    iconBg: "bg-indigo-400/10",
  },
  emerald: {
    border: "hover:border-emerald-400/40",
    icon: "text-emerald-300",
    iconBg: "bg-emerald-400/10",
  },
};

function SkillCategory({ title, skills, color }) {
  const Icon = iconMap[title];
  const theme = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8 }}
      className={`group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-2xl transition-all duration-300 ${theme.border}`}
    >
      {/* Header */}

      <div className="mb-8 flex items-center gap-4">
        <div className={`rounded-2xl p-4 ${theme.iconBg}`}>
          <Icon className={`text-3xl ${theme.icon}`} />
        </div>

        <div>
          <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="text-sm text-slate-400">
            {skills.length} Technologies
          </p>
        </div>
      </div>

      {/* Skills */}

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={index}
            color={color}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCategory;