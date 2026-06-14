"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Inicio", href: "#" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 text-white transition-all duration-500
        ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}
      `}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-10 flex items-center justify-between h-16">
        
        {/* Logo / Marca */}
        <a  id="#" href="#hero" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          ManoTech<span className="text-green-400">.</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-base transition-colors"
            >
              {label}
            </a>
          ))}
          
        </div>
      )}
    </header>
  );
}