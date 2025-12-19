import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 md:px-20
                 animated-gradient hero-noise hero-glow text-white"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10
                     bg-black/40 backdrop-blur-xl
                     rounded-2xl p-8 md:p-12
                     shadow-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Resume & LinkedIn <br />
            <span className="text-sky-400">Optimization</span>
          </h1>

          <p className="text-slate-300 text-lg mb-6 max-w-xl">
            I help freshers and professionals get more interview calls with
            ATS-optimized resumes and recruiter-friendly LinkedIn profiles.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="bg-sky-400 hover:bg-sky-300
                         hover:scale-[1.02]
                         text-slate-900 px-6 py-3
                         rounded-xl font-semibold
                         transition-all duration-300"
            >
              Get Started
            </a>

            <span className="text-slate-400 text-sm">
              ✔ Trusted by 100+ candidates
            </span>
          </div>
        </motion.div>

        {/* Right Side (Intentional Empty Space for Balance) */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default Hero;
