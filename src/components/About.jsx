import { motion } from "framer-motion";

const highlights = [
  {
    title: "100+ Profiles Optimized",
    desc: "Resumes and LinkedIn profiles improved for ATS and recruiters.",
  },
  {
    title: "Fresher-Friendly",
    desc: "Special focus on freshers and early-career professionals.",
  },
  {
    title: "Result-Oriented",
    desc: "Focused on interview calls, not just visual design.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-24 px-6 md:px-20 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: About Me Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-slate-300 mb-4">
            Hi, I’m <span className="text-white font-semibold">Amar Singh</span>.  
            I help freshers and professionals improve their resumes, LinkedIn
            profiles, and interview confidence so they can get more interview calls.
          </p>

          <p className="text-slate-400 mb-6">
            I focus on clarity, ATS optimization, and recruiter expectations.
            My goal is simple: help you present yourself confidently and professionally.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block text-sky-400 font-medium hover:underline"
          >
            Let’s work together →
          </a>
        </motion.div>

        {/* Right: Interactive Highlights */}
        <div className="grid gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 border border-white/10 rounded-xl p-6 transition-all"
            >
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
