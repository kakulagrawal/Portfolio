import { motion } from "framer-motion";

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Aurora Glow */}
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

      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-18%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top Radial Light */}
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,.18),transparent_70%)]" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent" />

      {/* Floating Particles */}
      {Array.from({ length: 24 }).map((_, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0.2,
            y: 0,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            y: [-25, 25, -25],
          }}
          transition={{
            duration: 4 + (index % 5),
            repeat: Infinity,
            delay: index * 0.2,
          }}
          className="absolute h-1 w-1 rounded-full bg-cyan-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
    </div>
  );
}

export default HeroBackground;