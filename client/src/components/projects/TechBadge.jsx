import { motion } from "framer-motion";

function TechBadge({ name }) {
  return (
    <motion.span
      whileHover={{
        y: -3,
        scale: 1.05,
      }}
      transition={{
        duration: 0.2,
      }}
      className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/20"
    >
      {name}
    </motion.span>
  );
}

export default TechBadge;