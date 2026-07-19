import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Let's Work
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Have an opportunity, project, or idea? Feel free to reach out.
            I'm always excited to collaborate on meaningful work.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;