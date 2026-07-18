import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

// 👇 Put your generated portrait inside:
// src/assets/avatar.png
import avatar from "../../assets/avatar.png";

function HeroAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 },
        y: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        },
      }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Outer Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        className="absolute h-[420px] w-[420px] rounded-full border border-cyan-400/20"
      >
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]" />
      </motion.div>

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
        className="absolute h-[370px] w-[370px] rounded-full border border-indigo-500/20"
      />

      {/* Avatar Card */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.35)]">
        {/* Portrait */}
        <div className="relative overflow-hidden rounded-[28px]">
          <img
            src={avatar}
            alt="Kakul Agrawal"
            className="h-[420px] w-[330px] object-cover"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-10 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                Kakul
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Full Stack Developer
              </p>
            </div>

            <div className="rounded-full bg-cyan-400/10 p-3">
              <HiSparkles className="text-cyan-300 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroAvatar;