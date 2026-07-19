import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
} from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const HeroContent = () => {
  return (
    <motion.div
      className="hero-content"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Badge */}

      <motion.div variants={item}>
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl">
          <HiSparkles className="text-cyan-300" />

          <span className="text-sm tracking-wide text-cyan-200">
            Available for Full Stack Opportunities
          </span>
        </div>
      </motion.div>

      {/* Heading */}

      <motion.h1
        variants={item}
        className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
          Kakul Agrawal
        </span>
      </motion.h1>

      {/* Typewriter */}

      <motion.div
        variants={item}
        className="mt-6 text-2xl font-semibold text-violet-300 lg:text-3xl"
      >
        <Typewriter
          words={[
            "Full Stack Developer",
            "MERN Stack Developer",
            "React Developer",
            "Backend Developer",
            "Problem Solver",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1700}
        />
      </motion.div>

      {/* Description */}

      <motion.p
        variants={item}
        className="mt-8 max-w-xl text-lg leading-8 text-slate-300"
      >
        I build modern, scalable, and high-performance web applications using
        the MERN stack. I enjoy creating beautiful user interfaces, writing
        clean backend APIs, and solving real-world problems with code.
      </motion.p>

      {/* Buttons */}

      <motion.div
        variants={item}
        className="mt-10 flex flex-wrap gap-5"
      >
        <a
          href="#projects"
          className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,211,238,.45)]"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-xl border border-cyan-400/40 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Stats */}

      <motion.div
        variants={item}
        className="mt-12 flex flex-wrap gap-8"
      >
        <div>
          <h3 className="text-3xl font-bold text-cyan-300">10+</h3>
          <p className="mt-1 text-slate-400">
            Projects
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-cyan-300">500+</h3>
          <p className="mt-1 text-slate-400">
            DSA Problems
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-cyan-300">MERN</h3>
          <p className="mt-1 text-slate-400">
            Primary Stack
          </p>
        </div>
      </motion.div>

      {/* Social Links */}

      <motion.div
        variants={item}
        className="mt-12 flex flex-wrap items-center gap-5"
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
        >
          <FaInstagram />
        </a>

        <a
          href="https://leetcode.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
        >
          <SiLeetcode />
        </a>

        <a
          href="https://www.geeksforgeeks.org/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
        >
          <SiGeeksforgeeks />
        </a>

        <a
          href="https://www.codechef.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
        >
          <SiCodechef />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;