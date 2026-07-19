import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";
import MouseSpotlight from "./MouseSpotlight";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* ===========================
            Base Background
      =========================== */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* ===========================
            Mouse Spotlight
      =========================== */}
      <MouseSpotlight />

      {/* ===========================
            Floating Particles
      =========================== */}
      <FloatingParticles />

      {/* ===========================
            Aurora Glow - Left
      =========================== */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] top-[-15%] h-[650px] w-[650px] rounded-full bg-cyan-500/15 blur-[140px]"
      />

      {/* ===========================
            Aurora Glow - Right
      =========================== */}
      <motion.div
        animate={{
          x: [0, -80, 50, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-12%] top-[8%] h-[600px] w-[600px] rounded-full bg-indigo-500/15 blur-[140px]"
      />

      {/* ===========================
            Aurora Glow - Bottom
      =========================== */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-18%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]"
      />

      {/* ===========================
            Animated Grid
      =========================== */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ===========================
            Top Radial Light
      =========================== */}
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,.18),transparent_70%)]" />

      {/* ===========================
            Noise Overlay
      =========================== */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* ===========================
            Bottom Fade
      =========================== */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-transparent" />

      {/* ===========================
            Vignette
      =========================== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </div>
  );
};

export default HeroBackground;