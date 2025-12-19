import { motion } from "framer-motion";

const WhatsAppCTA = () => {
  return (
    <motion.a
      href="https://wa.me/+919889930940"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 
                 flex items-center gap-3
                 bg-green-500 hover:bg-green-400
                 text-white font-semibold
                 px-5 py-3 rounded-full
                 shadow-xl transition-all duration-300"
    >
      <span className="text-2xl">💬</span>
      <span className="hidden md:block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppCTA;
