import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const navLinks = ["About", "Skills", "Projects", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid sm:grid-cols-3 gap-10 border-b border-white/10">

        {/* Brand */}
        <div className="space-y-4">
          <p className="text-3xl text-white" style={{ fontFamily: "var(--font-anton)" }}>
            Harsh <span className="text-emerald-400">Verma</span>
          </p>
          <p className="text-stone-400 text-sm leading-relaxed" style={{ fontFamily: "var(--font-geist)" }}>
            Full-Stack Developer building production-ready web apps with React, Node.js & MongoDB.
          </p>
          <div className="flex gap-3 pt-1">
            {[
              { href: "https://github.com/Harshverma2608", icon: <GithubIcon size={16} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/harshverma2608/", icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
              { href: "mailto:harshkumarverma26@gmail.com", icon: <Mail size={16} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-stone-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p
            className="text-white text-xs tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Quick Links
          </p>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-stone-400 hover:text-emerald-400 text-sm transition-colors flex items-center gap-2 group"
                  style={{ fontFamily: "var(--font-geist)" }}
                >
                  <span className="w-4 h-px bg-stone-600 group-hover:bg-emerald-500 group-hover:w-6 transition-all duration-200 inline-block" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <p
            className="text-white text-xs tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Contact
          </p>
          <ul className="space-y-3">
            {[
              { label: "harshkumarverma26@gmail.com", href: "mailto:harshkumarverma26@gmail.com" },
              { label: "+91 7454836617", href: "tel:+917454836617" },
              { label: "Mathura, UP, India", href: null },
            ].map(({ label, href }) =>
              href ? (
                <li key={label}>
                  <a
                    href={href}
                    className="text-stone-400 hover:text-emerald-400 text-sm transition-colors"
                    style={{ fontFamily: "var(--font-geist)" }}
                  >
                    {label}
                  </a>
                </li>
              ) : (
                <li key={label} className="text-stone-500 text-sm" style={{ fontFamily: "var(--font-geist)" }}>
                  {label}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-stone-600 text-xs" style={{ fontFamily: "var(--font-geist)" }}>
          © {new Date().getFullYear()} Harsh Verma. All rights reserved.
        </p>
        <p className="text-stone-600 text-xs" style={{ fontFamily: "var(--font-geist)" }}>
          Built with <span className="text-emerald-500">React</span> · <span className="text-emerald-500">Node.js</span> · <span className="text-emerald-500">MongoDB</span>
        </p>
      </div>
    </footer>
  );
}
