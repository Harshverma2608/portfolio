import { GraduationCap, Briefcase, Users } from "lucide-react";

export function SectionLabel({ eyebrow, children }) {
  return (
    <div className="space-y-2 mb-12">
      <p
        className="text-emerald-600 text-xs tracking-[0.35em] uppercase flex items-center gap-3"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        <span className="w-8 h-px bg-emerald-500 inline-block" />
        {eyebrow || "Portfolio"}
      </p>
      <h2
        className="text-[#1a1a2e] leading-tight"
        style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 5vw, 3rem)" }}
      >
        {children}
      </h2>
    </div>
  );
}

const stats = [
  { num: "3+", label: "Live Projects" },
  { num: "1+", label: "Year Building" },
  { num: "7+", label: "Technologies" },
  { num: "100%", label: "Dedication" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-8 bg-[#f5f4f0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT — Photo with frame */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
              {/* Frame accent */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-emerald-300 rounded-sm pointer-events-none" />
              <img
                src="/avatar.png"
                alt="Harsh Verma"
                className="w-full h-full object-cover object-top rounded-sm shadow-2xl"
              />
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#1a1a2e] text-white px-6 py-4 rounded-sm shadow-xl">
                <p className="text-3xl font-bold text-emerald-400" style={{ fontFamily: "var(--font-anton)" }}>1+</p>
                <p className="text-xs tracking-widest uppercase text-white/60 mt-1" style={{ fontFamily: "var(--font-oswald)" }}>Year Experience</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <SectionLabel eyebrow="Who I Am">About Me</SectionLabel>

            <p
              className="text-stone-600 leading-relaxed mb-6 text-base"
              style={{ fontFamily: "var(--font-unna)" }}
            >
              I'm an MCA student at <span className="text-[#1a1a2e] font-semibold">GLA University, Mathura</span> with
              hands-on experience shipping production-ready applications. I work across the full stack —
              React on the client, Node.js on the server, MongoDB or MySQL for data.
            </p>
            <p
              className="text-stone-500 leading-relaxed mb-10 text-base"
              style={{ fontFamily: "var(--font-unna)" }}
            >
              I care about clean code, good architecture, and actually shipping things that work.
              Seeking an <span className="text-emerald-600 font-semibold">entry-level Software Developer</span> role
              where I can grow fast and contribute from day one.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map(({ num, label }) => (
                <div key={label} className="text-center p-4 bg-white rounded-sm shadow-sm border border-stone-100">
                  <p className="text-2xl font-bold text-emerald-600" style={{ fontFamily: "var(--font-anton)" }}>{num}</p>
                  <p className="text-[11px] text-stone-400 mt-1 tracking-wide uppercase" style={{ fontFamily: "var(--font-oswald)" }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="space-y-3">
              {[
                { icon: <GraduationCap size={16} />, text: "MCA — GLA University (CPI: 7.78)  ·  BCA — RATM (72.4%)" },
                { icon: <Briefcase size={16} />, text: "Full-Stack Development · REST APIs · Scalable Web Apps" },
                { icon: <Users size={16} />, text: "Core Coordinator, SRIJAN Fest — led 20+ volunteers, 1,000+ attendees" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-sm text-stone-500">
                  <span className="text-emerald-500 mt-0.5 shrink-0">{icon}</span>
                  <span style={{ fontFamily: "var(--font-geist)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
