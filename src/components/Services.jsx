import { motion } from "framer-motion";

const services = [
  {
    title: "ATS-Friendly Resume Writing",
    short: "Resumes that pass ATS scans and get noticed.",
    details:
      "Clean, role-specific resumes optimized with the right keywords and formatting recruiters expect.",
  },
  {
    title: "LinkedIn Profile Optimization",
    short: "Profiles that attract recruiter attention.",
    details:
      "Optimized headlines, summaries, and keywords to improve visibility and inbound recruiter messages.",
  },
  {
    title: "Interview Preparation",
    short: "Confidence for real interviews.",
    details:
      "Mock interviews, HR questions, and practical guidance to help you answer clearly and confidently.",
  },
  {
    title: "Cold Email Writing",
    short: "Emails that get replies, not ignored.",
    details:
      "Personalized cold emails crafted to improve open rates and responses for jobs, freelancing, or outreach.",
  },
  {
    title: "React Frontend Web Development",
    short: "Modern, responsive frontend projects.",
    details:
      "Design and development of professional React-based websites with clean UI, responsiveness, and best practices.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-slate-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-4">
        My Services
      </h2>

      <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
        Career-focused services designed to improve visibility, confidence, and real results.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group bg-black/40 backdrop-blur-xl
                       border border-white/10
                       rounded-2xl p-6
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-slate-300 mb-4">
              {service.short}
            </p>

            {/* Reveal on hover */}
            <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {service.details}
            </p>

            <div className="mt-6 text-sky-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn more →
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
