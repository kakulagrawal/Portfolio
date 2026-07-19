import { motion } from "framer-motion";
import codingProfiles from "../../data/codingProfiles";
import ProfileCard from "./ProfileCard";

const CodingProfiles = () => {
  return (
    <section
      id="coding-profiles"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Building Logic,
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              One Problem at a Time
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I actively improve my problem-solving skills, contribute code,
            explore new technologies, and maintain a consistent learning
            journey across multiple coding platforms.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ProfileCard {...profile} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;