import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/kakulagrawal",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/kakul-agrawal-a379b3191/",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:kakulagrawal14@gmail.com",
    label: "Email",
  },
  {
    icon: FaFileAlt,
    href: "/resume.pdf",
    label: "Resume",
  },
];

function HeroSocials() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {socials.map(({ icon: Icon, href, label }, index) => (
        <motion.a
          key={label}
          href={href}
          target={
            href.startsWith("http")
              ? "_blank"
              : undefined
          }
          rel={
            href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1 + index * 0.1,
            duration: 0.45,
          }}
          whileHover={{
            y: -6,
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300"
          aria-label={label}
        >
          {/* Glow */}

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-indigo-500/0 to-violet-500/0 transition-all duration-500 group-hover:from-cyan-400/20 group-hover:via-indigo-500/10 group-hover:to-violet-500/20" />

          {/* Icon */}

          <Icon className="relative z-10 text-xl text-slate-300 transition-colors duration-300 group-hover:text-cyan-300" />
        </motion.a>
      ))}
    </div>
  );
}

export default HeroSocials;