import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const ProfileCard = ({
  title,
  username,
  description,
  icon: Icon,
  color,
  border,
  glow,
  button,
  url,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 ${border} ${glow} hover:shadow-2xl`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* Icon */}
      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-3xl ${color}`}
      >
        <Icon />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Username */}
      <p className="mt-2 text-sm text-slate-400">
        @{username}
      </p>

      {/* Description */}
      <p className="mt-5 leading-7 text-slate-300">
        {description}
      </p>

      {/* Button */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition-all duration-300 ${button}`}
      >
        View Profile

        <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </motion.div>
  );
};

export default ProfileCard;