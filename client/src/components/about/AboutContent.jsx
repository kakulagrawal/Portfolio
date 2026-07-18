import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import Button from "../common/Button";

function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl"
    >
      {/* Small Heading */}

      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Who I Am
      </p>

      {/* Main Heading */}

      <h3 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-white md:text-5xl">
        Building products that are
        <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
          {" "}
          fast, scalable
        </span>{" "}
        and enjoyable to use.
      </h3>

      {/* Description */}

      <div className="mt-8 space-y-6 text-lg leading-8 text-slate-400">
        <p>
          I'm a Full Stack Developer who enjoys transforming ideas into
          modern web applications with clean user experiences and
          reliable backend systems.
        </p>

        <p>
          I primarily work with the MERN stack and enjoy building
          responsive interfaces, secure REST APIs, authentication
          systems, dashboards, and scalable applications from scratch.
        </p>

        <p>
          Every project I build helps me improve as an engineer. My goal
          is to continuously learn new technologies, solve meaningful
          problems, and create software that delivers real value.
        </p>
      </div>

      {/* Highlights */}

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <h4 className="mb-2 font-semibold text-white">
            Current Focus
          </h4>

          <p className="text-sm leading-7 text-slate-400">
            Building full-stack applications, mastering modern frontend
            architecture, and creating high-quality developer
            experiences.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <h4 className="mb-2 font-semibold text-white">
            Looking For
          </h4>

          <p className="text-sm leading-7 text-slate-400">
            Software engineering opportunities where I can contribute,
            learn from experienced developers, and build impactful
            products.
          </p>
        </div>
      </div>

      {/* CTA */}

      <div className="mt-12">
        <Button className="group">
          Let's Work Together

          <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
}

export default AboutContent;