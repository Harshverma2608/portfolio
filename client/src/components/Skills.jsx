import { SectionLabel } from "./About";

const skillGroups = [
  {
    label: "Frontend",
    emoji: "🎨",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    color: "green",
  },
  {
    label: "Backend & Database",
    emoji: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
    color: "teal",
  },
  {
    label: "Tools & Core",
    emoji: "🛠️",
    skills: ["Git & GitHub", "Postman", "VS Code", "Vercel", "Problem Solving", "Clean Code"],
    color: "amber",
  },
];

const tagColor = {
  green: "tag-green",
  teal: "tag-teal",
  amber: "tag-amber",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-8 section-bg">
      <div className="max-w-7xl mx-auto">
        <SectionLabel eyebrow="What I Know">Skills</SectionLabel>

        <div className="grid sm:grid-cols-3 gap-6">
          {skillGroups.map(({ label, emoji, skills, color }) => (
            <div
              key={label}
              className="p-7 bg-white rounded-sm border border-stone-100 card-shadow hover:border-emerald-300 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{emoji}</span>
                <h3
                  className="text-sm font-bold text-[#1a1a2e] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className={`px-3 py-1 rounded-sm text-xs font-medium ${tagColor[color]}`}
                    style={{ fontFamily: "var(--font-geist)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
