import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const baseClasses =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-7 py-3.5 font-semibold transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 text-white shadow-[0_10px_35px_rgba(34,211,238,.25)] hover:shadow-[0_15px_45px_rgba(34,211,238,.45)] hover:-translate-y-1",

    secondary:
      "border border-white/15 bg-white/5 text-white backdrop-blur-xl hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:-translate-y-1",

    outline:
      "border border-cyan-400/40 bg-transparent text-cyan-300 hover:bg-cyan-400/10 hover:text-white hover:-translate-y-1",
  };

  const content = (
    <>
      {/* Hover Shine */}
      <span className="absolute inset-0 overflow-hidden rounded-2xl">
        <span className="absolute left-[-120%] top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-[140%]" />
      </span>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}

export default Button;