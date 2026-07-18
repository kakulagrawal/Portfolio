import { motion } from "framer-motion";
import Container from "../common/Container";
import SkillCategory from "./SkillCategory";

const frontend = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 92 },
  { name: "Tailwind CSS", level: 95 },
];

const backend = [
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 90 },
  { name: "MongoDB", level: 88 },
  { name: "REST API", level: 92 },
  { name: "JWT Auth", level: 90 },
];

const tools = [
  { name: "Git", level: 90 },
  { name: "GitHub", level: 92 },
  { name: "VS Code", level: 95 },
  { name: "Postman", level: 90 },
  { name: "Cloudinary", level: 85 },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20 text-center"
        >
         

          <h2 className="font-['Space_Grotesk'] text-5xl font-bold text-white md:text-6xl">
            Technologies I
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              {" "}work with
            </span>
          </h2>

          <p className="mx-auto mt-10  text-lg leading-8 text-slate-400">
            A collection of technologies, frameworks, and tools I use
            to build modern, scalable, and high-performance applications.
          </p>
        </motion.div>

        {/* Categories */}

        <div className="grid gap-8 lg:grid-cols-3">
          <SkillCategory
            title="Frontend"
            color="cyan"
            skills={frontend}
          />

          <SkillCategory
            title="Backend"
            color="indigo"
            skills={backend}
          />

          <SkillCategory
            title="Tools"
            color="emerald"
            skills={tools}
          />
        </div>
      </Container>
    </section>
  );
}

export default Skills;