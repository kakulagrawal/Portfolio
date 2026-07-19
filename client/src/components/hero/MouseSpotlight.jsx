import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MouseSpotlight = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="mouse-spotlight"
      animate={{
        x: position.x - 250,
        y: position.y - 250,
      }}
      transition={{
        type: "spring",
        stiffness: 45,
        damping: 20,
        mass: 0.6,
      }}
    />
  );
};

export default MouseSpotlight;