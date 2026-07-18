import { motion } from "framer-motion";
import Container from "../common/Container";
import AboutContent from "./AboutContent";
import AboutCard from "./AboutCard";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-white md:text-6xl">
            Turning ideas into
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              digital reality
            </span>
          </h2>
        </motion.div>

        {/* Content */}

        <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_0.85fr]">
          <AboutContent />
          <AboutCard />
        </div>
      </Container>
    </section>
  );
}

export default About;