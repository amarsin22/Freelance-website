import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is the resume ATS-friendly?",
    answer:
      "Yes. All resumes are optimized for Applicant Tracking Systems using proper keywords, formatting, and structure.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 2–3 working days depending on the selected plan.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes. Revisions are included based on the plan you choose. Premium plans include unlimited revisions.",
  },
  {
    question: "Is this service suitable for freshers?",
    answer:
      "Absolutely. I specialize in helping freshers build strong resumes and LinkedIn profiles even with limited experience.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg font-semibold">{faq.question}</h3>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-slate-300 mt-3"
          >
            {faq.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 md:px-20 bg-slate-950 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
