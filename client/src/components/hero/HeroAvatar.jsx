import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { HiSparkles } from "react-icons/hi2";

import avatar from "../../assets/avatar.png";

import GlowingRings from "./GlowingRings";
import OrbitingIcons from "./OrbitingIcons";

const HeroAvatar = () => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 18,
  });

  const springRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 18,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * -16;

      rotateX.set(y);
      rotateY.set(x);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX, rotateY]);

  return (
    <div className="hero-avatar-wrapper relative flex items-center justify-center">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-[130px]"
      />

      {/* Holographic Rings */}
      <GlowingRings />

      {/* Orbiting Icons */}
      <OrbitingIcons />

      {/* Avatar Card */}
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformPerspective: 1500,
        }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20"
      >
        <div className="glass-card card-shine relative overflow-hidden rounded-[36px] bg-white/5 p-5">

          {/* Reflection */}
          <motion.div
            animate={{
              x: [-420, 520],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 h-full w-24 -skew-x-12 bg-white/10 blur-xl"
          />

          {/* Avatar */}
          <div className="relative overflow-hidden rounded-[28px]">

            <img
              src={avatar}
              alt="Kakul Agrawal"
              draggable={false}
              className="avatar-neon h-[460px] w-[340px] object-cover select-none"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

          </div>

          {/* Available Badge */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="floating-badge absolute left-5 top-5 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-2.5 w-2.5 rounded-full rounded-full bg-emerald-400 shadow-[0_0_18px_#34d399]" />

            <span className="text-sm font-medium text-white">
              Available for Work
            </span>
          </motion.div>

          {/* Bottom Info Card */}
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="absolute bottom-7 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900/55 p-5 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                  Kakul Agrawal
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Full Stack Developer
                </p>

              </div>

              <motion.div
                animate={{
                  rotate: [0, 20, -20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="rounded-full bg-cyan-400/10 p-4"
              >
                <HiSparkles className="text-2xl text-cyan-300" />
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Floating Shadow */}
        <div className="hero-avatar-shadow" />
      </motion.div>

    </div>
  );
};

export default HeroAvatar;