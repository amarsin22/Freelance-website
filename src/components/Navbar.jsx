import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900 text-white border-b border-white/10">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-xl font-bold">Amar Singh</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <a href="#services" className="hover:text-sky-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sky-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="bg-slate-800 px-8 py-4 space-y-4">
          <li>
            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-sky-400 transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-sky-400 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-sky-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
