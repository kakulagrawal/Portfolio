import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const contactDetails = [
  {
    icon: FiMail,
    title: "Email",
    value: "kakulagrawal@example.com",
    href: "mailto:kakulagrawal32@gmail.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+91 8175986553",
    href: "tel:+918175986553",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Gorakhpur, Uttar Pradesh, India",
  },
];

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/kakulagrawal",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/kakul-agrawal-a379b3191/",
    label: "LinkedIn",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/KakulAgrawal/",
    label: "LeetCode",
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Contact Info
      </p>

      <h3 className="mb-4 text-3xl font-bold text-white">
        Let's Build Something Amazing
      </h3>

      <p className="mb-10 leading-8 text-slate-400">
        Whether you have an opportunity, a freelance project, or just want to
        connect, I'd love to hear from you.
      </p>

      <div className="space-y-6">
        {contactDetails.map(({ icon: Icon, title, value, href }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
              <Icon size={22} />
            </div>

            <div>
              <p className="text-sm text-slate-500">{title}</p>

              {href ? (
                <a
                  href={href}
                  className="text-white transition hover:text-cyan-400"
                >
                  {value}
                </a>
              ) : (
                <p className="text-white">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <Icon size={22} />
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;