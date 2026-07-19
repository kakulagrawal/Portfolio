import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, index) => ({
      id: index,
      size: Math.random() * 5 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 6,
      x: (Math.random() - 0.5) * 120,
      y: (Math.random() - 0.5) * 120,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="floating-particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, particle.x, 0],
            y: [0, particle.y, 0],
            scale: [1, 1.8, 1],
            opacity: [
              particle.opacity,
              particle.opacity + 0.4,
              particle.opacity,
            ],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;