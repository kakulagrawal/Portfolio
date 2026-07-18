import { useEffect, useState } from "react";
import {
  HiOutlineBars3BottomRight,
  HiOutlineXMark,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((item) =>
        document.querySelector(item.href)
      );

      let current = "#home";

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
          current = `#${section.id}`;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[999]">
      <Container>
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className={`mt-4 flex h-[72px] items-center justify-between rounded-2xl border px-7 transition-all duration-500 ${
            isScrolled
              ? "border-white/10 bg-slate-900/70 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-2xl"
              : "border-white/10 bg-white/5 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}

          <a
            href="#home"
            className="group flex items-center"
          >
            <span className="font-['Space_Grotesk'] text-3xl font-bold text-white transition-all duration-300 group-hover:text-cyan-300">
              Kakul
            </span>

            <span className="text-3xl font-bold text-cyan-400">
              .
            </span>
          </a>

          {/* Desktop */}

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative text-[15px] font-medium transition-all duration-300 ${
                    active === link.href
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}

                  {active === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-400"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume */}

          <div className="hidden lg:block">
            <Button className="rounded-xl px-6 shadow-lg shadow-indigo-500/30">
              Resume
            </Button>
          </div>

          {/* Mobile */}

          <button
            onClick={() =>
              setIsMenuOpen(!isMenuOpen)
            }
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-white lg:hidden"
          >
            {isMenuOpen ? (
              <HiOutlineXMark size={25} />
            ) : (
              <HiOutlineBars3BottomRight size={25} />
            )}
          </button>
        </motion.nav>

        {/* Mobile Menu */}

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 rounded-3xl border border-white/10 bg-slate-900/95 p-8 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  {link.label}
                </a>
              ))}

              <Button
                className="mt-3 w-full"
                onClick={() =>
                  setIsMenuOpen(false)
                }
              >
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;