import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
  HiOutlineCheckBadge,
  HiOutlineSparkles,
} from "react-icons/hi2";

const highlights = [
  {
    icon: HiOutlineCodeBracket,
    title: "Primary Stack",
    value: "MERN Stack",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Projects",
    value: "3+ Completed",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "DSA",
    value: "600+ Problems",
  },
  {
    icon: HiOutlineBriefcase,
    title: "Experience",
    value: "Building Full Stack Apps",
  },
];

function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[36px] bg-cyan-500/10 blur-3xl" />

      {/* Card */}

      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        {/* Top */}

        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Current Position
            </p>

            <h3 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold text-white">
              Full Stack Developer
            </h3>
          </div>

          <div className="rounded-2xl bg-cyan-400/10 p-4">
            <HiOutlineSparkles className="text-3xl text-cyan-300" />
          </div>
        </div>

        {/* Grid */}

        <div className="grid gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -4,
                }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-400/30"
              >
                <div className="rounded-xl bg-cyan-400/10 p-3">
                  <Icon className="text-2xl text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    {item.title}
                  </p>

                  <h4 className="mt-1 font-semibold text-white">
                    {item.value}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Status */}

        <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <HiOutlineCheckBadge className="text-lg text-emerald-400" />

                <h4 className="font-semibold text-white">
                  Available for Opportunities
                </h4>
              </div>

              <p className="mt-1 text-sm text-slate-400">
                Open to full-time software engineering roles and exciting
                freelance projects.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Border */}

        <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/5" />
      </div>
    </motion.div>
  );
}

export default AboutCard;