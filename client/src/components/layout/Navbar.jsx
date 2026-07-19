import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBars3BottomRight,
  HiOutlineXMark,
} from "react-icons/hi2";

import Container from "../common/Container";
import Button from "../common/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Coding", href: "#coding-profiles" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [active, setActive] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // Hide / Show Navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY <= 80) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active Section
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);

    const section = document.querySelector(href);

    if (!section) return;

    const navbarHeight = 95;

    const offset =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

    setActive(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[999] transition-transform duration-500 ${showNavbar
          ? "translate-y-0"
          : "-translate-y-full"
        }`}
    >
      <Container>
        <motion.nav
          initial={{
            y: -80,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className={`mt-4 flex h-[72px] items-center justify-between rounded-2xl border px-7 transition-all duration-500 ${isScrolled
              ? "border-white/10 bg-slate-900/70 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-2xl"
              : "border-white/10 bg-white/5 backdrop-blur-xl"
            }`}
        >
          {/* Logo */}

          <button
            onClick={() => handleNavClick("#home")}
            className="group flex items-center"
          >
            <span className="font-['Space_Grotesk'] text-3xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
              Kakul
            </span>

            <span className="text-3xl font-bold text-cyan-400">
              .
            </span>
          </button>

          {/* Desktop */}

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() =>
                    handleNavClick(link.href)
                  }
                  className={`relative text-[15px] font-medium transition duration-300 ${active === link.href
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                    }`}
                >
                  {link.label}

                  {active === link.href && (
                    <motion.div
                      layoutId="navbar-active"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                      className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-400"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Resume */}

          <div className="hidden lg:block">
            <Button
              href="/resume.pdf"
              className="rounded-xl px-6 shadow-lg shadow-cyan-500/20"
            >
              Resume
            </Button>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() =>
              setIsMenuOpen((prev) => !prev)
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
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            className="mt-4 rounded-3xl border border-white/10 bg-slate-900/95 p-8 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() =>
                    handleNavClick(link.href)
                  }
                  className={`text-left text-lg transition ${active === link.href
                      ? "font-semibold text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400"
                    }`}
                >
                  {link.label}
                </button>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-4 w-full">
                  Resume
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;