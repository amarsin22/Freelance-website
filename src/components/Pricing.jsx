import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "₹99",
    description: "Perfect for freshers getting started",
    features: [
      "ATS-friendly resume",
      "1 revision",
      "Delivery in 3 days",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹199",
    description: "Best value for most candidates",
    features: [
      "ATS-optimized resume",
      "LinkedIn profile optimization",
      "3 revisions",
      "Delivery in 2 days",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹399",
    description: "Complete career profile upgrade",
    features: [
      "Resume + LinkedIn optimization",
      "Interview preparation guidance",
      "Unlimited revisions",
      "Priority delivery",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-slate-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-4">
        Simple, Transparent Pricing
      </h2>

      <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
        Choose a plan that fits your career stage. No hidden charges.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className={`relative bg-black/40 backdrop-blur-xl
                        border rounded-2xl p-8 shadow-xl transition-all
                        ${
                          plan.popular
                            ? "border-sky-400 scale-[1.02]"
                            : "border-white/10"
                        }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2
                               bg-sky-400 text-slate-900
                               px-4 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-semibold mb-2">
              {plan.name}
            </h3>

            <p className="text-slate-400 mb-4">
              {plan.description}
            </p>

            <div className="text-3xl font-bold mb-6">
              {plan.price}
            </div>

            <ul className="space-y-3 mb-8 text-slate-300">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`block text-center px-6 py-3 rounded-xl font-semibold
                          transition-all duration-300
                          ${
                            plan.popular
                              ? "bg-sky-400 hover:bg-sky-300 text-slate-900"
                              : "bg-white/10 hover:bg-white/20"
                          }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
