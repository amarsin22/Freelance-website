import { motion } from "framer-motion";

const steps = [
  {
    title: "Share Your Details",
    description:
      "You share your resume, LinkedIn profile, and career goals with me.",
  },
  {
    title: "Profile Analysis",
    description:
      "I analyze your profile, keywords, and gaps based on industry standards.",
  },
  {
    title: "Optimization",
    description:
      "I optimize your resume and LinkedIn profile to be ATS and recruiter friendly.",
  },
  {
    title: "Delivery & Revisions",
    description:
      "You receive the final version along with revisions as per your plan.",
  },
];

const Process = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-slate-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-slate-800 p-6 rounded-xl text-center hover:scale-[1.02] transition-all duration-300"
          >
            <div className="text-sky-400 text-3xl font-bold mb-4">
              {index + 1}
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {step.title}
            </h3>

            <p className="text-slate-300 text-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
