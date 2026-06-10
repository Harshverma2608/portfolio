import { Mail, Download, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Soft background blobs — warm light */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-100/60 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-5 max-w-2xl mx-auto pt-24">

        {/* Circular photo */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
            <img
              src="/avatar.png"
              alt="Harsh Verma"
              className="w-full h-full object-cover object-top scale-110"
            />
          </div>
          <span className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white shadow" />
        </div>

        {/* Open to work badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-stone-200 shadow-sm text-sm text-stone-500"
          style={{ fontFamily: "var(--font-geist)" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Open to opportunities
        </div>

        {/* Role label */}
        <p
          className="text-stone-400 text-xs tracking-[0.4em] uppercase"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Full-Stack Developer
        </p>

        {/* Name */}
        <h1
          className="leading-none text-[#1a1a2e]"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(3.5rem, 10vw, 6rem)",
          }}
        >
          HARSH{" "}
          <span className="gradient-text">VERMA</span>
        </h1>

        {/* Script tagline */}
        <p
          className="text-emerald-600 -mt-1"
          style={{ fontFamily: "var(--font-great)", fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}
        >
          Building things for the web
        </p>

        {/* Bio */}
        <p
          className="text-stone-500 text-base leading-relaxed max-w-lg"
          style={{ fontFamily: "var(--font-unna)" }}
        >
          I build production-ready applications with{" "}
          <span className="text-emerald-600 font-semibold">React.js</span>,{" "}
          <span className="text-teal-600 font-semibold">Node.js</span> &{" "}
          <span className="text-[#1a1a2e] font-semibold">MongoDB</span> —{" "}
          from idea to deployment.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-1">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-[#1a1a2e] text-white text-sm font-semibold hover:bg-emerald-600 transition-colors duration-200 shadow-lg"
            style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.06em" }}
          >
            View Projects
          </a>
          <a
            href="/Harsh_Verma_Resume.pdf"
            download
            className="px-8 py-3 rounded-full border-2 border-stone-200 bg-white text-stone-700 text-sm font-semibold flex items-center gap-2 hover:border-emerald-400 hover:text-emerald-600 transition-all duration-200 shadow-sm"
            style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.06em" }}
          >
            <Download size={14} /> Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 mt-1">
          {[
            { href: "https://github.com/Harshverma2608", icon: <GithubIcon size={18} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/harshverma2608/", icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
            { href: "mailto:harshkumarverma26@gmail.com", icon: <Mail size={18} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-stone-200 text-stone-400 hover:text-emerald-600 hover:border-emerald-300 transition-all shadow-sm"
            >
              {icon}
            </a>
          ))}
        </div>

      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-300 hover:text-emerald-500 animate-bounce transition-colors z-10"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
