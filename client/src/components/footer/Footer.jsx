import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

const Footer = () => {
  const navLinks = [
    {
      title: "Home",
      href: "#hero",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/kakulagrawal",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/kakul-agrawal-a379b3191/",
    },
    {
      icon: SiLeetcode,
      href: "https://leetcode.com/u/KakulAgrawal/",
    },
    {
      icon: SiGeeksforgeeks,
      href: "https://www.geeksforgeeks.org/profile/kakulagrcs4i",
    },
    {
      icon: FiMail,
      href: "mailto:kakulagrawal32@gmail.com",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-black text-transparent">
            Kakul Agrawal
          </h2>

          <p className="mt-3 text-slate-400">
            Full Stack Developer • MERN Stack • Problem Solver
          </p>

          <p className="mt-6 max-w-2xl leading-8 text-slate-500">
            Passionate about building modern, scalable web applications
            with clean architecture, smooth user experiences, and
            efficient backend systems.
          </p>

          {/* Navigation */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-slate-400 transition duration-300 hover:text-cyan-400"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -6,
                  scale: 1.15,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xl text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Bottom */}
          <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Kakul Agrawal. All rights reserved.
            </p>

            <p className="text-sm text-slate-500">
              Built with React, Tailwind CSS & Framer Motion
            </p>

            <button
              onClick={scrollToTop}
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black"
            >
              <FiArrowUp size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;