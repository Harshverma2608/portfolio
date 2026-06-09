import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 nav-blur ${
        scrolled
          ? "bg-white/95 shadow-sm border-b border-stone-100"
          : "bg-[#f5f4f0]/80 border-b border-stone-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          <span className={scrolled ? "text-[#1a1a2e]" : "text-[#1a1a2e]"}>Harsh</span>
          <span className="gradient-text"> Verma</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => {
            const id = l === "Home" ? "hero" : l.toLowerCase();
            return (
              <li key={l}>
                <a
                  href={`#${id}`}
                  className="text-sm font-medium tracking-widest uppercase transition-colors duration-200 hover:text-emerald-600 text-stone-500"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {l}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Contact button */}
        <a
          href="#contact"
          className="hidden md:inline-flex px-6 py-2.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-200 bg-[#1a1a2e] text-white hover:bg-emerald-600 shadow-md"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Hire Me
        </a>

        <button
          className="md:hidden text-stone-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1a1a2e] border-t border-white/10 px-8 pb-6 pt-3 flex flex-col gap-5">
          {links.map((l) => {
            const id = l === "Home" ? "hero" : l.toLowerCase();
            return (
              <a
                key={l}
                href={`#${id}`}
                className="text-white/80 hover:text-emerald-400 text-sm tracking-widest uppercase"
                style={{ fontFamily: "var(--font-oswald)" }}
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            );
          })}
          <a
            href="#contact"
            className="text-sm font-semibold tracking-widest uppercase text-white bg-emerald-500 px-5 py-2.5 text-center rounded-sm"
            style={{ fontFamily: "var(--font-oswald)" }}
            onClick={() => setOpen(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
