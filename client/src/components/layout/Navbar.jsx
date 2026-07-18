import { useEffect, useState } from "react";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <nav
          className={`mt-5 flex h-16 items-center justify-between rounded-2xl border px-6 transition-all duration-300 ${
            isScrolled
              ? "border-white/15 bg-slate-900/80 shadow-2xl backdrop-blur-xl"
              : "border-white/10 bg-white/5 backdrop-blur-lg"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-wide text-white transition-transform duration-300 hover:scale-105"
          >
            Kakul<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <Button variant="primary">
              Resume
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <HiOutlineXMark size={24} />
            ) : (
              <HiOutlineBars3BottomRight size={24} />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050816]/95 backdrop-blur-xl md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-semibold text-white transition-colors duration-300 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}

            <Button
              variant="primary"
              className="mt-4"
              onClick={closeMenu}
            >
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;