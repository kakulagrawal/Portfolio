import { motion } from "framer-motion";
import Container from "../common/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroAvatar from "./HeroAvatar";


function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden"
    >
      {/* Background */}
      <HeroBackground />

      {/* Aurora Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,.14),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(139,92,246,.12),transparent_40%)]" />

      <Container className="relative z-10">
        <div className="flex min-h-screen items-center pt-6 pb-10">
          <div className="grid w-full items-center gap-16 xl:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="order-2 max-w-2xl xl:order-1"
            >
              <HeroContent />
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 60,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              className="order-1 flex justify-center xl:order-2 xl:justify-end xl:-translate-y-25"
            >
              <HeroAvatar />
            </motion.div>
          </div>
        </div>
      </Container>

      
    </section>
  );
}

export default Hero;