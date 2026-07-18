import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../common/Button";
import HeroStats from "./HeroStats";
import HeroSocials from "./HeroSocials";

function HeroContent() {
  return (
    <div className="max-w-2xl">
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
        </span>

        <span className="text-sm font-medium tracking-wide text-cyan-300">
          Available for Work
        </span>
      </motion.div>

      {/* Greeting */}

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-5 text-lg font-medium text-cyan-400"
      >
        Hello, I'm
      </motion.p>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-['Space_Grotesk'] text-6xl font-bold leading-[0.95] md:text-7xl xl:text-8xl"
      >
        <span className="block text-white">Kakul</span>

        <span className="block bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
          Agrawal
        </span>
      </motion.h1>

      {/* Headline */}

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-10 max-w-xl font-['Space_Grotesk'] text-3xl font-bold leading-snug text-white md:text-4xl"
      >
        Building scalable
        <br />

        <span className="text-cyan-300">
          digital experiences.
        </span>
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 max-w-xl text-lg leading-8 text-slate-400"
      >
        Full Stack Developer passionate about crafting modern,
        scalable, and high-performance web applications with
        beautiful interfaces and robust backend architecture.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="mt-12 flex flex-wrap gap-5"
      >
        <Button className="group rounded-2xl px-8 py-4">
          View Projects

          <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>

        <Button
          variant="secondary"
          className="rounded-2xl px-8 py-4"
        >
          Contact Me
        </Button>
      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16"
      >
        <HeroStats />
      </motion.div>

      {/* Social */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95 }}
        className="mt-12"
      >
        <HeroSocials />
      </motion.div>
    </div>
  );
}

export default HeroContent;