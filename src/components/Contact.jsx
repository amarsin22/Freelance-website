const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 bg-slate-900 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

      <p className="text-slate-300 mb-6 max-w-xl mx-auto">
        Ready to improve your profile?  
        Prefer a quick chat or a detailed message? Choose what works for you.
      </p>

      {/* Guidance Line */}
      <p className="text-slate-400 text-sm mb-8">
        For quick questions, use{" "}
        <span className="text-green-400 font-medium">WhatsApp</span>.  
        For detailed requirements, send an{" "}
        <span className="text-sky-400 font-medium">email</span>.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/+919889930940"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-400
                     text-white px-6 py-3 rounded-xl
                     font-semibold transition"
        >
          Chat on WhatsApp
        </a>

        <a
          href="mailto:amarsmy2201@gmail.com"
          className="bg-sky-400 hover:bg-sky-300
                     text-slate-900 px-6 py-3 rounded-xl
                     font-semibold transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
