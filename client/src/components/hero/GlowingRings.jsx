import { motion } from "framer-motion";

const ringTransition = (duration, reverse = false) => ({
  repeat: Infinity,
  duration,
  ease: "linear",
  ...(reverse ? { repeatType: "loop" } : {}),
});

const GlowingRings = () => {
  return (
    <>
      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.8, 0.45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-[120px]"
      />

      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={ringTransition(35)}
        className="absolute h-[470px] w-[470px] rounded-full border border-cyan-400/20"
      >
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_25px_#22d3ee]" />

        <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_#60a5fa]" />
      </motion.div>

      {/* Middle Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[420px] w-[420px] rounded-full border border-violet-500/20"
      >
        <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_20px_#8b5cf6]" />

        <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-indigo-400 shadow-[0_0_20px_#6366f1]" />
      </motion.div>

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={ringTransition(18)}
        className="absolute h-[360px] w-[360px] rounded-full border border-white/10"
      >
        <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_white]" />
      </motion.div>

      {/* Pulse Ring */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute h-[380px] w-[380px] rounded-full border border-cyan-300/30"
      />
    </>
  );
};

export default GlowingRings;