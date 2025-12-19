import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Freelancing Website",
    description:
      "A premium freelancing website built with React to showcase services, testimonials, and contact options.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://vercel.com/amarsmy2201-gmailcoms-projects/freelance-website/6grd1sFncuks8AiTUzeBtbbPDSRu",
    github: "https://github.com/amarsin22",
  },
  {
    title: "React Frontend Dashboard",
    description:
      "A responsive dashboard with reusable components, animations, and clean UI design.",
    tech: ["React", "Tailwind CSS"],
    live: "https://phonepe-expense-tracker.vercel.app/",
    github: "https://github.com/amarsin22",
  },
  {
    title: "Personel Portfolio",
    description:
      "A frontend tool to analyze resume structure and provide ATS-friendly suggestions.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://new-portfolio-chi-tawny.vercel.app/",
    github: "https://github.com/amarsin22",
  },
  {
    title: "AI Email Responder",
    description:
      "A frontend tool to analyze resume structure and provide ATS-friendly suggestions.",
    tech: ["Streamlit", "Python", "OpenAI API"],
    live: "https://ai-email-responder1-gappfekpnjczhdc6zj6dj3p.streamlit.app/",
    github: "https://github.com/amarsin22",
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-slate-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-4">
        Projects & Portfolio
      </h2>

      <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
        A selection of projects that demonstrate my frontend skills and practical experience.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-black/40 backdrop-blur-xl
                       border border-white/10
                       rounded-2xl p-6
                       transition-all duration-300
                       flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-slate-300 text-sm mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="bg-white/10 text-slate-300 text-xs px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-auto flex gap-4">
              <a
                href={project.live}
                className="flex-1 text-center
                           bg-sky-400 hover:bg-sky-300
                           text-slate-900 px-4 py-2
                           rounded-lg font-semibold
                           transition-all duration-300"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                className="flex-1 text-center
                           bg-white/10 hover:bg-white/20
                           px-4 py-2 rounded-lg font-semibold
                           transition-all duration-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
