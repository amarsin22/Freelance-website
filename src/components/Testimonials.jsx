import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Fresher – Computer Science",
    feedback:
      "My resume was completely transformed. I started getting interview calls within a few weeks. The guidance was clear and very practical.",
    rating: 5,
  },
  {
    name: "Neha Verma",
    role: "Software Engineer",
    feedback:
      "LinkedIn optimization really worked. Recruiters started reaching out after the profile update. Highly recommended.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Final Year Student",
    feedback:
      "Very professional service. The resume was ATS-friendly and easy to understand. Revisions were quick and helpful.",
    rating: 4,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 text-yellow-400 mb-3">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-slate-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-4">
        What Clients Say
      </h2>

      <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
        Honest feedback from candidates I’ve helped with resumes and LinkedIn profiles.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-black/40 backdrop-blur-xl
                       border border-white/10
                       rounded-2xl p-8 shadow-xl transition-all"
          >
            <StarRating rating={item.rating} />

            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              “{item.feedback}”
            </p>

            <div className="border-t border-white/10 pt-4">
              <h4 className="font-semibold">{item.name}</h4>
              <span className="text-slate-400 text-sm">
                {item.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
